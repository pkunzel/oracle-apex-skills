# APEX_STRING.FORMAT Function

Source: [Oracle APEX 26.1 API Reference](https://docs.oracle.com/en/database/oracle/apex/26.1/aeapi/FORMAT-Function.html)

Status: generated detailed reference. Review edge cases against the source before production use.

Parent package: [APEX_STRING](../APEX_STRING.md)

## Purpose

This function returns a formatted string with substitutions applied.

## When To Use

Use this page when code needs the `APEX_STRING.FORMAT` function. Confirm security, workspace, and session requirements for your calling context.

## Signature

```sql
APEX_STRING.FORMAT (
     p_message    IN VARCHAR2,
     p0           IN VARCHAR2     DEFAULT NULL,
     p1           IN VARCHAR2     DEFAULT NULL,
     p2           IN VARCHAR2     DEFAULT NULL,
     p3           IN VARCHAR2     DEFAULT NULL,
     p4           IN VARCHAR2     DEFAULT NULL,
     p5           IN VARCHAR2     DEFAULT NULL,
     p6           IN VARCHAR2     DEFAULT NULL,
     p7           IN VARCHAR2     DEFAULT NULL,
     p8           IN VARCHAR2     DEFAULT NULL,
     p9           IN VARCHAR2     DEFAULT NULL,
     p10          IN VARCHAR2     DEFAULT NULL,
     p11          IN VARCHAR2     DEFAULT NULL,
     p12          IN VARCHAR2     DEFAULT NULL,
     p13          IN VARCHAR2     DEFAULT NULL,
     p14          IN VARCHAR2     DEFAULT NULL,
     p15          IN VARCHAR2     DEFAULT NULL,
     p16          IN VARCHAR2     DEFAULT NULL,
     p17          IN VARCHAR2     DEFAULT NULL,
     p18          IN VARCHAR2     DEFAULT NULL,
     p19          IN VARCHAR2     DEFAULT NULL,
     p_max_length IN PLS_INTEGER  DEFAULT 1000,
     p_prefix     IN VARCHAR2     DEFAULT NULL )
     return VARCHAR2
```

## Parameters

| Parameter | Description |
| --- | --- |
| `p_message` | Message string with substitution placeholders. |
| `p0-p19` | Substitution parameters. |
| `p_max_length` | If not null (default is 1000), cap each p at p_max_length characters. The tilde ( ~ ) character is appended to indicate that the original value exceeded this length. |
| `p_prefix` | If set, remove leading white space and the given prefix from each line. This parameter can be used to simplify the formatting of indented multi-line text. |

## Important Notes

- Most APEX APIs assume the correct APEX workspace, application, and session context.
- Validate user-controlled values before passing them into administrative, security, SQL, or web-service APIs.
- Use the source link for exact behavior, defaults, and version-specific caveats.

## Simple Example

```sql
declare
    l_result VARCHAR2;
begin
    l_result := apex_string.FORMAT(
        p_message => to_clob('Example text'),
        p_max_length => 1,
        p_prefix => 'EXAMPLE'
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

    l_result := apex_string.FORMAT(
            p_message => to_clob('Example text'),
            p_max_length => 1,
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

