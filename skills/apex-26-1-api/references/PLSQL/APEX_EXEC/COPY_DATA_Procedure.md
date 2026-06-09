# APEX_EXEC.COPY_DATA Procedure

Source: [Oracle APEX 26.1 API Reference](https://docs.oracle.com/en/database/oracle/apex/26.1/aeapi/APEX_EXEC.COPY_DATA-Procedure.html)

Status: generated detailed reference. Review edge cases against the source before production use.

Parent package: [APEX_EXEC](../APEX_EXEC.md)

## Purpose

This procedure fetches all rows from the source context and writes to the target context. Useful for copying data between different data sources (such as local to remote, remote to web source).

## When To Use

Use this page when code needs the `APEX_EXEC.COPY_DATA` procedure. Confirm security, workspace, and session requirements for your calling context.

## Signature

```sql
APEX_EXEC.COPY_DATA (
    p_from_context          IN OUT NOCOPY t_context,
    p_to_context            IN OUT NOCOPY t_context,
    p_operation_column_name IN            VARCHAR2 DEFAULT NULL );
```

## Parameters

| Parameter | Description |
| --- | --- |
| `p_from_context` | Query context to fetch rows from. |
| `p_to_context` | DML context to write rows to. |
| `p_operation_column_name` | Column in the query context to indicate the DML operation to execute on the target context. Possible values are: "I" : insert the row on the target (DML) context "U" : update the row on the target (DML) context "D" : delete the row on the target (DML) context |

## Returns

This is a procedure and does not return a value.

## Important Notes

- Most APEX APIs assume the correct APEX workspace, application, and session context.
- Validate user-controlled values before passing them into administrative, security, SQL, or web-service APIs.
- Use the source link for exact behavior, defaults, and version-specific caveats.

## Simple Example

```sql
begin
    apex_exec.COPY_DATA(
        p_from_context => to_clob('Example text'),
        p_to_context => to_clob('Example text'),
        p_operation_column_name => 'EXAMPLE'
    );
end;
/
```

## More Complex Example

```sql
begin
    -- Assuming this runs inside an APEX page process with the right workspace/app context.
    apex_exec.COPY_DATA(
            p_from_context => to_clob('Example text'),
            p_to_context => to_clob('Example text'),
            p_operation_column_name => 'EXAMPLE'
        );
end;
/
```

