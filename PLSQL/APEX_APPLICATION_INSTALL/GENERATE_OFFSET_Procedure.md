# APEX_APPLICATION_INSTALL.GENERATE_OFFSET Procedure

Source: [Oracle APEX 26.1 API Reference](https://docs.oracle.com/en/database/oracle/apex/26.1/aeapi/GENERATE_OFFSET-Procedure.html)

Status: generated detailed reference. Review edge cases against the source before production use.

Parent package: [APEX_APPLICATION_INSTALL](../APEX_APPLICATION_INSTALL.md)

## Purpose

This procedure generates the offset value used during application import. Use the offset value to ensure that the metadata for the Oracle APEX application definition does not collide with other metadata on the instance. For a new application installation, it is usually sufficient to call this procedure to have APEX generate this offset value for you.

## When To Use

Use this page when code needs the `APEX_APPLICATION_INSTALL.GENERATE_OFFSET` procedure. Confirm security, workspace, and session requirements for your calling context.

## Signature

```sql
APEX_APPLICATION_INSTALL.GENERATE_OFFSET;
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
    apex_application_install.GENERATE_OFFSET;
end;
/
```

## More Complex Example

```sql
begin
    -- Assuming this runs inside an APEX page process with the right workspace/app context.
    apex_application_install.GENERATE_OFFSET;
end;
/
```

