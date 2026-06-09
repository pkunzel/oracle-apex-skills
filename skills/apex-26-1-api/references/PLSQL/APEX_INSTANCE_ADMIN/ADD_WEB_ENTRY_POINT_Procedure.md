# APEX_INSTANCE_ADMIN.ADD_WEB_ENTRY_POINT Procedure

Source: [Oracle APEX 26.1 API Reference](https://docs.oracle.com/en/database/oracle/apex/26.1/aeapi/ADD_WEB_ENTRY_POINT-procedure.html)

Status: generated detailed reference. Review edge cases against the source before production use.

Parent package: [APEX_INSTANCE_ADMIN](../APEX_INSTANCE_ADMIN.md)

## Purpose

Covers the documented procedure APEX_INSTANCE_ADMIN.ADD_WEB_ENTRY_POINT.

## When To Use

Use this page when code needs the `APEX_INSTANCE_ADMIN.ADD_WEB_ENTRY_POINT` procedure. Confirm security, workspace, and session requirements for your calling context.

## Signature

```sql
APEX_INSTANCE_ADMIN.ADD_WEB_ENTRY_POINT (
    p_name    IN VARCHAR2,
    p_methods IN VARCHAR2 DEFAULT 'GET' );
```

## Parameters

| Parameter | Description |
| --- | --- |
| `p_name` | The procedure name, prefixed by package name and schema, unless a public synonym exists. |
| `p_methods (deprecated)` | Note: This parameter is deprecated and will be removed in a future release. The comma-separated HTTP request methods (such as GET or POST ). Default GET . |

## Returns

This is a procedure and does not return a value.

## Important Notes

- Most APEX APIs assume the correct APEX workspace, application, and session context.
- Validate user-controlled values before passing them into administrative, security, SQL, or web-service APIs.
- Use the source link for exact behavior, defaults, and version-specific caveats.

## Simple Example

```sql
begin
    apex_instance_admin.ADD_WEB_ENTRY_POINT(
        p_name => 'EXAMPLE',
        p_methods => 'EXAMPLE'
    );
end;
/
```

