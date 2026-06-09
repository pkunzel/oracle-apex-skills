import fs from "node:fs/promises";
import path from "node:path";

const projectRoot = process.cwd();
const referenceRoot = process.env.APEX_REFERENCE_ROOT
  ? path.resolve(process.env.APEX_REFERENCE_ROOT)
  : path.resolve(projectRoot, "skills", "apex-26-1-api", "references");
const dryRun = process.argv.includes("--dry-run");
const listRemaining = process.argv.includes("--list");

async function walk(dir) {
  const entries = await fs.readdir(dir, { withFileTypes: true });
  const files = [];
  for (const entry of entries) {
    const fullPath = path.join(dir, entry.name);
    if (entry.isDirectory()) {
      files.push(...await walk(fullPath));
    } else if (entry.isFile() && entry.name.endsWith(".md")) {
      files.push(fullPath);
    }
  }
  return files;
}

function sectionEnd(content, bodyStart, level) {
  const nextHeading = new RegExp(`^#{1,${level}}\\s+`, "gm");
  nextHeading.lastIndex = bodyStart;
  const match = nextHeading.exec(content);
  return match ? match.index : content.length;
}

function findPreviousSimpleSection(content, beforeIndex, level) {
  const heading = new RegExp(`^#{${level}}\\s+Simple Example\\s*$`, "gmi");
  let match;
  let last = null;
  while ((match = heading.exec(content)) && match.index < beforeIndex) {
    last = match;
  }
  if (!last) {
    return null;
  }
  const bodyStart = last.index + last[0].length;
  return content.slice(bodyStart, sectionEnd(content, bodyStart, level)).trim();
}

function codeOrBody(section) {
  const fence = section.match(/```[a-zA-Z0-9_-]*\n([\s\S]*?)```/);
  return (fence ? fence[1] : section).trim();
}

function normalizeExample(section) {
  return codeOrBody(section)
    .replace(/--.*$/gm, "")
    .replace(/\/\/.*$/gm, "")
    .replace(/\b(apex_session\.)?(create_session|delete_session)\b[\s\S]*?;/gi, "")
    .replace(/\b(declare|begin|exception|end)\b/gi, "")
    .replace(/\bwhen\s+others\s+then\b/gi, "")
    .replace(/\braise\b/gi, "")
    .replace(/sys\.dbms_output\.put_line\([^)]*\);?/gi, "")
    .replace(/l_result\s*:=/gi, "")
    .replace(/\/$/gm, "")
    .replace(/\s+/g, "")
    .replace(/;+$/g, "")
    .toLowerCase();
}

function removeMoreComplexSections(filePath, content) {
  const isGenerated = content.includes("Status: generated detailed reference.");
  const matches = [...content.matchAll(/^(#{2,6})\s+More Complex Example\s*$/gmi)];
  const removals = [];
  const reasons = [];

  for (const match of matches) {
    const level = match[1].length;
    const bodyStart = match.index + match[0].length;
    const end = sectionEnd(content, bodyStart, level);
    const complexSection = content.slice(bodyStart, end).trim();
    const simpleSection = findPreviousSimpleSection(content, match.index, level);

    if (isGenerated) {
      removals.push({ start: match.index, end });
      reasons.push("generated-fallback");
      continue;
    }

    if (
      complexSection.includes("Assuming this code runs on an Oracle APEX page where") &&
      complexSection.includes("const result =") &&
      complexSection.includes("typeof result.done")
    ) {
      removals.push({ start: match.index, end });
      reasons.push("generated-js-fallback");
      continue;
    }

    if (simpleSection && normalizeExample(simpleSection) === normalizeExample(complexSection)) {
      removals.push({ start: match.index, end });
      reasons.push("duplicate");
    }
  }

  if (!removals.length) {
    return { content, changed: false, reasons };
  }

  let updated = content;
  for (const removal of removals.sort((a, b) => b.start - a.start)) {
    const before = updated.slice(0, removal.start).replace(/[ \t]+\n$/g, "\n").replace(/\n{3,}$/g, "\n\n");
    const after = updated.slice(removal.end).replace(/^\n{3,}/g, "\n\n");
    updated = `${before}${after}`;
  }

  return { content: updated, changed: true, reasons };
}

async function main() {
  const files = await walk(referenceRoot);
  const report = {
    scanned: files.length,
    withMoreComplex: 0,
    changedFiles: 0,
    sectionsRemoved: 0,
    generatedFallbackRemoved: 0,
    duplicateRemoved: 0
    ,
    generatedJsFallbackRemoved: 0
  };
  const remaining = [];

  for (const filePath of files) {
    const original = await fs.readFile(filePath, "utf8");
    if (!/^#{2,6}\s+More Complex Example\s*$/gmi.test(original)) {
      continue;
    }

    report.withMoreComplex++;
    const result = removeMoreComplexSections(filePath, original);
    if (!result.changed) {
      remaining.push(path.relative(referenceRoot, filePath).replace(/\\/g, "/"));
      continue;
    }

    report.changedFiles++;
    report.sectionsRemoved += result.reasons.length;
    report.generatedFallbackRemoved += result.reasons.filter(reason => reason === "generated-fallback").length;
    report.generatedJsFallbackRemoved += result.reasons.filter(reason => reason === "generated-js-fallback").length;
    report.duplicateRemoved += result.reasons.filter(reason => reason === "duplicate").length;

    if (!dryRun) {
      await fs.writeFile(filePath, result.content, "utf8");
    }
  }

  console.log(`${dryRun ? "Would scan" : "Scanned"} ${report.scanned} Markdown files.`);
  console.log(`${report.withMoreComplex} files contain a More Complex Example section.`);
  console.log(`${dryRun ? "Would update" : "Updated"} ${report.changedFiles} files.`);
  console.log(`${dryRun ? "Would remove" : "Removed"} ${report.sectionsRemoved} More Complex Example sections.`);
  console.log(`Generated fallback sections: ${report.generatedFallbackRemoved}`);
  console.log(`Generated JavaScript fallback sections: ${report.generatedJsFallbackRemoved}`);
  console.log(`Duplicate curated sections: ${report.duplicateRemoved}`);
  if (listRemaining && remaining.length) {
    console.log("Remaining distinct More Complex Example sections:");
    for (const filePath of remaining) {
      console.log(`- ${filePath}`);
    }
  }
}

main().catch(error => {
  console.error(error);
  process.exitCode = 1;
});
