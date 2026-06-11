# APEX_CUSTOM_AUTH.GET_SECURITY_GROUP_ID Function

Source: [Oracle APEX 26.1 API Reference](https://docs.oracle.com/en/database/oracle/apex/26.1/aeapi/GET_SECURITY_GROUP_ID-Function.html)

Status: generated detailed reference. Review edge cases against the source before production use.

Parent package: [APEX_CUSTOM_AUTH](../APEX_CUSTOM_AUTH.md)

## Purpose

This function returns a number with the value of the security group ID that identifies the workspace of the current user.

## When To Use

Use this page when code needs the `APEX_CUSTOM_AUTH.GET_SECURITY_GROUP_ID` function. Confirm security, workspace, and session requirements for your calling context.

## Signature

```sql
APEX_CUSTOM_AUTH.GET_SECURITY_GROUP_ID 
RETURN NUMBER;
```

## Important Notes

- Most APEX APIs assume the correct APEX workspace, application, and session context.
- Validate user-controlled values before passing them into administrative, security, SQL, or web-service APIs.
- Use the source link for exact behavior, defaults, and version-specific caveats.

## Simple Example

```sql
declare
    l_security_group_id number;
begin
    l_security_group_id := apex_custom_auth.get_security_group_id;
    apex_debug.info('Current workspace security group ID: %s', l_security_group_id);
end;
/
```

