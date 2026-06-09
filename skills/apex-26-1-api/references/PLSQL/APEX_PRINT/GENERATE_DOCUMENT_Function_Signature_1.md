# APEX_PRINT.GENERATE_DOCUMENT Function Signature 1

Source: [Oracle APEX 26.1 API Reference](https://docs.oracle.com/en/database/oracle/apex/26.1/aeapi/APEX_PRINT.GENERATE_DOCUMENT-Function-Signature-1.html)

Status: generated detailed reference. Review edge cases against the source before production use.

Parent package: [APEX_PRINT](../APEX_PRINT.md)

## Purpose

This function generates a document based on data and a template and returns the contents.

## When To Use

Use this page when code needs the `APEX_PRINT.GENERATE_DOCUMENT` function. Confirm security, workspace, and session requirements for your calling context.

## Signature

```sql
APEX_PRINT.GENERATE_DOCUMENT (
    p_data               IN CLOB,
    p_template           IN BLOB,
    p_template_type      IN t_template_type  DEFAULT c_template_docx,
    p_output_type        IN t_output_type    DEFAULT c_output_pdf,
    p_output_password    IN VARCHAR2         DEFAULT NULL ) )
    RETURN BLOB;
```

## Parameters

| Parameter | Description |
| --- | --- |
| `p_data` | Data for the document. Currently JSON format only. |
| `p_template` | Contents of the template. |
| `p_template_type` | Type of the template. |
| `p_output_type` | The type of document. |
| `p_output_password` | The password to needed to open the generated document. PDF only. |

## Returns

A BLOB containing the generated document.

## Important Notes

- Most APEX APIs assume the correct APEX workspace, application, and session context.
- Validate user-controlled values before passing them into administrative, security, SQL, or web-service APIs.
- Use the source link for exact behavior, defaults, and version-specific caveats.

## Simple Example

```sql
declare
    l_result BLOB;
begin
    l_result := apex_print.GENERATE_DOCUMENT(
        p_data => to_clob('Example text'),
        p_template => null,
        p_template_type => null,
        p_output_type => null,
        p_output_password => 'EXAMPLE'
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

    l_result := apex_print.GENERATE_DOCUMENT(
            p_data => to_clob('Example text'),
            p_template => null,
            p_template_type => null,
            p_output_type => null,
            p_output_password => 'EXAMPLE'
        );

    apex_session.delete_session;
exception
    when others then
        apex_session.delete_session;
        raise;
end;
/
```

