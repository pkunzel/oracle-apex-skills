# APEX_APPLICATION_INSTALL.GET_NO_PROXY_DOMAINS Function

Source: [Oracle APEX 26.1 API Reference](https://docs.oracle.com/en/database/oracle/apex/26.1/aeapi/APEX_APPLICATION_INSTALL.GET_NO_PROXY_DOMAINS-Function.html)

Status: generated detailed reference. Review edge cases against the source before production use.

Parent package: [APEX_APPLICATION_INSTALL](../APEX_APPLICATION_INSTALL.md)

## Purpose

Use this function to get the No Proxy Domains attribute of an application to be imported.

## When To Use

Use this page when code needs the `APEX_APPLICATION_INSTALL.GET_NO_PROXY_DOMAINS` function. Confirm security, workspace, and session requirements for your calling context.

## Signature

```sql
APEX_APPLICATION_INSTALL.GET_PROXY
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
    l_result := apex_application_install.GET_NO_PROXY_DOMAINS;
    sys.dbms_output.put_line('Result captured.');
end;
/
```

