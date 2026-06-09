# APEX 26.1 Reference For LLM Skills

This is the retrieval entrypoint for LLM Skills and GPT creation.

Use this file first, then open the package/module guide, then open generated member detail pages when exact signatures or parameter descriptions are needed.

## Source Of Truth

- PL/SQL index: [PLSQL/INDEX.md](PLSQL/INDEX.md)
- JavaScript index: [JavaScript/INDEX.md](JavaScript/INDEX.md)

## How To Answer APEX Coding Questions

1. Identify whether the task is PL/SQL, JavaScript, or mixed page behavior.
2. Start with the curated package/module guide below.
3. If a function/procedure signature matters, open the local member page linked from the package guide.
4. Prefer short examples that run inside an APEX page/session.
5. State assumptions explicitly when table structure, page items, static IDs, credentials, or REST sources are required.
6. For production-sensitive code, include validation, authorization, and cleanup notes.

## High-Value PL/SQL Routes

| User intent | Start here | Then inspect |
| --- | --- | --- |
| AI calls, AI Agents, tools, attachments | [APEX_AI](PLSQL/APEX_AI.md) | `PLSQL/APEX_AI/*` |
| Analyze application database object dependencies | [APEX_APP_OBJECT_DEPENDENCY](PLSQL/APEX_APP_OBJECT_DEPENDENCY.md) | `SCAN`, `CLEAR_CACHE` |
| Export applications/workspaces for CI/CD | [APEX_EXPORT](PLSQL/APEX_EXPORT.md) | `GET_APPLICATION`, `GET_WORKSPACE`, `ZIP`, `UNZIP` |
| Import/install applications with remapping | [APEX_APPLICATION_INSTALL](PLSQL/APEX_APPLICATION_INSTALL.md) | `SET_WORKSPACE`, `SET_SCHEMA`, `GENERATE_APPLICATION_ID`, `INSTALL` |
| Modify installed application attributes | [APEX_APPLICATION_ADMIN](PLSQL/APEX_APPLICATION_ADMIN.md) | `SET_APPLICATION_STATUS`, `SET_BUILD_STATUS`, `SET_BUILD_OPTION_STATUS` |
| Load supporting object seed data | [APEX_DATA_INSTALL](PLSQL/APEX_DATA_INSTALL.md) | `LOAD_SUPPORTING_OBJECT_DATA` |
| Instance/workspace administration | [APEX_INSTANCE_ADMIN](PLSQL/APEX_INSTANCE_ADMIN.md) | `ADD_WORKSPACE`, `ADD_SCHEMA`, `SET_PARAMETER`, `RESERVE_WORKSPACE_APP_IDS` |
| Instance-level diagnostics | [APEX_INSTANCE_DEBUG](PLSQL/APEX_INSTANCE_DEBUG.md) | `ENABLE`, `LIST_MESSAGES`, `LIST_PAGE_VIEWS`, `DISABLE` |
| Create/attach APEX session from scripts | [APEX_SESSION](PLSQL/APEX_SESSION.md) | `CREATE_SESSION`, `ATTACH`, `DETACH`, `DELETE_SESSION` |
| Temporary session row sets/wizards/uploads | [APEX_COLLECTION](PLSQL/APEX_COLLECTION.md) | `ADD_MEMBER`, `CREATE_COLLECTION_FROM_QUERY`, `UPDATE_MEMBER_ATTRIBUTE` |
| Emit or parse JSON | [APEX_JSON](PLSQL/APEX_JSON.md) | `WRITE`, `PARSE`, `GET_*`, `INITIALIZE_CLOB_OUTPUT` |
| Direct HTTP/REST/SOAP calls | [APEX_WEB_SERVICE](PLSQL/APEX_WEB_SERVICE.md) | `MAKE_REST_REQUEST`, `SET_REQUEST_HEADERS`, `APPEND_TO_MULTIPART` |
| Download BLOB/CLOB responses | [APEX_HTTP](PLSQL/APEX_HTTP.md) | `DOWNLOAD` |
| Query or DML over local/remote/REST sources | [APEX_EXEC](PLSQL/APEX_EXEC.md) | `OPEN_QUERY_CONTEXT`, `NEXT_ROW`, `GET_*`, `EXECUTE_DML` |
| Synchronize REST Data Sources to local tables | [APEX_REST_SOURCE_SYNC](PLSQL/APEX_REST_SOURCE_SYNC.md) | `SYNCHRONIZE_DATA`, `DYNAMIC_SYNCHRONIZE_DATA`, `RESCHEDULE` |
| Inspect schema/table metadata for AI or builders | [APEX_DB_DICTIONARY](PLSQL/APEX_DB_DICTIONARY.md) | `GET_METADATA`, `FORMAT_METADATA`, `GET_TABLES_JSON` |
| Page item session state in PL/SQL | [APEX_SESSION_STATE](PLSQL/APEX_SESSION_STATE.md) | `GET_VARCHAR2`, `GET_NUMBER`, `GET_BOOLEAN`, `GET_CLOB`, `SET_VALUE` |
| APEX page URLs, cache, read-only checks | [APEX_PAGE](PLSQL/APEX_PAGE.md) | `GET_URL`, `PURGE_CACHE`, `IS_READ_ONLY`, `GET_PAGE_MODE` |
| Parse uploaded CSV/XLSX/JSON/XML files | [APEX_DATA_PARSER](PLSQL/APEX_DATA_PARSER.md) | `PARSE`, `DISCOVER`, `GET_FILE_PROFILE` |
| Run declarative Data Loading definitions | [APEX_DATA_LOADING](PLSQL/APEX_DATA_LOADING.md) | `LOAD_DATA`, `GET_FILE_PROFILE` |
| Export custom query contexts | [APEX_DATA_EXPORT](PLSQL/APEX_DATA_EXPORT.md) | `EXPORT`, `DOWNLOAD`, `ADD_COLUMN`, `GET_PRINT_CONFIG` |
| Read, export, reset, or cache regions | [APEX_REGION](PLSQL/APEX_REGION.md) | `OPEN_QUERY_CONTEXT`, `EXPORT_DATA`, `GET_ID`, `RESET` |
| Interactive Report filters and saved reports | [APEX_IR](PLSQL/APEX_IR.md) | `ADD_FILTER`, `CLEAR_REPORT`, `RESET_REPORT`, `GET_LAST_VIEWED_REPORT_ID` |
| Interactive Grid filters and saved reports | [APEX_IG](PLSQL/APEX_IG.md) | `ADD_FILTER`, `CLEAR_REPORT`, `RESET_REPORT`, `GET_LAST_VIEWED_REPORT_ID` |
| Authentication, login, logout, external identity callbacks | [APEX_AUTHENTICATION](PLSQL/APEX_AUTHENTICATION.md) | `LOGIN`, `POST_LOGIN`, `GET_CALLBACK_URL`, `LOGOUT` |
| Legacy custom authentication maintenance | [APEX_CUSTOM_AUTH](PLSQL/APEX_CUSTOM_AUTH.md) | `LOGIN`, `POST_LOGIN`, `IS_SESSION_VALID` |
| LDAP bind/search/group checks | [APEX_LDAP](PLSQL/APEX_LDAP.md) | `AUTHENTICATE`, `SEARCH`, `MEMBER_OF2` |
| Authorization scheme checks and cache reset | [APEX_AUTHORIZATION](PLSQL/APEX_AUTHORIZATION.md) | `HAS_ACCESS`, `IS_AUTHORIZED`, `RESET_CACHE` |
| Application ACL role assignments | [APEX_ACL](PLSQL/APEX_ACL.md) | `ADD_USER_ROLE`, `REPLACE_USER_ROLES`, `HAS_USER_ROLE` |
| Web credentials, tokens, secret-backed integrations | [APEX_CREDENTIAL](PLSQL/APEX_CREDENTIAL.md) | `CREATE_CREDENTIAL`, `SET_*_CREDENTIALS`, `SET_*_TOKEN` |
| Application settings and feature flags | [APEX_APP_SETTING](PLSQL/APEX_APP_SETTING.md) | `GET_VALUE`, `SET_VALUE` |
| Workflows and long-running business processes | [APEX_WORKFLOW](PLSQL/APEX_WORKFLOW.md) | `START_WORKFLOW`, `GET_WORKFLOWS`, `CONTINUE_ACTIVITY`, `TERMINATE` |
| Human tasks and approvals | [APEX_HUMAN_TASK](PLSQL/APEX_HUMAN_TASK.md) | `CREATE_TASK`, `GET_TASKS`, `APPROVE_TASK`, `REJECT_TASK` |
| Legacy approval-task code | [APEX_APPROVAL](PLSQL/APEX_APPROVAL.md) | prefer `APEX_HUMAN_TASK` for new work |
| Automations and scheduled processing | [APEX_AUTOMATION](PLSQL/APEX_AUTOMATION.md) | `EXECUTE`, `ENABLE`, `DISABLE`, `RESCHEDULE`, `TERMINATE` |
| Background process status/progress | [APEX_BACKGROUND_PROCESS](PLSQL/APEX_BACKGROUND_PROCESS.md) | `SET_STATUS`, `SET_PROGRESS`, `GET_EXECUTION`, `TERMINATE` |
| Session state and user utilities | [APEX_UTIL](PLSQL/APEX_UTIL.md) | local member pages |
| Request globals, legacy arrays, custom response stop | [APEX_APPLICATION](PLSQL/APEX_APPLICATION.md) | `G_Xnn`, `G_Fnn`, `HELP`, `STOP_APEX_ENGINE` |
| Escape output for HTML, JS, JSON, CSV, LDAP, regex | [APEX_ESCAPE](PLSQL/APEX_ESCAPE.md) | `HTML`, `HTML_ATTRIBUTE`, `JS_LITERAL`, `JSON`, `CSV`, `HTML_ALLOWLIST` |
| Translate messages and publish translated apps | [APEX_LANG](PLSQL/APEX_LANG.md) | `GET_MESSAGE`, `CREATE_MESSAGE`, `SEED_TRANSLATIONS`, `PUBLISH_APPLICATION` |
| Render Markdown as HTML | [APEX_MARKDOWN](PLSQL/APEX_MARKDOWN.md) | `TO_HTML` |
| Encode/decode/validate JWTs | [APEX_JWT](PLSQL/APEX_JWT.md) | `ENCODE`, `DECODE`, `VALIDATE` |
| Register JavaScript from PL/SQL | [APEX_JAVASCRIPT](PLSQL/APEX_JAVASCRIPT.md) | `ADD_LIBRARY`, `ADD_ONLOAD_CODE`, `ADD_ATTRIBUTE`, `ADD_VALUE` |
| Register CSS from PL/SQL | [APEX_CSS](PLSQL/APEX_CSS.md) | `ADD`, `ADD_FILE` |
| Custom plug-ins and callback records | [APEX_PLUGIN](PLSQL/APEX_PLUGIN.md) | `t_item_*`, `t_region_*`, `GET_AJAX_IDENTIFIER`, `GET_INPUT_NAME_FOR_ITEM` |
| Plug-in rendering, LOV, debug, REST helpers | [APEX_PLUGIN_UTIL](PLSQL/APEX_PLUGIN_UTIL.md) | `PRINT_HIDDEN_IF_READONLY`, `PRINT_LOV_AS_JSON`, `GET_DISPLAY_DATA`, `MAKE_REST_REQUEST` |
| APEX Builder extension apps | [APEX_EXTENSION](PLSQL/APEX_EXTENSION.md) | `ADD_MENU_ENTRY`, `GET_BUILDER_LINK`, `SET_WORKSPACE` |
| Publish or refresh shared components | [APEX_SHARED_COMPONENT](PLSQL/APEX_SHARED_COMPONENT.md) | `PUBLISH`, `REFRESH` |
| PWA push notifications from PL/SQL | [APEX_PWA](PLSQL/APEX_PWA.md) | `HAS_PUSH_SUBSCRIPTION`, `SEND_PUSH_NOTIFICATION`, `PUSH_QUEUE` |
| Generate printable documents | [APEX_PRINT](PLSQL/APEX_PRINT.md) | `GENERATE_DOCUMENT`, `UPLOAD_TEMPLATE`, `REMOVE_TEMPLATE` |
| Generate QR codes and barcodes | [APEX_BARCODE](PLSQL/APEX_BARCODE.md) | `GET_QRCODE_SVG`, `GET_QRCODE_PNG`, `GET_CODE128_*` |
| Run declarative Search Configurations | [APEX_SEARCH](PLSQL/APEX_SEARCH.md) | `SEARCH`, `QUERY_SEARCH_ENGINE`, `QUERY_EXPERT_SEARCH` |
| Generate demo/test data from blueprints | [APEX_DG_DATA_GEN](PLSQL/APEX_DG_DATA_GEN.md) | `ADD_BLUEPRINT`, `ADD_TABLE`, `ADD_COLUMN`, `GENERATE_DATA` |
| Spatial point/polygon/metadata helpers | [APEX_SPATIAL](PLSQL/APEX_SPATIAL.md) | `POINT`, `CIRCLE_POLYGON`, `INSERT_GEOM_METADATA_LONLAT` |
| String split/join/format helpers | [APEX_STRING](PLSQL/APEX_STRING.md) | local member pages |
| Higher-level text extraction, slugs, diffs | [APEX_STRING_UTIL](PLSQL/APEX_STRING_UTIL.md) | `FIND_EMAIL_ADDRESSES`, `GET_SLUG`, `DIFF` |
| Errors and validation | [APEX_ERROR](PLSQL/APEX_ERROR.md) | local member pages |
| Debug logging | [APEX_DEBUG](PLSQL/APEX_DEBUG.md) | local member pages |
| Email | [APEX_MAIL](PLSQL/APEX_MAIL.md) | local member pages |
| Files and archives | [APEX_ZIP](PLSQL/APEX_ZIP.md) | local member pages |
| Theme style preferences | [APEX_THEME](PLSQL/APEX_THEME.md) | `SET_USER_STYLE`, `SET_SESSION_STYLE_CSS`, `GET_USER_STYLE` |
| UI Defaults and Attribute Dictionary automation | [APEX_UI_DEFAULT_UPDATE](PLSQL/APEX_UI_DEFAULT_UPDATE.md) | `SYNCH_TABLE`, `UPD_COLUMN`, `ADD_AD_COLUMN` |

