# Curation Plan

This reference is intended for LLM Skills first, GPT creation second.

## Output Standard

Each curated package or module page should be retrieval-friendly:

- Use stable headings.
- Keep one API member per section.
- Include exact member names and source links.
- Prefer short, original examples.
- Avoid copying long Oracle examples or prose.
- Use "Assuming structure with ..." when a self-contained example would be too large.
- Include server-side and client-side context where the API crosses that boundary.

## Suggested Batch Order

1. AI and agents: `APEX_AI`, relevant JavaScript modules for Ajax and page integration.
2. High-frequency PL/SQL packages: `APEX_APPLICATION`, `APEX_UTIL`, `APEX_SESSION`, `APEX_COLLECTION`, `APEX_JSON`, `APEX_WEB_SERVICE`, `APEX_EXEC`, `APEX_STRING`.
3. High-frequency JavaScript namespaces: `apex.item`, `apex.region`, `apex.message`, `apex.navigation`, `apex.page`, `apex.actions`, `apex.model`, `apex.util`, `apex.event`.
4. Security/admin packages: authentication, authorization, credentials, ACL, app settings, instance admin.
5. Specialized packages: workflow, approvals, automation, background process, data loading, mail, zip, barcode, human task, plug-in APIs.
6. Deprecated packages and legacy APIs, marked clearly.

## Page Template

```markdown
# API_NAME

Source: [Oracle APEX 26.1 ...](...)

Status: curated first-pass reference.

## Purpose

## When To Use

## API Surface

## Member Name

### Signature

### Parameters

### Returns

### Simple Example

### More Complex Example

### Notes

## Related APIs
```

## Curated So Far

- `PLSQL/APEX_ACL.md`
- `PLSQL/APEX_AI.md`
- `PLSQL/APEX_APP_OBJECT_DEPENDENCY.md`
- `PLSQL/APEX_APPLICATION.md`
- `PLSQL/APEX_APPLICATION_ADMIN.md`
- `PLSQL/APEX_APPLICATION_INSTALL.md`
- `PLSQL/APEX_APP_SETTING.md`
- `PLSQL/APEX_AUTHENTICATION.md`
- `PLSQL/APEX_AUTHORIZATION.md`
- `PLSQL/APEX_AUTOMATION.md`
- `PLSQL/APEX_BARCODE.md`
- `PLSQL/APEX_BACKGROUND_PROCESS.md`
- `PLSQL/APEX_COLLECTION.md`
- `PLSQL/APEX_CREDENTIAL.md`
- `PLSQL/APEX_CSS.md`
- `PLSQL/APEX_CUSTOM_AUTH.md`
- `PLSQL/APEX_DATA_EXPORT.md`
- `PLSQL/APEX_DATA_INSTALL.md`
- `PLSQL/APEX_DATA_LOADING.md`
- `PLSQL/APEX_DATA_PARSER.md`
- `PLSQL/APEX_DB_DICTIONARY.md`
- `PLSQL/APEX_DEBUG.md`
- `PLSQL/APEX_DG_DATA_GEN.md`
- `PLSQL/APEX_ERROR.md`
- `PLSQL/APEX_ESCAPE.md`
- `PLSQL/APEX_EXEC.md`
- `PLSQL/APEX_EXPORT.md`
- `PLSQL/APEX_EXTENSION.md`
- `PLSQL/APEX_APPROVAL.md`
- `PLSQL/APEX_HUMAN_TASK.md`
- `PLSQL/APEX_IG.md`
- `PLSQL/APEX_HTTP.md`
- `PLSQL/APEX_INSTANCE_ADMIN.md`
- `PLSQL/APEX_INSTANCE_DEBUG.md`
- `PLSQL/APEX_IR.md`
- `PLSQL/APEX_JAVASCRIPT.md`
- `PLSQL/APEX_JSON.md`
- `PLSQL/APEX_JWT.md`
- `PLSQL/APEX_LANG.md`
- `PLSQL/APEX_LDAP.md`
- `PLSQL/APEX_MAIL.md`
- `PLSQL/APEX_MARKDOWN.md`
- `PLSQL/APEX_PAGE.md`
- `PLSQL/APEX_PLUGIN.md`
- `PLSQL/APEX_PLUGIN_UTIL.md`
- `PLSQL/APEX_PRINT.md`
- `PLSQL/APEX_PWA.md`
- `PLSQL/APEX_REGION.md`
- `PLSQL/APEX_REST_SOURCE_SYNC.md`
- `PLSQL/APEX_SEARCH.md`
- `PLSQL/APEX_SESSION.md`
- `PLSQL/APEX_SESSION_STATE.md`
- `PLSQL/APEX_SHARED_COMPONENT.md`
- `PLSQL/APEX_SPATIAL.md`
- `PLSQL/APEX_STRING.md`
- `PLSQL/APEX_STRING_UTIL.md`
- `PLSQL/APEX_THEME.md`
- `PLSQL/APEX_UI_DEFAULT_UPDATE.md`
- `PLSQL/APEX_UTIL.md`
- `PLSQL/APEX_WEB_SERVICE.md`
- `PLSQL/APEX_WORKFLOW.md`
- `PLSQL/APEX_ZIP.md`
- `JavaScript/apex.md`
- `JavaScript/apex.actions.md`
- `JavaScript/apex.da.md`
- `JavaScript/apex.date.md`
- `JavaScript/apex.debug.md`
- `JavaScript/apex.event.md`
- `JavaScript/apex.item.md`
- `JavaScript/apex.lang.md`
- `JavaScript/apex.locale.md`
- `JavaScript/apex.message.md`
- `JavaScript/apex.model.md`
- `JavaScript/apex.navigation.md`
- `JavaScript/apex.navigation.dialog.md`
- `JavaScript/apex.navigation.popup.md`
- `JavaScript/apex.page.md`
- `JavaScript/apex.pwa.md`
- `JavaScript/apex.region.md`
- `JavaScript/apex.server.md`
- `JavaScript/apex.storage.md`
- `JavaScript/apex.theme.md`
- `JavaScript/apex.util.delayLinger.md`
- `JavaScript/apex.util.md`
- `JavaScript/apex.widget.md`
- `JavaScript/actions.md`
- `JavaScript/cardsRegion.md`
- `JavaScript/facetsRegion.md`
- `JavaScript/grid.md`
- `JavaScript/htmlBuilder.md`
- `JavaScript/iconList.md`
- `JavaScript/item.md`
- `JavaScript/region.md`
- `JavaScript/interactiveGrid.md`
- `JavaScript/interactiveGridView.md`
- `JavaScript/interactiveReportRegion.md`
- `JavaScript/mapRegion.md`
- `JavaScript/menu.md`
- `JavaScript/menuButton.md`
- `JavaScript/model.md`
- `JavaScript/Non-namespace_APIs.md`
- `JavaScript/numberFieldItem.md`
- `JavaScript/recordView.md`
- `JavaScript/tableModelView.md`
- `JavaScript/tableModelViewBase.md`
- `JavaScript/templateReportRegion.md`
- `JavaScript/treeNodeAdapter.md`
- `JavaScript/treeView.md`
- `skills/apex-26-1-api/references/LLM_SKILL_INDEX.md`
