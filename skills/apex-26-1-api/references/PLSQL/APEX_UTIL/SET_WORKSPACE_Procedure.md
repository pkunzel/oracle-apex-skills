# APEX_UTIL.SET_WORKSPACE Procedure

Source: [Oracle APEX 26.1 API Reference](https://docs.oracle.com/en/database/oracle/apex/26.1/aeapi/APEX_UTIL.SET_WORKSPACE_Procedure-2.html)

Status: generated detailed reference. Review edge cases against the source before production use.

Parent package: [APEX_UTIL](../APEX_UTIL.md)

## Purpose

Note:

## When To Use

Use this page when code needs the `APEX_UTIL.SET_WORKSPACE` procedure. Confirm security, workspace, and session requirements for your calling context.

## Signature

```sql
APEX_UTIL.SET_WORKSPACE (
    p_workspace IN VARCHAR2 )
```

## Parameters

| Parameter | Description |
| --- | --- |
| `p_workspace` | The workspace's short name. |

## Returns

This is a procedure and does not return a value.

## Important Notes

- Most APEX APIs assume the correct APEX workspace, application, and session context.
- Validate user-controlled values before passing them into administrative, security, SQL, or web-service APIs.
- Use the source link for exact behavior, defaults, and version-specific caveats.

## Simple Example

Set workspace context before creating an APEX session in a script.

```sql
begin
    apex_util.set_workspace(
        p_workspace => 'MY_WORKSPACE');

    apex_session.create_session(
        p_app_id   => 100,
        p_page_id  => 1,
        p_username => 'ADMIN');
end;
/
```

