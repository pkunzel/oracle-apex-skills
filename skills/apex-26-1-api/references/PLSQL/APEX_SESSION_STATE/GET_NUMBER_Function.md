# APEX_SESSION_STATE.GET_NUMBER Function

Source: [Oracle APEX 26.1 API Reference](https://docs.oracle.com/en/database/oracle/apex/26.1/aeapi/APEX_SESSION_STATE.GET_NUMBER-Function.html)

Status: generated detailed reference. Review edge cases against the source before production use.

Parent package: [APEX_SESSION_STATE](../APEX_SESSION_STATE.md)

## Purpose

This function returns the value of a page item identified by p_item as NUMBER. This function uses the item's format mask to perform the conversion.

## When To Use

Use this page when code needs the `APEX_SESSION_STATE.GET_NUMBER` function. Confirm security, workspace, and session requirements for your calling context.

## Signature

```sql
APEX_SESSION_STATE.GET_NUMBER (
    p_item IN VARCHAR2 )
RETURN NUMBER;
```

## Returns

This function returns the value of the specified item as NUMBER. Parent topic: APEX_SESSION_STATE

## Important Notes

- Most APEX APIs assume the correct APEX workspace, application, and session context.
- Validate user-controlled values before passing them into administrative, security, SQL, or web-service APIs.
- Use the source link for exact behavior, defaults, and version-specific caveats.

## Example

Read a numeric item with the item format mask applied.

```sql
declare
    l_task_id number;
begin
    l_task_id := apex_session_state.get_number(
        p_item => 'P10_TASK_ID');
end;
/
```
