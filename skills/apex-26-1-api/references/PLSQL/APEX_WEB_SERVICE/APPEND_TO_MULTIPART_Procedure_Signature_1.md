# APEX_WEB_SERVICE.APPEND_TO_MULTIPART Procedure Signature 1

Source: [Oracle APEX 26.1 API Reference](https://docs.oracle.com/en/database/oracle/apex/26.1/aeapi/APEX_WEB_SERVICE.APPEND_TO_MULTIPART-Procedure-1.html)

Status: generated detailed reference. Review edge cases against the source before production use.

Parent package: [APEX_WEB_SERVICE](../APEX_WEB_SERVICE.md)

## Purpose

This procedure adds a BLOB to a multipart/form request body.

## When To Use

Use this page when code needs the `APEX_WEB_SERVICE.APPEND_TO_MULTIPART` procedure. Confirm security, workspace, and session requirements for your calling context.

## Signature

```sql
APEX_WEB_SERVICE.APPEND_TO_MULTIPART (
    p_multipart     IN OUT NOCOPY t_multipart_parts,
    p_name          IN            VARCHAR2,
    p_filename      IN            VARCHAR2 DEFAULT NULL,
    p_content_type  IN            VARCHAR2 DEFAULT 'application/octet-stream',
    p_body_blob     IN            BLOB );
```

## Parameters

| Parameter | Description |
| --- | --- |
| `p_multipart` | The table type for the multipart/request body, t_multipart_parts. |
| `p_name` | The name of the multipart data. |
| `p_filename` | The filename of the multipart data if it exists. |
| `p_content_type` | The content type of the multipart data. |
| `p_body_blob` | The content to add in BLOB. |

## Returns

This is a procedure and does not return a value.

## Important Notes

- Most APEX APIs assume the correct APEX workspace, application, and session context.
- Validate user-controlled values before passing them into administrative, security, SQL, or web-service APIs.
- Use the source link for exact behavior, defaults, and version-specific caveats.

## Simple Example

```sql
begin
    apex_web_service.APPEND_TO_MULTIPART(
        p_multipart => null,
        p_name => 'EXAMPLE',
        p_filename => 'EXAMPLE',
        p_content_type => to_clob('Example text'),
        p_body_blob => to_clob('Example text')
    );
end;
/
```

