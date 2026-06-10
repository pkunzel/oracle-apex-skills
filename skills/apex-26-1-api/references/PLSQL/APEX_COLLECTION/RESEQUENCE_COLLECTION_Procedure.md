# APEX_COLLECTION.RESEQUENCE_COLLECTION Procedure

Source: [Oracle APEX 26.1 API Reference](https://docs.oracle.com/en/database/oracle/apex/26.1/aeapi/RESEQUENCE_COLLECTION-Procedure.html)

Status: generated detailed reference. Review edge cases against the source before production use.

Parent package: [APEX_COLLECTION](../APEX_COLLECTION.md)

## Purpose

For a named collection, updates the seq_id value of each member so that no gaps exist in the sequencing. For example, a collection with the following set of sequence IDs (1,2,3,5,8,9) becomes (1,2,3,4,5,6).

## When To Use

Use this page when code needs the `APEX_COLLECTION.RESEQUENCE_COLLECTION` procedure. Confirm security, workspace, and session requirements for your calling context.

## Signature

```sql
APEX_COLLECTION.RESEQUENCE_COLLECTION (
    p_collection_name   IN VARCHAR2);
```

## Parameters

| Parameter | Description |
| --- | --- |
| `p_collection_name` | The name of the collection to resequence. An error is returned if this collection does not exist with the specified name of the current user and in the same session. |

## Returns

This is a procedure and does not return a value.

## Important Notes

- Most APEX APIs assume the correct APEX workspace, application, and session context.
- Validate user-controlled values before passing them into administrative, security, SQL, or web-service APIs.
- Use the source link for exact behavior, defaults, and version-specific caveats.

## Simple Example

```sql
begin
    apex_collection.resequence_collection('ORDER_LINES');
end;
/
```

