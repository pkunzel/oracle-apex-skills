# APEX_SESSION_STATE.GET_BOOLEAN Function

Source: [Oracle APEX 26.1 API Reference](https://docs.oracle.com/en/database/oracle/apex/26.1/aeapi/APEX_SESSION_STATE.GET_BOOLEAN-Function.html)

Status: generated detailed reference. Review edge cases against the source before production use.

Parent package: [APEX_SESSION_STATE](../APEX_SESSION_STATE.md)

## Purpose

This function returns the value of a BOOLEAN item identified by p_item .

## When To Use

Use this page when code needs the `APEX_SESSION_STATE.GET_BOOLEAN` function. Confirm security, workspace, and session requirements for your calling context.

## Signature

```sql
APEX_SESSION_STATE.GET_BOOLEAN (
    p_item IN VARCHAR2 )
RETURN BOOLEAN;
```

## Returns

This function returns the value of the specified item as BOOLEAN. Parent topic: APEX_SESSION_STATE

## Important Notes

- Most APEX APIs assume the correct APEX workspace, application, and session context.
- Validate user-controlled values before passing them into administrative, security, SQL, or web-service APIs.
- Use the source link for exact behavior, defaults, and version-specific caveats.

## Simple Example

```sql
declare
    l_result BOOLEAN;
begin
    l_result := apex_session_state.GET_BOOLEAN(
        p_item => 'EXAMPLE'
    );
    sys.dbms_output.put_line('Result captured.');
end;
/
```

