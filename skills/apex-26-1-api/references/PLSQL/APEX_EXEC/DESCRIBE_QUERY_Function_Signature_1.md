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
    l_result T_COLUMNS;
begin
    l_result := apex_exec.DESCRIBE_QUERY(
        p_columns => null
    );
    sys.dbms_output.put_line('Result captured.');
end;
/
```

## More Complex Example

```sql
declare
    l_result T_COLUMNS;
begin
    -- Assuming this runs outside a normal APEX page request.
    apex_session.create_session(
        p_app_id   => 100,
        p_page_id  => 1,
        p_username => 'USER');

    l_result := apex_exec.DESCRIBE_QUERY(
            p_columns => null
        );

    apex_session.delete_session;
exception
    when others then
        apex_session.delete_session;
        raise;
end;
/
```

