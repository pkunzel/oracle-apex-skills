# APEX_EXEC.EXECUTE_REMOTE_PLSQL Procedure Signature 1

Source: [Oracle APEX 26.1 API Reference](https://docs.oracle.com/en/database/oracle/apex/26.1/aeapi/APEX_EXEC.EXECUTE_REMOTE_PLSQL-Procedure.html)

Status: generated detailed reference. Review edge cases against the source before production use.

Parent package: [APEX_EXEC](../APEX_EXEC.md)

## Purpose

This procedure executes PL/SQL code on a REST-enabled SQL instance.

## When To Use

Use this page when code needs the `APEX_EXEC.EXECUTE_REMOTE_PLSQL` procedure. Confirm security, workspace, and session requirements for your calling context.

## Signature

```sql
APEX_EXEC.EXECUTE_REMOTE_PLSQL (
    p_server_static_id     IN     VARCHAR2,
    p_plsql_code           IN     VARCHAR2,
    p_auto_bind_items      IN     BOOLEAN      DEFAULT TRUE,
    p_sql_parameters       IN OUT t_parameters )
```

## Parameters

| Parameter | Description |
| --- | --- |
| `p_server_static_id` | Static ID of the ORDS REST-enabled SQL instance. |
| `p_plsql_code` | PL/SQL code to execute. |
| `p_auto_bind_items` | Default TRUE . Whether to automatically bind page item values for both IN and OUT direction. If the PL/SQL code references bind variables which are not page items, this must be set to FALSE . |
| `p_sql_parameters` | (Optional) Additional bind variables. |

## Returns

This is a procedure and does not return a value.

## Important Notes

- Most APEX APIs assume the correct APEX workspace, application, and session context.
- Validate user-controlled values before passing them into administrative, security, SQL, or web-service APIs.
- Use the source link for exact behavior, defaults, and version-specific caveats.

## Simple Example

```sql
begin
    apex_exec.EXECUTE_REMOTE_PLSQL(
        p_server_static_id => 'EXAMPLE_STATIC_ID',
        p_plsql_code => to_clob('Example text'),
        p_auto_bind_items => true,
        p_sql_parameters => to_clob('Example text')
    );
end;
/
```

## More Complex Example

```sql
begin
    -- Assuming this runs inside an APEX page process with the right workspace/app context.
    apex_exec.EXECUTE_REMOTE_PLSQL(
            p_server_static_id => 'EXAMPLE_STATIC_ID',
            p_plsql_code => to_clob('Example text'),
            p_auto_bind_items => true,
            p_sql_parameters => to_clob('Example text')
        );
end;
/
```

