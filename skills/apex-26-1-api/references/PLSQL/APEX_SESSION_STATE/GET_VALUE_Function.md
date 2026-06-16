# APEX_SESSION_STATE.GET_VALUE Function

Source: [Oracle APEX 26.1 API Reference](https://docs.oracle.com/en/database/oracle/apex/26.1/aeapi/APEX_SESSION_STATE.GET_VALUE-Function.html)

Status: generated detailed reference. Review edge cases against the source before production use.

Parent package: [APEX_SESSION_STATE](../APEX_SESSION_STATE.md)

## Purpose

This function returns the value of a page item identified by p_item as a generic T_VALUE.

## When To Use

Use this page when code needs the `APEX_SESSION_STATE.GET_VALUE` function. Confirm security, workspace, and session requirements for your calling context.

## Signature

```sql
APEX_SESSION_STATE.GET_VALUE (
    p_item IN VARCHAR2 )
RETURN T_VALUE;
```

## Returns

This function returns the value of the specified item as T_VALUE. Parent topic: APEX_SESSION_STATE

## Important Notes

- Most APEX APIs assume the correct APEX workspace, application, and session context.
- Validate user-controlled values before passing them into administrative, security, SQL, or web-service APIs.
- Use the source link for exact behavior, defaults, and version-specific caveats.

## Example

Read a generic value and branch by its stored data type.

```sql
declare
    l_value apex_session_state.t_value;
begin
    l_value := apex_session_state.get_value(
        p_item => 'P10_STATUS');

    if l_value.data_type = apex_session_state.c_data_type_varchar2 then
        apex_debug.info('Status: %s', l_value.varchar2_value);
    end if;
end;
/
```
