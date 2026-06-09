# APEX_AUTHORIZATION.RESET_CACHE Procedure

Source: [Oracle APEX 26.1 API Reference](https://docs.oracle.com/en/database/oracle/apex/26.1/aeapi/RESET_CACHE-Procedure.html)

Status: generated detailed reference. Review edge cases against the source before production use.

Parent package: [APEX_AUTHORIZATION](../APEX_AUTHORIZATION.md)

## Purpose

This procedure resets the authorization caches for the session and forces a re-evaluation when an authorization is checked next.

## When To Use

Use this page when code needs the `APEX_AUTHORIZATION.RESET_CACHE` procedure. Confirm security, workspace, and session requirements for your calling context.

## Signature

```sql
APEX_AUTHORIZATION.RESET_CACHE;
```

## Returns

This is a procedure and does not return a value.

## Important Notes

- Most APEX APIs assume the correct APEX workspace, application, and session context.
- Validate user-controlled values before passing them into administrative, security, SQL, or web-service APIs.
- Use the source link for exact behavior, defaults, and version-specific caveats.

## Simple Example

```sql
begin
    apex_authorization.RESET_CACHE;
end;
/
```

## More Complex Example

```sql
begin
    -- Assuming this runs inside an APEX page process with the right workspace/app context.
    apex_authorization.RESET_CACHE;
end;
/
```

