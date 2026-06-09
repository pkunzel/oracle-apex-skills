# APEX_STRING.SPLIT_NUMBERS Function

Source: [Oracle APEX 26.1 API Reference](https://docs.oracle.com/en/database/oracle/apex/26.1/aeapi/SPLIT_NUMBERS-Function.html)

Status: generated detailed reference. Review edge cases against the source before production use.

Parent package: [APEX_STRING](../APEX_STRING.md)

## Purpose

Use this function to split input at separator, values must all be numbers.

## When To Use

Use this page when code needs the `APEX_STRING.SPLIT_NUMBERS` function. Confirm security, workspace, and session requirements for your calling context.

## Signature

```sql
SPLIT_NUMBERS (
     p_str IN VARCHAR2,
     p_sep IN VARCHAR2 DEFAULT apex_application.LF )
     RETURN apex_t_number;
```

## Parameters

| Parameter | Description |
| --- | --- |
| `p_str` | The input varchar2. |
| `p_sep` | The separator. Splits at line feed by default. If null, split after each character. If a single character, split at this character. If more than 1 character, split at regular expression (max 512 characters). |

## Important Notes

- Most APEX APIs assume the correct APEX workspace, application, and session context.
- Validate user-controlled values before passing them into administrative, security, SQL, or web-service APIs.
- Use the source link for exact behavior, defaults, and version-specific caveats.

## Simple Example

```sql
declare
    l_result APEX_T_NUMBER;
begin
    l_result := apex_string.SPLIT_NUMBERS(
        p_str => 'EXAMPLE',
        p_sep => 'EXAMPLE'
    );
    sys.dbms_output.put_line('Result captured.');
end;
/
```

## More Complex Example

```sql
declare
    l_result APEX_T_NUMBER;
begin
    -- Assuming this runs outside a normal APEX page request.
    apex_session.create_session(
        p_app_id   => 100,
        p_page_id  => 1,
        p_username => 'USER');

    l_result := apex_string.SPLIT_NUMBERS(
            p_str => 'EXAMPLE',
            p_sep => 'EXAMPLE'
        );

    apex_session.delete_session;
exception
    when others then
        apex_session.delete_session;
        raise;
end;
/
```

