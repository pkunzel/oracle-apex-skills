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
const reportPath = path.join(metaDir, "verification-report.json");

async function exists(filePath) {
  try {
    await fs.access(filePath);
    return true;
  } catch {
    return false;
  }
}

async function main() {
  const manifest = JSON.parse(await fs.readFile(manifestPath, "utf8"));
  const report = {
    verifiedAt: new Date().toISOString(),
    plsql: {
      packagePagesExpected: manifest.plsql.packages.length,
      packagePagesFound: 0,
      memberPagesExpected: manifest.plsql.memberCount,
      memberPagesFound: 0,
      missingPackages: [],
      missingMembers: []
    },
    javascript: {
      modulePagesExpected: manifest.javascript.modules.length,
      modulePagesFound: 0,
      missingModules: []
    }
  };

  for (const pkg of manifest.plsql.packages) {
    if (await exists(path.join(root, pkg.localFile))) {
      report.plsql.packagePagesFound++;
    } else {
      report.plsql.missingPackages.push(pkg.localFile);
    }

    for (const member of pkg.members) {
      if (await exists(path.join(root, member.localFile))) {
        report.plsql.memberPagesFound++;
      } else {
        report.plsql.missingMembers.push(member.localFile);
      }
    }
  }

  for (const mod of manifest.javascript.modules) {
    if (await exists(path.join(root, mod.localFile))) {
      report.javascript.modulePagesFound++;
    } else {
      report.javascript.missingModules.push(mod.localFile);
    }
  }

  await fs.writeFile(reportPath, `${JSON.stringify(report, null, 2)}\n`, "utf8");

  console.log(`PL/SQL package pages: ${report.plsql.packagePagesFound}/${report.plsql.packagePagesExpected}`);
  console.log(`PL/SQL member pages: ${report.plsql.memberPagesFound}/${report.plsql.memberPagesExpected}`);
  console.log(`JavaScript module pages: ${report.javascript.modulePagesFound}/${report.javascript.modulePagesExpected}`);

  if (
    report.plsql.missingPackages.length ||
    report.plsql.missingMembers.length ||
    report.javascript.missingModules.length
  ) {
    process.exitCode = 1;
  }
}

main().catch(error => {
  console.error(error);
  process.exitCode = 1;
});