## High-Value JavaScript Routes

| User intent | Start here |
| --- | --- |
| Root namespace, environment, page events | [apex](JavaScript/apex.md) |
| Ajax calls to PL/SQL | [apex.server](JavaScript/apex.server.md) |
| Page item values and custom item plug-ins | [apex.item](JavaScript/apex.item.md) |
| Item interface returned by `apex.item(...)` | [item](JavaScript/item.md) |
| Success/error messages, dialogs, accessibility announcements | [apex.message](JavaScript/apex.message.md) |
| Navigate, redirect, dialogs, popup windows | [apex.navigation](JavaScript/apex.navigation.md) |
| Close/cancel dialog pages | [apex.navigation.dialog](JavaScript/apex.navigation.dialog.md) |
| Close popup windows with return value | [apex.navigation.popup](JavaScript/apex.navigation.popup.md) |
| Refresh/focus/find regions | [apex.region](JavaScript/apex.region.md) |
| Region interface returned by `apex.region(...)` | [region](JavaScript/region.md) |
| Interactive Grid actions, views, selection | [interactiveGrid](JavaScript/interactiveGrid.md) |
| Interactive Grid view/model records | [interactiveGridView](JavaScript/interactiveGridView.md) |
| Low-level grid widget cells, columns, edit mode | [grid](JavaScript/grid.md) |
| Interactive Report selection/current row | [interactiveReportRegion](JavaScript/interactiveReportRegion.md) |
| Cards region paging, selection, model records | [cardsRegion](JavaScript/cardsRegion.md) |
| Faceted Search and Smart Filters | [facetsRegion](JavaScript/facetsRegion.md) |
| Map region layers, features, popups, position | [mapRegion](JavaScript/mapRegion.md) |
| Template Component report selection/paging | [templateReportRegion](JavaScript/templateReportRegion.md) |
| Low-level table/list model-backed views | [tableModelView](JavaScript/tableModelView.md) |
| Shared table/list view base behavior | [tableModelViewBase](JavaScript/tableModelViewBase.md) |
| Form-like model record views | [recordView](JavaScript/recordView.md) |
| Submit/validate/warn on changes | [apex.page](JavaScript/apex.page.md) |
| Actions, menus, keyboard shortcuts | [apex.actions](JavaScript/apex.actions.md) |
| Scoped action context methods | [actions](JavaScript/actions.md) |
| Interactive/report data models | [apex.model](JavaScript/apex.model.md) |
| Model instance records, edits, saves, metadata | [model](JavaScript/model.md) |
| Tree widgets and expansion/selection | [treeView](JavaScript/treeView.md) |
| Tree data adapter interface | [treeNodeAdapter](JavaScript/treeNodeAdapter.md) |
| Popup menus and context menus | [menu](JavaScript/menu.md) |
| Buttons that launch menus | [menuButton](JavaScript/menuButton.md) |
| Icon/list selection widget | [iconList](JavaScript/iconList.md) |
| Utility helpers | [apex.util](JavaScript/apex.util.md) |
| Escaped client HTML fragments | [htmlBuilder](JavaScript/htmlBuilder.md) |
| Number field item interface | [numberFieldItem](JavaScript/numberFieldItem.md) |
| Dynamic Action plug-in flow control | [apex.da](JavaScript/apex.da.md) |
| Browser storage and cookies | [apex.storage](JavaScript/apex.storage.md) |
| Progressive Web App install and push UI | [apex.pwa](JavaScript/apex.pwa.md) |
| Theme open/close region helpers and media queries | [apex.theme](JavaScript/apex.theme.md) |
| Wait popup and low-level widget helpers | [apex.widget](JavaScript/apex.widget.md) |
| Translated JavaScript messages | [apex.lang](JavaScript/apex.lang.md) |
| Locale-aware client formatting/parsing | [apex.locale](JavaScript/apex.locale.md) |
| Date math and due-date UI | [apex.date](JavaScript/apex.date.md) |
| Spinner timing for async work | [apex.util.delayLinger](JavaScript/apex.util.delayLinger.md) |
| Events | [apex.event](JavaScript/apex.event.md) |
| Browser-side diagnostics | [apex.debug](JavaScript/apex.debug.md) |
| Legacy global helper functions | [Non-namespace APIs](JavaScript/Non-namespace_APIs.md) |

