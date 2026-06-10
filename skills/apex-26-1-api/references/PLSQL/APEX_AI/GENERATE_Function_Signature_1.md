# APEX_AI.GENERATE Function Signature 1

Source: [Oracle APEX 26.1 API Reference](https://docs.oracle.com/en/database/oracle/apex/26.1/aeapi/APEX_AI.GENERATE-Function-Signature-1.html)

Status: generated detailed reference. Review edge cases against the source before production use.

Parent package: [APEX_AI](../APEX_AI.md)

## Purpose

This function generates a response for a given prompt based on an AI Agent.

## When To Use

Use this page when code needs the `APEX_AI.GENERATE` function. Confirm security, workspace, and session requirements for your calling context.

## Signature

```sql
FUNCTION apex_ai.generate (
    p_agent_static_id   IN               VARCHAR2,
    p_prompt            IN               CLOB,
    p_attachments       IN               t_attachments   DEFAULT NULL )
    RETURN CLOB;
```

## Parameters

| Parameter | Description |
| --- | --- |
| `p_agent_static_id` | The static ID of the AI Agent defined under the application's Shared Components. |
| `p_prompt` | The user prompt. |
| `p_attachments` | An optional collection of file attachments. Whether a specific file type is supported depends on the AI provider and model. |

## Returns

The response for the given prompt.

## Important Notes

- Most APEX APIs assume the correct APEX workspace, application, and session context.
- Validate user-controlled values before passing them into administrative, security, SQL, or web-service APIs.
- Use the source link for exact behavior, defaults, and version-specific caveats.

## Simple Example

```sql
declare
    l_answer clob;
begin
    l_answer := apex_ai.generate(
        p_agent_static_id => 'order_assistant',
        p_prompt => to_clob('Write a short status update for order ' || :P10_ORDER_ID)
    );

    apex_debug.info('AI response length: %s', dbms_lob.getlength(l_answer));
end;
/
```
