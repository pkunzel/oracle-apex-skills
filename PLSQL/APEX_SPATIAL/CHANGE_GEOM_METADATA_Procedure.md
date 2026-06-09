# APEX_SPATIAL.CHANGE_GEOM_METADATA Procedure

Source: [Oracle APEX 26.1 API Reference](https://docs.oracle.com/en/database/oracle/apex/26.1/aeapi/CHANGE_GEOM_METADATA-Procedure.html)

Status: generated detailed reference. Review edge cases against the source before production use.

Parent package: [APEX_SPATIAL](../APEX_SPATIAL.md)

## Purpose

This procedure modifies a spatial metadata record.

## When To Use

Use this page when code needs the `APEX_SPATIAL.CHANGE_GEOM_METADATA` procedure. Confirm security, workspace, and session requirements for your calling context.

## Signature

```sql
APEX_SPATIAL.CHANGE_GEOM_METADATA (
    p_table_name        IN VARCHAR2,
    p_column_name       IN VARCHAR2,
    p_new_table_name    IN VARCHAR2 DEFAULT NULL,
    p_new_column_name   IN VARCHAR2 DEFAULT NULL,
    p_diminfo           IN mdsys.sdo_dim_array,
    p_srid              IN t_srid );
```

## Parameters

| Parameter | Description |
| --- | --- |
| `p_table_name` | Name of the feature table. |
| `p_column_name` | Name of the column of type mdsys.sdo_geometry . |
| `p_new_table_name` | New name of a feature table (or null, to keep the current value). |
| `p_new_column_name` | New name of the column of type mdsys.sdo_geometry (or null, to keep the current value. |
| `p_diminfo` | SDO_DIM_ELEMENT array, ordered by dimension, with one entry for each dimension. |
| `p_srid` | SRID value for the coordinate system for all geometries in the column. |

## Returns

This is a procedure and does not return a value.

## Important Notes

- Most APEX APIs assume the correct APEX workspace, application, and session context.
- Validate user-controlled values before passing them into administrative, security, SQL, or web-service APIs.
- Use the source link for exact behavior, defaults, and version-specific caveats.

## Simple Example

```sql
begin
    apex_spatial.CHANGE_GEOM_METADATA(
        p_table_name => 'EXAMPLE',
        p_column_name => 'EXAMPLE',
        p_new_table_name => 'EXAMPLE',
        p_new_column_name => 'EXAMPLE',
        p_diminfo => null,
        p_srid => null
    );
end;
/
```

## More Complex Example

```sql
begin
    -- Assuming this runs inside an APEX page process with the right workspace/app context.
    apex_spatial.CHANGE_GEOM_METADATA(
            p_table_name => 'EXAMPLE',
            p_column_name => 'EXAMPLE',
            p_new_table_name => 'EXAMPLE',
            p_new_column_name => 'EXAMPLE',
            p_diminfo => null,
            p_srid => null
        );
end;
/
```

