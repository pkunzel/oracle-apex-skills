# APEX_UTIL.KEYVAL_NUM Function

Source: [Oracle APEX 26.1 API Reference](https://docs.oracle.com/en/database/oracle/apex/26.1/aeapi/KEYVAL_NUM-Function.html)

Status: generated detailed reference. Review edge cases against the source before production use.

Parent package: [APEX_UTIL](../APEX_UTIL.md)

## Purpose

This function gets the value of the package variable ( apex_utilities.g_val_num ) set by APEX_UTIL.SAVEKEY_NUM .

## When To Use

Use this page when code needs the `APEX_UTIL.KEYVAL_NUM` function. Confirm security, workspace, and session requirements for your calling context.

## Signature

```sql
APEX_UTIL.KEYVAL_NUM
RETURN NUMBER;
```

## Important Notes

- Most APEX APIs assume the correct APEX workspace, application, and session context.
- Validate user-controlled values before passing them into administrative, security, SQL, or web-service APIs.
- Use the source link for exact behavior, defaults, and version-specific caveats.

## Simple Example

```sql
declare
    l_result NUMBER;
begin
    l_result := apex_util.KEYVAL_NUM;
    sys.dbms_output.put_line('Result captured.');
end;
/
```

