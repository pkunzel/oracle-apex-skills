# APEX_INSTANCE_ADMIN.DB_SIGNATURE Function

Source: [Oracle APEX 26.1 API Reference](https://docs.oracle.com/en/database/oracle/apex/26.1/aeapi/DB_SIGNATURE-Function.html)

Status: generated detailed reference. Review edge cases against the source before production use.

Parent package: [APEX_INSTANCE_ADMIN](../APEX_INSTANCE_ADMIN.md)

## Purpose

This function computes the current database signature value.

## When To Use

Use this page when code needs the `APEX_INSTANCE_ADMIN.DB_SIGNATURE` function. Confirm security, workspace, and session requirements for your calling context.

## Signature

```sql
APEX_INSTANCE_ADMIN.DB_SIGNATURE
    RETURN VARCHAR2;
```

## Important Notes

- Most APEX APIs assume the correct APEX workspace, application, and session context.
- Validate user-controlled values before passing them into administrative, security, SQL, or web-service APIs.
- Use the source link for exact behavior, defaults, and version-specific caveats.

## Simple Example

```sql
declare
    l_signature varchar2(32767);
begin
    l_signature := apex_instance_admin.db_signature;

    sys.dbms_output.put_line('Database signature: ' || l_signature);
end;
/
```
