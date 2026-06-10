# APEX_AI.SET_TOOL_RESULT Procedure Signature 1

Source: [Oracle APEX 26.1 API Reference](https://docs.oracle.com/en/database/oracle/apex/26.1/aeapi/APEX_AI.SET_TOOL_RESULT-Procedure-Signature-1.html)

Status: generated detailed reference. Review edge cases against the source before production use.

Parent package: [APEX_AI](../APEX_AI.md)

## Purpose

This procedure dynamically changes the result of the "Execute Server-side Code" and "Retrieve Data" Generative AI Tools.

## When To Use

Use this page when code needs the `APEX_AI.SET_TOOL_RESULT` procedure. Confirm security, workspace, and session requirements for your calling context.

## Signature

```sql
PROCEDURE apex_ai.set_tool_result (
    p_result                 IN   CLOB                 DEFAULT NULL,
    p_notification_message   IN   VARCHAR2             DEFAULT NULL,
    p_notification_type      IN   t_notification_type  DEFAULT NULL,
    p_early_exit             IN   BOOLEAN              DEFAULT FALSE );
```

## Parameters

| Parameter | Description |
| --- | --- |
| `p_result` | A dynamic tool call result. Only relevant in the "Execute Server-side Code" tool which does not usually return a result. |
| `p_notification_message` | An optional notification message, overriding the declarative notification message |
| `p_notification_type` | An optional notification type, overriding the declarative notification type |
| `p_early_exit` | Whether to short circuit the communication and not return to the AI Service upon tool call completion. Defaults to false . |

## Returns

This is a procedure and does not return a value.

## Important Notes

- Most APEX APIs assume the correct APEX workspace, application, and session context.
- Validate user-controlled values before passing them into administrative, security, SQL, or web-service APIs.
- Use the source link for exact behavior, defaults, and version-specific caveats.

## Simple Example

```sql
begin
    apex_ai.set_tool_result(
        p_result => to_clob('{"status":"approved","orderId":"' || :P10_ORDER_ID || '"}'),
        p_notification_message => 'Order approval tool completed.',
        p_early_exit => true
    );
end;
/
```
