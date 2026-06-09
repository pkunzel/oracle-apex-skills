# APEX_INSTANCE_ADMIN.REMOVE_SCHEMA Procedure

Source: [Oracle APEX 26.1 API Reference](https://docs.oracle.com/en/database/oracle/apex/26.1/aeapi/REMOVE_SCHEMA-Procedure.html)

Status: generated detailed reference. Review edge cases against the source before production use.

Parent package: [APEX_INSTANCE_ADMIN](../APEX_INSTANCE_ADMIN.md)

## Purpose

Removes a workspace to schema mapping.

## When To Use

Use this page when code needs the `APEX_INSTANCE_ADMIN.REMOVE_SCHEMA` procedure. Confirm security, workspace, and session requirements for your calling context.

## Signature

```sql
APEX_INSTANCE_ADMIN.REMOVE_SCHEMA (
    p_workspace     IN VARCHAR2,
    p_schema        IN VARCHAR2 )
```

## Parameters

| Parameter | Description |
| --- | --- |
| `p_workspace` | The name of the workspace from which the schema mapping is removed. |
| `p_schema` | The schema to remove from the schema to workspace mapping. |

## Returns

This is a procedure and does not return a value.

## Important Notes

- Most APEX APIs assume the correct APEX workspace, application, and session context.
- Validate user-controlled values before passing them into administrative, security, SQL, or web-service APIs.
- Use the source link for exact behavior, defaults, and version-specific caveats.

## Simple Example

```sql
begin
    apex_instance_admin.REMOVE_SCHEMA(
        p_workspace => 'EXAMPLE',
        p_schema => 'EXAMPLE'
    );
end;
/
```

