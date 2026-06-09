# APEX_APPLICATION_INSTALL.SET_APPLICATION_ALIAS Procedure

Source: [Oracle APEX 26.1 API Reference](https://docs.oracle.com/en/database/oracle/apex/26.1/aeapi/APEX_APPLICATION_INSTALL.SET_APPLICATION_ALIAS-Procedure.html)

Status: generated detailed reference. Review edge cases against the source before production use.

Parent package: [APEX_APPLICATION_INSTALL](../APEX_APPLICATION_INSTALL.md)

## Purpose

This procedure sets the application alias for the application to be imported. This is only used if the application to be imported has an alias specified. An application alias must be unique within a workspace and it is recommended to be unique within an instance.

## When To Use

Use this page when code needs the `APEX_APPLICATION_INSTALL.SET_APPLICATION_ALIAS` procedure. Confirm security, workspace, and session requirements for your calling context.

## Signature

```sql
APEX_APPLICATION_INSTALL.SET_APPLICATION_ALIAS (
    p_application_alias IN VARCHAR2 )
```

## Parameters

| Parameter | Description |
| --- | --- |
| `p_application_alias` | The application alias. The application alias is an alphanumeric identifier. Must be fewer than 255 characters and unique within a workspace. (Optional) Oracle recommends that the alias be unique within an entire instance. |

## Returns

This is a procedure and does not return a value.

## Important Notes

- Most APEX APIs assume the correct APEX workspace, application, and session context.
- Validate user-controlled values before passing them into administrative, security, SQL, or web-service APIs.
- Use the source link for exact behavior, defaults, and version-specific caveats.

## Simple Example

```sql
begin
    apex_application_install.SET_APPLICATION_ALIAS(
        p_application_alias => 'EXAMPLE'
    );
end;
/
```

