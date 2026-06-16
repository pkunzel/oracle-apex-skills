# APEX_UTIL.SHOW_HIGH_CONTRAST_MODE_TOGGLE Procedure

Source: [Oracle APEX 26.1 API Reference](https://docs.oracle.com/en/database/oracle/apex/26.1/aeapi/SHOW_HIGH_CONTRAST_MODE_TOGGLE-Procedure.html)

Status: generated detailed reference. Review edge cases against the source before production use.

Parent package: [APEX_UTIL](../APEX_UTIL.md)

## Purpose

This procedure displays a link to the current page to turn on or off, toggle, the mode. For example, if you are in standard mode, this procedure returns a link that when clicked switches the high contrast mode on.

## When To Use

Use this page when code needs the `APEX_UTIL.SHOW_HIGH_CONTRAST_MODE_TOGGLE` procedure. Confirm security, workspace, and session requirements for your calling context.

## Signature

```sql
APEX_UTIL.SHOW_HIGH_CONTRAST_MODE_TOGGLE (
    p_on_message  IN VARCHAR2 DEFAULT NULL,
    p_off_message IN VARCHAR2 DEFAULT NULL )
```

## Parameters

| Parameter | Description |
| --- | --- |
| `p_on_message` | Optional text used for the link to switch to high contrast mode when you are in standard mode. If this parameter is not passed, the default "Set High Contrast Mode On" text displays. |
| `p_off_message` | Optional text used for the link to switch to standard mode when you are in high contrast mode. If this parameter is not passed, the default "Set High Contrast Mode Off" text displays. |

## Returns

This is a procedure and does not return a value.

## Important Notes

- Most APEX APIs assume the correct APEX workspace, application, and session context.
- Validate user-controlled values before passing them into administrative, security, SQL, or web-service APIs.
- Use the source link for exact behavior, defaults, and version-specific caveats.

## Simple Example

Print the high contrast toggle directly to the response.

```sql
begin
    apex_util.show_high_contrast_mode_toggle(
        p_on_message  => 'Enable high contrast mode',
        p_off_message => 'Disable high contrast mode');
end;
/
```

