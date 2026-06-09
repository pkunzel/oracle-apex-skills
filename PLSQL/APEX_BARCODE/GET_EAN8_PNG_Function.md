# APEX_BARCODE.GET_EAN8_PNG Function

Source: [Oracle APEX 26.1 API Reference](https://docs.oracle.com/en/database/oracle/apex/26.1/aeapi/GET_EAN8_PNG-Function.html)

Status: generated detailed reference. Review edge cases against the source before production use.

Parent package: [APEX_BARCODE](../APEX_BARCODE.md)

## Purpose

This function generates an EAN 8 barcode that is configured according to the specified options, and returns a BLOB in PNG format.

## When To Use

Use this page when code needs the `APEX_BARCODE.GET_EAN8_PNG` function. Confirm security, workspace, and session requirements for your calling context.

## Signature

```sql
APEX_BARCODE.GET_EAN8_PNG (
    p_value             IN VARCHAR2,
    p_scale             IN NUMBER   DEFAULT c_default_scale,
    p_foreground_color  IN VARCHAR2 DEFAULT c_default_foreground_color,
    p_background_color  IN VARCHAR2 DEFAULT NULL )
    RETURN BLOB;
```

## Parameters

| Parameter | Description |
| --- | --- |
| `p_value` | Value to be encoded into the EAN 8 barcode. Must be numeric with a maximum of 8 characters. |
| `p_scale` | Makes the orignial PNG p_scale times larger (integer 1-10). Default is 1 . The original size is determined by the input length. |
| `p_foreground_color` | Foreground color. Must be in hex code. Defaults is #000000 . |
| `p_background_color` | Background color. Must be in hex code. Default is null (transparent). |

## Returns

The EAN 8 barcode PNG image file.

## Important Notes

- Most APEX APIs assume the correct APEX workspace, application, and session context.
- Validate user-controlled values before passing them into administrative, security, SQL, or web-service APIs.
- Use the source link for exact behavior, defaults, and version-specific caveats.

## Simple Example

```sql
declare
    l_result BLOB;
begin
    l_result := apex_barcode.GET_EAN8_PNG(
        p_value => 'EXAMPLE',
        p_scale => 1,
        p_foreground_color => 'EXAMPLE',
        p_background_color => 'EXAMPLE'
    );
    sys.dbms_output.put_line('Result captured.');
end;
/
```

## More Complex Example

```sql
declare
    l_result BLOB;
begin
    -- Assuming this runs outside a normal APEX page request.
    apex_session.create_session(
        p_app_id   => 100,
        p_page_id  => 1,
        p_username => 'USER');

    l_result := apex_barcode.GET_EAN8_PNG(
            p_value => 'EXAMPLE',
            p_scale => 1,
            p_foreground_color => 'EXAMPLE',
            p_background_color => 'EXAMPLE'
        );

    apex_session.delete_session;
exception
    when others then
        apex_session.delete_session;
        raise;
end;
/
```

