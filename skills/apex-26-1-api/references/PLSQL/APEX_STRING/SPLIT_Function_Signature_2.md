# APEX_STRING.SPLIT Function Signature 2

Source: [Oracle APEX 26.1 API Reference](https://docs.oracle.com/en/database/oracle/apex/26.1/aeapi/SPLIT-Function-Signature-2.html)

Status: generated detailed reference. Review edge cases against the source before production use.

Parent package: [APEX_STRING](../APEX_STRING.md)

## Purpose

Use this function to split input clob at separator.

## When To Use

Use this page when code needs the `APEX_STRING.SPLIT` function. Confirm security, workspace, and session requirements for your calling context.

## Signature

```sql
APEX_STRING.SPLIT (
    p_str IN CLOB,
    p_sep IN VARCHAR2 DEFAULT apex_application.LF )
    RETURN apex_t_varchar2;
```

## Parameters

| Parameter | Description |
| --- | --- |
| `p_str` | The input clob. |
| `p_sep` | The separator. Splits at line feed by default. If null, split after each character. If a single character, split at this character. If more than 1 character, split at regular expression (max 512 characters). |

## Important Notes

- Most APEX APIs assume the correct APEX workspace, application, and session context.
- Validate user-controlled values before passing them into administrative, security, SQL, or web-service APIs.
- Use the source link for exact behavior, defaults, and version-specific caveats.

## Simple Example

Split CLOB content into lines.

```sql
declare
    l_lines apex_t_varchar2;
begin
    l_lines := apex_string.split(
        p_str => :P10_UPLOADED_TEXT,
        p_sep => chr(10));
end;
/
```

