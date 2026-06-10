# APEX_APPLICATION_INSTALL.GET_REMOTE_SERVER_AI_MAXTOKENS Function

Source: [Oracle APEX 26.1 API Reference](https://docs.oracle.com/en/database/oracle/apex/26.1/aeapi/APEX_APPLICATION_INSTALL.GET_REMOTE_SERVER_AI_MAXTOKENS-Function.html)

Status: generated detailed reference. Review edge cases against the source before production use.

Parent package: [APEX_APPLICATION_INSTALL](../APEX_APPLICATION_INSTALL.md)

## Purpose

Use this function to get the Maximum number of tokens property to be used for a given Generative AI or Vector Provider server during application import.

## When To Use

Use this page when code needs the `APEX_APPLICATION_INSTALL.GET_REMOTE_SERVER_AI_MAXTOKENS` function. Confirm security, workspace, and session requirements for your calling context.

## Signature

```sql
APEX_APPLICATION_INSTALL.GET_REMOTE_SERVER_AI_MAXTOKENS (
    p_static_id IN VARCHAR2 )
    RETURN NUMBER;
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
    l_result NUMBER;
begin
    l_result := apex_application_install.get_remote_server_ai_maxtokens(
        p_static_id => 'ORDERS_AI'
    );
    sys.dbms_output.put_line('Result captured.');
end;
/
```
