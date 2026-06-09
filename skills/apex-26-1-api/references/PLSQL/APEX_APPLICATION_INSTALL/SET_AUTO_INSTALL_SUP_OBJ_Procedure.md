# APEX_APPLICATION_INSTALL.SET_AUTO_INSTALL_SUP_OBJ Procedure

Source: [Oracle APEX 26.1 API Reference](https://docs.oracle.com/en/database/oracle/apex/26.1/aeapi/SET_AUTO_INSTALL_SUP_OBJ-Procedure.html)

Status: generated detailed reference. Review edge cases against the source before production use.

Parent package: [APEX_APPLICATION_INSTALL](../APEX_APPLICATION_INSTALL.md)

## Purpose

This procedure sets the automatic install of supporting objects value used during application import. This setting is valid only for command line installs. If the value is set to TRUE and the application export contains supporting objects, it automatically installs or upgrades the supporting objects when an application is imported from the command line.

## When To Use

Use this page when code needs the `APEX_APPLICATION_INSTALL.SET_AUTO_INSTALL_SUP_OBJ` procedure. Confirm security, workspace, and session requirements for your calling context.

## Signature

```sql
APEX_APPLICATION_INSTALL.SET_AUTO_INSTALL_SUP_OBJ (
    p_auto_install_sup_obj IN BOOLEAN )
```

## Parameters

| Parameter | Description |
| --- | --- |
| `p_auto_install_sup_obj` | Boolean value for the automatic install of supporting objects. |

## Returns

This is a procedure and does not return a value.

## Important Notes

- Most APEX APIs assume the correct APEX workspace, application, and session context.
- Validate user-controlled values before passing them into administrative, security, SQL, or web-service APIs.
- Use the source link for exact behavior, defaults, and version-specific caveats.

## Simple Example

```sql
begin
    apex_application_install.SET_AUTO_INSTALL_SUP_OBJ(
        p_auto_install_sup_obj => true
    );
end;
/
```

## More Complex Example

```sql
begin
    -- Assuming this runs inside an APEX page process with the right workspace/app context.
    apex_application_install.SET_AUTO_INSTALL_SUP_OBJ(
            p_auto_install_sup_obj => true
        );
end;
/
```

