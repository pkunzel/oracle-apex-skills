# APEX_INSTANCE_ADMIN.REMOVE_WEB_ENTRY_POINT Procedure

Source: [Oracle APEX 26.1 API Reference](https://docs.oracle.com/en/database/oracle/apex/26.1/aeapi/REMOVE_WEB_ENTRY_POINT-Procedure.html)

Status: generated detailed reference. Review edge cases against the source before production use.

Parent package: [APEX_INSTANCE_ADMIN](../APEX_INSTANCE_ADMIN.md)

## Purpose

Removes a public procedure from the list of allowed objects that can be called via the URL.

## When To Use

Use this page when code needs the `APEX_INSTANCE_ADMIN.REMOVE_WEB_ENTRY_POINT` procedure. Confirm security, workspace, and session requirements for your calling context.

## Signature

```sql
APEX_INSTANCE_ADMIN.REMOVE_WEB_ENTRY_POINT (
    p_name   IN VARCHAR2 )
```

## Parameters

| Parameter | Description |
| --- | --- |
| `p_name` | The procedure name, prefixed by package name and schema, unless a public synonym exists. |

## Returns

This is a procedure and does not return a value.

## Important Notes

- Most APEX APIs assume the correct APEX workspace, application, and session context.
- Validate user-controlled values before passing them into administrative, security, SQL, or web-service APIs.
- Use the source link for exact behavior, defaults, and version-specific caveats.

## Simple Example

```sql
begin
    apex_instance_admin.remove_web_entry_point(
        p_name => 'SALES_API.PUBLIC_CALLBACK'
    );

    commit;
end;
/
```
