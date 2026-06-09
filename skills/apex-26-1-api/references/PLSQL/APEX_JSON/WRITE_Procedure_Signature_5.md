# APEX_JSON.WRITE Procedure Signature 5

Source: [Oracle APEX 26.1 API Reference](https://docs.oracle.com/en/database/oracle/apex/26.1/aeapi/WRITE-Procedure-Signature-5.html)

Status: generated detailed reference. Review edge cases against the source before production use.

Parent package: [APEX_JSON](../APEX_JSON.md)

## Purpose

This procedure writes an array attribute of type boolean .

## When To Use

Use this page when code needs the `APEX_JSON.WRITE` procedure. Confirm security, workspace, and session requirements for your calling context.

## Signature

```sql
APEX_JSON.WRITE (
    p_value    IN BOOLEAN );
```

## Parameters

| Parameter | Description |
| --- | --- |
| `p_value` | The value to be written. |

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
        p_value => true
    );
end;
/
```

