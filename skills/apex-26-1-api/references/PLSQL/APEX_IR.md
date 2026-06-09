# APEX_IR

Source: [Oracle APEX 26.1 API Reference](https://docs.oracle.com/en/database/oracle/apex/26.1/aeapi/APEX_IR.html)

Status: curated first-pass reference.

## Purpose

`APEX_IR` manages Interactive Report state and saved reports from PL/SQL. It can add filters, clear or reset report settings, clone/delete/import/export saved reports, change report owners, and manage subscriptions.

This is server-side report-state management. For client-side selection, refresh, or current row behavior, use the JavaScript `interactiveReportRegion` interface through `apex.region`.

## When To Use

Use `APEX_IR` when:

- A branch, process, or button should apply a server-side filter before showing an Interactive Report.
- Report settings need to be cleared or reset to developer defaults.
- Saved reports need administrative lifecycle operations.
- Subscriptions or report ownership need to be changed by trusted PL/SQL code.
- You need the last viewed report ID for the current user/session.

Avoid using the legacy item-rendering helpers for new UI. Prefer declarative components, page items, or modern plug-ins.

## API Surface

| Need | Members |
| --- | --- |
| Filter report settings | `ADD_FILTER` |
| Clear or reset state | `CLEAR_REPORT`, `RESET_REPORT` |
| Saved report lifecycle | `CLONE_REPORT`, `DELETE_REPORT`, `EXPORT_SAVED_REPORTS`, `IMPORT_SAVED_REPORTS` |
| Ownership/subscriptions | `CHANGE_REPORT_OWNER`, `CHANGE_SUBSCRIPTION_EMAIL`, `CHANGE_SUBSCRIPTION_LANG`, `DELETE_SUBSCRIPTION` |
| Current report lookup | `GET_LAST_VIEWED_REPORT_ID` |
| Deprecated report inspection | `GET_REPORT` |
| Legacy item helpers | `CHECKBOX2`, `SELECT_LIST`, `TEXT`, and other chapter 37 functions |

## Add A Filter To The Current Report

Assuming page 10 has an Interactive Report region with Static ID `orders_ir` and a SQL column `STATUS`:

```sql
declare
    l_region_id number;
    l_report_id number;
begin
    l_region_id := apex_region.get_id(
        p_page_id       => 10,
        p_dom_static_id => 'orders_ir');

    l_report_id := apex_ir.get_last_viewed_report_id(
        p_page_id   => 10,
        p_region_id => 'orders_ir');

    apex_ir.add_filter(
        p_page_id       => 10,
        p_region_id     => l_region_id,
        p_report_column => 'STATUS',
        p_filter_value  => 'OPEN',
        p_operator_abbr => 'EQ',
        p_report_id     => l_report_id);
end;
/
```

Use column names or aliases from the report SQL. For `IN` and `NIN`, follow the local member page guidance for comma-separated values wrapped in backslashes.

## Reset Or Clear Report State

```sql
declare
    l_region_id number;
    l_report_id number;
begin
    l_region_id := apex_region.get_id(
        p_page_id       => 10,
        p_dom_static_id => 'orders_ir');

    l_report_id := apex_ir.get_last_viewed_report_id(
        p_page_id   => 10,
        p_region_id => 'orders_ir');

    apex_ir.clear_report(
        p_page_id   => 10,
        p_region_id => l_region_id,
        p_report_id => l_report_id);

    apex_ir.reset_report(
        p_page_id   => 10,
        p_region_id => l_region_id,
        p_report_id => l_report_id);
end;
/
```

`CLEAR_REPORT` clears report settings. `RESET_REPORT` resets settings to the developer-defined defaults. Use one intentionally; calling both is shown only to contrast their signatures.

## Saved Report Administration

Assuming trusted admin code receives report and subscription IDs from protected admin page items:

```sql
declare
    l_report_id       number := :P30_REPORT_ID;
    l_subscription_id number := :P30_SUBSCRIPTION_ID;
begin
    apex_ir.change_report_owner(
        p_report_id => l_report_id,
        p_old_owner => :P30_OLD_OWNER,
        p_new_owner => 'MGRACE');

    apex_ir.delete_subscription(
        p_subscription_id => l_subscription_id);
end;
/
```

Administrative routines should be protected by authorization checks and audit logging.

## Notes

- `P_REPORT_ID => NULL` targets the last viewed report settings for many routines.
- `GET_LAST_VIEWED_REPORT_ID` accepts the region Static ID or region ID as a string.
- `ADD_FILTER` uses `P_REPORT_COLUMN`; `APEX_IG.ADD_FILTER` uses `P_COLUMN_NAME`.
- `GET_REPORT` is deprecated; use supported report/export/query patterns instead.
- Chapter 37 functions are legacy rendering helpers and are not Interactive Report management APIs.

<!-- BEGIN GENERATED MEMBER LINKS -->

## Local Member Detail Pages

Generated navigation for LLM retrieval. Use the local detail page first, then follow the Oracle source link when exact wording or edge-case behavior must be verified.

| Member | Kind | Local detail | Source |
| --- | --- | --- | --- |
| Constants and Data Types | constants | [local](APEX_IR/Constants_and_Data_Types.md) | [Oracle](https://docs.oracle.com/en/database/oracle/apex/26.1/aeapi/APEX_IR.Constants-Data-Types.html) |
| ADD_FILTER Procedure Signature 1 | procedure | [local](APEX_IR/ADD_FILTER_Procedure_Signature_1.md) | [Oracle](https://docs.oracle.com/en/database/oracle/apex/26.1/aeapi/ADD_FILTER-Procedure-Signature-1.html) |
| ADD_FILTER Procedure Signature 2 | procedure | [local](APEX_IR/ADD_FILTER_Procedure_Signature_2.md) | [Oracle](https://docs.oracle.com/en/database/oracle/apex/26.1/aeapi/ADD_FILTER-Procedure-Signature-2.html) |
| ADD_FILTER Procedure Signature 3 | procedure | [local](APEX_IR/ADD_FILTER_Procedure_Signature_3.md) | [Oracle](https://docs.oracle.com/en/database/oracle/apex/26.1/aeapi/ADD_FILTER-Procedure-Signature-3.html) |
| CHANGE_REPORT_OWNER Procedure | procedure | [local](APEX_IR/CHANGE_REPORT_OWNER_Procedure.md) | [Oracle](https://docs.oracle.com/en/database/oracle/apex/26.1/aeapi/CHANGE_REPORT_OWNER-Procedure.html) |
| CHANGE_SUBSCRIPTION_EMAIL Procedure | procedure | [local](APEX_IR/CHANGE_SUBSCRIPTION_EMAIL_Procedure.md) | [Oracle](https://docs.oracle.com/en/database/oracle/apex/26.1/aeapi/CHANGE_SUBSCRIPTION_EMAIL-Procedure.html) |
| CHANGE_SUBSCRIPTION_LANG Procedure | procedure | [local](APEX_IR/CHANGE_SUBSCRIPTION_LANG_Procedure.md) | [Oracle](https://docs.oracle.com/en/database/oracle/apex/26.1/aeapi/CHANGE_SUBSCRIPTION_LANG-Procedure.html) |
| CLEAR_REPORT Procedure Signature 1 | procedure | [local](APEX_IR/CLEAR_REPORT_Procedure_Signature_1.md) | [Oracle](https://docs.oracle.com/en/database/oracle/apex/26.1/aeapi/CLEAR_REPORT-Procedure-Signature-1.html) |
| CLEAR_REPORT Procedure Signature 2 | procedure | [local](APEX_IR/CLEAR_REPORT_Procedure_Signature_2.md) | [Oracle](https://docs.oracle.com/en/database/oracle/apex/26.1/aeapi/CLEAR_REPORT-Procedure-Signature-2.html) |
| CLEAR_REPORT Procedure Signature 3 | procedure | [local](APEX_IR/CLEAR_REPORT_Procedure_Signature_3.md) | [Oracle](https://docs.oracle.com/en/database/oracle/apex/26.1/aeapi/CLEAR_REPORT-Procedure-Signature-3.html) |
| CLONE_REPORT Function | function | [local](APEX_IR/CLONE_REPORT_Function.md) | [Oracle](https://docs.oracle.com/en/database/oracle/apex/26.1/aeapi/CLONE_REPORT-Function.html) |
| DELETE_REPORT Procedure | procedure | [local](APEX_IR/DELETE_REPORT_Procedure.md) | [Oracle](https://docs.oracle.com/en/database/oracle/apex/26.1/aeapi/DELETE_REPORT-Procedure.html) |
| DELETE_SUBSCRIPTION Procedure | procedure | [local](APEX_IR/DELETE_SUBSCRIPTION_Procedure.md) | [Oracle](https://docs.oracle.com/en/database/oracle/apex/26.1/aeapi/DELETE_SUBSCRIPTION-Procedure.html) |
| EXPORT_SAVED_REPORTS Function | function | [local](APEX_IR/EXPORT_SAVED_REPORTS_Function.md) | [Oracle](https://docs.oracle.com/en/database/oracle/apex/26.1/aeapi/EXPORT_SAVED_REPORTS-Function.html) |
| GET_LAST_VIEWED_REPORT_ID Function | function | [local](APEX_IR/GET_LAST_VIEWED_REPORT_ID_Function.md) | [Oracle](https://docs.oracle.com/en/database/oracle/apex/26.1/aeapi/GET_LAST_VIEWED_REPORT_ID-Function-Signature-1.html) |
| GET_REPORT Function (Deprecated) | function | [local](APEX_IR/GET_REPORT_Function_(Deprecated).md) | [Oracle](https://docs.oracle.com/en/database/oracle/apex/26.1/aeapi/GET_REPORT-Function.html) |
| IMPORT_SAVED_REPORTS Procedure | procedure | [local](APEX_IR/IMPORT_SAVED_REPORTS_Procedure.md) | [Oracle](https://docs.oracle.com/en/database/oracle/apex/26.1/aeapi/IMPORT_SAVED_REPORTS-Procedure.html) |
| RESET_REPORT Procedure Signature 1 | procedure | [local](APEX_IR/RESET_REPORT_Procedure_Signature_1.md) | [Oracle](https://docs.oracle.com/en/database/oracle/apex/26.1/aeapi/RESET_REPORT-Procedure-Signature-1.html) |
| RESET_REPORT Procedure Signature 2 | procedure | [local](APEX_IR/RESET_REPORT_Procedure_Signature_2.md) | [Oracle](https://docs.oracle.com/en/database/oracle/apex/26.1/aeapi/RESET_REPORT-Procedure-Signature-2.html) |
| RESET_REPORT Procedure Signature 3 | procedure | [local](APEX_IR/RESET_REPORT_Procedure_Signature_3.md) | [Oracle](https://docs.oracle.com/en/database/oracle/apex/26.1/aeapi/RESET_REPORT-Procedure-Signature-3.html) |
| CHECKBOX2 Function | function | [local](APEX_IR/CHECKBOX2_Function.md) | [Oracle](https://docs.oracle.com/en/database/oracle/apex/26.1/aeapi/CHECKBOX2-Function.html) |
| DATE_POPUP Function | function | [local](APEX_IR/DATE_POPUP_Function.md) | [Oracle](https://docs.oracle.com/en/database/oracle/apex/26.1/aeapi/DATE_POPUP-Function.html) |
| DATE_POPUP2 Function | function | [local](APEX_IR/DATE_POPUP2_Function.md) | [Oracle](https://docs.oracle.com/en/database/oracle/apex/26.1/aeapi/DATE_POPUP2-Function.html) |
| DISPLAY_AND_SAVE Function | function | [local](APEX_IR/DISPLAY_AND_SAVE_Function.md) | [Oracle](https://docs.oracle.com/en/database/oracle/apex/26.1/aeapi/DISPLAY_AND_SAVE-Function.html) |
| HIDDEN Function | function | [local](APEX_IR/HIDDEN_Function.md) | [Oracle](https://docs.oracle.com/en/database/oracle/apex/26.1/aeapi/HIDDEN-Function.html) |
| MD5_CHECKSUM Function | function | [local](APEX_IR/MD5_CHECKSUM_Function.md) | [Oracle](https://docs.oracle.com/en/database/oracle/apex/26.1/aeapi/MD5_CHECKSUM-Function.html) |
| MD5_HIDDEN Function | function | [local](APEX_IR/MD5_HIDDEN_Function.md) | [Oracle](https://docs.oracle.com/en/database/oracle/apex/26.1/aeapi/MD5_HIDDEN-Function.html) |
| POPUP_FROM_LOV Function | function | [local](APEX_IR/POPUP_FROM_LOV_Function.md) | [Oracle](https://docs.oracle.com/en/database/oracle/apex/26.1/aeapi/POPUP_FROM_LOV-Function.html) |
| POPUP_FROM_QUERY Function | function | [local](APEX_IR/POPUP_FROM_QUERY_Function.md) | [Oracle](https://docs.oracle.com/en/database/oracle/apex/26.1/aeapi/POPUP_FROM_QUERY-Function.html) |
| POPUPKEY_FROM_LOV Function | function | [local](APEX_IR/POPUPKEY_FROM_LOV_Function.md) | [Oracle](https://docs.oracle.com/en/database/oracle/apex/26.1/aeapi/POPUPKEY_FROM_LOV-Function.html) |
| POPUPKEY_FROM_QUERY Function | function | [local](APEX_IR/POPUPKEY_FROM_QUERY_Function.md) | [Oracle](https://docs.oracle.com/en/database/oracle/apex/26.1/aeapi/POPUPKEY_FROM_QUERY-Function.html) |
| RADIOGROUP Function | function | [local](APEX_IR/RADIOGROUP_Function.md) | [Oracle](https://docs.oracle.com/en/database/oracle/apex/26.1/aeapi/RADIOGROUP-Function.html) |
| SELECT_LIST Function | function | [local](APEX_IR/SELECT_LIST_Function.md) | [Oracle](https://docs.oracle.com/en/database/oracle/apex/26.1/aeapi/SELECT_LIST-Function.html) |
| SELECT_LIST_FROM_LOV Function | function | [local](APEX_IR/SELECT_LIST_FROM_LOV_Function.md) | [Oracle](https://docs.oracle.com/en/database/oracle/apex/26.1/aeapi/SELECT_LIST_FROM_LOV-Function.html) |
| SELECT_LIST_FROM_LOV_XL Function | function | [local](APEX_IR/SELECT_LIST_FROM_LOV_XL_Function.md) | [Oracle](https://docs.oracle.com/en/database/oracle/apex/26.1/aeapi/SELECT_LIST_FROM_LOV_XL-Function.html) |
| SELECT_LIST_FROM_QUERY Function | function | [local](APEX_IR/SELECT_LIST_FROM_QUERY_Function.md) | [Oracle](https://docs.oracle.com/en/database/oracle/apex/26.1/aeapi/SELECT_LIST_FROM_QUERY-Function.html) |
| SELECT_LIST_FROM_QUERY_XL Function | function | [local](APEX_IR/SELECT_LIST_FROM_QUERY_XL_Function.md) | [Oracle](https://docs.oracle.com/en/database/oracle/apex/26.1/aeapi/SELECT_LIST_FROM_QUERY_XL-Function.html) |
| SWITCH Function | function | [local](APEX_IR/SWITCH_Function.md) | [Oracle](https://docs.oracle.com/en/database/oracle/apex/26.1/aeapi/SWITCH-Function.html) |
| TEXT Function | function | [local](APEX_IR/TEXT_Function.md) | [Oracle](https://docs.oracle.com/en/database/oracle/apex/26.1/aeapi/TEXT-Function.html) |
| TEXTAREA Function | function | [local](APEX_IR/TEXTAREA_Function.md) | [Oracle](https://docs.oracle.com/en/database/oracle/apex/26.1/aeapi/TEXTAREA-Function.html) |
| TEXT_FROM_LOV Function | function | [local](APEX_IR/TEXT_FROM_LOV_Function.md) | [Oracle](https://docs.oracle.com/en/database/oracle/apex/26.1/aeapi/TEXT_FROM_LOV-Function.html) |
| TEXT_FROM_LOV_QUERY Function | function | [local](APEX_IR/TEXT_FROM_LOV_QUERY_Function.md) | [Oracle](https://docs.oracle.com/en/database/oracle/apex/26.1/aeapi/TEXT_FROM_LOV_QUERY-Function.html) |

<!-- END GENERATED MEMBER LINKS -->
