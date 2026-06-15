# APEX_INSTANCE_ADMIN.REMOVE_SUBSCRIPTION Procedure

Source: [Oracle APEX 26.1 API Reference](https://docs.oracle.com/en/database/oracle/apex/26.1/aeapi/REMOVE_SUBSCRIPTION-Procedure.html)

Status: generated detailed reference. Review edge cases against the source before production use.

Parent package: [APEX_INSTANCE_ADMIN](../APEX_INSTANCE_ADMIN.md)

## Purpose

Removes a specific interactive report subscription.

## When To Use

Use this page when code needs the `APEX_INSTANCE_ADMIN.REMOVE_SUBSCRIPTION` procedure. Confirm security, workspace, and session requirements for your calling context.

## Signature

```sql
APEX_INSTANCE_ADMIN.REMOVE_SUBSCRIPTION (
    p_subscription_id     IN NUMBER )
```

## Parameters

| Parameter | Description |
| --- | --- |
| `p_subscription_id` | The ID of the interactive report subscription to be removed. |

## Returns

This is a procedure and does not return a value.

## Important Notes

- Most APEX APIs assume the correct APEX workspace, application, and session context.
- Validate user-controlled values before passing them into administrative, security, SQL, or web-service APIs.
- Use the source link for exact behavior, defaults, and version-specific caveats.

## Simple Example

```sql
begin
    apex_instance_admin.remove_subscription(
        p_subscription_id => 456789
    );
end;
/
```
