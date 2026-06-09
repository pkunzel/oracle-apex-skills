# APEX_COLLECTION.RESET_COLLECTION_CHANGED Procedure

Source: [Oracle APEX 26.1 API Reference](https://docs.oracle.com/en/database/oracle/apex/26.1/aeapi/RESET_COLLECTION_CHANGED-Procedure.html)

Status: generated detailed reference. Review edge cases against the source before production use.

Parent package: [APEX_COLLECTION](../APEX_COLLECTION.md)

## Purpose

Resets the collection changed flag (mark as not changed) for a given collection.

## When To Use

Use this page when code needs the `APEX_COLLECTION.RESET_COLLECTION_CHANGED` procedure. Confirm security, workspace, and session requirements for your calling context.

## Signature

```sql
APEX_COLLECTION.RESET_COLLECTION_CHANGED (
    p_collection_name   IN VARCHAR2 )
```

## Parameters

| Parameter | Description |
| --- | --- |
| `p_collection_name` | The name of the collection to reset the collection changed flag. An error is returned if this collection does not exist with the specified name of the current user and in the same session. |

## Returns

This is a procedure and does not return a value.

## Important Notes

- Most APEX APIs assume the correct APEX workspace, application, and session context.
- Validate user-controlled values before passing them into administrative, security, SQL, or web-service APIs.
- Use the source link for exact behavior, defaults, and version-specific caveats.

## Simple Example

```sql
begin
    apex_collection.RESET_COLLECTION_CHANGED(
        p_collection_name => 'EXAMPLE'
    );
end;
/
```

