# APEX_STRING.SHUFFLE Procedure

Source: [Oracle APEX 26.1 API Reference](https://docs.oracle.com/en/database/oracle/apex/26.1/aeapi/SHUFFLE-Procedure.html)

Status: generated detailed reference. Review edge cases against the source before production use.

Parent package: [APEX_STRING](../APEX_STRING.md)

## Purpose

This procedure randomly re-orders the values of the input table.

## When To Use

Use this page when code needs the `APEX_STRING.SHUFFLE` procedure. Confirm security, workspace, and session requirements for your calling context.

## Signature

```sql
APEX_STRING.SHUFFLE (
    p_table IN OUT NOCOPY apex_t_varchar2 );
```

## Parameters

| Parameter | Description |
| --- | --- |
| `p_table` | The input table, which will be modified by the procedure. |

## Returns

This is a procedure and does not return a value.

## Important Notes

- Most APEX APIs assume the correct APEX workspace, application, and session context.
- Validate user-controlled values before passing them into administrative, security, SQL, or web-service APIs.
- Use the source link for exact behavior, defaults, and version-specific caveats.

## Simple Example

```sql
begin
    apex_string.SHUFFLE(
        p_table => null
    );
end;
/
```

