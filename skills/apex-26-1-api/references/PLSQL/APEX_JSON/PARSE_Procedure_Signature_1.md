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

```sql
begin
    apex_json.PARSE(
        p_values => 'EXAMPLE',
        p_source => to_clob('Example text'),
        p_strict => true
    );
end;
/
```

## More Complex Example

```sql
begin
    -- Assuming this runs inside an APEX page process with the right workspace/app context.
    apex_json.PARSE(
            p_values => 'EXAMPLE',
            p_source => to_clob('Example text'),
            p_strict => true
        );
end;
/
```

