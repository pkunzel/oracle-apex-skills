# APEX_SPATIAL.CIRCLE_POLYGON Function

Source: [Oracle APEX 26.1 API Reference](https://docs.oracle.com/en/database/oracle/apex/26.1/aeapi/CIRCLE_POLYGON-Function.html)

Status: generated detailed reference. Review edge cases against the source before production use.

Parent package: [APEX_SPATIAL](../APEX_SPATIAL.md)

## Purpose

This function creates a polygon that approximates a circle at ( p_lon , p_lat ) with radius of p_radius . See mdsys.sdo_util.circle_polygon for details.

## When To Use

Use this page when code needs the `APEX_SPATIAL.CIRCLE_POLYGON` function. Confirm security, workspace, and session requirements for your calling context.

## Signature

```sql
APEX_SPATIAL.CIRCLE_POLYGON (
    p_lon           IN NUMBER,
    p_lat           IN NUMBER,
    p_radius        IN NUMBER,
    p_arc_tolerance IN NUMBER DEFAULT 20,
    p_srid          IN t_srid DEFAULT c_wgs_84 )
RETURN mdsys.sdo_geometry;
```

## Parameters

| Parameter | Description |
| --- | --- |
| `p_lon` | Longitude of center point. |
| `p_lat` | Latitude of center point. |
| `p_radius` | Radius of the circle in meters. |
| `p_arc_tolerance` | Arc tolerance (default 20). |
| `p_srid` | Reference system (default c_wgs_84 ). |

## Returns

Return Description mdsys.sdo_geometry The geometry for the polygon that approximates the circle.

## Important Notes

- Most APEX APIs assume the correct APEX workspace, application, and session context.
- Validate user-controlled values before passing them into administrative, security, SQL, or web-service APIs.
- Use the source link for exact behavior, defaults, and version-specific caveats.

## Example

Build a circle polygon in meters for radius searches around a longitude/latitude point.

```sql
select customer_id
  from customer_locations
 where sdo_anyinteract(
           geom,
           apex_spatial.circle_polygon(
               p_lon    => :P10_LONGITUDE,
               p_lat    => :P10_LATITUDE,
               p_radius => 5000)) = 'TRUE';
```
