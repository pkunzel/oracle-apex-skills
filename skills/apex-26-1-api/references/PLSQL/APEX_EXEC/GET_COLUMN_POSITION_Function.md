# APEX_EXEC.GET_COLUMN_POSITION Function

Source: [Oracle APEX 26.1 API Reference](https://docs.oracle.com/en/database/oracle/apex/26.1/aeapi/APEX_EXEC.GET_COLUMN_POSITION-FUNCTION.html)

Status: generated detailed reference. Review edge cases against the source before production use.

Parent package: [APEX_EXEC](../APEX_EXEC.md)

## Purpose

This function returns the array index for a given column alias. In order to do this lookup operation only once, Oracle recommends you to use GET_COLUMN_POSITION function before entering the NEXT_ROW loop. This saves on computing resources.

## When To Use

Use this page when code needs the `APEX_EXEC.GET_COLUMN_POSITION` function. Confirm security, workspace, and session requirements for your calling context.

## Signature

```sql
APEX_EXEC.GET_COLUMN_POSITION (
    p_context               IN t_context, 
    p_column_name           IN VARCHAR2,
    p_attribute_label       IN VARCHAR2  DEFAULT NULL,
    p_is_required           IN BOOLEAN   DEFAULT FALSE,
    p_data_type             IN VARCHAR2  DEFAULT c_data_type_varchar2,
    p_parent_column_path    IN VARCHAR2  DEFAULT NULL )
    RETURN PLS_INTEGER;
```

## Parameters

| Parameter | Description |
| --- | --- |
| `p_context` | Context object obtained with one of the OPEN_ functions. |
| `p_attribute_label` | Attribute label to format error messages. |
| `p_column_name` | Column name. |
| `p_is_required` | Indicates whether this is a required column. |
| `p_data_type` | Indicates the requested data type. |
| `p_parent_column_path` | Path to the parent column to look the index up within. |

## Returns

The position of the column in the query result set. Throws an exception when p_is_required or p_data_type prerequisites are not met. Parent topic: APEX_EXEC

## Important Notes

- Most APEX APIs assume the correct APEX workspace, application, and session context.
- Validate user-controlled values before passing them into administrative, security, SQL, or web-service APIs.
- Use the source link for exact behavior, defaults, and version-specific caveats.

## Simple Example

```sql
declare
    l_result PLS_INTEGER;
begin
    l_result := apex_exec.GET_COLUMN_POSITION(
        p_context => to_clob('Example text'),
        p_column_name => 'EXAMPLE',
        p_attribute_label => 'EXAMPLE',
        p_is_required => true,
        p_data_type => 'EXAMPLE',
        p_parent_column_path => 'EXAMPLE'
    );
    sys.dbms_output.put_line('Result captured.');
end;
/
```

## More Complex Example

```sql
declare
    l_result PLS_INTEGER;
begin
    -- Assuming this runs outside a normal APEX page request.
    apex_session.create_session(
        p_app_id   => 100,
        p_page_id  => 1,
        p_username => 'USER');

    l_result := apex_exec.GET_COLUMN_POSITION(
            p_context => to_clob('Example text'),
            p_column_name => 'EXAMPLE',
            p_attribute_label => 'EXAMPLE',
            p_is_required => true,
            p_data_type => 'EXAMPLE',
            p_parent_column_path => 'EXAMPLE'
        );

    apex_session.delete_session;
exception
    when others then
        apex_session.delete_session;
        raise;
end;
/
```

