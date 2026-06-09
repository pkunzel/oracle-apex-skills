# APEX_WORKFLOW.GET_VARIABLE_CLOB_VALUE Function

Source: [Oracle APEX 26.1 API Reference](https://docs.oracle.com/en/database/oracle/apex/26.1/aeapi/APEX_WORKFLOW.GET_VARIABLE_CLOB_VALUE-Function.html)

Status: generated detailed reference. Review edge cases against the source before production use.

Parent package: [APEX_WORKFLOW](../APEX_WORKFLOW.md)

## Purpose

This function gets the CLOB value of a workflow variable. It returns the VARCHAR2 value if the data type of the variable is VARCHAR2. It returns NULL if the variable is not of CLOB or VARCHAR2 datatype.

## When To Use

Use this page when code needs the `APEX_WORKFLOW.GET_VARIABLE_CLOB_VALUE` function. Confirm security, workspace, and session requirements for your calling context.

## Signature

```sql
APEX_WORKFLOW.GET_VARIABLE_CLOB_VALUE (
    p_instance_id            IN NUMBER,
    p_variable_static_id     IN VARCHAR2 )
RETURN CLOB;
```

## Parameters

| Parameter | Description |
| --- | --- |
| `p_instance_id` | ID of the Workflow. |
| `p_variable_static_id` | Static ID of the variable. |

## Returns

CLOB

## Important Notes

- Most APEX APIs assume the correct APEX workspace, application, and session context.
- Validate user-controlled values before passing them into administrative, security, SQL, or web-service APIs.
- Use the source link for exact behavior, defaults, and version-specific caveats.

## Simple Example

```sql
declare
    l_result CLOB;
begin
    l_result := apex_workflow.GET_VARIABLE_CLOB_VALUE(
        p_instance_id => 1,
        p_variable_static_id => 'EXAMPLE_STATIC_ID'
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

    l_result := apex_workflow.GET_VARIABLE_CLOB_VALUE(
            p_instance_id => 1,
            p_variable_static_id => 'EXAMPLE_STATIC_ID'
        );

    apex_session.delete_session;
exception
    when others then
        apex_session.delete_session;
        raise;
end;
/
```

