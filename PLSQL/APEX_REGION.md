# APEX_REGION

Source: [Oracle APEX 26.1 API Reference](https://docs.oracle.com/en/database/oracle/apex/26.1/aeapi/APEX_REGION.html)

Status: curated first-pass reference.

## Purpose

`APEX_REGION` is the server-side bridge to declarative APEX regions. It can resolve region IDs, open the current region data as an `APEX_EXEC.T_CONTEXT`, export current region data, reset report state, and manage region cache.

Use it when PL/SQL needs the data or state of an APEX region rather than a raw SQL query. Use `apex.region` JavaScript for client-side refresh, focus, and widget interaction.

## When To Use

Use `APEX_REGION` when:

- A page process needs to export a report region in its current view/report context.
- PL/SQL needs to iterate rows from a region using `APEX_EXEC`.
- Code needs to reset region settings or purge/clear region cache.
- You need a numeric region ID from a Static ID or region name.
- Interactive Report/Grid saved report IDs must be passed as `P_COMPONENT_ID`.

Avoid it for arbitrary SQL that does not belong to a region. Use `APEX_EXEC.OPEN_QUERY_CONTEXT` directly in that case.

## API Surface

| Need | Members |
| --- | --- |
| Resolve region identity | `GET_ID` |
| Read region rows | `OPEN_QUERY_CONTEXT` |
| Export region rows | `EXPORT_DATA` |
| Reset user/report state | `RESET` |
| Region cache lifecycle | `CLEAR`, `PURGE_CACHE`, `GET_CACHE_DATE` |
| Runtime checks | `IS_READ_ONLY` |

## Open Region Query Context

Assuming page 10 has a report region with Static ID `orders_report`:

```sql
declare
    l_context apex_exec.t_context;
begin
    l_context := apex_region.open_query_context(
        p_page_id   => 10,
        p_static_id => 'orders_report',
        p_max_rows  => 100);

    while apex_exec.next_row(l_context) loop
        apex_debug.info(
            'Order %s status %s',
            apex_exec.get_varchar2(l_context, 'ORDER_ID'),
            apex_exec.get_varchar2(l_context, 'STATUS'));
    end loop;

    apex_exec.close(l_context);
exception
    when others then
        apex_exec.close(l_context);
        raise;
end;
/
```

Use `P_COMPONENT_ID` for an Interactive Report or Interactive Grid saved report ID when a specific saved view must be used.

## Export A Region

Assuming the same `orders_report` region:

```sql
declare
    l_region_id number;
    l_export    apex_data_export.t_export;
begin
    l_region_id := apex_region.get_id(
        p_page_id       => 10,
        p_dom_static_id => 'orders_report');

    l_export := apex_region.export_data(
        p_format    => apex_data_export.c_format_csv,
        p_page_id   => 10,
        p_region_id => l_region_id,
        p_file_name => 'orders',
        p_max_rows  => 5000);

    apex_data_export.download(l_export);
end;
/
```

`EXPORT_DATA` is the fastest route when you want the current declarative region export behavior. Use `APEX_DATA_EXPORT` directly when the data source is not an APEX region.

## Reset Region State

```sql
declare
    l_region_id number;
begin
    l_region_id := apex_region.get_id(
        p_page_id       => 10,
        p_dom_static_id => 'orders_report');

    apex_region.reset(
        p_page_id   => 10,
        p_region_id => l_region_id);
end;
/
```

`RESET` applies to supported report and Region Display Selector regions. For Interactive Report and Interactive Grid saved reports, compare with `APEX_IR.RESET_REPORT` and `APEX_IG.RESET_REPORT`.

## Notes

- Prefer Static IDs for maintainable code, then resolve the numeric region ID with `GET_ID` when a member requires it.
- `OPEN_QUERY_CONTEXT` returns an `APEX_EXEC.T_CONTEXT`; close it in normal and exception paths.
- `P_OUTER_SQL` wraps the region SQL and should reference `#APEX$SOURCE_DATA#` for the source data placeholder.
- Use `P_PARENT_COLUMN_VALUES` for detail grids in Interactive Grid master-detail relationships.
- Enforce authorization before exporting or iterating region data that may include sensitive rows.

<!-- BEGIN GENERATED MEMBER LINKS -->

## Local Member Detail Pages

Generated navigation for LLM retrieval. Use the local detail page first, then follow the Oracle source link when exact wording or edge-case behavior must be verified.

| Member | Kind | Local detail | Source |
| --- | --- | --- | --- |
| CLEAR Procedure Signature 1 | procedure | [local](APEX_REGION/CLEAR_Procedure_Signature_1.md) | [Oracle](https://docs.oracle.com/en/database/oracle/apex/26.1/aeapi/APEX_REGION.CLEAR-Procedure-Signature-1.html) |
| CLEAR Procedure Signature 2 | procedure | [local](APEX_REGION/CLEAR_Procedure_Signature_2.md) | [Oracle](https://docs.oracle.com/en/database/oracle/apex/26.1/aeapi/APEX_REGION.CLEAR-Procedure-Signature-2.html) |
| EXPORT_DATA Function | function | [local](APEX_REGION/EXPORT_DATA_Function.md) | [Oracle](https://docs.oracle.com/en/database/oracle/apex/26.1/aeapi/APEX_REGION-EXPORT_DATA-Function.html) |
| GET_CACHE_DATE Function | function | [local](APEX_REGION/GET_CACHE_DATE_Function.md) | [Oracle](https://docs.oracle.com/en/database/oracle/apex/26.1/aeapi/APEX_REGION.GET_CACHE_DATE-Function.html) |
| GET_ID Function Signature 1 | function | [local](APEX_REGION/GET_ID_Function_Signature_1.md) | [Oracle](https://docs.oracle.com/en/database/oracle/apex/26.1/aeapi/APEX_REGION.GET_ID-Function-Signature-1.html) |
| GET_ID Function Signature 2 | function | [local](APEX_REGION/GET_ID_Function_Signature_2.md) | [Oracle](https://docs.oracle.com/en/database/oracle/apex/26.1/aeapi/APEX_REGION.GET_ID-Function-Signature-2.html) |
| IS_READ_ONLY Function | function | [local](APEX_REGION/IS_READ_ONLY_Function.md) | [Oracle](https://docs.oracle.com/en/database/oracle/apex/26.1/aeapi/APEX_REGION-IS_READ_ONLY-Function.html) |
| OPEN_QUERY_CONTEXT Function Signature 1 | function | [local](APEX_REGION/OPEN_QUERY_CONTEXT_Function_Signature_1.md) | [Oracle](https://docs.oracle.com/en/database/oracle/apex/26.1/aeapi/APEX_REGION-OPEN_QUERY_CONTEXT-Function-Signature-1.html) |
| OPEN_QUERY_CONTEXT Function Signature 2 | function | [local](APEX_REGION/OPEN_QUERY_CONTEXT_Function_Signature_2.md) | [Oracle](https://docs.oracle.com/en/database/oracle/apex/26.1/aeapi/APEX_REGION-OPEN_QUERY_CONTEXT-Function-Signature-2.html) |
| PURGE_CACHE Procedure Signature 1 | procedure | [local](APEX_REGION/PURGE_CACHE_Procedure_Signature_1.md) | [Oracle](https://docs.oracle.com/en/database/oracle/apex/26.1/aeapi/APEX_REGION.PURGE_CACHE-Procedure-Signature-1.html) |
| PURGE_CACHE Procedure Signature 2 | procedure | [local](APEX_REGION/PURGE_CACHE_Procedure_Signature_2.md) | [Oracle](https://docs.oracle.com/en/database/oracle/apex/26.1/aeapi/APEX_REGION.PURGE_CACHE-Procedure-Signature-2.html) |
| RESET Procedure Signature 1 | procedure | [local](APEX_REGION/RESET_Procedure_Signature_1.md) | [Oracle](https://docs.oracle.com/en/database/oracle/apex/26.1/aeapi/APEX_REGION.RESET-Procedure-Signature-1.html) |
| RESET Procedure Signature 2 | procedure | [local](APEX_REGION/RESET_Procedure_Signature_2.md) | [Oracle](https://docs.oracle.com/en/database/oracle/apex/26.1/aeapi/APEX_REGION.RESET-Procedure-Signature-2.html) |

<!-- END GENERATED MEMBER LINKS -->
