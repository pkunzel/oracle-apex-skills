# APEX_UTIL.CLOSE_OPEN_DB_LINKS Procedure

Source: [Oracle APEX 26.1 API Reference](https://docs.oracle.com/en/database/oracle/apex/26.1/aeapi/CLOSE_OPEN_DB_LINKS-Procedure.html)

Status: generated detailed reference. Review edge cases against the source before production use.

Parent package: [APEX_UTIL](../APEX_UTIL.md)

## Purpose

This procedure closes all open database links for the current database session.

## When To Use

Use this page when code needs the `APEX_UTIL.CLOSE_OPEN_DB_LINKS` procedure. Confirm security, workspace, and session requirements for your calling context.

## Signature

```sql
APEX_UTIL.CLOSE_OPEN_DB_LINKS
```

## Returns

This is a procedure and does not return a value.

## Important Notes

- Most APEX APIs assume the correct APEX workspace, application, and session context.
- Validate user-controlled values before passing them into administrative, security, SQL, or web-service APIs.
- Use the source link for exact behavior, defaults, and version-specific caveats.

## Simple Example

Close database links opened during the request after remote work is complete.

```sql
begin
    apex_util.close_open_db_links;
end;
/
```

