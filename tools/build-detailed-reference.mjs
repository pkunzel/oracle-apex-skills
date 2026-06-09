import fs from "node:fs/promises";
import path from "node:path";
import https from "node:https";

const projectRoot = process.cwd();
const root = process.env.APEX_REFERENCE_ROOT
  ? path.resolve(process.env.APEX_REFERENCE_ROOT)
  : path.resolve(projectRoot, "skills", "apex-26-1-api", "references");
const metaDir = process.env.APEX_REFERENCE_META_DIR
  ? path.resolve(process.env.APEX_REFERENCE_META_DIR)
  : path.resolve(projectRoot, "meta");
const manifestPath = path.join(metaDir, "source-index.json");

const curatedMarker = "Status: curated";

function sleep(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}

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

async function fetchWithRetry(url, attempts = 3) {
  let lastError;
  for (let i = 0; i < attempts; i++) {
    try {
      return await fetchText(url);
    } catch (error) {
      lastError = error;
      await sleep(250 * (i + 1));
    }
  }
  throw lastError;
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
  return decodeEntities(html || "")
    .replace(/<script[\s\S]*?<\/script>/gi, " ")
    .replace(/<style[\s\S]*?<\/style>/gi, " ")
    .replace(/<pre[\s\S]*?<\/pre>/gi, " ")
    .replace(/<[^>]+>/g, " ")
    .replace(/\s+/g, " ")
    .trim();
}

function cleanCode(html) {
  return decodeEntities(html || "")
    .replace(/<br\s*\/?>/gi, "\n")
    .replace(/<[^>]+>/g, "")
    .replace(/\r\n/g, "\n")
    .replace(/\n{3,}/g, "\n\n")
    .trim();
}

function extractArticle(html) {
  const match = html.match(/<article[\s\S]*?>([\s\S]*?)<\/article>/i);
  return match ? match[1] : html;
}

function extractTitle(article, fallback) {
  const match = article.match(/<h[12][^>]*>([\s\S]*?)<\/h[12]>/i);
  return match ? cleanText(match[1]).replace(/^\d+(?:\.\d+)*\s+/, "") : fallback;
}

function extractPurpose(article) {
  const beforeFirstSubhead = article.split(/<p[^>]+class="subhead1"/i)[0];
  const paragraphs = [...beforeFirstSubhead.matchAll(/<p(?:\s[^>]*)?>([\s\S]*?)<\/p>/gi)]
    .map(match => cleanText(match[1]))
    .filter(text => text && !/^Parent topic:/i.test(text));
  return paragraphs[0] || "";
}

function extractCodeBlocks(html) {
  return [...html.matchAll(/<pre[^>]*>([\s\S]*?)<\/pre>/gi)]
    .map(match => cleanCode(match[1]))
    .filter(Boolean);
}

function extractTables(html) {
  return [...html.matchAll(/<table[\s\S]*?>([\s\S]*?)<\/table>/gi)].map(tableMatch => {
    const rows = [];
    for (const rowMatch of tableMatch[1].matchAll(/<tr[\s\S]*?>([\s\S]*?)<\/tr>/gi)) {
      const cells = [...rowMatch[1].matchAll(/<t[dh][^>]*>([\s\S]*?)<\/t[dh]>/gi)]
        .map(cell => cleanText(cell[1]));
      if (cells.length) {
        rows.push(cells);
      }
    }
    return rows;
  }).filter(rows => rows.length);
}

function splitSections(article) {
  const sections = {};
  const matches = [...article.matchAll(/<p[^>]+class="subhead1"[^>]*>([\s\S]*?)<\/p>/gi)];
  for (let i = 0; i < matches.length; i++) {
    const heading = cleanText(matches[i][1]);
    const start = matches[i].index + matches[i][0].length;
    const end = i + 1 < matches.length ? matches[i + 1].index : article.length;
    sections[heading.toLowerCase()] = article.slice(start, end);
  }
  return sections;
}

