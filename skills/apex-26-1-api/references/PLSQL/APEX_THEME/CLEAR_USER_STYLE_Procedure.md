# APEX_THEME.CLEAR_USER_STYLE Procedure

Source: [Oracle APEX 26.1 API Reference](https://docs.oracle.com/en/database/oracle/apex/26.1/aeapi/CLEAR_USER_STYLE-Procedure.html)

Status: generated detailed reference. Review edge cases against the source before production use.

Parent package: [APEX_THEME](../APEX_THEME.md)

## Purpose

This procedure clears the theme style user preference for user and application.

## When To Use

Use this page when code needs the `APEX_THEME.CLEAR_USER_STYLE` procedure. Confirm security, workspace, and session requirements for your calling context.

## Signature

```sql
APEX_THEME.CLEAR_USER_STYLE (
    p_application_id IN NUMBER   DEFAULT {current application id},
    p_user           IN VARCHAR2 DEFAULT {current user},   
    p_theme_number   IN NUMBER   DEFAULT {current theme number} );
```

## Parameters

| Parameter | Description |
| --- | --- |
| `p_application_id` | The application ID. Default is the current application. |
| `p_user` | Username to set the user style preference for. |
| `p_theme_number` | The theme number to clear the theme style user preference. |

## Returns

This is a procedure and does not return a value.

## Important Notes

- Most APEX APIs assume the correct APEX workspace, application, and session context.
- Validate user-controlled values before passing them into administrative, security, SQL, or web-service APIs.
- Use the source link for exact behavior, defaults, and version-specific caveats.

## Simple Example

Clear the current user's persisted style preference so the app default applies again.

```sql
begin
    apex_theme.clear_user_style(
        p_application_id => :APP_ID,
        p_user           => :APP_USER,
        p_theme_number   => 42);
end;
/
```

