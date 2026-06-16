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
APEX_PLUGIN_UTIL.CURRENT_ROW_CHANGED(
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

## Example

Use this in REST Data Source DML code to skip unnecessary updates when old and new row contexts match.

```sql
begin
    if apex_plugin_util.current_row_changed(
        p_old_row_context => p_old_values_context,
        p_new_row_context => p_new_values_context)
    then
        apex_debug.info('REST DML row changed; sending update request.');
    end if;
end;
/
```
