# APEX_APPLICATION_INSTALL.GET_KEEP_BACKGROUND_EXECS Function

Source: [Oracle APEX 26.1 API Reference](https://docs.oracle.com/en/database/oracle/apex/26.1/aeapi/GET_KEEP_BACKGROUND_EXECS-Function.html)

Status: generated detailed reference. Review edge cases against the source before production use.

Parent package: [APEX_APPLICATION_INSTALL](../APEX_APPLICATION_INSTALL.md)

## Purpose

This function checks if background executions are preserved or deleted during upgrades. Defaults to FALSE , so all background executions are aborted and deleted on application upgrade.

## When To Use

Use this page when code needs the `APEX_APPLICATION_INSTALL.GET_KEEP_BACKGROUND_EXECS` function. Confirm security, workspace, and session requirements for your calling context.

## Signature

```sql
APEX_APPLICATION_INSTALL.GET_KEEP_BACKGROUND_EXECS
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
    l_result := apex_application_install.GET_KEEP_BACKGROUND_EXECS;
    sys.dbms_output.put_line('Result captured.');
end;
/
```

