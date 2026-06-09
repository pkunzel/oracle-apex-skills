# APEX_DATA_EXPORT.DOWNLOAD Procedure

Source: [Oracle APEX 26.1 API Reference](https://docs.oracle.com/en/database/oracle/apex/26.1/aeapi/APEX_DATA_EXPORT-DOWNLOAD-Procedure.html)

Status: generated detailed reference. Review edge cases against the source before production use.

Parent package: [APEX_DATA_EXPORT](../APEX_DATA_EXPORT.md)

## Purpose

This procedure downloads the data export by calling APEX_APPLICATION.STOP_APEX_ENGINE .

## When To Use

Use this page when code needs the `APEX_DATA_EXPORT.DOWNLOAD` procedure. Confirm security, workspace, and session requirements for your calling context.

## Signature

```sql
APEX_DATA_EXPORT.DOWNLOAD (
    p_export                IN OUT NOCOPY t_export,
    p_content_disposition   IN t_content_disposition    DEFAULT c_attachment,
    p_add_file_extension    IN BOOLEAN                  DEFAULT TRUE,
    p_stop_apex_engine      IN BOOLEAN                  DEFAULT TRUE )
```

## Parameters

| Parameter | Description |
| --- | --- |
| `p_export` | The result object of an export. |
| `p_content_disposition` | Specifies whether to download the print document or display inline ( "attachment" or "inline" ). |
| `p_add_file_extension` | Whether Oracle APEX adds the file extension to the filename based on the export format. |
| `p_stop_apex_engine` | Whether to call APEX_APPLICATION.STOP_APEX_ENGINE . |

## Returns

This is a procedure and does not return a value.

## Important Notes

- Most APEX APIs assume the correct APEX workspace, application, and session context.
- Validate user-controlled values before passing them into administrative, security, SQL, or web-service APIs.
- Use the source link for exact behavior, defaults, and version-specific caveats.

## Simple Example

```sql
begin
    apex_data_export.DOWNLOAD(
        p_export => null,
        p_content_disposition => to_clob('Example text'),
        p_add_file_extension => true,
        p_stop_apex_engine => true
    );
end;
/
```

