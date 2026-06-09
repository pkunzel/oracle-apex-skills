# APEX_STRING.PLIST_GET_KEY Function

Source: [Oracle APEX 26.1 API Reference](https://docs.oracle.com/en/database/oracle/apex/26.1/aeapi/APEX_STRING.PLIST_GET_KEY-Function.html)

Status: generated detailed reference. Review edge cases against the source before production use.

Parent package: [APEX_STRING](../APEX_STRING.md)

## Purpose

Gets the first property list key that maps to a given value. Returns NULL if the value can not be found.

## When To Use

Use this page when code needs the `APEX_STRING.PLIST_GET_KEY` function. Confirm security, workspace, and session requirements for your calling context.

## Signature

```sql
APEX_STRING.PLIST_GET_KEY (
    p_table IN apex_t_varchar2,
    p_value IN VARCHAR2 )
    RETURN varchar2;
```

## Parameters

| Parameter | Description |
| --- | --- |
| `p_table` | The input table. |
| `p_value` | The input value. |

## Important Notes

- Most APEX APIs assume the correct APEX workspace, application, and session context.
- Validate user-controlled values before passing them into administrative, security, SQL, or web-service APIs.
- Use the source link for exact behavior, defaults, and version-specific caveats.

## Simple Example

```sql
declare
    l_result VARCHAR2;
begin
    l_result := apex_string.PLIST_GET_KEY(
        p_table => 'EXAMPLE',
        p_value => 'EXAMPLE'
    );
    sys.dbms_output.put_line('Result captured.');
end;
/
```

## More Complex Example

```sql
declare
    l_result VARCHAR2;
begin
    -- Assuming this runs outside a normal APEX page request.
    apex_session.create_session(
        p_app_id   => 100,
        p_page_id  => 1,
        p_username => 'USER');

    l_result := apex_string.PLIST_GET_KEY(
            p_table => 'EXAMPLE',
            p_value => 'EXAMPLE'
        );

    apex_session.delete_session;
exception
    when others then
        apex_session.delete_session;
        raise;
end;
/
```

