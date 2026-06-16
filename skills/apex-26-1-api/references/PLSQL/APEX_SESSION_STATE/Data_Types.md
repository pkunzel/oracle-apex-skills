# APEX_SESSION_STATE.Data Types

Source: [Oracle APEX 26.1 API Reference](https://docs.oracle.com/en/database/oracle/apex/26.1/aeapi/APEX_SESSION_STATE-Data-Types.html)

Status: generated detailed reference. Review edge cases against the source before production use.

Parent package: [APEX_SESSION_STATE](../APEX_SESSION_STATE.md)

## Purpose

The APEX_SESSION_STATE package uses the following data types.

## When To Use

Use this page when code needs the `APEX_SESSION_STATE.Data Types` data types. Confirm security, workspace, and session requirements for your calling context.

## Important Notes

- Most APEX APIs assume the correct APEX workspace, application, and session context.
- Validate user-controlled values before passing them into administrative, security, SQL, or web-service APIs.
- Use the source link for exact behavior, defaults, and version-specific caveats.

## Example

Use t_value when code needs to preserve the data type of a session-state value.

```sql
declare
    l_value apex_session_state.t_value;
begin
    l_value.data_type := apex_session_state.c_data_type_varchar2;
    l_value.varchar2_value := 'READY';

    apex_session_state.set_value(
        p_item   => 'P10_STATUS',
        p_value  => l_value,
        p_commit => false);
end;
/
```
