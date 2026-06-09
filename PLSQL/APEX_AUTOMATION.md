# APEX_AUTOMATION

Source: [Oracle APEX 26.1 API Reference](https://docs.oracle.com/en/database/oracle/apex/26.1/aeapi/APEX_AUTOMATION.html)

Status: curated first-pass reference.

## Purpose

`APEX_AUTOMATION` controls APEX automations from PL/SQL. It can enable or disable automations, execute an automation immediately, run it in the background, reschedule polling automations, terminate running executions, log messages from automation action code, skip current rows, and inspect last-run/running state.

Use automations for scheduled, polling, or query-driven server-side processing. Use `APEX_BACKGROUND_PROCESS` for page-level background process execution status and progress reporting.

## When To Use

Use `APEX_AUTOMATION` when:

- An administrator page should enable, disable, execute, or terminate an automation by Static ID.
- A process should run an automation immediately instead of waiting for its schedule.
- A polling automation should run as soon as possible after new source data appears.
- Automation action code needs to write log entries, skip a row, or exit.
- A dashboard needs to show last run timestamp, last run result, or running state.

Do not expose automation control to ordinary users. An automation can mutate data or call external systems.

## API Surface

| Need | Members |
| --- | --- |
| Manual execution | `EXECUTE` |
| Schedule/control | `ENABLE`, `DISABLE`, `RESCHEDULE`, `TERMINATE`, deprecated `ABORT` |
| State inspection | `IS_RUNNING`, `GET_LAST_RUN`, `GET_LAST_RUN_TIMESTAMP`, `GET_SCHEDULER_JOB_NAME` |
| Action-code logging | `LOG_INFO`, `LOG_WARN`, `LOG_ERROR` |
| Action-code flow | `SKIP_CURRENT_ROW`, `EXIT` |

## Execute An Automation

Run an automation now:

```sql
begin
    if not apex_authorization.has_access('CAN_RUN_AUTOMATIONS') then
        raise_application_error(-20000, 'Not authorized.');
    end if;

    apex_automation.execute(
        p_application_id => :APP_ID,
        p_static_id      => 'SYNC_PARTNER_ORDERS');
end;
/
```

Run in the background:

```sql
begin
    apex_automation.execute(
        p_application_id    => :APP_ID,
        p_static_id         => 'SYNC_PARTNER_ORDERS',
        p_run_in_background => true);
end;
/
```

Assuming filters are populated in `l_filters` and `l_order_bys` using `APEX_EXEC` types:

```sql
begin
    apex_automation.execute(
        p_application_id => :APP_ID,
        p_static_id      => 'PROCESS_OPEN_CASES',
        p_filters        => l_filters,
        p_order_bys      => l_order_bys);
end;
/
```

## Enable, Disable, Reschedule

```sql
begin
    apex_automation.disable(
        p_application_id => :APP_ID,
        p_static_id      => 'SYNC_PARTNER_ORDERS');
end;
/
```

```sql
begin
    apex_automation.enable(
        p_application_id => :APP_ID,
        p_static_id      => 'SYNC_PARTNER_ORDERS');
end;
/
```

For a polling automation:

```sql
begin
    apex_automation.reschedule(
        p_application_id => :APP_ID,
        p_static_id      => 'SYNC_PARTNER_ORDERS',
        p_next_run_at    => systimestamp);
end;
/
```

## Automation Action Code

Inside automation action PL/SQL:

```sql
begin
    apex_automation.log_info('Processing order ' || :ORDER_ID);

    if :ORDER_STATUS = 'CANCELLED' then
        apex_automation.skip_current_row('Order is already cancelled.');
    end if;

    -- Row processing here.
exception
    when others then
        apex_automation.log_error(sqlerrm);
        raise;
end;
/
```

Use `LOG_WARN` for recoverable concerns and `LOG_ERROR` for failures that should be visible in automation logs.

## Inspect Or Stop Running Work

```sql
begin
    if apex_automation.is_running(
        p_application_id => :APP_ID,
        p_static_id      => 'SYNC_PARTNER_ORDERS')
    then
        :P30_STATUS := 'RUNNING';
    end if;
end;
/
```

```sql
begin
    apex_automation.terminate(
        p_application_id => :APP_ID,
        p_static_id      => 'SYNC_PARTNER_ORDERS');
end;
/
```

## Safety Guidance

- Prefer automation Static IDs in generated code.
- Protect enable, disable, execute, reschedule, and terminate with server-side authorization.
- Use `RESCHEDULE` for polling automations rather than repeatedly forcing manual runs.
- Do not log secrets, tokens, or private payloads from automation action code.
- Avoid deprecated `ABORT`; use `TERMINATE` for current code.

<!-- BEGIN GENERATED MEMBER LINKS -->

## Local Member Detail Pages

Generated navigation for LLM retrieval. Use the local detail page first, then follow the Oracle source link when exact wording or edge-case behavior must be verified.

| Member | Kind | Local detail | Source |
| --- | --- | --- | --- |
| ABORT Procedure (Deprecated) | procedure | [local](APEX_AUTOMATION/ABORT_Procedure_(Deprecated).md) | [Oracle](https://docs.oracle.com/en/database/oracle/apex/26.1/aeapi/APEX_AUTOMATION_ABORT-Procedure.html) |
| DISABLE Procedure | procedure | [local](APEX_AUTOMATION/DISABLE_Procedure.md) | [Oracle](https://docs.oracle.com/en/database/oracle/apex/26.1/aeapi/APEX_AUTOMATION_DISABLE-Procedure.html) |
| ENABLE Procedure | procedure | [local](APEX_AUTOMATION/ENABLE_Procedure.md) | [Oracle](https://docs.oracle.com/en/database/oracle/apex/26.1/aeapi/APEX_AUTOMATION_ENABLE-Procedure.html) |
| EXECUTE Procedure Signature 1 | procedure | [local](APEX_AUTOMATION/EXECUTE_Procedure_Signature_1.md) | [Oracle](https://docs.oracle.com/en/database/oracle/apex/26.1/aeapi/APEX_AUTOMATION_EXECUTE-Procedure-Signature-1.html) |
| EXECUTE Procedure Signature 2 | procedure | [local](APEX_AUTOMATION/EXECUTE_Procedure_Signature_2.md) | [Oracle](https://docs.oracle.com/en/database/oracle/apex/26.1/aeapi/APEX_AUTOMATION_EXECUTE-Procedure-Signature-2.html) |
| EXECUTE for Query Context Procedure | procedure | [local](APEX_AUTOMATION/EXECUTE_for_Query_Context_Procedure.md) | [Oracle](https://docs.oracle.com/en/database/oracle/apex/26.1/aeapi/APEX_AUTOMATION_EXECUTE-for-Query-Context.html) |
| EXIT Procedure | procedure | [local](APEX_AUTOMATION/EXIT_Procedure.md) | [Oracle](https://docs.oracle.com/en/database/oracle/apex/26.1/aeapi/APEX_AUTOMATION_EXIT-Procedure.html) |
| GET_LAST_RUN Function | function | [local](APEX_AUTOMATION/GET_LAST_RUN_Function.md) | [Oracle](https://docs.oracle.com/en/database/oracle/apex/26.1/aeapi/APEX_AUTOMATION_GET_LAST_RETURN-Function.html) |
| GET_LAST_RUN_TIMESTAMP Function | function | [local](APEX_AUTOMATION/GET_LAST_RUN_TIMESTAMP_Function.md) | [Oracle](https://docs.oracle.com/en/database/oracle/apex/26.1/aeapi/APEX_AUTOMATION_GET_LAST_RUN_TIMESTAMP-Procedure.html) |
| GET_SCHEDULER_JOB_NAME Function | function | [local](APEX_AUTOMATION/GET_SCHEDULER_JOB_NAME_Function.md) | [Oracle](https://docs.oracle.com/en/database/oracle/apex/26.1/aeapi/APEX_AUTOMATION_GET_SCHEDULER_JOB_NAME-Function.html) |
| IS_RUNNING Function | function | [local](APEX_AUTOMATION/IS_RUNNING_Function.md) | [Oracle](https://docs.oracle.com/en/database/oracle/apex/26.1/aeapi/APEX_AUTOMATION_IS_RUNNING-Function.html) |
| LOG_ERROR Procedure | procedure | [local](APEX_AUTOMATION/LOG_ERROR_Procedure.md) | [Oracle](https://docs.oracle.com/en/database/oracle/apex/26.1/aeapi/APEX_AUTOMATION_LOG_ERROR-Procedure.html) |
| LOG_INFO Procedure | procedure | [local](APEX_AUTOMATION/LOG_INFO_Procedure.md) | [Oracle](https://docs.oracle.com/en/database/oracle/apex/26.1/aeapi/APEX_AUTOMATION_LONG_INFO-Procedure.html) |
| LOG_WARN Procedure | procedure | [local](APEX_AUTOMATION/LOG_WARN_Procedure.md) | [Oracle](https://docs.oracle.com/en/database/oracle/apex/26.1/aeapi/APEX_AUTOMATION_LOG_WARN-Procedure.html) |
| RESCHEDULE Procedure | procedure | [local](APEX_AUTOMATION/RESCHEDULE_Procedure.md) | [Oracle](https://docs.oracle.com/en/database/oracle/apex/26.1/aeapi/APEX_AUTOMATION_RESCHEDULE-Procedure.html) |
| SKIP_CURRENT_ROW Procedure | procedure | [local](APEX_AUTOMATION/SKIP_CURRENT_ROW_Procedure.md) | [Oracle](https://docs.oracle.com/en/database/oracle/apex/26.1/aeapi/APEX_AUTOMATION_SKIP_CURRENT_ROW-Procedure.html) |
| TERMINATE Procedure | procedure | [local](APEX_AUTOMATION/TERMINATE_Procedure.md) | [Oracle](https://docs.oracle.com/en/database/oracle/apex/26.1/aeapi/APEX_AUTOMATION_TERMINATE-Procedure.html) |

<!-- END GENERATED MEMBER LINKS -->
