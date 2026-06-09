# APEX_IR.CHANGE_SUBSCRIPTION_EMAIL Procedure

Source: [Oracle APEX 26.1 API Reference](https://docs.oracle.com/en/database/oracle/apex/26.1/aeapi/CHANGE_SUBSCRIPTION_EMAIL-Procedure.html)

Status: generated detailed reference. Review edge cases against the source before production use.

Parent package: [APEX_IR](../APEX_IR.md)

## Purpose

This procedure changes the interactive report subscription's email address. When an email is sent out, the subscription sends a message to the defined email address.

## When To Use

Use this page when code needs the `APEX_IR.CHANGE_SUBSCRIPTION_EMAIL` procedure. Confirm security, workspace, and session requirements for your calling context.

## Signature

```sql
APEX_IR.CHANGE_SUBSCRIPTION_EMAIL (
    p_subscription_id   IN NUMBER,
    p_email_address     IN VARCHAR2 );
```

## Parameters

| Parameter | Description |
| --- | --- |
| `p_subscription_id` | Subscription ID to change the email address within the current workspace. |
| `p_email_address` | The new email address to change to. The email address needs to be a valid email syntax and cannot be set to null. |

## Returns

This is a procedure and does not return a value.

## Important Notes

- Most APEX APIs assume the correct APEX workspace, application, and session context.
- Validate user-controlled values before passing them into administrative, security, SQL, or web-service APIs.
- Use the source link for exact behavior, defaults, and version-specific caveats.

## Simple Example

```sql
begin
    apex_ir.CHANGE_SUBSCRIPTION_EMAIL(
        p_subscription_id => 1,
        p_email_address => 'EXAMPLE'
    );
end;
/
```

## More Complex Example

```sql
begin
    -- Assuming this runs inside an APEX page process with the right workspace/app context.
    apex_ir.CHANGE_SUBSCRIPTION_EMAIL(
            p_subscription_id => 1,
            p_email_address => 'EXAMPLE'
        );
end;
/
```

