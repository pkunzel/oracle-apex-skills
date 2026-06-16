# APEX_REST_SOURCE_SYNC.GET_SYNC_TABLE_DEFINITION_SQL Function

Source: [Oracle APEX 26.1 API Reference](https://docs.oracle.com/en/database/oracle/apex/26.1/aeapi/GET_SYNC_TABLE_DEFINITION_SQL-Function.html)

Status: generated detailed reference. Review edge cases against the source before production use.

Parent package: [APEX_REST_SOURCE_SYNC](../APEX_REST_SOURCE_SYNC.md)

## Purpose

This function generates SQL to synchronize the local table definition with the data profile.

## When To Use

Use this page when code needs the `APEX_REST_SOURCE_SYNC.GET_SYNC_TABLE_DEFINITION_SQL` function. Confirm security, workspace, and session requirements for your calling context.

## Signature

```sql
APEX_REST_SOURCE_SYNC.GET_SYNC_TABLE_DEFINITION_SQL (
    p_module_static_id      IN VARCHAR2,
    p_application_id        IN NUMBER   DEFAULT {current application id},
    p_include_drop_columns  IN BOOLEAN  DEFAULT FALSE )
    RETURN VARCHAR2;
```

## Parameters

| Parameter | Description |
| --- | --- |
| `p_module_static_id` | Static ID to identify the REST Data Source. |
| `p_application_id` | (Optional) The application ID. |
| `p_include_drop_columns` | If TRUE , generate ALTER TABLE DROP COLUMN statements for columns which do not exist in the data profile any more. |

## Important Notes

- Most APEX APIs assume the correct APEX workspace, application, and session context.
- Validate user-controlled values before passing them into administrative, security, SQL, or web-service APIs.
- Use the source link for exact behavior, defaults, and version-specific caveats.

## Example

Generate table-definition SQL for review before applying profile changes to a sync table.

```sql
declare
    l_sql varchar2(32767);
begin
    l_sql := apex_rest_source_sync.get_sync_table_definition_sql(
        p_module_static_id     => 'ORDERS_API',
        p_application_id       => :APP_ID,
        p_include_drop_columns => false);

    :P20_SYNC_DDL := l_sql;
end;
/
```
