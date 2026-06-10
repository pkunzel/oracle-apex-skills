# APEX_AI.SET_TOOL_RESULT Procedure Signature 2

Source: [Oracle APEX 26.1 API Reference](https://docs.oracle.com/en/database/oracle/apex/26.1/aeapi/APEX_AI.SET_TOOL_RESULT-Procedure-Signature-2.html)

Status: generated detailed reference. Review edge cases against the source before production use.

Parent package: [APEX_AI](../APEX_AI.md)

## Purpose

Use this procedure within Response Handler procedures to set a tool call result.

## When To Use

Use this page when code needs the `APEX_AI.SET_TOOL_RESULT` procedure. Confirm security, workspace, and session requirements for your calling context.

## Signature

```sql
PROCEDURE apex_ai.set_tool_result (
    p_response_handler_param     IN               t_chat_response_handler_param,
    p_response_handler_result    IN OUT NOCOPY    t_chat_response_handler_result,
    p_tool_call                  IN               t_chat_message_tool_call,
    p_result                     IN               CLOB );
```

## Parameters

| Parameter | Description |
| --- | --- |
| `p_response_handler_param` | The response handler parameter. |
| `p_response_handler_result` | The response handler result. |
| `p_tool_call` | The specific tool call for which to provide a result. |
| `p_result` | The tool result. |

## Returns

This is a procedure and does not return a value.

## Important Notes

- Most APEX APIs assume the correct APEX workspace, application, and session context.
- Validate user-controlled values before passing them into administrative, security, SQL, or web-service APIs.
- Use the source link for exact behavior, defaults, and version-specific caveats.

## Simple Example

```sql
create or replace procedure ai_response_handler (
    p_param  in            apex_ai.t_chat_response_handler_param,
    p_result in out nocopy apex_ai.t_chat_response_handler_result )
as
begin
    if p_result.response.type = apex_ai.c_response_type_tool_calls then
        for i in 1 .. p_param.pending_tool_calls.count loop
            if p_param.pending_tool_calls(i).name = 'get_order_status' then
                apex_ai.set_tool_result(
                    p_response_handler_param  => p_param,
                    p_response_handler_result => p_result,
                    p_tool_call               => p_param.pending_tool_calls(i),
                    p_result                  => to_clob('{"status":"shipped"}') );
            end if;
        end loop;
    end if;
end;
/
```
