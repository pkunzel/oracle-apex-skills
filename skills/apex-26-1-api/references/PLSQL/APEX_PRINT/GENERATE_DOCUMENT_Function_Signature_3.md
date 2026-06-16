# APEX_PRINT.GENERATE_DOCUMENT Function Signature 3

Source: [Oracle APEX 26.1 API Reference](https://docs.oracle.com/en/database/oracle/apex/26.1/aeapi/APEX_PRINT.GENERATE_DOCUMENT-Function-Signature-3.html)

Status: generated detailed reference. Review edge cases against the source before production use.

Parent package: [APEX_PRINT](../APEX_PRINT.md)

## Purpose

This function returns a document as BLOB using a pre-defined report layout.

## When To Use

Use this page when code needs the `APEX_PRINT.GENERATE_DOCUMENT` function. Confirm security, workspace, and session requirements for your calling context.

## Signature

```sql
APEX_PRINT.GENERATE_DOCUMENT (
    p_application_id            IN NUMBER,
    p_data                      IN CLOB,
    p_report_layout_static_id   IN VARCHAR2,
    p_output_type               IN t_output_type    DEFAULT c_output_pdf,
    p_output_password           IN VARCHAR2         DEFAULT NULL )
    RETURN BLOB;
```

## Parameters

| Parameter | Description |
| --- | --- |
| `p_application_id` | Defines the application ID of the report layout. |
| `p_data` | Report data. The format depends on the type of print server that is used. |
| `p_report_layout_static_id` | Static ID of the report layout (stored under application's shared components). |
| `p_output_type` | Defines the document format. See t_output_type for the available types in Constants . |
| `p_output_password` | The password to needed to open the generated document. PDF only. |

## Returns

A BLOB containing the generated document.

## Important Notes

- Most APEX APIs assume the correct APEX workspace, application, and session context.
- Validate user-controlled values before passing them into administrative, security, SQL, or web-service APIs.
- Use the source link for exact behavior, defaults, and version-specific caveats.

## Example

Use this overload when JSON data is generated in PL/SQL and the report layout is a Shared Components layout.

```sql
declare
    l_pdf blob;
begin
    l_pdf := apex_print.generate_document(
        p_application_id          => :APP_ID,
        p_data                    => json_object(
        'order_id' value :P42_ORDER_ID,
        'status'   value 'Ready',
        'customer' value :P42_CUSTOMER_NAME
        returning clob),
        p_report_layout_static_id => 'ORDER_CONFIRMATION_LAYOUT',
        p_output_type             => apex_print.c_output_pdf);
end;
/
```