## Mixed Client/Server Recipes

### Ajax Process Returning JSON

Use:

- JavaScript: [apex.server](JavaScript/apex.server.md)
- PL/SQL: [APEX_JSON](PLSQL/APEX_JSON.md)

```javascript
apex.server.process( "GET_STATUS", {
    x01: $v( "P10_ID" )
} ).done( function( data ) {
    apex.message.showPageSuccess( data.message );
} );
```

```sql
begin
    apex_json.open_object;
    apex_json.write('message', 'Ready');
    apex_json.close_object;
end;
/
```

### Upload/Review/Commit Workflow

Use:

- [APEX_COLLECTION](PLSQL/APEX_COLLECTION.md) for staging rows.
- [APEX_DATA_PARSER](PLSQL/APEX_DATA_PARSER.md) for uploaded CSV/XLSX/JSON/XML parsing.
- [APEX_DATA_LOADING](PLSQL/APEX_DATA_LOADING.md) when a declarative Data Loading definition should own the import.
- [APEX_JSON](PLSQL/APEX_JSON.md) for Ajax status.
- [apex.region](JavaScript/apex.region.md) to refresh review regions.

Assuming a parsed upload process inserts rows into a collection:

```sql
begin
    apex_collection.create_or_truncate_collection('UPLOAD_REVIEW');
    apex_collection.add_member(
        p_collection_name => 'UPLOAD_REVIEW',
        p_c001            => 'SKU-100',
        p_n001            => 10);
end;
/
```

