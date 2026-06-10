# APEX_COLLECTION.CREATE_COLLECTION_FROM_QUERY_B Procedure

Source: [Oracle APEX 26.1 API Reference](https://docs.oracle.com/en/database/oracle/apex/26.1/aeapi/CREATE_COLLECTION_FROM_QUERY_B-Procedure.html)

Status: generated detailed reference. Review edge cases against the source before production use.

Parent package: [APEX_COLLECTION](../APEX_COLLECTION.md)

## Purpose

Creates a collection from a supplied query using bulk operations.

## When To Use

Use this page when code needs the `APEX_COLLECTION.CREATE_COLLECTION_FROM_QUERY_B` procedure. Confirm security, workspace, and session requirements for your calling context.

## Signature

```sql
APEX_COLLECTION.CREATE_COLLECTION_FROM_QUERY_B (
    p_collection_name       IN VARCHAR2,
    p_query                 IN VARCHAR2,
    p_names                 IN apex_application_global.vc_arr2,
    p_values                IN apex_application_global.vc_arr2,
    p_max_row_count         IN NUMBER   DEFAULT NULL,
    p_truncate_if_exists    IN VARCHAR2 DEFAULT 'NO' )
```

## Parameters

| Parameter | Description |
| --- | --- |
| `p_collection_name` | The name of the collection. The maximum length is 255 characters. An error is returned if this collection exists with the specified name of the current user and in the same session. |
| `p_query` | Query to execute to populate the members of the collection. |
| `p_names` | Array of bind variable names used in the query statement. |
| `p_values` | Array of bind variable values used in the bind variables in the query statement. |
| `p_max_row_count` | Maximum number of rows returned from the query in p_query to add to the collection. |
| `p_truncate_if_exists` | If YES , then members of the collection are truncated first if the collection exists and no error occurs. If NO (or not YES ), and the collection exists, an error occurs. |

## Returns

This is a procedure and does not return a value.

## Important Notes

- Most APEX APIs assume the correct APEX workspace, application, and session context.
- Validate user-controlled values before passing them into administrative, security, SQL, or web-service APIs.
- Use the source link for exact behavior, defaults, and version-specific caveats.

## Simple Example

```sql
begin
    apex_collection.create_collection_from_query_b(
        p_collection_name => 'ACTIVE_PRODUCTS',
        p_query           => q'[select product_id, product_name, unit_price from products where active_yn = 'Y']',
        p_max_row_count   => 500
    );
end;
/
```