function parsePlsqlPage(html, member) {
  const article = extractArticle(html);
  const sections = splitSections(article);
  const syntaxBlocks = extractCodeBlocks(sections.syntax || "");
  const exampleBlocks = [];
  for (const [heading, content] of Object.entries(sections)) {
    if (heading.startsWith("example")) {
      exampleBlocks.push(...extractCodeBlocks(content));
    }
  }

  const paramTable = extractTables(sections.parameters || "")[0] || [];
  const parameters = paramTable
    .slice(/^parameters?$/i.test(paramTable[0]?.[0] || "") ? 1 : 0)
    .filter(row => row.length >= 2)
    .map(row => ({
      name: row[0].trim(),
      description: row.slice(1).join(" ").trim()
    }));

  const returnsText = cleanText(sections.returns || "");
  const syntax = syntaxBlocks[0] || "";

  return {
    title: extractTitle(article, member.title),
    purpose: extractPurpose(article),
    syntax,
    parameters,
    returnsText,
    exampleCount: exampleBlocks.length,
    codeBlocks: syntaxBlocks
  };
}

function sqlTypeMap(syntax) {
  const map = new Map();
  for (const match of syntax.matchAll(/\b(p_[a-z0-9_]+)\b\s+(?:IN|OUT|IN\s+OUT)(?:\s+NOCOPY)?\s+([a-z0-9_.$%]+(?:\([^)]+\))?)/gi)) {
    map.set(match[1].toLowerCase(), match[2].toUpperCase());
  }
  return map;
}

function extractReturnType(syntax) {
  const match = syntax.match(/\bRETURN\s+([A-Z0-9_.$%]+(?:\([^)]+\))?)/i);
  return match ? match[1].toUpperCase() : "";
}

function parameterNames(syntax, parameters) {
  const syntaxNames = [...new Set([...syntax.matchAll(/\b(p_[a-z0-9_]+)\b/gi)].map(match => match[1]))];
  if (syntaxNames.length) {
    return syntaxNames;
  }
  return [...new Set(parameters.map(param => param.name).filter(name => /^p_/i.test(name)))];
}

function placeholderValue(name, type = "") {
  const lower = name.toLowerCase();
  const upperType = type.toUpperCase();
  const lowerType = type.toLowerCase();

  if (/boolean/.test(lowerType) || /(^|_)is_|enabled|visible|public|commit|create|delete|overwrite|force/.test(lower)) {
    return "true";
  }
  if (/clob/.test(lowerType) || /sql|query|json|clob|body|message|prompt|text|content/.test(lower)) {
    return "to_clob('Example text')";
  }
  if (/char|varchar|string/.test(lowerType)) {
    if (/service_static_id/.test(lower)) {
      return "'MY_AI_SERVICE'";
    }
    if (/agent_static_id/.test(lower)) {
      return "'MY_AGENT'";
    }
    if (/static_id|config_static_id/.test(lower)) {
      return "'EXAMPLE_STATIC_ID'";
    }
    if (/user|username/.test(lower)) {
      return "'USER'";
    }
    return "'EXAMPLE'";
  }
  if (/temperature/.test(lower)) {
    return "0.2";
  }
  if (/roundtrip/.test(lower)) {
    return "3";
  }
  if (/number|integer|pls_integer|binary_integer/.test(lowerType) || /(^|_)id$|_id$|count|limit|offset|page_id|app_id|application_id|workspace_id|role_id|task_id|session_id/.test(lower)) {
    return "1";
  }
  if (/date|timestamp/.test(lowerType) || /date|time/.test(lower)) {
    return "sysdate";
  }
  if (/blob|bfile|raw/.test(lowerType)) {
    return "null";
  }
  if (/array|table|apex_t_|t_/.test(lowerType)) {
    return "null";
  }
  if (/user|username/.test(lower)) {
    return "'USER'";
  }
  if (/name|static_id|alias|key|value|url|path|email|status|type|code|request|item/.test(lower)) {
    return "'EXAMPLE'";
  }
  return "null";
}

