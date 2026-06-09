# APEX_COLLECTION.DELETE_ALL_COLLECTIONS_SESSION Procedure

Source: [Oracle APEX 26.1 API Reference](https://docs.oracle.com/en/database/oracle/apex/26.1/aeapi/DELETE_ALL_COLLECTIONS_SESSION-Procedure.html)

Status: generated detailed reference. Review edge cases against the source before production use.

Parent package: [APEX_COLLECTION](../APEX_COLLECTION.md)

## Purpose

Use this procedure to delete all collections that belong to the current user in the current Oracle APEX session regardless of the Application ID.

## When To Use

Use this page when code needs the `APEX_COLLECTION.DELETE_ALL_COLLECTIONS_SESSION` procedure. Confirm security, workspace, and session requirements for your calling context.

## Signature

```sql
APEX_COLLECTION.DELETE_ALL_COLLECTIONS_SESSION;
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
    apex_collection.DELETE_ALL_COLLECTIONS_SESSION;
end;
/
```

