# APEX_SEARCH.SEARCH Function

Source: [Oracle APEX 26.1 API Reference](https://docs.oracle.com/en/database/oracle/apex/26.1/aeapi/APEX_SEARCH.SEARCH-Function.html)

Status: generated detailed reference. Review edge cases against the source before production use.

Parent package: [APEX_SEARCH](../APEX_SEARCH.md)

## Purpose

This function performs application search.

## When To Use

Use this page when code needs the `APEX_SEARCH.SEARCH` function. Confirm security, workspace, and session requirements for your calling context.

## Signature

```sql
APEX_SEARCH.SEARCH (
    p_search_static_ids      IN apex_t_varchar2,
    p_search_expression      IN VARCHAR2,
    p_apply_order_bys        IN VARCHAR2           DEFAULT 'Y',
    --
    p_return_total_row_count IN VARCHAR2           DEFAULT 'N' )
    RETURN apex_search_result_table pipelined;
```

## Parameters

| Parameter | Description |
| --- | --- |
| `p_search_static_ids` | List of Search Configuration Static IDs to search within. |
| `p_search_expression` | Terms to use in the search. |
| `p_apply_order_bys` | Whether to apply the sort settings defined in the search configuration. Pass N in when the query applies its own ORDER BY clause. |
| `p_return_total_row_count` | Whether to return the total row count. |

## Returns

This function returns a table of search results as defined by the apex_search_result_table object type. The following columns are available: The following column contents are based on the mapping within the Search Configuration:

## Important Notes

- Most APEX APIs assume the correct APEX workspace, application, and session context.
- Validate user-controlled values before passing them into administrative, security, SQL, or web-service APIs.
- Use the source link for exact behavior, defaults, and version-specific caveats.

## Simple Example

```sql
declare
    l_result APEX_SEARCH_RESULT_TABLE;
begin
    l_result := apex_search.SEARCH(
        p_search_static_ids => 'EXAMPLE_STATIC_ID',
        p_search_expression => 'EXAMPLE',
        p_apply_order_bys => 'EXAMPLE',
        p_return_total_row_count => 'EXAMPLE'
    );
    sys.dbms_output.put_line('Result captured.');
end;
/
```

## More Complex Example

```sql
declare
    l_result APEX_SEARCH_RESULT_TABLE;
begin
    -- Assuming this runs outside a normal APEX page request.
    apex_session.create_session(
        p_app_id   => 100,
        p_page_id  => 1,
        p_username => 'USER');

    l_result := apex_search.SEARCH(
            p_search_static_ids => 'EXAMPLE_STATIC_ID',
            p_search_expression => 'EXAMPLE',
            p_apply_order_bys => 'EXAMPLE',
            p_return_total_row_count => 'EXAMPLE'
        );

    apex_session.delete_session;
exception
    when others then
        apex_session.delete_session;
        raise;
end;
/
```

