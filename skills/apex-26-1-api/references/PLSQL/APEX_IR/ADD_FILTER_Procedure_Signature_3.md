# APEX_IR.ADD_FILTER Procedure Signature 3

Source: [Oracle APEX 26.1 API Reference](https://docs.oracle.com/en/database/oracle/apex/26.1/aeapi/ADD_FILTER-Procedure-Signature-3.html)

Status: generated detailed reference. Review edge cases against the source before production use.

Parent package: [APEX_IR](../APEX_IR.md)

## Purpose

This procedure creates a filter on an interactive report using a report Static ID.

## When To Use

Use this page when code needs the `APEX_IR.ADD_FILTER` procedure. Confirm security, workspace, and session requirements for your calling context.

## Signature

```sql
APEX_IR.ADD_FILTER (
    p_page_id            IN   NUMBER,
    p_region_static_id   IN   VARCHAR2,
    p_report_column      IN   VARCHAR2,
    p_filter_value       IN   VARCHAR2,
    p_operator_abbr      IN   VARCHAR2     DEFAULT NULL,
    p_report_static_id   IN   VARCHAR2     DEFAULT NULL );
```

## Parameters

| Parameter | Description |
| --- | --- |
| `p_page_id` | Page of the current Oracle APEX application that contains an interactive report. |
| `p_region_static_id` | The interactive report region Static ID. |
| `p_report_column` | Name of the report SQL column, or column alias, to be filtered. |
| `p_filter_value` | This is the filter value. This value is not used for N and NN . |
| `p_operator_abbr` | Filter type. Valid values are as follows: EQ = Equals NEQ = Not Equals LT = Less than LTE = Less then or equal to GT = Greater Than GTE = Greater than or equal to LIKE = SQL Like operator NLIKE = Not Like N = Null NN = Not Null C = Contains NC = Not Contains IN = SQL In Operator NIN = SQL Not In Operator |
| `p_report_static_id` | The saved report alias within the current application page. If p_report_static_id is NULL, it adds the filter to the last viewed report. |

## Returns

This is a procedure and does not return a value.

## Important Notes

- Most APEX APIs assume the correct APEX workspace, application, and session context.
- Validate user-controlled values before passing them into administrative, security, SQL, or web-service APIs.
- Use the source link for exact behavior, defaults, and version-specific caveats.

## Simple Example

```sql
begin
    apex_ir.ADD_FILTER(
        p_page_id => 1,
        p_region_static_id => 'EXAMPLE_STATIC_ID',
        p_report_column => 'EXAMPLE',
        p_filter_value => 'EXAMPLE',
        p_operator_abbr => 'EXAMPLE',
        p_report_static_id => 'EXAMPLE_STATIC_ID'
    );
end;
/
```

## More Complex Example

```sql
begin
    -- Assuming this runs inside an APEX page process with the right workspace/app context.
    apex_ir.ADD_FILTER(
            p_page_id => 1,
            p_region_static_id => 'EXAMPLE_STATIC_ID',
            p_report_column => 'EXAMPLE',
            p_filter_value => 'EXAMPLE',
            p_operator_abbr => 'EXAMPLE',
            p_report_static_id => 'EXAMPLE_STATIC_ID'
        );
end;
/
```

