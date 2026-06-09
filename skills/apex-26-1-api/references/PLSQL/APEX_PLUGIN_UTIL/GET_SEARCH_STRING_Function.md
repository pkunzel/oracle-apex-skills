# APEX_PLUGIN_UTIL.GET_SEARCH_STRING Function

Source: [Oracle APEX 26.1 API Reference](https://docs.oracle.com/en/database/oracle/apex/26.1/aeapi/GET_SEARCH_STRING-Function.html)

Status: generated detailed reference. Review edge cases against the source before production use.

Parent package: [APEX_PLUGIN_UTIL](../APEX_PLUGIN_UTIL.md)

## Purpose

Based on the provided value in p_search_type the passed in value of p_search_string is returned unchanged or is converted to uppercase. Use this function with the p_search_string parameter of get_data and get_data2 .

## When To Use

Use this page when code needs the `APEX_PLUGIN_UTIL.GET_SEARCH_STRING` function. Confirm security, workspace, and session requirements for your calling context.

## Signature

```sql
APEX_PLUGIN_UTIL.GET_SEARCH_STRING (
    p_search_type   IN VARCHAR2,
    p_search_string IN VARCHAR2 )
RETURN VARCHAR2;
```

## Parameters

| Parameter | Description |
| --- | --- |
| `p_search_type` | Type of search when used with get_data and get_data2 . Use one of the c_search_* constants. |
| `p_search_string` | Search string used for the search with get_data and get_data2 . |

## Important Notes

- Most APEX APIs assume the correct APEX workspace, application, and session context.
- Validate user-controlled values before passing them into administrative, security, SQL, or web-service APIs.
- Use the source link for exact behavior, defaults, and version-specific caveats.

## Simple Example

```sql
declare
    l_result VARCHAR2;
begin
    l_result := apex_plugin_util.GET_SEARCH_STRING(
        p_search_type => 'EXAMPLE',
        p_search_string => 'EXAMPLE'
    );
    sys.dbms_output.put_line('Result captured.');
end;
/
```

