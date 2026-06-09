# APEX_UTIL.SET_LAST_NAME Procedure

Source: [Oracle APEX 26.1 API Reference](https://docs.oracle.com/en/database/oracle/apex/26.1/aeapi/SET_LAST_NAME-Procedure.html)

Status: generated detailed reference. Review edge cases against the source before production use.

Parent package: [APEX_UTIL](../APEX_UTIL.md)

## Purpose

Note:

## When To Use

Use this page when code needs the `APEX_UTIL.SET_LAST_NAME` procedure. Confirm security, workspace, and session requirements for your calling context.

## Signature

```sql
APEX_UTIL.SET_LAST_NAME (
    p_userid      IN NUMBER,
    p_last_name   IN VARCHAR2 );
```

## Parameters

| Parameter | Description |
| --- | --- |
| `p_userid` | The numeric ID of the user account. |
| `p_last_name` | LAST_NAME value to be saved in the user account. |

## Returns

This is a procedure and does not return a value.

## Important Notes

- Most APEX APIs assume the correct APEX workspace, application, and session context.
- Validate user-controlled values before passing them into administrative, security, SQL, or web-service APIs.
- Use the source link for exact behavior, defaults, and version-specific caveats.

## Simple Example

```sql
begin
    apex_util.SET_LAST_NAME(
        p_userid => 1,
        p_last_name => 'EXAMPLE'
    );
end;
/
```

## More Complex Example

```sql
begin
    -- Assuming this runs inside an APEX page process with the right workspace/app context.
    apex_util.SET_LAST_NAME(
            p_userid => 1,
            p_last_name => 'EXAMPLE'
        );
end;
/
```

