# APEX_UI_DEFAULT_UPDATE.SYNCH_TABLE Procedure

Source: [Oracle APEX 26.1 API Reference](https://docs.oracle.com/en/database/oracle/apex/26.1/aeapi/SYNCH_TABLE-Procedure.html)

Status: generated detailed reference. Review edge cases against the source before production use.

Parent package: [APEX_UI_DEFAULT_UPDATE](../APEX_UI_DEFAULT_UPDATE.md)

## Purpose

If the Table Based User Interface Defaults for the table do not already exist within the user's schema, they are defaulted. If they do exist, they are synchronized, meaning, the columns in the table is matched against the column in the UI Defaults Table Definitions. Additions and deletions are used to make them match.

## When To Use

Use this page when code needs the `APEX_UI_DEFAULT_UPDATE.SYNCH_TABLE` procedure. Confirm security, workspace, and session requirements for your calling context.

## Signature

```sql
APEX_UI_DEFAULT_UPDATE.SYNCH_TABLE (
    p_table_name            IN VARCHAR2 );
```

## Parameters

| Parameter | Description |
| --- | --- |
| `p_table_name` | Table name. |

## Returns

This is a procedure and does not return a value.

## Important Notes

- Most APEX APIs assume the correct APEX workspace, application, and session context.
- Validate user-controlled values before passing them into administrative, security, SQL, or web-service APIs.
- Use the source link for exact behavior, defaults, and version-specific caveats.

## Simple Example

```sql
begin
    apex_ui_default_update.SYNCH_TABLE(
        p_table_name => 'EXAMPLE'
    );
end;
/
```

