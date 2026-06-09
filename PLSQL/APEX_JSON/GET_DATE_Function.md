# APEX_JSON.GET_DATE Function

Source: [Oracle APEX 26.1 API Reference](https://docs.oracle.com/en/database/oracle/apex/26.1/aeapi/GET_DATE-Function.html)

Status: generated detailed reference. Review edge cases against the source before production use.

Parent package: [APEX_JSON](../APEX_JSON.md)

## Purpose

This function returns a date member value.

## When To Use

Use this page when code needs the `APEX_JSON.GET_DATE` function. Confirm security, workspace, and session requirements for your calling context.

## Signature

```sql
APEX_JSON.GET_DATE (
    p_path             IN VARCHAR2,
    p0                 IN VARCHAR2 DEFAULT NULL,
    p1                 IN VARCHAR2 DEFAULT NULL,
    p2                 IN VARCHAR2 DEFAULT NULL,
    p3                 IN VARCHAR2 DEFAULT NULL,
    p4                 IN VARCHAR2 DEFAULT NULL,
    p_default          IN DATE     DEFAULT NULL,
    p_format           IN VARCHAR2 DEFAULT NULL,
    p_values           IN t_values DEFAULT g_values )
RETURN DATE;
```

## Parameters

| Parameter | Description |
| --- | --- |
| `p_path` | Index into p_values . |
| `p[0-4]` | Each %N in p_path is replaced by pN and every i-th %s or %d is replaced by the p[i-1] . |
| `p_default` | The default value if the member does not exist. |
| `p_format` | The date format mask. |
| `p_values` | Parsed JSON members. The default is g_values . |

## Important Notes

- Most APEX APIs assume the correct APEX workspace, application, and session context.
- Validate user-controlled values before passing them into administrative, security, SQL, or web-service APIs.
- Use the source link for exact behavior, defaults, and version-specific caveats.

## Simple Example

```sql
declare
    l_result DATE;
begin
    l_result := apex_json.GET_DATE(
        p_path => 'EXAMPLE',
        p_default => sysdate,
        p_format => 'EXAMPLE',
        p_values => null
    );
    sys.dbms_output.put_line('Result captured.');
end;
/
```

## More Complex Example

```sql
declare
    l_result DATE;
begin
    -- Assuming this runs outside a normal APEX page request.
    apex_session.create_session(
        p_app_id   => 100,
        p_page_id  => 1,
        p_username => 'USER');

    l_result := apex_json.GET_DATE(
            p_path => 'EXAMPLE',
            p_default => sysdate,
            p_format => 'EXAMPLE',
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

