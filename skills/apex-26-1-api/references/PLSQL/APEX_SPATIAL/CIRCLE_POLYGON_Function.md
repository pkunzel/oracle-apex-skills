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

## Simple Example

```sql
declare
    l_result MDSYS.SDO_GEOMETRY;
begin
    l_result := apex_spatial.CIRCLE_POLYGON(
        p_lon => 1,
        p_lat => 1,
        p_radius => 1,
        p_arc_tolerance => 1,
        p_srid => null
    );
    sys.dbms_output.put_line('Result captured.');
end;
/
```

## More Complex Example

```sql
declare
    l_result MDSYS.SDO_GEOMETRY;
begin
    -- Assuming this runs outside a normal APEX page request.
    apex_session.create_session(
        p_app_id   => 100,
        p_page_id  => 1,
        p_username => 'USER');

    l_result := apex_spatial.CIRCLE_POLYGON(
            p_lon => 1,
            p_lat => 1,
            p_radius => 1,
            p_arc_tolerance => 1,
            p_srid => null
        );

    apex_session.delete_session;
exception
    when others then
        apex_session.delete_session;
        raise;
end;
/
```

