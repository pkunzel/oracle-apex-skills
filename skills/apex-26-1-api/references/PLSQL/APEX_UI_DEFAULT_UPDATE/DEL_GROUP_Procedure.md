# APEX_UI_DEFAULT_UPDATE.DEL_GROUP Procedure

Source: [Oracle APEX 26.1 API Reference](https://docs.oracle.com/en/database/oracle/apex/26.1/aeapi/DEL_GROUP-Procedure.html)

Status: generated detailed reference. Review edge cases against the source before production use.

Parent package: [APEX_UI_DEFAULT_UPDATE](../APEX_UI_DEFAULT_UPDATE.md)

## Purpose

If the provided table and group exists within the user's schema's table based User Interface Defaults, the UI Defaults for it are deleted and any column within the table that references that group has the group_id set to null.

## When To Use

Use this page when code needs the `APEX_UI_DEFAULT_UPDATE.DEL_GROUP` procedure. Confirm security, workspace, and session requirements for your calling context.

## Signature

```sql
APEX_UI_DEFAULT_UPDATE.DEL_GROUP (
    p_table_name            IN VARCHAR2,
    p_group_name            IN VARCHAR2 );
```

## Parameters

| Parameter | Description |
| --- | --- |
| `p_table_name` | Name of table whose group UI Defaults are to be deleted. |
| `p_group_name` | Name of group whose UI Defaults are to be deleted. |

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
    apex_ui_default_update.del_group(
        p_table_name => 'DEMO_ORDERS',
        p_group_name => 'Audit'
    );
end;
/
```

