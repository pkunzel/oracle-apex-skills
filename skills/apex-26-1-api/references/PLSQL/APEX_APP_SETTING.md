# APEX_APP_SETTING

Source: [Oracle APEX 26.1 API Reference](https://docs.oracle.com/en/database/oracle/apex/26.1/aeapi/APEX_APP_SETTING.html)

Status: curated first-pass reference.

## Purpose

`APEX_APP_SETTING` reads and writes application settings in the current APEX application. It is a compact but important package for feature flags, environment-specific values, provider choices, public configuration, and administrator-controlled runtime switches.

Use application settings for non-secret configuration. Use `APEX_CREDENTIAL` for secrets, tokens, passwords, API keys, private keys, and authorization headers.

## When To Use

Use `APEX_APP_SETTING` when:

- Code needs to read an application setting by name.
- An administrator page updates a setting value.
- A demo or presentation needs safe toggles such as AI model name, agent Static ID, max rows, or feature mode.
- Application logic needs a value validated by the application setting definition.

Do not use application settings as a secret store. Settings are configuration, not credentials.

## API Surface

| Member | Use |
| --- | --- |
| `GET_VALUE` | Return a setting value in the current application. |
| `SET_VALUE` | Change a setting value in the current application. |

## Get A Setting

Signature:

```sql
apex_app_setting.get_value(
    p_name        in varchar2,
    p_raise_error in boolean default false )
    return varchar2;
```

Simple example:

```sql
declare
    l_model varchar2(255);
begin
    l_model := apex_app_setting.get_value(
        p_name        => 'AI_MODEL',
        p_raise_error => true);
end;
/
```

Use `p_raise_error => true` when a missing or disabled setting should fail fast.

## Set A Setting

Signature:

```sql
apex_app_setting.set_value(
    p_name        in varchar2,
    p_value       in varchar2,
    p_raise_error in boolean default false );
```

Simple administrator page process:

```sql
begin
    if not apex_authorization.has_access('CAN_MANAGE_APP_SETTINGS') then
        raise_application_error(-20000, 'Not authorized.');
    end if;

    apex_app_setting.set_value(
        p_name        => 'AI_MODE',
        p_value       => :P50_AI_MODE,
        p_raise_error => true);
end;
/
```

If the setting has valid values or is required, APEX validates the value. If the setting is subscribed from another application, this API does not update it; with `p_raise_error => true`, it raises an error.

## More Complex Example

Assuming these application settings exist:

- `AI_AGENT_STATIC_ID`
- `AI_MAX_PROMPT_CHARS`
- `AI_DEMO_MODE`

Use them to drive an AI feature without hard-coding values:

```sql
declare
    l_agent_static_id varchar2(255);
    l_max_chars       number;
    l_prompt          clob;
    l_answer          clob;
begin
    l_agent_static_id := apex_app_setting.get_value('AI_AGENT_STATIC_ID', true);
    l_max_chars       := to_number(apex_app_setting.get_value('AI_MAX_PROMPT_CHARS', true));
    l_prompt          := substr(:P10_PROMPT, 1, l_max_chars);

    if apex_app_setting.get_value('AI_DEMO_MODE') = 'Y' then
        l_prompt := '[Demo] ' || l_prompt;
    end if;

    l_answer := apex_ai.generate(
        p_agent_static_id => l_agent_static_id,
        p_prompt          => l_prompt);

    :P10_ANSWER := l_answer;
end;
/
```

This pattern keeps demo knobs in application metadata and secrets in credentials.

## Safety Guidance

- Use `APEX_CREDENTIAL` for secrets and `APEX_APP_SETTING` for non-secret configuration.
- Prefer `p_raise_error => true` for required settings so failures are visible.
- Use authorization before allowing users to call `SET_VALUE`.
- Expect `SET_VALUE` to obey required-value, valid-value, build-option, and subscription behavior.
- For code outside a normal APEX request, create or attach an APEX session before reading current-application settings.

<!-- BEGIN GENERATED MEMBER LINKS -->

## Local Member Detail Pages

Generated navigation for LLM retrieval. Use the local detail page first, then follow the Oracle source link when exact wording or edge-case behavior must be verified.

| Member | Kind | Local detail | Source |
| --- | --- | --- | --- |
| GET_VALUE Function | function | [local](APEX_APP_SETTING/GET_VALUE_Function.md) | [Oracle](https://docs.oracle.com/en/database/oracle/apex/26.1/aeapi/APEX_APP_SETTING.GET_VALUE-Function.html) |
| SET_VALUE Procedure | procedure | [local](APEX_APP_SETTING/SET_VALUE_Procedure.md) | [Oracle](https://docs.oracle.com/en/database/oracle/apex/26.1/aeapi/APEX_APP_SETTING.SET_VALUE-Procedure.html) |

<!-- END GENERATED MEMBER LINKS -->
