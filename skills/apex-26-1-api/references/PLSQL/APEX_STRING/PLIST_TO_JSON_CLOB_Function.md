# APEX_STRING.PLIST_TO_JSON_CLOB Function

Source: [Oracle APEX 26.1 API Reference](https://docs.oracle.com/en/database/oracle/apex/26.1/aeapi/PLIST_TO_JSON_CLOB-Function.html)

Status: generated detailed reference. Review edge cases against the source before production use.

Parent package: [APEX_STRING](../APEX_STRING.md)

## Purpose

This function converts a apex_t_varchar2 record to a sys.json_object_t object type and stringifies it.

## When To Use

Use this page when code needs the `APEX_STRING.PLIST_TO_JSON_CLOB` function. Confirm security, workspace, and session requirements for your calling context.

## Signature

```sql
APEX_STRING.PLIST_TO_JSON_CLOB (
    p_plist IN apex_t_varchar2 )
RETURN CLOB;
```

## Parameters

| Parameter | Description |
| --- | --- |
| `p_plist` | The table. |

## Returns

CLOB containing a JSON object with keys and values of the given p_plist .

## Important Notes

- Most APEX APIs assume the correct APEX workspace, application, and session context.
- Validate user-controlled values before passing them into administrative, security, SQL, or web-service APIs.
- Use the source link for exact behavior, defaults, and version-specific caveats.

## Simple Example

Serialize a small property list for logging or an API payload.

```sql
declare
    l_props apex_t_varchar2;
    l_json  clob;
begin
    l_props := apex_string.plist_put(l_props, 'status', 'open');
    l_props := apex_string.plist_put(l_props, 'owner', :APP_USER);

    l_json := apex_string.plist_to_json_clob(
        p_plist => l_props);
end;
/
```

