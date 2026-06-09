# APEX_PAGE

Source: [Oracle APEX 26.1 API Reference](https://docs.oracle.com/en/database/oracle/apex/26.1/aeapi/APEX_PAGE.html)

Status: curated first-pass reference.

## Purpose

`APEX_PAGE` provides server-side helpers for APEX page URLs, page mode metadata, page cache lifecycle, and read-only checks. It is most often used to build correct `f?p=` URLs from PL/SQL and to manage page-level cache.

Use JavaScript `apex.navigation` for client-side navigation. Use `APEX_PAGE.GET_URL` when a URL is generated in SQL, PL/SQL, report columns, email bodies, or server-rendered plug-in output.

## When To Use

Use `APEX_PAGE` when:

- PL/SQL needs a maintainable URL to another APEX page.
- A link must pass request, clear-cache, item names, item values, hash, or dialog triggering element.
- Code needs to know whether a page is normal, modal, or another page mode.
- A process must purge cached page output after data changes.
- A process should skip data mutation when the current page is rendered read-only.

Avoid deprecated UI-type helpers for new work.

## API Surface

| Need | Members |
| --- | --- |
| Generate links | `GET_URL` |
| Page mode metadata | `GET_PAGE_MODE`, `Global Constants` |
| Cache status/lifecycle | `GET_CACHE_DATE`, `PURGE_CACHE` |
| Runtime read-only check | `IS_READ_ONLY` |
| Deprecated UI helpers | `GET_UI_TYPE`, `IS_DESKTOP_UI` |

## Build A Page URL

Assuming a report column needs a link to page 20 and passes `P20_ORDER_ID`:

```sql
select order_id,
       customer_name,
       apex_page.get_url(
           p_page        => 20,
           p_items       => 'P20_ORDER_ID',
           p_values      => order_id,
           p_clear_cache => '20') as order_url
  from orders;
```

Use `APEX_ESCAPE.HTML_ATTRIBUTE` when placing a generated URL into hand-written HTML attributes.

## Dialog URL From PL/SQL

Assuming button Static ID `edit_order_btn` opens modal page 30:

```sql
declare
    l_url varchar2(32767);
begin
    l_url := apex_page.get_url(
        p_page               => 30,
        p_items              => 'P30_ORDER_ID',
        p_values             => :P20_ORDER_ID,
        p_triggering_element => '#edit_order_btn');

    apex_debug.info('Dialog URL: %s', l_url);
end;
/
```

`P_TRIGGERING_ELEMENT` matters for modal dialog support.

## Read-Only Guard

```sql
begin
    if apex_page.is_read_only then
        raise_application_error(-20000, 'This page is currently read-only.');
    end if;

    update orders
       set status = :P20_STATUS
     where order_id = :P20_ORDER_ID;
end;
/
```

Use this as an extra guard. It does not replace authorization, validation, or optimistic locking.

## Purge Page Cache

```sql
begin
    apex_page.purge_cache(
        p_application_id       => apex_application.g_flow_id,
        p_page_id              => 20,
        p_user_name            => apex_application.g_user,
        p_current_session_only => false);
end;
/
```

Pass `P_PAGE_ID => NULL` only when intentionally purging all cached pages in the application.

## Notes

- `GET_URL` defaults application and session to the current request.
- `P_ITEMS` and `P_VALUES` are comma-delimited; avoid unescaped commas or use a safer flow such as setting session state before linking.
- Use `P_PLAIN_URL => TRUE` when generating a plain link from modal-dialog context and the dialog close wrapper is not wanted.
- Use `P_ABSOLUTE_URL => TRUE` for links sent outside the current browser context, such as email.
- Deprecated UI-type helpers remain indexed for legacy maintenance only.

<!-- BEGIN GENERATED MEMBER LINKS -->

## Local Member Detail Pages

Generated navigation for LLM retrieval. Use the local detail page first, then follow the Oracle source link when exact wording or edge-case behavior must be verified.

| Member | Kind | Local detail | Source |
| --- | --- | --- | --- |
| Global Constants | constants | [local](APEX_PAGE/Global_Constants.md) | [Oracle](https://docs.oracle.com/en/database/oracle/apex/26.1/aeapi/APEX_PAGE-Global-Constants.html) |
| GET_CACHE_DATE Function | function | [local](APEX_PAGE/GET_CACHE_DATE_Function.md) | [Oracle](https://docs.oracle.com/en/database/oracle/apex/26.1/aeapi/APEX_PAGE.GET_CACHE_DATA-Function.html) |
| GET_PAGE_MODE Function | function | [local](APEX_PAGE/GET_PAGE_MODE_Function.md) | [Oracle](https://docs.oracle.com/en/database/oracle/apex/26.1/aeapi/GET_PAGE_MODE-Function.html) |
| GET_UI_TYPE Function (Deprecated) | function | [local](APEX_PAGE/GET_UI_TYPE_Function_(Deprecated).md) | [Oracle](https://docs.oracle.com/en/database/oracle/apex/26.1/aeapi/GET_UI_TYPE-Function.html) |
| GET_URL Function | function | [local](APEX_PAGE/GET_URL_Function.md) | [Oracle](https://docs.oracle.com/en/database/oracle/apex/26.1/aeapi/GET_URL-Function.html) |
| IS_DESKTOP_UI Function (Deprecated) | function | [local](APEX_PAGE/IS_DESKTOP_UI_Function_(Deprecated).md) | [Oracle](https://docs.oracle.com/en/database/oracle/apex/26.1/aeapi/IS_DESKTOP_UI-Function.html) |
| IS_READ_ONLY Function | function | [local](APEX_PAGE/IS_READ_ONLY_Function.md) | [Oracle](https://docs.oracle.com/en/database/oracle/apex/26.1/aeapi/APEX_PAGE-IS_READ_ONLY-Function.html) |
| PURGE_CACHE Procedure | procedure | [local](APEX_PAGE/PURGE_CACHE_Procedure.md) | [Oracle](https://docs.oracle.com/en/database/oracle/apex/26.1/aeapi/PURGE_CACHE-Procedure.html) |

<!-- END GENERATED MEMBER LINKS -->
