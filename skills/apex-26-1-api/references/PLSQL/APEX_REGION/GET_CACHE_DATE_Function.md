# APEX_REGION.GET_CACHE_DATE Function

Source: [Oracle APEX 26.1 API Reference](https://docs.oracle.com/en/database/oracle/apex/26.1/aeapi/APEX_REGION.GET_CACHE_DATE-Function.html)

Status: generated detailed reference. Review edge cases against the source before production use.

Parent package: [APEX_REGION](../APEX_REGION.md)

## Purpose

This function returns the date and time a specified region was cached either for the user issuing the call, or for all users if the page was not set to be cached by user.

## When To Use

Use this page when code needs the `APEX_REGION.GET_CACHE_DATE` function. Confirm security, workspace, and session requirements for your calling context.

## Signature

```sql
APEX_REGION.GET_CACHE_DATE (
    p_application_id     IN   NUMBER,
    p_page_id            IN   NUMBER,
    p_static_id          IN   VARCHAR2 )  
    RETURN DATE;
```

## Parameters

| Parameter | Description |
| --- | --- |
| `p_application_id` | The identification number (ID) of the application. |
| `p_page_id` | The page number (ID). |
| `p_static_id` | The region Static ID. |

## Important Notes

- Most APEX APIs assume the correct APEX workspace, application, and session context.
- Validate user-controlled values before passing them into administrative, security, SQL, or web-service APIs.
- Use the source link for exact behavior, defaults, and version-specific caveats.

## Simple Example

```sql
declare
    l_result DATE;
begin
    l_result := apex_region.GET_CACHE_DATE(
        p_application_id => 1,
        p_page_id => 1,
        p_static_id => 'EXAMPLE_STATIC_ID'
    );
    sys.dbms_output.put_line('Result captured.');
end;
/
```

