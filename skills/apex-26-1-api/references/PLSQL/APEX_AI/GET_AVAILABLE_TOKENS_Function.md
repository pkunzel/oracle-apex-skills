# APEX_AI.GET_AVAILABLE_TOKENS Function

Source: [Oracle APEX 26.1 API Reference](https://docs.oracle.com/en/database/oracle/apex/26.1/aeapi/APEX_AI.GET_AVAILABLE_TOKENS-Function.html)

Status: generated detailed reference. Review edge cases against the source before production use.

Parent package: [APEX_AI](../APEX_AI.md)

## Purpose

Returns the available tokens for the given AI service. If no AI service is provided, returns available tokens for the default AI service of the current application. Otherwise, returns available tokens for the current workspace.

## When To Use

Use this page when code needs the `APEX_AI.GET_AVAILABLE_TOKENS` function. Confirm security, workspace, and session requirements for your calling context.

## Signature

```sql
APEX_AI.GET_AVAILABLE_TOKENS (
    p_service_static_id     IN VARCHAR2    DEFAULT NULL )
RETURN NUMBER;
```

## Parameters

| Parameter | Description |
| --- | --- |
| `p_service_static_id` | The Generative AI service static ID. |

## Returns

Available token count which can be consumed before the configured limit is reached. NULL if no limits have been configured.

## Important Notes

- Most APEX APIs assume the correct APEX workspace, application, and session context.
- Validate user-controlled values before passing them into administrative, security, SQL, or web-service APIs.
- Use the source link for exact behavior, defaults, and version-specific caveats.

## Simple Example

```sql
declare
    l_result NUMBER;
begin
    l_result := apex_ai.GET_AVAILABLE_TOKENS(
        p_service_static_id => 'MY_AI_SERVICE'
    );
    sys.dbms_output.put_line('Result captured.');
end;
/
```

