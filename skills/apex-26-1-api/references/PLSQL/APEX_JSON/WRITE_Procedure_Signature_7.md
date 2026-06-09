# APEX_JSON.WRITE Procedure Signature 7

Source: [Oracle APEX 26.1 API Reference](https://docs.oracle.com/en/database/oracle/apex/26.1/aeapi/WRITE-Procedure-Signature-7.html)

Status: generated detailed reference. Review edge cases against the source before production use.

Parent package: [APEX_JSON](../APEX_JSON.md)

## Purpose

This procedure writes an array with all rows that the cursor returns. Each row is a separate object. If the query contains object type, collection, or cursor columns, the procedure uses write(xmltype) to generate JSON. Otherwise, it uses DBMS_SQL to fetch rows and the write() procedures for the appropriate column data types for output. If the column type is varchar2 and the uppercase value is 'TRUE' or 'FALSE' , it generates boolean values.

## When To Use

Use this page when code needs the `APEX_JSON.WRITE` procedure. Confirm security, workspace, and session requirements for your calling context.

## Signature

```sql
APEX_JSON.WRITE (
    p_cursor      IN OUT NOCOPY sys_refcursor );
```

## Parameters

| Parameter | Description |
| --- | --- |
| `p_cursor` | The cursor. |

## Returns

This is a procedure and does not return a value.

## Important Notes

- Most APEX APIs assume the correct APEX workspace, application, and session context.
- Validate user-controlled values before passing them into administrative, security, SQL, or web-service APIs.
- Use the source link for exact behavior, defaults, and version-specific caveats.

## Simple Example

```sql
begin
    apex_json.WRITE(
        p_cursor => null
    );
end;
/
```

## More Complex Example

```sql
begin
    -- Assuming this runs inside an APEX page process with the right workspace/app context.
    apex_json.WRITE(
            p_cursor => null
        );
end;
/
```

