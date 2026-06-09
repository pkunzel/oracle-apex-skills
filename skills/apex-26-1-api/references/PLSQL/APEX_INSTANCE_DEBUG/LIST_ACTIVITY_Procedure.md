# APEX_INSTANCE_DEBUG.LIST_ACTIVITY Procedure

Source: [Oracle APEX 26.1 API Reference](https://docs.oracle.com/en/database/oracle/apex/26.1/aeapi/APEX_INSTANCE_DEBUG.LIST_ACTIVITY-Procedure.html)

Status: generated detailed reference. Review edge cases against the source before production use.

Parent package: [APEX_INSTANCE_DEBUG](../APEX_INSTANCE_DEBUG.md)

## Purpose

This script prints recent activity log entries.

## When To Use

Use this page when code needs the `APEX_INSTANCE_DEBUG.LIST_ACTIVITY` procedure. Confirm security, workspace, and session requirements for your calling context.

## Signature

```sql
APEX_INSTANCE_DEBUG.LIST_ACTIVITY (
    p_from_date      IN DATE     DEFAULT sysdate-5,
    p_to_date        IN DATE     DEFAULT sysdate,
    p_app_id         IN NUMBER   DEFAULT NULL,
    p_page_id        IN NUMBER   DEFAULT NULL,
    p_workspace_name IN VARCHAR2 DEFAULT NULL,
    p_session_id     IN NUMBER   DEFAULT NULL,
    p_user           IN VARCHAR2 DEFAULT NULL,
    p_ip_address     IN VARCHAR2 DEFAULT NULL,
    p_not_ip_address IN VARCHAR2 DEFAULT NULL,
    p_error          IN VARCHAR2 DEFAULT NULL,
    p_debug          IN NUMBER   DEFAULT NULL );
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
    apex_instance_debug.LIST_ACTIVITY(
        p_from_date => sysdate,
        p_to_date => sysdate,
        p_app_id => 1,
        p_page_id => 1,
        p_workspace_name => 'EXAMPLE',
        p_session_id => 1,
        p_user => 'USER',
        p_ip_address => 'EXAMPLE',
        p_not_ip_address => 'EXAMPLE',
        p_error => 'EXAMPLE',
        p_debug => 1
    );
end;
/
```

