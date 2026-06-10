# APEX_BARCODE.GET_CODE128_PNG Function

Source: [Oracle APEX 26.1 API Reference](https://docs.oracle.com/en/database/oracle/apex/26.1/aeapi/GET_CODE128_PNG-Function.html)

Status: generated detailed reference. Review edge cases against the source before production use.

Parent package: [APEX_BARCODE](../APEX_BARCODE.md)

## Purpose

This function generates a Code 128 barcode, configured according to the specified options, and returns a BLOB in PNG format.

## When To Use

Use this page when code needs the `APEX_BARCODE.GET_CODE128_PNG` function. Confirm security, workspace, and session requirements for your calling context.

## Signature

```sql
APEX_BARCODE.GET_CODE128_PNG (
    p_value             IN VARCHAR2,
    p_scale             IN NUMBER   DEFAULT c_default_scale,
    p_foreground_color  IN VARCHAR2 DEFAULT c_default_foreground_color,
    p_background_color  IN VARCHAR2 DEFAULT NULL )
    RETURN BLOB;
```

## Parameters

| Parameter | Description |
| --- | --- |
| `p_value` | Value to be encoded into the Code 128 barcode. |
| `p_scale` | Makes the original PNG p_scale times larger (integer 1-10). Default 1 . The original size is determined by the input length. |
| `p_foreground_color` | Foreground color. Must be in hex code. Default #000000 . |
| `p_background_color` | Background color. Must be in hex code. Default null (transparent). |

## Returns

The Code 128 barcode PNG image file.

## Important Notes

- Most APEX APIs assume the correct APEX workspace, application, and session context.
- Validate user-controlled values before passing them into administrative, security, SQL, or web-service APIs.
- Use the source link for exact behavior, defaults, and version-specific caveats.

## Simple Example

```sql
declare
    l_png blob;
begin
    l_png := apex_barcode.get_code128_png(
        p_value            => 'ORD-10045',
        p_scale            => 2,
        p_foreground_color => '#111827',
        p_background_color => '#FFFFFF'
    );
end;
/
```

