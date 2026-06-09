# APEX_CUSTOM_AUTH.SET_SESSION_ID_TO_NEXT_VALUE Procedure

Source: [Oracle APEX 26.1 API Reference](https://docs.oracle.com/en/database/oracle/apex/26.1/aeapi/SET_SESSION_ID_TO_NEXT_VALUE-Procedure.html)

Status: generated detailed reference. Review edge cases against the source before production use.

Parent package: [APEX_CUSTOM_AUTH](../APEX_CUSTOM_AUTH.md)

## Purpose

This procedure combines the operation of GET_NEXT_SESSION_ID and SET_SESSION_ID in one call.

## When To Use

Use this page when code needs the `APEX_CUSTOM_AUTH.SET_SESSION_ID_TO_NEXT_VALUE` procedure. Confirm security, workspace, and session requirements for your calling context.

## Signature

```sql
APEX_CUSTOM_AUTH.SET_SESSION_ID_TO_NEXT_VALUE;
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
    apex_custom_auth.SET_SESSION_ID_TO_NEXT_VALUE;
end;
/
```

## More Complex Example

```sql
begin
    -- Assuming this runs inside an APEX page process with the right workspace/app context.
    apex_custom_auth.SET_SESSION_ID_TO_NEXT_VALUE;
end;
/
```

