# APEX_ACL.HAS_USER_ANY_ROLES Function

Source: [Oracle APEX 26.1 API Reference](https://docs.oracle.com/en/database/oracle/apex/26.1/aeapi/HAS_USER_ANY_ROLES-Function.html)

Status: generated detailed reference. Review edge cases against the source before production use.

Parent package: [APEX_ACL](../APEX_ACL.md)

## Purpose

This function returns TRUE when the specified user is assigned to any application role. This function can be used to check if a user is permitted to access an application.

## When To Use

Use this page when code needs the `APEX_ACL.HAS_USER_ANY_ROLES` function. Confirm security, workspace, and session requirements for your calling context.

## Signature

```sql
APEX_ACL.HAS_USER_ANY_ROLES (
    p_application_id IN NUMBER   DEFAULT apex_application.g_flow_id,
    p_user_name      IN VARCHAR2 DEFAULT apex_application.g_user )
    RETURN BOOLEAN;
```

## Parameters

| Parameter | Description |
| --- | --- |
| `p_application_id` | The application ID for which you want to check if a user is assigned to any application role. Defaults to the current application. |
| `p_user_name` | The case insensitive name of the application user to check. Defaults to the current logged-in user. |

## Important Notes

- Most APEX APIs assume the correct APEX workspace, application, and session context.
- Validate user-controlled values before passing them into administrative, security, SQL, or web-service APIs.
- Use the source link for exact behavior, defaults, and version-specific caveats.

## Simple Example

```sql
declare
    l_result BOOLEAN;
begin
    l_result := apex_acl.HAS_USER_ANY_ROLES(
        p_application_id => 1,
        p_user_name => 'USER'
    );
    sys.dbms_output.put_line('Result captured.');
end;
/
```

