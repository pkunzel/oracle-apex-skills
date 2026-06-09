# APEX_JSON.GET_T_NUMBER Function

Source: [Oracle APEX 26.1 API Reference](https://docs.oracle.com/en/database/oracle/apex/26.1/aeapi/GET_T_NUMBER-Function.html)

Status: generated detailed reference. Review edge cases against the source before production use.

Parent package: [APEX_JSON](../APEX_JSON.md)

## Purpose

This function returns the numeric attributes of an array.

## When To Use

Use this page when code needs the `APEX_JSON.GET_T_NUMBER` function. Confirm security, workspace, and session requirements for your calling context.

## Signature

```sql
APEX_JSON.GET_T_NUMBER (
    p_path             IN VARCHAR2,
    p0                 IN VARCHAR2 DEFAULT NULL,
    p1                 IN VARCHAR2 DEFAULT NULL,
    p2                 IN VARCHAR2 DEFAULT NULL,
    p3                 IN VARCHAR2 DEFAULT NULL,
    p4                 IN VARCHAR2 DEFAULT NULL,
    p_values           IN t_values DEFAULT g_values )
    RETURN apex_t_number;
```

## Parameters

| Parameter | Description |
| --- | --- |
| `p_path` | Index into p_values . |
| `p[0-4]` | Each %N in p_path is replaced by pN and every i-th% or %d is replaced by the p[i-1] . |
| `p_values` | Parsed JSON members. Default p_values . |

## Returns

Array member values if the referenced t_value is an array. An array with just the referenced value if its type can be converted to a number. Return Description VALUE_ERROR On conversion errors.

## Important Notes

- Most APEX APIs assume the correct APEX workspace, application, and session context.
- Validate user-controlled values before passing them into administrative, security, SQL, or web-service APIs.
- Use the source link for exact behavior, defaults, and version-specific caveats.

## Simple Example

```sql
declare
    l_result APEX_T_NUMBER;
begin
    l_result := apex_json.GET_T_NUMBER(
        p_path => 'EXAMPLE',
        p_values => null
    );
    sys.dbms_output.put_line('Result captured.');
end;
/
```

