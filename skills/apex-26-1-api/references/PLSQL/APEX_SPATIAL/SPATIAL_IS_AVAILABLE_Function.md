# APEX_SPATIAL.SPATIAL_IS_AVAILABLE Function

Source: [Oracle APEX 26.1 API Reference](https://docs.oracle.com/en/database/oracle/apex/26.1/aeapi/SPATIAL_IS_AVAILABLE-Function.html)

Status: generated detailed reference. Review edge cases against the source before production use.

Parent package: [APEX_SPATIAL](../APEX_SPATIAL.md)

## Purpose

This function returns whether spatial is available in the database.

## When To Use

Use this page when code needs the `APEX_SPATIAL.SPATIAL_IS_AVAILABLE` function. Confirm security, workspace, and session requirements for your calling context.

## Signature

```sql
APEX_SPATIAL.SPATIAL_IS_AVAILABLE (
    spatial_is_available )
RETURN BOOLEAN;
```

## Returns

Parameter Description * True when spatial (SDO_GEOMETRY) is available in the database. Otherwise, false .

## Important Notes

- Most APEX APIs assume the correct APEX workspace, application, and session context.
- Validate user-controlled values before passing them into administrative, security, SQL, or web-service APIs.
- Use the source link for exact behavior, defaults, and version-specific caveats.

## Example

Check Spatial availability before creating metadata or indexes.

```sql
begin
    if apex_spatial.spatial_is_available then
        apex_spatial.insert_geom_metadata_lonlat(
            p_table_name        => 'CUSTOMER_LOCATIONS',
            p_column_name       => 'GEOM',
            p_tolerance         => 1,
            p_create_index_name => 'CUSTOMER_LOCATIONS_SX');
    end if;
end;
/
```
