# APEX_MAIL.PUSH_QUEUE Procedure

Source: [Oracle APEX 26.1 API Reference](https://docs.oracle.com/en/database/oracle/apex/26.1/aeapi/PUSH_QUEUE-Procedure.html)

Status: generated detailed reference. Review edge cases against the source before production use.

Parent package: [APEX_MAIL](../APEX_MAIL.md)

## Purpose

This procedure manually delivers queued mail messages stored in the APEX_MAIL_QUEUE dictionary view to the SMTP gateway.

## When To Use

Use this page when code needs the `APEX_MAIL.PUSH_QUEUE` procedure. Confirm security, workspace, and session requirements for your calling context.

## Signature

```sql
APEX_MAIL.PUSH_QUEUE (
    p_smtp_hostname     IN VARCHAR2 DEFAULT NULL,
    p_smtp_portno       IN NUMBER   DEFAULT NULL );
```

## Parameters

| Parameter | Description |
| --- | --- |
| `p_smtp_hostname` | SMTP gateway host name |
| `p_smtp_portno` | SMTP gateway port number |

## Returns

This is a procedure and does not return a value.

## Important Notes

- Most APEX APIs assume the correct APEX workspace, application, and session context.
- Validate user-controlled values before passing them into administrative, security, SQL, or web-service APIs.
- Use the source link for exact behavior, defaults, and version-specific caveats.

## Simple Example

```sql
begin
    apex_mail.PUSH_QUEUE(
        p_smtp_hostname => 'EXAMPLE',
        p_smtp_portno => 1
    );
end;
/
```

