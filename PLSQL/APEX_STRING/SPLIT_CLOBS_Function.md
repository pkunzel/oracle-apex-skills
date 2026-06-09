# APEX_STRING.SPLIT_CLOBS Function

Source: [Oracle APEX 26.1 API Reference](https://docs.oracle.com/en/database/oracle/apex/26.1/aeapi/SPLIT_CLOBS-Function.html)

Status: generated detailed reference. Review edge cases against the source before production use.

Parent package: [APEX_STRING](../APEX_STRING.md)

## Purpose

This function splits input clobs at the separator and returns a table of clobs.

## When To Use

Use this page when code needs the `APEX_STRING.SPLIT_CLOBS` function. Confirm security, workspace, and session requirements for your calling context.

## Signature

```sql
APEX_STRING.SPLIT_CLOBS (
  p_str   IN CLOB,
  p_sep   IN VARCHAR2    DEFAULT apex_application.LF,
  p_limit IN PLS_INTEGER DEFAULT NULL )
RETURN apex_t_clob;
```

## Parameters

| Parameter | Description |
| --- | --- |
| `p_str` | The input clob. |
| `p_sep` | The separator. Splits at line feed by default. If null, split after each character. If a single character, split at this character. If more than 1 character, split at regular expression (max 512 characters). |
| `p_limit` | Maximum number of splits. Ignored if null. If smaller than the total possible number of splits, the last table element contains the rest. |

## Important Notes

- Most APEX APIs assume the correct APEX workspace, application, and session context.
- Validate user-controlled values before passing them into administrative, security, SQL, or web-service APIs.
- Use the source link for exact behavior, defaults, and version-specific caveats.

## Simple Example

```sql
declare
    l_result APEX_T_CLOB;
begin
    l_result := apex_string.SPLIT_CLOBS(
        p_str => to_clob('Example text'),
        p_sep => 'EXAMPLE',
        p_limit => 1
    );
    sys.dbms_output.put_line('Result captured.');
end;
/
```

## More Complex Example

```sql
declare
    l_result APEX_T_CLOB;
begin
    -- Assuming this runs outside a normal APEX page request.
    apex_session.create_session(
        p_app_id   => 100,
        p_page_id  => 1,
        p_username => 'USER');

    l_result := apex_string.SPLIT_CLOBS(
            p_str => to_clob('Example text'),
            p_sep => 'EXAMPLE',
            p_limit => 1
        );

    apex_session.delete_session;
exception
    when others then
        apex_session.delete_session;
        raise;
end;
/
```

