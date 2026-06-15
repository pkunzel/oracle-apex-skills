# APEX_JSON.GET_SDO_GEOMETRY Function

Source: [Oracle APEX 26.1 API Reference](https://docs.oracle.com/en/database/oracle/apex/26.1/aeapi/GET_SDO_GEOMETRY-Function.html)

Status: generated detailed reference. Review edge cases against the source before production use.

Parent package: [APEX_JSON](../APEX_JSON.md)

## Purpose

This function returns SDO_GEOMETRY member value from a GeoJSON member. This function supports only two-dimensional geometry objects.

## When To Use

Use this page when code needs the `APEX_JSON.GET_SDO_GEOMETRY` function. Confirm security, workspace, and session requirements for your calling context.

## Signature

```sql
APEX_JSON.GET_SDO_GEOMETRY FUNCTION (
    p_path             IN VARCHAR2,
    p0                 IN VARCHAR2  DEFAULT NULL,
    p1                 IN VARCHAR2  DEFAULT NULL,
    p2                 IN VARCHAR2  DEFAULT NULL,
    p3                 IN VARCHAR2  DEFAULT NULL,
    p4                 IN VARCHAR2  DEFAULT NULL,
    p_srid             IN NUMBER    DEFAULT 4326,
    p_values           IN t_values  DEFAULT g_values )
    RETURN mdsys.sdo_geometry;
```

## Parameters

| Parameter | Description |
| --- | --- |
| `p_values` | Parsed JSON members. Defaults to g_values . |
| `p_path` | Index into p_values . |
| `p[0-4]` | Each %N in p_path is replaced by pN and every i-th %s or %d is replaced by the p[i-1] . |
| `p_srid` | Coordinate system (SRID) to return the SDO_GEOMETRY in. |

## Returns

Return Description a geometry Value at the given path position.

## Important Notes

- Most APEX APIs assume the correct APEX workspace, application, and session context.
- Validate user-controlled values before passing them into administrative, security, SQL, or web-service APIs.
- Use the source link for exact behavior, defaults, and version-specific caveats.

## Simple Example

Read GeoJSON into an SDO geometry value.

```sql
declare
    l_values apex_json.t_values;
    l_point  mdsys.sdo_geometry;
begin
    apex_json.parse(
        p_values => l_values,
        p_source => '{"location":{"type":"Point","coordinates":[-122.42,37.77]}}'
    );

    l_point := apex_json.get_sdo_geometry(
        p_path   => 'location',
        p_values => l_values
    );
end;
/
```
