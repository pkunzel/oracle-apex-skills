# APEX_STRING_UTIL.GET_DOMAIN Function

Source: [Oracle APEX 26.1 API Reference](https://docs.oracle.com/en/database/oracle/apex/26.1/aeapi/GET_DOMAIN-Function.html)

Status: generated detailed reference. Review edge cases against the source before production use.

Parent package: [APEX_STRING_UTIL](../APEX_STRING_UTIL.md)

## Purpose

This function extracts a domain from a link or email.

## When To Use

Use this page when code needs the `APEX_STRING_UTIL.GET_DOMAIN` function. Confirm security, workspace, and session requirements for your calling context.

## Signature

```sql
APEX_STRING_UTIL.GET_DOMAIN (
    p_string IN VARCHAR2 )
    RETURN VARCHAR2;
```

## Parameters

| Parameter | Description |
| --- | --- |
| `p_string` | The input string. |

## Returns

This function returns a domain from a url or email.

## Important Notes

- Most APEX APIs assume the correct APEX workspace, application, and session context.
- Validate user-controlled values before passing them into administrative, security, SQL, or web-service APIs.
- Use the source link for exact behavior, defaults, and version-specific caveats.

## Simple Example

Normalize a URL down to its domain before grouping links.

```sql
begin
    :P10_LINK_DOMAIN := apex_string_util.get_domain(
        p_string => :P10_URL);
end;
/
```

