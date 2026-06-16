# APEX_UI_DEFAULT_UPDATE.DEL_AD_COLUMN Procedure

Source: [Oracle APEX 26.1 API Reference](https://docs.oracle.com/en/database/oracle/apex/26.1/aeapi/DEL_AD_COLUMN-Procedure.html)

Status: generated detailed reference. Review edge cases against the source before production use.

Parent package: [APEX_UI_DEFAULT_UPDATE](../APEX_UI_DEFAULT_UPDATE.md)

## Purpose

If the column name is found within the User Interface Default Attribute Dictionary, the column, along with any associated synonyms, is deleted.

## When To Use

Use this page when code needs the `APEX_UI_DEFAULT_UPDATE.DEL_AD_COLUMN` procedure. Confirm security, workspace, and session requirements for your calling context.

## Signature

```sql
APEX_UI_DEFAULT_UPDATE.DEL_AD_COLUMN (
    p_column_name           IN VARCHAR2 );
```

## Parameters

| Parameter | Description |
| --- | --- |
| `p_column_name` | Name of column to be deleted |

## Returns

This is a procedure and does not return a value.

## Important Notes

- Most APEX APIs assume the correct APEX workspace, application, and session context.
- Validate user-controlled values before passing them into administrative, security, SQL, or web-service APIs.
- Use the source link for exact behavior, defaults, and version-specific caveats.

## Simple Example

Remove a UI Default entry from the owning schema after confirming generated pages no longer rely on it.

```sql
begin
    apex_ui_default_update.del_ad_column(
        p_column_name => 'CREATED_BY'
    );
end;
/
```

