# APEX_IR.GET_LAST_VIEWED_REPORT_ID Function

Source: [Oracle APEX 26.1 API Reference](https://docs.oracle.com/en/database/oracle/apex/26.1/aeapi/GET_LAST_VIEWED_REPORT_ID-Function-Signature-1.html)

Status: generated detailed reference. Review edge cases against the source before production use.

Parent package: [APEX_IR](../APEX_IR.md)

## Purpose

This function returns the last viewed base report ID of the specified page and region.

## When To Use

Use this page when code needs the `APEX_IR.GET_LAST_VIEWED_REPORT_ID` function. Confirm security, workspace, and session requirements for your calling context.

## Signature

```sql
APEX_IR.GET_LAST_VIEWED_REPORT_ID (
    p_page_id   IN NUMBER,
    p_region_id IN VARCHAR2 )
    RETURN NUMBER;
```

## Parameters

| Parameter | Description |
| --- | --- |
| `p_page_id` | Page of the current Oracle APEX application that contains an interactive report. |
| `p_region_id` | The interactive report static ID or region ID. |

## Important Notes

- Most APEX APIs assume the correct APEX workspace, application, and session context.
- Validate user-controlled values before passing them into administrative, security, SQL, or web-service APIs.
- Use the source link for exact behavior, defaults, and version-specific caveats.

## Simple Example

```sql
declare
    l_result NUMBER;
begin
    l_result := apex_ir.GET_LAST_VIEWED_REPORT_ID(
        p_page_id => 1,
        p_region_id => 'EXAMPLE'
    );
    sys.dbms_output.put_line('Result captured.');
end;
/
```