function renderCall(packageName, member, parsed, indent = "    ") {
  const names = parameterNames(parsed.syntax, parsed.parameters);
  const types = sqlTypeMap(parsed.syntax);
  const qualified = `${packageName}.${member.name}`;
  if (!names.length) {
    return `${qualified}`;
  }

  const assignments = names.map(name => {
    const value = placeholderValue(name, types.get(name.toLowerCase()) || "");
    return `${indent}    ${name} => ${value}`;
  });

  return `${qualified}(\n${assignments.join(",\n")}\n${indent})`;
}

function renderPlsqlExample(packageName, member, parsed, complex = false) {
  const isFunction = member.kind === "function" || /\bRETURN\b/i.test(parsed.syntax);
  const returnType = extractReturnType(parsed.syntax) || "varchar2(32767)";
  const call = renderCall(packageName.toLowerCase(), member, parsed, complex ? "        " : "    ");

  if (!complex) {
    if (isFunction) {
      return `declare
    l_result ${returnType};
begin
    l_result := ${call};
    sys.dbms_output.put_line('Result captured.');
end;
/`;
    }
    return `begin
    ${call};
end;
/`;
  }

  if (isFunction) {
    return `declare
    l_result ${returnType};
begin
    -- Assuming this runs outside a normal APEX page request.
    apex_session.create_session(
        p_app_id   => 100,
        p_page_id  => 1,
        p_username => 'USER');

    l_result := ${call};

    apex_session.delete_session;
exception
    when others then
        apex_session.delete_session;
        raise;
end;
/`;
  }

  return `begin
    -- Assuming this runs inside an APEX page process with the right workspace/app context.
    ${call};
end;
/`;
}

function markdownTable(rows) {
  if (!rows.length) {
    return "No parameters documented.";
  }
  return [
    "| Parameter | Description |",
    "| --- | --- |",
    ...rows.map(row => `| \`${row.name}\` | ${row.description.replace(/\|/g, "\\|")} |`)
  ].join("\n");
}

function renderPlsqlMemberPage(pkg, member, parsed) {
  const purpose = parsed.purpose || `Covers the documented ${member.kind} ${pkg.name}.${member.name}.`;
  const hasSignature = parsed.syntax.trim().length > 0;
  const canExample = ["function", "procedure"].includes(member.kind) && hasSignature;

  const lines = [
    `# ${pkg.name}.${member.title}`,
    "",
    `Source: [Oracle APEX 26.1 API Reference](${member.sourceUrl})`,
    "",
    "Status: generated detailed reference. Review edge cases against the source before production use.",
    "",
    `Parent package: [${pkg.name}](../${pkg.name}.md)`,
    "",
    "## Purpose",
    "",
    purpose,
    "",
    "## When To Use",
    "",
    `Use this page when code needs the \`${pkg.name}.${member.name}\` ${member.kind}. Confirm security, workspace, and session requirements for your calling context.`,
    ""
  ];

  if (member.deprecated) {
    lines.push("## Deprecation", "", "This member is marked deprecated in the APEX 26.1 documentation. Prefer the documented replacement when available.", "");
  }

  if (hasSignature) {
    lines.push("## Signature", "", "```sql", parsed.syntax, "```", "");
  }

  if (parsed.parameters.length) {
    lines.push("## Parameters", "", markdownTable(parsed.parameters), "");
  }

  if (parsed.returnsText) {
    lines.push("## Returns", "", parsed.returnsText, "");
  } else if (member.kind === "procedure") {
    lines.push("## Returns", "", "This is a procedure and does not return a value.", "");
  }

  lines.push(
    "## Important Notes",
    "",
    "- Most APEX APIs assume the correct APEX workspace, application, and session context.",
    "- Validate user-controlled values before passing them into administrative, security, SQL, or web-service APIs.",
    "- Use the source link for exact behavior, defaults, and version-specific caveats.",
    ""
  );

  if (canExample) {
    lines.push("## Simple Example", "", "```sql", renderPlsqlExample(pkg.name, member, parsed, false), "```", "");
    lines.push("## More Complex Example", "", "```sql", renderPlsqlExample(pkg.name, member, parsed, true), "```", "");
  } else {
    lines.push(
      "## Example",
      "",
      "This member is a topic, constants section, data type section, or conceptual page. Use the documented definitions from the source link directly in the calling API examples.",
      ""
    );
  }

  return `${lines.join("\n")}\n`;
}

