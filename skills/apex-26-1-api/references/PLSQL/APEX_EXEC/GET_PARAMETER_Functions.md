# APEX_EXEC.GET_PARAMETER Functions

Source: [Oracle APEX 26.1 API Reference](https://docs.oracle.com/en/database/oracle/apex/26.1/aeapi/APEX_EXEC.GET_PARAMETERS-Function.html)

Status: generated detailed reference. Review edge cases against the source before production use.

Parent package: [APEX_EXEC](../APEX_EXEC.md)

## Purpose

These functions returns a SQL parameter value. Typically used to retrieve values for OUT binds of an executed SQL or PL/SQL statement.

## When To Use

Use this page when code needs the `APEX_EXEC.GET_PARAMETER` topic. Confirm security, workspace, and session requirements for your calling context.

## Signature

```sql
APEX_EXEC.GET_PARAMETER_VARCHAR2 (
    p_parameters      IN t_parameters,
    p_name            IN VARCHAR2,
    p_format_mask     IN VARCHAR2 DEFAULT NULL ) RETURN VARCHAR2;

APEX_EXEC.GET_PARAMETER_NUMBER (
    p_parameters      IN t_parameters,
    p_name            IN VARCHAR2 ) RETURN NUMBER;

APEX_EXEC.GET_PARAMETER_DATE (
    p_parameters      IN t_parameters,
    p_name            IN VARCHAR2 ) RETURN DATE;

APEX_EXEC.GET_PARAMETER_TIMESTAMP (
    p_parameters      IN t_parameters,
    p_name            IN VARCHAR2 ) RETURN TIMESTAMP;

APEX_EXEC.GET_PARAMETER_TIMESTAMP_TZ (
    p_parameters      IN t_parameters,
    p_name            IN VARCHAR2 ) RETURN TIMESTAMP WITH TIME ZONE;

APEX_EXEC.GET_PARAMETER_TIMESTAMP_LTZ (
    p_parameters      IN t_parameters,
    p_name            IN VARCHAR2 ) RETURN TIMESTAMP WITH LOCAL TIME ZONE;

APEX_EXEC.GET_PARAMETER_CLOB (
    p_parameters      IN t_parameters,
    p_name            IN VARCHAR2 ) RETURN CLOB;

APEX_EXEC.GET_PARAMETER_INTERVAL_D2S (
    p_parameters      IN t_parameters,
    p_name            IN VARCHAR2 ) RETURN INTERVAL DAY TO SECOND;

APEX_EXEC.GET_PARAMETER_INTERVAL_Y2M (
    p_parameters      IN t_parameters,
    p_name            IN VARCHAR2 ) RETURN INTERVAL YEAR TO MONTH;
```

## Parameters

| Parameter | Description |
| --- | --- |
| `p_parameters` | SQL parameter array. |
| `p_name` | Parameter name. |
| `p_format_mask` | If the parameter is of a DATE or TIMESTAMP data type, the p_format_mask parameter denotes which format mask to use to get the VARCHAR2 representation. |

## Returns

Parameter value. Parent topic: APEX_EXEC

## Important Notes

- Most APEX APIs assume the correct APEX workspace, application, and session context.
- Validate user-controlled values before passing them into administrative, security, SQL, or web-service APIs.
- Use the source link for exact behavior, defaults, and version-specific caveats.

## Example

```sql
declare
    l_parameters apex_exec.t_parameters;
    l_status     varchar2(30);
begin
    apex_exec.add_parameter(l_parameters, 'P_ORDER_ID', :P10_ORDER_ID);

    apex_exec.execute_plsql(
        p_plsql_code     => 'begin order_api.submit_order(:P_ORDER_ID, :P_STATUS); end;',
        p_auto_bind_items => false,
        p_sql_parameters => l_parameters
    );

    l_status := apex_exec.get_parameter_varchar2(l_parameters, 'P_STATUS');
    sys.dbms_output.put_line('Submit status: ' || l_status);
end;
/
```
