# APEX_JSON.GET_VALUE Function

Source: [Oracle APEX 26.1 API Reference](https://docs.oracle.com/en/database/oracle/apex/26.1/aeapi/APEX_JSON.GET_VALUE-Function.html)

Status: generated detailed reference. Review edge cases against the source before production use.

Parent package: [APEX_JSON](../APEX_JSON.md)

## Purpose

This function returns the t_value.

## When To Use

Use this page when code needs the `APEX_JSON.GET_VALUE` function. Confirm security, workspace, and session requirements for your calling context.

## Signature

```sql
APEX_JSON.GET_VALUE (
    p_path             IN VARCHAR2,
    p0                 IN VARCHAR2 DEFAULT NULL,
    p1                 IN VARCHAR2 DEFAULT NULL,
    p2                 IN VARCHAR2 DEFAULT NULL,
    p3                 IN VARCHAR2 DEFAULT NULL,
    p4                 IN VARCHAR2 DEFAULT NULL,
    p_values           IN t_values DEFAULT g_values )
RETURN t_value;
```

## Parameters

| Parameter | Description |
| --- | --- |
| `p_path` | Index into p_values . |
| `p[0-4]` | Each %N in p_path is replaced by pN and every i-th% or %d is replaced by the p[i-1] . |
| `p_values` | Parsed JSON members. The default is g_values . |

## Important Notes

- Most APEX APIs assume the correct APEX workspace, application, and session context.
- Validate user-controlled values before passing them into administrative, security, SQL, or web-service APIs.
- Use the source link for exact behavior, defaults, and version-specific caveats.

## Simple Example

Read a raw APEX_JSON.T_VALUE when code needs to inspect the parsed value itself.

```sql
declare
    l_values apex_json.t_values;
    l_value apex_json.t_value;

begin
    apex_json.parse(
        p_values => l_values,
        p_source => '{"order":{"id":101,"status":"OPEN","total":1250.75,"created":"2026-06-15T12:30:00Z","expedited":true,"lines":[{"sku":"A100","qty":2},{"sku":"B200","qty":1}]}}'
    );

    l_value := apex_json.get_value(
        p_path   => 'order.status',
        p_values => l_values
    );

    apex_debug.info('Value kind: %s', l_value.kind);

end;
/
```
