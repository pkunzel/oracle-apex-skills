# APEX_JSON.WRITE Procedure Signature 20

Source: [Oracle APEX 26.1 API Reference](https://docs.oracle.com/en/database/oracle/apex/26.1/aeapi/WRITE-Procedure-Signature-20.html)

Status: generated detailed reference. Review edge cases against the source before production use.

Parent package: [APEX_JSON](../APEX_JSON.md)

## Purpose

This procedure writes a BLOB object attribute. The value will be Base64-encoded.

## When To Use

Use this page when code needs the `APEX_JSON.WRITE` procedure. Confirm security, workspace, and session requirements for your calling context.

## Signature

```sql
APEX_JSON.WRITE (
   p_name        IN VARCHAR2,
   p_value       IN BLOB,
   p_write_null  IN BOOLEAN  DEFAULT FALSE );
```

## Parameters

| Parameter | Description |
| --- | --- |
| `p_name` | The attribute name. |
| `p_values` | The attribute value to be written. |
| `p_write_null` | If TRUE , write an empty array. If FALSE (default), do not write an empty array. |

## Returns

This is a procedure and does not return a value.

## Important Notes

- Most APEX APIs assume the correct APEX workspace, application, and session context.
- Validate user-controlled values before passing them into administrative, security, SQL, or web-service APIs.
- Use the source link for exact behavior, defaults, and version-specific caveats.

## Simple Example

Write a BLOB value, such as a receipt PDF, as a named JSON member.

```sql
declare
    l_receipt_blob blob;
begin
    select receipt_pdf
      into l_receipt_blob
      from order_receipts
     where order_id = 101;

    apex_json.initialize_clob_output;
    apex_json.open_object;
    apex_json.write(
        p_name       => 'receiptPdf',
        p_value      => l_receipt_blob,
        p_write_null => false
    );
    apex_json.close_object;
    apex_json.free_output;
end;
/
```
