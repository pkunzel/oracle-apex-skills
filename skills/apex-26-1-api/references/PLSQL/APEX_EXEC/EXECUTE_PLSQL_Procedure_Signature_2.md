# APEX_EXEC.EXECUTE_PLSQL Procedure Signature 2

Source: [Oracle APEX 26.1 API Reference](https://docs.oracle.com/en/database/oracle/apex/26.1/aeapi/APEX_EXEC.EXECUTE_PLSQL-Procedure-Signature-2.html)

Status: generated detailed reference. Review edge cases against the source before production use.

Parent package: [APEX_EXEC](../APEX_EXEC.md)

## Purpose

This procedure executes PL/SQL code based on the current process or plug-in location settings.

## When To Use

Use this page when code needs the `APEX_EXEC.EXECUTE_PLSQL` procedure. Confirm security, workspace, and session requirements for your calling context.

## Signature

```sql
APEX_EXEC.EXECUTE_PLSQL (
    p_plsql_code      IN     VARCHAR2 )
```

## Parameters

| Parameter | Description |
| --- | --- |
| `p_plsql_code` | PL/SQL code to execute. Based on the settings of the current process or process-type plug-in, the code is executed locally or remote. |

## Returns

This is a procedure and does not return a value.

## Important Notes

- Most APEX APIs assume the correct APEX workspace, application, and session context.
- Validate user-controlled values before passing them into administrative, security, SQL, or web-service APIs.
- Use the source link for exact behavior, defaults, and version-specific caveats.

## Simple Example

```sql
begin
    apex_exec.EXECUTE_PLSQL(
        p_plsql_code => to_clob('Example text')
    );
end;
/
```

