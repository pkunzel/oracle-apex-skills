# APEX_UI_DEFAULT_UPDATE.UPD_GROUP Procedure

Source: [Oracle APEX 26.1 API Reference](https://docs.oracle.com/en/database/oracle/apex/26.1/aeapi/UPD_GROUP-Procedure.html)

Status: generated detailed reference. Review edge cases against the source before production use.

Parent package: [APEX_UI_DEFAULT_UPDATE](../APEX_UI_DEFAULT_UPDATE.md)

## Purpose

If the provided table and group exist within the user's schema's table based User Interface Defaults, the group name, description and display sequence of the group are updated. If 'null%' is passed in for p_description or p_display_sequence, the value is set to null.

## When To Use

Use this page when code needs the `APEX_UI_DEFAULT_UPDATE.UPD_GROUP` procedure. Confirm security, workspace, and session requirements for your calling context.

## Signature

```sql
APEX_UI_DEFAULT_UPDATE.UPD_GROUP (
    p_table_name            IN VARCHAR2,
    p_group_name            IN VARCHAR2,
    p_new_group_name        IN VARCHAR2 DEFAULT NULL,
    p_description           IN VARCHAR2 DEFAULT NULL,
    p_display_sequence      IN VARCHAR2 DEFAULT NULL );
```

## Parameters

| Parameter | Description |
| --- | --- |
| `p_table_name` | Name of table whose group is being updated. |
| `p_group_name` | Group being updated. |
| `p_new_group_name` | New name for group, if group is being renamed. |
| `p_description` | Description of group. |
| `p_display_sequence` | Display sequence of group. |

## Returns

This is a procedure and does not return a value.

## Important Notes

- Most APEX APIs assume the correct APEX workspace, application, and session context.
- Validate user-controlled values before passing them into administrative, security, SQL, or web-service APIs.
- Use the source link for exact behavior, defaults, and version-specific caveats.

## Simple Example

```sql
begin
    apex_ui_default_update.UPD_GROUP(
        p_table_name => 'EXAMPLE',
        p_group_name => 'EXAMPLE',
        p_new_group_name => 'EXAMPLE',
        p_description => 'EXAMPLE',
        p_display_sequence => 'EXAMPLE'
    );
end;
/
```

