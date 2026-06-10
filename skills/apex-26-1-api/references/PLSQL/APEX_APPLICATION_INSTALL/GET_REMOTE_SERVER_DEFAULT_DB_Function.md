# APEX_APPLICATION_INSTALL.GET_REMOTE_SERVER_DEFAULT_DB Function

Source: [Oracle APEX 26.1 API Reference](https://docs.oracle.com/en/database/oracle/apex/26.1/aeapi/GET_REMOTE_SERVER_DEFAULT_DB-Function.html)

Status: generated detailed reference. Review edge cases against the source before production use.

Parent package: [APEX_APPLICATION_INSTALL](../APEX_APPLICATION_INSTALL.md)

## Purpose

This function gets the default database to be used for a given remote server during application import.

## When To Use

Use this page when code needs the `APEX_APPLICATION_INSTALL.GET_REMOTE_SERVER_DEFAULT_DB` function. Confirm security, workspace, and session requirements for your calling context.

## Signature

```sql
APEX_APPLICATION_INSTALL.GET_REMOTE_SERVER_DEFAULT_DB (
    p_static_id IN VARCHAR2 )
    RETURN VARCHAR2;
```

## Parameters

| Parameter | Description |
| --- | --- |
| `p_static_id` | Static ID to reference the remote server object. |

## Important Notes

- Most APEX APIs assume the correct APEX workspace, application, and session context.
- Validate user-controlled values before passing them into administrative, security, SQL, or web-service APIs.
- Use the source link for exact behavior, defaults, and version-specific caveats.

## Simple Example

```sql
declare
    l_result VARCHAR2;
begin
    l_result := apex_application_install.get_remote_server_default_db(
        p_static_id => 'ORDERS_API'
    );
    sys.dbms_output.put_line('Result captured.');
end;
/
```
