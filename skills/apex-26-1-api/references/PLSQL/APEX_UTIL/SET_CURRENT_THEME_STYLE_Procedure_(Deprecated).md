# APEX_UTIL.SET_CURRENT_THEME_STYLE Procedure (Deprecated)

Source: [Oracle APEX 26.1 API Reference](https://docs.oracle.com/en/database/oracle/apex/26.1/aeapi/SET_CURRENT_THEME_STYLE-Procedure.html)

Status: generated detailed reference. Review edge cases against the source before production use.

Parent package: [APEX_UTIL](../APEX_UTIL.md)

## Purpose

Note:

## When To Use

Use this page when code needs the `APEX_UTIL.SET_CURRENT_THEME_STYLE` procedure. Confirm security, workspace, and session requirements for your calling context.

## Deprecation

This member is marked deprecated in the APEX 26.1 documentation. Prefer the documented replacement when available.

## Signature

```sql
APEX_UTIL.SET_CURRENT_THEME_STYLE(
    p_theme_number   IN NUMBER,
    p_theme_style_id IN NUMBER );
```

## Parameters

| Parameter | Description |
| --- | --- |
| `p_theme_number` | The current theme number of the application. This can be retrieved from APEX_APPLICATION_THEMES view. |
| `p_theme_style_id` | The numeric ID of theme style. You can get available theme styles for an application from APEX_APPLICATION_THEME_STYLES view. |

## Returns

This is a procedure and does not return a value.

## Important Notes

- Most APEX APIs assume the correct APEX workspace, application, and session context.
- Validate user-controlled values before passing them into administrative, security, SQL, or web-service APIs.
- Use the source link for exact behavior, defaults, and version-specific caveats.

## Simple Example

Legacy only. Prefer APEX_THEME.SET_USER_STYLE for current theme style changes.

```sql
begin
    apex_util.set_current_theme_style(
        p_theme_number   => 42,
        p_theme_style_id => 123456789);
end;
/
```

