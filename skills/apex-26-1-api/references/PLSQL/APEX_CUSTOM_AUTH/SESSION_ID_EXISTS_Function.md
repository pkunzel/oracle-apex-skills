# APEX_CUSTOM_AUTH.SESSION_ID_EXISTS Function

Source: [Oracle APEX 26.1 API Reference](https://docs.oracle.com/en/database/oracle/apex/26.1/aeapi/SESSION_ID_EXISTS-Function.html)

Status: generated detailed reference. Review edge cases against the source before production use.

Parent package: [APEX_CUSTOM_AUTH](../APEX_CUSTOM_AUTH.md)

## Purpose

This function returns a Boolean result based on the global package variable containing the current Oracle APEX session ID.

## When To Use

Use this page when code needs the `APEX_CUSTOM_AUTH.SESSION_ID_EXISTS` function. Confirm security, workspace, and session requirements for your calling context.

## Signature

```sql
APEX_CUSTOM_AUTH.SESSION_ID_EXISTS 
RETURN BOOLEAN;
```

## Important Notes

- Most APEX APIs assume the correct APEX workspace, application, and session context.
- Validate user-controlled values before passing them into administrative, security, SQL, or web-service APIs.
- Use the source link for exact behavior, defaults, and version-specific caveats.

## Simple Example

```sql
begin
    if not apex_custom_auth.session_id_exists then
        apex_custom_auth.set_session_id_to_next_value;
    end if;
end;
/
```

