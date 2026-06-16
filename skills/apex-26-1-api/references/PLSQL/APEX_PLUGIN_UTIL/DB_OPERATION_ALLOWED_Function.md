# APEX_PLUGIN_UTIL.DB_OPERATION_ALLOWED Function

Source: [Oracle APEX 26.1 API Reference](https://docs.oracle.com/en/database/oracle/apex/26.1/aeapi/DB_OPERATION_ALLOWED-Function.html)

Status: generated detailed reference. Review edge cases against the source before production use.

Parent package: [APEX_PLUGIN_UTIL](../APEX_PLUGIN_UTIL.md)

## Purpose

This function checks whether a database operation is allowed (contained in the allowed operations) and either raises an APEX error or returns an error message.

## When To Use

Use this page when code needs the `APEX_PLUGIN_UTIL.DB_OPERATION_ALLOWED` function. Confirm security, workspace, and session requirements for your calling context.

## Signature

```sql
APEX_PLUGIN_UTIL.DB_OPERATION_ALLOWED (
    p_allowed_operations   IN VARCHAR2,
    p_operation            IN apex_plugin.t_db_operation,
    p_raise_error          IN BOOLEAN DEFAULT TRUE )
RETURN VARCHAR2;
```

## Parameters

| Parameter | Description |
| --- | --- |
| `p_allowed_operations` | Allowed operations (U, UD, D). |
| `p_operation` | Operation to check for. |
| `p_raise_error` | Whether to raise an error if the operation is not allowed (default TRUE ). |

## Returns

NULL if the operation is allowed. If not allowed, an error message and p_raise_error is FALSE.

## Important Notes

- Most APEX APIs assume the correct APEX workspace, application, and session context.
- Validate user-controlled values before passing them into administrative, security, SQL, or web-service APIs.
- Use the source link for exact behavior, defaults, and version-specific caveats.

## Example

Ask APEX to validate whether a REST Data Source DML operation is allowed before making the remote call.

```sql
declare
    l_error varchar2(32767);
begin
    l_error := apex_plugin_util.db_operation_allowed(
        p_allowed_operations => 'UD',
        p_operation          => p_db_operation,
        p_raise_error        => false);

    if l_error is not null then
        apex_error.add_error(
            p_message          => l_error,
            p_display_location => apex_error.c_inline_in_notification);
    end if;
end;
/
```
