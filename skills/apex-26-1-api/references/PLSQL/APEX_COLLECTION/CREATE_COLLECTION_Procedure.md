# APEX_COLLECTION.CREATE_COLLECTION Procedure

Source: [Oracle APEX 26.1 API Reference](https://docs.oracle.com/en/database/oracle/apex/26.1/aeapi/CREATE_COLLECTION-Procedure.html)

Status: generated detailed reference. Review edge cases against the source before production use.

Parent package: [APEX_COLLECTION](../APEX_COLLECTION.md)

## Purpose

Creates an empty collection that does not already exist. If a collection exists with the same name for the current user in the same session for the current application ID, an application error occurs.

## When To Use

Use this page when code needs the `APEX_COLLECTION.CREATE_COLLECTION` procedure. Confirm security, workspace, and session requirements for your calling context.

## Signature

```sql
APEX_COLLECTION.CREATE_COLLECTION (
    p_collection_name       IN VARCHAR2,
    p_truncate_if_exists    IN VARCHAR2 DEFAULT 'NO' )
```

## Parameters

| Parameter | Description |
| --- | --- |
| `p_collection_name` | The name of the collection. The maximum length is 255 characters. An error is returned if this collection exists with the specified name of the current user and in the same session. |
| `p_truncate_if_exists` | If YES , then members of the collection are first truncated if the collection exists and no error occurs. If NO (or not YES ), and the collection exists, an error occurs. |

## Returns

This is a procedure and does not return a value.

## Important Notes

- Most APEX APIs assume the correct APEX workspace, application, and session context.
- Validate user-controlled values before passing them into administrative, security, SQL, or web-service APIs.
- Use the source link for exact behavior, defaults, and version-specific caveats.

## Simple Example

```sql
begin
    apex_collection.CREATE_COLLECTION(
        p_collection_name => 'EXAMPLE',
        p_truncate_if_exists => 'EXAMPLE'
    );
end;
/
```

