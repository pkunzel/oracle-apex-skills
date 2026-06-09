# APEX_BARCODE.GET_EAN8_SVG Function

Source: [Oracle APEX 26.1 API Reference](https://docs.oracle.com/en/database/oracle/apex/26.1/aeapi/GET_EAN8_SVG-Function.html)

Status: generated detailed reference. Review edge cases against the source before production use.

Parent package: [APEX_BARCODE](../APEX_BARCODE.md)

## Purpose

This function generates an EAN 8 barcode that is configured according to the specified options, and returns a CLOB in SVG format.

## When To Use

Use this page when code needs the `APEX_BARCODE.GET_EAN8_SVG` function. Confirm security, workspace, and session requirements for your calling context.

## Signature

```sql
APEX_BARCODE.GET_EAN8_SVG (
    p_value             IN VARCHAR2,
    p_size              IN NUMBER   DEFAULT c_default_size,
    p_foreground_color  IN VARCHAR2 DEFAULT c_default_foreground_color,
    p_background_color  IN VARCHAR2 DEFAULT NULL )
    RETURN CLOB;
```

## Parameters

| Parameter | Description |
| --- | --- |
| `p_value` | Value to be encoded into the EAN 8 Barcode. Format is numeric with a maximum of 8 digits. |
| `p_size` | Size of the EAN 8 Barcode (in pixels). Default 256px. |
| `p_foreground_color` | Foreground color. Must be in hex code. Default #000000 . |
| `p_background_color` | Background color. Must be in hex code. Default null (transparent). |

## Returns

The SVG value of the EAN 8 barcode.

## Important Notes

- Most APEX APIs assume the correct APEX workspace, application, and session context.
- Validate user-controlled values before passing them into administrative, security, SQL, or web-service APIs.
- Use the source link for exact behavior, defaults, and version-specific caveats.

## Simple Example

```sql
declare
    l_result CLOB;
begin
    l_result := apex_barcode.GET_EAN8_SVG(
        p_value => 'EXAMPLE',
        p_size => 1,
        p_foreground_color => 'EXAMPLE',
        p_background_color => 'EXAMPLE'
    );
    sys.dbms_output.put_line('Result captured.');
end;
/
```

