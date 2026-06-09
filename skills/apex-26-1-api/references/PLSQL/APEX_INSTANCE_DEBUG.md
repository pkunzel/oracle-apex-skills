# APEX_INSTANCE_DEBUG

Source: [Oracle APEX 26.1 API Reference](https://docs.oracle.com/en/database/oracle/apex/26.1/aeapi/APEX_INSTANCE_DEBUG.html)

Status: curated first-pass reference.

## Purpose

`APEX_INSTANCE_DEBUG` controls and lists APEX instance-level debug information. It can enable or disable instance debug, check whether instance debug is enabled, and list activity, debug messages, and page views.

Use it for administrator diagnostics, not for normal application logging. For application code, use [APEX_DEBUG](APEX_DEBUG.md).

## When To Use

Use this package when an administrator needs instance-level visibility during troubleshooting.

Common tasks:

- Temporarily enable instance debug.
- Confirm whether instance debug is enabled.
- List recent activity, page views, or debug messages.
- Disable debug after diagnosis.

## API Surface

| Need | Members |
| --- | --- |
| Toggle debug | `ENABLE`, `DISABLE`, `IS_ENABLED` |
| List diagnostics | `LIST_ACTIVITY`, `LIST_MESSAGES`, `LIST_PAGE_VIEWS` |

## Enable Temporarily

```sql
begin
    apex_instance_debug.enable;
end;
/
```

Check state:

```sql
declare
    l_enabled boolean;
begin
    l_enabled := apex_instance_debug.is_enabled;

    if l_enabled then
        dbms_output.put_line('APEX instance debug is enabled.');
    end if;
end;
/
```

Disable when finished:

```sql
begin
    apex_instance_debug.disable;
end;
/
```

## List Recent Debug Messages

Assuming you are connected as an administrator in a diagnostic SQL session:

```sql
begin
    apex_instance_debug.list_messages;
end;
/
```

Use the member detail pages for filtering parameters and exact output behavior.

## Diagnostic Workflow

```sql
begin
    apex_instance_debug.enable;

    -- Reproduce the issue in a separate browser session.

    apex_instance_debug.list_page_views;
    apex_instance_debug.list_activity;
    apex_instance_debug.list_messages;

    apex_instance_debug.disable;
end;
/
```

For production, keep the enabled window short and controlled.

## Safety Notes

- Instance debug can reveal sensitive request, session, and application behavior. Enable it only for a specific diagnostic window.
- Disable debug after collecting evidence.
- Do not paste raw debug output containing tokens, credentials, or personal data into tickets or prompts without redaction.
- Prefer `APEX_DEBUG` for application-level instrumentation and `APEX_INSTANCE_DEBUG` for administrator diagnostics.

## Related APIs

- [APEX_DEBUG](APEX_DEBUG.md) for application debug messages.
- [APEX_INSTANCE_ADMIN](APEX_INSTANCE_ADMIN.md) for instance administration.

<!-- BEGIN GENERATED MEMBER LINKS -->

## Local Member Detail Pages

Generated navigation for LLM retrieval. Use the local detail page first, then follow the Oracle source link when exact wording or edge-case behavior must be verified.

| Member | Kind | Local detail | Source |
| --- | --- | --- | --- |
| DISABLE Procedure | procedure | [local](APEX_INSTANCE_DEBUG/DISABLE_Procedure.md) | [Oracle](https://docs.oracle.com/en/database/oracle/apex/26.1/aeapi/APEX_INSTANCE_DEBUG.DISABLE-Procedure.html) |
| ENABLE Procedure | procedure | [local](APEX_INSTANCE_DEBUG/ENABLE_Procedure.md) | [Oracle](https://docs.oracle.com/en/database/oracle/apex/26.1/aeapi/APEX_INSTANCE_DEBUG.ENABLE-Procedure.html) |
| IS_ENABLED Function | function | [local](APEX_INSTANCE_DEBUG/IS_ENABLED_Function.md) | [Oracle](https://docs.oracle.com/en/database/oracle/apex/26.1/aeapi/APEX_INSTANCE_DEBUG.IS_ENABLED-Function.html) |
| LIST_ACTIVITY Procedure | procedure | [local](APEX_INSTANCE_DEBUG/LIST_ACTIVITY_Procedure.md) | [Oracle](https://docs.oracle.com/en/database/oracle/apex/26.1/aeapi/APEX_INSTANCE_DEBUG.LIST_ACTIVITY-Procedure.html) |
| LIST_MESSAGES Procedure | procedure | [local](APEX_INSTANCE_DEBUG/LIST_MESSAGES_Procedure.md) | [Oracle](https://docs.oracle.com/en/database/oracle/apex/26.1/aeapi/APEX_INSTANCE_DEBUG.LIST_MESSAGES-Procedure.html) |
| LIST_PAGE_VIEWS Procedure | procedure | [local](APEX_INSTANCE_DEBUG/LIST_PAGE_VIEWS_Procedure.md) | [Oracle](https://docs.oracle.com/en/database/oracle/apex/26.1/aeapi/APEX_INSTANCE_DEBUG.LIST_PAGE_VIEWS-Procedure.html) |

<!-- END GENERATED MEMBER LINKS -->
