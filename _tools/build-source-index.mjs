import fs from "node:fs/promises";
import path from "node:path";
import https from "node:https";

const root = path.resolve(process.cwd(), "Documentation", "APEX 26.1 reference");
const metaDir = path.join(root, "_meta");
const plsqlDir = path.join(root, "PLSQL");
const jsDir = path.join(root, "JavaScript");

const urls = {
  plsqlToc: "https://docs.oracle.com/en/database/oracle/apex/26.1/aeapi/toc.htm",
  plsqlBase: "https://docs.oracle.com/en/database/oracle/apex/26.1/aeapi/",
  jsIndex: "https://docs.oracle.com/en/database/oracle/apex/26.1/aexjs/index.html",
  jsBase: "https://docs.oracle.com/en/database/oracle/apex/26.1/aexjs/"
};

function fetchText(url, redirects = 0) {
  return new Promise((resolve, reject) => {
    https.get(url, {
      headers: {
        "User-Agent": "Codex-APEX-Reference-Builder/1.0"
      }
    }, response => {
      if ([301, 302, 303, 307, 308].includes(response.statusCode ?? 0)) {
        if (redirects > 5) {
          reject(new Error(`Too many redirects for ${url}`));
          return;
        }
        const location = response.headers.location;
        if (!location) {
          reject(new Error(`Redirect without location for ${url}`));
          return;
        }
        resolve(fetchText(new URL(location, url).toString(), redirects + 1));
        return;
      }

      if ((response.statusCode ?? 0) >= 400) {
        reject(new Error(`HTTP ${response.statusCode} for ${url}`));
        return;
      }

      response.setEncoding("utf8");
      let data = "";
      response.on("data", chunk => {
        data += chunk;
      });
      response.on("end", () => resolve(data));
    }).on("error", reject);
  });
}

