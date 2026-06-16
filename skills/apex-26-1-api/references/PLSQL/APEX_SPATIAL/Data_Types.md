# APEX_SPATIAL.Data Types

Source: [Oracle APEX 26.1 API Reference](https://docs.oracle.com/en/database/oracle/apex/26.1/aeapi/APEX_SPATIAL-Data-Types.html)

Status: generated detailed reference. Review edge cases against the source before production use.

Parent package: [APEX_SPATIAL](../APEX_SPATIAL.md)

## Purpose

The APEX_SPATIAL package uses the following data types.

## When To Use

Use this page when code needs the `APEX_SPATIAL.Data Types` data types. Confirm security, workspace, and session requirements for your calling context.

## Important Notes

- Most APEX APIs assume the correct APEX workspace, application, and session context.
- Validate user-controlled values before passing them into administrative, security, SQL, or web-service APIs.
- Use the source link for exact behavior, defaults, and version-specific caveats.

## Example

Use t_srid values such as c_wgs_84 when creating simple longitude/latitude geometries.

```sql
declare
    l_srid apex_spatial.t_srid := apex_spatial.c_wgs_84;
    l_geom mdsys.sdo_geometry;
begin
    l_geom := apex_spatial.point(
        p_lon  => :P10_LONGITUDE,
        p_lat  => :P10_LATITUDE,
        p_srid => l_srid);
end;
/
```
