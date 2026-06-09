# APEX_INSTANCE_ADMIN.RESTRICT_SCHEMA Procedure

Source: [Oracle APEX 26.1 API Reference](https://docs.oracle.com/en/database/oracle/apex/26.1/aeapi/RESTRICT_SCHEMA-Procedure.html)

Status: generated detailed reference. Review edge cases against the source before production use.

Parent package: [APEX_INSTANCE_ADMIN](../APEX_INSTANCE_ADMIN.md)

## Purpose

This procedure revokes the privilege to assign a schema to workspaces.

## When To Use

Use this page when code needs the `APEX_INSTANCE_ADMIN.RESTRICT_SCHEMA` procedure. Confirm security, workspace, and session requirements for your calling context.

## Signature

```sql
APEX_INSTANCE_ADMIN.RESTRICT_SCHEMA (
    p_schema    IN VARCHAR2 )
```

## Returns

This is a procedure and does not return a value.

## Important Notes

- Most APEX APIs assume the correct APEX workspace, application, and session context.
- Validate user-controlled values before passing them into administrative, security, SQL, or web-service APIs.
- Use the source link for exact behavior, defaults, and version-specific caveats.

## Simple Example

```sql
begin
    apex_instance_admin.RESTRICT_SCHEMA(
        p_schema => 'EXAMPLE'
    );
end;
/
```

## More Complex Example

```sql
begin
    -- Assuming this runs inside an APEX page process with the right workspace/app context.
    apex_instance_admin.RESTRICT_SCHEMA(
            p_schema => 'EXAMPLE'
        );
end;
/
```

