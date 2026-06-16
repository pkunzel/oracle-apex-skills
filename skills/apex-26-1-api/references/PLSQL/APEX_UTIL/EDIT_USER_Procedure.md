# APEX_UTIL.EDIT_USER Procedure

Source: [Oracle APEX 26.1 API Reference](https://docs.oracle.com/en/database/oracle/apex/26.1/aeapi/EDIT_USER-Procedure.html)

Status: generated detailed reference. Review edge cases against the source before production use.

Parent package: [APEX_UTIL](../APEX_UTIL.md)

## Purpose

This procedure enables a user account record to be altered. To execute this procedure, the current user must have administrative privileges in the workspace.

## When To Use

Use this page when code needs the `APEX_UTIL.EDIT_USER` procedure. Confirm security, workspace, and session requirements for your calling context.

## Signature

```sql
APEX_UTIL.EDIT_USER (
    p_user_id                      IN                   NUMBER,
    p_user_name                    IN                   VARCHAR2,
    p_first_name                   IN                   VARCHAR2    DEFAULT NULL,
    p_last_name                    IN                   VARCHAR2    DEFAULT NULL,
    p_web_password                 IN                   VARCHAR2    DEFAULT NULL,
    p_new_password                 IN                   VARCHAR2    DEFAULT NULL,
    p_email_address                IN                   VARCHAR2    DEFAULT NULL,
    p_start_date                   IN                   VARCHAR2    DEFAULT NULL,
    p_end_date                     IN                   VARCHAR2    DEFAULT NULL,
    p_employee_id                  IN                   VARCHAR2    DEFAULT NULL,
    p_allow_access_to_schemas      IN                   VARCHAR2    DEFAULT NULL,
    p_person_type                  IN                   VARCHAR2    DEFAULT NULL,
    p_default_schema               IN                   VARCHAR2    DEFAULT NULL,
    p_group_ids                    IN                   VARCHAR2    DEFAULT NULL,
    p_developer_roles              IN                   VARCHAR2    DEFAULT NULL,
    p_description                  IN                   VARCHAR2    DEFAULT NULL,
    p_account_expiry               IN                   DATE        DEFAULT NULL,
    p_account_locked               IN                   VARCHAR2    DEFAULT 'N',
    p_failed_access_attempts       IN                   NUMBER      DEFAULT 0,
    p_change_password_on_first_use IN                   VARCHAR2    DEFAULT 'Y',
    p_first_password_use_occurred  IN                   VARCHAR2    DEFAULT 'N');
```

## Parameters

| Parameter | Description |
| --- | --- |
| `p_user_id` | Numeric primary key of the user account. |
| `p_user_name` | Alphanumeric name used for login. See also SET_USERNAME Procedure |
| `p_first_name` | Informational. See also SET_FIRST_NAME Procedure |
| `p_last_name` | Informational. See also SET_LAST_NAME Procedure |
| `p_web_password` | Clear text password. If using this procedure to update the password for the user, values for both p_web_password and p_new_password must not be null and must be identical. |
| `p_new_password` | Clear text new password. If using this procedure to update the password for the user, values for both p_web_password and p_new_password must not be null and must be identical. |
| `p_email_address` | Informational. See also SET_EMAIL Procedure |
| `p_start_date` | Unused. |
| `p_end_date` | Unused. |
| `p_employee_id` | Unused. |
| `p_allow_access_to_schemas` | A list of schemas assigned to the user's workspace to which the user is restricted. |
| `p_person_type` | Unused. |
| `p_default_schema` | A database schema assigned to the user's workspace, used by default for browsing. |
| `p_group_ids` | Colon-separated list of numeric group IDs. |
| `p_developer_roles` | Colon-separated list of developer privileges. The following are acceptable values for this parameter: null - To update the user to be an end user (a user who can only authenticate to developed applications). CREATE:DATA_LOADER:EDIT:HELP:MONITOR:SQL - To update the user to have developer privilege. ADMIN:CREATE:DATA_LOADER:EDIT:HELP:MONITOR:SQL - To update the user to have full workspace administrator and developer privilege. Note: Currently this parameter is named inconsistently between the CREATE_USER, EDIT_USER and FETCH_USER APIs, although they all relate to the DEVELOPER_ROLE field stored in the named user account record. CREATE_USER uses p_developer_privs, EDIT_USER uses p_developer_roles and FETCH_USER uses p_developer_role. See also GET_USER_ROLES Function |
| `p_description` | Informational. |
| `p_account_expiry` | Date password was last updated. See also: EXPIRE_END_USER_ACCOUNT Procedure EXPIRE_WORKSPACE_ACCOUNT Procedure UNEXPIRE_END_USER_ACCOUNT Procedure UNEXPIRE_WORKSPACE_ACCOUNT Procedure |
| `p_account_locked` | 'Y' or 'N' indicating if account is locked or unlocked. See also: LOCK_ACCOUNT Procedure UNLOCK_ACCOUNT Procedure |
| `p_failed_access_attempts` | Number of consecutive login failures that have occurred. |
| `p_change_password_on_first_use` | 'Y' or 'N' to indicate whether password must be changed on first use. See also CHANGE_PASSWORD_ON_FIRST_USE Function |
| `p_first_password_use_occurred` | 'Y' or 'N' to indicate whether login has occurred since password change. See also PASSWORD_FIRST_USE_OCCURRED Function |

## Returns

This is a procedure and does not return a value.

## Important Notes

- Most APEX APIs assume the correct APEX workspace, application, and session context.
- Validate user-controlled values before passing them into administrative, security, SQL, or web-service APIs.
- Use the source link for exact behavior, defaults, and version-specific caveats.

## Simple Example

Update profile fields for an existing APEX workspace user.

```sql
declare
    l_user_id number;
begin
    l_user_id := apex_util.get_user_id('JSMITH');

    apex_util.edit_user(
        p_user_id      => l_user_id,
        p_user_name    => 'JSMITH',
        p_first_name   => 'Jordan',
        p_last_name    => 'Smith',
        p_email_address => 'jordan.smith@example.com',
        p_group_ids    => apex_util.get_group_id('APP_USERS'),
        p_description  => 'Operations application user',
        p_account_locked => 'N');
end;
/
```

