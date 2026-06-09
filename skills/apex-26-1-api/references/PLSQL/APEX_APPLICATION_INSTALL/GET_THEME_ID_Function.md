# APEX_APPLICATION_INSTALL.GET_THEME_ID Function

Source: [Oracle APEX 26.1 API Reference](https://docs.oracle.com/en/database/oracle/apex/26.1/aeapi/GET_THEME_ID-Function.html)

Status: generated detailed reference. Review edge cases against the source before production use.

Parent package: [APEX_APPLICATION_INSTALL](../APEX_APPLICATION_INSTALL.md)

## Purpose

This function retrieves the Theme ID value that overrides the default.

## When To Use

Use this page when code needs the `APEX_APPLICATION_INSTALL.GET_THEME_ID` function. Confirm security, workspace, and session requirements for your calling context.

## Signature

```sql
APEX_APPLICATION_INSTALL.GET_THEME_ID
    RETURN NUMBER
```

## Returns

This function returns the Theme ID value.

## Important Notes

- Most APEX APIs assume the correct APEX workspace, application, and session context.
- Validate user-controlled values before passing them into administrative, security, SQL, or web-service APIs.
- Use the source link for exact behavior, defaults, and version-specific caveats.

## Simple Example

```sql
declare
    l_result NUMBER;
begin
    l_result := apex_application_install.GET_THEME_ID;
    sys.dbms_output.put_line('Result captured.');
end;
/
```

