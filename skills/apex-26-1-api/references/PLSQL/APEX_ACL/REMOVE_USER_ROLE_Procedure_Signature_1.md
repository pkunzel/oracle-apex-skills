# APEX_ACL.REMOVE_USER_ROLE Procedure Signature 1

Source: [Oracle APEX 26.1 API Reference](https://docs.oracle.com/en/database/oracle/apex/26.1/aeapi/REMOVE_USER_ROLE-Procedure-Signature1.html)

Status: generated detailed reference. Review edge cases against the source before production use.

Parent package: [APEX_ACL](../APEX_ACL.md)

## Purpose

This procedure removes an assigned role from a user.

## When To Use

Use this page when code needs the `APEX_ACL.REMOVE_USER_ROLE` procedure. Confirm security, workspace, and session requirements for your calling context.

## Signature

```sql
APEX_ACL.REMOVE_USER_ROLE (
    p_application_id IN NUMBER   DEFAULT apex_application.g_flow_id,
    p_user_name      IN VARCHAR2,
    p_role_id        IN NUMBER );
```

## Parameters

| Parameter | Description |
| --- | --- |
| `p_application_id` | The application ID from which you want to remove an assigned role from a user. Defaults to the current application. |
| `p_user_name` | The case insensitive name of the application user to remove the role from. |
| `p_role_id` | The ID of the role. |

## Returns

This is a procedure and does not return a value.

## Important Notes

- Most APEX APIs assume the correct APEX workspace, application, and session context.
- Validate user-controlled values before passing them into administrative, security, SQL, or web-service APIs.
- Use the source link for exact behavior, defaults, and version-specific caveats.

## Simple Example

```sql
begin
    apex_acl.REMOVE_USER_ROLE(
        p_application_id => 1,
        p_user_name => 'USER',
        p_role_id => 1
    );
end;
/
```

