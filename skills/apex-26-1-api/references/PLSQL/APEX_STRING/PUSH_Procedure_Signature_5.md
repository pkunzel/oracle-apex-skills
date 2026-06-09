# APEX_STRING.PUSH Procedure Signature 5

Source: [Oracle APEX 26.1 API Reference](https://docs.oracle.com/en/database/oracle/apex/26.1/aeapi/PUSH-Procedure-Signature-5.html)

Status: generated detailed reference. Review edge cases against the source before production use.

Parent package: [APEX_STRING](../APEX_STRING.md)

## Purpose

This procedure appends collection values to the apex_t_clob table.

## When To Use

Use this page when code needs the `APEX_STRING.PUSH` procedure. Confirm security, workspace, and session requirements for your calling context.

## Signature

```sql
APEX_STRING.PUSH (
  p_table  IN OUT NOCOPY apex_t_clob,
  p_values IN            apex_t_clob )
```

## Parameters

| Parameter | Description |
| --- | --- |
| `p_table` | The table. |
| `p_values` | Values to be added to p_table . |

## Returns

This is a procedure and does not return a value.

## Important Notes

- Most APEX APIs assume the correct APEX workspace, application, and session context.
- Validate user-controlled values before passing them into administrative, security, SQL, or web-service APIs.
- Use the source link for exact behavior, defaults, and version-specific caveats.

## Simple Example

```sql
begin
    apex_string.PUSH(
        p_table => null,
        p_values => to_clob('Example text')
    );
end;
/
```

