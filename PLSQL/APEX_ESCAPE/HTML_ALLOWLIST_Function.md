# APEX_ESCAPE.HTML_ALLOWLIST Function

Source: [Oracle APEX 26.1 API Reference](https://docs.oracle.com/en/database/oracle/apex/26.1/aeapi/HTML_ALLOWLIST-Function.html)

Status: generated detailed reference. Review edge cases against the source before production use.

Parent package: [APEX_ESCAPE](../APEX_ESCAPE.md)

## Purpose

The HTML_ALLOWLIST function performs HTML escape on all characters in the input text except the specified allowlist tags. This function can be useful if the input text contains simple html markup but a developer wants to ensure that an attacker cannot use malicious tags for cross-site scripting.

## When To Use

Use this page when code needs the `APEX_ESCAPE.HTML_ALLOWLIST` function. Confirm security, workspace, and session requirements for your calling context.

## Signature

```sql
APEX_ESCAPE.HTML_ALLOWLIST (
    p_html           IN VARCHAR2,
    p_allowlist_tags IN VARCHAR2 DEFAULT c_html_allowlist_tags )
    RETURN VARCHAR2 deterministic;
```

## Parameters

| Parameter | Description |
| --- | --- |
| `p_html` | The text string that is filtered. |
| `p_allowlist_tags` | The comma separated list of tags that stays in p_html . |

## Important Notes

- Most APEX APIs assume the correct APEX workspace, application, and session context.
- Validate user-controlled values before passing them into administrative, security, SQL, or web-service APIs.
- Use the source link for exact behavior, defaults, and version-specific caveats.

## Simple Example

```sql
declare
    l_result VARCHAR2;
begin
    l_result := apex_escape.HTML_ALLOWLIST(
        p_html => 'EXAMPLE',
        p_allowlist_tags => 'EXAMPLE'
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

    l_result := apex_escape.HTML_ALLOWLIST(
            p_html => 'EXAMPLE',
            p_allowlist_tags => 'EXAMPLE'
        );

    apex_session.delete_session;
exception
    when others then
        apex_session.delete_session;
        raise;
end;
/
```

