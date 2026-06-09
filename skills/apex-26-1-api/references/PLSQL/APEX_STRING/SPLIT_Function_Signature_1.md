# APEX_STRING.SPLIT Function Signature 1

Source: [Oracle APEX 26.1 API Reference](https://docs.oracle.com/en/database/oracle/apex/26.1/aeapi/SPLIT-Function-Signature-1.html)

Status: generated detailed reference. Review edge cases against the source before production use.

Parent package: [APEX_STRING](../APEX_STRING.md)

## Purpose

Use this function to split input string at separator.

## When To Use

Use this page when code needs the `APEX_STRING.SPLIT` function. Confirm security, workspace, and session requirements for your calling context.

## Signature

```sql
APEX_STRING.SPLIT (
    p_str   IN VARCHAR2,
    p_sep   IN VARCHAR2     DEFAULT apex_application.LF,
    p_limit IN PLS_INTEGER  DEFAULT NULL )
    RETURN apex_t_varchar2;
```

## Parameters

| Parameter | Description |
| --- | --- |
| `p_str` | The input string. |
| `p_sep` | The separator. Splits at line feed by default. If null, split after each character. If a single character, split at this character. If more than 1 character, split at regular expression (max 512 characters). |
| `p_limit` | Maximum number of splits, ignored if null. If smaller than the total possible number of splits, the last table element contains the rest. |

## Important Notes

- Most APEX APIs assume the correct APEX workspace, application, and session context.
- Validate user-controlled values before passing them into administrative, security, SQL, or web-service APIs.
- Use the source link for exact behavior, defaults, and version-specific caveats.

## Simple Example

```sql
declare
    l_result APEX_T_VARCHAR2;
begin
    l_result := apex_string.SPLIT(
        p_str => 'EXAMPLE',
        p_sep => 'EXAMPLE',
        p_limit => 1
    );
    sys.dbms_output.put_line('Result captured.');
end;
/
```

