# APEX_ACL.HAS_USER_ROLE Function

Source: [Oracle APEX 26.1 API Reference](https://docs.oracle.com/en/database/oracle/apex/26.1/aeapi/HAS_USER_ROLE-Function.html)

Status: generated detailed reference. Review edge cases against the source before production use.

Parent package: [APEX_ACL](../APEX_ACL.md)

## Purpose

This function returns TRUE if the user is assigned to the specified role.

## When To Use

Use this page when code needs the `APEX_ACL.HAS_USER_ROLE` function. Confirm security, workspace, and session requirements for your calling context.

## Signature

```sql
APEX_ACL.HAS_USER_ROLE (
    p_application_id IN NUMBER   DEFAULT apex_application.g_flow_id,
    p_user_name      IN VARCHAR2 DEFAULT apex_application.g_user,
    p_role_static_id IN VARCHAR2 )
    RETURN BOOLEAN;
```

## Parameters

| Parameter | Description |
| --- | --- |
| `p_application_id` | The application ID for which you want to check if a user is assigned to the specific role. Defaults to the current application. |
| `p_user_name` | The case insensitive name of the application user to check. It defaults to the current logged in user. |
| `p_role_static_id` | The case insensitive name of the role static ID. |

## Important Notes

- Most APEX APIs assume the correct APEX workspace, application, and session context.
- Validate user-controlled values before passing them into administrative, security, SQL, or web-service APIs.
- Use the source link for exact behavior, defaults, and version-specific caveats.

## Simple Example

```sql
declare
    l_result BOOLEAN;
begin
    l_result := apex_acl.HAS_USER_ROLE(
        p_application_id => 1,
        p_user_name => 'USER',
        p_role_static_id => 'EXAMPLE_STATIC_ID'
    );
    sys.dbms_output.put_line('Result captured.');
end;
/
```

