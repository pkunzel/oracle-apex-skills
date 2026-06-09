# APEX_CUSTOM_AUTH.GET_USER Function

Source: [Oracle APEX 26.1 API Reference](https://docs.oracle.com/en/database/oracle/apex/26.1/aeapi/GET_USER-Function.html)

Status: generated detailed reference. Review edge cases against the source before production use.

Parent package: [APEX_CUSTOM_AUTH](../APEX_CUSTOM_AUTH.md)

## Purpose

This function returns the APEX_APPLICATION.G_USER global variable ( VARCHAR2 ).

## When To Use

Use this page when code needs the `APEX_CUSTOM_AUTH.GET_USER` function. Confirm security, workspace, and session requirements for your calling context.

## Signature

```sql
APEX_CUSTOM_AUTH.GET_USER 
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
    l_result := apex_custom_auth.GET_USER;
    sys.dbms_output.put_line('Result captured.');
end;
/
```

