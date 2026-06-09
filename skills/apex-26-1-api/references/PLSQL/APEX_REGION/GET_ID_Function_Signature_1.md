# APEX_REGION.GET_ID Function Signature 1

Source: [Oracle APEX 26.1 API Reference](https://docs.oracle.com/en/database/oracle/apex/26.1/aeapi/APEX_REGION.GET_ID-Function-Signature-1.html)

Status: generated detailed reference. Review edge cases against the source before production use.

Parent package: [APEX_REGION](../APEX_REGION.md)

## Purpose

This function gets the region ID based on the dom static ID.

## When To Use

Use this page when code needs the `APEX_REGION.GET_ID` function. Confirm security, workspace, and session requirements for your calling context.

## Signature

```sql
APEX_REGION.GET_ID (
    p_application_id IN NUMBER  DEFAULT apex.g_flow_id,
    p_page_id        IN NUMBER,
    p_dom_static_id  IN VARCHAR2 )
    RETURN NUMBER;
```

## Parameters

| Parameter | Description |
| --- | --- |
| `p_application_id` | ID of the application which contains the region. |
| `p_page_id` | ID of the page which contains the region. |
| `p_dom_static_id` | Static ID of the desired region. Note: The p_dom_static_id is not unique and raises a too_many_rows error if multiple regions exist with the same static ID. |

## Important Notes

- Most APEX APIs assume the correct APEX workspace, application, and session context.
- Validate user-controlled values before passing them into administrative, security, SQL, or web-service APIs.
- Use the source link for exact behavior, defaults, and version-specific caveats.

## Simple Example

```sql
declare
    l_result NUMBER;
begin
    l_result := apex_region.GET_ID(
        p_application_id => 1,
        p_page_id => 1,
        p_dom_static_id => 'EXAMPLE_STATIC_ID'
    );
    sys.dbms_output.put_line('Result captured.');
end;
/
```

