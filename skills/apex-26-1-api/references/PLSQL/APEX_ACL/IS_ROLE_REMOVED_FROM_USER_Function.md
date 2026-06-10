# APEX_ACL.IS_ROLE_REMOVED_FROM_USER Function

Source: [Oracle APEX 26.1 API Reference](https://docs.oracle.com/en/database/oracle/apex/26.1/aeapi/IS_ROLE_REMOVED_FROM_USER-Function.html)

Status: generated detailed reference. Review edge cases against the source before production use.

Parent package: [APEX_ACL](../APEX_ACL.md)

## Purpose

This function checks if a role is removed from a user. This function returns TRUE if a specific role is removed from the list of new role IDs for the user.

## When To Use

Use this page when code needs the `APEX_ACL.IS_ROLE_REMOVED_FROM_USER` function. Confirm security, workspace, and session requirements for your calling context.

## Signature

```sql
APEX_ACL.IS_ROLE_REMOVED_FROM_USER (
    p_application_id    IN NUMBER   DEFAULT apex_application.g_flow_id,
    p_user_name         IN VARCHAR2,
    p_role_static_id    IN VARCHAR2,
    p_role_ids          IN apex_t_number )
RETURN BOOLEAN;
```

## Parameters

| Parameter | Description |
| --- | --- |
| `p_application_id` | The application ID for which you want to check if a specific role removed from the list of roles was from a user. It defaults to the current application. |
| `p_user_name` | The case insensitive name of the application user to check. |
| `p_role_static_id` | The case insensitive name of the role static ID to check if it is removed. |
| `p_role_ids` | The array of NUMBER type new role IDs the user is assigned to. |

## Returns

Returns TRUE when p_user_name currently has the role identified by p_role_static_id but the roles identified by p_role_ids do not include the role identified by p_role_static_id . Return FALSE in all other cases.

## Important Notes

- Most APEX APIs assume the correct APEX workspace, application, and session context.
- Validate user-controlled values before passing them into administrative, security, SQL, or web-service APIs.
- Use the source link for exact behavior, defaults, and version-specific caveats.

## Simple Example

```sql
declare
    l_role_removed boolean;
begin
    l_role_removed := apex_acl.is_role_removed_from_user(
        p_application_id => apex_application.g_flow_id,
        p_user_name => upper(:P10_USER_NAME),
        p_role_static_id => 'CONTRIBUTOR',
        p_role_ids => apex_t_number(100100, 100300)
    );

    if l_role_removed then
        apex_debug.info('Contributor role removed for %s.', :P10_USER_NAME);
    end if;
end;
/
```
