# APEX_INSTANCE_ADMIN.IS_DB_SIGNATURE_VALID Function

Source: [Oracle APEX 26.1 API Reference](https://docs.oracle.com/en/database/oracle/apex/26.1/aeapi/IS_DB_SIGNATURE_VALID-Function.html)

Status: generated detailed reference. Review edge cases against the source before production use.

Parent package: [APEX_INSTANCE_ADMIN](../APEX_INSTANCE_ADMIN.md)

## Purpose

The IS_DB_SIGNATURE_VALID function returns whether the instance parameter DB_SIGNATURE matches the value of the function db_signature . If the instance parameter is not set (the default), also return true .

## When To Use

Use this page when code needs the `APEX_INSTANCE_ADMIN.IS_DB_SIGNATURE_VALID` function. Confirm security, workspace, and session requirements for your calling context.

## Signature

```sql
APEX_INSTANCE_ADMIN.IS_DB_SIGNATURE_VALID
    RETURN BOOLEAN;
```

## Important Notes

- Most APEX APIs assume the correct APEX workspace, application, and session context.
- Validate user-controlled values before passing them into administrative, security, SQL, or web-service APIs.
- Use the source link for exact behavior, defaults, and version-specific caveats.

## Simple Example

```sql
declare
    l_result BOOLEAN;
begin
    l_result := apex_instance_admin.IS_DB_SIGNATURE_VALID;
    sys.dbms_output.put_line('Result captured.');
end;
/
```