### Region Export Workflow

Use:

- [APEX_REGION](PLSQL/APEX_REGION.md) when exporting a declarative report region.
- [APEX_DATA_EXPORT](PLSQL/APEX_DATA_EXPORT.md) when exporting a custom `APEX_EXEC` query context.
- [interactiveGrid](JavaScript/interactiveGrid.md) or [interactiveReportRegion](JavaScript/interactiveReportRegion.md) when a client button controls the current region.

Assuming page 10 has a report region with Static ID `orders_report`:

```sql
declare
    l_region_id number;
    l_export    apex_data_export.t_export;
begin
    l_region_id := apex_region.get_id(
        p_page_id       => 10,
        p_dom_static_id => 'orders_report');

    l_export := apex_region.export_data(
        p_format    => apex_data_export.c_format_xlsx,
        p_page_id   => 10,
        p_region_id => l_region_id,
        p_file_name => 'orders');

    apex_data_export.download(l_export);
end;
/
```

### Safe Server-Rendered Markup

Use:

- [APEX_ESCAPE](PLSQL/APEX_ESCAPE.md) for context-specific escaping.
- [APEX_JAVASCRIPT](PLSQL/APEX_JAVASCRIPT.md) for script files and safe JavaScript config snippets.
- [APEX_CSS](PLSQL/APEX_CSS.md) for component CSS.
- [APEX_PLUGIN](PLSQL/APEX_PLUGIN.md) and [APEX_PLUGIN_UTIL](PLSQL/APEX_PLUGIN_UTIL.md) when the markup is emitted from a plug-in callback.
- [htmlBuilder](JavaScript/htmlBuilder.md) for small escaped client-side fragments.

