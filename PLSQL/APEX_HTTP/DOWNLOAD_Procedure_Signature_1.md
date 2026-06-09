# APEX_HTTP.DOWNLOAD Procedure Signature 1

Source: [Oracle APEX 26.1 API Reference](https://docs.oracle.com/en/database/oracle/apex/26.1/aeapi/APEX_HTTP.DOWNLOAD-Procedure-Signature-1.html)

Status: generated detailed reference. Review edge cases against the source before production use.

Parent package: [APEX_HTTP](../APEX_HTTP.md)

## Purpose

This procedure downloads a BLOB to the client.

## When To Use

Use this page when code needs the `APEX_HTTP.DOWNLOAD` procedure. Confirm security, workspace, and session requirements for your calling context.

## Signature

```sql
APEX_HTTP.DOWNLOAD (
    p_blob              IN OUT NOCOPY   BLOB,
    p_content_type      IN              VARCHAR2,
    p_filename          IN              VARCHAR2     DEFAULT NULL,
    p_is_inline         IN              BOOLEAN      DEFAULT FALSE )
```

## Parameters

| Parameter | Description |
| --- | --- |
| `p_blob` | The BLOB value to download. |
| `p_content_type` | The mime type of the file. |
| `p_filename` | Name of the file. |
| `p_is_inline` | If FALSE (default), the browser displays a file download dialog to save the file. If TRUE , displays the file inline in the browser window. |

## Returns

This is a procedure and does not return a value.

## Important Notes

- Most APEX APIs assume the correct APEX workspace, application, and session context.
- Validate user-controlled values before passing them into administrative, security, SQL, or web-service APIs.
- Use the source link for exact behavior, defaults, and version-specific caveats.

## Simple Example

```sql
begin
    apex_http.DOWNLOAD(
        p_blob => null,
        p_content_type => to_clob('Example text'),
        p_filename => 'EXAMPLE',
        p_is_inline => true
    );
end;
/
```

## More Complex Example

```sql
begin
    -- Assuming this runs inside an APEX page process with the right workspace/app context.
    apex_http.DOWNLOAD(
            p_blob => null,
            p_content_type => to_clob('Example text'),
            p_filename => 'EXAMPLE',
            p_is_inline => true
        );
end;
/
```

