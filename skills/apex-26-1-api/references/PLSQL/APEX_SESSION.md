# APEX_SESSION

Source: [Oracle APEX 26.1 API Reference](https://docs.oracle.com/en/database/oracle/apex/26.1/aeapi/APEX_SESSION.html)

Status: curated first-pass reference.

## Purpose

`APEX_SESSION` creates, attaches to, detaches from, and deletes Oracle APEX runtime sessions from PL/SQL. It is especially important for scripts, jobs, SQL Workshop experiments, test harnesses, and any server-side code that needs APEX context outside a normal browser request.

Many APEX APIs assume the current database session has an APEX application/session environment. `APEX_SESSION.CREATE_SESSION` and `APEX_SESSION.ATTACH` are the safe way to establish that environment when it is missing.

## When To Use

Use `APEX_SESSION` when:

- A script needs to call APEX APIs that depend on `APP_ID`, `APP_PAGE_ID`, `APP_USER`, session state, application initialization code, or workspace context.
- A test harness needs to run page-process-like code outside the browser.
- A background process needs to attach to an existing APEX session.
- A utility script must enable debug or trace for future requests in a session.
- A multitenant app needs to associate a tenant ID with the current session.

Do not create or attach sessions casually inside normal page rendering or page processing. In a normal APEX request, APEX already created and initialized the session.

## Lifecycle

Create a new session when no APEX session exists:

```sql
begin
    apex_session.create_session(
        p_app_id   => 100,
        p_page_id  => 1,
        p_username => 'USER');

    -- Call APEX APIs that require session context here.

    apex_session.delete_session;
end;
/
```

Attach to an existing session when you know the session ID:

```sql
begin
    apex_session.attach(
        p_app_id     => 100,
        p_page_id    => 1,
        p_session_id => 12345678901234);

    -- Work inside the attached session.

    apex_session.detach;
end;
/
```

Prefer `DELETE_SESSION` after `CREATE_SESSION` when the script owns the temporary session. Prefer `DETACH` after `ATTACH` when the script only borrowed an existing session.

## Public Members

| Member | Use | Local detail | Source |
| --- | --- | --- | --- |
| `ATTACH` | Attach the database session to an existing APEX app/session/page context. | [local](APEX_SESSION/ATTACH_Procedure.md) | [Oracle](https://docs.oracle.com/en/database/oracle/apex/26.1/aeapi/ATTACH-Procedure.html) |
| `CREATE_SESSION` | Create a new APEX session, set APEX environment, and run app initialization code. | [local](APEX_SESSION/CREATE_SESSION_Procedure.md) | [Oracle](https://docs.oracle.com/en/database/oracle/apex/26.1/aeapi/CREATE_SESSION-Procedure.html) |
| `DETACH` | Detach from current session, reset environment, and run app cleanup code. | [local](APEX_SESSION/DETACH_Procedure.md) | [Oracle](https://docs.oracle.com/en/database/oracle/apex/26.1/aeapi/DETACH-Procedure.html) |
| `DELETE_SESSION` | Delete a session. If attached, cleanup code runs and environment is reset. | [local](APEX_SESSION/DELETE_SESSION_Procedure.md) | [Oracle](https://docs.oracle.com/en/database/oracle/apex/26.1/aeapi/DELETE_SESSION-Procedure.html) |
| `SET_DEBUG` | Enable or disable debug for future requests in a session. | [local](APEX_SESSION/SET_DEBUG_Procedure.md) | [Oracle](https://docs.oracle.com/en/database/oracle/apex/26.1/aeapi/SET_DEBUG-Procedure.html) |
| `SET_TENANT_ID` | Associate a tenant ID with the current session for multitenant apps. | [local](APEX_SESSION/SET_TENANT_ID_Procedure.md) | [Oracle](https://docs.oracle.com/en/database/oracle/apex/26.1/aeapi/SET_TENANT_ID.html) |
| `SET_TRACE` | Enable or disable trace mode for future requests in a session. | [local](APEX_SESSION/SET_TRACE_Procedure.md) | [Oracle](https://docs.oracle.com/en/database/oracle/apex/26.1/aeapi/SET_TRACE-Procedure.html) |

## `CREATE_SESSION`

Signature:

```sql
apex_session.create_session(
   p_app_id                   in number,
   p_page_id                  in number,
   p_username                 in varchar2,
   p_call_post_authentication in boolean default false );
```

Simple example:

```sql
begin
    apex_session.create_session(
        p_app_id   => 100,
        p_page_id  => 1,
        p_username => 'SCOTT');
end;
/
```

More complex example with guaranteed cleanup:

```sql
declare
    l_answer clob;
begin
    apex_session.create_session(
        p_app_id   => 100,
        p_page_id  => 1,
        p_username => 'SCOTT');

    l_answer := apex_ai.generate(
        p_agent_static_id => 'low_code_expert',
        p_prompt          => 'Summarize the current application context.');

    apex_session.delete_session;
exception
    when others then
        apex_session.delete_session;
        raise;
end;
/
```

Use `p_call_post_authentication => true` only when the script should also run post-authentication processing.

## `ATTACH`

Signature:

```sql
apex_session.attach(
    p_app_id     in number,
    p_page_id    in number,
    p_session_id in number );
```

Simple example:

```sql
begin
    apex_session.attach(
        p_app_id     => 100,
        p_page_id    => 10,
        p_session_id => 12345678901234);
end;
/
```

More complex example:

```sql
begin
    apex_session.attach(
        p_app_id     => 100,
        p_page_id    => 10,
        p_session_id => 12345678901234);

    apex_util.set_session_state(
        p_name  => 'P10_STATUS',
        p_value => 'REVIEWED');

    apex_session.detach;
end;
/
```

Use `ATTACH` when the session already exists and should survive after the script ends.

## `DETACH` And `DELETE_SESSION`

`DETACH` resets the current database session's APEX environment without deleting the APEX session. Use it after `ATTACH`.

```sql
begin
    apex_session.detach;
end;
/
```

`DELETE_SESSION` removes the session. Use it when a script created a temporary session.

```sql
begin
    apex_session.delete_session(
        p_session_id => apex_application.g_instance);
end;
/
```

Safe cleanup pattern:

```sql
begin
    apex_session.create_session(100, 1, 'SCOTT');

    -- Work here.

    apex_session.delete_session;
exception
    when others then
        begin
            apex_session.delete_session;
        exception
            when others then
                null;
        end;
        raise;
end;
/
```

## `SET_DEBUG`

Use `SET_DEBUG` to enable debug for future requests in a session. `NULL` disables debug; levels `1` through `9` enable debug at that level.

```sql
begin
    apex_session.set_debug(
        p_session_id => apex_application.g_instance,
        p_level      => apex_debug.c_log_level_info);
end;
/
```

When exact log-level constants are not available in the calling environment, use the numeric levels documented for debug.

## `SET_TRACE`

Use `SET_TRACE` to enable or disable trace mode for future requests in a session.

```sql
begin
    apex_session.set_trace(
        p_session_id => apex_application.g_instance,
        p_mode       => 'SQL');
end;
/
```

Disable trace:

```sql
begin
    apex_session.set_trace(
        p_session_id => apex_application.g_instance,
        p_mode       => null);
end;
/
```

## `SET_TENANT_ID`

Use `SET_TENANT_ID` in multitenant APEX apps where session behavior, security, or filtering depends on the current tenant.

```sql
begin
    apex_session.set_tenant_id(
        p_tenant_id => 'ACME');
end;
/
```

After setting the tenant ID, application code can refer to the built-in tenant context, including `APP_TENANT_ID`.

## Safety Guidance

- Create sessions only for trusted automation, scripts, and controlled jobs.
- Use the correct application, page, and username because initialization code can depend on all three.
- Clean up sessions created by scripts.
- Detach from sessions borrowed by scripts.
- Do not use arbitrary user input as a session ID.
- Enable debug and trace only when needed; turn them off after diagnosis.
- Remember that initialization and cleanup PL/SQL code can have side effects.

<!-- BEGIN GENERATED MEMBER LINKS -->

## Local Member Detail Pages

Generated navigation for LLM retrieval. Use the local detail page first, then follow the Oracle source link when exact wording or edge-case behavior must be verified.

| Member | Kind | Local detail | Source |
| --- | --- | --- | --- |
| ATTACH Procedure | procedure | [local](APEX_SESSION/ATTACH_Procedure.md) | [Oracle](https://docs.oracle.com/en/database/oracle/apex/26.1/aeapi/ATTACH-Procedure.html) |
| CREATE_SESSION Procedure | procedure | [local](APEX_SESSION/CREATE_SESSION_Procedure.md) | [Oracle](https://docs.oracle.com/en/database/oracle/apex/26.1/aeapi/CREATE_SESSION-Procedure.html) |
| DETACH Procedure | procedure | [local](APEX_SESSION/DETACH_Procedure.md) | [Oracle](https://docs.oracle.com/en/database/oracle/apex/26.1/aeapi/DETACH-Procedure.html) |
| DELETE_SESSION Procedure | procedure | [local](APEX_SESSION/DELETE_SESSION_Procedure.md) | [Oracle](https://docs.oracle.com/en/database/oracle/apex/26.1/aeapi/DELETE_SESSION-Procedure.html) |
| SET_DEBUG Procedure | procedure | [local](APEX_SESSION/SET_DEBUG_Procedure.md) | [Oracle](https://docs.oracle.com/en/database/oracle/apex/26.1/aeapi/SET_DEBUG-Procedure.html) |
| SET_TENANT_ID Procedure | procedure | [local](APEX_SESSION/SET_TENANT_ID_Procedure.md) | [Oracle](https://docs.oracle.com/en/database/oracle/apex/26.1/aeapi/SET_TENANT_ID.html) |
| SET_TRACE Procedure | procedure | [local](APEX_SESSION/SET_TRACE_Procedure.md) | [Oracle](https://docs.oracle.com/en/database/oracle/apex/26.1/aeapi/SET_TRACE-Procedure.html) |

<!-- END GENERATED MEMBER LINKS -->
