# APEX_AI.SET_USER_CONSENT Procedure

Source: [Oracle APEX 26.1 API Reference](https://docs.oracle.com/en/database/oracle/apex/26.1/aeapi/APEX_AI.SET_USER_CONSENT-Procedure.html)

Status: generated detailed reference. Review edge cases against the source before production use.

Parent package: [APEX_AI](../APEX_AI.md)

## Purpose

This procedure marks the user as having consented to the use of AI.

## When To Use

Use this page when code needs the `APEX_AI.SET_USER_CONSENT` procedure. Confirm security, workspace, and session requirements for your calling context.

## Signature

```sql
APEX_AI.SET_USER_CONSENT (
    p_user_name         IN  VARCHAR2,
    p_application_id    IN  NUMBER )
```

## Parameters

| Parameter | Description |
| --- | --- |
| `p_user_name` | The user name. |
| `p_application_id` | The application ID. |

## Returns

This is a procedure and does not return a value.

## Important Notes

- Most APEX APIs assume the correct APEX workspace, application, and session context.
- Validate user-controlled values before passing them into administrative, security, SQL, or web-service APIs.
- Use the source link for exact behavior, defaults, and version-specific caveats.

## Simple Example

```sql
begin
    apex_ai.SET_USER_CONSENT(
        p_user_name => 'USER',
        p_application_id => 1
    );
end;
/
```

