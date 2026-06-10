# APEX_AUTHORIZATION.HAS_ACCESS Function

Source: [Oracle APEX 26.1 API Reference](https://docs.oracle.com/en/database/oracle/apex/26.1/aeapi/APEX_AUTHORIZATION.HAS_ACCESS-Function.html)

Status: generated detailed reference. Review edge cases against the source before production use.

Parent package: [APEX_AUTHORIZATION](../APEX_AUTHORIZATION.md)

## Purpose

This function determines if the current user passes the authorization Static ID. For performance reasons, authorization results are cached. Because of this, the function may not always evaluate the authorization when called, but take the result out of the cache.

## When To Use

Use this page when code needs the `APEX_AUTHORIZATION.HAS_ACCESS` function. Confirm security, workspace, and session requirements for your calling context.

## Signature

```sql
APEX_AUTHORIZATION.HAS_ACCESS (
    p_static_id  IN   VARCHAR2 )
RETURN BOOLEAN;
```

## Parameters

| Parameter | Description |
| --- | --- |
| `p_static_id` | The Static ID of an authorization scheme in the application. |

## Returns

Parameter Description TRUE If the authorization is successful. FALSE If the authorization is not successful.

## Important Notes

- Most APEX APIs assume the correct APEX workspace, application, and session context.
- Validate user-controlled values before passing them into administrative, security, SQL, or web-service APIs.
- Use the source link for exact behavior, defaults, and version-specific caveats.

## Simple Example

```sql
declare
    l_can_manage_orders boolean;
begin
    l_can_manage_orders := apex_authorization.has_access(
        p_authorization_name => 'CAN_MANAGE_ORDERS'
    );

    if l_can_manage_orders then
        apex_debug.info('Current user may manage orders.');
    end if;
end;
/
```

