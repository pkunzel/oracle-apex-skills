# APEX_JSON.STRINGIFY Function Signature 4

Source: [Oracle APEX 26.1 API Reference](https://docs.oracle.com/en/database/oracle/apex/26.1/aeapi/STRINGIFY-Function-Signature-4.html)

Status: generated detailed reference. Review edge cases against the source before production use.

Parent package: [APEX_JSON](../APEX_JSON.md)

## Purpose

This function converts a boolean value to an escaped JSON value.

## When To Use

Use this page when code needs the `APEX_JSON.STRINGIFY` function. Confirm security, workspace, and session requirements for your calling context.

## Signature

```sql
APEX_JSON.STRINGIFY (
    p_value  IN BOOLEAN )
RETURN VARCHAR2;
```

## Parameters

| Parameter | Description |
| --- | --- |
| `p_value` | The boolean value to be converted. |

## Returns

Return Description VARCHAR2 The converted and escaped JSON value.

## Important Notes

- Most APEX APIs assume the correct APEX workspace, application, and session context.
- Validate user-controlled values before passing them into administrative, security, SQL, or web-service APIs.
- Use the source link for exact behavior, defaults, and version-specific caveats.

## Simple Example

Stringify a Boolean value.

```sql
declare
    l_json_value varchar2(32767);
begin
    l_json_value := apex_json.stringify(true);
end;
/
```
