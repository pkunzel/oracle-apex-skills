# APEX_UTIL.TABLE_TO_STRING Function (Deprecated)

Source: [Oracle APEX 26.1 API Reference](https://docs.oracle.com/en/database/oracle/apex/26.1/aeapi/TABLE_TO_STRING-Function.html)

Status: generated detailed reference. Review edge cases against the source before production use.

Parent package: [APEX_UTIL](../APEX_UTIL.md)

## Purpose

Note:

## When To Use

Use this page when code needs the `APEX_UTIL.TABLE_TO_STRING` function. Confirm security, workspace, and session requirements for your calling context.

## Deprecation

This member is marked deprecated in the APEX 26.1 documentation. Prefer the documented replacement when available.

## Signature

```sql
APEX_UTIL.TABLE_TO_STRING (
    p_table     IN      apex_application_global.vc_arr2,
    p_string    IN      VARCHAR2 DEFAULT ':' )
RETURN VARCHAR2;
```

## Parameters

| Parameter | Description |
| --- | --- |
| `p_string` | String separator. Default separator is a colon (:). |
| `p_table` | PL/SQL table that is to be converted into a delimited string. |

## Important Notes

- Most APEX APIs assume the correct APEX workspace, application, and session context.
- Validate user-controlled values before passing them into administrative, security, SQL, or web-service APIs.
- Use the source link for exact behavior, defaults, and version-specific caveats.

## Simple Example

Legacy only. Prefer APEX_STRING.JOIN for new code.

```sql
declare
    l_values apex_application_global.vc_arr2;
    l_string varchar2(4000);
begin
    l_values(1) := 'APP_USERS';
    l_values(2) := 'REPORT_VIEWERS';
    l_values(3) := 'APP_MANAGERS';

    l_string := apex_util.table_to_string(
        p_table  => l_values,
        p_string => ':');
end;
/
```

