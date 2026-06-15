# APEX_INSTANCE_ADMIN.TRUNCATE_LOG Procedure

Source: [Oracle APEX 26.1 API Reference](https://docs.oracle.com/en/database/oracle/apex/26.1/aeapi/TRUNCATE_LOG-Procedure.html)

Status: generated detailed reference. Review edge cases against the source before production use.

Parent package: [APEX_INSTANCE_ADMIN](../APEX_INSTANCE_ADMIN.md)

## Purpose

Truncates the log entries specified by the input parameter.

## When To Use

Use this page when code needs the `APEX_INSTANCE_ADMIN.TRUNCATE_LOG` procedure. Confirm security, workspace, and session requirements for your calling context.

## Signature

```sql
APEX_INSTANCE_ADMIN.TRUNCATE_LOG (
    p_log     IN VARCHAR2 )
```

## Parameters

| Parameter | Description |
| --- | --- |
| `p_log` | This parameter can have one of the following values: ACTIVITY - removes all entries that record page access. AUTOMATION - removes all entries from the automation logs. CLICKS - removes all entries that record clicks tracked to external sites. DEBUG - removes all entries captured during debug sessions. FILE - removes all entries that record automatic file purge activity. LOCK_INSTALL_SCRIPT - removes all entries that record developer locking of supporting objects script. LOCK_PAGE - removes all entries that record developer locking of pages. MAIL - removes all entries that record mail sent. PURGE - removes all entries that record automatic workspace purge activity. REST_SYNCHRONIZATION - removes all entries to record REST Source Synchronizations. SCRIPT - removes all entries that record results of SQL scripts executed in SQL Workshop. SQL - removes all entries that record the history of commands executed in SQL Workshop SQL Commands USER_ACCESS - removes all entries that record user login. WEB_SERVICES - removes all entries that record web service calls initiated from this APEX instance. WORKSPACE_HIST - removes all entries that record daily workspace summary. |

## Returns

This is a procedure and does not return a value.

## Important Notes

- Most APEX APIs assume the correct APEX workspace, application, and session context.
- Validate user-controlled values before passing them into administrative, security, SQL, or web-service APIs.
- Use the source link for exact behavior, defaults, and version-specific caveats.

## Simple Example

```sql
begin
    apex_instance_admin.truncate_log(
        p_log => 'ACTIVITY'
    );
end;
/
```