Assuming a component renders a region with Static ID `tasks`:

```sql
begin
    apex_css.add_file(
        p_name      => 'tasks',
        p_directory => '#APP_FILES#css/');

    apex_javascript.add_onload_code(
        p_code => 'apex.region("tasks").refresh();',
        p_key  => 'refresh-tasks');

    htp.p('<span title="' ||
          apex_escape.html_attribute(:P10_STATUS) ||
          '">' ||
          apex_escape.html(:P10_LABEL) ||
          '</span>');
end;
/
```

### Custom Plug-In Component

Use:

- [APEX_PLUGIN](PLSQL/APEX_PLUGIN.md) for callback types, result records, and Ajax identifiers.
- [APEX_PLUGIN_UTIL](PLSQL/APEX_PLUGIN_UTIL.md) for readonly item output, LOV JSON, debug helpers, and REST source plug-in helpers.
- [APEX_JAVASCRIPT](PLSQL/APEX_JAVASCRIPT.md) and [APEX_CSS](PLSQL/APEX_CSS.md) to register plug-in assets.
- [apex.item](JavaScript/apex.item.md) plus [item](JavaScript/item.md) for custom item plug-ins.
- [apex.region](JavaScript/apex.region.md) plus [region](JavaScript/region.md) for custom region plug-ins.
- [actions](JavaScript/actions.md) for scoped component commands.

