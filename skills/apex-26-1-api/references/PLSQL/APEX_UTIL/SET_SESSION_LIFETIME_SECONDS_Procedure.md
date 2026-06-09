# APEX_UTIL.SET_SESSION_LIFETIME_SECONDS Procedure

Source: [Oracle APEX 26.1 API Reference](https://docs.oracle.com/en/database/oracle/apex/26.1/aeapi/SET_SESSION_LIFETIME_SECONDS-Procedure.html)

Status: generated detailed reference. Review edge cases against the source before production use.

Parent package: [APEX_UTIL](../APEX_UTIL.md)

## Purpose

This procedure sets the current session's Maximum Session Length in Seconds value, overriding the corresponding application attribute. This enables developers to dynamically shorten or lengthen the session life based on criteria determined after the user authenticates.

## When To Use

Use this page when code needs the `APEX_UTIL.SET_SESSION_LIFETIME_SECONDS` procedure. Confirm security, workspace, and session requirements for your calling context.

## Signature

```sql
APEX_UTIL.SET_SESSION_LIFETIME_SECONDS (
    p_seconds   IN NUMBER,
    p_scope     IN VARCHAR2 DEFAULT 'SESSION' );
```

## Parameters

| Parameter | Description |
| --- | --- |
| `p_seconds` | A positive integer indicating the number of seconds that the session used by the application can exist. |
| `p_scope` | This parameter is obsolete. The procedure always sets the lifetime for the whole session. |

## Returns

This is a procedure and does not return a value.

## Important Notes

- Most APEX APIs assume the correct APEX workspace, application, and session context.
- Validate user-controlled values before passing them into administrative, security, SQL, or web-service APIs.
- Use the source link for exact behavior, defaults, and version-specific caveats.

## Simple Example

```sql
begin
    apex_util.SET_SESSION_LIFETIME_SECONDS(
        p_seconds => 1,
        p_scope => 'EXAMPLE'
    );
end;
/
```

## More Complex Example

```sql
begin
    -- Assuming this runs inside an APEX page process with the right workspace/app context.
    apex_util.SET_SESSION_LIFETIME_SECONDS(
            p_seconds => 1,
            p_scope => 'EXAMPLE'
        );
end;
/
```

