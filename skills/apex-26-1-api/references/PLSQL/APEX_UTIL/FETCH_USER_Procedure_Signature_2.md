# APEX_UTIL.FETCH_USER Procedure Signature 2

Source: [Oracle APEX 26.1 API Reference](https://docs.oracle.com/en/database/oracle/apex/26.1/aeapi/FETCH_USER-Procedure-Signature-2.html)

Status: generated detailed reference. Review edge cases against the source before production use.

Parent package: [APEX_UTIL](../APEX_UTIL.md)

## Purpose

This procedure fetches a user account record. To execute this procedure, the current user must have administrative privileges in the workspace. Three overloaded versions of this procedure exist, each with a distinct set of allowed parameters or signatures.

## When To Use

Use this page when code needs the `APEX_UTIL.FETCH_USER` procedure. Confirm security, workspace, and session requirements for your calling context.

## Signature

```sql
APEX_UTIL.FETCH_USER (
    p_user_id                     IN                 NUMBER,
    p_user_name                   OUT                VARCHAR2,
    p_first_name                  OUT                VARCHAR2,
    p_last_name                   OUT                VARCHAR2,
    p_email_address               OUT                VARCHAR2,
    p_groups                      OUT                VARCHAR2,
    p_developer_role              OUT                VARCHAR2,
    p_description                 OUT                VARCHAR2 );
```

## Parameters

| Parameter | Description |
| --- | --- |
| `p_user_id` | Numeric primary key of the user account. |
| `p_user_name` | Alphanumeric name used for login. See also GET_USERNAME Function |
| `p_first_name` | Informational. See also GET_FIRST_NAME Function |
| `p_last_name` | Informational. See also GET_LAST_NAME Function |
| `p_email_address` | Email address. See also GET_EMAIL Function |
| `p_groups` | List of groups of which user is a member. See also GET_GROUPS_USER_BELONGS_TO Function CURRENT_USER_IN_GROUP Function |
| `p_developer_role` | Colon-separated list of developer roles. The following are acceptable values for this parameter: null - Indicates an end user (a user who can only authenticate to developed applications). CREATE:DATA_LOADER:EDIT:HELP:MONITOR:SQL - Indicates a user with developer privilege. ADMIN:CREATE:DATA_LOADER:EDIT:HELP:MONITOR:SQL - Indicates a user with full workspace administrator and developer privilege. Note: Currently this parameter is named inconsistently between the CREATE_USER , EDIT_USER and FETCH_USER APIs, although they all relate to the DEVELOPER_ROLE field stored in the named user account record. CREATE_USER uses p_developer_privs , EDIT_USER uses p_developer_roles and FETCH_USER uses p_developer_role . See also GET_USER_ROLES Function |
| `p_description` | Informational. |

## Returns

This is a procedure and does not return a value.

## Important Notes

- Most APEX APIs assume the correct APEX workspace, application, and session context.
- Validate user-controlled values before passing them into administrative, security, SQL, or web-service APIs.
- Use the source link for exact behavior, defaults, and version-specific caveats.

## Simple Example

```sql
begin
    apex_util.FETCH_USER(
        p_user_id => 1,
        p_user_name => 'USER',
        p_first_name => 'EXAMPLE',
        p_last_name => 'EXAMPLE',
        p_email_address => 'EXAMPLE',
        p_groups => 'EXAMPLE',
        p_developer_role => 'EXAMPLE',
        p_description => 'EXAMPLE'
    );
end;
/
```

