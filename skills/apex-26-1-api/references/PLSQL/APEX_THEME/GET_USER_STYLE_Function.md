# APEX_THEME.GET_USER_STYLE Function

Source: [Oracle APEX 26.1 API Reference](https://docs.oracle.com/en/database/oracle/apex/26.1/aeapi/GET_USER_STYLE-Function.html)

Status: generated detailed reference. Review edge cases against the source before production use.

Parent package: [APEX_THEME](../APEX_THEME.md)

## Purpose

This function returns the theme style user preference for the user and application. If no user preference is present, it returns NULL.

## When To Use

Use this page when code needs the `APEX_THEME.GET_USER_STYLE` function. Confirm security, workspace, and session requirements for your calling context.

## Signature

```sql
APEX_THEME.GET_USER_STYLE (
  p_application_id  IN NUMBER   DEFAULT {current application id},
  p_user            IN VARCHAR2 DEFAULT {current user},
  p_theme_number    IN NUMBER   DEFAULT {current theme number} )
RETURN NUMBER;
```

## Parameters

| Parameter | Description |
| --- | --- |
| `p_application_id` | The application ID. Default is the current application. |
| `p_user` | The user name to the user style preference. |
| `p_theme_number` | The theme number to set the session style. |

## Returns

The theme style ID which is set as a user preference.

## Important Notes

- Most APEX APIs assume the correct APEX workspace, application, and session context.
- Validate user-controlled values before passing them into administrative, security, SQL, or web-service APIs.
- Use the source link for exact behavior, defaults, and version-specific caveats.

## Simple Example

```sql
declare
    l_result NUMBER;
begin
    l_result := apex_theme.GET_USER_STYLE(
        p_application_id => 1,
        p_user => 'USER',
        p_theme_number => 1
    );
    sys.dbms_output.put_line('Result captured.');
end;
/
```

