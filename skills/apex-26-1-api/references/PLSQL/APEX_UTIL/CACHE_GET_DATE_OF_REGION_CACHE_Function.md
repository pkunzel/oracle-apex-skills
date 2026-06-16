# APEX_UTIL.CACHE_GET_DATE_OF_REGION_CACHE Function

Source: [Oracle APEX 26.1 API Reference](https://docs.oracle.com/en/database/oracle/apex/26.1/aeapi/CACHE_GET_DATE_OF_REGION_CACHE-Function.html)

Status: generated detailed reference. Review edge cases against the source before production use.

Parent package: [APEX_UTIL](../APEX_UTIL.md)

## Purpose

This function returns the date and time a specified region was cached either for the user issuing the call, or for all users if the page was not set to be cached by user.

## When To Use

Use this page when code needs the `APEX_UTIL.CACHE_GET_DATE_OF_REGION_CACHE` function. Confirm security, workspace, and session requirements for your calling context.

## Signature

```sql
APEX_UTIL.CACHE_GET_DATE_OF_REGION_CACHE (
    p_application  IN NUMBER,
    p_page         IN NUMBER,
    p_region_name  IN VARCHAR2 )
RETURN DATE;
```

## Parameters

| Parameter | Description |
| --- | --- |
| `p_application` | The identification number (ID) of the application. |
| `p_page` | The page number (ID). |
| `p_region_name` | The region name. |

## Important Notes

- Most APEX APIs assume the correct APEX workspace, application, and session context.
- Validate user-controlled values before passing them into administrative, security, SQL, or web-service APIs.
- Use the source link for exact behavior, defaults, and version-specific caveats.

## Simple Example

Inspect a cached region timestamp and purge the region cache when the data is old.

```sql
declare
    l_cached_on date;
begin
    l_cached_on := apex_util.cache_get_date_of_region_cache(
        p_application => :APP_ID,
        p_page        => 20,
        p_region_name => 'Quarterly Sales');

    if l_cached_on is not null and l_cached_on < sysdate - (1 / 24) then
        apex_util.purge_regions_by_name(
            p_application => :APP_ID,
            p_page        => 20,
            p_region_name => 'Quarterly Sales');
    end if;
end;
/
```

