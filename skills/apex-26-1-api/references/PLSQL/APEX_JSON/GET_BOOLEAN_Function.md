# APEX_JSON.GET_BOOLEAN Function

Source: [Oracle APEX 26.1 API Reference](https://docs.oracle.com/en/database/oracle/apex/26.1/aeapi/GET_BOOLEAN-Function.html)

Status: generated detailed reference. Review edge cases against the source before production use.

Parent package: [APEX_JSON](../APEX_JSON.md)

## Purpose

This function returns a boolean member value.

## When To Use

Use this page when code needs the `APEX_JSON.GET_BOOLEAN` function. Confirm security, workspace, and session requirements for your calling context.

## Signature

```sql
APEX_JSON.GET_BOOLEAN (
    p_path             IN VARCHAR2,
    p0                 IN VARCHAR2 DEFAULT NULL,
    p1                 IN VARCHAR2 DEFAULT NULL,
    p2                 IN VARCHAR2 DEFAULT NULL,
    p3                 IN VARCHAR2 DEFAULT NULL,
    p4                 IN VARCHAR2 DEFAULT NULL,
    p_default          IN BOOLEAN  DEFAULT NULL,
    p_values           IN t_values DEFAULT g_values )
RETURN BOOLEAN;
```

## Parameters

| Parameter | Description |
| --- | --- |
| `p_path` | Index into p_values . |
| `p[0-4]` | Each %N in p_path is replaced by pN and every i-th %s or %d is replaced by the p[i-1] . |
| `p_default` | The default value if the member does not exist. |
| `p_values` | Parsed JSON members. The default is g_values . |

## Returns

Return Description TRUE Value at the given path position. FALSE Value at the given path position. NULL Value at the given path position. VALUE_ERROR Raises this error if p_values(p_path) is not boolean.

## Important Notes

- Most APEX APIs assume the correct APEX workspace, application, and session context.
- Validate user-controlled values before passing them into administrative, security, SQL, or web-service APIs.
- Use the source link for exact behavior, defaults, and version-specific caveats.

## Simple Example

Read a JSON Boolean value after parsing the document into T_VALUES.

```sql
declare
    l_values apex_json.t_values;
    l_expedited boolean;

begin
    apex_json.parse(
        p_values => l_values,
        p_source => '{"order":{"id":101,"status":"OPEN","total":1250.75,"created":"2026-06-15T12:30:00Z","expedited":true,"lines":[{"sku":"A100","qty":2},{"sku":"B200","qty":1}]}}'
    );

    l_expedited := apex_json.get_boolean(
        p_path   => 'order.expedited',
        p_values => l_values
    );

    apex_util.set_session_state('P10_EXPEDITED', case when l_expedited then 'Y' else 'N' end);

end;
/
```
