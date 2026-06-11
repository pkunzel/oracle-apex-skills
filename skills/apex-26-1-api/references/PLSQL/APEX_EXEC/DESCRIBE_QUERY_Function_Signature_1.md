# APEX_EXEC.DESCRIBE_QUERY Function Signature 1

Source: [Oracle APEX 26.1 API Reference](https://docs.oracle.com/en/database/oracle/apex/26.1/aeapi/APEX_EXEC.DESCRIBE_QUERY-Function-Signature-1.html)

Status: generated detailed reference. Review edge cases against the source before production use.

Parent package: [APEX_EXEC](../APEX_EXEC.md)

## Purpose

This procedure describes the query context based on the current region source.

## When To Use

Use this page when code needs the `APEX_EXEC.DESCRIBE_QUERY` function. Confirm security, workspace, and session requirements for your calling context.

## Signature

```sql
APEX_EXEC.DESCRIBE_QUERY (
    p_columns                IN t_columns          DEFAULT c_empty_columns )
    RETURN t_columns;
```

## Parameters

| Parameter | Description |
| --- | --- |
| `p_columns` | Columns to be selected from the data source. |

## Returns

The t_columns object describing the columns and data types.

## Important Notes

- Most APEX APIs assume the correct APEX workspace, application, and session context.
- Validate user-controlled values before passing them into administrative, security, SQL, or web-service APIs.
- Use the source link for exact behavior, defaults, and version-specific caveats.

## Simple Example

```sql
declare
    l_requested_columns apex_exec.t_columns;
    l_columns           apex_exec.t_columns;
begin
    apex_exec.add_column(l_requested_columns, 'ORDER_ID', apex_exec.c_data_type_number);
    apex_exec.add_column(l_requested_columns, 'STATUS', apex_exec.c_data_type_varchar2);

    l_columns := apex_exec.describe_query(
        p_columns => l_requested_columns
    );

    for i in 1 .. l_columns.count loop
        sys.dbms_output.put_line(l_columns(i).name || ': ' || apex_exec.get_data_type(l_columns(i).data_type));
    end loop;
end;
/
```
