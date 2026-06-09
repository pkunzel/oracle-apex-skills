# APEX_STRING_UTIL.GET_SLUG Function

Source: [Oracle APEX 26.1 API Reference](https://docs.oracle.com/en/database/oracle/apex/26.1/aeapi/GET_SLUG-Function.html)

Status: generated detailed reference. Review edge cases against the source before production use.

Parent package: [APEX_STRING_UTIL](../APEX_STRING_UTIL.md)

## Purpose

Use this function to convert the input string to a "-" separated string, with special characters removed. The returned string contains a maximum of 255 characters in total, including hash (if requested).

## When To Use

Use this page when code needs the `APEX_STRING_UTIL.GET_SLUG` function. Confirm security, workspace, and session requirements for your calling context.

## Signature

```sql
APEX_STRING_UTIL.GET_SLUG (
    p_string               IN VARCHAR2,
    p_hash_length          IN PLS_INTEGER DEFAULT 0 )
RETURN VARCHAR2;
```

## Parameters

| Parameter | Description |
| --- | --- |
| `p_string` | The input string. |
| `p_hash_length` | If > 0 (default is 0 ), append random digits to make the result unique. The longest hash that may be returned is 38 digits. |

## Important Notes

- Most APEX APIs assume the correct APEX workspace, application, and session context.
- Validate user-controlled values before passing them into administrative, security, SQL, or web-service APIs.
- Use the source link for exact behavior, defaults, and version-specific caveats.

## Simple Example

```sql
declare
    l_result VARCHAR2;
begin
    l_result := apex_string_util.GET_SLUG(
        p_string => 'EXAMPLE',
        p_hash_length => 1
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

    l_result := apex_string_util.GET_SLUG(
            p_string => 'EXAMPLE',
            p_hash_length => 1
        );

    apex_session.delete_session;
exception
    when others then
        apex_session.delete_session;
        raise;
end;
/
```

