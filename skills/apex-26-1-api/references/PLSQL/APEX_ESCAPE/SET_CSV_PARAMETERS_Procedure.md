# APEX_ESCAPE.SET_CSV_PARAMETERS Procedure

Source: [Oracle APEX 26.1 API Reference](https://docs.oracle.com/en/database/oracle/apex/26.1/aeapi/SET_CSV_PARAMETERS-Procedure.html)

Status: generated detailed reference. Review edge cases against the source before production use.

Parent package: [APEX_ESCAPE](../APEX_ESCAPE.md)

## Purpose

This procedure sets parameters for the CSV function.

## When To Use

Use this page when code needs the `APEX_ESCAPE.SET_CSV_PARAMETERS` procedure. Confirm security, workspace, and session requirements for your calling context.

## Signature

```sql
APEX_ESCAPE.SET_CSV_PARAMETERS (
    p_enclosed_by     IN VARCHAR2 DEFAULT NULL,
    p_separated_by    IN VARCHAR2 DEFAULT NULL,
    p_escape_formulas IN BOOLEAN  DEFAULT NULL );
```

## Parameters

| Parameter | Description |
| --- | --- |
| `p_enclosed_by` | The string to enclose CSV values. If NULL (default), fall back to double quote. |
| `p_separated_by` | The string to separate CSV values. If NULL (default), determine the separator by checking the NLS decimal separator. If that is comma ( , ) the CSV separator is semicolon ( ; ) otherwise it is comma ( , ). |
| `p_escape_formulas` | Default TRUE , but can be overridden with instance parameter CSV_DOWNLOAD_ESCAPE_FORMULAS If TRUE , escape formula cells by prepending them with a space. Formula cells can start with: = @ + - The sign characters are only escaped if they are not part of numbers. |

## Returns

This is a procedure and does not return a value.

## Important Notes

- Most APEX APIs assume the correct APEX workspace, application, and session context.
- Validate user-controlled values before passing them into administrative, security, SQL, or web-service APIs.
- Use the source link for exact behavior, defaults, and version-specific caveats.

## Simple Example

```sql
begin
    apex_escape.SET_CSV_PARAMETERS(
        p_enclosed_by => 'EXAMPLE',
        p_separated_by => 'EXAMPLE',
        p_escape_formulas => true
    );
end;
/
```

## More Complex Example

```sql
begin
    -- Assuming this runs inside an APEX page process with the right workspace/app context.
    apex_escape.SET_CSV_PARAMETERS(
            p_enclosed_by => 'EXAMPLE',
            p_separated_by => 'EXAMPLE',
            p_escape_formulas => true
        );
end;
/
```

