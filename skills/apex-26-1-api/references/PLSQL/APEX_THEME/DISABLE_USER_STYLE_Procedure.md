# APEX_THEME.DISABLE_USER_STYLE Procedure

Source: [Oracle APEX 26.1 API Reference](https://docs.oracle.com/en/database/oracle/apex/26.1/aeapi/DISABLE_USER_STYLE-Procedure.html)

Status: generated detailed reference. Review edge cases against the source before production use.

Parent package: [APEX_THEME](../APEX_THEME.md)

## Purpose

This procedure disables theme style selection by end users. End users will not be able to customize the theme style on their own. Note that this only affects the Customization link for end users. APEX_THEME API calls are independent.

## When To Use

Use this page when code needs the `APEX_THEME.DISABLE_USER_STYLE` procedure. Confirm security, workspace, and session requirements for your calling context.

## Signature

```sql
APEX_THEME.DISABLE_USER_STYLE (
    p_application_id  IN NUMBER           DEFAULT {current application id}, 
    p_theme_number    IN NUMBER           DEFAULT {current theme number} 
);
```

## Parameters

| Parameter | Description |
| --- | --- |
| `p_application_id` | The application ID. Default is the current application. |
| `p_theme_number` | Number of user interface's Current Theme . |

## Returns

This is a procedure and does not return a value.

## Important Notes

- Most APEX APIs assume the correct APEX workspace, application, and session context.
- Validate user-controlled values before passing them into administrative, security, SQL, or web-service APIs.
- Use the source link for exact behavior, defaults, and version-specific caveats.

## Simple Example

Temporarily disable use of saved user theme-style preferences.

```sql
begin
    apex_theme.disable_user_style(
        p_application_id => :APP_ID,
        p_theme_number   => 42);
end;
/
```

