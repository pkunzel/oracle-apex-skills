# APEX_SEARCH.QUERY_SEARCH_ENGINE Function

Source: [Oracle APEX 26.1 API Reference](https://docs.oracle.com/en/database/oracle/apex/26.1/aeapi/QUERY_SEARCH_ENGINE-Function.html)

Status: generated detailed reference. Review edge cases against the source before production use.

Parent package: [APEX_SEARCH](../APEX_SEARCH.md)

## Purpose

This function converts a simple end-user search query into the corresponding Oracle Text syntax for a smart search that incorporates query relaxation.

## When To Use

Use this page when code needs the `APEX_SEARCH.QUERY_SEARCH_ENGINE` function. Confirm security, workspace, and session requirements for your calling context.

## Signature

```sql
APEX_SEARCH.QUERY_SEARCH_ENGINE (
    p_search_expression IN VARCHAR2 )
    RETURN CLOB;
```

## Parameters

| Parameter | Description |
| --- | --- |
| `p_search_expression` | End-user search query to convert to Oracle Text syntax. |

## Returns

This function returns the generated Oracle Text query based on the provided search expression.

## Important Notes

- Most APEX APIs assume the correct APEX workspace, application, and session context.
- Validate user-controlled values before passing them into administrative, security, SQL, or web-service APIs.
- Use the source link for exact behavior, defaults, and version-specific caveats.

## Example

Convert a simple search box value into Oracle Text syntax with APEX Search query relaxation.

```sql
declare
    l_text_query clob;
begin
    l_text_query := apex_search.query_search_engine(
        p_search_expression => :P10_SEARCH);

    apex_debug.info('Search engine query length: %s', dbms_lob.getlength(l_text_query));
end;
/
```
