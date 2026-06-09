# APEX_PRINT.GENERATE_DOCUMENT Function Signature 6

Source: [Oracle APEX 26.1 API Reference](https://docs.oracle.com/en/database/oracle/apex/26.1/aeapi/APEX_PRINT.GENERATE_DOCUMENT-Function-Signature-6.html)

Status: generated detailed reference. Review edge cases against the source before production use.

Parent package: [APEX_PRINT](../APEX_PRINT.md)

## Purpose

Generates a document using a custom template stored in an OCI Object Storage Bucket and return the contents.

## When To Use

Use this page when code needs the `APEX_PRINT.GENERATE_DOCUMENT` function. Confirm security, workspace, and session requirements for your calling context.

## Signature

```sql
APEX_PRINT.GENERATE_DOCUMENT (
    p_application_id         IN              NUMBER,
    p_report_query_static_id IN              VARCHAR2,
    p_template_type          IN              t_template_type,
    p_template_bucket        IN              VARCHAR2,
    p_template_namespace     IN              VARCHAR2,
    p_template_object        IN              VARCHAR2,
    p_output_type            IN              t_output_type    DEFAULT c_output_pdf,
    p_output_password        IN              VARCHAR2         DEFAULT NULL)
    RETURN BLOB;
```

## Parameters

| Parameter | Description |
| --- | --- |
| `p_application_id` | Defines the application ID of the report query. |
| `p_report_query_static_id` | Static ID of the report query (stored under application's Shared Components). |
| `p_template_type` | Type of the template. |
| `p_template_bucket` | Name of the Object Storage bucket. |
| `p_template_namespace` | Object Storage namespace. |
| `p_template_object` | Name of the Template Object in Object Storage. |
| `p_output_type` | The type of document. |
| `p_output_password` | The password to needed to open the generated document. PDF only. |

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
        p_application_id => 1,
        p_report_query_static_id => to_clob('Example text'),
        p_template_type => null,
        p_template_bucket => 'EXAMPLE',
        p_template_namespace => 'EXAMPLE',
        p_template_object => 'EXAMPLE',
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
            p_application_id => 1,
            p_report_query_static_id => to_clob('Example text'),
            p_template_type => null,
            p_template_bucket => 'EXAMPLE',
            p_template_namespace => 'EXAMPLE',
            p_template_object => 'EXAMPLE',
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

