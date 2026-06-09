# APEX_SESSION.SET_TENANT_ID Procedure

Source: [Oracle APEX 26.1 API Reference](https://docs.oracle.com/en/database/oracle/apex/26.1/aeapi/SET_TENANT_ID.html)

Status: generated detailed reference. Review edge cases against the source before production use.

Parent package: [APEX_SESSION](../APEX_SESSION.md)

## Purpose

This procedure is used to associate a session with a tenant ID which can be used for building multitenant Oracle APEX applications. Once set, the value of the current tenant can be retrieved using the built-in APP_TENANT_ID .

## When To Use

Use this page when code needs the `APEX_SESSION.SET_TENANT_ID` procedure. Confirm security, workspace, and session requirements for your calling context.

## Signature

```sql
APEX_SESSION.SET_TENANT_ID (
    p_tenant_id IN VARCHAR2 );
```

## Parameters

| Parameter | Description |
| --- | --- |
| `p_tenant_id` | The tenant ID to associate with a session |

## Returns

This is a procedure and does not return a value.

## Important Notes

- Most APEX APIs assume the correct APEX workspace, application, and session context.
- Validate user-controlled values before passing them into administrative, security, SQL, or web-service APIs.
- Use the source link for exact behavior, defaults, and version-specific caveats.

## Simple Example

```sql
begin
    apex_session.SET_TENANT_ID(
        p_tenant_id => 'EXAMPLE'
    );
end;
/
```

## More Complex Example

```sql
begin
    -- Assuming this runs inside an APEX page process with the right workspace/app context.
    apex_session.SET_TENANT_ID(
            p_tenant_id => 'EXAMPLE'
        );
end;
/
```

