# APEX_JSON.WRITE Procedure Signature 14

Source: [Oracle APEX 26.1 API Reference](https://docs.oracle.com/en/database/oracle/apex/26.1/aeapi/WRITE-Procedure-Signature-14.html)

Status: generated detailed reference. Review edge cases against the source before production use.

Parent package: [APEX_JSON](../APEX_JSON.md)

## Purpose

This procedure writes an attribute where the value is an array that contains all rows that the cursor returns. Each row is a separate object.

## When To Use

Use this page when code needs the `APEX_JSON.WRITE` procedure. Confirm security, workspace, and session requirements for your calling context.

## Signature

```sql
APEX_JSON.WRITE (
    p_name        IN VARCHAR2,
    p_cursor      IN OUT NOCOPY sys_refcursor );
```

## Parameters

| Parameter | Description |
| --- | --- |
| `p_name` | The attribute name. |
| `p_cursor` | The cursor. |

## Returns

This is a procedure and does not return a value.

## Important Notes

- Most APEX APIs assume the correct APEX workspace, application, and session context.
- Validate user-controlled values before passing them into administrative, security, SQL, or web-service APIs.
- Use the source link for exact behavior, defaults, and version-specific caveats.

## Simple Example

```sql
begin
    apex_json.WRITE(
        p_name => 'EXAMPLE',
        p_cursor => null
    );
end;
/
```

