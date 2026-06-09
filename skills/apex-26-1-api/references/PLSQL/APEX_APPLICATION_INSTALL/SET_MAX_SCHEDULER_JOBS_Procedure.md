# APEX_APPLICATION_INSTALL.SET_MAX_SCHEDULER_JOBS Procedure

Source: [Oracle APEX 26.1 API Reference](https://docs.oracle.com/en/database/oracle/apex/26.1/aeapi/APEX_APPLICATION_INSTALL.SET_MAX_SCHEDULER_JOBS-Procedure.html)

Status: generated detailed reference. Review edge cases against the source before production use.

Parent package: [APEX_APPLICATION_INSTALL](../APEX_APPLICATION_INSTALL.md)

## Purpose

This procedure sets the maximum background processing jobs attribute of the application to be imported.

## When To Use

Use this page when code needs the `APEX_APPLICATION_INSTALL.SET_MAX_SCHEDULER_JOBS` procedure. Confirm security, workspace, and session requirements for your calling context.

## Signature

```sql
APEX_APPLICATION_INSTALL.SET_MAX_SCHEDULER_JOBS (
    p_max_scheduler_jobs IN NUMBER )
```

## Parameters

| Parameter | Description |
| --- | --- |
| `p_max_scheduler_jobs` | Maximum number of background processing jobs for the application to be imported. |

## Returns

This is a procedure and does not return a value.

## Important Notes

- Most APEX APIs assume the correct APEX workspace, application, and session context.
- Validate user-controlled values before passing them into administrative, security, SQL, or web-service APIs.
- Use the source link for exact behavior, defaults, and version-specific caveats.

## Simple Example

```sql
begin
    apex_application_install.SET_MAX_SCHEDULER_JOBS(
        p_max_scheduler_jobs => 1
    );
end;
/
```

