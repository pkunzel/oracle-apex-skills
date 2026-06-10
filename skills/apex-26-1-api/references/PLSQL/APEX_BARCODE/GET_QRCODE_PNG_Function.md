# APEX_BARCODE.GET_QRCODE_PNG Function

Source: [Oracle APEX 26.1 API Reference](https://docs.oracle.com/en/database/oracle/apex/26.1/aeapi/GET_QRCODE_PNG-Function.html)

Status: generated detailed reference. Review edge cases against the source before production use.

Parent package: [APEX_BARCODE](../APEX_BARCODE.md)

## Purpose

This function generates a QR code that is configured according to the specified options and returns a BLOB in PNG format.

## When To Use

Use this page when code needs the `APEX_BARCODE.GET_QRCODE_PNG` function. Confirm security, workspace, and session requirements for your calling context.

## Signature

```sql
APEX_BARCODE.GET_QRCODE_PNG (
    p_value             IN VARCHAR2,
    p_scale             IN NUMBER         DEFAULT c_default_scale,
    p_quiet             IN NUMBER         DEFAULT c_default_quiet,
    p_eclevel           IN t_eclevel_type DEFAULT c_default_eclevel,
    p_foreground_color  IN VARCHAR2       DEFAULT c_default_foreground_color,
    p_background_color  IN VARCHAR2       DEFAULT NULL )
    RETURN BLOB;
```

## Parameters

| Parameter | Description |
| --- | --- |
| `p_value` | Value to be encoded into the QR Code. |
| `p_scale` | Makes the orignial PNG p_scale times larger (integer 1-10). Default 1 . The original size is determined by the input length. |
| `p_quiet` | Blank area (positive integer value) around the QR Code used to help the scanners clearly distinguish the QR Code from its surroundings for good scannability. Defaults 1 . |
| `p_eclevel` | The error-correction level. The level determines the percentage of the total QR code that can be dirty or damaged and still be valid. Default c_eclevel_type_high . Possible values: c_eclevel_type_low - 7% of data bytes can be restored. c_eclevel_type_medium - 15% of data bytes can be restored. c_eclevel_type_quartile - 25% of data bytes can be restored. c_eclevel_type_high - 30% of data bytes can be restored. |
| `p_foreground_color` | Foreground color. Must be in hex format. Default #000000 . |
| `p_background_color` | Background color. Must be in hex format. Default null (transparent). |

## Returns

The QR code PNG image file.

## Important Notes

- Most APEX APIs assume the correct APEX workspace, application, and session context.
- Validate user-controlled values before passing them into administrative, security, SQL, or web-service APIs.
- Use the source link for exact behavior, defaults, and version-specific caveats.

## Simple Example

```sql
declare
    l_png blob;
begin
    l_png := apex_barcode.get_qrcode_png(
        p_value            => 'https://example.com/orders/10045',
        p_scale            => 4,
        p_quiet            => 2,
        p_eclevel          => apex_barcode.c_eclevel_type_high,
        p_foreground_color => '#111827',
        p_background_color => '#FFFFFF'
    );
end;
/
```

