# APEX_BARCODE.GET_QRCODE_SVG Function

Source: [Oracle APEX 26.1 API Reference](https://docs.oracle.com/en/database/oracle/apex/26.1/aeapi/GET_QRCODE_SVG-Function.html)

Status: generated detailed reference. Review edge cases against the source before production use.

Parent package: [APEX_BARCODE](../APEX_BARCODE.md)

## Purpose

This function generates a QR code that is configured according to the specified options and returns a CLOB in SVG format.

## When To Use

Use this page when code needs the `APEX_BARCODE.GET_QRCODE_SVG` function. Confirm security, workspace, and session requirements for your calling context.

## Signature

```sql
APEX_BARCODE.GET_QRCODE_SVG (
    p_value             IN VARCHAR2,
    p_size              IN NUMBER         DEFAULT c_default_size,
    p_quiet             IN NUMBER         DEFAULT c_default_quiet,
    p_eclevel           IN t_eclevel_type DEFAULT c_default_eclevel,
    p_foreground_color  IN VARCHAR2       DEFAULT c_default_foreground_color,
    p_background_color  IN VARCHAR2       DEFAULT NULL )
    RETURN CLOB;
```

## Parameters

| Parameter | Description |
| --- | --- |
| `p_value` | Value to be encoded into the QR code. |
| `p_size` | Size of the QR code (in pixels). Defaults to 256px. |
| `p_foreground_color` | Foreground color. Must be in hex format. Default #000000 . |
| `p_background_color` | Background color. Must be in hex format. Default null (transparent). |
| `p_quiet` | Blank area (positive integer value) around the QR Code used to help the scanners clearly distinguish the QR code from its surroundings for good scannability. Defaults to 1 . |
| `p_eclevel` | The error-correction level. The level determines the percentage of the total QR code that can be dirty or damaged and still be valid. Default c_eclevel_type_high . Possible values: c_eclevel_type_low - 7% of data bytes can be restored. c_eclevel_type_medium - 15% of data bytes can be restored. c_eclevel_type_quartile - 25% of data bytes can be restored. c_eclevel_type_high - 30% of data bytes can be restored. |

## Returns

The SVG value of the QR code.

## Important Notes

- Most APEX APIs assume the correct APEX workspace, application, and session context.
- Validate user-controlled values before passing them into administrative, security, SQL, or web-service APIs.
- Use the source link for exact behavior, defaults, and version-specific caveats.

## Simple Example

```sql
declare
    l_result CLOB;
begin
    l_result := apex_barcode.GET_QRCODE_SVG(
        p_value => 'EXAMPLE',
        p_size => 1,
        p_quiet => 1,
        p_eclevel => null,
        p_foreground_color => 'EXAMPLE',
        p_background_color => 'EXAMPLE'
    );
    sys.dbms_output.put_line('Result captured.');
end;
/
```

