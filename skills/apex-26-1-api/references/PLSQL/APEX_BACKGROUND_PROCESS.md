# APEX_BACKGROUND_PROCESS

Source: [Oracle APEX 26.1 API Reference](https://docs.oracle.com/en/database/oracle/apex/26.1/aeapi/apex_background_process.html)

Status: curated first-pass reference.

## Purpose

`APEX_BACKGROUND_PROCESS` reports and controls APEX background process executions. It lets background PL/SQL set status messages and progress, retrieve current or specific execution information, and terminate all executions for a process or one execution by ID.

Use this package from APEX background process code and admin/status pages. Use `APEX_AUTOMATION` for scheduled automation control.

## When To Use

Use `APEX_BACKGROUND_PROCESS` when:

- Long-running page work should report progress and a status message.
- A background process needs to know its own execution record.
- A status page or Ajax callback needs to inspect an execution by ID.
- An administrator needs to terminate a specific background execution or all executions for a process.

Do not use this package as a general-purpose job scheduler. It is about APEX background process execution state.

## API Surface

| Need | Members |
| --- | --- |
| Execution state | `GET_CURRENT_EXECUTION`, `GET_EXECUTION` |
| Progress/status from running process | `SET_PROGRESS`, `SET_STATUS` |
| Termination | `TERMINATE`, deprecated `ABORT` |
| Reference | `Constants`, `Data Types` |

## Report Progress

Inside a background process PL/SQL block:

```sql
declare
    l_total number := 100;
begin
    apex_background_process.set_status('Starting import');
    apex_background_process.set_progress(
        p_totalwork => l_total,
        p_sofar     => 0);

    for i in 1 .. l_total loop
        -- Process one unit of work here.
        apex_background_process.set_status('Imported row ' || i || ' of ' || l_total);
        apex_background_process.set_progress(
            p_totalwork => l_total,
            p_sofar     => i);
    end loop;
end;
/
```

Keep status text concise and avoid writing secrets or private payloads.

## Read Execution Status

Assuming `P30_EXECUTION_ID` contains a background process execution ID:

```sql
declare
    l_execution apex_background_process.t_execution;
begin
    l_execution := apex_background_process.get_execution(
        p_application_id => :APP_ID,
        p_execution_id   => :P30_EXECUTION_ID);

    -- Use fields from the documented t_execution record, such as state,
    -- last_status_message, sofar, and totalwork.
    :P30_STATE := l_execution.state;
end;
/
```

Inside the running background process:

```sql
declare
    l_execution apex_background_process.t_execution;
begin
    l_execution := apex_background_process.get_current_execution;
    apex_debug.info('Current execution state: %s', l_execution.state);
end;
/
```

Use the local Data Types page to verify exact record field names before production use.

## Terminate Executions

Terminate a specific execution:

```sql
begin
    if not apex_authorization.has_access('CAN_MANAGE_BACKGROUND_WORK') then
        raise_application_error(-20000, 'Not authorized.');
    end if;

    apex_background_process.terminate(
        p_application_id => :APP_ID,
        p_execution_id   => :P30_EXECUTION_ID);
end;
/
```

Terminate all executions for a process:

```sql
begin
    apex_background_process.terminate(
        p_application_id => :APP_ID,
        p_process_id     => :P30_PROCESS_ID);
end;
/
```

## Safety Guidance

- Call `SET_STATUS` and `SET_PROGRESS` from the background process itself.
- Keep progress units stable; changing total work mid-run can confuse status displays.
- Protect termination actions with server-side authorization.
- Avoid deprecated `ABORT`; use `TERMINATE`.
- Use generated member detail pages below for exact constants and `t_execution` fields.

<!-- BEGIN GENERATED MEMBER LINKS -->

## Local Member Detail Pages

Generated navigation for LLM retrieval. Use the local detail page first, then follow the Oracle source link when exact wording or edge-case behavior must be verified.

| Member | Kind | Local detail | Source |
| --- | --- | --- | --- |
| Constants | constants | [local](APEX_BACKGROUND_PROCESS/Constants.md) | [Oracle](https://docs.oracle.com/en/database/oracle/apex/26.1/aeapi/APEX_BACKGROUND_PROCESS-Constants.html) |
| Data Types | data types | [local](APEX_BACKGROUND_PROCESS/Data_Types.md) | [Oracle](https://docs.oracle.com/en/database/oracle/apex/26.1/aeapi/APEX_BACKGROUND_PROCESS-Data-Types.html) |
| ABORT Procedure Signature 1 (Deprecated) | procedure | [local](APEX_BACKGROUND_PROCESS/ABORT_Procedure_Signature_1_(Deprecated).md) | [Oracle](https://docs.oracle.com/en/database/oracle/apex/26.1/aeapi/APEX_BACKGROUND_PROCESS.ABORT-Procedure-Signature-1.html) |
| ABORT Procedure Signature 2 (Deprecated) | procedure | [local](APEX_BACKGROUND_PROCESS/ABORT_Procedure_Signature_2_(Deprecated).md) | [Oracle](https://docs.oracle.com/en/database/oracle/apex/26.1/aeapi/APEX_BACKGROUND_PROCESS.ABORT-Procedure-Signature-2.html) |
| GET_CURRENT_EXECUTION Function | function | [local](APEX_BACKGROUND_PROCESS/GET_CURRENT_EXECUTION_Function.md) | [Oracle](https://docs.oracle.com/en/database/oracle/apex/26.1/aeapi/APEX_BACKGROUND_PROCESS.GET_CURRENT_EXECUTION-Function.html) |
| GET_EXECUTION Function | function | [local](APEX_BACKGROUND_PROCESS/GET_EXECUTION_Function.md) | [Oracle](https://docs.oracle.com/en/database/oracle/apex/26.1/aeapi/APEX_BACKGROUND_PROCESS.GET_EXECUTION-Function.html) |
| SET_PROGRESS Procedure | procedure | [local](APEX_BACKGROUND_PROCESS/SET_PROGRESS_Procedure.md) | [Oracle](https://docs.oracle.com/en/database/oracle/apex/26.1/aeapi/APEX_BACKGROUND_PROCESS.SET_PROGRESS-Procedure.html) |
| SET_STATUS Procedure | procedure | [local](APEX_BACKGROUND_PROCESS/SET_STATUS_Procedure.md) | [Oracle](https://docs.oracle.com/en/database/oracle/apex/26.1/aeapi/APEX_BACKGROUND_PROCESS.SET_STATUS-Procedure.html) |
| TERMINATE Procedure Signature 1 | procedure | [local](APEX_BACKGROUND_PROCESS/TERMINATE_Procedure_Signature_1.md) | [Oracle](https://docs.oracle.com/en/database/oracle/apex/26.1/aeapi/APEX_BACKGROUND_PROCESS.TERMINATE-Procedure-Signature-1.html) |
| TERMINATE Procedure Signature 2 | procedure | [local](APEX_BACKGROUND_PROCESS/TERMINATE_Procedure_Signature_2.md) | [Oracle](https://docs.oracle.com/en/database/oracle/apex/26.1/aeapi/APEX_BACKGROUND_PROCESS.TERMINATE-Procedure-Signature-2.html) |

<!-- END GENERATED MEMBER LINKS -->
