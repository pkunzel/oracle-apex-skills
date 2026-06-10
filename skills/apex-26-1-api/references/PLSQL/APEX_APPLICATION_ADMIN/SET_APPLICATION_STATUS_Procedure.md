# APEX_APPLICATION_ADMIN.SET_APPLICATION_STATUS Procedure

Source: [Oracle APEX 26.1 API Reference](https://docs.oracle.com/en/database/oracle/apex/26.1/aeapi/APEX_APPLICATION_ADMIN.SET_APPLICATION_STATUS-Procedure.html)

Status: generated detailed reference. Review edge cases against the source before production use.

Parent package: [APEX_APPLICATION_ADMIN](../APEX_APPLICATION_ADMIN.md)

## Purpose

This procedure sets the status of the application.

## When To Use

Use this page when code needs the `APEX_APPLICATION_ADMIN.SET_APPLICATION_STATUS` procedure. Confirm security, workspace, and session requirements for your calling context.

## Signature

```sql
APEX_APPLICATION_ADMIN.SET_APPLICATION_STATUS (
    p_application_id            IN NUMBER,
    p_application_status        IN t_app_status,
    --
    p_allowed_users_list        IN apex_t_varchar2 DEFAULT NULL,
    --
    p_message                   IN VARCHAR2 DEFAULT NULL,
    p_plsql_code                IN VARCHAR2 DEFAULT NULL,
    p_redirect_url              IN VARCHAR2 DEFAULT NULL )
```

## Parameters

| Parameter | Description |
| --- | --- |
| `p_application_id` | The application ID. |
| `p_application_status` | New status to set application to. Values include: apex_application_admin.c_app_available - Application is available with no restrictions. apex_application_admin.c_app_available_with_edit_link - Application is available with no restrictions. Developer Toolbar displays for developers. apex_application_admin.c_app_available_devs_only - Application only available to developers. apex_application_admin.c_app_restricted_access - Application only available to users in p_allowed_users_list . apex_application_admin.c_app_unavailable - Application unavailable. Message shown in p_message . apex_application_admin.c_app_unavailable_redirect - Application unavailable. Redirected to URL provied in p_redirect_url . apex_application_admin.c_app_unavailable_show_plsql - Application unavailable. Message shown from PL/SQL block in p_plsql_code . |
| `p_allowed_users_list` | An apex_t_varchar2 list of users which are allowed to access the application when p_application_status = c_app_restricted_access . |
| `p_message` | Message shown to users when p_application_status = c_app_unavailable . |
| `p_plsql_code` | Message shown to users when p_application_status = c_app_unavailable_show_plsql . |
| `p_redirect_url` | URL to redirect to when p_application_status = c_app_unavailable_redirect . |

## Returns

This is a procedure and does not return a value.

## Important Notes

- Most APEX APIs assume the correct APEX workspace, application, and session context.
- Validate user-controlled values before passing them into administrative, security, SQL, or web-service APIs.
- Use the source link for exact behavior, defaults, and version-specific caveats.

## Simple Example

```sql
begin
    apex_application_admin.set_application_status(
        p_application_id => 100,
        p_application_status => apex_application_admin.c_app_restricted_access,
        p_allowed_users_list => apex_t_varchar2('PKUNZEL', 'QA_USER'),
        p_message => 'This application is currently open only for testing.'
    );
end;
/
```