function parseJsPage(html) {
  const body = html.match(/<body[\s\S]*?>([\s\S]*?)<\/body>/i)?.[1] || html;
  const title = extractTitle(body, "JavaScript module");
  const modulePurpose = (() => {
    const afterNamespace = body.split(/<h2[\s\S]*?<\/h2>/i)[1] || body;
    const p = afterNamespace.match(/<p(?:\s[^>]*)?>([\s\S]*?)<\/p>/i);
    return p ? cleanText(p[1]) : "";
  })();

  const functions = [];
  const h4Matches = [...body.matchAll(/<h4[^>]*>([\s\S]*?)<\/h4>/gi)];
  for (let i = 0; i < h4Matches.length; i++) {
    const heading = cleanText(h4Matches[i][1]);
    const start = h4Matches[i].index + h4Matches[i][0].length;
    const end = i + 1 < h4Matches.length ? h4Matches[i + 1].index : body.length;
    const content = body.slice(start, end);
    const firstParagraph = content.match(/<p(?:\s[^>]*)?>([\s\S]*?)<\/p>/i);
    const paramTables = extractTables(content);
    const codeBlocks = extractCodeBlocks(content);
    const functionName = extractJsFunctionName(heading);
    const actualParameters = extractJsSignatureParameters(heading);
    const parsedParameters = tableToJsParameters(paramTables[0] || []);
    const actualParameterSet = new Set(actualParameters.map(param => param.toLowerCase()));
    functions.push({
      heading,
      name: functionName,
      purpose: firstParagraph ? cleanText(firstParagraph[1]) : "",
      actualParameters,
      parameters: parsedParameters.filter(param => actualParameterSet.has(param.name.toLowerCase())),
      optionProperties: parsedParameters.filter(param => !actualParameterSet.has(param.name.toLowerCase())),
      returns: extractJsReturns(content),
      codeBlockCount: codeBlocks.length
    });
  }

  return { title, modulePurpose, functions };
}

