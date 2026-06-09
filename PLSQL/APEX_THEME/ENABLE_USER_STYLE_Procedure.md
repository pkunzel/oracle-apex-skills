# APEX_THEME.ENABLE_USER_STYLE Procedure

Source: [Oracle APEX 26.1 API Reference](https://docs.oracle.com/en/database/oracle/apex/26.1/aeapi/ENABLE_USER_STYLE-Procedure.html)

Status: generated detailed reference. Review edge cases against the source before production use.

Parent package: [APEX_THEME](../APEX_THEME.md)

## Purpose

This procedure enables theme style selection by end users. When enabled and there is at least one theme style marked as Public , end users will see a Customize link which allows to choose the theme style. End user theme style selection is enabled or disabled at the User Interface level. When providing a theme number, the theme must be the Current Theme for a user interface. Note that this only affects the Customization link for end users. APEX_THEME API calls are independent.

## When To Use

Use this page when code needs the `APEX_THEME.ENABLE_USER_STYLE` procedure. Confirm security, workspace, and session requirements for your calling context.

## Signature

```sql
APEX_THEME.ENABLE_USER_STYLE (
    p_application_id  IN NUMBER DEFAULT {current application id},
    p_theme_number    IN NUMBER DEFAULT {current theme number} );
```

## Parameters

| Parameter | Description |
| --- | --- |
| `p_application_id` | The application ID. Default is the current application. |
| `p_theme_number` | Number of User Interface's Current Theme . |

## Returns

This is a procedure and does not return a value.

## Important Notes

- Most APEX APIs assume the correct APEX workspace, application, and session context.
- Validate user-controlled values before passing them into administrative, security, SQL, or web-service APIs.
- Use the source link for exact behavior, defaults, and version-specific caveats.

## Simple Example

```sql
begin
    apex_theme.ENABLE_USER_STYLE(
        p_application_id => 1,
        p_theme_number => 1
    );
end;
/
```

## More Complex Example

```sql
begin
    -- Assuming this runs inside an APEX page process with the right workspace/app context.
    apex_theme.ENABLE_USER_STYLE(
            p_application_id => 1,
            p_theme_number => 1
        );
end;
/
```

