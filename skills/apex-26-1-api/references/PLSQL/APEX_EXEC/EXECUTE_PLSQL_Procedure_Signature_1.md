# APEX_EXEC.EXECUTE_PLSQL Procedure Signature 1

Source: [Oracle APEX 26.1 API Reference](https://docs.oracle.com/en/database/oracle/apex/26.1/aeapi/APEX_EXEC.EXECUTE_PLSQL-Procedure-Signature-1.html)

Status: generated detailed reference. Review edge cases against the source before production use.

Parent package: [APEX_EXEC](../APEX_EXEC.md)

## Purpose

This procedure executes PL/SQL code based on the current process or plug-in location settings.

## When To Use

Use this page when code needs the `APEX_EXEC.EXECUTE_PLSQL` procedure. Confirm security, workspace, and session requirements for your calling context.

## Signature

```sql
APEX_EXEC.EXECUTE_PLSQL (
    p_plsql_code      IN     VARCHAR2,
    p_auto_bind_items IN     BOOLEAN      DEFAULT TRUE,
    p_sql_parameters  IN OUT t_parameters )
```

## Parameters

| Parameter | Description |
| --- | --- |
| `p_plsql_code` | PL/SQL code to execute. Based on the settings of the current process or process-type plug-in, the code is executed locally or remote. |
| `p_auto_bind_items` | Default TRUE . Whether to automatically bind page item values for IN and OUT direction. If the PL/SQL code references bind variables which are not page items, this must be set to FALSE . |
| `p_sql_parameters` | Additional bind variables, if needed. Note that EXECUTE_PLSQL binds all p_sql_parameters as VARCHAR2. Bind variables such as NUMBER and DATE are implicitly converted to VARCHAR2. |

## Returns

This is a procedure and does not return a value.

## Important Notes

- Most APEX APIs assume the correct APEX workspace, application, and session context.
- Validate user-controlled values before passing them into administrative, security, SQL, or web-service APIs.
- Use the source link for exact behavior, defaults, and version-specific caveats.

## Simple Example

```sql
declare
    l_parameters apex_exec.t_parameters;
begin
    apex_exec.add_parameter(l_parameters, 'P_ORDER_ID', :P10_ORDER_ID);

    apex_exec.execute_plsql(
        p_plsql_code      => 'begin order_api.reprice_order(:P_ORDER_ID); end;',
        p_auto_bind_items => false,
        p_sql_parameters  => l_parameters
    );
end;
/
```
