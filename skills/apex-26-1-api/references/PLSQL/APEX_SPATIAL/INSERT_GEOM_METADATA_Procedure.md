# APEX_SPATIAL.INSERT_GEOM_METADATA Procedure

Source: [Oracle APEX 26.1 API Reference](https://docs.oracle.com/en/database/oracle/apex/26.1/aeapi/INSERT_GEOM_METADATA-Procedure.html)

Status: generated detailed reference. Review edge cases against the source before production use.

Parent package: [APEX_SPATIAL](../APEX_SPATIAL.md)

## Purpose

This procedure inserts a spatial metadata record and optionally creates a spatial index.

## When To Use

Use this page when code needs the `APEX_SPATIAL.INSERT_GEOM_METADATA` procedure. Confirm security, workspace, and session requirements for your calling context.

## Signature

```sql
APEX_SPATIAL.INSERT_GEOM_METADATA (
    p_table_name        IN VARCHAR2,
    p_column_name       IN VARCHAR2,
    p_diminfo           in mdsys.sdo_dim_array,
    p_srid              in t_srid,
    p_create_index_name IN VARCHAR2 DEFAULT NULL );
```

## Parameters

| Parameter | Description |
| --- | --- |
| `p_table_name` | The name of the feature table. |
| `p_column_name` | The name of the column of type mdsys.sdo_geometry . |
| `p_diminfo` | The SDO_DIM_ELEMENT array, ordered by dimension, with one entry for each dimension. |
| `p_srid` | The SRID value for the coordinate system for all geometries in the column. |
| `p_create_index_name` | If not null, a spatial index on the column is created with this name. Only simple column names are supported, function based indexes or indexes on object attributes cause an error. For more complex requirements, leave this parameter null (the default) and manually create the index. |

## Returns

This is a procedure and does not return a value.

## Important Notes

- Most APEX APIs assume the correct APEX workspace, application, and session context.
- Validate user-controlled values before passing them into administrative, security, SQL, or web-service APIs.
- Use the source link for exact behavior, defaults, and version-specific caveats.

## Simple Example

```sql
begin
    apex_spatial.INSERT_GEOM_METADATA(
        p_table_name => 'EXAMPLE',
        p_column_name => 'EXAMPLE',
        p_diminfo => null,
        p_srid => null,
        p_create_index_name => true
    );
end;
/
```

