# APEX_JSON.FIND_PATHS_LIKE Function

Source: [Oracle APEX 26.1 API Reference](https://docs.oracle.com/en/database/oracle/apex/26.1/aeapi/FIND_PATHS_LIKE-Function.html)

Status: generated detailed reference. Review edge cases against the source before production use.

Parent package: [APEX_JSON](../APEX_JSON.md)

## Purpose

This function returns paths into p_values that match a given pattern.

## When To Use

Use this page when code needs the `APEX_JSON.FIND_PATHS_LIKE` function. Confirm security, workspace, and session requirements for your calling context.

## Signature

```sql
APEX_JSON.FIND_PATHS_LIKE (
    p_return_path      IN VARCHAR2,
    p_subpath          IN VARCHAR2 DEFAULT NULL,
    p_value            IN VARCHAR2 DEFAULT NULL,
    p_values           IN t_values DEFAULT g_values )
RETURN apex_t_varchar2;
```

## Parameters

| Parameter | Description |
| --- | --- |
| `p_return_path` | Search pattern for the return path.. |
| `p_subpath` | (Optional) Search pattern under p_return_path . |
| `p_value` | (Optional) Search pattern for value. |
| `p_values` | Parsed JSON members. Default is g_values . |

## Important Notes

- Most APEX APIs assume the correct APEX workspace, application, and session context.
- Validate user-controlled values before passing them into administrative, security, SQL, or web-service APIs.
- Use the source link for exact behavior, defaults, and version-specific caveats.

## Simple Example

Find array elements whose child value matches a target value.

```sql
declare
    l_values apex_json.t_values;
    l_paths  apex_t_varchar2;
begin
    apex_json.parse(
        p_values => l_values,
        p_source => '{"lines":[{"sku":"A100","status":"OPEN"},{"sku":"B200","status":"CLOSED"}]}'
    );

    l_paths := apex_json.find_paths_like(
        p_return_path => 'lines[%]',
        p_subpath     => '.status',
        p_value       => 'OPEN',
        p_values      => l_values
    );

    for i in 1 .. l_paths.count loop
        apex_debug.info('Matching line path: %s', l_paths(i));
    end loop;
end;
/
```
