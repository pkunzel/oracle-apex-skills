# APEX_JSON.GET_CLOB Function

Source: [Oracle APEX 26.1 API Reference](https://docs.oracle.com/en/database/oracle/apex/26.1/aeapi/APEX_JSON.GET_CLOB-Function.html)

Status: generated detailed reference. Review edge cases against the source before production use.

Parent package: [APEX_JSON](../APEX_JSON.md)

## Purpose

This function returns clob member value. This function auto-converts varchar2 , boolean, and number values.

## When To Use

Use this page when code needs the `APEX_JSON.GET_CLOB` function. Confirm security, workspace, and session requirements for your calling context.

## Signature

```sql
GET_CLOB (
    p_path    IN VARCHAR2,
    p0        IN VARCHAR2 DEFAULT NULL,
    p1        IN VARCHAR2 DEFAULT NULL,
    p2        IN VARCHAR2 DEFAULT NULL,
    p3        IN VARCHAR2 DEFAULT NULL,
    p4        IN VARCHAR2 DEFAULT NULL,
    p_default IN CLOB     DEFAULT NULL,
    p_values  in t_values DEFAULT g_values )
RETURN CLOB
```

## Parameters

| Parameter | Description |
| --- | --- |
| `p_values` | Parsed JSON members. defaults to g_values . |
| `p_path` | Index into p_values . |
| `p[0-4]` | Each %N in p_path is replaced with pN and every i-th %s or %d is replaced with p[i-1] . |
| `p_default` | Default value if the member does not exist. |

## Important Notes

- Most APEX APIs assume the correct APEX workspace, application, and session context.
- Validate user-controlled values before passing them into administrative, security, SQL, or web-service APIs.
- Use the source link for exact behavior, defaults, and version-specific caveats.

## Simple Example

```sql
declare
    l_result CLOB;
begin
    l_result := apex_json.GET_CLOB(
        p_path => 'EXAMPLE',
        p_default => to_clob('Example text'),
        p_values => null
    );
    sys.dbms_output.put_line('Result captured.');
end;
/
```

## More Complex Example

```sql
declare
    l_result CLOB;
begin
    -- Assuming this runs outside a normal APEX page request.
    apex_session.create_session(
        p_app_id   => 100,
        p_page_id  => 1,
        p_username => 'USER');

    l_result := apex_json.GET_CLOB(
            p_path => 'EXAMPLE',
            p_default => to_clob('Example text'),
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

