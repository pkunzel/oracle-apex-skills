# APEX_SPATIAL.DELETE_GEOM_METADATA Procedure

Source: [Oracle APEX 26.1 API Reference](https://docs.oracle.com/en/database/oracle/apex/26.1/aeapi/DELETE_GEOM_METADATA-Procedure.html)

Status: generated detailed reference. Review edge cases against the source before production use.

Parent package: [APEX_SPATIAL](../APEX_SPATIAL.md)

## Purpose

This procedure deletes a spatial metadata record.

## When To Use

Use this page when code needs the `APEX_SPATIAL.DELETE_GEOM_METADATA` procedure. Confirm security, workspace, and session requirements for your calling context.

## Signature

```sql
APEX_SPATIAL.DELETE_GEOM_METADATA (
    p_table_name        IN VARCHAR2,
    p_column_name       IN VARCHAR2,
    p_drop_index        IN BOOLEAN DEFAULT FALSE );
```

## Parameters

| Parameter | Description |
| --- | --- |
| `p_table_name` | Name of the feature table. |
| `p_column_name` | Name of the column of type mdsys.sdo_geometry . |
| `p_drop_index` | If TRUE (default is FALSE), drop the spatial index on the column. |

## Returns

This is a procedure and does not return a value.

## Important Notes

- Most APEX APIs assume the correct APEX workspace, application, and session context.
- Validate user-controlled values before passing them into administrative, security, SQL, or web-service APIs.
- Use the source link for exact behavior, defaults, and version-specific caveats.

## Simple Example

```sql
begin
    apex_spatial.DELETE_GEOM_METADATA(
        p_table_name => 'EXAMPLE',
        p_column_name => 'EXAMPLE',
        p_drop_index => true
    );
end;
/
```

