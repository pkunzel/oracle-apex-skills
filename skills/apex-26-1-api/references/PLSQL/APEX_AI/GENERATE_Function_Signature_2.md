# APEX_AI.GENERATE Function Signature 2

Source: [Oracle APEX 26.1 API Reference](https://docs.oracle.com/en/database/oracle/apex/26.1/aeapi/APEX_AI.GENERATE-Function-Signature-2.html)

Status: generated detailed reference. Review edge cases against the source before production use.

Parent package: [APEX_AI](../APEX_AI.md)

## Purpose

This function generates a response for a given prompt.

## When To Use

Use this page when code needs the `APEX_AI.GENERATE` function. Confirm security, workspace, and session requirements for your calling context.

## Signature

```sql
FUNCTION apex_ai.generate (    
    p_prompt                         IN   CLOB,
    p_system_prompt                  IN   CLOB             DEFAULT NULL,
    p_service_static_id              IN   VARCHAR2         DEFAULT NULL,
    p_temperature                    IN   NUMBER           DEFAULT NULL,
    p_attachments                    IN   t_attachments    DEFAULT NULL,
    p_response_json_schema           IN   CLOB             DEFAULT NULL,
    p_tools                          IN   t_tools          DEFAULT NULL,
    p_response_handler_procedure     IN   VARCHAR2         DEFAULT NULL,
    p_max_tool_roundtrips            IN   PLS_INTEGER      DEFAULT NULL )
    RETURN CLOB;
```

## Parameters

| Parameter | Description |
| --- | --- |
| `p_prompt` | The user prompt. |
| `p_system_prompt` | (Optional) The instructions defining the AI's role, rules, and behavior. |
| `p_service_static_id` | The Generative AI Service static ID If not provided, the app's default AI Service is used. |
| `p_temperature` | The temperature to use. How the temperature is interpreted depends on the Generative AI service implementation. Higher temperatures result in more 'creative' responses. See the documentation of the Generative AI provider for details and allowed values. |
| `p_attachments` | An optional collection of file attachments. Whether a specific file type is supported depends on the AI provider and model. |
| `p_response_json_schema` | Optionally provide a JSON Schema which the AI provider follows when generating the response. |
| `p_tools` | Optional collection of tool definitions the AI provider may call while generating a response. Tools enable function calling to retrieve additional data or trigger actions. |
| `p_response_handler_procedure` | Advanced. Optional PL/SQL procedure invoked to post-process provider responses. Use to customize how tool calls or partial responses are handled before returning the final result. |
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
    l_result CLOB;
begin
    l_result := apex_ai.GENERATE(
        p_prompt => to_clob('Example text'),
        p_system_prompt => to_clob('Example text'),
        p_service_static_id => 'MY_AI_SERVICE',
        p_temperature => 0.2,
        p_attachments => null,
        p_response_json_schema => to_clob('Example text'),
        p_tools => null,
        p_response_handler_procedure => 'EXAMPLE',
        p_max_tool_roundtrips => 3
    );
    sys.dbms_output.put_line('Result captured.');
end;
/
```

