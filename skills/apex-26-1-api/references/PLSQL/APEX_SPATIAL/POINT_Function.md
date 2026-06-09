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

## Simple Example

```sql
declare
    l_result MDSYS.SDO_GEOMETRY;
begin
    l_result := apex_spatial.POINT(
        p_lon => 1,
        p_lat => 1,
        p_srid => null
    );
    sys.dbms_output.put_line('Result captured.');
end;
/
```

