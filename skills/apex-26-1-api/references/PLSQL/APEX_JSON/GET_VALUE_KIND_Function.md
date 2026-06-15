# APEX_JSON.GET_VALUE_KIND Function

Source: [Oracle APEX 26.1 API Reference](https://docs.oracle.com/en/database/oracle/apex/26.1/aeapi/GET_VALUE_KIND-Function.html)

Status: generated detailed reference. Review edge cases against the source before production use.

Parent package: [APEX_JSON](../APEX_JSON.md)

## Purpose

This function returns the kind of the value at a path position.

## When To Use

Use this page when code needs the `APEX_JSON.GET_VALUE_KIND` function. Confirm security, workspace, and session requirements for your calling context.

## Signature

```sql
APEX_JSON.GET_VALUE_KIND (
    p_path             IN VARCHAR2,
    p0                 IN VARCHAR2 DEFAULT NULL,
    p1                 IN VARCHAR2 DEFAULT NULL,
    p2                 IN VARCHAR2 DEFAULT NULL,
    p3                 IN VARCHAR2 DEFAULT NULL,
    p4                 IN VARCHAR2 DEFAULT NULL,
    p_values           IN t_values DEFAULT g_values )
    RETURN t_kind;
```

## Parameters

| Parameter | Description |
| --- | --- |
| `p_values` | Parsed JSON members. Defaults to g_values . |
| `p_path` | Index into p_values . |
| `p[0-4]` | Each %N in p_path is replaced by pN and every i-th %s or %d is replaced by the p[i-1] . |

## Important Notes

- Most APEX APIs assume the correct APEX workspace, application, and session context.
- Validate user-controlled values before passing them into administrative, security, SQL, or web-service APIs.
- Use the source link for exact behavior, defaults, and version-specific caveats.

## Simple Example

Check the value kind before choosing a typed getter.

```sql
declare
    l_values apex_json.t_values;
    l_kind pls_integer;

begin
    apex_json.parse(
        p_values => l_values,
        p_source => '{"order":{"id":101,"status":"OPEN","total":1250.75,"created":"2026-06-15T12:30:00Z","expedited":true,"lines":[{"sku":"A100","qty":2},{"sku":"B200","qty":1}]}}'
    );

    l_kind := apex_json.get_value_kind(
        p_path   => 'order.total',
        p_values => l_values
    );

    apex_debug.info('Kind for order.total: %s', l_kind);

end;
/
```
