# APEX_UTIL.GET_PREFERENCE Function

Source: [Oracle APEX 26.1 API Reference](https://docs.oracle.com/en/database/oracle/apex/26.1/aeapi/GET_PREFERENCE-Function.html)

Status: generated detailed reference. Review edge cases against the source before production use.

Parent package: [APEX_UTIL](../APEX_UTIL.md)

## Purpose

This function retrieves the value of a previously saved preference for a given user.

## When To Use

Use this page when code needs the `APEX_UTIL.GET_PREFERENCE` function. Confirm security, workspace, and session requirements for your calling context.

## Signature

```sql
APEX_UTIL.GET_PREFERENCE (
    p_preference  IN    VARCHAR2 DEFAULT NULL,
    p_user        IN    VARCHAR2 DEFAULT V('USER') )
RETURN VARCHAR2;
```

## Parameters

| Parameter | Description |
| --- | --- |
| `p_preference` | Name of the preference to retrieve the value. |
| `p_user` | User for whom the preference is being retrieved. |

## Important Notes

- Most APEX APIs assume the correct APEX workspace, application, and session context.
- Validate user-controlled values before passing them into administrative, security, SQL, or web-service APIs.
- Use the source link for exact behavior, defaults, and version-specific caveats.

## Simple Example

```sql
declare
    l_result VARCHAR2;
begin
    l_result := apex_util.GET_PREFERENCE(
        p_preference => 'EXAMPLE',
        p_user => 'USER'
    );
    sys.dbms_output.put_line('Result captured.');
end;
/
```

