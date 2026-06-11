# APEX_DEBUG.GET_LAST_MESSAGE_ID Function

Source: [Oracle APEX 26.1 API Reference](https://docs.oracle.com/en/database/oracle/apex/26.1/aeapi/GET_LAST_MESSAGE_ID-Function.html)

Status: generated detailed reference. Review edge cases against the source before production use.

Parent package: [APEX_DEBUG](../APEX_DEBUG.md)

## Purpose

This function returns the identifier for the last debug message that was generated in this session. The value is null until the first debug message has been generated.

## When To Use

Use this page when code needs the `APEX_DEBUG.GET_LAST_MESSAGE_ID` function. Confirm security, workspace, and session requirements for your calling context.

## Signature

```sql
APEX_DEBUG.GET_LAST_MESSAGE_ID (
  RETURN NUMBER );
```

## Important Notes

- Most APEX APIs assume the correct APEX workspace, application, and session context.
- Validate user-controlled values before passing them into administrative, security, SQL, or web-service APIs.
- Use the source link for exact behavior, defaults, and version-specific caveats.

## Simple Example

```sql
declare
    l_message_id number;
begin
    apex_debug.info('Created before reading the last debug message id.');
    l_message_id := apex_debug.get_last_message_id;
    sys.dbms_output.put_line('Last debug message id: ' || l_message_id);
end;
/
```
