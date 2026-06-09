# APEX_THEME.SET_USER_STYLE Procedure

Source: [Oracle APEX 26.1 API Reference](https://docs.oracle.com/en/database/oracle/apex/26.1/aeapi/SET_USER_STYLE-Procedure.html)

Status: generated detailed reference. Review edge cases against the source before production use.

Parent package: [APEX_THEME](../APEX_THEME.md)

## Purpose

This procedure sets a theme style user preference for the current user and application. Theme Style User Preferences are automatically picked up and precede any style set with SET_SESSION_STYLE .

## When To Use

Use this page when code needs the `APEX_THEME.SET_USER_STYLE` procedure. Confirm security, workspace, and session requirements for your calling context.

## Signature

```sql
APEX_THEME.SET_USER_STYLE (
    p_application_id  IN NUMBER           DEFAULT {current application ID},
    p_user            IN VARCHAR2         DEFAULT {current user},
    p_theme_number    IN NUMBER           DEFAULT {current theme number},
    p_id              IN NUMBER );
```

## Parameters

| Parameter | Description |
| --- | --- |
| `p_application_id` | The application ID. Default is the current application. |
| `p_user` | The user name to the user style preference. |
| `p_theme_number` | The theme number to set the user style. Default is the current theme of the application. |
| `p_id` | The ID of the theme style to set as a user preference. |

## Returns

This is a procedure and does not return a value.

## Important Notes

- Most APEX APIs assume the correct APEX workspace, application, and session context.
- Validate user-controlled values before passing them into administrative, security, SQL, or web-service APIs.
- Use the source link for exact behavior, defaults, and version-specific caveats.

## Simple Example

```sql
begin
    apex_theme.SET_USER_STYLE(
        p_application_id => 1,
        p_user => 'USER',
        p_theme_number => 1,
        p_id => 1
    );
end;
/
```

## More Complex Example

```sql
begin
    -- Assuming this runs inside an APEX page process with the right workspace/app context.
    apex_theme.SET_USER_STYLE(
            p_application_id => 1,
            p_user => 'USER',
            p_theme_number => 1,
            p_id => 1
        );
end;
/
```

