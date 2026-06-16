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

Read a saved user preference with a fallback when it has not been set.

```sql
declare
    l_view varchar2(30);
begin
    l_view := apex_util.get_preference(
        p_preference => 'ORDER_REPORT_VIEW',
        p_user       => :APP_USER);

    if l_view is null then
        l_view := 'CARDS';
    end if;
end;
/
```

