# APEX_UTIL.FETCH_APP_ITEM Function

Source: [Oracle APEX 26.1 API Reference](https://docs.oracle.com/en/database/oracle/apex/26.1/aeapi/FETCH_APP_ITEM-Function.html)

Status: generated detailed reference. Review edge cases against the source before production use.

Parent package: [APEX_UTIL](../APEX_UTIL.md)

## Purpose

This function fetches session state for the current or specified application in the current or specified session.

## When To Use

Use this page when code needs the `APEX_UTIL.FETCH_APP_ITEM` function. Confirm security, workspace, and session requirements for your calling context.

## Signature

```sql
APEX_UTIL.FETCH_APP_ITEM (
    p_item    IN VARCHAR2,
    p_app     IN NUMBER DEFAULT NULL,
    p_session IN NUMBER DEFAULT NULL )
RETURN VARCHAR2;
```

## Parameters

| Parameter | Description |
| --- | --- |
| `p_item` | The name of an application-level item (not a page item) whose current value is to be fetched. |
| `p_app` | The ID of the application that owns the item (leave null for the current application). |
| `p_session` | The session ID from which to obtain the value (leave null for the current session). |

## Important Notes

- Most APEX APIs assume the correct APEX workspace, application, and session context.
- Validate user-controlled values before passing them into administrative, security, SQL, or web-service APIs.
- Use the source link for exact behavior, defaults, and version-specific caveats.

## Simple Example

```sql
declare
    l_result VARCHAR2;
begin
    l_result := apex_util.FETCH_APP_ITEM(
        p_item => 'EXAMPLE',
        p_app => 1,
        p_session => 1
    );
    sys.dbms_output.put_line('Result captured.');
end;
/
```

## More Complex Example

```sql
declare
    l_result VARCHAR2;
begin
    -- Assuming this runs outside a normal APEX page request.
    apex_session.create_session(
        p_app_id   => 100,
        p_page_id  => 1,
        p_username => 'USER');

    l_result := apex_util.FETCH_APP_ITEM(
            p_item => 'EXAMPLE',
            p_app => 1,
            p_session => 1
        );

    apex_session.delete_session;
exception
    when others then
        apex_session.delete_session;
        raise;
end;
/
```

