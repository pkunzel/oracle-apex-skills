# APEX_STRING.NEXT_CHUNK Function

Source: [Oracle APEX 26.1 API Reference](https://docs.oracle.com/en/database/oracle/apex/26.1/aeapi/NEXT_CHUNK-Function.html)

Status: generated detailed reference. Review edge cases against the source before production use.

Parent package: [APEX_STRING](../APEX_STRING.md)

## Purpose

This function reads a fixed-length string from a clob. This is just a small wrapper around DBMS_LOB.READ , however it prevents common errors when incrementing the offset and picking the maximum chunk size.

## When To Use

Use this page when code needs the `APEX_STRING.NEXT_CHUNK` function. Confirm security, workspace, and session requirements for your calling context.

## Signature

```sql
APEX_STRING.NEXT_CHUNK (
    p_str    IN            CLOB,
    p_chunk  OUT    NOCOPY VARCHAR2,
    p_offset IN OUT NOCOPY INTEGER,
    p_amount IN            INTEGER DEFAULT 8191 )
    RETURN BOOLEAN;
```

## Parameters

| Parameter | Description |
| --- | --- |
| `p_str` | The input clob. |
| `p_chunk` | The chunk value (in/out). |
| `p_offset` | The position in p_str , where the next chunk should be read from (in/out). |
| `p_amount` | The amount of characters that should be read (default 8191). |

## Returns

True if another chunk could be read. False if reading past the end of p_str .

## Important Notes

- Most APEX APIs assume the correct APEX workspace, application, and session context.
- Validate user-controlled values before passing them into administrative, security, SQL, or web-service APIs.
- Use the source link for exact behavior, defaults, and version-specific caveats.

## Simple Example

```sql
declare
    l_result BOOLEAN;
begin
    l_result := apex_string.NEXT_CHUNK(
        p_str => to_clob('Example text'),
        p_chunk => 'EXAMPLE',
        p_offset => 1,
        p_amount => 1
    );
    sys.dbms_output.put_line('Result captured.');
end;
/
```

