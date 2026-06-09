# APEX_BACKGROUND_PROCESS.ABORT Procedure Signature 2 (Deprecated)

Source: [Oracle APEX 26.1 API Reference](https://docs.oracle.com/en/database/oracle/apex/26.1/aeapi/APEX_BACKGROUND_PROCESS.ABORT-Procedure-Signature-2.html)

Status: generated detailed reference. Review edge cases against the source before production use.

Parent package: [APEX_BACKGROUND_PROCESS](../APEX_BACKGROUND_PROCESS.md)

## Purpose

Note:

## When To Use

Use this page when code needs the `APEX_BACKGROUND_PROCESS.ABORT` procedure. Confirm security, workspace, and session requirements for your calling context.

## Deprecation

This member is marked deprecated in the APEX 26.1 documentation. Prefer the documented replacement when available.

## Signature

```sql
APEX_BACKGROUND_PROCESS.ABORT (
    p_application_id    IN NUMBER DEFAULT apex_application.g_flow_id,
    p_execution_id      IN NUMBER )
```

## Parameters

| Parameter | Description |
| --- | --- |
| `p_application_id` | ID of the application containing the process. |
| `p_execution_id` | ID of the execution to abort. |

## Returns

This is a procedure and does not return a value.

## Important Notes

- Most APEX APIs assume the correct APEX workspace, application, and session context.
- Validate user-controlled values before passing them into administrative, security, SQL, or web-service APIs.
- Use the source link for exact behavior, defaults, and version-specific caveats.

## Simple Example

```sql
begin
    apex_background_process.ABORT(
        p_application_id => 1,
        p_execution_id => 1
    );
end;
/
```

## More Complex Example

```sql
begin
    -- Assuming this runs inside an APEX page process with the right workspace/app context.
    apex_background_process.ABORT(
            p_application_id => 1,
            p_execution_id => 1
        );
end;
/
```

