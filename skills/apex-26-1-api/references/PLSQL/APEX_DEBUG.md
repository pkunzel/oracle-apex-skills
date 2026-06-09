# APEX_DEBUG

Source: [Oracle APEX 26.1 API Reference](https://docs.oracle.com/en/database/oracle/apex/26.1/aeapi/APEX_DEBUG.html)

Status: curated first-pass reference.

## Purpose

`APEX_DEBUG` writes diagnostic messages to the APEX debug log. Use it to trace page processes, Ajax callbacks, plug-ins, API calls, and complex workflow logic without using `DBMS_OUTPUT` as the primary diagnostic channel.

## When To Use

Use `APEX_DEBUG` when:

- A page process or Ajax callback needs traceable diagnostics.
- A reusable PL/SQL package is called from APEX and should log context.
- You need warnings/errors that appear with the APEX page view debug log.
- A script or session needs debug enabled temporarily.

Avoid logging secrets, tokens, passwords, full personal-data payloads, or large files.

## Common Member Groups

| Need | Members |
| --- | --- |
| Enable/disable | `ENABLE`, `DISABLE`, `ENABLE_DBMS_OUTPUT`, `DISABLE_DBMS_OUTPUT` |
| Log messages | `ERROR`, `WARN`, `INFO`, `TRACE`, `MESSAGE`, `ENTER`, `LOG_LONG_MESSAGE` |
| Session/page context | `GET_PAGE_VIEW_ID`, `GET_LAST_MESSAGE_ID`, `LOG_PAGE_SESSION_STATE` |
| Cleanup | `REMOVE_DEBUG_BY_AGE`, `REMOVE_DEBUG_BY_APP`, `REMOVE_DEBUG_BY_VIEW`, `REMOVE_SESSION_MESSAGES` |
| Utilities | `TOCHAR`, constants |

## Basic Logging

```sql
begin
    apex_debug.info(
        'Submitting order %s for user %s',
        :P10_ORDER_ID,
        :APP_USER);
end;
/
```

Warnings and errors:

```sql
begin
    apex_debug.warn('Inventory is below threshold for SKU %s', :P10_SKU);
    apex_debug.error('Payment authorization failed for order %s', :P10_ORDER_ID);
end;
/
```

## Procedure Entry Pattern

```sql
create or replace procedure process_order (
    p_order_id in number )
as
begin
    apex_debug.enter(
        p_routine_name => 'process_order',
        p_name01       => 'p_order_id',
        p_value01      => p_order_id);

    -- Process order here.

    apex_debug.info('Order %s processed.', p_order_id);
end;
/
```

## Enable Debug In A Script

```sql
begin
    apex_session.create_session(
        p_app_id   => 100,
        p_page_id  => 1,
        p_username => 'DEBUG_USER');

    apex_debug.enable(
        p_level => apex_debug.c_log_level_info);

    apex_debug.info('Debug script started.');

    apex_session.delete_session;
end;
/
```

## Long Messages

Use long-message helpers for large generated text or API responses, but redact sensitive data first.

```sql
begin
    apex_debug.log_long_message(
        p_message => 'Payload length=' || dbms_lob.getlength(l_payload),
        p_level   => apex_debug.c_log_level_info);
end;
/
```

## Safety Guidance

- Keep debug logging useful but not noisy.
- Do not log passwords, API tokens, authorization headers, or full PII payloads.
- Prefer `APEX_DEBUG` over `DBMS_OUTPUT` for APEX runtime diagnostics.
- Use page view IDs in user-safe error messages so support can correlate with logs.
- Remove old debug logs as part of operational housekeeping.

<!-- BEGIN GENERATED MEMBER LINKS -->

## Local Member Detail Pages

Generated navigation for LLM retrieval. Use the local detail page first, then follow the Oracle source link when exact wording or edge-case behavior must be verified.

| Member | Kind | Local detail | Source |
| --- | --- | --- | --- |
| Constants | constants | [local](APEX_DEBUG/Constants.md) | [Oracle](https://docs.oracle.com/en/database/oracle/apex/26.1/aeapi/APEX_DEBUG-Constants.html) |
| DISABLE Procedure | procedure | [local](APEX_DEBUG/DISABLE_Procedure.md) | [Oracle](https://docs.oracle.com/en/database/oracle/apex/26.1/aeapi/DISABLE-Procedure.html) |
| DISABLE_DBMS_OUTPUT Procedure | procedure | [local](APEX_DEBUG/DISABLE_DBMS_OUTPUT_Procedure.md) | [Oracle](https://docs.oracle.com/en/database/oracle/apex/26.1/aeapi/DISABLE_DBMS_OUTPUT-Procedure.html) |
| ENABLE Procedure | procedure | [local](APEX_DEBUG/ENABLE_Procedure.md) | [Oracle](https://docs.oracle.com/en/database/oracle/apex/26.1/aeapi/APEX_DEBUG-ENABLE-Procedure.html) |
| ENTER Procedure | procedure | [local](APEX_DEBUG/ENTER_Procedure.md) | [Oracle](https://docs.oracle.com/en/database/oracle/apex/26.1/aeapi/ENTER-Procedure.html) |
| ENABLE_DBMS_OUTPUT Procedure | procedure | [local](APEX_DEBUG/ENABLE_DBMS_OUTPUT_Procedure.md) | [Oracle](https://docs.oracle.com/en/database/oracle/apex/26.1/aeapi/ENABLE_DBMS_OUTPUT-Procedure.html) |
| ERROR Procedure | procedure | [local](APEX_DEBUG/ERROR_Procedure.md) | [Oracle](https://docs.oracle.com/en/database/oracle/apex/26.1/aeapi/ERROR-Procedure.html) |
| GET_LAST_MESSAGE_ID Function | function | [local](APEX_DEBUG/GET_LAST_MESSAGE_ID_Function.md) | [Oracle](https://docs.oracle.com/en/database/oracle/apex/26.1/aeapi/GET_LAST_MESSAGE_ID-Function.html) |
| GET_PAGE_VIEW_ID Function | function | [local](APEX_DEBUG/GET_PAGE_VIEW_ID_Function.md) | [Oracle](https://docs.oracle.com/en/database/oracle/apex/26.1/aeapi/GET_PAGE_VIEW_ID-Function.html) |
| INFO Procedure | procedure | [local](APEX_DEBUG/INFO_Procedure.md) | [Oracle](https://docs.oracle.com/en/database/oracle/apex/26.1/aeapi/INFO-Procedure.html) |
| LOG_DBMS_OUTPUT Procedure | procedure | [local](APEX_DEBUG/LOG_DBMS_OUTPUT_Procedure.md) | [Oracle](https://docs.oracle.com/en/database/oracle/apex/26.1/aeapi/LOG_DBMS_OUTPUT-Procedure.html) |
| LOG_LONG_MESSAGE Procedure | procedure | [local](APEX_DEBUG/LOG_LONG_MESSAGE_Procedure.md) | [Oracle](https://docs.oracle.com/en/database/oracle/apex/26.1/aeapi/LOG_LONG_MESSAGE-Procedure.html) |
| LOG_MESSAGE Procedure (Deprecated) | procedure | [local](APEX_DEBUG/LOG_MESSAGE_Procedure_(Deprecated).md) | [Oracle](https://docs.oracle.com/en/database/oracle/apex/26.1/aeapi/LOG_MESSAGE-Procedure-Deprecated.html) |
| LOG_PAGE_SESSION_STATE Procedure | procedure | [local](APEX_DEBUG/LOG_PAGE_SESSION_STATE_Procedure.md) | [Oracle](https://docs.oracle.com/en/database/oracle/apex/26.1/aeapi/LOG_PAGE_SESSION_STATE-Procedure.html) |
| MESSAGE Procedure | procedure | [local](APEX_DEBUG/MESSAGE_Procedure.md) | [Oracle](https://docs.oracle.com/en/database/oracle/apex/26.1/aeapi/MESSAGE-Procedure.html) |
| REMOVE_DEBUG_BY_AGE Procedure | procedure | [local](APEX_DEBUG/REMOVE_DEBUG_BY_AGE_Procedure.md) | [Oracle](https://docs.oracle.com/en/database/oracle/apex/26.1/aeapi/REMOVE_DEBUG_BY_AGE-Procedure.html) |
| REMOVE_DEBUG_BY_APP Procedure | procedure | [local](APEX_DEBUG/REMOVE_DEBUG_BY_APP_Procedure.md) | [Oracle](https://docs.oracle.com/en/database/oracle/apex/26.1/aeapi/REMOVE_DEBUG_BY_APP-Procedure.html) |
| REMOVE_DEBUG_BY_VIEW Procedure | procedure | [local](APEX_DEBUG/REMOVE_DEBUG_BY_VIEW_Procedure.md) | [Oracle](https://docs.oracle.com/en/database/oracle/apex/26.1/aeapi/REMOVE_DEBUG_BY_VIEW-Procedure.html) |
| REMOVE_SESSION_MESSAGES Procedure | procedure | [local](APEX_DEBUG/REMOVE_SESSION_MESSAGES_Procedure.md) | [Oracle](https://docs.oracle.com/en/database/oracle/apex/26.1/aeapi/REMOVE_SESSION_MESSAGES-Procedure.html) |
| TOCHAR Function | function | [local](APEX_DEBUG/TOCHAR_Function.md) | [Oracle](https://docs.oracle.com/en/database/oracle/apex/26.1/aeapi/TOCHAR-Function.html) |
| TRACE Procedure | procedure | [local](APEX_DEBUG/TRACE_Procedure.md) | [Oracle](https://docs.oracle.com/en/database/oracle/apex/26.1/aeapi/TRACE-Procedure.html) |
| WARN Procedure | procedure | [local](APEX_DEBUG/WARN_Procedure.md) | [Oracle](https://docs.oracle.com/en/database/oracle/apex/26.1/aeapi/WARN-Procedure.html) |

<!-- END GENERATED MEMBER LINKS -->
