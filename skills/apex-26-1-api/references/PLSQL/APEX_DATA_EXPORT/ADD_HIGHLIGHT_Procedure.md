# APEX_DATA_EXPORT.ADD_HIGHLIGHT Procedure

Source: [Oracle APEX 26.1 API Reference](https://docs.oracle.com/en/database/oracle/apex/26.1/aeapi/APEX_DATA_EXPORT-ADD_HIGHLIGHT-Procedure.html)

Status: generated detailed reference. Review edge cases against the source before production use.

Parent package: [APEX_DATA_EXPORT](../APEX_DATA_EXPORT.md)

## Purpose

This procedure adds a highlight to the highlight collection. Highlight collections can be passed to the EXPORT calls in order to highlight a row or a column in a row. If no highlight collection (or an empty highlight collection) is passed, no highlights render in the export.

## When To Use

Use this page when code needs the `APEX_DATA_EXPORT.ADD_HIGHLIGHT` procedure. Confirm security, workspace, and session requirements for your calling context.

## Signature

```sql
PROCEDURE ADD_HIGHLIGHT (
  p_highlights        IN OUT NOCOPY t_highlights,
  p_id                IN            pls_integer,
  p_value_column      IN            apex_exec.t_column_name,
  p_display_column    IN            apex_exec.t_column_name DEFAULT NULL,
  p_text_color        IN            t_color                 DEFAULT NULL,
  p_background_color  IN            t_color                 DEFAULT NULL );
```

## Parameters

| Parameter | Description |
| --- | --- |
| `p_highlights` | Highlight collection. |
| `p_id` | ID of the highlight. |
| `p_value_column` | Name of the column where to check for the highlight ID. |
| `p_display_column` | Name of the column where to display the highlight. Leave empty for row highlights. |
| `p_text_color` | Hex color code of the text (#FF0000). |
| `p_background_color` | Hex color code of the background (#FF0000). |

## Returns

This is a procedure and does not return a value.

## Important Notes

- Most APEX APIs assume the correct APEX workspace, application, and session context.
- Validate user-controlled values before passing them into administrative, security, SQL, or web-service APIs.
- Use the source link for exact behavior, defaults, and version-specific caveats.

## Simple Example

```sql
begin
    apex_data_export.ADD_HIGHLIGHT(
        p_highlights => null,
        p_id => 1,
        p_value_column => null,
        p_display_column => null,
        p_text_color => to_clob('Example text'),
        p_background_color => null
    );
end;
/
```

## More Complex Example

```sql
begin
    -- Assuming this runs inside an APEX page process with the right workspace/app context.
    apex_data_export.ADD_HIGHLIGHT(
            p_highlights => null,
            p_id => 1,
            p_value_column => null,
            p_display_column => null,
            p_text_color => to_clob('Example text'),
            p_background_color => null
        );
end;
/
```

