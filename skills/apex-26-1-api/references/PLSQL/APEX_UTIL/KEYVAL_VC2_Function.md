# APEX_UTIL.KEYVAL_VC2 Function

Source: [Oracle APEX 26.1 API Reference](https://docs.oracle.com/en/database/oracle/apex/26.1/aeapi/KEYVAL_VC2-Function.html)

Status: generated detailed reference. Review edge cases against the source before production use.

Parent package: [APEX_UTIL](../APEX_UTIL.md)

## Purpose

This function gets the value of the package variable ( apex_utilities.g_val_vc2 ) set by APEX_UTIL.SAVEKEY_VC2 .

## When To Use

Use this page when code needs the `APEX_UTIL.KEYVAL_VC2` function. Confirm security, workspace, and session requirements for your calling context.

## Signature

```sql
APEX_UTIL.KEYVAL_VC2;
```

## Important Notes

- Most APEX APIs assume the correct APEX workspace, application, and session context.
- Validate user-controlled values before passing them into administrative, security, SQL, or web-service APIs.
- Use the source link for exact behavior, defaults, and version-specific caveats.

## Simple Example

Retrieve the string previously saved with SAVEKEY_VC2 during the request.

```sql
declare
    l_saved_key varchar2(4000);
begin
    l_saved_key := apex_util.keyval_vc2;
end;
/
```

