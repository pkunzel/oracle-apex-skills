# APEX_WEB_SERVICE.GENERATE_REQUEST_BODY Function

Source: [Oracle APEX 26.1 API Reference](https://docs.oracle.com/en/database/oracle/apex/26.1/aeapi/GENERATE_REQUEST_BODY-Function.html)

Status: generated detailed reference. Review edge cases against the source before production use.

Parent package: [APEX_WEB_SERVICE](../APEX_WEB_SERVICE.md)

## Purpose

This function generates the multipart/form-data request body from the data in the t_multiparts array.

## When To Use

Use this page when code needs the `APEX_WEB_SERVICE.GENERATE_REQUEST_BODY` function. Confirm security, workspace, and session requirements for your calling context.

## Signature

```sql
APEX_WEB_SERVICE.GENERATE_REQUEST_BODY(
    p_multipart      IN t_multipart_parts,
    p_to_charset     IN VARCHAR2 DEFAULT wwv_flow_lang.get_db_charset )
    RETURN BLOB;
```

## Parameters

| Parameter | Description |
| --- | --- |
| `p_multipart` | The table type for the multipart/request body, t_multipart_parts. |
| `p_to_charset` | The target character set for the parts that are CLOBs. This parameter defaults to the current character set of the database. |

## Important Notes

- Most APEX APIs assume the correct APEX workspace, application, and session context.
- Validate user-controlled values before passing them into administrative, security, SQL, or web-service APIs.
- Use the source link for exact behavior, defaults, and version-specific caveats.

## Simple Example

Generate the binary request body after adding multipart parts.

```sql
declare
    l_parts apex_web_service.t_multipart_parts;
    l_body  blob;
begin
    apex_web_service.append_to_multipart(
        p_multipart    => l_parts,
        p_name         => 'metadata',
        p_content_type => 'application/json',
        p_body         => json_object('orderId' value :P10_ORDER_ID returning clob));

    l_body := apex_web_service.generate_request_body(
        p_multipart  => l_parts,
        p_to_charset => 'AL32UTF8');
end;
/
```

