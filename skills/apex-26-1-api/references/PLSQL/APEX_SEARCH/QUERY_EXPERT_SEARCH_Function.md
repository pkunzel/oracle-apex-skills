# APEX_SEARCH.QUERY_EXPERT_SEARCH Function

Source: [Oracle APEX 26.1 API Reference](https://docs.oracle.com/en/database/oracle/apex/26.1/aeapi/QUERY_EXPERT_SEARCH-Function.html)

Status: generated detailed reference. Review edge cases against the source before production use.

Parent package: [APEX_SEARCH](../APEX_SEARCH.md)

## Purpose

This function converts an end-user search query into the corresponding Oracle Text syntax, enabling advanced and precise searching capabilities.

## When To Use

Use this page when code needs the `APEX_SEARCH.QUERY_EXPERT_SEARCH` function. Confirm security, workspace, and session requirements for your calling context.

## Signature

```sql
APEX_SEARCH.QUERY_EXPERT_SEARCH (
    p_search_expression IN VARCHAR2 )
RETURN CLOB;
```

## Parameters

| Parameter | Description |
| --- | --- |
| `p_search_expression` | End-user search query to convert to Oracle Text syntax. It can include various search operators and keywords. |

## Returns

This function returns the generated Oracle Text query based on the provided search expression.

## Important Notes

- Most APEX APIs assume the correct APEX workspace, application, and session context.
- Validate user-controlled values before passing them into administrative, security, SQL, or web-service APIs.
- Use the source link for exact behavior, defaults, and version-specific caveats.

## Simple Example

```sql
declare
    l_result CLOB;
begin
    l_result := apex_search.QUERY_EXPERT_SEARCH(
        p_search_expression => 'EXAMPLE'
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

    l_result := apex_search.QUERY_EXPERT_SEARCH(
            p_search_expression => 'EXAMPLE'
        );

    apex_session.delete_session;
exception
    when others then
        apex_session.delete_session;
        raise;
end;
/
```

