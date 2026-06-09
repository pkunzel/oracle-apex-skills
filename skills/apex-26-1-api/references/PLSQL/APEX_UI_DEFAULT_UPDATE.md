# APEX_UI_DEFAULT_UPDATE

Source: [Oracle APEX 26.1 API Reference](https://docs.oracle.com/en/database/oracle/apex/26.1/aeapi/APEX_UI_DEFAULT_UPDATE.html)

Status: curated first-pass reference.

## Purpose

`APEX_UI_DEFAULT_UPDATE` updates table-based User Interface Defaults and the Attribute Dictionary. UI Defaults influence how APEX creates future forms and reports: labels, help text, required flags, display order, masks, alignment, and related generation hints.

## When To Use

Use it before generating pages/components from tables, especially in build scripts or workspace standards automation. It affects future component generation more than already-built pages.

Do not use it for live page item changes at runtime; update the actual page/component metadata or item attributes instead.

## API Surface

| Area | Members |
| --- | --- |
| Table defaults | `SYNCH_TABLE`, `UPD_TABLE`, `DEL_TABLE` |
| Column defaults | `UPD_COLUMN`, `DEL_COLUMN`, `UPD_LABEL`, `UPD_ITEM_HELP`, `UPD_DISPLAY_IN_FORM`, `UPD_DISPLAY_IN_REPORT`, `UPD_ITEM_DISPLAY_WIDTH`, `UPD_ITEM_DISPLAY_HEIGHT`, `UPD_ITEM_FORMAT_MASK`, `UPD_REPORT_FORMAT_MASK`, `UPD_REPORT_ALIGNMENT` |
| Groups | `UPD_GROUP`, `DEL_GROUP`, `UPD_FORM_REGION_TITLE`, `UPD_REPORT_REGION_TITLE` |
| Attribute Dictionary | `ADD_AD_COLUMN`, `UPD_AD_COLUMN`, `DEL_AD_COLUMN`, `ADD_AD_SYNONYM`, `UPD_AD_SYNONYM`, `DEL_AD_SYNONYM` |

## Sync Table Example

Assuming table `DEMO_ORDERS` exists and should have UI Defaults generated or synchronized:

```sql
begin
    apex_ui_default_update.synch_table(
        p_table_name => 'DEMO_ORDERS');
end;
/
```

## Column Defaults Example

```sql
begin
    apex_ui_default_update.upd_column(
        p_table_name         => 'DEMO_ORDERS',
        p_column_name        => 'ORDER_TOTAL',
        p_label              => 'Order Total',
        p_help_text          => 'Total amount for the order.',
        p_display_in_form    => 'Y',
        p_display_seq_form   => '40',
        p_mask_form          => 'FML999G999G990D00',
        p_required           => 'Y',
        p_display_in_report  => 'Y',
        p_display_seq_report => '40',
        p_mask_report        => 'FML999G999G990D00',
        p_alignment          => 'R');
end;
/
```

## Attribute Dictionary Example

Assuming many tables use `CREATED_BY` and should share defaults:

```sql
begin
    apex_ui_default_update.add_ad_column(
        p_column_name          => 'CREATED_BY',
        p_label                => 'Created By',
        p_help_text            => 'User that created this row.',
        p_form_display_width   => '30',
        p_form_data_type       => 'VARCHAR',
        p_report_col_alignment => 'LEFT',
        p_syn_name1            => 'CREATED_USER');
end;
/
```

## Notes

- Run `SYNCH_TABLE` before updating column defaults if UI Defaults do not exist yet.
- Many parameters are strings even when they represent flags, sequence numbers, widths, or masks.
- Passing documented null markers can clear values; inspect member pages before bulk cleanup.
- Treat this package as metadata automation for future page generation.

## Related APIs

- [APEX_APPLICATION_INSTALL](APEX_APPLICATION_INSTALL.md) for install-time setup.
- [APEX_EXPORT](APEX_EXPORT.md) for capturing metadata changes.
- [APEX_APPLICATION_ADMIN](APEX_APPLICATION_ADMIN.md) for broader application administration.

<!-- BEGIN GENERATED MEMBER LINKS -->

## Local Member Detail Pages

Generated navigation for LLM retrieval. Use the local detail page first, then follow the Oracle source link when exact wording or edge-case behavior must be verified.

| Member | Kind | Local detail | Source |
| --- | --- | --- | --- |
| ADD_AD_COLUMN Procedure | procedure | [local](APEX_UI_DEFAULT_UPDATE/ADD_AD_COLUMN_Procedure.md) | [Oracle](https://docs.oracle.com/en/database/oracle/apex/26.1/aeapi/ADD_AD_COLUMN-Procedure.html) |
| ADD_AD_SYNONYM Procedure | procedure | [local](APEX_UI_DEFAULT_UPDATE/ADD_AD_SYNONYM_Procedure.md) | [Oracle](https://docs.oracle.com/en/database/oracle/apex/26.1/aeapi/ADD_AD_SYNONYM-Procedure.html) |
| DEL_AD_COLUMN Procedure | procedure | [local](APEX_UI_DEFAULT_UPDATE/DEL_AD_COLUMN_Procedure.md) | [Oracle](https://docs.oracle.com/en/database/oracle/apex/26.1/aeapi/DEL_AD_COLUMN-Procedure.html) |
| DEL_AD_SYNONYM Procedure | procedure | [local](APEX_UI_DEFAULT_UPDATE/DEL_AD_SYNONYM_Procedure.md) | [Oracle](https://docs.oracle.com/en/database/oracle/apex/26.1/aeapi/DEL_AD_SYNONYM-Procedure.html) |
| DEL_COLUMN Procedure | procedure | [local](APEX_UI_DEFAULT_UPDATE/DEL_COLUMN_Procedure.md) | [Oracle](https://docs.oracle.com/en/database/oracle/apex/26.1/aeapi/DEL_COLUMN-Procedure.html) |
| DEL_GROUP Procedure | procedure | [local](APEX_UI_DEFAULT_UPDATE/DEL_GROUP_Procedure.md) | [Oracle](https://docs.oracle.com/en/database/oracle/apex/26.1/aeapi/DEL_GROUP-Procedure.html) |
| DEL_TABLE Procedure | procedure | [local](APEX_UI_DEFAULT_UPDATE/DEL_TABLE_Procedure.md) | [Oracle](https://docs.oracle.com/en/database/oracle/apex/26.1/aeapi/DEL_TABLE-Procedure.html) |
| SYNCH_TABLE Procedure | procedure | [local](APEX_UI_DEFAULT_UPDATE/SYNCH_TABLE_Procedure.md) | [Oracle](https://docs.oracle.com/en/database/oracle/apex/26.1/aeapi/SYNCH_TABLE-Procedure.html) |
| UPD_AD_COLUMN Procedure | procedure | [local](APEX_UI_DEFAULT_UPDATE/UPD_AD_COLUMN_Procedure.md) | [Oracle](https://docs.oracle.com/en/database/oracle/apex/26.1/aeapi/UPD_AD_COLUMN-Procedure.html) |
| UPD_AD_SYNONYM Procedure | procedure | [local](APEX_UI_DEFAULT_UPDATE/UPD_AD_SYNONYM_Procedure.md) | [Oracle](https://docs.oracle.com/en/database/oracle/apex/26.1/aeapi/UPD_AD_SYNONYM-Procedure.html) |
| UPD_COLUMN Procedure | procedure | [local](APEX_UI_DEFAULT_UPDATE/UPD_COLUMN_Procedure.md) | [Oracle](https://docs.oracle.com/en/database/oracle/apex/26.1/aeapi/UPD_COLUMN-Procedure.html) |
| UPD_DISPLAY_IN_FORM Procedure | procedure | [local](APEX_UI_DEFAULT_UPDATE/UPD_DISPLAY_IN_FORM_Procedure.md) | [Oracle](https://docs.oracle.com/en/database/oracle/apex/26.1/aeapi/UPD_DISPLAY_IN_FORM-Procedure.html) |
| UPD_DISPLAY_IN_REPORT Procedure | procedure | [local](APEX_UI_DEFAULT_UPDATE/UPD_DISPLAY_IN_REPORT_Procedure.md) | [Oracle](https://docs.oracle.com/en/database/oracle/apex/26.1/aeapi/UPD_DISPLAY_IN_REPORT-Procedure.html) |
| UPD_FORM_REGION_TITLE Procedure | procedure | [local](APEX_UI_DEFAULT_UPDATE/UPD_FORM_REGION_TITLE_Procedure.md) | [Oracle](https://docs.oracle.com/en/database/oracle/apex/26.1/aeapi/UPD_FORM_REGION_TITLE-Procedure.html) |
| UPD_GROUP Procedure | procedure | [local](APEX_UI_DEFAULT_UPDATE/UPD_GROUP_Procedure.md) | [Oracle](https://docs.oracle.com/en/database/oracle/apex/26.1/aeapi/UPD_GROUP-Procedure.html) |
| UPD_ITEM_DISPLAY_HEIGHT Procedure | procedure | [local](APEX_UI_DEFAULT_UPDATE/UPD_ITEM_DISPLAY_HEIGHT_Procedure.md) | [Oracle](https://docs.oracle.com/en/database/oracle/apex/26.1/aeapi/UPD_ITEM_DISPLAY_HEIGHT-Procedure.html) |
| UPD_ITEM_DISPLAY_WIDTH Procedure | procedure | [local](APEX_UI_DEFAULT_UPDATE/UPD_ITEM_DISPLAY_WIDTH_Procedure.md) | [Oracle](https://docs.oracle.com/en/database/oracle/apex/26.1/aeapi/UPD_ITEM_DISPLAY_WIDTH-Procedure.html) |
| UPD_ITEM_FORMAT_MASK Procedure | procedure | [local](APEX_UI_DEFAULT_UPDATE/UPD_ITEM_FORMAT_MASK_Procedure.md) | [Oracle](https://docs.oracle.com/en/database/oracle/apex/26.1/aeapi/UPD_ITEM_FORMAT_MASK-Procedure.html) |
| UPD_ITEM_HELP Procedure | procedure | [local](APEX_UI_DEFAULT_UPDATE/UPD_ITEM_HELP_Procedure.md) | [Oracle](https://docs.oracle.com/en/database/oracle/apex/26.1/aeapi/UPD_ITEM_HELP-Procedure.html) |
| UPD_LABEL Procedure | procedure | [local](APEX_UI_DEFAULT_UPDATE/UPD_LABEL_Procedure.md) | [Oracle](https://docs.oracle.com/en/database/oracle/apex/26.1/aeapi/UPD_LABEL-Procedure.html) |
| UPD_REPORT_ALIGNMENT Procedure | procedure | [local](APEX_UI_DEFAULT_UPDATE/UPD_REPORT_ALIGNMENT_Procedure.md) | [Oracle](https://docs.oracle.com/en/database/oracle/apex/26.1/aeapi/UPD_REPORT_ALIGNMENT-Procedure.html) |
| UPD_REPORT_FORMAT_MASK Procedure | procedure | [local](APEX_UI_DEFAULT_UPDATE/UPD_REPORT_FORMAT_MASK_Procedure.md) | [Oracle](https://docs.oracle.com/en/database/oracle/apex/26.1/aeapi/UPD_REPORT_FORMAT_MASK-Procedure.html) |
| UPD_REPORT_REGION_TITLE Procedure | procedure | [local](APEX_UI_DEFAULT_UPDATE/UPD_REPORT_REGION_TITLE_Procedure.md) | [Oracle](https://docs.oracle.com/en/database/oracle/apex/26.1/aeapi/UPD_REPORT_REGION_TITLE-Procedure.html) |
| UPD_TABLE Procedure | procedure | [local](APEX_UI_DEFAULT_UPDATE/UPD_TABLE_Procedure.md) | [Oracle](https://docs.oracle.com/en/database/oracle/apex/26.1/aeapi/UPD_TABLE-Procedure.html) |

<!-- END GENERATED MEMBER LINKS -->
