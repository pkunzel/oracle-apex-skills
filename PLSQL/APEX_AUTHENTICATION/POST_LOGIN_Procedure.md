# APEX_AUTHENTICATION.POST_LOGIN Procedure

Source: [Oracle APEX 26.1 API Reference](https://docs.oracle.com/en/database/oracle/apex/26.1/aeapi/POST_LOGIN-Procedure.html)

Status: generated detailed reference. Review edge cases against the source before production use.

Parent package: [APEX_AUTHENTICATION](../APEX_AUTHENTICATION.md)

## Purpose

This procedure authenticates the user in the current session. It runs a subset of APEX_AUTHENTICATION.LOGIN , without steps 1 and 2. For steps, see LOGIN Procedure . This procedure is useful in authentication schemes where user credentials checking is performed externally to Oracle APEX .

## When To Use

Use this page when code needs the `APEX_AUTHENTICATION.POST_LOGIN` procedure. Confirm security, workspace, and session requirements for your calling context.

## Signature

```sql
APEX_AUTHENTICATION.POST_LOGIN (
    p_username              IN VARCHAR2,
    p_password              IN VARCHAR2,
    p_uppercase_username    IN BOOLEAN  DEFAULT TRUE )
```

## Parameters

| Parameter | Description |
| --- | --- |
| `p_username` | The user's name. |
| `p_password` | The user's password. |
| `p_uppercase_username` | If TRUE then p_username is converted to uppercase. |

## Returns

This is a procedure and does not return a value.

## Important Notes

- Most APEX APIs assume the correct APEX workspace, application, and session context.
- Validate user-controlled values before passing them into administrative, security, SQL, or web-service APIs.
- Use the source link for exact behavior, defaults, and version-specific caveats.

## Simple Example

```sql
begin
    apex_authentication.POST_LOGIN(
        p_username => 'USER',
        p_password => 'EXAMPLE',
        p_uppercase_username => true
    );
end;
/
```

## More Complex Example

```sql
begin
    -- Assuming this runs inside an APEX page process with the right workspace/app context.
    apex_authentication.POST_LOGIN(
            p_username => 'USER',
            p_password => 'EXAMPLE',
            p_uppercase_username => true
        );
end;
/
```

