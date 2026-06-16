# APEX_SPATIAL.POINT Function

Source: [Oracle APEX 26.1 API Reference](https://docs.oracle.com/en/database/oracle/apex/26.1/aeapi/POINT-Function.html)

Status: generated detailed reference. Review edge cases against the source before production use.

Parent package: [APEX_SPATIAL](../APEX_SPATIAL.md)

## Purpose

This function creates a point at ( p_lon , p_lat ).

## When To Use

Use this page when code needs the `APEX_SPATIAL.POINT` function. Confirm security, workspace, and session requirements for your calling context.

## Signature

```sql
APEX_SPATIAL.POINT (
    p_lon        IN NUMBER,
    p_lat        IN NUMBER,
    p_srid       IN t_srid DEFAULT c_wgs_84 )
RETURN mdsys.sdo_geometry;
```

## Parameters

| Parameter | Description |
| --- | --- |
| `p_lon` | Longitude position. |
| `p_lat` | Latitude position. |
| `p_srid` | Reference system (default c_wgs_84). |

## Returns

Return Description mdsys.sdo_geometry The geometry for the point.

## Important Notes

- Most APEX APIs assume the correct APEX workspace, application, and session context.
- Validate user-controlled values before passing them into administrative, security, SQL, or web-service APIs.
- Use the source link for exact behavior, defaults, and version-specific caveats.

## Example

Create a WGS 84 point from longitude and latitude values.

```sql
insert into customer_locations (customer_id, geom)
values (
    :P10_CUSTOMER_ID,
    apex_spatial.point(
        p_lon => :P10_LONGITUDE,
        p_lat => :P10_LATITUDE));
```
