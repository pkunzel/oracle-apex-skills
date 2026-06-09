# APEX_STRING.GREP Function Signature 3

Source: [Oracle APEX 26.1 API Reference](https://docs.oracle.com/en/database/oracle/apex/26.1/aeapi/GREP-Function-Signature-3.html)

Status: generated detailed reference. Review edge cases against the source before production use.

Parent package: [APEX_STRING](../APEX_STRING.md)

## Purpose

Returns the values of the input clob that match a regular expression.

## When To Use

Use this page when code needs the `APEX_STRING.GREP` function. Confirm security, workspace, and session requirements for your calling context.

## Signature

```sql
APEX_STRING.GREP (
   p_str           IN CLOB,
   p_pattern       IN VARCHAR2,
   p_modifier      IN VARCHAR2    DEFAULT NULL,
   p_subexpression IN VARCHAR2    DEFAULT '0',
   p_limit         IN PLS_INTEGER DEFAULT NULL )
   RETURN apex_t_varchar2;
```

## Parameters

| Parameter | Description |
| --- | --- |
| `p_str` | The input clob . |
| `p_pattern` | The regular expression. |
| `p_modifier` | The regular expression modifier. |
| `p_subexpression` | The subexpression which should be returned. If null, return the complete table value. If 0 (the default), return the matched expression. If > 0, return the subexpression value. You can also pass a comma separated list of numbers, to get multiple subexpressions in the result. |
| `p_limit` | Limitation for the number of elements in the return table. If null (the default), there is no limit. |

## Important Notes

- Most APEX APIs assume the correct APEX workspace, application, and session context.
- Validate user-controlled values before passing them into administrative, security, SQL, or web-service APIs.
- Use the source link for exact behavior, defaults, and version-specific caveats.

## Simple Example

```sql
declare
    l_result APEX_T_VARCHAR2;
begin
    l_result := apex_string.GREP(
        p_str => to_clob('Example text'),
        p_pattern => 'EXAMPLE',
        p_modifier => 'EXAMPLE',
        p_subexpression => 'EXAMPLE',
        p_limit => 1
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

    l_result := apex_string.GREP(
            p_str => to_clob('Example text'),
            p_pattern => 'EXAMPLE',
            p_modifier => 'EXAMPLE',
            p_subexpression => 'EXAMPLE',
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

