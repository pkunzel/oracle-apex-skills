# APEX_UTIL.CURRENT_USER_IN_GROUP Function

Source: [Oracle APEX 26.1 API Reference](https://docs.oracle.com/en/database/oracle/apex/26.1/aeapi/CURRENT_USER_IN_GROUP-Function.html)

Status: generated detailed reference. Review edge cases against the source before production use.

Parent package: [APEX_UTIL](../APEX_UTIL.md)

## Purpose

This function returns a Boolean result based on whether the current user is a member of the specified workspace group. You can use the group name or group ID to identify the group.

## When To Use

Use this page when code needs the `APEX_UTIL.CURRENT_USER_IN_GROUP` function. Confirm security, workspace, and session requirements for your calling context.

## Signature

```sql
APEX_UTIL.CURRENT_USER_IN_GROUP (
    p_group_name  IN VARCHAR2 )
RETURN BOOLEAN;

APEX_UTIL.CURRENT_USER_IN_GROUP (
    p_group_id    IN NUMBER )
RETURN BOOLEAN;
```

## Parameters

| Parameter | Description |
| --- | --- |
| `p_group_name` | Identifies the name of an existing group in the workspace. |
| `p_group_id` | Identifies the numeric ID of an existing group in the workspace. |

## Important Notes

- Most APEX APIs assume the correct APEX workspace, application, and session context.
- Validate user-controlled values before passing them into administrative, security, SQL, or web-service APIs.
- Use the source link for exact behavior, defaults, and version-specific caveats.

## Simple Example

```sql
declare
    l_result BOOLEAN;
begin
    l_result := apex_util.CURRENT_USER_IN_GROUP(
        p_group_name => 'EXAMPLE',
        p_group_id => 1
    );
    sys.dbms_output.put_line('Result captured.');
end;
/
```

## More Complex Example

```sql
declare
    l_result BOOLEAN;
begin
    -- Assuming this runs outside a normal APEX page request.
    apex_session.create_session(
        p_app_id   => 100,
        p_page_id  => 1,
        p_username => 'USER');

    l_result := apex_util.CURRENT_USER_IN_GROUP(
            p_group_name => 'EXAMPLE',
            p_group_id => 1
        );

    apex_session.delete_session;
exception
    when others then
        apex_session.delete_session;
        raise;
end;
/
```

