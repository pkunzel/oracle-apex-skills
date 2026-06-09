# APEX_COLLECTION.CREATE_COLLECTION_FROM_QUERY2 Procedure

Source: [Oracle APEX 26.1 API Reference](https://docs.oracle.com/en/database/oracle/apex/26.1/aeapi/CREATE_COLLECTION_FROM_QUERY2-Procedure.html)

Status: generated detailed reference. Review edge cases against the source before production use.

Parent package: [APEX_COLLECTION](../APEX_COLLECTION.md)

## Purpose

Creates a collection from a supplied query.

## When To Use

Use this page when code needs the `APEX_COLLECTION.CREATE_COLLECTION_FROM_QUERY2` procedure. Confirm security, workspace, and session requirements for your calling context.

## Signature

```sql
APEX_COLLECTION.CREATE_COLLECTION_FROM_QUERY2 (
    p_collection_name       IN VARCHAR2,
    p_query                 IN VARCHAR2,
    p_generate_md5          IN VARCHAR2 DEFAULT 'NO',
    p_truncate_if_exists    IN VARCHAR2 DEFAULT 'NO' )
```

## Parameters

| Parameter | Description |
| --- | --- |
| `p_collection_name` | The name of the collection. The maximum length is 255 characters. An error is returned if this collection exists with the specified name of the current user and in the same session. |
| `p_query` | Query to execute to populate the members of the collection. |
| `p_generate_md5` | Valid values include YES and NO . YES to specify if the message digest of the data of the collection member should be computed. Use this parameter to compare the MD5 of the collection member with another member or to see if that member has changed. |
| `p_truncate_if_exists` | If YES , then members of the collection will first be truncated if the collection exists and no error will be raised. If NO (or not YES ), and the collection exists, an error will be raised. |

## Returns

This is a procedure and does not return a value.

## Important Notes

- Most APEX APIs assume the correct APEX workspace, application, and session context.
- Validate user-controlled values before passing them into administrative, security, SQL, or web-service APIs.
- Use the source link for exact behavior, defaults, and version-specific caveats.

## Simple Example

```sql
begin
    apex_collection.CREATE_COLLECTION_FROM_QUERY2(
        p_collection_name => 'EXAMPLE',
        p_query => to_clob('Example text'),
        p_generate_md5 => 'EXAMPLE',
        p_truncate_if_exists => 'EXAMPLE'
    );
end;
/
```

