# APEX_UTIL.HTML_PCT_GRAPH_MASK Function

Source: [Oracle APEX 26.1 API Reference](https://docs.oracle.com/en/database/oracle/apex/26.1/aeapi/HTML_PCT_GRAPH_MASK-Function.html)

Status: generated detailed reference. Review edge cases against the source before production use.

Parent package: [APEX_UTIL](../APEX_UTIL.md)

## Purpose

Use this function to scale a graph. This function can also be used by classic and interactive reports with format mask of GRAPH. This generates a tag with inline styles.

## When To Use

Use this page when code needs the `APEX_UTIL.HTML_PCT_GRAPH_MASK` function. Confirm security, workspace, and session requirements for your calling context.

## Signature

```sql
APEX_UTIL.HTML_PCT_GRAPH_MASK (
    p_number          IN NUMBER    DEFAULT NULL,
    p_size            IN NUMBER    DEFAULT 100,
    p_background      IN VARCHAR2  DEFAULT NULL,
    p_bar_background  IN VARCHAR2  DEFAULT NULL,
    p_format          IN VARCHAR2  DEFAULT NULL,
    p_aria_labelledby IN VARCHAR2  DEFAULT NULL,
    p_aria_label      IN VARCHAR2  DEFAULT NULL )
RETURN VARCHAR2;
```

## Parameters

| Parameter | Description |
| --- | --- |
| `p_number` | Number between 0 and 100. |
| `p_size` | Width of graph in pixels. |
| `p_background` | Six character hexadecimal background color of chart bar (not bar color). |
| `p_bar_background` | Six character hexadecimal background color of chart bar (bar color). |
| `p_format` | If this parameter is supplied, p_size , p_background and p_bar_background are ignored. This parameter uses the following format: PCT_GRAPH : BACKGROUND >: FOREGROUND >: CHART_WIDTH > position 1: PCT_GRAPH format mask indicator position 2: Background color in hexadecimal, 6 characters (optional) position 3: Foreground "bar" color in hexadecimal, 6 characters (optional) position 4: Chart width in pixels. Numeric and defaults to 100. p_number is automatically scaled so that 50 is half of chart_width (optional). |
| `p_aria_labelledby` | Space-separated list of one or more ID values referencing the elements that label the percent graph. |
| `p_aria_label` | Value that labels the percent graph. |

## Important Notes

- Most APEX APIs assume the correct APEX workspace, application, and session context.
- Validate user-controlled values before passing them into administrative, security, SQL, or web-service APIs.
- Use the source link for exact behavior, defaults, and version-specific caveats.

## Simple Example

Generate the legacy HTML percentage bar with accessible labeling.

```sql
declare
    l_graph_html varchar2(4000);
begin
    l_graph_html := apex_util.html_pct_graph_mask(
        p_number         => 72,
        p_size           => 180,
        p_background     => '#f3f4f6',
        p_bar_background => '#2563eb',
        p_format         => 'PCT_GRAPH',
        p_aria_label     => 'Project completion: 72 percent');

    htp.p(l_graph_html);
end;
/
```
