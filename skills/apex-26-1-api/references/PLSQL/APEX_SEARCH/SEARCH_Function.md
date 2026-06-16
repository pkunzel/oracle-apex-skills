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

## Example

Use the pipelined SEARCH function in SQL rather than trying to assign it directly to a PL/SQL variable.

```sql
begin
    apex_json.open_array;

    for r in (
        select title, subtitle, url
          from table(
                   apex_search.search(
                       p_search_static_ids => apex_t_varchar2('ORDERS', 'CUSTOMERS'),
                       p_search_expression => :P10_SEARCH,
                       p_apply_order_bys   => 'Y'))
         fetch first 20 rows only
    ) loop
        apex_json.open_object;
        apex_json.write('title', r.title);
        apex_json.write('subtitle', r.subtitle);
        apex_json.write('url', r.url);
        apex_json.close_object;
    end loop;

    apex_json.close_array;
end;
/
```
