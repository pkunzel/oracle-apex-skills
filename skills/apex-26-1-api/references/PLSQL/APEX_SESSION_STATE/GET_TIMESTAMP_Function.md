# APEX_SESSION_STATE.GET_TIMESTAMP Function

Source: [Oracle APEX 26.1 API Reference](https://docs.oracle.com/en/database/oracle/apex/26.1/aeapi/APEX_SESSION_STATE.GET_TIMESTAMP-Function.html)

Status: generated detailed reference. Review edge cases against the source before production use.

Parent package: [APEX_SESSION_STATE](../APEX_SESSION_STATE.md)

## Purpose

This function returns the value of a page item identified by p_item as TIMESTAMP. This function uses the item's format mask to perform the conversion.

## When To Use

Use this page when code needs the `APEX_SESSION_STATE.GET_TIMESTAMP` function. Confirm security, workspace, and session requirements for your calling context.

## Signature

```sql
APEX_SESSION_STATE.GET_TIMESTAMP (
    p_item IN VARCHAR2 )
RETURN TIMESTAMP;
```

## Returns

This function returns the value of the specified item as TIMESTAMP. Parent topic: APEX_SESSION_STATE

## Important Notes

- Most APEX APIs assume the correct APEX workspace, application, and session context.
- Validate user-controlled values before passing them into administrative, security, SQL, or web-service APIs.
- Use the source link for exact behavior, defaults, and version-specific caveats.

## Example

Read timestamp item state as a TIMESTAMP value.

```sql
declare
    l_due_at timestamp;
begin
    l_due_at := apex_session_state.get_timestamp(
        p_item => 'P10_DUE_AT');
end;
/
```
