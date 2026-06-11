# APEX_DATA_LOADING.LOAD_DATA Function Signature 2

Source: [Oracle APEX 26.1 API Reference](https://docs.oracle.com/en/database/oracle/apex/26.1/aeapi/LOAD_DATA-Function-Signature-2.html)

Status: generated detailed reference. Review edge cases against the source before production use.

Parent package: [APEX_DATA_LOADING](../APEX_DATA_LOADING.md)

## Purpose

This function loads CLOB data and returns loading status information containing processed rows and error rows.

## When To Use

Use this page when code needs the `APEX_DATA_LOADING.LOAD_DATA` function. Confirm security, workspace, and session requirements for your calling context.

## Signature

```sql
APEX_DATA_LOADING.LOAD_DATA (
    p_application_id   IN NUMBER      DEFAULT apex_application.g_flow_id,
    p_static_id        IN VARCHAR2,
    p_data_to_load     IN CLOB,
    p_xlsx_sheet_name  IN VARCHAR2    DEFAULT NULL )
    RETURN t_data_load_result;
```

## Parameters

| Parameter | Description |
| --- | --- |
| `p_application_id` | ID of the application which contains the data load definition. |
| `p_static_id` | Static ID of the data loading definition to execute. |
| `p_data_to_load` | CLOB data to be loaded. |
| `p_xlsx_sheet_name` | For XLSX files, the worksheet to extract. |

## Important Notes

- Most APEX APIs assume the correct APEX workspace, application, and session context.
- Validate user-controlled values before passing them into administrative, security, SQL, or web-service APIs.
- Use the source link for exact behavior, defaults, and version-specific caveats.

## Simple Example

```sql
declare
    l_csv    clob;
    l_result apex_data_loading.t_data_load_result;
begin
    l_csv := 'ORDER_ID,CUSTOMER_NAME,ORDER_TOTAL' || chr(10) ||
             '1001,Acme Corp,1250.00';

    l_result := apex_data_loading.load_data(
        p_application_id => apex_application.g_flow_id,
        p_static_id      => 'ORDER_IMPORT',
        p_data_to_load   => l_csv
    );

    apex_debug.info('Loaded %s rows from generated CSV.', l_result.processed_rows);
end;
/
```

