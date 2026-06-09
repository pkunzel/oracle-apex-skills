# APEX_DATA_LOADING.GET_FILE_PROFILE Function

Source: [Oracle APEX 26.1 API Reference](https://docs.oracle.com/en/database/oracle/apex/26.1/aeapi/APEX_DATA_LOADING.GET_FILE_PROFILE-Function.html)

Status: generated detailed reference. Review edge cases against the source before production use.

Parent package: [APEX_DATA_LOADING](../APEX_DATA_LOADING.md)

## Purpose

This function returns the file profile (determined by the data loading definition) in JSON format.

## When To Use

Use this page when code needs the `APEX_DATA_LOADING.GET_FILE_PROFILE` function. Confirm security, workspace, and session requirements for your calling context.

## Signature

```sql
APEX_DATA_LOADING.GET_FILE_PROFILE (
    p_application_id    IN NUMBER   DEFAULT apex_application.g_flow_id,
    p_static_id         IN VARCHAR2 )
    RETURN CLOB;
```

## Parameters

| Parameter | Description |
| --- | --- |
| `p_application_id` | ID of the application which contains the data load definition. |
| `p_static_id` | Static ID of the data loading definition to execute. |

## Important Notes

- Most APEX APIs assume the correct APEX workspace, application, and session context.
- Validate user-controlled values before passing them into administrative, security, SQL, or web-service APIs.
- Use the source link for exact behavior, defaults, and version-specific caveats.

## Simple Example

```sql
declare
    l_result CLOB;
begin
    l_result := apex_data_loading.GET_FILE_PROFILE(
        p_application_id => 1,
        p_static_id => 'EXAMPLE_STATIC_ID'
    );
    sys.dbms_output.put_line('Result captured.');
end;
/
```

## More Complex Example

```sql
declare
    l_result CLOB;
begin
    -- Assuming this runs outside a normal APEX page request.
    apex_session.create_session(
        p_app_id   => 100,
        p_page_id  => 1,
        p_username => 'USER');

    l_result := apex_data_loading.GET_FILE_PROFILE(
            p_application_id => 1,
            p_static_id => 'EXAMPLE_STATIC_ID'
        );

    apex_session.delete_session;
exception
    when others then
        apex_session.delete_session;
        raise;
end;
/
```

