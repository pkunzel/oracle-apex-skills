# APEX_REST_SOURCE_SYNC

Source: [Oracle APEX 26.1 API Reference](https://docs.oracle.com/en/database/oracle/apex/26.1/aeapi/APEX_REST_SOURCE_SYNC.html)

Status: curated first-pass reference.

## Purpose

`APEX_REST_SOURCE_SYNC` controls synchronization for declarative REST Data Sources that cache data into local tables. It can run syncs, enable/disable schedules, reschedule the next run, inspect running state, and generate/synchronize local table definitions.

## When To Use

Use this package when a PL/SQL process, automation, admin page, or deployment script needs to manage a REST Source synchronization defined in APEX Builder.

Use [APEX_WEB_SERVICE](APEX_WEB_SERVICE.md) for direct one-off HTTP calls and [APEX_EXEC](APEX_EXEC.md) for querying REST Sources; use this package specifically for synchronized local-table copies.

## API Surface

| Area | Members |
| --- | --- |
| Run sync | `SYNCHRONIZE_DATA`, `DYNAMIC_SYNCHRONIZE_DATA` |
| Schedule control | `ENABLE`, `DISABLE`, `RESCHEDULE` |
| Status | `IS_RUNNING`, `GET_LAST_SYNC_TIMESTAMP` |
| Table definition | `GET_SYNC_TABLE_DEFINITION_SQL`, `SYNCHRONIZE_TABLE_DEFINITION` |

## Manual Sync Example

Assuming a REST Data Source Static ID `ORDERS_API`:

```sql
begin
    apex_rest_source_sync.synchronize_data(
        p_module_static_id  => 'ORDERS_API',
        p_run_in_background => true,
        p_application_id    => :APP_ID);
end;
/
```

## Dynamic Sync Example

Assuming the REST Source has a parameter named `updatedSince`:

```sql
declare
    l_params apex_exec.t_parameters;
begin
    apex_exec.add_parameter(
        p_parameters => l_params,
        p_name       => 'updatedSince',
        p_value      => to_char(systimestamp - interval '1' day, 'YYYY-MM-DD"T"HH24:MI:SS'));

    apex_rest_source_sync.dynamic_synchronize_data(
        p_module_static_id => 'ORDERS_API',
        p_sync_static_id   => 'LAST_24_HOURS',
        p_sync_parameters  => l_params,
        p_application_id   => :APP_ID);
end;
/
```

## Table Definition Review Example

```sql
declare
    l_sql varchar2(32767);
begin
    l_sql := apex_rest_source_sync.get_sync_table_definition_sql(
        p_module_static_id     => 'ORDERS_API',
        p_application_id       => :APP_ID,
        p_include_drop_columns => false);

    :P20_DEFINITION_SQL := l_sql;
end;
/
```

## Notes

- `SYNCHRONIZE_DATA` requires APEX session context.
- Use `IS_RUNNING` before launching expensive manual syncs from a button.
- Be cautious with `p_include_drop_columns => true`; review generated DDL first.
- Store REST authentication in Web Credentials on the REST Data Source rather than in sync code.

## Related APIs

- [APEX_EXEC](APEX_EXEC.md) for querying REST Sources.
- [APEX_WEB_SERVICE](APEX_WEB_SERVICE.md) for direct REST calls.
- [APEX_AUTOMATION](APEX_AUTOMATION.md) for scheduled orchestration.

<!-- BEGIN GENERATED MEMBER LINKS -->

## Local Member Detail Pages

Generated navigation for LLM retrieval. Use the local detail page first, then follow the Oracle source link when exact wording or edge-case behavior must be verified.

| Member | Kind | Local detail | Source |
| --- | --- | --- | --- |
| DISABLE Procedure | procedure | [local](APEX_REST_SOURCE_SYNC/DISABLE_Procedure.md) | [Oracle](https://docs.oracle.com/en/database/oracle/apex/26.1/aeapi/APEX_REST_SOURCE_SYNC-DISABLE-Procedure.html) |
| DYNAMIC_SYNCHRONIZE_DATA Procedure | procedure | [local](APEX_REST_SOURCE_SYNC/DYNAMIC_SYNCHRONIZE_DATA_Procedure.md) | [Oracle](https://docs.oracle.com/en/database/oracle/apex/26.1/aeapi/DYNAMIC_SYNCHRONIZE_DATA-Procedure.html) |
| ENABLE Procedure | procedure | [local](APEX_REST_SOURCE_SYNC/ENABLE_Procedure.md) | [Oracle](https://docs.oracle.com/en/database/oracle/apex/26.1/aeapi/APEX_REST_SOURCE_SYNC-ENABLE-Procedure.html) |
| GET_LAST_SYNC_TIMESTAMP Function | function | [local](APEX_REST_SOURCE_SYNC/GET_LAST_SYNC_TIMESTAMP_Function.md) | [Oracle](https://docs.oracle.com/en/database/oracle/apex/26.1/aeapi/GET_LAST_SYNC_TIMESTAMP-Function.html) |
| GET_SYNC_TABLE_DEFINITION_SQL Function | function | [local](APEX_REST_SOURCE_SYNC/GET_SYNC_TABLE_DEFINITION_SQL_Function.md) | [Oracle](https://docs.oracle.com/en/database/oracle/apex/26.1/aeapi/GET_SYNC_TABLE_DEFINITION_SQL-Function.html) |
| IS_RUNNING Function | function | [local](APEX_REST_SOURCE_SYNC/IS_RUNNING_Function.md) | [Oracle](https://docs.oracle.com/en/database/oracle/apex/26.1/aeapi/APEX_REST_SOURCE_SYNC-IS_RUNNING-Function.html) |
| RESCHEDULE Procedure | procedure | [local](APEX_REST_SOURCE_SYNC/RESCHEDULE_Procedure.md) | [Oracle](https://docs.oracle.com/en/database/oracle/apex/26.1/aeapi/APEX_REST_SOURCE_SYNC-RESCHEDULE-Procedure.html) |
| SYNCHRONIZE_DATA Procedure | procedure | [local](APEX_REST_SOURCE_SYNC/SYNCHRONIZE_DATA_Procedure.md) | [Oracle](https://docs.oracle.com/en/database/oracle/apex/26.1/aeapi/SYNCHRONIZE_DATA-Procedure.html) |
| SYNCHRONIZE_TABLE_DEFINITION Procedure | procedure | [local](APEX_REST_SOURCE_SYNC/SYNCHRONIZE_TABLE_DEFINITION_Procedure.md) | [Oracle](https://docs.oracle.com/en/database/oracle/apex/26.1/aeapi/SYNCHRONIZE_TABLE_DEFINITION-Procedure.html) |

<!-- END GENERATED MEMBER LINKS -->
