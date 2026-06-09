# APEX_PLUGIN_UTIL.PRINT_OPTION Procedure

Source: [Oracle APEX 26.1 API Reference](https://docs.oracle.com/en/database/oracle/apex/26.1/aeapi/PRINT_OPTION-Procedure.html)

Status: generated detailed reference. Review edge cases against the source before production use.

Parent package: [APEX_PLUGIN_UTIL](../APEX_PLUGIN_UTIL.md)

## Purpose

This procedure outputs an OPTION tag.

## When To Use

Use this page when code needs the `APEX_PLUGIN_UTIL.PRINT_OPTION` procedure. Confirm security, workspace, and session requirements for your calling context.

## Signature

```sql
APEX_PLUGIN_UTIL.PRINT_OPTION (
    p_display_value       IN VARCHAR2,
    p_return_value        IN VARCHAR2,
    p_is_selected         IN BOOLEAN,
    p_attributes          IN VARCHAR2,
    p_escape              IN BOOLEAN DEFAULT TRUE );
```

## Parameters

| Parameter | Description |
| --- | --- |
| `p_display_value` | Text which is displayed by the option. |
| `p_return_value` | Value which is set when the option is picked. |
| `p_is_selected` | Set to TRUE if the selected attribute should be set for this option. |
| `p_attributes` | Additional HTML attributes which should be set for the OPTION tag. |
| `p_escape` | Set to TRUE if special characters in p_display_value should be escaped. |

## Returns

This is a procedure and does not return a value.

## Important Notes

- Most APEX APIs assume the correct APEX workspace, application, and session context.
- Validate user-controlled values before passing them into administrative, security, SQL, or web-service APIs.
- Use the source link for exact behavior, defaults, and version-specific caveats.

## Simple Example

```sql
begin
    apex_plugin_util.PRINT_OPTION(
        p_display_value => 'EXAMPLE',
        p_return_value => 'EXAMPLE',
        p_is_selected => true,
        p_attributes => 'EXAMPLE',
        p_escape => true
    );
end;
/
```

## More Complex Example

```sql
begin
    -- Assuming this runs inside an APEX page process with the right workspace/app context.
    apex_plugin_util.PRINT_OPTION(
            p_display_value => 'EXAMPLE',
            p_return_value => 'EXAMPLE',
            p_is_selected => true,
            p_attributes => 'EXAMPLE',
            p_escape => true
        );
end;
/
```

