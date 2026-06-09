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
begin
    apex_ai.SET_TOOL_RESULT(
        p_response_handler_param => null,
        p_response_handler_result => null,
        p_tool_call => null,
        p_result => to_clob('Example text')
    );
end;
/
```

## More Complex Example

```sql
begin
    -- Assuming this runs inside an APEX page process with the right workspace/app context.
    apex_ai.SET_TOOL_RESULT(
            p_response_handler_param => null,
            p_response_handler_result => null,
            p_tool_call => null,
            p_result => to_clob('Example text')
        );
end;
/
```

