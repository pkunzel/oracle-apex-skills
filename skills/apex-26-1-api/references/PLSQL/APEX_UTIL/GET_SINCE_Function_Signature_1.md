# APEX_UTIL.GET_SINCE Function Signature 1

Source: [Oracle APEX 26.1 API Reference](https://docs.oracle.com/en/database/oracle/apex/26.1/aeapi/GET_SINCE-Function-Signature-1.html)

Status: generated detailed reference. Review edge cases against the source before production use.

Parent package: [APEX_UTIL](../APEX_UTIL.md)

## Purpose

This function returns the relative date in words (for example, 2 days from now, 30 minutes ago). It also accepts a second optional p_short parameter and returns "in 2d" or "30m" and so forth. This function is equivalent to using the format masks SINCE and SINCE_SHORT available within Oracle APEX and is useful within SQL queries or PL/SQL routines.

## When To Use

Use this page when code needs the `APEX_UTIL.GET_SINCE` function. Confirm security, workspace, and session requirements for your calling context.

## Signature

```sql
APEX_UTIL.GET_SINCE (
   p_date  DATE )
   p_short IN [ BOOLEAN DEFAULT FALSE | VARCHAR2 DEFAULT 'N' ] )  
RETURN VARCHAR2;
```

## Parameters

| Parameter | Description |
| --- | --- |
| `p_date` | The date you want formatted. |
| `p_short` | Boolean or Y/N to indicate whether to return a short version of relative date. |

## Important Notes

- Most APEX APIs assume the correct APEX workspace, application, and session context.
- Validate user-controlled values before passing them into administrative, security, SQL, or web-service APIs.
- Use the source link for exact behavior, defaults, and version-specific caveats.

## Simple Example

Format elapsed time from a DATE value.

```sql
declare
    l_label varchar2(255);
begin
    l_label := apex_util.get_since(
        p_date  => sysdate - (90 / 1440),
        p_short => true);
end;
/
```

