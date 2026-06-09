# APEX_EXEC.SET_ARRAY_ROW_VERSION_CHECKSUM Procedure

Source: [Oracle APEX 26.1 API Reference](https://docs.oracle.com/en/database/oracle/apex/26.1/aeapi/APEX_EXEC.SET_ARRAY_ROW_VERSION_CHECKSUM-Procedure.html)

Status: generated detailed reference. Review edge cases against the source before production use.

Parent package: [APEX_EXEC](../APEX_EXEC.md)

## Purpose

This procedure sets the row version checksum for the current nested array row. Can only be called when inside an array column; otherwise an error message is called.

## When To Use

Use this page when code needs the `APEX_EXEC.SET_ARRAY_ROW_VERSION_CHECKSUM` procedure. Confirm security, workspace, and session requirements for your calling context.

## Signature

```sql
APEX_EXEC.SET_ARRAY_ROW_VERSION_CHECKSUM (
    p_context               IN t_context,
    p_checksum              IN VARCHAR2 );
```

## Parameters

| Parameter | Description |
| --- | --- |
| `p_context` | Context object obtained with one of the OPEN_ functions. |
| `p_checksum` | Checksum to use for lost-update detection of this array row. |

## Returns

This is a procedure and does not return a value.

## Important Notes

- Most APEX APIs assume the correct APEX workspace, application, and session context.
- Validate user-controlled values before passing them into administrative, security, SQL, or web-service APIs.
- Use the source link for exact behavior, defaults, and version-specific caveats.

## Simple Example

```sql
begin
    apex_exec.SET_ARRAY_ROW_VERSION_CHECKSUM(
        p_context => to_clob('Example text'),
        p_checksum => 'EXAMPLE'
    );
end;
/
```

## More Complex Example

```sql
begin
    -- Assuming this runs inside an APEX page process with the right workspace/app context.
    apex_exec.SET_ARRAY_ROW_VERSION_CHECKSUM(
            p_context => to_clob('Example text'),
            p_checksum => 'EXAMPLE'
        );
end;
/
```

