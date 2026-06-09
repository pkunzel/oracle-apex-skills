# APEX_INSTANCE_ADMIN.REMOVE_SCHEMA_EXCEPTIONS Procedure

Source: [Oracle APEX 26.1 API Reference](https://docs.oracle.com/en/database/oracle/apex/26.1/aeapi/REMOVE_SCHEMA_EXCEPTIONS-Procedure.html)

Status: generated detailed reference. Review edge cases against the source before production use.

Parent package: [APEX_INSTANCE_ADMIN](../APEX_INSTANCE_ADMIN.md)

## Purpose

This procedure removes all exceptions that enable the assignment of a restricted schema to a specific workspace.

## When To Use

Use this page when code needs the `APEX_INSTANCE_ADMIN.REMOVE_SCHEMA_EXCEPTIONS` procedure. Confirm security, workspace, and session requirements for your calling context.

## Signature

```sql
APEX_INSTANCE_ADMIN.REMOVE_SCHEMA_EXCEPTIONS (
      p_schema IN VARCHAR2 )
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
    apex_instance_admin.REMOVE_SCHEMA_EXCEPTIONS(
        p_schema => 'EXAMPLE'
    );
end;
/
```

## More Complex Example

```sql
begin
    -- Assuming this runs inside an APEX page process with the right workspace/app context.
    apex_instance_admin.REMOVE_SCHEMA_EXCEPTIONS(
            p_schema => 'EXAMPLE'
        );
end;
/
```

