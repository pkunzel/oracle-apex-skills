# APEX_SEARCH

Source: [Oracle APEX 26.1 API Reference](https://docs.oracle.com/en/database/oracle/apex/26.1/aeapi/APEX_SEARCH.html)

Status: curated first-pass reference.

## Purpose

`APEX_SEARCH` runs APEX Search Configurations from PL/SQL and returns search result rows through pipelined table functions. It lets code reuse declarative application search definitions instead of duplicating SQL.

Use it for custom search pages, Ajax search suggestions, search diagnostics, or server-side processes that need the same search behavior as declarative APEX Search.

## API Surface

| Need | Members |
| --- | --- |
| Search configured sources | `SEARCH` |
| Search engine query | `QUERY_SEARCH_ENGINE` |
| Expert search query | `QUERY_EXPERT_SEARCH` |

## Search Declarative Configurations

Assuming app `100` has Search Configuration static IDs `ORDERS` and `CUSTOMERS`:

```sql
select title,
       subtitle,
       description,
       badge,
       url
  from table(
           apex_search.search(
               p_search_static_ids => apex_t_varchar2('ORDERS', 'CUSTOMERS'),
               p_search_expression => :P10_SEARCH,
               p_apply_order_bys   => 'Y'))
 fetch first 20 rows only;
```

Use this in a report region query or a process that needs structured search results.

## Ajax Search Suggestions

```sql
begin
    apex_json.open_array;

    for r in (
        select title, url
          from table(
                   apex_search.search(
                       p_search_static_ids => apex_t_varchar2('ORDERS'),
                       p_search_expression => apex_application.g_x01))
         fetch first 10 rows only
    ) loop
        apex_json.open_object;
        apex_json.write('label', r.title);
        apex_json.write('url', r.url);
        apex_json.close_object;
    end loop;

    apex_json.close_array;
end;
/
```

Client code can call this with `apex.server.process` and render the returned suggestions.

## Include Total Count

```sql
select *
  from table(
           apex_search.search(
               p_search_static_ids      => apex_t_varchar2('ORDERS'),
               p_search_expression      => :P10_SEARCH,
               p_return_total_row_count => 'Y'));
```

Use total row counts only when the UI needs them; counts can make searches more expensive.

## Safety Notes

- Search configuration static IDs must exist in the application.
- Treat search expressions as user input. Let APEX Search handle the configured source logic; do not concatenate search text into custom SQL.
- Limit result counts for Ajax suggestions.
- Respect authorization on target pages and source data.
- Use configured order-by behavior unless a calling query deliberately handles sorting.

## Related APIs

- [APEX_JSON](APEX_JSON.md) for Ajax search responses.
- [apex.server](../JavaScript/apex.server.md) for calling search processes.
- [APEX_REGION](APEX_REGION.md) for region-based query/export behavior.

<!-- BEGIN GENERATED MEMBER LINKS -->

## Local Member Detail Pages

Generated navigation for LLM retrieval. Use the local detail page first, then follow the Oracle source link when exact wording or edge-case behavior must be verified.

| Member | Kind | Local detail | Source |
| --- | --- | --- | --- |
| QUERY_EXPERT_SEARCH Function | function | [local](APEX_SEARCH/QUERY_EXPERT_SEARCH_Function.md) | [Oracle](https://docs.oracle.com/en/database/oracle/apex/26.1/aeapi/QUERY_EXPERT_SEARCH-Function.html) |
| QUERY_SEARCH_ENGINE Function | function | [local](APEX_SEARCH/QUERY_SEARCH_ENGINE_Function.md) | [Oracle](https://docs.oracle.com/en/database/oracle/apex/26.1/aeapi/QUERY_SEARCH_ENGINE-Function.html) |
| SEARCH Function | function | [local](APEX_SEARCH/SEARCH_Function.md) | [Oracle](https://docs.oracle.com/en/database/oracle/apex/26.1/aeapi/APEX_SEARCH.SEARCH-Function.html) |

<!-- END GENERATED MEMBER LINKS -->
