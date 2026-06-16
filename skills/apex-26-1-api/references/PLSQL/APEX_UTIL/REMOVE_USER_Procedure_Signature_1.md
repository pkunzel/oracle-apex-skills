# APEX_UTIL.REMOVE_USER Procedure Signature 1

Source: [Oracle APEX 26.1 API Reference](https://docs.oracle.com/en/database/oracle/apex/26.1/aeapi/REMOVE_USER-Signature-1-Procedure.html)

Status: generated detailed reference. Review edge cases against the source before production use.

Parent package: [APEX_UTIL](../APEX_UTIL.md)

## Purpose

This procedure removes the user account identified by the primary key. To execute this procedure, the current user must have administrative privilege in the workspace.

## When To Use

Use this page when code needs the `APEX_UTIL.REMOVE_USER` procedure. Confirm security, workspace, and session requirements for your calling context.

## Signature

```sql
APEX_UTIL.REMOVE_USER (
    p_user_id   IN NUMBER );
```

## Parameters

| Parameter | Description |
| --- | --- |
| `p_user_id` | The numeric primary key of the user account record. |

## Returns

This is a procedure and does not return a value.

## Important Notes

- Most APEX APIs assume the correct APEX workspace, application, and session context.
- Validate user-controlled values before passing them into administrative, security, SQL, or web-service APIs.
- Use the source link for exact behavior, defaults, and version-specific caveats.

## Simple Example

Remove an APEX workspace user by numeric user id.

```sql
begin
    apex_util.remove_user(
        p_user_id => apex_util.get_user_id('JSMITH'));
end;
/
```

