# APEX_SESSION_STATE.Global Constants

Source: [Oracle APEX 26.1 API Reference](https://docs.oracle.com/en/database/oracle/apex/26.1/aeapi/APEX_SESSION_STATE-Global-Constants.html)

Status: generated detailed reference. Review edge cases against the source before production use.

Parent package: [APEX_SESSION_STATE](../APEX_SESSION_STATE.md)

## Purpose

The the t_value record in the APEX_SESSION_STATE package uses the following data type constants.

## When To Use

Use this page when code needs the `APEX_SESSION_STATE.Global Constants` constants. Confirm security, workspace, and session requirements for your calling context.

## Important Notes

- Most APEX APIs assume the correct APEX workspace, application, and session context.
- Validate user-controlled values before passing them into administrative, security, SQL, or web-service APIs.
- Use the source link for exact behavior, defaults, and version-specific caveats.

## Example

Use the data-type constants when constructing a generic t_value record.

```sql
declare
    l_value apex_session_state.t_value;
begin
    l_value.data_type := apex_session_state.c_data_type_boolean;
    l_value.boolean_value := true;

    apex_session_state.set_value(
        p_item   => 'P10_INCLUDE_DONE',
        p_value  => l_value,
        p_commit => false);
end;
/
```
