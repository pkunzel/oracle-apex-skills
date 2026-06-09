# APEX_UTIL.CACHE_GET_DATE_OF_PAGE_CACHE Function

Source: [Oracle APEX 26.1 API Reference](https://docs.oracle.com/en/database/oracle/apex/26.1/aeapi/CACHE_GET_DATE_OF_PAGE_CACHE-Function.html)

Status: generated detailed reference. Review edge cases against the source before production use.

Parent package: [APEX_UTIL](../APEX_UTIL.md)

## Purpose

This function returns the date and time a specified application page was cached either for the user issuing the call, or for all users if the page was not set to be cached by user.

## When To Use

Use this page when code needs the `APEX_UTIL.CACHE_GET_DATE_OF_PAGE_CACHE` function. Confirm security, workspace, and session requirements for your calling context.

## Signature

```sql
APEX_UTIL.CACHE_GET_DATE_OF_PAGE_CACHE (
    p_application  IN NUMBER,
    p_page         IN NUMBER )
RETURN DATE;
```

## Parameters

| Parameter | Description |
| --- | --- |
| `p_application` | The identification number (ID) of the application. |
| `p_page` | The page number (ID). |

## Important Notes

- Most APEX APIs assume the correct APEX workspace, application, and session context.
- Validate user-controlled values before passing them into administrative, security, SQL, or web-service APIs.
- Use the source link for exact behavior, defaults, and version-specific caveats.

## Simple Example

```sql
declare
    l_result DATE;
begin
    l_result := apex_util.CACHE_GET_DATE_OF_PAGE_CACHE(
        p_application => 1,
        p_page => 1
    );
    sys.dbms_output.put_line('Result captured.');
end;
/
```

## More Complex Example

```sql
declare
    l_result DATE;
begin
    -- Assuming this runs outside a normal APEX page request.
    apex_session.create_session(
        p_app_id   => 100,
        p_page_id  => 1,
        p_username => 'USER');

    l_result := apex_util.CACHE_GET_DATE_OF_PAGE_CACHE(
            p_application => 1,
            p_page => 1
        );

    apex_session.delete_session;
exception
    when others then
        apex_session.delete_session;
        raise;
end;
/
```

