# APEX_IR.EXPORT_SAVED_REPORTS Function

Source: [Oracle APEX 26.1 API Reference](https://docs.oracle.com/en/database/oracle/apex/26.1/aeapi/EXPORT_SAVED_REPORTS-Function.html)

Status: generated detailed reference. Review edge cases against the source before production use.

Parent package: [APEX_IR](../APEX_IR.md)

## Purpose

This function exports multiple saved reports from the current app and workspace. Exports default or user-saved reports.

## When To Use

Use this page when code needs the `APEX_IR.EXPORT_SAVED_REPORTS` function. Confirm security, workspace, and session requirements for your calling context.

## Signature

```sql
APEX_IR.EXPORT_SAVED_REPORTS (
    p_report_ids           IN apex_t_number,
    p_credential_static_id IN VARCHAR2 )
    RETURN CLOB;
```

## Parameters

| Parameter | Description |
| --- | --- |
| `p_report_ids` | The array of report IDs to export. |
| `p_credential_static_id` | The Key Pair authentication credential static ID. This credential is used to create a signature for the export. Create compatible public and private keys using OpenSSH, and use those to create a Key Pair workspace web credential. |

## Returns

The signed and base64-encoded report export JSON object in CLOB.

## Important Notes

- Most APEX APIs assume the correct APEX workspace, application, and session context.
- Validate user-controlled values before passing them into administrative, security, SQL, or web-service APIs.
- Use the source link for exact behavior, defaults, and version-specific caveats.

## Simple Example

Export selected saved reports and store the signed export payload.

```sql
declare
    l_export clob;
begin
    l_export := apex_ir.export_saved_reports(
        p_report_ids           => apex_t_number(987654321, 987654322),
        p_credential_static_id => 'IR_REPORT_SIGNING_KEY'
    );

    insert into ir_report_exports(exported_on, export_content)
    values (systimestamp, l_export);
end;
/
```
