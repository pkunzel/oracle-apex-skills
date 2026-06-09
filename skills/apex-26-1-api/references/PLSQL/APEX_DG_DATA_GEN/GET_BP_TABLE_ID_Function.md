# APEX_DG_DATA_GEN.GET_BP_TABLE_ID Function

Source: [Oracle APEX 26.1 API Reference](https://docs.oracle.com/en/database/oracle/apex/26.1/aeapi/GET_BP_TABLE_ID-Function.html)

Status: generated detailed reference. Review edge cases against the source before production use.

Parent package: [APEX_DG_DATA_GEN](../APEX_DG_DATA_GEN.md)

## Purpose

This function returns the table_id for a given blueprint ID and table name (case-sensitive). If not found, it searches with UPPERCASE p_table_name automatically.

## When To Use

Use this page when code needs the `APEX_DG_DATA_GEN.GET_BP_TABLE_ID` function. Confirm security, workspace, and session requirements for your calling context.

## Signature

```sql
APEX_DG_DATA_GEN.GET_BP_TABLE_ID (
    p_bp_id         IN NUMBER,
    p_table_name    IN VARCHAR2 )
    RETURN NUMBER;
```

## Parameters

| Parameter | Description |
| --- | --- |
| `p_bp_id` | The blueprint ID. |
| `p_table_name` | The name of the table. |

## Returns

The table ID.

## Important Notes

- Most APEX APIs assume the correct APEX workspace, application, and session context.
- Validate user-controlled values before passing them into administrative, security, SQL, or web-service APIs.
- Use the source link for exact behavior, defaults, and version-specific caveats.

## Simple Example

```sql
declare
    l_result NUMBER;
begin
    l_result := apex_dg_data_gen.GET_BP_TABLE_ID(
        p_bp_id => 1,
        p_table_name => 'EXAMPLE'
    );
    sys.dbms_output.put_line('Result captured.');
end;
/
```

## More Complex Example

```sql
declare
    l_result NUMBER;
begin
    -- Assuming this runs outside a normal APEX page request.
    apex_session.create_session(
        p_app_id   => 100,
        p_page_id  => 1,
        p_username => 'USER');

    l_result := apex_dg_data_gen.GET_BP_TABLE_ID(
            p_bp_id => 1,
            p_table_name => 'EXAMPLE'
        );

    apex_session.delete_session;
exception
    when others then
        apex_session.delete_session;
        raise;
end;
/
```

