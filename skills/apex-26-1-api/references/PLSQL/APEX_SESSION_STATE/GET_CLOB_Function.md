# APEX_SESSION_STATE.GET_CLOB Function

Source: [Oracle APEX 26.1 API Reference](https://docs.oracle.com/en/database/oracle/apex/26.1/aeapi/APEX_SESSION_STATE.GET_CLOB-Function.html)

Status: generated detailed reference. Review edge cases against the source before production use.

Parent package: [APEX_SESSION_STATE](../APEX_SESSION_STATE.md)

## Purpose

This function returns the value of a CLOB item identified by p_item .

## When To Use

Use this page when code needs the `APEX_SESSION_STATE.GET_CLOB` function. Confirm security, workspace, and session requirements for your calling context.

## Signature

```sql
APEX_SESSION_STATE.GET_CLOB (
    p_item IN VARCHAR2 )
RETURN CLOB;
```

## Returns

This function returns the value of the specified item as CLOB. Parent topic: APEX_SESSION_STATE

## Important Notes

- Most APEX APIs assume the correct APEX workspace, application, and session context.
- Validate user-controlled values before passing them into administrative, security, SQL, or web-service APIs.
- Use the source link for exact behavior, defaults, and version-specific caveats.

## Example

Use GET_CLOB for large text items so the code does not force a VARCHAR2 conversion.

```sql
declare
    l_note clob;
begin
    l_note := apex_session_state.get_clob(
        p_item => 'P10_NOTE');

    apex_debug.info('Note length: %s', dbms_lob.getlength(l_note));
end;
/
```
