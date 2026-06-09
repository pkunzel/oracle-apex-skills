# APEX_APPLICATION_INSTALL.GET_APPLICATION_ALIAS Function

Source: [Oracle APEX 26.1 API Reference](https://docs.oracle.com/en/database/oracle/apex/26.1/aeapi/APEX_APPLICATION_INSTALL.GET_APPLICATION_ALIAS-Function.html)

Status: generated detailed reference. Review edge cases against the source before production use.

Parent package: [APEX_APPLICATION_INSTALL](../APEX_APPLICATION_INSTALL.md)

## Purpose

This function gets the application alias for the application to be imported. This is only used if the application to be imported has an alias specified. An application alias must be unique within a workspace and it is recommended to be unique within an instance.

## When To Use

Use this page when code needs the `APEX_APPLICATION_INSTALL.GET_APPLICATION_ALIAS` function. Confirm security, workspace, and session requirements for your calling context.

## Signature

```sql
APEX_APPLICATION_INSTALL.GET_APPLICATION_ALIAS
RETURN VARCHAR2;
```

## Important Notes

- Most APEX APIs assume the correct APEX workspace, application, and session context.
- Validate user-controlled values before passing them into administrative, security, SQL, or web-service APIs.
- Use the source link for exact behavior, defaults, and version-specific caveats.

## Simple Example

```sql
declare
    l_result VARCHAR2;
begin
    l_result := apex_application_install.GET_APPLICATION_ALIAS;
    sys.dbms_output.put_line('Result captured.');
end;
/
```