Assuming an item plug-in render callback outputs a custom control:

```sql
sys.htp.p(
    '<input id="' || apex_escape.html_attribute(p_item.name) || '"' ||
    ' name="' || apex_escape.html_attribute(apex_plugin.get_input_name_for_item(false)) || '"' ||
    ' value="' || apex_escape.html_attribute(p_param.value) || '">');
```

Register client behavior so APEX can interact with the custom item:

```javascript
apex.item.create( "P10_RATING", function( baseItem ) {
    const item$ = apex.jQuery( "#P10_RATING" );

    baseItem.getValue = function() {
        return item$.attr( "data-value" ) || "";
    };

    baseItem.setValue = function( value, displayValue, suppressChangeEvent ) {
        item$.attr( "data-value", value || "" );

        if ( !suppressChangeEvent ) {
            item$.trigger( "change" );
        }
    };
} );
```

### External REST Integration

Use:

- [APEX_WEB_SERVICE](PLSQL/APEX_WEB_SERVICE.md) for direct HTTP calls.
- [APEX_JSON](PLSQL/APEX_JSON.md) or `sys.json_object_t` for JSON parsing.
- [APEX_EXEC](PLSQL/APEX_EXEC.md) when the REST source is modeled declaratively.

### Search And Filtered Region UI

Use:

- [APEX_SEARCH](PLSQL/APEX_SEARCH.md) for server-side Search Configuration queries.
- [facetsRegion](JavaScript/facetsRegion.md) for Faceted Search and Smart Filters.
- [cardsRegion](JavaScript/cardsRegion.md), [templateReportRegion](JavaScript/templateReportRegion.md), or [mapRegion](JavaScript/mapRegion.md) for client-side region refresh, paging, selection, and map state.

Assuming an Ajax Callback process receives search text in `apex_application.g_x01`:

```sql
begin
    apex_json.open_array;

    for r in (
        select title, link
          from table(
                   apex_search.search(
                       p_search_static_id => 'ORDERS_SEARCH',
                       p_search_expression => apex_application.g_x01))
         where rownum <= 10
    )
    loop
        apex_json.open_object;
        apex_json.write('title', r.title);
        apex_json.write('link', r.link);
        apex_json.close_object;
    end loop;

    apex_json.close_array;
end;
/
```

