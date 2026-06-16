# APEX_UTIL.SAVEKEY_NUM Function

Source: [Oracle APEX 26.1 API Reference](https://docs.oracle.com/en/database/oracle/apex/26.1/aeapi/SAVEKEY_NUM-Function.html)

Status: generated detailed reference. Review edge cases against the source before production use.

Parent package: [APEX_UTIL](../APEX_UTIL.md)

## Purpose

This function sets a package variable ( apex_utilities.g_val_num ) so that it can be retrieved using the function KEYVAL_NUM .

## When To Use

Use this page when code needs the `APEX_UTIL.SAVEKEY_NUM` function. Confirm security, workspace, and session requirements for your calling context.

## Signature

```sql
APEX_UTIL.SAVEKEY_NUM (
    p_val IN NUMBER )
RETURN NUMBER;
```

## Parameters

| Parameter | Description |
| --- | --- |
| `p_val` | The numeric value to be saved. |

## Important Notes

- Most APEX APIs assume the correct APEX workspace, application, and session context.
- Validate user-controlled values before passing them into administrative, security, SQL, or web-service APIs.
- Use the source link for exact behavior, defaults, and version-specific caveats.

## Simple Example

Save a number in the package variable that KEYVAL_NUM returns later.

```sql
declare
    l_saved number;
begin
    l_saved := apex_util.savekey_num(
        p_val => :P10_ORDER_ID);
end;
/
```

