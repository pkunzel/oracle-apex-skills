# APEX_PRINT.UPLOAD_TEMPLATE Function

Source: [Oracle APEX 26.1 API Reference](https://docs.oracle.com/en/database/oracle/apex/26.1/aeapi/APEX_PRINT.UPLOAD_TEMPLATE-Function.html)

Status: generated detailed reference. Review edge cases against the source before production use.

Parent package: [APEX_PRINT](../APEX_PRINT.md)

## Purpose

This function uploads a template to OCI Object Storage and returns its corresponding ID.

## When To Use

Use this page when code needs the `APEX_PRINT.UPLOAD_TEMPLATE` function. Confirm security, workspace, and session requirements for your calling context.

## Signature

```sql
APEX_PRINT.UPLOAD_TEMPLATE (
    p_template      IN BLOB,
    p_template_type IN t_template_type  DEFAULT c_template_docx )
    RETURN NUMBER;
```

## Parameters

| Parameter | Description |
| --- | --- |
| `p_template` | Content of the template. |
| `p_template_type` | Type of the template. |

## Returns

A number containing the unique ID to reference the template in future calls.

## Important Notes

- Most APEX APIs assume the correct APEX workspace, application, and session context.
- Validate user-controlled values before passing them into administrative, security, SQL, or web-service APIs.
- Use the source link for exact behavior, defaults, and version-specific caveats.

## Example

Upload a DOCX template BLOB and store the returned template id for later document generation.

```sql
declare
    l_template_id number;
begin
    l_template_id := apex_print.upload_template(
        p_template      => :P10_TEMPLATE_BLOB,
        p_template_type => apex_print.c_template_docx);

    insert into print_template_registry(static_id, template_id)
    values ('ORDER_CONFIRMATION', l_template_id);
end;
/
```
