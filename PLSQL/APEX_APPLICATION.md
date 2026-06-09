# APEX_APPLICATION

Source: [Oracle APEX 26.1 API Reference](https://docs.oracle.com/en/database/oracle/apex/26.1/aeapi/APEX_APPLICATION.html)

Status: curated first-pass reference.

## Purpose

`APEX_APPLICATION` exposes core request globals, legacy submitted-array globals, help output, and `STOP_APEX_ENGINE`. It is not a general application-management package; use it mainly for runtime context and custom response control.

Most modern code should prefer higher-level packages such as `APEX_SESSION_STATE`, `APEX_PAGE`, `APEX_REGION`, `APEX_UTIL`, and `APEX_JSON`. Use `APEX_APPLICATION` directly when the code intentionally works with APEX request globals or needs to stop the engine after writing a custom HTTP response.

## When To Use

Use `APEX_APPLICATION` when:

- An Ajax callback reads `G_X01` through `G_X10` values sent by `apex.server.process`.
- Legacy tabular form or `F01` style arrays are still in use.
- A custom page process writes a file or non-HTML response and must stop APEX from appending page markup.
- A custom help page needs to render page/item help text.
- Code needs current runtime globals such as application ID, page ID, session ID, image prefix, request, or user.

Avoid new `G_Fnn` array designs unless maintaining legacy code. Prefer Interactive Grid, collections, JSON payloads, or declarative forms.

## API Surface

| Need | Members |
| --- | --- |
| Request/runtime context | `Global Variables` |
| Ajax scalar payloads | `G_X01` through `G_X10` globals |
| Legacy array payloads | `G_F01` through `G_F50` globals |
| Help text rendering | `HELP` |
| Custom response termination | `STOP_APEX_ENGINE` |

## Ajax Callback Globals

Assuming JavaScript calls an Ajax process named `SAVE_NOTE` with `x01` and `x02`:

```javascript
apex.server.process( "SAVE_NOTE", {
    x01: apex.item( "P10_TASK_ID" ).getValue(),
    x02: apex.item( "P10_NOTE" ).getValue()
} );
```

The PL/SQL Ajax callback can read the values from `APEX_APPLICATION` globals:

```sql
declare
    l_task_id number;
    l_note    varchar2(4000);
begin
    l_task_id := to_number(apex_application.g_x01);
    l_note    := apex_application.g_x02;

    insert into task_notes(task_id, note_text, created_by, created_on)
    values (l_task_id, l_note, apex_application.g_user, systimestamp);
end;
/
```

Validate and convert request globals explicitly. They are client-supplied values.

## Legacy `G_Fnn` Array Pattern

Assuming a legacy report submits arrays `F01` as selected IDs and `F02` as comments:

```sql
begin
    for i in 1 .. apex_application.g_f01.count loop
        update tasks
           set reviewer_comment = apex_application.g_f02(i)
         where task_id = to_number(apex_application.g_f01(i));
    end loop;
end;
/
```

For new work, prefer page items, Interactive Grid processing, JSON payloads with `APEX_JSON`, or `APEX_COLLECTION`.

## Custom Response And Stop Engine

Assuming a page process returns CSV:

```sql
begin
    owa_util.mime_header('text/csv', false);
    htp.p('Content-Disposition: attachment; filename="tasks.csv"');
    owa_util.http_header_close;

    htp.p('TASK_ID,TASK_NAME');
    for r in (select task_id, task_name from tasks order by task_id) loop
        htp.p(r.task_id || ',' || apex_escape.csv(r.task_name));
    end loop;

    apex_application.stop_apex_engine;
end;
/
```

Call `STOP_APEX_ENGINE` only after the response is complete. Many APEX download APIs call it for you.

## Help Text Rendering

```sql
begin
    apex_application.help(
        p_flow_id        => apex_application.g_flow_id,
        p_flow_step_id   => apex_application.g_flow_step_id,
        p_show_item_help => 'YES',
        p_show_regions   => 'YES');
end;
/
```

Use this for custom help pages. Escape any custom wrapper HTML you compose from user-controlled values.

## Notes

- `G_Xnn` and `G_Fnn` values are request data, not trusted server state.
- Prefer `APEX_SESSION_STATE` for page item values in PL/SQL.
- `STOP_APEX_ENGINE` prevents APEX from appending normal page markup after custom output.
- Catching exceptions around `STOP_APEX_ENGINE` can accidentally continue rendering; keep custom response code small and deliberate.

<!-- BEGIN GENERATED MEMBER LINKS -->

## Local Member Detail Pages

Generated navigation for LLM retrieval. Use the local detail page first, then follow the Oracle source link when exact wording or edge-case behavior must be verified.

| Member | Kind | Local detail | Source |
| --- | --- | --- | --- |
| Working with G_Fnn Arrays (Legacy) | topic | [local](APEX_APPLICATION/Working_with_G_Fnn_Arrays_(Legacy).md) | [Oracle](https://docs.oracle.com/en/database/oracle/apex/26.1/aeapi/working-with-g_fnn-arrays.html) |
| Global Variables | topic | [local](APEX_APPLICATION/Global_Variables.md) | [Oracle](https://docs.oracle.com/en/database/oracle/apex/26.1/aeapi/APEX_APPLICATION-Global-Variables.html) |
| HELP Procedure | procedure | [local](APEX_APPLICATION/HELP_Procedure.md) | [Oracle](https://docs.oracle.com/en/database/oracle/apex/26.1/aeapi/HELP-Procedure.html) |
| STOP_APEX_ENGINE Procedure | procedure | [local](APEX_APPLICATION/STOP_APEX_ENGINE_Procedure.md) | [Oracle](https://docs.oracle.com/en/database/oracle/apex/26.1/aeapi/STOP_APEX_ENGINE-Procedure.html) |

<!-- END GENERATED MEMBER LINKS -->
