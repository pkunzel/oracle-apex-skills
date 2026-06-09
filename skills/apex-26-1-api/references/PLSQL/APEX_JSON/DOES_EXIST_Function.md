# APEX_JSON.DOES_EXIST Function

Source: [Oracle APEX 26.1 API Reference](https://docs.oracle.com/en/database/oracle/apex/26.1/aeapi/DOES_EXIST-Function.html)

Status: generated detailed reference. Review edge cases against the source before production use.

Parent package: [APEX_JSON](../APEX_JSON.md)

## Purpose

This function determines whether the given path points to an existing value.

## When To Use

Use this page when code needs the `APEX_JSON.DOES_EXIST` function. Confirm security, workspace, and session requirements for your calling context.

## Signature

```sql
APEX_JSON.DOES_EXIST (
   p_path             IN VARCHAR2,
   p0                 IN VARCHAR2 DEFAULT NULL,
   p1                 IN VARCHAR2 DEFAULT NULL,
   p2                 IN VARCHAR2 DEFAULT NULL,
   p3                 IN VARCHAR2 DEFAULT NULL,
   p4                 IN VARCHAR2 DEFAULT NULL,
   p_values           IN t_values DEFAULT g_values ) 
RETURN BOOLEAN;
```

## Parameters

| Parameter | Description |
| --- | --- |
| `p_path` | Index into p_values . |
| `p[0-4]` | Each %N in p_path is replaced by pN and every i-th %s or %d is replaced by the p[i-1] . |
| `p_values` | Parsed JSON members. The default is g_values . |

## Returns

Return Description TRUE Given path points to an existing value. FALSE Given path does not point to an existing value

## Important Notes

- Most APEX APIs assume the correct APEX workspace, application, and session context.
- Validate user-controlled values before passing them into administrative, security, SQL, or web-service APIs.
- Use the source link for exact behavior, defaults, and version-specific caveats.

## Simple Example

```sql
declare
    l_result BOOLEAN;
begin
    l_result := apex_json.DOES_EXIST(
        p_path => 'EXAMPLE',
        p_values => null
    );
    sys.dbms_output.put_line('Result captured.');
end;
/
```

