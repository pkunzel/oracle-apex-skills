# APEX_DB_DICTIONARY.IS_SUPPORTED Function

Source: [Oracle APEX 26.1 API Reference](https://docs.oracle.com/en/database/oracle/apex/26.1/aeapi/APEX_DB_DICTIONARY.IS_SUPPORTED-Function.html)

Status: generated detailed reference. Review edge cases against the source before production use.

Parent package: [APEX_DB_DICTIONARY](../APEX_DB_DICTIONARY.md)

## Purpose

This function returns TRUE if DBMS_DEVELOPER is supported on this instance.

## When To Use

Use this page when code needs the `APEX_DB_DICTIONARY.IS_SUPPORTED` function. Confirm security, workspace, and session requirements for your calling context.

## Signature

```sql
FUNCTION apex_db_dictionary.is_supported
    RETURN BOOLEAN;
```

## Returns

This function returns TRUE if DBMS_DEVELOPER is available on this instance; otherwise FALSE .

## Important Notes

- Most APEX APIs assume the correct APEX workspace, application, and session context.
- Validate user-controlled values before passing them into administrative, security, SQL, or web-service APIs.
- Use the source link for exact behavior, defaults, and version-specific caveats.

## Simple Example

```sql
begin
    if apex_db_dictionary.is_supported then
        sys.dbms_output.put_line('APEX_DB_DICTIONARY can use DBMS_DEVELOPER metadata APIs.');
    else
        sys.dbms_output.put_line('DBMS_DEVELOPER metadata APIs are not available in this database.');
    end if;
end;
/
```
