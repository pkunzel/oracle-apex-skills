# APEX_APP_OBJECT_DEPENDENCY.CLEAR_CACHE Procedure

Source: [Oracle APEX 26.1 API Reference](https://docs.oracle.com/en/database/oracle/apex/26.1/aeapi/APEX_APP_OBJECT_DEPENDENCY.CLEAR_CACHE-Procedure.html)

Status: generated detailed reference. Review edge cases against the source before production use.

Parent package: [APEX_APP_OBJECT_DEPENDENCY](../APEX_APP_OBJECT_DEPENDENCY.md)

## Purpose

This procedure removes all cached dependency report data for a given application.

## When To Use

Use this page when code needs the `APEX_APP_OBJECT_DEPENDENCY.CLEAR_CACHE` procedure. Confirm security, workspace, and session requirements for your calling context.

## Signature

```sql
APEX_APP_OBJECT_DEPENDENCY.CLEAR_CACHE (
    p_application_id     IN NUMBER )
```

## Parameters

| Parameter | Description |
| --- | --- |
| `p_application_id` | ID of the application for which cache is cleared. |

## Returns

This is a procedure and does not return a value.

## Important Notes

- Most APEX APIs assume the correct APEX workspace, application, and session context.
- Validate user-controlled values before passing them into administrative, security, SQL, or web-service APIs.
- Use the source link for exact behavior, defaults, and version-specific caveats.

## Simple Example

```sql
begin
    apex_app_object_dependency.CLEAR_CACHE(
        p_application_id => 1
    );
end;
/
```

## More Complex Example

```sql
begin
    -- Assuming this runs inside an APEX page process with the right workspace/app context.
    apex_app_object_dependency.CLEAR_CACHE(
            p_application_id => 1
        );
end;
/
```

