# APEX_UTIL.PUBLIC_CHECK_AUTHORIZATION Function (Deprecated)

Source: [Oracle APEX 26.1 API Reference](https://docs.oracle.com/en/database/oracle/apex/26.1/aeapi/PUBLIC_CHECK_AUTHORIZATION-Function-DEPRECATED.html)

Status: generated detailed reference. Review edge cases against the source before production use.

Parent package: [APEX_UTIL](../APEX_UTIL.md)

## Purpose

Note:

## When To Use

Use this page when code needs the `APEX_UTIL.PUBLIC_CHECK_AUTHORIZATION` function. Confirm security, workspace, and session requirements for your calling context.

## Deprecation

This member is marked deprecated in the APEX 26.1 documentation. Prefer the documented replacement when available.

## Signature

```sql
APEX_UTIL.PUBLIC_CHECK_AUTHORIZATION (
    p_security_scheme    IN    VARCHAR2 ) 
RETURN BOOLEAN;
```

## Parameters

| Parameter | Description |
| --- | --- |
| `p_security_scheme` | The name of the authorization scheme that determines if the user passes the security check. |

## Important Notes

- Most APEX APIs assume the correct APEX workspace, application, and session context.
- Validate user-controlled values before passing them into administrative, security, SQL, or web-service APIs.
- Use the source link for exact behavior, defaults, and version-specific caveats.

## Simple Example

Legacy only. Prefer APEX_AUTHORIZATION.IS_AUTHORIZED in new code.

```sql
begin
    if apex_util.public_check_authorization(
           p_security_scheme => 'Can Administer Orders')
    then
        apex_util.set_session_state('P1_CAN_ADMIN', 'Y');
    end if;
end;
/
```

