# APEX_AI.CHAT Function Signature 2

Source: [Oracle APEX 26.1 API Reference](https://docs.oracle.com/en/database/oracle/apex/26.1/aeapi/APEX_AI.CHAT-Function-Signature-2.html)

Status: generated detailed reference. Review edge cases against the source before production use.

Parent package: [APEX_AI](../APEX_AI.md)

## Purpose

This function chats with a generative AI service given a prompt and potential earlier responses.

## When To Use

Use this page when code needs the `APEX_AI.CHAT` function. Confirm security, workspace, and session requirements for your calling context.

## Signature

```sql
APEX_AI.CHAT (
    p_prompt                     IN              CLOB,
    p_system_prompt              IN              CLOB                DEFAULT NULL,
    p_service_static_id          IN              VARCHAR2            DEFAULT NULL,
    p_temperature                IN              NUMBER              DEFAULT NULL,
    p_messages                   IN OUT NOCOPY   t_chat_messages,
    p_tools                      IN              t_tools             DEFAULT NULL,
    p_response_handler_procedure IN              VARCHAR2            DEFAULT NULL,
    p_max_tool_roundtrips        IN              PLS_INTEGER         DEFAULT NULL )
    RETURN CLOB;
```

## Parameters

| Parameter | Description |
| --- | --- |
| `p_prompt` | The user prompt. |
| `p_system_prompt` | (Optional) The instructions defining the AI's role, rules, and behavior. |
| `p_service_static_id` | The Generative AI Service static ID. If not provided, uses the app's default AI service. |
| `p_temperature` | The temperature to use. How the temperature is interpreted depends on the generative AI service implementation. Higher temperatures result in more "creative" responses. See the documentation of the generative AI provider for details and allowed values. |
| `p_messages` | The responses from an earlier conversation. Responses are automatically added to p_messages . |
| `p_tools` | Optional collection of tool definitions the AI provider may call while generating a response. Tools enable function calling to retrieve additional data or trigger actions. |
| `p_response_handler_procedure` | Optional PL/SQL procedure invoked to post-process provider responses. Use to customize how tool calls or partial responses are handled before returning the final result. |
| `p_max_tool_roundtrips` | (Optional) Limit the number of network roundtrips that can be made when responding to tool calls. |

## Returns

The response for the given prompt.

## Important Notes

- Most APEX APIs assume the correct APEX workspace, application, and session context.
- Validate user-controlled values before passing them into administrative, security, SQL, or web-service APIs.
- Use the source link for exact behavior, defaults, and version-specific caveats.

## Simple Example

```sql
declare
    l_messages apex_ai.t_chat_messages := apex_ai.c_chat_messages;
    l_answer   clob;
begin
    l_answer := apex_ai.chat(
        p_prompt => to_clob('Explain why order ' || :P10_ORDER_ID || ' is delayed.'),
        p_system_prompt => to_clob('Answer as a concise support analyst.'),
        p_service_static_id => 'MY_AI_SERVICE',
        p_temperature => 0.2,
        p_messages => l_messages
    );

    apex_debug.info('AI response length: %s', dbms_lob.getlength(l_answer));
end;
/
```
