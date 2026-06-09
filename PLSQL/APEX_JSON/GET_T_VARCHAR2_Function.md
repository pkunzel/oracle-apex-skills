# APEX_JSON.GET_T_VARCHAR2 Function

Source: [Oracle APEX 26.1 API Reference](https://docs.oracle.com/en/database/oracle/apex/26.1/aeapi/GET_T_VARCHAR2-Function.html)

Status: generated detailed reference. Review edge cases against the source before production use.

Parent package: [APEX_JSON](../APEX_JSON.md)

## Purpose

This function returns the varchar2 attributes of an array.

## When To Use

Use this page when code needs the `APEX_JSON.GET_T_VARCHAR2` function. Confirm security, workspace, and session requirements for your calling context.

## Signature

```sql
APEX_JSON.GET_T_VARCHAR2 (
    p_path             IN VARCHAR2,
    p0                 IN VARCHAR2 DEFAULT NULL,
    p1                 IN VARCHAR2 DEFAULT NULL,
    p2                 IN VARCHAR2 DEFAULT NULL,
    p3                 IN VARCHAR2 DEFAULT NULL,
    p4                 IN VARCHAR2 DEFAULT NULL,
    p_values           IN t_values DEFAULT g_values )
    RETURN apex_t_varchar2;
```

## Parameters

| Parameter | Description |
| --- | --- |
| `p_path` | Index into p_values . |
| `p[0-4]` | Each %N in p_path is replaced by pN and every i-th% or %d is replaced by the p[i-1] . |
| `p_values` | Parsed JSON members. The default is g_values . |

## Returns

Array member values if the referenced t_value is an array. An array with just the referenced value if its type can be converted to a varchar2.

## Important Notes

- Most APEX APIs assume the correct APEX workspace, application, and session context.
- Validate user-controlled values before passing them into administrative, security, SQL, or web-service APIs.
- Use the source link for exact behavior, defaults, and version-specific caveats.

## Simple Example

```sql
declare
    l_result APEX_T_VARCHAR2;
begin
    l_result := apex_json.GET_T_VARCHAR2(
        p_path => 'EXAMPLE',
        p_values => null
    );
    sys.dbms_output.put_line('Result captured.');
end;
/
```

## More Complex Example

```sql
declare
    l_result APEX_T_VARCHAR2;
begin
    -- Assuming this runs outside a normal APEX page request.
    apex_session.create_session(
        p_app_id   => 100,
        p_page_id  => 1,
        p_username => 'USER');

    l_result := apex_json.GET_T_VARCHAR2(
            p_path => 'EXAMPLE',
            p_values => null
        );

    apex_session.delete_session;
exception
    when others then
        apex_session.delete_session;
        raise;
end;
/
```