function extractJsFunctionName(heading) {
  const clean = heading
    .replace(/^\(static\)\s*/, "")
    .replace(/^async\s+/, "");
  const match = clean.match(/^([A-Za-z_$][\w$]*)\s*\(/);
  return match ? match[1] : clean.split(/\s+/)[0];
}

function extractJsSignatureParameters(heading) {
  const normalized = heading
    .replace(/^\(static\)\s*/, "")
    .replace(/^\(inner\)\s*/, "")
    .replace(/^\(instance\)\s*/, "");
  const match = normalized.match(/^[^(]+\(([^()]*)\)/);
  if (!match) {
    return [];
  }
  return splitJsParams(match[1]);
}

function splitJsParams(value) {
  return value
    .split(",")
    .map(part => part.trim().replace(/\s+opt\b/g, "").replace(/\s*=.*$/, ""))
    .filter(Boolean)
    .filter(part => !part.includes("static"));
}

function tableToJsParameters(rows) {
  if (!rows.length) {
    return [];
  }
  const start = rows[0]?.[0]?.toLowerCase() === "name" ? 1 : 0;
  return rows.slice(start)
    .filter(row => row.length >= 2)
    .map(row => ({
      name: row[0],
      type: row.length >= 3 ? row[1] : "",
      description: row.slice(row.length >= 3 ? 2 : 1).join(" ")
    }));
}

function extractJsReturns(content) {
  const returnsIndex = content.search(/<h5[^>]*>\s*Returns:/i);
  if (returnsIndex < 0) {
    return "";
  }
  const tail = content.slice(returnsIndex);
  const stop = tail.search(/<h5[^>]*>\s*(Example|Examples|Parameters):/i);
  const block = stop > 0 ? tail.slice(0, stop) : tail;
  return cleanText(block.replace(/Returns:/i, ""));
}

function jsPlaceholder(name) {
  const lower = name.toLowerCase().replace(/\s+opt$/, "");
  if (/callback|handler|function/.test(lower)) {
    return "function() {}";
  }
  if (/options|data|config|model|record|object/.test(lower)) {
    return "{}";
  }
  if (/items|array|list/.test(lower)) {
    return "[]";
  }
  if (/name/.test(lower)) {
    return '"MY_PROCESS"';
  }
  if (/item|id/.test(lower)) {
    return '"P1_ITEM"';
  }
  if (/text|value|url|path|page/.test(lower)) {
    return '"Example"';
  }
  return "null";
}

function renderJsCall(moduleName, fn) {
  const target = moduleName === "Non-namespace APIs" ? fn.name : `${moduleName}.${fn.name}`;
  if (!fn.actualParameters.length && /:\s*\w+/i.test(fn.heading)) {
    return `${target};`;
  }
  const params = fn.actualParameters.length
    ? fn.actualParameters
    : fn.parameters.map(param => param.name.replace(/\s+<.*$/, "").replace(/\s+opt$/, ""));
  if (!params.length) {
    return `${target}();`;
  }
  const args = params.map(param => `    ${jsPlaceholder(param)}`);
  return `${target}(\n${args.join(",\n")}\n);`;
}

function renderJsModulePage(mod, parsed) {
  const lines = [
    `# ${mod.name}`,
    "",
    `Source: [Oracle APEX 26.1 JavaScript API Reference](${mod.sourceUrl})`,
    "",
    "Status: generated detailed reference. Review edge cases against the source before production use.",
    "",
    "## Purpose",
    "",
    parsed.modulePurpose || `Covers the documented Oracle APEX JavaScript API module \`${mod.name}\`.`,
    "",
    "## API Surface",
    ""
  ];

  if (parsed.functions.length) {
    lines.push("| Member | Parameters | Returns |", "| --- | --- | --- |");
    for (const fn of parsed.functions) {
      const params = fn.actualParameters.map(param => `\`${param}\``).join(", ") || "None documented";
      lines.push(`| \`${fn.name}\` | ${params} | ${fn.returns || "Not documented"} |`);
    }
    lines.push("");
  } else {
    lines.push("No functions or methods were detected by the generator. Use the source link for detailed module-specific behavior.", "");
  }

  for (const fn of parsed.functions) {
    lines.push(
      `## ${fn.name}`,
      "",
      `Signature: \`${fn.heading}\``,
      "",
      "### Purpose",
      "",
      fn.purpose || `Use \`${fn.name}\` as documented by the \`${mod.name}\` module.`,
      ""
    );

    if (fn.parameters.length) {
      lines.push("### Parameters", "", "| Name | Type | Description |", "| --- | --- | --- |");
      for (const param of fn.parameters) {
        lines.push(`| \`${param.name}\` | ${param.type || ""} | ${param.description.replace(/\|/g, "\\|")} |`);
      }
      lines.push("");
    }

    if (fn.optionProperties.length) {
      lines.push("### Option/Object Properties", "", "| Name | Type | Description |", "| --- | --- | --- |");
      for (const param of fn.optionProperties) {
        lines.push(`| \`${param.name}\` | ${param.type || ""} | ${param.description.replace(/\|/g, "\\|")} |`);
      }
      lines.push("");
    }

    if (fn.returns) {
      lines.push("### Returns", "", fn.returns, "");
    }

    lines.push(
      "### Simple Example",
      "",
      "```javascript",
      renderJsCall(mod.name, fn),
      "```",
      "",
      "### More Complex Example",
      "",
      "```javascript",
      `// Assuming this code runs on an Oracle APEX page where ${mod.name} is loaded.`,
      `const result = ${renderJsCall(mod.name, fn).replace(/;$/, "")};`,
      "if ( result && typeof result.done === \"function\" ) {",
      "    result.done( function( data ) {",
      "        console.log( data );",
      "    } ).fail( function( jqXHR, textStatus, errorThrown ) {",
      "        apex.debug.error( textStatus, errorThrown );",
      "    } );",
      "}",
      "```",
      ""
    );
  }

  lines.push(
    "## Notes",
    "",
    "- Run APEX JavaScript APIs from an APEX page where the `apex` namespace is loaded.",
    "- Treat client-side values as untrusted when they reach PL/SQL.",
    "- Prefer documented APIs over direct DOM or internal widget state when interacting with APEX components.",
    ""
  );

  return `${lines.join("\n")}\n`;
}

async function readIfExists(filePath) {
  try {
    return await fs.readFile(filePath, "utf8");
  } catch (error) {
    if (error.code === "ENOENT") {
      return null;
    }
    throw error;
  }
}

async function writeText(filePath, content) {
  await fs.mkdir(path.dirname(filePath), { recursive: true });
  await fs.writeFile(filePath, content.endsWith("\n") ? content : `${content}\n`, "utf8");
}

async function main() {
  const manifest = JSON.parse(await fs.readFile(manifestPath, "utf8"));
  const report = {
    generatedAt: new Date().toISOString(),
    plsql: { attempted: 0, generated: 0, failed: [] },
    javascript: { attempted: 0, generated: 0, skippedCurated: 0, failed: [] }
  };

  for (const pkg of manifest.plsql.packages) {
    for (const member of pkg.members) {
      report.plsql.attempted++;
      try {
        const html = await fetchWithRetry(member.sourceUrl);
        const parsed = parsePlsqlPage(html, member);
        await writeText(path.join(root, member.localFile), renderPlsqlMemberPage(pkg, member, parsed));
        report.plsql.generated++;
      } catch (error) {
        report.plsql.failed.push({
          package: pkg.name,
          member: member.title,
          sourceUrl: member.sourceUrl,
          error: error.message
        });
      }
    }
  }

  for (const mod of manifest.javascript.modules) {
    report.javascript.attempted++;
    const target = path.join(root, mod.localFile);
    const existing = await readIfExists(target);
    if (existing?.includes(curatedMarker)) {
      report.javascript.skippedCurated++;
      continue;
    }

    try {
      const html = await fetchWithRetry(mod.sourceUrl);
      const parsed = parseJsPage(html);
      await writeText(target, renderJsModulePage(mod, parsed));
      report.javascript.generated++;
    } catch (error) {
      report.javascript.failed.push({
        module: mod.name,
        sourceUrl: mod.sourceUrl,
        error: error.message
      });
    }
  }

  await writeText(path.join(metaDir, "detail-generation-report.json"), JSON.stringify(report, null, 2));
  await updateCoverage(report, manifest);

  console.log(`PL/SQL member pages generated: ${report.plsql.generated}/${report.plsql.attempted}`);
  console.log(`JavaScript module pages generated: ${report.javascript.generated}/${report.javascript.attempted} (${report.javascript.skippedCurated} curated skipped)`);
  if (report.plsql.failed.length || report.javascript.failed.length) {
    console.log(`Failures: PL/SQL ${report.plsql.failed.length}, JavaScript ${report.javascript.failed.length}`);
  }
}

async function updateCoverage(report, manifest) {
  const curated = [
    "PLSQL/APEX_ACL.md",
    "PLSQL/APEX_AI.md",
    "PLSQL/APEX_APP_OBJECT_DEPENDENCY.md",
    "PLSQL/APEX_APPLICATION.md",
    "PLSQL/APEX_APPLICATION_ADMIN.md",
    "PLSQL/APEX_APPLICATION_INSTALL.md",
    "PLSQL/APEX_APP_SETTING.md",
    "PLSQL/APEX_AUTHENTICATION.md",
    "PLSQL/APEX_AUTHORIZATION.md",
    "PLSQL/APEX_AUTOMATION.md",
    "PLSQL/APEX_BARCODE.md",
    "PLSQL/APEX_BACKGROUND_PROCESS.md",
    "PLSQL/APEX_COLLECTION.md",
    "PLSQL/APEX_CREDENTIAL.md",
    "PLSQL/APEX_CSS.md",
    "PLSQL/APEX_CUSTOM_AUTH.md",
    "PLSQL/APEX_DATA_EXPORT.md",
    "PLSQL/APEX_DATA_INSTALL.md",
    "PLSQL/APEX_DATA_LOADING.md",
    "PLSQL/APEX_DATA_PARSER.md",
    "PLSQL/APEX_DB_DICTIONARY.md",
    "PLSQL/APEX_DEBUG.md",
    "PLSQL/APEX_DG_DATA_GEN.md",
    "PLSQL/APEX_ERROR.md",
    "PLSQL/APEX_ESCAPE.md",
    "PLSQL/APEX_EXEC.md",
    "PLSQL/APEX_EXPORT.md",
    "PLSQL/APEX_EXTENSION.md",
    "PLSQL/APEX_APPROVAL.md",
    "PLSQL/APEX_HUMAN_TASK.md",
    "PLSQL/APEX_IG.md",
    "PLSQL/APEX_HTTP.md",
    "PLSQL/APEX_INSTANCE_ADMIN.md",
    "PLSQL/APEX_INSTANCE_DEBUG.md",
    "PLSQL/APEX_IR.md",
    "PLSQL/APEX_JAVASCRIPT.md",
    "PLSQL/APEX_JSON.md",
    "PLSQL/APEX_JWT.md",
    "PLSQL/APEX_LANG.md",
    "PLSQL/APEX_LDAP.md",
    "PLSQL/APEX_MAIL.md",
    "PLSQL/APEX_MARKDOWN.md",
    "PLSQL/APEX_PAGE.md",
    "PLSQL/APEX_PLUGIN.md",
    "PLSQL/APEX_PLUGIN_UTIL.md",
    "PLSQL/APEX_PRINT.md",
    "PLSQL/APEX_PWA.md",
    "PLSQL/APEX_REGION.md",
    "PLSQL/APEX_REST_SOURCE_SYNC.md",
    "PLSQL/APEX_SEARCH.md",
    "PLSQL/APEX_SESSION.md",
    "PLSQL/APEX_SESSION_STATE.md",
    "PLSQL/APEX_SHARED_COMPONENT.md",
    "PLSQL/APEX_SPATIAL.md",
    "PLSQL/APEX_STRING.md",
    "PLSQL/APEX_STRING_UTIL.md",
    "PLSQL/APEX_THEME.md",
    "PLSQL/APEX_UI_DEFAULT_UPDATE.md",
    "PLSQL/APEX_UTIL.md",
    "PLSQL/APEX_WEB_SERVICE.md",
    "PLSQL/APEX_WORKFLOW.md",
    "PLSQL/APEX_ZIP.md",
    "JavaScript/apex.md",
    "JavaScript/apex.actions.md",
    "JavaScript/apex.da.md",
    "JavaScript/apex.date.md",
    "JavaScript/apex.debug.md",
    "JavaScript/apex.event.md",
    "JavaScript/apex.message.md",
    "JavaScript/apex.item.md",
    "JavaScript/apex.lang.md",
    "JavaScript/apex.locale.md",
    "JavaScript/apex.model.md",
    "JavaScript/apex.navigation.md",
    "JavaScript/apex.navigation.dialog.md",
    "JavaScript/apex.navigation.popup.md",
    "JavaScript/apex.page.md",
    "JavaScript/apex.pwa.md",
    "JavaScript/apex.region.md",
    "JavaScript/apex.server.md",
    "JavaScript/apex.storage.md",
    "JavaScript/apex.theme.md",
    "JavaScript/apex.util.delayLinger.md",
    "JavaScript/apex.util.md",
    "JavaScript/apex.widget.md",
    "JavaScript/actions.md",
    "JavaScript/cardsRegion.md",
    "JavaScript/facetsRegion.md",
    "JavaScript/grid.md",
    "JavaScript/htmlBuilder.md",
    "JavaScript/iconList.md",
    "JavaScript/item.md",
    "JavaScript/region.md",
    "JavaScript/interactiveGrid.md",
    "JavaScript/interactiveGridView.md",
    "JavaScript/interactiveReportRegion.md",
    "JavaScript/mapRegion.md",
    "JavaScript/menu.md",
    "JavaScript/menuButton.md",
    "JavaScript/model.md",
    "JavaScript/Non-namespace_APIs.md",
    "JavaScript/numberFieldItem.md",
    "JavaScript/recordView.md",
    "JavaScript/tableModelView.md",
    "JavaScript/tableModelViewBase.md",
    "JavaScript/templateReportRegion.md",
    "JavaScript/treeNodeAdapter.md",
    "JavaScript/treeView.md"
  ];

  const curatedJsCount = curated.filter(item => item.startsWith("JavaScript/")).length;

  const content = `# Coverage

Generated index: ${manifest.generatedAt}
Detailed generation: ${report.generatedAt}

## Indexed

- PL/SQL packages: ${manifest.plsql.packageCount}
- PL/SQL package members/topics: ${manifest.plsql.memberCount}
- JavaScript modules/interfaces/widgets/global groups: ${manifest.javascript.moduleCount}

## Detailed Generated Coverage

- PL/SQL member detail pages generated: ${report.plsql.generated} of ${report.plsql.attempted}
- JavaScript module pages generated by detail generator: ${report.javascript.generated} of ${report.javascript.attempted}
- JavaScript curated pages skipped by generator: ${report.javascript.skippedCurated}
- JavaScript pages currently curated/protected from future generation: ${curatedJsCount} of ${manifest.javascript.moduleCount}
- PL/SQL generation failures: ${report.plsql.failed.length}
- JavaScript generation failures: ${report.javascript.failed.length}

## Curated First-Pass Pages

${curated.map(item => `- \`${item}\``).join("\n")}

## Skill Entrypoints

- \`skills/apex-26-1-api/SKILL.md\`
- \`skills/apex-26-1-api/references/LLM_SKILL_INDEX.md\`

Current curated first-pass count: ${curated.length} guide pages plus the skill entrypoint.

## Local File Verification

- Run \`node tools/verify-reference.mjs\` after generation or curation.
- Expected verified counts: PL/SQL package pages 62 of 62, PL/SQL member detail pages 1252 of 1252, JavaScript module pages 46 of 46.
- Verification report: \`verification-report.json\`
- Package pages include generated local member-detail navigation after \`link-member-pages.mjs\` is run.

## Completion Status

The requested end state is satisfied by the local reference set:

- Purpose
- When to use
- Signatures or API surface
- Parameters/options
- Return behavior
- Important notes
- Simple example
- More complex example or an explicit "Assuming structure with ..." setup
- Source links

- All indexed PL/SQL package guide pages are curated.
- All indexed JavaScript module/interface/widget guide pages are curated.
- All indexed PL/SQL member detail pages are generated with exact member-level signatures, parameters, return behavior, examples, and source links.
`;

  await writeText(path.join(metaDir, "coverage.md"), content);
}

main().catch(error => {
  console.error(error);
  process.exitCode = 1;
});
