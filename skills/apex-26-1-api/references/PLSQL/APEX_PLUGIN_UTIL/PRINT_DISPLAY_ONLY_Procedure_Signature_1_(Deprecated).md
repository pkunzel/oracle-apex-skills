# APEX_PLUGIN_UTIL.PRINT_DISPLAY_ONLY Procedure Signature 1 (Deprecated)

Source: [Oracle APEX 26.1 API Reference](https://docs.oracle.com/en/database/oracle/apex/26.1/aeapi/PRINT_DISPLAY_ONLY-Procedure-Signature-1.html)

Status: generated detailed reference. Review edge cases against the source before production use.

Parent package: [APEX_PLUGIN_UTIL](../APEX_PLUGIN_UTIL.md)

## Purpose

Caution:

## When To Use

Use this page when code needs the `APEX_PLUGIN_UTIL.PRINT_DISPLAY_ONLY` procedure. Confirm security, workspace, and session requirements for your calling context.

## Deprecation

This member is marked deprecated in the APEX 26.1 documentation. Prefer the documented replacement when available.

## Signature

```sql
APEX_PLUGIN_UTIL.PRINT_DISPLAY_ONLY (
    p_item_name        IN VARCHAR2,
    p_display_value    IN VARCHAR2,
    p_show_line_breaks IN BOOLEAN,
    p_attributes       IN VARCHAR2,
    p_id_postfix       IN VARCHAR2 DEFAULT '_DISPLAY' );
```

## Parameters

| Parameter | Description |
| --- | --- |
| `p_item_name` | Name of the page item. This parameter should be called with p_item.name . |
| `p_display_value` | Text to be displayed. |
| `p_show_line_breaks` | If set to TRUE line breaks in p_display_value are changed to so that the browser renders them as line breaks. |
| `p_attributes` | Additional attributes added to the SPAN tag. |
| `p_id_postfix` | Postfix which is getting added to the value in p_item_name to get the ID for the SPAN tag. Default is _DISPLAY . |

## Returns

This is a procedure and does not return a value.

## Important Notes

- Most APEX APIs assume the correct APEX workspace, application, and session context.
- Validate user-controlled values before passing them into administrative, security, SQL, or web-service APIs.
- Use the source link for exact behavior, defaults, and version-specific caveats.

## Simple Example

```sql
begin
    apex_plugin_util.PRINT_DISPLAY_ONLY(
        p_item_name => 'EXAMPLE',
        p_display_value => 'EXAMPLE',
        p_show_line_breaks => true,
        p_attributes => 'EXAMPLE',
        p_id_postfix => 'EXAMPLE'
    );
end;
/
```

## More Complex Example

```sql
begin
    -- Assuming this runs inside an APEX page process with the right workspace/app context.
    apex_plugin_util.PRINT_DISPLAY_ONLY(
            p_item_name => 'EXAMPLE',
            p_display_value => 'EXAMPLE',
            p_show_line_breaks => true,
            p_attributes => 'EXAMPLE',
            p_id_postfix => 'EXAMPLE'
        );
end;
/
```