Refresh a related Cards region when facets change:

```javascript
apex.jQuery( "#order_facets" ).on( "change", function() {
    apex.region( "orders_cards" ).refresh();
} );
```

### Markdown And Generated Content

Use:

- [APEX_MARKDOWN](PLSQL/APEX_MARKDOWN.md) for rendering Markdown returned by users, services, or AI.
- [APEX_ESCAPE](PLSQL/APEX_ESCAPE.md) when outputting values in HTML, attributes, JavaScript, JSON, CSV, LDAP, or regex contexts.
- [APEX_AI](PLSQL/APEX_AI.md) when the Markdown comes from an APEX AI service or AI Agent response.

```sql
begin
    htp.p(
        apex_markdown.to_html(
            p_markdown            => :P10_AI_RESPONSE_MD,
            p_embedded_html_mode  => apex_markdown.c_embedded_html_escape));
end;
/
```

### Document, Barcode, And Download Output

Use:

- [APEX_PRINT](PLSQL/APEX_PRINT.md) for printable documents based on report layouts or uploaded templates.
- [APEX_BARCODE](PLSQL/APEX_BARCODE.md) for QR codes and barcode payloads.
- [APEX_HTTP](PLSQL/APEX_HTTP.md) for emitting BLOB/CLOB file responses.

Assuming a page process should download a QR PNG:

```sql
declare
    l_blob blob;
begin
    l_blob := apex_barcode.get_qrcode_png(
        p_value => apex_page.get_url(p_page => 10),
        p_scale => 6);

    apex_http.download(
        p_blob         => l_blob,
        p_filename     => 'page-link.png',
        p_content_type => 'image/png');

    apex_application.stop_apex_engine;
end;
/
```

### Export/Import Deployment

Use:

- [APEX_EXPORT](PLSQL/APEX_EXPORT.md) to export SQL, APEXlang, embedded code, or split files.
- [APEX_APPLICATION_INSTALL](PLSQL/APEX_APPLICATION_INSTALL.md) to import with workspace, schema, ID, offset, build status, and remote server remaps.
- [APEX_APPLICATION_ADMIN](PLSQL/APEX_APPLICATION_ADMIN.md) for post-install application status and build status changes.

Assuming app `100` should be cloned into workspace `EXAMPLE_WS`:

```sql
declare
    l_source apex_t_export_files;
begin
    l_source := apex_export.get_application(
        p_application_id          => 100,
        p_type                    => apex_export.c_type_sql,
        p_split                   => false,
        p_with_supporting_objects => 'Y');

    apex_application_install.clear_all;
    apex_application_install.set_workspace('EXAMPLE_WS');
    apex_application_install.set_schema('EXAMPLE_APP');
    apex_application_install.generate_application_id;
    apex_application_install.generate_offset;
    apex_application_install.set_build_status('RUN_ONLY');
    apex_application_install.install(l_source);
end;
/
```

### PWA Push Notification Flow

Use:

- [apex.pwa](JavaScript/apex.pwa.md) for install and push subscription UI.
- [APEX_PWA](PLSQL/APEX_PWA.md) for server-side subscription checks and notifications.
- [APEX_PAGE](PLSQL/APEX_PAGE.md) for target URLs.

Client-side subscription:

```javascript
if ( !( await apex.pwa.hasPushSubscription() ) ) {
    await apex.pwa.subscribePushNotifications();
}
```

Server-side notification:

```sql
begin
    if apex_pwa.has_push_subscription(
        p_application_id => :APP_ID,
        p_user_name      => :APP_USER)
    then
        apex_pwa.send_push_notification(
            p_user_name  => :APP_USER,
            p_title      => 'Export ready',
            p_body       => 'Your requested export is available.',
            p_target_url => apex_page.get_url(p_page => 20));
    end if;
end;
/
```

## Retrieval Rules

- Prefer curated pages for strategy and examples.
- Prefer generated member pages for exact signatures and parameter descriptions.
- Prefer official source links for ambiguous edge cases.
- Never invent page item names, Static IDs, Web Credential IDs, or table structures without saying "Assuming ...".
- For code that mutates data, include authorization and validation guidance.
- For generated JavaScript, assume it runs on an APEX page with the `apex` namespace loaded.
