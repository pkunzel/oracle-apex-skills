# APEX_AUTHORIZATION.IS_AUTHORIZED Function

Source: [Oracle APEX 26.1 API Reference](https://docs.oracle.com/en/database/oracle/apex/26.1/aeapi/IS_AUTHORIZED-Function.html)

Status: generated detailed reference. Review edge cases against the source before production use.

Parent package: [APEX_AUTHORIZATION](../APEX_AUTHORIZATION.md)

## Purpose

This function determines if the current user passes the authorization with name p_authorization_name . For performance reasons, authorization results are cached. Because of this, the function may not always evaluate the authorization when called, but take the result out of the cache.

## When To Use

Use this page when code needs the `APEX_AUTHORIZATION.IS_AUTHORIZED` function. Confirm security, workspace, and session requirements for your calling context.

## Signature

```sql
APEX_AUTHORIZATION.IS_AUTHORIZED (
    p_authorization_name IN VARCHAR2 )
    RETURN BOOLEAN;
```

## Parameters

| Parameter | Description |
| --- | --- |
| `p_authorization_name` | The name of an authorization scheme in the application. |

## Returns

Parameter Description TRUE If the authorization is successful. FALSE If the authorization is not successful.

## Important Notes

- Most APEX APIs assume the correct APEX workspace, application, and session context.
- Validate user-controlled values before passing them into administrative, security, SQL, or web-service APIs.
- Use the source link for exact behavior, defaults, and version-specific caveats.

## Simple Example

```sql
declare
    l_result BOOLEAN;
begin
    l_result := apex_authorization.IS_AUTHORIZED(
        p_authorization_name => 'EXAMPLE'
    );
    sys.dbms_output.put_line('Result captured.');
end;
/
```

