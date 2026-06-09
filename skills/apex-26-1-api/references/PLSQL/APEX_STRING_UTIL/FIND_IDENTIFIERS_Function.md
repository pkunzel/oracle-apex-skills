# APEX_STRING_UTIL.FIND_IDENTIFIERS Function

Source: [Oracle APEX 26.1 API Reference](https://docs.oracle.com/en/database/oracle/apex/26.1/aeapi/FIND_IDENTIFIERS-Function.html)

Status: generated detailed reference. Review edge cases against the source before production use.

Parent package: [APEX_STRING_UTIL](../APEX_STRING_UTIL.md)

## Purpose

Given an identifier's prefix, this function finds the identifiers including consecutive numbers following. The search is case insensitive and also ignores white space and special characters.

## When To Use

Use this page when code needs the `APEX_STRING_UTIL.FIND_IDENTIFIERS` function. Confirm security, workspace, and session requirements for your calling context.

## Signature

```sql
FUNCTION FIND_IDENTIFIERS (
    p_string IN VARCHAR2,
    p_prefix IN VARCHAR2 )
    RETURN apex_t_varchar2;
```

## Parameters

| Parameter | Description |
| --- | --- |
| `p_string` | The input string. |
| `p_prefix` | The identifier prefix. |

## Returns

Returns an array of identifiers present in a string.

## Important Notes

- Most APEX APIs assume the correct APEX workspace, application, and session context.
- Validate user-controlled values before passing them into administrative, security, SQL, or web-service APIs.
- Use the source link for exact behavior, defaults, and version-specific caveats.

## Simple Example

```sql
declare
    l_result APEX_T_VARCHAR2;
begin
    l_result := apex_string_util.FIND_IDENTIFIERS(
        p_string => 'EXAMPLE',
        p_prefix => 'EXAMPLE'
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

    l_result := apex_string_util.FIND_IDENTIFIERS(
            p_string => 'EXAMPLE',
            p_prefix => 'EXAMPLE'
        );

    apex_session.delete_session;
exception
    when others then
        apex_session.delete_session;
        raise;
end;
/
```

