# APEX_JSON.PARSE Procedure Signature 2

Source: [Oracle APEX 26.1 API Reference](https://docs.oracle.com/en/database/oracle/apex/26.1/aeapi/PARSE-Procedure-Signature-2.html)

Status: generated detailed reference. Review edge cases against the source before production use.

Parent package: [APEX_JSON](../APEX_JSON.md)

## Purpose

This procedure parses a JSON-formatted varchar2 or clob and puts the members into the package global g_values . This simplified API works similar to the parse() procedure for signature 1, but saves the developer from declaring a local variable for parsed JSON data and passing it to each JSON API call.

## When To Use

Use this page when code needs the `APEX_JSON.PARSE` procedure. Confirm security, workspace, and session requirements for your calling context.

## Signature

```sql
APEX_JSON.PARSE (
    p_source    IN VARCHAR2,
    p_strict    IN BOOLEAN  DEFAULT TRUE );

APEX_JSON.PARSE (
    p_source    IN CLOB,
    p_strict    IN BOOLEAN  DEFAULT TRUE );
```

## Parameters

| Parameter | Description |
| --- | --- |
| `p_source` | The JSON source ( VARCHAR2 or CLOB ). |
| `p_strict` | If TRUE (default), enforce strict JSON rules. |

## Returns

This is a procedure and does not return a value.

## Important Notes

- Most APEX APIs assume the correct APEX workspace, application, and session context.
- Validate user-controlled values before passing them into administrative, security, SQL, or web-service APIs.
- Use the source link for exact behavior, defaults, and version-specific caveats.

## Simple Example

Parse into the package global values when a short block will immediately read from G_VALUES.

```sql
begin
    apex_json.parse(
        p_source => '{"order":{"id":101,"status":"OPEN"}}',
        p_strict => true
    );

    apex_util.set_session_state(
        p_name  => 'P10_STATUS',
        p_value => apex_json.get_varchar2(p_path => 'order.status')
    );
end;
/
```
