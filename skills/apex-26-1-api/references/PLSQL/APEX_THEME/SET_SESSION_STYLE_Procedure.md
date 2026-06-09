# APEX_THEME.SET_SESSION_STYLE Procedure

Source: [Oracle APEX 26.1 API Reference](https://docs.oracle.com/en/database/oracle/apex/26.1/aeapi/SET_SESSION_STYLE-Procedure.html)

Status: generated detailed reference. Review edge cases against the source before production use.

Parent package: [APEX_THEME](../APEX_THEME.md)

## Purpose

Note:

## When To Use

Use this page when code needs the `APEX_THEME.SET_SESSION_STYLE` procedure. Confirm security, workspace, and session requirements for your calling context.

## Signature

```sql
APEX_THEME.SET_SESSION_STYLE (
    p_application_id  IN apex_application.g_flow_id,
    p_theme_number    IN apex_themes.theme_id,
    p_name            IN VARCHAR2 );
```

## Parameters

| Parameter | Description |
| --- | --- |
| `p_application_id` | The application ID. Default is the current application. |
| `p_theme_number` | The theme number to set the session style for. Default is the current theme of the application. |
| `p_name` | The theme style Static ID to be used in the session. |

## Returns

This is a procedure and does not return a value.

## Important Notes

- Most APEX APIs assume the correct APEX workspace, application, and session context.
- Validate user-controlled values before passing them into administrative, security, SQL, or web-service APIs.
- Use the source link for exact behavior, defaults, and version-specific caveats.

## Simple Example

```sql
begin
    apex_theme.SET_SESSION_STYLE(
        p_application_id => 1,
        p_theme_number => null,
        p_name => 'EXAMPLE'
    );
end;
/
```

