# APEX_STRING_UTIL.TO_DISPLAY_FILESIZE Function

Source: [Oracle APEX 26.1 API Reference](https://docs.oracle.com/en/database/oracle/apex/26.1/aeapi/TO_DISPLAY_FILESIZE-Function.html)

Status: generated detailed reference. Review edge cases against the source before production use.

Parent package: [APEX_STRING_UTIL](../APEX_STRING_UTIL.md)

## Purpose

This function returns a friendly file size, given a size in bytes (for example, 5.1MB or 6GB).

## When To Use

Use this page when code needs the `APEX_STRING_UTIL.TO_DISPLAY_FILESIZE` function. Confirm security, workspace, and session requirements for your calling context.

## Signature

```sql
APEX_STRING_UTIL.TO_DISPLAY_FILESIZE (
    p_size_in_bytes     IN  NUMBER )
    RETURN VARCHAR2;
```

## Parameters

| Parameter | Description |
| --- | --- |
| `p_size_in_bytes` | The input size in bytes. |

## Returns

Returns the file size with a unit.

## Important Notes

- Most APEX APIs assume the correct APEX workspace, application, and session context.
- Validate user-controlled values before passing them into administrative, security, SQL, or web-service APIs.
- Use the source link for exact behavior, defaults, and version-specific caveats.

## Simple Example

Show a friendly file-size label from a byte count.

```sql
begin
    :P10_FILE_SIZE_LABEL := apex_string_util.to_display_filesize(
        p_size_in_bytes => :P10_FILE_SIZE_BYTES);
end;
/
```

