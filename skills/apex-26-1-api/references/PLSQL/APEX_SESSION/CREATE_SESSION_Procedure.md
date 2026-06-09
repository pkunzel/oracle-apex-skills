# APEX_SESSION.CREATE_SESSION Procedure

Source: [Oracle APEX 26.1 API Reference](https://docs.oracle.com/en/database/oracle/apex/26.1/aeapi/CREATE_SESSION-Procedure.html)

Status: generated detailed reference. Review edge cases against the source before production use.

Parent package: [APEX_SESSION](../APEX_SESSION.md)

## Purpose

This procedure creates a new session for the given application, sets the environment, and runs the application's Initialization PL/SQL Code.

## When To Use

Use this page when code needs the `APEX_SESSION.CREATE_SESSION` procedure. Confirm security, workspace, and session requirements for your calling context.

## Signature

```sql
APEX_SESSION.CREATE_SESSION (
   p_app_id                   IN NUMBER,
   p_page_id                  IN NUMBER,
   p_username                 IN VARCHAR2,
   p_call_post_authentication IN BOOLEAN DEFAULT FALSE );
```

## Parameters

| Parameter | Description |
| --- | --- |
| `p_app_id` | The application id. |
| `p_page_id` | The application page. |
| `p_username` | The session user. |
| `p_call_post_authentication` | If true, call post-authentication procedure. The default is false. |

## Returns

This is a procedure and does not return a value.

## Important Notes

- Most APEX APIs assume the correct APEX workspace, application, and session context.
- Validate user-controlled values before passing them into administrative, security, SQL, or web-service APIs.
- Use the source link for exact behavior, defaults, and version-specific caveats.

## Simple Example

```sql
begin
    apex_session.CREATE_SESSION(
        p_app_id => 1,
        p_page_id => 1,
        p_username => 'USER',
        p_call_post_authentication => true
    );
end;
/
```

## More Complex Example

```sql
begin
    -- Assuming this runs inside an APEX page process with the right workspace/app context.
    apex_session.CREATE_SESSION(
            p_app_id => 1,
            p_page_id => 1,
            p_username => 'USER',
            p_call_post_authentication => true
        );
end;
/
```

