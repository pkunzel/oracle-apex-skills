# APEX_CUSTOM_AUTH.SET_USER Procedure

Source: [Oracle APEX 26.1 API Reference](https://docs.oracle.com/en/database/oracle/apex/26.1/aeapi/SET_USER-Procedure.html)

Status: generated detailed reference. Review edge cases against the source before production use.

Parent package: [APEX_CUSTOM_AUTH](../APEX_CUSTOM_AUTH.md)

## Purpose

This procedure sets the APEX_APPLICATION.G_USER global variable. SET_USER requires the parameter P_USER ( VARCHAR2 ) which defines a user ID.

## When To Use

Use this page when code needs the `APEX_CUSTOM_AUTH.SET_USER` procedure. Confirm security, workspace, and session requirements for your calling context.

## Signature

```sql
APEX_CUSTOM_AUTH.SET_USER (
    p_user   IN    VARCHAR2 )
```

## Parameters

| Parameter | Description |
| --- | --- |
| `p_user` | The user ID to be registered. |

## Returns

This is a procedure and does not return a value.

## Important Notes

- Most APEX APIs assume the correct APEX workspace, application, and session context.
- Validate user-controlled values before passing them into administrative, security, SQL, or web-service APIs.
- Use the source link for exact behavior, defaults, and version-specific caveats.

## Simple Example

```sql
begin
    apex_custom_auth.set_user(
        p_user => upper(:P101_USERNAME)
    );
end;
/
```

