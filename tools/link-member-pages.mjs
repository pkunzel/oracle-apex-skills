import fs from "node:fs/promises";
import path from "node:path";

const projectRoot = process.cwd();
const root = process.env.APEX_REFERENCE_ROOT
  ? path.resolve(process.env.APEX_REFERENCE_ROOT)
  : path.resolve(projectRoot, "skills", "apex-26-1-api", "references");
const metaDir = process.env.APEX_REFERENCE_META_DIR
  ? path.resolve(process.env.APEX_REFERENCE_META_DIR)
  : path.resolve(projectRoot, "meta");
const manifestPath = path.join(metaDir, "source-index.json");

const beginMarker = "<!-- BEGIN GENERATED MEMBER LINKS -->";
const endMarker = "<!-- END GENERATED MEMBER LINKS -->";

function rel(fromFile, targetFile) {
  return path.relative(path.dirname(fromFile), targetFile).replace(/\\/g, "/");
}

async function writeText(filePath, content) {
  await fs.mkdir(path.dirname(filePath), { recursive: true });
  await fs.writeFile(filePath, content.endsWith("\n") ? content : `${content}\n`, "utf8");
}

function renderSection(pkg, packageFile) {
  const lines = [
    beginMarker,
    "",
    "## Local Member Detail Pages",
    "",
    "Generated navigation for LLM retrieval. Use the local detail page first, then follow the Oracle source link when exact wording or edge-case behavior must be verified.",
    "",
    "| Member | Kind | Local detail | Source |",
    "| --- | --- | --- | --- |"
  ];

  for (const member of pkg.members) {
    const memberFile = path.join(root, member.localFile);
    lines.push(`| ${member.title} | ${member.kind} | [local](${rel(packageFile, memberFile)}) | [Oracle](${member.sourceUrl}) |`);
  }

  lines.push("", endMarker, "");
  return lines.join("\n");
}

function replaceGeneratedSection(content, section) {
  const start = content.indexOf(beginMarker);
  const end = content.indexOf(endMarker);
  if (start >= 0 && end > start) {
    return `${content.slice(0, start).trimEnd()}\n\n${section}${content.slice(end + endMarker.length).trimStart()}`;
  }
  return `${content.trimEnd()}\n\n${section}`;
}

async function main() {
  const manifest = JSON.parse(await fs.readFile(manifestPath, "utf8"));
  let updated = 0;

  for (const pkg of manifest.plsql.packages) {
    const packageFile = path.join(root, pkg.localFile);
    const content = await fs.readFile(packageFile, "utf8");
    const section = renderSection(pkg, packageFile);
    await writeText(packageFile, replaceGeneratedSection(content, section));
    updated++;
  }

  console.log(`Updated local member links in ${updated} package pages.`);
}

main().catch(error => {
  console.error(error);
  process.exitCode = 1;
});
