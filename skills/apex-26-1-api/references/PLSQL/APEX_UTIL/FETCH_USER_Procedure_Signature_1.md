# APEX_UTIL.FETCH_USER Procedure Signature 1

Source: [Oracle APEX 26.1 API Reference](https://docs.oracle.com/en/database/oracle/apex/26.1/aeapi/FETCH_USER-Procedure-Signature-1.html)

Status: generated detailed reference. Review edge cases against the source before production use.

Parent package: [APEX_UTIL](../APEX_UTIL.md)

## Purpose

This procedure fetches a user account record. To execute this procedure, the current user must have administrative privileges in the workspace. Three overloaded versions of this procedure exist, each with a distinct set of allowed parameters or signatures.

## When To Use

Use this page when code needs the `APEX_UTIL.FETCH_USER` procedure. Confirm security, workspace, and session requirements for your calling context.

## Signature

```sql
APEX_UTIL.FETCH_USER (
    p_user_id                       IN                    NUMBER,
    p_workspace                     OUT                   VARCHAR2,
    p_user_name                     OUT                   VARCHAR2,
    p_first_name                    OUT                   VARCHAR2,
    p_last_name                     OUT                   VARCHAR2,
    p_web_password                  OUT                   VARCHAR2,
    p_email_address                 OUT                   VARCHAR2,
    p_start_date                    OUT                   VARCHAR2,
    p_end_date                      OUT                   VARCHAR2,
    p_employee_id                   OUT                   VARCHAR2,
    p_allow_access_to_schemas       OUT                   VARCHAR2,
    p_person_type                   OUT                   VARCHAR2,
    p_default_schema                OUT                   VARCHAR2,
    p_groups                        OUT                   VARCHAR2,
    p_developer_role                OUT                   VARCHAR2,
    p_description                   OUT                   VARCHAR2 );
```

## Parameters

| Parameter | Description |
| --- | --- |
| `p_user_id` | Numeric primary key of the user account. |
| `p_workspace` | The name of the workspace. |
| `p_user_name` | Alphanumeric name used for login. See also GET_USERNAME Function |
| `p_first_name` | Informational. See also GET_FIRST_NAME Function |
| `p_last_name` | Informational. See also GET_LAST_NAME Function |
| `p_web_password` | Obfuscated account password. |
| `p_email_address` | Email address. See also GET_EMAIL Function |
| `p_start_date` | Unused. |
| `p_end_date` | Unused. |
| `p_employee_id` | Unused. |
| `p_allow_access_to_schemas` | A list of schemas assigned to the user's workspace to which user is restricted. |
| `p_person_type` | Unused. |
| `p_default_schema` | A database schema assigned to the user's workspace, used by default for browsing. See also GET_DEFAULT_SCHEMA Function |
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

Fetch the full profile for an APEX workspace user by user id.

```sql
declare
    l_workspace        varchar2(255);
    l_user_name        varchar2(255);
    l_first_name       varchar2(255);
    l_last_name        varchar2(255);
    l_web_password     varchar2(255);
    l_email            varchar2(320);
    l_start_date       varchar2(255);
    l_end_date         varchar2(255);
    l_employee_id      varchar2(255);
    l_schema_access    varchar2(4000);
    l_person_type      varchar2(255);
    l_default_schema   varchar2(255);
    l_groups           varchar2(4000);
    l_developer_role   varchar2(4000);
    l_description      varchar2(4000);
begin
    apex_util.fetch_user(
        p_user_id                 => apex_util.get_user_id('JSMITH'),
        p_workspace               => l_workspace,
        p_user_name               => l_user_name,
        p_first_name              => l_first_name,
        p_last_name               => l_last_name,
        p_web_password            => l_web_password,
        p_email_address           => l_email,
        p_start_date              => l_start_date,
        p_end_date                => l_end_date,
        p_employee_id             => l_employee_id,
        p_allow_access_to_schemas => l_schema_access,
        p_person_type             => l_person_type,
        p_default_schema          => l_default_schema,
        p_groups                  => l_groups,
        p_developer_role          => l_developer_role,
        p_description             => l_description);
end;
/
```

