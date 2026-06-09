# APEX_THEME.CLEAR_ALL_USERS_STYLE Procedure

Source: [Oracle APEX 26.1 API Reference](https://docs.oracle.com/en/database/oracle/apex/26.1/aeapi/CLEAR_ALL_USERS_STYLE-Procedure.html)

Status: generated detailed reference. Review edge cases against the source before production use.

Parent package: [APEX_THEME](../APEX_THEME.md)

## Purpose

This procedure clears all theme style user preferences for an application and theme.

## When To Use

Use this page when code needs the `APEX_THEME.CLEAR_ALL_USERS_STYLE` procedure. Confirm security, workspace, and session requirements for your calling context.

## Signature

```sql
APEX_THEME.CLEAR_ALL_USERS_STYLE (
    p_application_id    IN NUMBER   DEFAULT {current application ID},
    p_theme_number      IN NUMBER   DEFAULT {current theme ID} );
```

## Parameters

| Parameter | Description |
| --- | --- |
| `p_application_id` | The application ID. Default is the current application. |
| `p_theme_number` | The theme number to clear all theme style user preferences for. |

## Returns

This is a procedure and does not return a value.

## Important Notes

- Most APEX APIs assume the correct APEX workspace, application, and session context.
- Validate user-controlled values before passing them into administrative, security, SQL, or web-service APIs.
- Use the source link for exact behavior, defaults, and version-specific caveats.

## Simple Example

```sql
begin
    apex_theme.CLEAR_ALL_USERS_STYLE(
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
    apex_theme.CLEAR_ALL_USERS_STYLE(
            p_application_id => 1,
            p_theme_number => 1
        );
end;
/
```

