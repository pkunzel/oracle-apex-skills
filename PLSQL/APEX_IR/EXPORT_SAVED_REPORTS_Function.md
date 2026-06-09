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

```sql
declare
    l_result CLOB;
begin
    l_result := apex_ir.EXPORT_SAVED_REPORTS(
        p_report_ids => 1,
        p_credential_static_id => 'EXAMPLE_STATIC_ID'
    );
    sys.dbms_output.put_line('Result captured.');
end;
/
```

## More Complex Example

```sql
declare
    l_result CLOB;
begin
    -- Assuming this runs outside a normal APEX page request.
    apex_session.create_session(
        p_app_id   => 100,
        p_page_id  => 1,
        p_username => 'USER');

    l_result := apex_ir.EXPORT_SAVED_REPORTS(
            p_report_ids => 1,
            p_credential_static_id => 'EXAMPLE_STATIC_ID'
        );

    apex_session.delete_session;
exception
    when others then
        apex_session.delete_session;
        raise;
end;
/
```

