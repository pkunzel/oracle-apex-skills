# APEX_ZIP.GET_FILE_CONTENT Function Signature 1 (Deprecated)

Source: [Oracle APEX 26.1 API Reference](https://docs.oracle.com/en/database/oracle/apex/26.1/aeapi/APEX_ZIP.GET_FILE_CONTENT-Function-Signature-1.html)

Status: generated detailed reference. Review edge cases against the source before production use.

Parent package: [APEX_ZIP](../APEX_ZIP.md)

## Purpose

Caution:

## When To Use

Use this page when code needs the `APEX_ZIP.GET_FILE_CONTENT` function. Confirm security, workspace, and session requirements for your calling context.

## Deprecation

This member is marked deprecated in the APEX 26.1 documentation. Prefer the documented replacement when available.

## Signature

```sql
APEX_ZIP.GET_FILE_CONTENT (
    p_zipped_blob IN BLOB,
    p_file_name   IN VARCHAR2,
    p_encoding    IN VARCHAR2 DEFAULT NULL )
RETURN BLOB;
```

## Parameters

| Parameter | Description |
| --- | --- |
| `p_zipped_blob` | This is the BLOB containing the zip file. |
| `p_file_name` | File name, including path, of a file located in the zip file. |
| `p_encoding` | Encoding used to zip the file. |

## Returns

Return Description BLOB BLOB of the file specified in p_file_name .

## Important Notes

- Most APEX APIs assume the correct APEX workspace, application, and session context.
- Validate user-controlled values before passing them into administrative, security, SQL, or web-service APIs.
- Use the source link for exact behavior, defaults, and version-specific caveats.

## Simple Example

```sql
declare
    l_result BLOB;
begin
    l_result := apex_zip.GET_FILE_CONTENT(
        p_zipped_blob => null,
        p_file_name => 'EXAMPLE',
        p_encoding => 'EXAMPLE'
    );
    sys.dbms_output.put_line('Result captured.');
end;
/
```

## More Complex Example

```sql
declare
    l_result BLOB;
begin
    -- Assuming this runs outside a normal APEX page request.
    apex_session.create_session(
        p_app_id   => 100,
        p_page_id  => 1,
        p_username => 'USER');

    l_result := apex_zip.GET_FILE_CONTENT(
            p_zipped_blob => null,
            p_file_name => 'EXAMPLE',
            p_encoding => 'EXAMPLE'
        );

    apex_session.delete_session;
exception
    when others then
        apex_session.delete_session;
        raise;
end;
/
```

