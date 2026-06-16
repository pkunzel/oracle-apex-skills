# APEX_THEME.SET_CURRENT_STYLE Procedure

Source: [Oracle APEX 26.1 API Reference](https://docs.oracle.com/en/database/oracle/apex/26.1/aeapi/SET_CURRENT_STYLE-Procedure.html)

Status: generated detailed reference. Review edge cases against the source before production use.

Parent package: [APEX_THEME](../APEX_THEME.md)

## Purpose

This procedure sets current theme style for the current application.

## When To Use

Use this page when code needs the `APEX_THEME.SET_CURRENT_STYLE` procedure. Confirm security, workspace, and session requirements for your calling context.

## Signature

```sql
APEX_THEME.SET_CURRENT_STYLE (
    p_application_id IN NUMBER DEFAULT {current application ID},
    p_theme_number   IN NUMBER,
    p_id             IN VARCHAR2 );
```

## Parameters

| Parameter | Description |
| --- | --- |
| `p_application_id` | The application ID. Default current application. |
| `p_theme_number` | The theme number for which to set the default style. |
| `p_id` | The ID of the theme style to set as a user preference. |

## Returns

This is a procedure and does not return a value.

## Important Notes

- Most APEX APIs assume the correct APEX workspace, application, and session context.
- Validate user-controlled values before passing them into administrative, security, SQL, or web-service APIs.
- Use the source link for exact behavior, defaults, and version-specific caveats.

## Simple Example

Set the application default style after selecting a valid style ID from APEX metadata.

```sql
begin
    apex_theme.set_current_style(
        p_application_id => :APP_ID,
        p_theme_number   => 42,
        p_id             => to_char(:P20_STYLE_ID));
end;
/
```

