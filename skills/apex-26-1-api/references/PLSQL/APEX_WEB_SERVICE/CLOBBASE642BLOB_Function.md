# APEX_WEB_SERVICE.CLOBBASE642BLOB Function

Source: [Oracle APEX 26.1 API Reference](https://docs.oracle.com/en/database/oracle/apex/26.1/aeapi/CLOBBASE642BLOB-Function.html)

Status: generated detailed reference. Review edge cases against the source before production use.

Parent package: [APEX_WEB_SERVICE](../APEX_WEB_SERVICE.md)

## Purpose

This function converts a CLOB datatype that is base64 -encoded into a BLOB . This is often used when receiving output from a Web service that contains a binary parameter.

## When To Use

Use this page when code needs the `APEX_WEB_SERVICE.CLOBBASE642BLOB` function. Confirm security, workspace, and session requirements for your calling context.

## Signature

```sql
APEX_WEB_SERVICE.CLOBBASE642BLOB (
    p_clob IN CLOB)
RETURN BLOB;
```

## Parameters

| Parameter | Description |
| --- | --- |
| `p_clob` | The base64 -encoded CLOB to convert into a BLOB . |

## Important Notes

- Most APEX APIs assume the correct APEX workspace, application, and session context.
- Validate user-controlled values before passing them into administrative, security, SQL, or web-service APIs.
- Use the source link for exact behavior, defaults, and version-specific caveats.

## Simple Example

Decode base64 content from a service response into a BLOB.

```sql
declare
    l_file blob;
begin
    l_file := apex_web_service.clobbase642blob(
        p_clob => :P10_BASE64_CONTENT);
end;
/
```

