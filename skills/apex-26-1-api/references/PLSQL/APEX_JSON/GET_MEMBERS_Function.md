# APEX_JSON.GET_MEMBERS Function

Source: [Oracle APEX 26.1 API Reference](https://docs.oracle.com/en/database/oracle/apex/26.1/aeapi/GET_MEMBERS-Function.html)

Status: generated detailed reference. Review edge cases against the source before production use.

Parent package: [APEX_JSON](../APEX_JSON.md)

## Purpose

This function returns the table of OBJECT_MEMBERS names for an object.

## When To Use

Use this page when code needs the `APEX_JSON.GET_MEMBERS` function. Confirm security, workspace, and session requirements for your calling context.

## Signature

```sql
APEX_JSON.GET_MEMBERS (
    p_path             IN VARCHAR2,
    p0                 IN VARCHAR2 DEFAULT NULL,
    p1                 IN VARCHAR2 DEFAULT NULL,
    p2                 IN VARCHAR2 DEFAULT NULL,
    p3                 IN VARCHAR2 DEFAULT NULL,
    p4                 IN VARCHAR2 DEFAULT NULL,
    p_values           IN t_values DEFAULT g_values )
RETURN APEX_T_VARCHAR2;
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

```sql
declare
    l_result APEX_T_VARCHAR2;
begin
    l_result := apex_json.GET_MEMBERS(
        p_path => 'EXAMPLE',
        p_values => null
    );
    sys.dbms_output.put_line('Result captured.');
end;
/
```

