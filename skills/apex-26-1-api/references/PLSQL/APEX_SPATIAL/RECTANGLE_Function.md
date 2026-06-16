# APEX_SPATIAL.RECTANGLE Function

Source: [Oracle APEX 26.1 API Reference](https://docs.oracle.com/en/database/oracle/apex/26.1/aeapi/RECTANGLE-Function.html)

Status: generated detailed reference. Review edge cases against the source before production use.

Parent package: [APEX_SPATIAL](../APEX_SPATIAL.md)

## Purpose

This function creates a rectangle from point at ( p_lon1 , p_lat1 ) to ( p_lon2 , p_lat2 ).

## When To Use

Use this page when code needs the `APEX_SPATIAL.RECTANGLE` function. Confirm security, workspace, and session requirements for your calling context.

## Signature

```sql
APEX_SPATIAL.RECTANGLE (
    p_lon1        IN NUMBER,
    p_lat1        IN NUMBER,
    p_lon2        IN NUMBER,
    p_lat2        IN NUMBER,
    p_srid        IN t_srid DEFAULT c_wgs_84 )
RETURN mdsys.sdo_geometry;
```

## Parameters

| Parameter | Description |
| --- | --- |
| `p_lon1` | Longitude position of the lower left point. |
| `p_lat1` | Latitude position of the lower left point. |
| `p_lon2` | Longitude position of the upper right point. |
| `p_lat2` | Latitude position of the upper right point. |
| `p_srid` | Reference system (default c_wgs_84). |

## Returns

Return Description mdsys.sdo_geometry The geometry for the rectangle (p_lon1, p_lon2, p_lon2, p_lat2).

## Important Notes

- Most APEX APIs assume the correct APEX workspace, application, and session context.
- Validate user-controlled values before passing them into administrative, security, SQL, or web-service APIs.
- Use the source link for exact behavior, defaults, and version-specific caveats.

## Example

Create a rectangle geometry for a bounding-box query.

```sql
select customer_id
  from customer_locations
 where sdo_anyinteract(
           geom,
           apex_spatial.rectangle(
               p_lon1 => :P10_MIN_LONGITUDE,
               p_lat1 => :P10_MIN_LATITUDE,
               p_lon2 => :P10_MAX_LONGITUDE,
               p_lat2 => :P10_MAX_LATITUDE)) = 'TRUE';
```
