# APEX_UTIL.CREATE_USER Procedure

Source: [Oracle APEX 26.1 API Reference](https://docs.oracle.com/en/database/oracle/apex/26.1/aeapi/CREATE_USER-Procedure.html)

Status: generated detailed reference. Review edge cases against the source before production use.

Parent package: [APEX_UTIL](../APEX_UTIL.md)

## Purpose

This procedure creates a new account record in the native Oracle APEX user accounts repository.

## When To Use

Use this page when code needs the `APEX_UTIL.CREATE_USER` procedure. Confirm security, workspace, and session requirements for your calling context.

## Signature

```sql
APEX_UTIL.CREATE_USER (
    p_user_id                       IN NUMBER   DEFAULT NULL,
    p_user_name                     IN VARCHAR2,
    p_first_name                    IN VARCHAR2 DEFAULT NULL,
    p_last_name                     IN VARCHAR2 DEFAULT NULL,
    p_description                   IN VARCHAR2 DEFAULT NULL,
    p_email_address                 IN VARCHAR2 DEFAULT NULL,
    p_web_password                  IN VARCHAR2,
    p_web_password_format           IN VARCHAR2 DEFAULT 'CLEAR_TEXT',
    p_group_ids                     IN VARCHAR2 DEFAULT NULL,
    p_developer_privs               IN VARCHAR2 DEFAULT NULL,
    p_default_schema                IN VARCHAR2 DEFAULT NULL,
    p_default_date_format           IN VARCHAR2 DEFAULT NULL,
    p_allow_access_to_schemas       IN VARCHAR2 DEFAULT NULL,
    p_account_expiry                IN DATE     DEFAULT TRUNC(SYSDATE),
    p_account_locked                IN VARCHAR2 DEFAULT 'N',
    p_failed_access_attempts        IN NUMBER   DEFAULT 0,
    p_change_password_on_first_use  IN VARCHAR2 DEFAULT 'Y',
    p_first_password_use_occurred   IN VARCHAR2 DEFAULT 'N',
    p_attribute_01                  IN VARCHAR2 DEFAULT NULL,
    p_attribute_02                  IN VARCHAR2 DEFAULT NULL,
    p_attribute_03                  IN VARCHAR2 DEFAULT NULL,
    p_attribute_04                  IN VARCHAR2 DEFAULT NULL,
    p_attribute_05                  IN VARCHAR2 DEFAULT NULL,
    p_attribute_06                  IN VARCHAR2 DEFAULT NULL,
    p_attribute_07                  IN VARCHAR2 DEFAULT NULL,
    p_attribute_08                  IN VARCHAR2 DEFAULT NULL,
    p_attribute_09                  IN VARCHAR2 DEFAULT NULL,
    p_attribute_10                  IN VARCHAR2 DEFAULT NULL,
    p_allow_app_building_yn         IN VARCHAR2 DEFAULT NULL,
    p_allow_sql_workshop_yn         IN VARCHAR2 DEFAULT NULL,
    p_allow_websheet_dev_yn         IN VARCHAR2 DEFAULT NULL,
    p_allow_team_development_yn     IN VARCHAR2 DEFAULT NULL );
```

## Parameters

| Parameter | Description |
| --- | --- |
| `p_user_id` | Numeric primary key of user account. |
| `p_user_name` | Alphanumeric name used for login. |
| `p_first_name` | Informational. |
| `p_last_name` | Informational. |
| `p_description` | Informational. |
| `p_email_address` | Email address. |
| `p_web_password` | Password. |
| `p_web_password_format` | If the value you are passing for the p_web_password parameter is in clear text format then use CLEAR_TEXT , otherwise use HEX_ENCODED_DIGEST_V2 . |
| `p_group_ids` | Colon separated list of numeric group IDs. |
| `p_developer_privs` | Colon separated list of developer privileges. If p_developer_privs is not null, the user is given access to Team Development. If p_developer_privs contains ADMIN , the user is given App Builder and SQL Workshop access. If p_developer_privs does not contain ADMIN but contains EDIT , the user is given App Builder access. If p_developer_privs does not contain ADMIN but contains SQL , the user is given SQL Workshop access. The following are acceptable values for this parameter: NULL - To create an end user (a user who can only authenticate to developed applications). CREATE:DATA_LOADER:EDIT:HELP:MONITOR:SQL - To create a user with developer privileges with access to App Builder and SQL Workshop. ADMIN:CREATE:DATA_LOADER:EDIT:HELP:MONITOR:SQL - To create a user with full workspace administrator and developer privileges with access to App Builder , SQL Workshop and Team Development. Note: Currently this parameter is named inconsistently between the CREATE_USER , EDIT_USER , and FETCH_USER APIs, although they all relate to the DEVELOPER_ROLE field stored in the named user account record. CREATE_USER uses p_developer_privs ; EDIT_USER uses p_developer_roles ; and FETCH_USER uses p_developer_role . |
| `p_default_schema` | A database schema assigned to the user's workspace, used by default for browsing. |
| `p_default_date_format` | Oracle Date format for user. Currently only used in SQL Workshop. |
| `p_allow_access_to_schemas` | Colon-separated list of schemas assigned to the user's workspace to which the user is restricted (leave NULL for all). |
| `p_account_expiry` | The date the password was last updated, which defaults to today's date on creation. |
| `p_account_locked` | Y or N indicating if account is locked or unlocked. |
| `p_failed_access_attempts` | Number of consecutive login failures that have occurred, defaults to 0 on creation. |
| `p_change_password_on_first_use` | Y or N to indicate whether password must be changed on first use, defaults to Y on creation. |
| `p_first_password_use_occurred` | Y or N to indicate whether login has occurred since password change, defaults to N on creation. |
| `p_attribute_01 … p_attribute_10` | Arbitrary text accessible with an API. |
| `p_allow_app_building_yn` | Y or N to indicate whether access to App Builder is enabled. |
| `p_allow_sql_workshop_yn` | Y or N to indicate whether access to SQL Workshop is enabled.. |
| `p_allow_websheet_dev_yn` | Y or N to indicate whether access to Websheet development is enabled. |
| `p_allow_team_development_yn` | Y or N to indicate whether access to Team Development is enabled. |

## Returns

This is a procedure and does not return a value.

## Important Notes

- Most APEX APIs assume the correct APEX workspace, application, and session context.
- Validate user-controlled values before passing them into administrative, security, SQL, or web-service APIs.
- Use the source link for exact behavior, defaults, and version-specific caveats.

## Simple Example

```sql
begin
    apex_util.CREATE_USER(
        p_user_id => 1,
        p_user_name => 'USER',
        p_first_name => 'EXAMPLE',
        p_last_name => 'EXAMPLE',
        p_description => 'EXAMPLE',
        p_email_address => 'EXAMPLE',
        p_web_password => 'EXAMPLE',
        p_web_password_format => 'EXAMPLE',
        p_group_ids => 'EXAMPLE',
        p_developer_privs => 'EXAMPLE',
        p_default_schema => 'EXAMPLE',
        p_default_date_format => 'EXAMPLE',
        p_allow_access_to_schemas => 'EXAMPLE',
        p_account_expiry => 1,
        p_account_locked => 'EXAMPLE',
        p_failed_access_attempts => 1,
        p_change_password_on_first_use => 'EXAMPLE',
        p_first_password_use_occurred => 'EXAMPLE',
        p_attribute_01 => 'EXAMPLE',
        p_attribute_02 => 'EXAMPLE',
        p_attribute_03 => 'EXAMPLE',
        p_attribute_04 => 'EXAMPLE',
        p_attribute_05 => 'EXAMPLE',
        p_attribute_06 => 'EXAMPLE',
        p_attribute_07 => 'EXAMPLE',
        p_attribute_08 => 'EXAMPLE',
        p_attribute_09 => 'EXAMPLE',
        p_attribute_10 => 'EXAMPLE',
        p_allow_app_building_yn => 'EXAMPLE',
        p_allow_sql_workshop_yn => to_clob('Example text'),
        p_allow_websheet_dev_yn => 'EXAMPLE',
        p_allow_team_development_yn => 'EXAMPLE'
    );
end;
/
```

## More Complex Example

```sql
begin
    -- Assuming this runs inside an APEX page process with the right workspace/app context.
    apex_util.CREATE_USER(
            p_user_id => 1,
            p_user_name => 'USER',
            p_first_name => 'EXAMPLE',
            p_last_name => 'EXAMPLE',
            p_description => 'EXAMPLE',
            p_email_address => 'EXAMPLE',
            p_web_password => 'EXAMPLE',
            p_web_password_format => 'EXAMPLE',
            p_group_ids => 'EXAMPLE',
            p_developer_privs => 'EXAMPLE',
            p_default_schema => 'EXAMPLE',
            p_default_date_format => 'EXAMPLE',
            p_allow_access_to_schemas => 'EXAMPLE',
            p_account_expiry => 1,
            p_account_locked => 'EXAMPLE',
            p_failed_access_attempts => 1,
            p_change_password_on_first_use => 'EXAMPLE',
            p_first_password_use_occurred => 'EXAMPLE',
            p_attribute_01 => 'EXAMPLE',
            p_attribute_02 => 'EXAMPLE',
            p_attribute_03 => 'EXAMPLE',
            p_attribute_04 => 'EXAMPLE',
            p_attribute_05 => 'EXAMPLE',
            p_attribute_06 => 'EXAMPLE',
            p_attribute_07 => 'EXAMPLE',
            p_attribute_08 => 'EXAMPLE',
            p_attribute_09 => 'EXAMPLE',
            p_attribute_10 => 'EXAMPLE',
            p_allow_app_building_yn => 'EXAMPLE',
            p_allow_sql_workshop_yn => to_clob('Example text'),
            p_allow_websheet_dev_yn => 'EXAMPLE',
            p_allow_team_development_yn => 'EXAMPLE'
        );
end;
/
```

