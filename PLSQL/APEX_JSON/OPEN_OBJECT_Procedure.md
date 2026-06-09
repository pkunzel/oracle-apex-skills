# APEX_JSON.OPEN_OBJECT Procedure

Source: [Oracle APEX 26.1 API Reference](https://docs.oracle.com/en/database/oracle/apex/26.1/aeapi/OPEN_OBJECT-Procedure.html)

Status: generated detailed reference. Review edge cases against the source before production use.

Parent package: [APEX_JSON](../APEX_JSON.md)

## Purpose

This procedure writes an open curly bracket symbol as follows:

## When To Use

Use this page when code needs the `APEX_JSON.OPEN_OBJECT` procedure. Confirm security, workspace, and session requirements for your calling context.

## Signature

```sql
APEX_JSON.OPEN_OBJECT (
    p_name     IN VARCHAR2 DEFAULT NULL )
```

## Parameters

| Parameter | Description |
| --- | --- |
| `p_name` | If not null, write an object attribute name and colon before the opening brace. |

## Returns

This is a procedure and does not return a value.

## Important Notes

- Most APEX APIs assume the correct APEX workspace, application, and session context.
- Validate user-controlled values before passing them into administrative, security, SQL, or web-service APIs.
- Use the source link for exact behavior, defaults, and version-specific caveats.

## Simple Example

```sql
begin
    apex_json.OPEN_OBJECT(
        p_name => 'EXAMPLE'
    );
end;
/
```

## More Complex Example

```sql
begin
    -- Assuming this runs inside an APEX page process with the right workspace/app context.
    apex_json.OPEN_OBJECT(
            p_name => 'EXAMPLE'
        );
end;
/
```

