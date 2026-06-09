# APEX_UTIL.IS_LOGIN_PASSWORD_VALID Function

Source: [Oracle APEX 26.1 API Reference](https://docs.oracle.com/en/database/oracle/apex/26.1/aeapi/IS_LOGIN_PASSWORD_VALID-Function.html)

Status: generated detailed reference. Review edge cases against the source before production use.

Parent package: [APEX_UTIL](../APEX_UTIL.md)

## Purpose

Note:

## When To Use

Use this page when code needs the `APEX_UTIL.IS_LOGIN_PASSWORD_VALID` function. Confirm security, workspace, and session requirements for your calling context.

## Signature

```sql
APEX_UTIL.IS_LOGIN_PASSWORD_VALID (
    p_username IN VARCHAR2 DEFAULT NULL,
    p_password IN VARCHAR2 DEFAULT NULL )
RETURN BOOLEAN;
```

## Parameters

| Parameter | Description |
| --- | --- |
| `p_username` | User name in account. |
| `p_password` | Password to be compared with password stored in the account. |

## Returns

true : The user credentials are valid. false : The user credentials are invalid. null : Credentials checking was delayed because of too many wrong combinations.

## Important Notes

- Most APEX APIs assume the correct APEX workspace, application, and session context.
- Validate user-controlled values before passing them into administrative, security, SQL, or web-service APIs.
- Use the source link for exact behavior, defaults, and version-specific caveats.

## Simple Example

```sql
declare
    l_result BOOLEAN;
begin
    l_result := apex_util.IS_LOGIN_PASSWORD_VALID(
        p_username => 'USER',
        p_password => 'EXAMPLE'
    );
    sys.dbms_output.put_line('Result captured.');
end;
/
```

