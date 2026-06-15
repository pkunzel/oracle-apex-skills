# APEX_IR.Constants and Data Types

Source: [Oracle APEX 26.1 API Reference](https://docs.oracle.com/en/database/oracle/apex/26.1/aeapi/APEX_IR.Constants-Data-Types.html)

Status: generated detailed reference. Review edge cases against the source before production use.

Parent package: [APEX_IR](../APEX_IR.md)

## Purpose

Covers the documented constants APEX_IR.Constants and Data Types.

## When To Use

Use this page when code needs the `APEX_IR.Constants and Data Types` constants. Confirm security, workspace, and session requirements for your calling context.

## Important Notes

- Most APEX APIs assume the correct APEX workspace, application, and session context.
- Validate user-controlled values before passing them into administrative, security, SQL, or web-service APIs.
- Use the source link for exact behavior, defaults, and version-specific caveats.

## Simple Example

Use the documented view constants instead of hard-coded view names when calling APIs such as GET_REPORT.

```sql
declare
    l_report apex_ir.t_report;
begin
    l_report := apex_ir.get_report(
        p_page_id   => 10,
        p_region_id => 123456789,
        p_report_id => 987654321,
        p_view      => apex_ir.c_view_report
    );
end;
/
```
