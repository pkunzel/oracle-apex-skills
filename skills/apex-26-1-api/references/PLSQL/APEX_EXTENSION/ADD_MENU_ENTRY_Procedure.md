# APEX_EXTENSION.ADD_MENU_ENTRY Procedure

Source: [Oracle APEX 26.1 API Reference](https://docs.oracle.com/en/database/oracle/apex/26.1/aeapi/APEX_EXTENSION.ADD_MENU_ENTRY-Procedure.html)

Status: generated detailed reference. Review edge cases against the source before production use.

Parent package: [APEX_EXTENSION](../APEX_EXTENSION.md)

## Purpose

This procedure adds a builder extension menu link. Requires the APEX_ADMINISTRATOR_ROLE.

## When To Use

Use this page when code needs the `APEX_EXTENSION.ADD_MENU_ENTRY` procedure. Confirm security, workspace, and session requirements for your calling context.

## Signature

```sql
APEX_EXTENSION.ADD_MENU_ENTRY (
    p_label            IN VARCHAR2,
    p_url              IN VARCHAR2,
    p_display_sequence IN NUMBER    DEFAULT NULL,
    p_description      IN VARCHAR2  DEFAULT NULL,
    p_is_public        IN BOOLEAN   DEFAULT FALSE,
    p_tab_identifier   IN VARCHAR2  DEFAULT NULL,
    p_workspace        IN VARCHAR2  DEFAULT NULL )
```

## Parameters

| Parameter | Description |
| --- | --- |
| `p_label` | Menu entry label. Must be unique within a workspace. |
| `p_url` | The menu entry's URL. |
| `p_display_sequence` | (Optional) Display sequence for sorting menu entry. Default NULL: the value is calculated and the entry is appended as last. |
| `p_description` | (Optional) Description. |
| `p_is_public` | Default FALSE . If TRUE , the entry is available for subscribing workspaces. The value TRUE can only be set for extension workspaces. If the given workspace is not enabled for hosting extensions, the flag is set to FALSE . |
| `p_tab_identifier` | Used to name the target browser tab the link is opened in. If the tab doesn't exist yet, it is opened on clicking the link. If it does exist already, the tab is reused to open the link clicked. Multiple extension menu entries can have the same tab identifier, which lets all those links open in the same tab. If left empty, a unique tab name is generated to ensure the link opens in the same tab again. |
| `p_workspace` | Default NULL, which means the menu entry is created for the current workspace. Value can be set to any existing workspace name. |

## Returns

This is a procedure and does not return a value.

## Important Notes

- Most APEX APIs assume the correct APEX workspace, application, and session context.
- Validate user-controlled values before passing them into administrative, security, SQL, or web-service APIs.
- Use the source link for exact behavior, defaults, and version-specific caveats.

## Simple Example

```sql
begin
    apex_extension.ADD_MENU_ENTRY(
        p_label => 'EXAMPLE',
        p_url => 'EXAMPLE',
        p_display_sequence => 1,
        p_description => 'EXAMPLE',
        p_is_public => true,
        p_tab_identifier => 'EXAMPLE',
        p_workspace => 'EXAMPLE'
    );
end;
/
```

## More Complex Example

```sql
begin
    -- Assuming this runs inside an APEX page process with the right workspace/app context.
    apex_extension.ADD_MENU_ENTRY(
            p_label => 'EXAMPLE',
            p_url => 'EXAMPLE',
            p_display_sequence => 1,
            p_description => 'EXAMPLE',
            p_is_public => true,
            p_tab_identifier => 'EXAMPLE',
            p_workspace => 'EXAMPLE'
        );
end;
/
```

