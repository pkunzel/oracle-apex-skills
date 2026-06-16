# APEX_WEB_SERVICE.Data Types

Source: [Oracle APEX 26.1 API Reference](https://docs.oracle.com/en/database/oracle/apex/26.1/aeapi/APEX_WEB_SERVICE.Data-Types.html)

Status: generated detailed reference. Review edge cases against the source before production use.

Parent package: [APEX_WEB_SERVICE](../APEX_WEB_SERVICE.md)

## Purpose

The APEX_WEB_SERVICE package uses the following data types.

## When To Use

Use this page when code needs the `APEX_WEB_SERVICE.Data Types` data types. Confirm security, workspace, and session requirements for your calling context.

## Important Notes

- Most APEX APIs assume the correct APEX workspace, application, and session context.
- Validate user-controlled values before passing them into administrative, security, SQL, or web-service APIs.
- Use the source link for exact behavior, defaults, and version-specific caveats.

## Example

Use the multipart collection type with APPEND_TO_MULTIPART and GENERATE_REQUEST_BODY.

```sql
declare
    l_parts apex_web_service.t_multipart_parts;
    l_body  blob;
begin
    apex_web_service.append_to_multipart(
        p_multipart    => l_parts,
        p_name         => 'notes',
        p_content_type => 'text/plain',
        p_body         => to_clob(:P10_NOTES));

    l_body := apex_web_service.generate_request_body(
        p_multipart => l_parts);
end;
/
```

