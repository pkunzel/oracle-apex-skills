# APEX_DATA_PARSER.SET_PARSER_FLAGS Procedure

Source: [Oracle APEX 26.1 API Reference](https://docs.oracle.com/en/database/oracle/apex/26.1/aeapi/APEX_DATA_PARSER.SET_PARSER_FLAGS-Procedure.html)

Status: generated detailed reference. Review edge cases against the source before production use.

Parent package: [APEX_DATA_PARSER](../APEX_DATA_PARSER.md)

## Purpose

This procedure sets flags to control parser behavior. Existing flags include:

## When To Use

Use this page when code needs the `APEX_DATA_PARSER.SET_PARSER_FLAGS` procedure. Confirm security, workspace, and session requirements for your calling context.

## Signature

```sql
APEX_DATA_PARSER.SET_PARSER_FLAGS (
    p_name  IN VARCHAR2,
    p_value IN VARCHAR2 )
```

## Parameters

| Parameter | Description |
| --- | --- |
| `p_name` | Name of the flag to set. |
| `p_value` | Value to set. |

## Returns

This is a procedure and does not return a value.

## Important Notes

- Most APEX APIs assume the correct APEX workspace, application, and session context.
- Validate user-controlled values before passing them into administrative, security, SQL, or web-service APIs.
- Use the source link for exact behavior, defaults, and version-specific caveats.

## Simple Example

```sql
begin
    apex_data_parser.set_parser_flags(
        p_name  => 'CSV_BACKSLASH_ESCAPING',
        p_value => 'N'
    );
end;
/
```

