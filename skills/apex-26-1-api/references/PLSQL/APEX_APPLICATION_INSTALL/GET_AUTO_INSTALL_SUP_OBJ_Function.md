# APEX_APPLICATION_INSTALL.GET_AUTO_INSTALL_SUP_OBJ Function

Source: [Oracle APEX 26.1 API Reference](https://docs.oracle.com/en/database/oracle/apex/26.1/aeapi/GET_AUTO_INSTALL_SUP_OBJ-Function.html)

Status: generated detailed reference. Review edge cases against the source before production use.

Parent package: [APEX_APPLICATION_INSTALL](../APEX_APPLICATION_INSTALL.md)

## Purpose

This function retrieves the automatic install of supporting objects settings used during the import of an application. This setting is valid only for command line installs. If the setting is set to TRUE and the application export contains supporting objects, it automatically installs or upgrades the supporting objects when an application is imported from the command line.

## When To Use

Use this page when code needs the `APEX_APPLICATION_INSTALL.GET_AUTO_INSTALL_SUP_OBJ` function. Confirm security, workspace, and session requirements for your calling context.

## Signature

```sql
APEX_APPLICATION_INSTALL.GET_AUTO_INSTALL_SUP_OBJ
RETURN BOOLEAN;
```

## Important Notes

- Most APEX APIs assume the correct APEX workspace, application, and session context.
- Validate user-controlled values before passing them into administrative, security, SQL, or web-service APIs.
- Use the source link for exact behavior, defaults, and version-specific caveats.

## Simple Example

```sql
declare
    l_result BOOLEAN;
begin
    l_result := apex_application_install.GET_AUTO_INSTALL_SUP_OBJ;
    sys.dbms_output.put_line('Result captured.');
end;
/
```

