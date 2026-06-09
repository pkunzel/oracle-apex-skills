# APEX_UTIL.PRN Procedure

Source: [Oracle APEX 26.1 API Reference](https://docs.oracle.com/en/database/oracle/apex/26.1/aeapi/PRN-Procedure.html)

Status: generated detailed reference. Review edge cases against the source before production use.

Parent package: [APEX_UTIL](../APEX_UTIL.md)

## Purpose

This procedure prints a given CLOB to the HTP buffer.

## When To Use

Use this page when code needs the `APEX_UTIL.PRN` procedure. Confirm security, workspace, and session requirements for your calling context.

## Signature

```sql
APEX_UTIL.PRN (
    p_clob   IN CLOB,
    p_escape IN BOOLEAN DEFAULT TRUE );
```

## Parameters

| Parameter | Description |
| --- | --- |
| `p_clob` | The CLOB. |
| `p_escape` | If TRUE (default), escape special characters, using apex_escape.html. |

## Returns

This is a procedure and does not return a value.

## Important Notes

- Most APEX APIs assume the correct APEX workspace, application, and session context.
- Validate user-controlled values before passing them into administrative, security, SQL, or web-service APIs.
- Use the source link for exact behavior, defaults, and version-specific caveats.

## Simple Example

```sql
begin
    apex_util.PRN(
        p_clob => to_clob('Example text'),
        p_escape => true
    );
end;
/
```

