# APEX_UTIL.IR_FILTER Procedure (Deprecated)

Source: [Oracle APEX 26.1 API Reference](https://docs.oracle.com/en/database/oracle/apex/26.1/aeapi/IR_FILTER-Procedure-DEPRECATED.html)

Status: generated detailed reference. Review edge cases against the source before production use.

Parent package: [APEX_UTIL](../APEX_UTIL.md)

## Purpose

Note:

## When To Use

Use this page when code needs the `APEX_UTIL.IR_FILTER` procedure. Confirm security, workspace, and session requirements for your calling context.

## Deprecation

This member is marked deprecated in the APEX 26.1 documentation. Prefer the documented replacement when available.

## Signature

```sql
APEX_UTIL.IR_FILTER (
    p_page_id       IN NUMBER,
    p_report_column IN VARCHAR2,
    p_operator_abbr IN VARCHAR2 DEFAULT NULL,
    p_filter_value  IN VARCHAR2,
    p_report_alias  IN VARCHAR2 DEFAULT NULL );
```

## Parameters

| Parameter | Description |
| --- | --- |
| `p_page_id` | Page of the current Oracle APEX application that contains an interactive report. |
| `p_report_column` | Name of the report SQL column, or column alias, to be filtered. |
| `p_operator_abbr` | Filter type. Valid values are as follows: EQ = Equals NEQ = Not Equals LT = Less than LTE = Less then or equal to GT = Greater Than GTE = Greater than or equal to LIKE = SQL Like operator N = Null NN = Not Null C = Contains NC = Not Contains IN = SQL In Operator NIN = SQL Not In Operator |
| `p_filter_value` | Filter value. This value is not used for N and NN . |
| `p_report_alias` | Identifies the saved report alias within the current application page. To create a filter on a Primary report, p_report_alias must be PRIMARY or leave as NULL. To create a filter on a saved report, p_report_alias must be the name of the saved report. For example, to create a filter on report 1234 , p_report_alias must be 1234 . |

## Returns

This is a procedure and does not return a value.

## Important Notes

- Most APEX APIs assume the correct APEX workspace, application, and session context.
- Validate user-controlled values before passing them into administrative, security, SQL, or web-service APIs.
- Use the source link for exact behavior, defaults, and version-specific caveats.

## Simple Example

```sql
begin
    apex_util.IR_FILTER(
        p_page_id => 1,
        p_report_column => 'EXAMPLE',
        p_operator_abbr => 'EXAMPLE',
        p_filter_value => 'EXAMPLE',
        p_report_alias => 'EXAMPLE'
    );
end;
/
```

