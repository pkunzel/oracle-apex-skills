# APEX_UTIL.SAVEKEY_VC2 Function

Source: [Oracle APEX 26.1 API Reference](https://docs.oracle.com/en/database/oracle/apex/26.1/aeapi/SAVEKEY_VC2-Function.html)

Status: generated detailed reference. Review edge cases against the source before production use.

Parent package: [APEX_UTIL](../APEX_UTIL.md)

## Purpose

This function sets a package variable ( apex_utilities.g_val_vc2 ) so that it can be retrieved using the function KEYVAL_VC2 .

## When To Use

Use this page when code needs the `APEX_UTIL.SAVEKEY_VC2` function. Confirm security, workspace, and session requirements for your calling context.

## Signature

```sql
APEX_UTIL.SAVEKEY_VC2 (
    p_val IN VARCHAR2 )
RETURN VARCHAR2;
```

## Parameters

| Parameter | Description |
| --- | --- |
| `p_val` | The is the VARCHAR2 value to be saved. |

## Important Notes

- Most APEX APIs assume the correct APEX workspace, application, and session context.
- Validate user-controlled values before passing them into administrative, security, SQL, or web-service APIs.
- Use the source link for exact behavior, defaults, and version-specific caveats.

## Simple Example

Save a string in the package variable that KEYVAL_VC2 returns later.

```sql
declare
    l_saved varchar2(4000);
begin
    l_saved := apex_util.savekey_vc2(
        p_val => :P10_ORDER_STATUS);
end;
/
```

