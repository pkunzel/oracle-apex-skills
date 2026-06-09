# APEX_EXTENSION.REMOVE_MENU_ENTRY Procedure

Source: [Oracle APEX 26.1 API Reference](https://docs.oracle.com/en/database/oracle/apex/26.1/aeapi/APEX_EXTENSION.REMOVE_MENU_ENTRY-Procedure.html)

Status: generated detailed reference. Review edge cases against the source before production use.

Parent package: [APEX_EXTENSION](../APEX_EXTENSION.md)

## Purpose

This procedure removes an existing builder extension menu link entry. Requires the APEX_ADMINISTRATOR_ROLE.

## When To Use

Use this page when code needs the `APEX_EXTENSION.REMOVE_MENU_ENTRY` procedure. Confirm security, workspace, and session requirements for your calling context.

## Signature

```sql
APEX_EXTENSION.REMOVE_MENU_ENTRY (
    p_label       IN VARCHAR2,
    p_workspace   IN VARCHAR2  DEFAULT NULL )
```

## Parameters

| Parameter | Description |
| --- | --- |
| `p_label` | Menu entry label. |
| `p_workspace` | Default NULL, which means the menu entry is from the current workspace. Value can be set to any existing workspace name. |

## Returns

This is a procedure and does not return a value.

## Important Notes

- Most APEX APIs assume the correct APEX workspace, application, and session context.
- Validate user-controlled values before passing them into administrative, security, SQL, or web-service APIs.
- Use the source link for exact behavior, defaults, and version-specific caveats.

## Simple Example

```sql
begin
    apex_extension.REMOVE_MENU_ENTRY(
        p_label => 'EXAMPLE',
        p_workspace => 'EXAMPLE'
    );
end;
/
```

