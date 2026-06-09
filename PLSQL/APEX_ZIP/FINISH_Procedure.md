# APEX_ZIP.FINISH Procedure

Source: [Oracle APEX 26.1 API Reference](https://docs.oracle.com/en/database/oracle/apex/26.1/aeapi/APEX_ZIP.FINISH-Procedure.html)

Status: generated detailed reference. Review edge cases against the source before production use.

Parent package: [APEX_ZIP](../APEX_ZIP.md)

## Purpose

This procedure completes the creation of a zip file after adding files with APEX_ZIP.ADD_FILE .

## When To Use

Use this page when code needs the `APEX_ZIP.FINISH` procedure. Confirm security, workspace, and session requirements for your calling context.

## Signature

```sql
APEX_ZIP.FINISH (
    p_zipped_blob IN OUT NOCOPY BLOB )
```

## Parameters

| Parameter | Description |
| --- | --- |
| `p_zipped_blob` | BLOB containing the zip file. |

## Returns

This is a procedure and does not return a value.

## Important Notes

- Most APEX APIs assume the correct APEX workspace, application, and session context.
- Validate user-controlled values before passing them into administrative, security, SQL, or web-service APIs.
- Use the source link for exact behavior, defaults, and version-specific caveats.

## Simple Example

```sql
begin
    apex_zip.FINISH(
        p_zipped_blob => null
    );
end;
/
```

## More Complex Example

```sql
begin
    -- Assuming this runs inside an APEX page process with the right workspace/app context.
    apex_zip.FINISH(
            p_zipped_blob => null
        );
end;
/
```

