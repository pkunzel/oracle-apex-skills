# APEX_UTIL.BLOB_TO_CLOB Function

Source: [Oracle APEX 26.1 API Reference](https://docs.oracle.com/en/database/oracle/apex/26.1/aeapi/BLOB_TO_CLOB-Function.html)

Status: generated detailed reference. Review edge cases against the source before production use.

Parent package: [APEX_UTIL](../APEX_UTIL.md)

## Purpose

This function converts a BLOB to a temporary CLOB.

## When To Use

Use this page when code needs the `APEX_UTIL.BLOB_TO_CLOB` function. Confirm security, workspace, and session requirements for your calling context.

## Signature

```sql
APEX_UTIL.BLOB_TO_CLOB (
    p_blob              IN BLOB,
    p_charset           IN VARCHAR2 DEFAULT NULL,
    --
    p_in_memory         IN VARCHAR2 DEFAULT 'Y',
    p_free_immediately  IN VARCHAR2 DEFAULT 'Y' )
RETURN CLOB;
```

## Parameters

| Parameter | Description |
| --- | --- |
| `p_blob` | BLOB to be converted to a CLOB. |
| `p_charset` | Character set of the BLOB to be converted. If omitted, the database character set is assumed and no character set conversion happens. |
| `p_in_memory` | If Y is specified, create the temporary LOB in memory. |
| `p_free_immediately` | If Y is specified, clean up the temporary LOB after the top-level call. |

## Returns

Temporary CLOB containing the BLOB contents.

## Important Notes

- Most APEX APIs assume the correct APEX workspace, application, and session context.
- Validate user-controlled values before passing them into administrative, security, SQL, or web-service APIs.
- Use the source link for exact behavior, defaults, and version-specific caveats.

## Simple Example

```sql
declare
    l_result CLOB;
begin
    l_result := apex_util.BLOB_TO_CLOB(
        p_blob => null,
        p_charset => 'EXAMPLE',
        p_in_memory => 'EXAMPLE',
        p_free_immediately => 'EXAMPLE'
    );
    sys.dbms_output.put_line('Result captured.');
end;
/
```

