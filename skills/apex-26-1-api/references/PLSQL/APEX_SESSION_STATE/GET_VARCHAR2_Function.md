# APEX_SESSION_STATE.GET_VARCHAR2 Function

Source: [Oracle APEX 26.1 API Reference](https://docs.oracle.com/en/database/oracle/apex/26.1/aeapi/APEX_SESSION_STATE.GET_VARCHAR2-Function.html)

Status: generated detailed reference. Review edge cases against the source before production use.

Parent package: [APEX_SESSION_STATE](../APEX_SESSION_STATE.md)

## Purpose

This function returns the value of a VARCHAR2 item identified by p_item . This function is the equivalent of the V function. This function raises an exception for values of data type CLOB.

## When To Use

Use this page when code needs the `APEX_SESSION_STATE.GET_VARCHAR2` function. Confirm security, workspace, and session requirements for your calling context.

## Signature

```sql
APEX_SESSION_STATE.GET_VARCHAR2 (
    p_item IN VARCHAR2 )
RETURN VARCHAR2;
```

## Returns

This function returns the value of the specified item as VARCHAR2. Parent topic: APEX_SESSION_STATE

## Important Notes

- Most APEX APIs assume the correct APEX workspace, application, and session context.
- Validate user-controlled values before passing them into administrative, security, SQL, or web-service APIs.
- Use the source link for exact behavior, defaults, and version-specific caveats.

## Example

Use GET_VARCHAR2 for ordinary text item state.

```sql
declare
    l_status varchar2(32767);
begin
    l_status := apex_session_state.get_varchar2(
        p_item => 'P10_STATUS');
end;
/
```
