# APEX_UTIL.CREATE_USER_GROUP Procedure

Source: [Oracle APEX 26.1 API Reference](https://docs.oracle.com/en/database/oracle/apex/26.1/aeapi/CREATE_USER_GROUP-Procedure.html)

Status: generated detailed reference. Review edge cases against the source before production use.

Parent package: [APEX_UTIL](../APEX_UTIL.md)

## Purpose

This procedure creates a user group when you are using Oracle APEX Accounts authentication.

## When To Use

Use this page when code needs the `APEX_UTIL.CREATE_USER_GROUP` procedure. Confirm security, workspace, and session requirements for your calling context.

## Signature

```sql
APEX_UTIL.CREATE_USER_GROUP (
    p_id                    IN NUMBER   DEFAULT NULL,
    p_group_name            IN VARCHAR2,
    p_security_group_id     IN NUMBER   DEFAULT NULL,
    p_group_desc            IN VARCHAR2 DEFAULT NULL );
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
    apex_util.CREATE_USER_GROUP(
        p_id => 1,
        p_group_name => 'EXAMPLE',
        p_security_group_id => 1,
        p_group_desc => 'EXAMPLE'
    );
end;
/
```

