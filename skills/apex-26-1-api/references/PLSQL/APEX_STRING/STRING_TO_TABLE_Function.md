# APEX_STRING.STRING_TO_TABLE Function

Source: [Oracle APEX 26.1 API Reference](https://docs.oracle.com/en/database/oracle/apex/26.1/aeapi/STRING_TO_TABLE-1-Function.html)

Status: generated detailed reference. Review edge cases against the source before production use.

Parent package: [APEX_STRING](../APEX_STRING.md)

## Purpose

This function returns the split input at separator, returning a vc_arr2 .

## When To Use

Use this page when code needs the `APEX_STRING.STRING_TO_TABLE` function. Confirm security, workspace, and session requirements for your calling context.

## Signature

```sql
APEX_STRING.STRING_TO_TABLE (
    p_str   IN VARCHAR2,
    p_sep   IN VARCHAR2 DEFAULT ':' )
    RETURN apex_application_global.vc_arr2;
```

## Parameters

| Parameter | Description |
| --- | --- |
| `p_str` | The input varchar2. |
| `p_sep` | The separator, no regexp or split at char. Defaults to ':' . |

## Important Notes

- Most APEX APIs assume the correct APEX workspace, application, and session context.
- Validate user-controlled values before passing them into administrative, security, SQL, or web-service APIs.
- Use the source link for exact behavior, defaults, and version-specific caveats.

## Simple Example

Convert a colon-delimited value into the legacy vc_arr2 type.

```sql
declare
    l_formats apex_application_global.vc_arr2;
begin
    l_formats := apex_string.string_to_table(
        p_str => 'CSV:PDF:XLSX',
        p_sep => ':');
end;
/
```

