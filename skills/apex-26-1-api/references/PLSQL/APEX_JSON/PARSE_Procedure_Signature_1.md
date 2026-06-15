# APEX_JSON.PARSE Procedure Signature 1

Source: [Oracle APEX 26.1 API Reference](https://docs.oracle.com/en/database/oracle/apex/26.1/aeapi/PARSE-Procedure-Signature-1.html)

Status: generated detailed reference. Review edge cases against the source before production use.

Parent package: [APEX_JSON](../APEX_JSON.md)

## Purpose

This procedure parses a JSON-formatted VARCHAR2 or CLOB and puts the members into p_values .

## When To Use

Use this page when code needs the `APEX_JSON.PARSE` procedure. Confirm security, workspace, and session requirements for your calling context.

## Signature

```sql
APEX_JSON.PARSE (
    p_values   IN OUT NOCOPY   t_values,
    p_source   IN VARCHAR2,
    p_strict   IN BOOLEAN      DEFAULT TRUE );

APEX_JSON.PARSE (
    p_values   IN OUT NOCOPY   t_values,
    p_source   IN CLOB,
    p_strict   IN BOOLEAN      DEFAULT TRUE );
```

## Parameters

| Parameter | Description |
| --- | --- |
| `p_values` | An index by VARCHAR2 result array which contains the JSON members and values. The default is g_values . |
| `p_source` | The JSON source ( VARCHAR2 or CLOB ) |
| `p_strict` | If TRUE (default), enforce strict JSON rules |

## Returns

This is a procedure and does not return a value.

## Important Notes

- Most APEX APIs assume the correct APEX workspace, application, and session context.
- Validate user-controlled values before passing them into administrative, security, SQL, or web-service APIs.
- Use the source link for exact behavior, defaults, and version-specific caveats.

## Simple Example

Parse JSON into a local T_VALUES variable so calls do not depend on package global state.

```sql
declare
    l_values apex_json.t_values;
    l_order_id number;

begin
    apex_json.parse(
        p_values => l_values,
        p_source => '{"order":{"id":101,"status":"OPEN","total":1250.75,"created":"2026-06-15T12:30:00Z","expedited":true,"lines":[{"sku":"A100","qty":2},{"sku":"B200","qty":1}]}}'
    );

    l_order_id := apex_json.get_number(
        p_path   => 'order.id',
        p_values => l_values
    );

end;
/
```
