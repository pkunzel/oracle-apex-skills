# APEX_APPLICATION_INSTALL.GENERATE_APPLICATION_ID Procedure

Source: [Oracle APEX 26.1 API Reference](https://docs.oracle.com/en/database/oracle/apex/26.1/aeapi/GENERATE_APPLICATION_ID-Procedure.html)

Status: generated detailed reference. Review edge cases against the source before production use.

Parent package: [APEX_APPLICATION_INSTALL](../APEX_APPLICATION_INSTALL.md)

## Purpose

This procedure generates an available application ID on the instance and sets the application ID in APEX_APPLICATION_INSTALL.

## When To Use

Use this page when code needs the `APEX_APPLICATION_INSTALL.GENERATE_APPLICATION_ID` procedure. Confirm security, workspace, and session requirements for your calling context.

## Signature

```sql
APEX_APPLICATION_INSTALL.GENERATE_APPLICATION_ID;
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
    apex_application_install.GENERATE_APPLICATION_ID;
end;
/
```

## More Complex Example

```sql
begin
    -- Assuming this runs inside an APEX page process with the right workspace/app context.
    apex_application_install.GENERATE_APPLICATION_ID;
end;
/
```

