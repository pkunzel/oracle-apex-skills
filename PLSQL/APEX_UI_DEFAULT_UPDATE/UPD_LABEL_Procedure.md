# APEX_UI_DEFAULT_UPDATE.UPD_LABEL Procedure

Source: [Oracle APEX 26.1 API Reference](https://docs.oracle.com/en/database/oracle/apex/26.1/aeapi/UPD_LABEL-Procedure.html)

Status: generated detailed reference. Review edge cases against the source before production use.

Parent package: [APEX_UI_DEFAULT_UPDATE](../APEX_UI_DEFAULT_UPDATE.md)

## Purpose

The UPD_LABEL procedure sets the label used for items. This user interface default is used when you create a form or report based on the specified table and include a specific column.

## When To Use

Use this page when code needs the `APEX_UI_DEFAULT_UPDATE.UPD_LABEL` procedure. Confirm security, workspace, and session requirements for your calling context.

## Signature

```sql
APEX_UI_DEFAULT_UPDATE.UPD_LABEL (
    p_table_name            IN VARCHAR2,
    p_column_name           IN VARCHAR2,
    p_label                 IN VARCHAR2 DEFAULT NULL );
```

## Parameters

| Parameter | Description |
| --- | --- |
| `p_table_name` | Table name. |
| `p_column_name` | Column name. |
| `p_label` | Desired item label. |

## Returns

This is a procedure and does not return a value.

## Important Notes

- Most APEX APIs assume the correct APEX workspace, application, and session context.
- Validate user-controlled values before passing them into administrative, security, SQL, or web-service APIs.
- Use the source link for exact behavior, defaults, and version-specific caveats.

## Simple Example

```sql
begin
    apex_ui_default_update.UPD_LABEL(
        p_table_name => 'EXAMPLE',
        p_column_name => 'EXAMPLE',
        p_label => 'EXAMPLE'
    );
end;
/
```

## More Complex Example

```sql
begin
    -- Assuming this runs inside an APEX page process with the right workspace/app context.
    apex_ui_default_update.UPD_LABEL(
            p_table_name => 'EXAMPLE',
            p_column_name => 'EXAMPLE',
            p_label => 'EXAMPLE'
        );
end;
/
```

