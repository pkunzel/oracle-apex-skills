# APEX_CSS.ADD_FILE Procedure

Source: [Oracle APEX 26.1 API Reference](https://docs.oracle.com/en/database/oracle/apex/26.1/aeapi/ADD_FILE-Procedure.html)

Status: generated detailed reference. Review edge cases against the source before production use.

Parent package: [APEX_CSS](../APEX_CSS.md)

## Purpose

This procedure adds the link tag to load a CSS library. If a library has already been added, it will not be added a second time.

## When To Use

Use this page when code needs the `APEX_CSS.ADD_FILE` procedure. Confirm security, workspace, and session requirements for your calling context.

## Signature

```sql
APEX_CSS.ADD_FILE (
    p_name           IN    VARCHAR2,
    p_directory      IN    VARCHAR2 DEFAULT apex_application.g_image_prefix||'css/',
    p_version        IN    VARCHAR2 DEFAULT NULL,
    p_skip_extension IN    BOOLEAN  DEFAULT FALSE,
    p_media_query    IN    VARCHAR2 DEFAULT NULL,
    -- p_ie_condition is desupported and has no effect
    p_ie_condition   IN    VARCHAR2 DEFAULT NULL,
    p_attributes     IN    VARCHAR2 DEFAULT NULL );
```

## Parameters

| Parameter | Description |
| --- | --- |
| `p_name` | Name of the CSS file. |
| `p_directory` | Begin of the URL where the CSS file should be read from. If you use this function for a plug-in, set this parameter to p_plugin.file_prefix |
| `p_version` | Identifier of the version of the CSS file. The version will be added to the CSS filename. In most cases you should use the default of NULL as the value. |
| `p_skip_extension` | The function automatically adds .css to the CSS filename. If set to TRUE , the function ignores this addition. |
| `p_media_query` | Value set as media query. |
| `p_ie_condition` | (Desupported) Condition used as Internet Explorer condition. |
| `p_attributes` | Extra attributes to add to the link tag. Note: Callers are responsible for escaping this parameter. |

## Returns

This is a procedure and does not return a value.

## Important Notes

- Most APEX APIs assume the correct APEX workspace, application, and session context.
- Validate user-controlled values before passing them into administrative, security, SQL, or web-service APIs.
- Use the source link for exact behavior, defaults, and version-specific caveats.

## Simple Example

```sql
begin
    apex_css.ADD_FILE(
        p_name => 'EXAMPLE',
        p_directory => 'EXAMPLE',
        p_version => 'EXAMPLE',
        p_skip_extension => true,
        p_media_query => to_clob('Example text'),
        p_ie_condition => 'EXAMPLE',
        p_attributes => 'EXAMPLE'
    );
end;
/
```

## More Complex Example

```sql
begin
    -- Assuming this runs inside an APEX page process with the right workspace/app context.
    apex_css.ADD_FILE(
            p_name => 'EXAMPLE',
            p_directory => 'EXAMPLE',
            p_version => 'EXAMPLE',
            p_skip_extension => true,
            p_media_query => to_clob('Example text'),
            p_ie_condition => 'EXAMPLE',
            p_attributes => 'EXAMPLE'
        );
end;
/
```

