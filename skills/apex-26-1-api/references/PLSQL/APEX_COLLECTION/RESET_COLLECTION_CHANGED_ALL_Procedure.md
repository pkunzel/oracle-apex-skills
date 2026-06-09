# APEX_COLLECTION.RESET_COLLECTION_CHANGED_ALL Procedure

Source: [Oracle APEX 26.1 API Reference](https://docs.oracle.com/en/database/oracle/apex/26.1/aeapi/RESET_COLLECTION_CHANGED_ALL-Procedure.html)

Status: generated detailed reference. Review edge cases against the source before production use.

Parent package: [APEX_COLLECTION](../APEX_COLLECTION.md)

## Purpose

Resets the collection changed flag (mark as not changed) for all collections in the user's current session.

## When To Use

Use this page when code needs the `APEX_COLLECTION.RESET_COLLECTION_CHANGED_ALL` procedure. Confirm security, workspace, and session requirements for your calling context.

## Signature

```sql
APEX_COLLECTION.RESET_COLLECTION_CHANGED_ALL;
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
    apex_collection.RESET_COLLECTION_CHANGED_ALL;
end;
/
```

