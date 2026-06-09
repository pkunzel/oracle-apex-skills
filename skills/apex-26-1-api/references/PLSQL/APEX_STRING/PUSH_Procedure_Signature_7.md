# APEX_STRING.PUSH Procedure Signature 7

Source: [Oracle APEX 26.1 API Reference](https://docs.oracle.com/en/database/oracle/apex/26.1/aeapi/PUSH-Procedure-Signature-7.html)

Status: generated detailed reference. Review edge cases against the source before production use.

Parent package: [APEX_STRING](../APEX_STRING.md)

## Purpose

This procedure appends number collection values to the apex_t_varchar2 table.

## When To Use

Use this page when code needs the `APEX_STRING.PUSH` procedure. Confirm security, workspace, and session requirements for your calling context.

## Signature

```sql
APEX_STRING.PUSH (
    p_table         IN OUT NOCOPY apex_t_varchar2,
    p_values        IN            apex_t_number,
    p_format_mask   IN            VARCHAR2 DEFAULT NULL );
```

## Parameters

| Parameter | Description |
| --- | --- |
| `p_table` | The table. |
| `p_values` | Values that should be added to p_table . |
| `p_format_mask` | Format mask to use when converting numbers to strings. |

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
        p_values => 1,
        p_format_mask => 'EXAMPLE'
    );
end;
/
```

