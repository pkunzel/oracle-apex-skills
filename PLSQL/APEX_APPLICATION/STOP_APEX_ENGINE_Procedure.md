# APEX_APPLICATION.STOP_APEX_ENGINE Procedure

Source: [Oracle APEX 26.1 API Reference](https://docs.oracle.com/en/database/oracle/apex/26.1/aeapi/STOP_APEX_ENGINE-Procedure.html)

Status: generated detailed reference. Review edge cases against the source before production use.

Parent package: [APEX_APPLICATION](../APEX_APPLICATION.md)

## Purpose

This procedure signals the Oracle APEX engine to stop further processing and immediately exit to avoid adding additional HTML code to the HTTP buffer.

## When To Use

Use this page when code needs the `APEX_APPLICATION.STOP_APEX_ENGINE` procedure. Confirm security, workspace, and session requirements for your calling context.

## Signature

```sql
APEX_APPLICATION.STOP_APEX_ENGINE
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
    apex_application.STOP_APEX_ENGINE;
end;
/
```

## More Complex Example

```sql
begin
    -- Assuming this runs inside an APEX page process with the right workspace/app context.
    apex_application.STOP_APEX_ENGINE;
end;
/
```

