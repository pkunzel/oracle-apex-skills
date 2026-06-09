# APEX_COLLECTION.CREATE_OR_TRUNCATE_COLLECTION Procedure

Source: [Oracle APEX 26.1 API Reference](https://docs.oracle.com/en/database/oracle/apex/26.1/aeapi/CREATE_OR_TRUNCATE_COLLECTION-Procedure.html)

Status: generated detailed reference. Review edge cases against the source before production use.

Parent package: [APEX_COLLECTION](../APEX_COLLECTION.md)

## Purpose

Creates a collection. If a collection exists with the same name for the current user in the same session for the current application ID, all members of the collection are removed (the named collection is truncated).

## When To Use

Use this page when code needs the `APEX_COLLECTION.CREATE_OR_TRUNCATE_COLLECTION` procedure. Confirm security, workspace, and session requirements for your calling context.

## Signature

```sql
APEX_COLLECTION.CREATE_OR_TRUNCATE_COLLECTION (
    p_collection_name   IN VARCHAR2 )
```

## Parameters

| Parameter | Description |
| --- | --- |
| `p_collection_name` | The name of the collection. The maximum length is 255 characters. All members of the named collection are removed if the named collection exists for the current user in the current session. |

## Returns

This is a procedure and does not return a value.

## Important Notes

- Most APEX APIs assume the correct APEX workspace, application, and session context.
- Validate user-controlled values before passing them into administrative, security, SQL, or web-service APIs.
- Use the source link for exact behavior, defaults, and version-specific caveats.

## Simple Example

```sql
begin
    apex_collection.CREATE_OR_TRUNCATE_COLLECTION(
        p_collection_name => 'EXAMPLE'
    );
end;
/
```

