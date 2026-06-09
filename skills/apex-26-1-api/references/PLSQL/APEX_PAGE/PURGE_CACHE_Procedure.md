# APEX_PAGE.PURGE_CACHE Procedure

Source: [Oracle APEX 26.1 API Reference](https://docs.oracle.com/en/database/oracle/apex/26.1/aeapi/PURGE_CACHE-Procedure.html)

Status: generated detailed reference. Review edge cases against the source before production use.

Parent package: [APEX_PAGE](../APEX_PAGE.md)

## Purpose

This procedure purges the cache of the specified application, page, and region for the specified user. If the user is not specified, the procedure purges all cached versions of the page.

## When To Use

Use this page when code needs the `APEX_PAGE.PURGE_CACHE` procedure. Confirm security, workspace, and session requirements for your calling context.

## Signature

```sql
APEX_PAGE.PURGE_CACHE (
    p_application_id       IN NUMBER DEFAULT apex.g_flow_id,
    p_page_id              IN NUMBER DEFAULT apex.g_flow_step_id,
    p_user_name            IN VARCHAR2 DEFAULT NULL,
    p_current_session_only IN BOOLEAN  DEFAULT FALSE );
```

## Parameters

| Parameter | Description |
| --- | --- |
| `p_application_id` | ID of the application. Defaults to the current application. |
| `p_page_id` | ID of the page. Defaults to the current page. If you pass NULL, Oracle APEX purges the cache on all pages of the application. |
| `p_user_name` | Specify a user name if you only want to purge entries that were saved for the given user. |
| `p_current_session_only` | Specify TRUE if you only want to purge entries that where saved for the current session. Defaults to FALSE . |

## Returns

This is a procedure and does not return a value.

## Important Notes

- Most APEX APIs assume the correct APEX workspace, application, and session context.
- Validate user-controlled values before passing them into administrative, security, SQL, or web-service APIs.
- Use the source link for exact behavior, defaults, and version-specific caveats.

## Simple Example

```sql
begin
    apex_page.PURGE_CACHE(
        p_application_id => 1,
        p_page_id => 1,
        p_user_name => 'USER',
        p_current_session_only => true
    );
end;
/
```

