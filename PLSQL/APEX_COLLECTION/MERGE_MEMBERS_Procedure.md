# APEX_COLLECTION.MERGE_MEMBERS Procedure

Source: [Oracle APEX 26.1 API Reference](https://docs.oracle.com/en/database/oracle/apex/26.1/aeapi/MERGE_MEMBERS-Procedure.html)

Status: generated detailed reference. Review edge cases against the source before production use.

Parent package: [APEX_COLLECTION](../APEX_COLLECTION.md)

## Purpose

Merges members of the given named collection with the values passed in the arrays.

## When To Use

Use this page when code needs the `APEX_COLLECTION.MERGE_MEMBERS` procedure. Confirm security, workspace, and session requirements for your calling context.

## Signature

```sql
APEX_COLLECTION.MERGE_MEMBERS (
    p_collection_name   IN VARCHAR2,
    p_seq               IN apex_application_global.vc_arr2 DEFAULT empty_vc_arr,
    p_c001              IN apex_application_global.vc_arr2 DEFAULT empty_vc_arr,
    p_c002              IN apex_application_global.vc_arr2 DEFAULT empty_vc_arr,
    p_c003              IN apex_application_global.vc_arr2 DEFAULT empty_vc_arr,
    ...
    p_c050              IN apex_application_global.vc_arr2 DEFAULT empty_vc_arr,
    p_null_index        IN NUMBER   DEFAULT 1,
    p_null_value        IN VARCHAR2 DEFAULT NULL,
    p_init_query        IN VARCHAR2 DEFAULT NULL )
```

## Parameters

| Parameter | Description |
| --- | --- |
| `p_collection_name` | The name of the collection. Maximum length is 255 bytes. Collection names are not case-sensitive and are converted to upper case. |
| `p_c001 through p_c050` | Array of attribute values to be merged. Maximum length is 4,000 bytes. Any character attribute exceeding 4,000 characters is truncated to 4,000 characters. The count of the p_c001 array is used across all arrays. If no values are provided, then no actions are performed. |
| `p_c0xx` | Attribute of NN attributes values to be merged. Maximum length can be 4,000 bytes. The attribute value is truncated to 4,000 bytes if greater than this amount. |
| `p_seq` | Identifies the sequence number of the collection member to be merged. |
| `p_null_index` | If the element identified by this value is NULL, then treat this row as a NULL row. For example, if p_null_index is 3 , then p_c003 is treated as a NULL row. The merge function then ignores this row. This results in removing NULL rows from the collection. The NULL index works with the NULL value. If the value of the p_cXXX argument is equal to the p_null_value , then the row is treated as NULL. |
| `p_null_value` | Used with the p_null_index argument. Identifies the NULL value. If used, this value must not be NULL. A typical value for this argument is 0 . |
| `p_init_query` | If the collection does not exist, the collection is created using this query. |

## Returns

This is a procedure and does not return a value.

## Important Notes

- Most APEX APIs assume the correct APEX workspace, application, and session context.
- Validate user-controlled values before passing them into administrative, security, SQL, or web-service APIs.
- Use the source link for exact behavior, defaults, and version-specific caveats.

## Simple Example

```sql
begin
    apex_collection.MERGE_MEMBERS(
        p_collection_name => 'EXAMPLE',
        p_seq => null,
        p_c001 => null,
        p_c002 => null,
        p_c003 => null,
        p_c050 => null,
        p_null_index => 1,
        p_null_value => 'EXAMPLE',
        p_init_query => to_clob('Example text')
    );
end;
/
```

## More Complex Example

```sql
begin
    -- Assuming this runs inside an APEX page process with the right workspace/app context.
    apex_collection.MERGE_MEMBERS(
            p_collection_name => 'EXAMPLE',
            p_seq => null,
            p_c001 => null,
            p_c002 => null,
            p_c003 => null,
            p_c050 => null,
            p_null_index => 1,
            p_null_value => 'EXAMPLE',
            p_init_query => to_clob('Example text')
        );
end;
/
```

