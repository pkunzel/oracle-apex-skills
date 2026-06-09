# APEX_INSTANCE_ADMIN.VALIDATE_EMAIL_CONFIG Procedure

Source: [Oracle APEX 26.1 API Reference](https://docs.oracle.com/en/database/oracle/apex/26.1/aeapi/VALIDATE_EMAIL_CONFIG-Procedure.html)

Status: generated detailed reference. Review edge cases against the source before production use.

Parent package: [APEX_INSTANCE_ADMIN](../APEX_INSTANCE_ADMIN.md)

## Purpose

This procedure attempts to establish a connection with the email server configured in an Oracle APEX instance. An error is raised if the connection is unsuccessful. This can indicate incorrect SMTP instance parameters, missing Network ACL, missing SSL certificate in Oracle Wallet, or a problem on the email server side. Correct the instance configuration and re-execute this procedure to confirm.

## When To Use

Use this page when code needs the `APEX_INSTANCE_ADMIN.VALIDATE_EMAIL_CONFIG` procedure. Confirm security, workspace, and session requirements for your calling context.

## Signature

```sql
APEX_INSTANCE_ADMIN.VALIDATE_EMAIL_CONFIG
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
    apex_instance_admin.VALIDATE_EMAIL_CONFIG;
end;
/
```

## More Complex Example

```sql
begin
    -- Assuming this runs inside an APEX page process with the right workspace/app context.
    apex_instance_admin.VALIDATE_EMAIL_CONFIG;
end;
/
```

