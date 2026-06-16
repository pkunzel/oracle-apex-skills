# APEX_UTIL.GET_SESSION_STATE Function

Source: [Oracle APEX 26.1 API Reference](https://docs.oracle.com/en/database/oracle/apex/26.1/aeapi/GET_SESSION_STATE-Function.html)

Status: generated detailed reference. Review edge cases against the source before production use.

Parent package: [APEX_UTIL](../APEX_UTIL.md)

## Purpose

This function returns the value for an item. You can use this function in your Oracle APEX applications wherever you can use PL/SQL or SQL. You can also use the shorthand function V in place of APEX_UTIL.GET_SESSION_STATE .

## When To Use

Use this page when code needs the `APEX_UTIL.GET_SESSION_STATE` function. Confirm security, workspace, and session requirements for your calling context.

## Signature

```sql
APEX_UTIL.GET_SESSION_STATE (
    p_item  IN VARCHAR2 )
RETURN VARCHAR2;
```

## Parameters

| Parameter | Description |
| --- | --- |
| `p_item` | The case insensitive name of the item for which you want to have the session state fetched. |

## Important Notes

- Most APEX APIs assume the correct APEX workspace, application, and session context.
- Validate user-controlled values before passing them into administrative, security, SQL, or web-service APIs.
- Use the source link for exact behavior, defaults, and version-specific caveats.

## Simple Example

Read a page item value from session state.

```sql
declare
    l_status varchar2(30);
begin
    l_status := apex_util.get_session_state(
        p_item => 'P10_STATUS');
end;
/
```

