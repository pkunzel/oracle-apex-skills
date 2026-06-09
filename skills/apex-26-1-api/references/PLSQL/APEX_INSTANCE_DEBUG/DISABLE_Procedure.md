# APEX_INSTANCE_DEBUG.DISABLE Procedure

Source: [Oracle APEX 26.1 API Reference](https://docs.oracle.com/en/database/oracle/apex/26.1/aeapi/APEX_INSTANCE_DEBUG.DISABLE-Procedure.html)

Status: generated detailed reference. Review edge cases against the source before production use.

Parent package: [APEX_INSTANCE_DEBUG](../APEX_INSTANCE_DEBUG.md)

## Purpose

This procedure disables instance debug level.

## When To Use

Use this page when code needs the `APEX_INSTANCE_DEBUG.DISABLE` procedure. Confirm security, workspace, and session requirements for your calling context.

## Signature

```sql
APEX_INSTANCE_DEBUG.DISABLE;
```

## Returns

This is a procedure and does not return a value.

## Important Notes

- Most APEX APIs assume the correct APEX workspace, application, and session context.
- Validate user-controlled values before passing them into administrative, security, SQL, or web-service APIs.
- Use the source link for exact behavior, defaults, and version-specific caveats.

## Simple Example

```sql
begin
    apex_instance_debug.DISABLE;
end;
/
```

