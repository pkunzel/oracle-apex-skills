# APEX_CSS.ADD_3RD_PARTY_LIBRARY_FILE Procedure (Deprecated)

Source: [Oracle APEX 26.1 API Reference](https://docs.oracle.com/en/database/oracle/apex/26.1/aeapi/ADD_3RD_PARTY_LIBRARY_FILE-Procedure.html)

Status: generated detailed reference. Review edge cases against the source before production use.

Parent package: [APEX_CSS](../APEX_CSS.md)

## Purpose

This procedure adds the link tag to load a third-party CSS file and also takes into account the specified CDN (content delivery network) for the application.

## When To Use

Use this page when code needs the `APEX_CSS.ADD_3RD_PARTY_LIBRARY_FILE` procedure. Confirm security, workspace, and session requirements for your calling context.

## Deprecation

This member is marked deprecated in the APEX 26.1 documentation. Prefer the documented replacement when available.

## Signature

```sql
APEX_CSS.ADD_3RD_PARTY_LIBRARY_FILE (
    p_library       IN    VARCHAR2, 
    p_file_name     IN    VARCHAR2 DEFAULT NULL, 
    p_directory     IN    VARCHAR2 DEFAULT NULL, 
    p_version       IN    VARCHAR2 DEFAULT NULL, 
    p_media_query   IN    VARCHAR2 DEFAULT NULL,
    p_attributes    IN    VARCHAR2 DEFAULT NULL )
```

## Parameters

| Parameter | Description |
| --- | --- |
| `p_library` | Use one of the c_library_* constants. |
| `p_file_name` | Specifies the file name excluding version, .min , and .css . |
| `p_directory` | (Optional) Directory where the file p_file_name is located. |
| `p_version` | (Optional) If no value is provided, then uses the same version shipped with APEX . |
| `p_media_query` | (Optional) Value that is set as media query. |
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
    apex_css.add_3rd_party_library_file(
        p_library     => 'jquery-ui',
        p_file_name   => 'themes/base/jquery-ui',
        p_directory   => apex_application.g_image_prefix || 'libraries/',
        p_version     => '1.13.2',
        p_media_query => 'screen',
        p_attributes  => 'data-apex-lib="jquery-ui"'
    );
end;
/
```

