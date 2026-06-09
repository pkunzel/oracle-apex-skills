# APEX_UTIL.FIND_SECURITY_GROUP_ID Function

Source: [Oracle APEX 26.1 API Reference](https://docs.oracle.com/en/database/oracle/apex/26.1/aeapi/FIND_SECURITY_GROUP_ID-Function.html)

Status: generated detailed reference. Review edge cases against the source before production use.

Parent package: [APEX_UTIL](../APEX_UTIL.md)

## Purpose

This function returns the numeric security group ID of the named workspace.

## When To Use

Use this page when code needs the `APEX_UTIL.FIND_SECURITY_GROUP_ID` function. Confirm security, workspace, and session requirements for your calling context.

## Signature

```sql
APEX_UTIL.FIND_SECURITY_GROUP_ID (
    p_workspace    IN VARCHAR2 )
RETURN NUMBER;
```

## Parameters

| Parameter | Description |
| --- | --- |
| `p_workspace` | The name of the workspace. |

## Important Notes

- Most APEX APIs assume the correct APEX workspace, application, and session context.
- Validate user-controlled values before passing them into administrative, security, SQL, or web-service APIs.
- Use the source link for exact behavior, defaults, and version-specific caveats.

## Simple Example

```sql
declare
    l_result NUMBER;
begin
    l_result := apex_util.FIND_SECURITY_GROUP_ID(
        p_workspace => 'EXAMPLE'
    );
    sys.dbms_output.put_line('Result captured.');
end;
/
```

## More Complex Example

```sql
declare
    l_result NUMBER;
begin
    -- Assuming this runs outside a normal APEX page request.
    apex_session.create_session(
        p_app_id   => 100,
        p_page_id  => 1,
        p_username => 'USER');

    l_result := apex_util.FIND_SECURITY_GROUP_ID(
            p_workspace => 'EXAMPLE'
        );

    apex_session.delete_session;
exception
    when others then
        apex_session.delete_session;
        raise;
end;
/
```

