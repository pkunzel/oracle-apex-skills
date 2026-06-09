# APEX_WEB_SERVICE.BLOB2CLOBBASE64 Function

Source: [Oracle APEX 26.1 API Reference](https://docs.oracle.com/en/database/oracle/apex/26.1/aeapi/BLOB2CLOBBASE64-Function.html)

Status: generated detailed reference. Review edge cases against the source before production use.

Parent package: [APEX_WEB_SERVICE](../APEX_WEB_SERVICE.md)

## Purpose

This function converts a BLOB data type into a CLOB that is base64 -encoded. This is often used when sending a binary as an input to a web service.

## When To Use

Use this page when code needs the `APEX_WEB_SERVICE.BLOB2CLOBBASE64` function. Confirm security, workspace, and session requirements for your calling context.

## Signature

```sql
APEX_WEB_SERVICE.BLOB2CLOBBASE64 (
    p_blob      IN BLOB,    
    p_newlines  IN VARCHAR2 DEFAULT 'Y',
    p_padding   IN VARCHAR2 DEFAULT 'N' )
RETURN CLOB;
```

## Parameters

| Parameter | Description |
| --- | --- |
| `p_blob` | The BLOB to convert into base64-encoded CLOB. |
| `p_newlines` | Whether the generated base64 content contains line breaks. |
| `p_padding` | Whether to pad the generated base64 content with "=" so that the length becomes a multiple of 4. |

## Important Notes

- Most APEX APIs assume the correct APEX workspace, application, and session context.
- Validate user-controlled values before passing them into administrative, security, SQL, or web-service APIs.
- Use the source link for exact behavior, defaults, and version-specific caveats.

## Simple Example

```sql
declare
    l_result CLOB;
begin
    l_result := apex_web_service.BLOB2CLOBBASE64(
        p_blob => null,
        p_newlines => 'EXAMPLE',
        p_padding => 'EXAMPLE'
    );
    sys.dbms_output.put_line('Result captured.');
end;
/
```

