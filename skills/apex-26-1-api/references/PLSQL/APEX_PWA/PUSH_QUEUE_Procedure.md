# APEX_PWA.PUSH_QUEUE Procedure

Source: [Oracle APEX 26.1 API Reference](https://docs.oracle.com/en/database/oracle/apex/26.1/aeapi/APEX_PWA.PUSH_QUEUE-Procedure.html)

Status: generated detailed reference. Review edge cases against the source before production use.

Parent package: [APEX_PWA](../APEX_PWA.md)

## Purpose

This procedure triggers the database job to send all push notifications in the queue.

## When To Use

Use this page when code needs the `APEX_PWA.PUSH_QUEUE` procedure. Confirm security, workspace, and session requirements for your calling context.

## Signature

```sql
APEX_PWA.PUSH_QUEUE;
```

## Returns

This is a procedure and does not return a value.

## Important Notes

- Most APEX APIs assume the correct APEX workspace, application, and session context.
- Validate user-controlled values before passing them into administrative, security, SQL, or web-service APIs.
- Use the source link for exact behavior, defaults, and version-specific caveats.

## Example

APEX normally processes queued push notifications for you; call PUSH_QUEUE from controlled diagnostics or jobs.

```sql
begin
    apex_pwa.push_queue;
end;
/
```
