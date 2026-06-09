# APEX_PLUGIN_UTIL.CURRENT_ROW_CHANGED Function

Source: [Oracle APEX 26.1 API Reference](https://docs.oracle.com/en/database/oracle/apex/26.1/aeapi/CURRENT_ROW_CHANGED-Function.html)

Status: generated detailed reference. Review edge cases against the source before production use.

Parent package: [APEX_PLUGIN_UTIL](../APEX_PLUGIN_UTIL.md)

## Purpose

This function determines whether the current row changed between the two contexts. In order to compare the next row within the value context, use APEX_EXEC.NEXT_ROW for both contexts.

## When To Use

Use this page when code needs the `APEX_PLUGIN_UTIL.CURRENT_ROW_CHANGED` function. Confirm security, workspace, and session requirements for your calling context.

## Signature

```sql
API_PLUGIN_UTIL.CURRENT_ROW_CHANGED(
    p_old_row_context       IN apex_exec.t_context,
    p_new_row_context       IN apex_exec.t_context )
RETURN BOOLEAN;
```

## Parameters

| Parameter | Description |
| --- | --- |
| `p_old_row_context` | Values context containing values before the change. |
| `p_new_row_context` | Values context containing values after the change. |

## Returns

Parameter Description * Whether there is a difference between the rows.

## Important Notes

- Most APEX APIs assume the correct APEX workspace, application, and session context.
- Validate user-controlled values before passing them into administrative, security, SQL, or web-service APIs.
- Use the source link for exact behavior, defaults, and version-specific caveats.

## Simple Example

```sql
declare
    l_result BOOLEAN;
begin
    l_result := apex_plugin_util.CURRENT_ROW_CHANGED(
        p_old_row_context => to_clob('Example text'),
        p_new_row_context => to_clob('Example text')
    );
    sys.dbms_output.put_line('Result captured.');
end;
/
```

## More Complex Example

```sql
declare
    l_result BOOLEAN;
begin
    -- Assuming this runs outside a normal APEX page request.
    apex_session.create_session(
        p_app_id   => 100,
        p_page_id  => 1,
        p_username => 'USER');

    l_result := apex_plugin_util.CURRENT_ROW_CHANGED(
            p_old_row_context => to_clob('Example text'),
            p_new_row_context => to_clob('Example text')
        );

    apex_session.delete_session;
exception
    when others then
        apex_session.delete_session;
        raise;
end;
/
```

