# APEX_IG

Source: [Oracle APEX 26.1 API Reference](https://docs.oracle.com/en/database/oracle/apex/26.1/aeapi/APEX_IG.html)

Status: curated first-pass reference.

## Purpose

`APEX_IG` manages Interactive Grid saved report state from PL/SQL. It can add filters, clear/reset report settings, change report ownership, delete saved reports, and find the last viewed report ID.

This package does not manipulate currently selected rows or editable grid models in the browser. Use the JavaScript `interactiveGrid` and `interactiveGridView` interfaces for runtime widget behavior.

## When To Use

Use `APEX_IG` when:

- A server-side process should apply an Interactive Grid filter before redirecting or refreshing.
- The current user's last viewed IG report needs to be cleared or reset.
- Trusted admin code needs to change report ownership or delete saved reports.
- PL/SQL needs the report ID for the current page and region.

Avoid deprecated signature 2 of `ADD_FILTER` for new work. Prefer signatures that use report IDs and current package parameter names.

## API Surface

| Need | Members |
| --- | --- |
| Filter IG report settings | `ADD_FILTER` |
| Clear or reset state | `CLEAR_REPORT`, `RESET_REPORT` |
| Saved report lifecycle | `DELETE_REPORT`, `CHANGE_REPORT_OWNER` |
| Current report lookup | `GET_LAST_VIEWED_REPORT_ID` |
| Deprecated API | `ADD_FILTER` Signature 2 |

## Add A Column Filter

Assuming page 20 has an Interactive Grid region with Static ID `orders_ig` and a SQL column `STATUS`:

```sql
declare
    l_region_id number;
    l_report_id number;
begin
    l_region_id := apex_region.get_id(
        p_page_id       => 20,
        p_dom_static_id => 'orders_ig');

    l_report_id := apex_ig.get_last_viewed_report_id(
        p_page_id   => 20,
        p_region_id => 'orders_ig');

    apex_ig.add_filter(
        p_page_id       => 20,
        p_region_id     => l_region_id,
        p_column_name   => 'STATUS',
        p_filter_value  => 'OPEN',
        p_operator_abbr => 'EQ',
        p_report_id     => l_report_id);
end;
/
```

For a row search rather than a column filter, inspect the `ADD_FILTER` member pages and omit `P_COLUMN_NAME` where the chosen signature allows it.

## Clear Or Reset Report Settings

```sql
declare
    l_region_id number;
    l_report_id number;
begin
    l_region_id := apex_region.get_id(
        p_page_id       => 20,
        p_dom_static_id => 'orders_ig');

    l_report_id := apex_ig.get_last_viewed_report_id(
        p_page_id   => 20,
        p_region_id => 'orders_ig');

    apex_ig.clear_report(
        p_page_id   => 20,
        p_region_id => l_region_id,
        p_report_id => l_report_id);

    apex_ig.reset_report(
        p_page_id   => 20,
        p_region_id => l_region_id,
        p_report_id => l_report_id);
end;
/
```

Use either `CLEAR_REPORT` or `RESET_REPORT` based on the desired behavior. The example shows both to highlight matching signatures.

## Delete A Saved Report

Assuming `P20_REPORT_ID` contains a saved Interactive Grid report ID selected by an authorized administrator:

```sql
begin
    apex_ig.delete_report(
        p_report_id => :P20_REPORT_ID);
end;
/
```

Protect delete and ownership changes with authorization checks and audit logging.

## Notes

- `P_REPORT_ID => NULL` targets the last viewed report settings for many routines.
- `GET_LAST_VIEWED_REPORT_ID` accepts the region Static ID or region ID as a string.
- `ADD_FILTER` uses `P_COLUMN_NAME`; `APEX_IR.ADD_FILTER` uses `P_REPORT_COLUMN`.
- Use `APEX_REGION.OPEN_QUERY_CONTEXT` or `APEX_REGION.EXPORT_DATA` to read/export IG region data from PL/SQL.
- Use JavaScript `interactiveGrid` APIs for selected records, models, edit mode, actions, and toolbar behavior.

<!-- BEGIN GENERATED MEMBER LINKS -->

## Local Member Detail Pages

Generated navigation for LLM retrieval. Use the local detail page first, then follow the Oracle source link when exact wording or edge-case behavior must be verified.

| Member | Kind | Local detail | Source |
| --- | --- | --- | --- |
| ADD_FILTER Procedure Signature 1 | procedure | [local](APEX_IG/ADD_FILTER_Procedure_Signature_1.md) | [Oracle](https://docs.oracle.com/en/database/oracle/apex/26.1/aeapi/APEX_IG-ADD_FILTER-Procedure-Signature-1.html) |
| ADD_FILTER Procedure Signature 2 (Deprecated) | procedure | [local](APEX_IG/ADD_FILTER_Procedure_Signature_2_(Deprecated).md) | [Oracle](https://docs.oracle.com/en/database/oracle/apex/26.1/aeapi/APEX_IG-ADD_FILTER-Procedure-Signature-2.html) |
| ADD_FILTER Procedure Signature 3 | procedure | [local](APEX_IG/ADD_FILTER_Procedure_Signature_3.md) | [Oracle](https://docs.oracle.com/en/database/oracle/apex/26.1/aeapi/APEX_IG-ADD_FILTER-Procedure-Signature-3.html) |
| CHANGE_REPORT_OWNER Procedure | procedure | [local](APEX_IG/CHANGE_REPORT_OWNER_Procedure.md) | [Oracle](https://docs.oracle.com/en/database/oracle/apex/26.1/aeapi/APEX_IG-CHANGE_REPORT_OWNER-Procedure.html) |
| CLEAR_REPORT Procedure Signature 1 | procedure | [local](APEX_IG/CLEAR_REPORT_Procedure_Signature_1.md) | [Oracle](https://docs.oracle.com/en/database/oracle/apex/26.1/aeapi/APEX_IG-CLEAR_REPORT-Procedure-Signature-1.html) |
| CLEAR_REPORT Procedure Signature 2 | procedure | [local](APEX_IG/CLEAR_REPORT_Procedure_Signature_2.md) | [Oracle](https://docs.oracle.com/en/database/oracle/apex/26.1/aeapi/APEX_IG-CLEAR_REPORT-Procedure-Signature-2.html) |
| CLEAR_REPORT Procedure Signature 3 | procedure | [local](APEX_IG/CLEAR_REPORT_Procedure_Signature_3.md) | [Oracle](https://docs.oracle.com/en/database/oracle/apex/26.1/aeapi/APEX_IG-CLEAR_REPORT-Procedure-Signature-3.html) |
| DELETE_REPORT Procedure | procedure | [local](APEX_IG/DELETE_REPORT_Procedure.md) | [Oracle](https://docs.oracle.com/en/database/oracle/apex/26.1/aeapi/APEX_IG-DELETE_REPORT-Procedure.html) |
| GET_LAST_VIEWED_REPORT_ID Function | function | [local](APEX_IG/GET_LAST_VIEWED_REPORT_ID_Function.md) | [Oracle](https://docs.oracle.com/en/database/oracle/apex/26.1/aeapi/APEX_IG-GET_LAST_VIEWED_REPORT_ID-Function-Signature-1.html) |
| RESET_REPORT Procedure Signature 1 | procedure | [local](APEX_IG/RESET_REPORT_Procedure_Signature_1.md) | [Oracle](https://docs.oracle.com/en/database/oracle/apex/26.1/aeapi/APEX_IG-RESET_REPORT-Procedure-Signature-1.html) |
| RESET_REPORT Procedure Signature 2 | procedure | [local](APEX_IG/RESET_REPORT_Procedure_Signature_2.md) | [Oracle](https://docs.oracle.com/en/database/oracle/apex/26.1/aeapi/APEX_IG-RESET_REPORT-Procedure-Signature-2.html) |
| RESET_REPORT Procedure Signature 3 | procedure | [local](APEX_IG/RESET_REPORT_Procedure_Signature_3.md) | [Oracle](https://docs.oracle.com/en/database/oracle/apex/26.1/aeapi/APEX_IG-RESET_REPORT-Procedure-Signature-3.html) |

<!-- END GENERATED MEMBER LINKS -->
