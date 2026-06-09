# APEX_COLLECTION.CREATE_COLLECTION_FROM_QUERY_B Procedure (No bind version)

Source: [Oracle APEX 26.1 API Reference](https://docs.oracle.com/en/database/oracle/apex/26.1/aeapi/CREATE_COLLECTION_FROM_QUERY_B-Procedure-NBV.html)

Status: generated detailed reference. Review edge cases against the source before production use.

Parent package: [APEX_COLLECTION](../APEX_COLLECTION.md)

## Purpose

Creates a collection from a supplied query using bulk operations.

## When To Use

Use this page when code needs the `APEX_COLLECTION.CREATE_COLLECTION_FROM_QUERY_B` procedure. Confirm security, workspace, and session requirements for your calling context.

## Signature

```sql
APEX_COLLECTION.CREATE_COLLECTION_FROM_QUERY_B (
    p_collection_name   IN VARCHAR2,
    p_query             IN VARCHAR2,
    p_max_row_count     IN NUMBER   DEFAULT NULL )
```

## Parameters

| Parameter | Description |
| --- | --- |
| `p_collection_name` | The name of the collection. The maximum length is 255 characters. An error is returned if this collection exists with the specified name of the current user and in the same session. |
| `p_query` | Query to execute to populate the members of the collection. |
| `p_max_row_count` | Maximum number of rows returned from the query in p_query to be added to the collection. |

## Returns

This is a procedure and does not return a value.

## Important Notes

- Most APEX APIs assume the correct APEX workspace, application, and session context.
- Validate user-controlled values before passing them into administrative, security, SQL, or web-service APIs.
- Use the source link for exact behavior, defaults, and version-specific caveats.

## Simple Example

```sql
begin
    apex_collection.CREATE_COLLECTION_FROM_QUERY_B(
        p_collection_name => 'EXAMPLE',
        p_query => to_clob('Example text'),
        p_max_row_count => 1
    );
end;
/
```

