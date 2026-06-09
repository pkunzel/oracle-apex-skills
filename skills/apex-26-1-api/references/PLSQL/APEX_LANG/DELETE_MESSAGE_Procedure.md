# APEX_LANG.DELETE_MESSAGE Procedure

Source: [Oracle APEX 26.1 API Reference](https://docs.oracle.com/en/database/oracle/apex/26.1/aeapi/DELETE_MESSAGE-Procedure.html)

Status: generated detailed reference. Review edge cases against the source before production use.

Parent package: [APEX_LANG](../APEX_LANG.md)

## Purpose

Use this procedure to delete a translatable text message in the specified application.

## When To Use

Use this page when code needs the `APEX_LANG.DELETE_MESSAGE` procedure. Confirm security, workspace, and session requirements for your calling context.

## Signature

```sql
APEX_LANG.DELETE_MESSAGE (
    p_id    IN NUMBER )
```

## Parameters

| Parameter | Description |
| --- | --- |
| `p_id` | The ID of the text message. |

## Returns

This is a procedure and does not return a value.

## Important Notes

- Most APEX APIs assume the correct APEX workspace, application, and session context.
- Validate user-controlled values before passing them into administrative, security, SQL, or web-service APIs.
- Use the source link for exact behavior, defaults, and version-specific caveats.

## Simple Example

```sql
begin
    apex_lang.DELETE_MESSAGE(
        p_id => 1
    );
end;
/
```