function decodeEntities(value) {
  return value
    .replace(/&#x([0-9a-f]+);/gi, (_, hex) => String.fromCodePoint(parseInt(hex, 16)))
    .replace(/&#([0-9]+);/g, (_, dec) => String.fromCodePoint(parseInt(dec, 10)))
    .replace(/&nbsp;/g, " ")
    .replace(/&amp;/g, "&")
    .replace(/&lt;/g, "<")
    .replace(/&gt;/g, ">")
    .replace(/&quot;/g, '"')
    .replace(/&#39;/g, "'");
}

function cleanText(html) {
  return decodeEntities(html)
    .replace(/<script[\s\S]*?<\/script>/gi, " ")
    .replace(/<style[\s\S]*?<\/style>/gi, " ")
    .replace(/<[^>]+>/g, " ")
    .replace(/\s+/g, " ")
    .trim();
}

function cleanFileName(value) {
  return value
    .replace(/[<>:"/\\|?*]+/g, "-")
    .replace(/\s+/g, "_")
    .replace(/_+/g, "_")
    .replace(/^-|-$/g, "");
}

function relativeMdLink(fromDir, targetPath) {
  return path.relative(fromDir, targetPath).replace(/\\/g, "/");
}

function sourceUrl(base, href) {
  const bareHref = href.split("#")[0];
  return new URL(bareHref || href, base).toString();
}

function anchorMatches(html) {
  return [...html.matchAll(/<a\s+href="([^"]+)"[^>]*>([\s\S]*?)<\/a>/gi)]
    .map(match => ({
      href: match[1],
      text: cleanText(match[2])
    }))
    .filter(link => link.href && link.text);
}

function parsePlsqlToc(html) {
  const packages = [];
  let currentPackage = null;

  for (const link of anchorMatches(html)) {
    const text = link.text;
    const packageMatch = text.match(/^(\d+)\s+(APEX_[A-Z0-9_]+)(\s+\(Deprecated\))?$/);

    if (packageMatch) {
      currentPackage = {
        chapter: packageMatch[1],
        name: packageMatch[2],
        deprecated: Boolean(packageMatch[3]),
        sourceUrl: sourceUrl(urls.plsqlBase, link.href),
        localFile: `PLSQL/${packageMatch[2]}.md`,
        members: []
      };
      packages.push(currentPackage);
      continue;
    }

    if (!currentPackage) {
      continue;
    }

    const memberMatch = text.match(/^(\d+(?:\.\d+)+)\s+(.+)$/);
    if (!memberMatch) {
      continue;
    }

    const memberTitle = memberMatch[2].trim();
    const typeMatch = memberTitle.match(/\b(Function|Procedure|Constant|Constants|Data Type|Data Types|Package|Example|Examples|About)\b/i);
    const nameMatch = memberTitle.match(/^([A-Z0-9_$#]+)\b/);
    const localMemberFile = `PLSQL/${currentPackage.name}/${cleanFileName(memberTitle)}.md`;

    currentPackage.members.push({
      section: memberMatch[1],
      title: memberTitle,
      name: nameMatch ? nameMatch[1] : memberTitle,
      kind: typeMatch ? typeMatch[1].toLowerCase() : "topic",
      deprecated: /\(Deprecated\)/i.test(memberTitle),
      sourceUrl: sourceUrl(urls.plsqlBase, link.href),
      localFile: localMemberFile
    });
  }

  return packages;
}

function extractJsSection(html, title) {
  const match = html.match(new RegExp(`<h3>\\s*${title}\\s*<\\/h3>\\s*<ul>([\\s\\S]*?)<\\/ul>`, "i"));
  return match ? match[1] : "";
}

function parseJsIndex(html) {
  const sections = [
    ["Namespaces", "namespace"],
    ["Interfaces", "interface"],
    ["Widgets", "widget"]
  ];

  const modules = [];
  for (const [sectionTitle, kind] of sections) {
    for (const link of anchorMatches(extractJsSection(html, sectionTitle))) {
      modules.push({
        name: link.text,
        kind,
        sourceUrl: sourceUrl(urls.jsBase, link.href),
        localFile: `JavaScript/${cleanFileName(link.text)}.md`
      });
    }
  }

  const nonNamespace = anchorMatches(html).find(link => link.text === "Non-namespace APIs");
  if (nonNamespace) {
    modules.push({
      name: "Non-namespace APIs",
      kind: "global",
      sourceUrl: sourceUrl(urls.jsBase, nonNamespace.href),
      localFile: "JavaScript/Non-namespace_APIs.md"
    });
  }

  return modules;
}

async function writeText(filePath, content) {
  await fs.mkdir(path.dirname(filePath), { recursive: true });
  await fs.writeFile(filePath, content.endsWith("\n") ? content : `${content}\n`, "utf8");
}

function renderRootReadme(plsqlPackages, jsModules) {
  const totalMembers = plsqlPackages.reduce((sum, pkg) => sum + pkg.members.length, 0);
  return `# APEX 26.1 Reference

Local, skill-oriented reference for Oracle APEX 26.1 APIs.

This reference is generated and curated from official Oracle documentation, then shaped for LLM skills and GPT creation. It favors predictable Markdown structure, source links, concise guidance, and short examples over long copied documentation.

## Source Documentation

- PL/SQL API Reference: ${urls.plsqlToc}
- JavaScript API Reference: ${urls.jsIndex}

## Structure

- [PLSQL](PLSQL/INDEX.md): ${plsqlPackages.length} package chapters and ${totalMembers} indexed package members.
- [JavaScript](JavaScript/INDEX.md): ${jsModules.length} indexed namespaces, interfaces, widgets, and global APIs.
- [_meta](./_meta): generated manifests and coverage.
- [_tools](./_tools): generator scripts for refreshing indexes.

## Skill/GPT Usage

Use this folder as retrieval material. Prefer the focused package/module pages first, then follow source links when exact behavior must be verified against Oracle docs.

Every mature page should follow this shape:

- Purpose
- When to use
- Signatures or API surface
- Parameters/options
- Return behavior
- Important notes
- Simple example
- More complex example
- Related APIs

## Copyright Note

This project is not a mirror of Oracle documentation. Keep generated content concise and original, include source links, and avoid copying long Oracle examples or prose into local pages.
`;
}

function renderPlsqlIndex(packages) {
  const lines = [
    "# PL/SQL API Reference",
    "",
    "Generated package index for the Oracle APEX 26.1 PL/SQL API Reference.",
    "",
    "| Package | Members | Deprecated | Source |",
    "| --- | ---: | --- | --- |"
  ];

  for (const pkg of packages) {
    lines.push(`| [${pkg.name}](${pkg.name}.md) | ${pkg.members.length} | ${pkg.deprecated ? "Yes" : "No"} | [Oracle](${pkg.sourceUrl}) |`);
  }

  return `${lines.join("\n")}\n`;
}

function renderPlsqlPackage(pkg) {
  const lines = [
    `# ${pkg.name}`,
    "",
    `Source: [Oracle APEX 26.1 API Reference](${pkg.sourceUrl})`,
    "",
    "Status: indexed. Detailed narrative and examples are added package-by-package.",
    "",
    "## Purpose",
    "",
    `Use this page as the local inventory for \`${pkg.name}\`. Each member links to the official source and has a reserved local detail page path for fuller examples.`,
    "",
    "## Members",
    "",
    "| Section | Member | Kind | Deprecated | Source |",
    "| --- | --- | --- | --- | --- |"
  ];

  for (const member of pkg.members) {
    lines.push(`| ${member.section} | ${member.title} | ${member.kind} | ${member.deprecated ? "Yes" : "No"} | [Oracle](${member.sourceUrl}) |`);
  }

  lines.push(
    "",
    "## Example Pattern",
    "",
    "Most APEX PL/SQL APIs run inside an APEX session. For workspace-level or install-time APIs, set the workspace/security context before calling the package.",
    "",
    "```sql",
    "begin",
    "    -- Replace with the package member and arguments needed for your app.",
    `    null; -- ${pkg.name}.<member_name>(...);`,
    "end;",
    "/",
    "```"
  );

  return `${lines.join("\n")}\n`;
}

function renderJsIndex(modules) {
  const lines = [
    "# JavaScript API Reference",
    "",
    "Generated module index for the Oracle APEX 26.1 JavaScript API Reference.",
    "",
    "| Module | Kind | Source |",
    "| --- | --- | --- |"
  ];

  for (const mod of modules) {
    const local = path.basename(mod.localFile);
    lines.push(`| [${mod.name}](${local}) | ${mod.kind} | [Oracle](${mod.sourceUrl}) |`);
  }

  return `${lines.join("\n")}\n`;
}

function renderJsModule(mod) {
  return `# ${mod.name}

Source: [Oracle APEX 26.1 JavaScript API Reference](${mod.sourceUrl})

Status: indexed. Detailed function, option, return, event, and example notes are added module-by-module.

## Purpose

Use this page as the local inventory placeholder for \`${mod.name}\`. The source link points to the official JSDoc page.

## Example Pattern

\`\`\`javascript
// Run from an Oracle APEX page where the apex namespace is available.
console.log( apex );
\`\`\`
`;
}

async function main() {
  await fs.mkdir(metaDir, { recursive: true });
  await fs.mkdir(plsqlDir, { recursive: true });
  await fs.mkdir(jsDir, { recursive: true });

  const [plsqlTocHtml, jsIndexHtml] = await Promise.all([
    fetchText(urls.plsqlToc),
    fetchText(urls.jsIndex)
  ]);

  const plsqlPackages = parsePlsqlToc(plsqlTocHtml);
  const jsModules = parseJsIndex(jsIndexHtml);
  const totalMembers = plsqlPackages.reduce((sum, pkg) => sum + pkg.members.length, 0);

  const manifest = {
    generatedAt: new Date().toISOString(),
    sources: urls,
    plsql: {
      packageCount: plsqlPackages.length,
      memberCount: totalMembers,
      packages: plsqlPackages
    },
    javascript: {
      moduleCount: jsModules.length,
      modules: jsModules
    }
  };

  await writeText(path.join(metaDir, "source-index.json"), JSON.stringify(manifest, null, 2));
  await writeText(path.join(root, "README.md"), renderRootReadme(plsqlPackages, jsModules));
  await writeText(path.join(plsqlDir, "INDEX.md"), renderPlsqlIndex(plsqlPackages));
  await writeText(path.join(jsDir, "INDEX.md"), renderJsIndex(jsModules));

  for (const pkg of plsqlPackages) {
    await writeText(path.join(root, pkg.localFile), renderPlsqlPackage(pkg));
  }

  for (const mod of jsModules) {
    await writeText(path.join(root, mod.localFile), renderJsModule(mod));
  }

  await writeText(path.join(metaDir, "coverage.md"), `# Coverage

Generated: ${manifest.generatedAt}

## Indexed

- PL/SQL packages: ${plsqlPackages.length}
- PL/SQL package members/topics: ${totalMembers}
- JavaScript modules/interfaces/widgets/global groups: ${jsModules.length}

## Detailed Pages

At this stage the generator creates package/module inventories. Curated detail pages are added over time and should replace the generated package/module placeholder content when complete.
`);

  console.log(`Indexed ${plsqlPackages.length} PL/SQL packages with ${totalMembers} members.`);
  console.log(`Indexed ${jsModules.length} JavaScript modules.`);
}

main().catch(error => {
  console.error(error);
  process.exitCode = 1;
});

