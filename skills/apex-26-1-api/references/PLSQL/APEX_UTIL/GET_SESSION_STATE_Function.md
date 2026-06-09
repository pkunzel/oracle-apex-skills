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

```sql
declare
    l_result VARCHAR2;
begin
    l_result := apex_util.GET_SESSION_STATE(
        p_item => 'EXAMPLE'
    );
    sys.dbms_output.put_line('Result captured.');
end;
/
```

