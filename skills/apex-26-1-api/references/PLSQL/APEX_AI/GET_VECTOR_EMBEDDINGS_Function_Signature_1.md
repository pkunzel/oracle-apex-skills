# APEX_AI.GET_VECTOR_EMBEDDINGS Function Signature 1

Source: [Oracle APEX 26.1 API Reference](https://docs.oracle.com/en/database/oracle/apex/26.1/aeapi/APEX_AI.GET_VECTOR_EMBEDDINGS-Function-Signature-1.html)

Status: generated detailed reference. Review edge cases against the source before production use.

Parent package: [APEX_AI](../APEX_AI.md)

## Purpose

This function receives the embedding from a vector provider for a given term.

## When To Use

Use this page when code needs the `APEX_AI.GET_VECTOR_EMBEDDINGS` function. Confirm security, workspace, and session requirements for your calling context.

## Signature

```sql
APEX_AI.GET_VECTOR_EMBEDDINGS (
    p_value                 IN CLOB,
    p_service_static_id     IN VARCHAR2 )
    RETURN VECTOR;
```

## Parameters

| Parameter | Description |
| --- | --- |
| `p_value` | The textual value for which the embedding is to be determined. |
| `p_service_static_id` | The Vector Provider static ID. |

## Returns

The embedding for the given value.

## Important Notes

- Most APEX APIs assume the correct APEX workspace, application, and session context.
- Validate user-controlled values before passing them into administrative, security, SQL, or web-service APIs.
- Use the source link for exact behavior, defaults, and version-specific caveats.

## Simple Example

```sql
declare
    l_result VECTOR;
begin
    l_result := apex_ai.GET_VECTOR_EMBEDDINGS(
        p_value => to_clob('Example text'),
        p_service_static_id => 'MY_AI_SERVICE'
    );
    sys.dbms_output.put_line('Result captured.');
end;
/
```

