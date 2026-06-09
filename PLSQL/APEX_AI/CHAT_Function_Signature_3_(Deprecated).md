# APEX_AI.CHAT Function Signature 3 (Deprecated)

Source: [Oracle APEX 26.1 API Reference](https://docs.oracle.com/en/database/oracle/apex/26.1/aeapi/APEX_AI.CHAT-Function-Signature-3.html)

Status: generated detailed reference. Review edge cases against the source before production use.

Parent package: [APEX_AI](../APEX_AI.md)

## Purpose

Note:

## When To Use

Use this page when code needs the `APEX_AI.CHAT` function. Confirm security, workspace, and session requirements for your calling context.

## Deprecation

This member is marked deprecated in the APEX 26.1 documentation. Prefer the documented replacement when available.

## Signature

```sql
APEX_AI.CHAT (
    p_config_static_id  IN              VARCHAR2,
    p_prompt            IN              CLOB,
    p_messages          IN OUT NOCOPY   t_chat_messages )
    RETURN CLOB;
```

## Parameters

| Parameter | Description |
| --- | --- |
| `p_config_static_id` | The static ID of the AI Agent. |
| `p_prompt` | The user prompt. |
| `p_messages` | The chat history that is updated with the provider response. |

## Returns

The response for the given prompt.

## Important Notes

- Most APEX APIs assume the correct APEX workspace, application, and session context.
- Validate user-controlled values before passing them into administrative, security, SQL, or web-service APIs.
- Use the source link for exact behavior, defaults, and version-specific caveats.

## Simple Example

```sql
declare
    l_result CLOB;
begin
    l_result := apex_ai.CHAT(
        p_config_static_id => 'EXAMPLE_STATIC_ID',
        p_prompt => to_clob('Example text'),
        p_messages => to_clob('Example text')
    );
    sys.dbms_output.put_line('Result captured.');
end;
/
```

## More Complex Example

```sql
declare
    l_result CLOB;
begin
    -- Assuming this runs outside a normal APEX page request.
    apex_session.create_session(
        p_app_id   => 100,
        p_page_id  => 1,
        p_username => 'USER');

    l_result := apex_ai.CHAT(
            p_config_static_id => 'EXAMPLE_STATIC_ID',
            p_prompt => to_clob('Example text'),
            p_messages => to_clob('Example text')
        );

    apex_session.delete_session;
exception
    when others then
        apex_session.delete_session;
        raise;
end;
/
```

