# APEX_EXEC.OPEN_ARRAY Procedure Signature 1

Source: [Oracle APEX 26.1 API Reference](https://docs.oracle.com/en/database/oracle/apex/26.1/aeapi/APEX_EXEC.OPEN_ARRAY-Procedure-Signature-1.html)

Status: generated detailed reference. Review edge cases against the source before production use.

Parent package: [APEX_EXEC](../APEX_EXEC.md)

## Purpose

Enters the array within the provided array column and moves the cursor to before the first row, so that calling next_array_row() points to the first array element.

## When To Use

Use this page when code needs the `APEX_EXEC.OPEN_ARRAY` procedure. Confirm security, workspace, and session requirements for your calling context.

## Signature

```sql
APEX_EXEC.OPEN_ARRAY (
    p_context               IN t_context,
    p_column_name           IN VARCHAR2 )
```

## Parameters

| Parameter | Description |
| --- | --- |
| `p_context` | Context object obtained with one of the OPEN_ functions. |
| `p_column_name` | Name of the array column to add a row for. |

## Returns

This is a procedure and does not return a value.

## Important Notes

- Most APEX APIs assume the correct APEX workspace, application, and session context.
- Validate user-controlled values before passing them into administrative, security, SQL, or web-service APIs.
- Use the source link for exact behavior, defaults, and version-specific caveats.

## Simple Example

```sql
begin
    apex_exec.OPEN_ARRAY(
        p_context => to_clob('Example text'),
        p_column_name => 'EXAMPLE'
    );
end;
/
```

