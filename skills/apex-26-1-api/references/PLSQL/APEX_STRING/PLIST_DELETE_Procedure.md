# APEX_STRING.PLIST_DELETE Procedure

Source: [Oracle APEX 26.1 API Reference](https://docs.oracle.com/en/database/oracle/apex/26.1/aeapi/PLIST_DELETE-Procedure.html)

Status: generated detailed reference. Review edge cases against the source before production use.

Parent package: [APEX_STRING](../APEX_STRING.md)

## Purpose

This procedure removes the property list key from the table.

## When To Use

Use this page when code needs the `APEX_STRING.PLIST_DELETE` procedure. Confirm security, workspace, and session requirements for your calling context.

## Signature

```sql
PLIST_DELETE (
    p_table IN OUT NOCOPY apex_t_varchar2,
    p_key   IN            VARCHAR2 );
```

## Parameters

| Parameter | Description |
| --- | --- |
| `p_table` | The input table. |
| `p_key` | The input key. |

## Returns

This is a procedure and does not return a value.

## Important Notes

- Most APEX APIs assume the correct APEX workspace, application, and session context.
- Validate user-controlled values before passing them into administrative, security, SQL, or web-service APIs.
- Use the source link for exact behavior, defaults, and version-specific caveats.

## Simple Example

```sql
begin
    apex_string.PLIST_DELETE(
        p_table => null,
        p_key => 'EXAMPLE'
    );
end;
/
```

