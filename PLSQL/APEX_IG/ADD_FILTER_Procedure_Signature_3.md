# APEX_IG.ADD_FILTER Procedure Signature 3

Source: [Oracle APEX 26.1 API Reference](https://docs.oracle.com/en/database/oracle/apex/26.1/aeapi/APEX_IG-ADD_FILTER-Procedure-Signature-3.html)

Status: generated detailed reference. Review edge cases against the source before production use.

Parent package: [APEX_IG](../APEX_IG.md)

## Purpose

This procedure creates a filter on an interactive grid using a report Static ID.

## When To Use

Use this page when code needs the `APEX_IG.ADD_FILTER` procedure. Confirm security, workspace, and session requirements for your calling context.

## Signature

```sql
APEX_IG.ADD_FILTER (
    p_page_id                IN   NUMBER,
    p_region_static_id       IN   VARCHAR2,
    p_filter_value           IN   VARCHAR2,
    p_column_name            IN   VARCHAR2     DEFAULT NULL,
    p_operator_abbr          IN   VARCHAR2     DEFAULT NULL,
    p_is_case_sensitive      IN   BOOLEAN      DEFAULT FALSE,
    p_report_static_id       IN   VARCHAR2     DEFAULT NULL,
    p_multi_value_separator  IN   VARCHAR2     DEFAULT NULL );
```

## Parameters

| Parameter | Description |
| --- | --- |
| `p_page_id` | Page of the current Oracle APEX application that contains an interactive grid. |
| `p_region_static_id` | The interactive grid region Static ID. |
| `p_filter_value` | This is the filter value. This value is not used for N and NN . |
| `p_column_name` | Name of the report SQL column, or column alias, to be filtered. When not set, a row filter is defined. |
| `p_operator_abbr` | The filter type to use for the column filter. Valid values are: EQ = Equals NEQ = Not Equals GT = Greater Than GTE = Greater than or equal to LT = Less than LTE = Less than or equal to N = Null NN = Not Null C = Contains NC = Not Contains IN = SQL In Operator NIN = SQL Not In Operator |
| `p_is_case_sensitive` | Case sensitivity of the row search filter. This value is not used for a column filter, where p_report_column is set. Valid values are as follows: TRUE FALSE (This is the default value.) |
| `p_report_static_id` | The saved static ID within the current application page. If p_report_static_id is NULL, it adds the filter to the last viewed report settings. |
| `p_multi_value_separator` | Separator for multi-value filters ( IN / NIN operators). |

## Returns

This is a procedure and does not return a value.

## Important Notes

- Most APEX APIs assume the correct APEX workspace, application, and session context.
- Validate user-controlled values before passing them into administrative, security, SQL, or web-service APIs.
- Use the source link for exact behavior, defaults, and version-specific caveats.

## Simple Example

```sql
begin
    apex_ig.ADD_FILTER(
        p_page_id => 1,
        p_region_static_id => 'EXAMPLE_STATIC_ID',
        p_filter_value => 'EXAMPLE',
        p_column_name => 'EXAMPLE',
        p_operator_abbr => 'EXAMPLE',
        p_is_case_sensitive => true,
        p_report_static_id => 'EXAMPLE_STATIC_ID',
        p_multi_value_separator => 'EXAMPLE'
    );
end;
/
```

## More Complex Example

```sql
begin
    -- Assuming this runs inside an APEX page process with the right workspace/app context.
    apex_ig.ADD_FILTER(
            p_page_id => 1,
            p_region_static_id => 'EXAMPLE_STATIC_ID',
            p_filter_value => 'EXAMPLE',
            p_column_name => 'EXAMPLE',
            p_operator_abbr => 'EXAMPLE',
            p_is_case_sensitive => true,
            p_report_static_id => 'EXAMPLE_STATIC_ID',
            p_multi_value_separator => 'EXAMPLE'
        );
end;
/
```

