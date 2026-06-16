# APEX_UTIL.GET_LAST_NAME Function

Source: [Oracle APEX 26.1 API Reference](https://docs.oracle.com/en/database/oracle/apex/26.1/aeapi/GET_LAST_NAME-Function.html)

Status: generated detailed reference. Review edge cases against the source before production use.

Parent package: [APEX_UTIL](../APEX_UTIL.md)

## Purpose

This function returns the LAST_NAME field stored in the named user account record.

## When To Use

Use this page when code needs the `APEX_UTIL.GET_LAST_NAME` function. Confirm security, workspace, and session requirements for your calling context.

## Signature

```sql
APEX_UTIL.GET_LAST_NAME (
    p_username IN VARCHAR2 )
RETURN VARCHAR2;
```

## Parameters

| Parameter | Description |
| --- | --- |
| `p_username` | The user name in the user account record. |

## Important Notes

- Most APEX APIs assume the correct APEX workspace, application, and session context.
- Validate user-controlled values before passing them into administrative, security, SQL, or web-service APIs.
- Use the source link for exact behavior, defaults, and version-specific caveats.

## Simple Example

Read the last name stored for an APEX workspace user.

```sql
declare
    l_last_name varchar2(255);
begin
    l_last_name := apex_util.get_last_name(
        p_username => 'JSMITH');
end;
/
```

