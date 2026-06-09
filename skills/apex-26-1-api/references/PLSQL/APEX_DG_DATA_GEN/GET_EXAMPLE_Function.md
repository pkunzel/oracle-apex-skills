# APEX_DG_DATA_GEN.GET_EXAMPLE Function

Source: [Oracle APEX 26.1 API Reference](https://docs.oracle.com/en/database/oracle/apex/26.1/aeapi/GET_EXAMPLE-Function.html)

Status: generated detailed reference. Review edge cases against the source before production use.

Parent package: [APEX_DG_DATA_GEN](../APEX_DG_DATA_GEN.md)

## Purpose

This function generates example data for the friendly name of built-in data. The function returns a (user-specified) number of examples, showing the data to expect when using this friendly name.

## When To Use

Use this page when code needs the `APEX_DG_DATA_GEN.GET_EXAMPLE` function. Confirm security, workspace, and session requirements for your calling context.

## Signature

```sql
APEX_DG_DATA_GEN.GET_EXAMPLE (
    p_friendly_name     IN  VARCHAR2,
    p_lang              IN  VARCHAR2 DEFAULT 'en',
    p_rows              IN  NUMBER DEFAULT 5 )
    RETURN wwv_flow_t_varchar2;
```

## Parameters

| Parameter | Description |
| --- | --- |
| `p_friendly_name` | The friendly name. |
| `p_lang` | (Optional) The language. |
| `p_rows` | Number of rows (examples) to return. |

## Important Notes

- Most APEX APIs assume the correct APEX workspace, application, and session context.
- Validate user-controlled values before passing them into administrative, security, SQL, or web-service APIs.
- Use the source link for exact behavior, defaults, and version-specific caveats.

## Simple Example

```sql
declare
    l_result WWV_FLOW_T_VARCHAR2;
begin
    l_result := apex_dg_data_gen.GET_EXAMPLE(
        p_friendly_name => 'EXAMPLE',
        p_lang => 'EXAMPLE',
        p_rows => 1
    );
    sys.dbms_output.put_line('Result captured.');
end;
/
```

## More Complex Example

```sql
declare
    l_result WWV_FLOW_T_VARCHAR2;
begin
    -- Assuming this runs outside a normal APEX page request.
    apex_session.create_session(
        p_app_id   => 100,
        p_page_id  => 1,
        p_username => 'USER');

    l_result := apex_dg_data_gen.GET_EXAMPLE(
            p_friendly_name => 'EXAMPLE',
            p_lang => 'EXAMPLE',
            p_rows => 1
        );

    apex_session.delete_session;
exception
    when others then
        apex_session.delete_session;
        raise;
end;
/
```

