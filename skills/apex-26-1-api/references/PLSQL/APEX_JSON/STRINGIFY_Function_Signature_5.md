# APEX_JSON.STRINGIFY Function Signature 5

Source: [Oracle APEX 26.1 API Reference](https://docs.oracle.com/en/database/oracle/apex/26.1/aeapi/STRINGIFY-Function-Signature-5.html)

Status: generated detailed reference. Review edge cases against the source before production use.

Parent package: [APEX_JSON](../APEX_JSON.md)

## Purpose

This function converts p_value to a GeoJSON value.

## When To Use

Use this page when code needs the `APEX_JSON.STRINGIFY` function. Confirm security, workspace, and session requirements for your calling context.

## Signature

```sql
APEX_JSON.STRINGIFY (
    p_value IN mdsys.sdo_geometry )
    RETURN CLOB;
```

## Parameters

| Parameter | Description |
| --- | --- |
| `p_value` | The sdo_geometry value to be converted. |

## Returns

Return Description CLOB The GeoJSON value.

## Important Notes

- Most APEX APIs assume the correct APEX workspace, application, and session context.
- Validate user-controlled values before passing them into administrative, security, SQL, or web-service APIs.
- Use the source link for exact behavior, defaults, and version-specific caveats.

## Simple Example

Stringify an SDO geometry value as JSON.

```sql
declare
    l_json_value varchar2(32767);
begin
    l_json_value := apex_json.stringify(
        mdsys.sdo_geometry(
            2001,
            4326,
            mdsys.sdo_point_type(-122.42, 37.77, 0),
            mdsys.sdo_elem_info_array(1, 1, 1),
            mdsys.sdo_ordinate_array(-122.42, 37.77)
        )
    );
end;
/
```
