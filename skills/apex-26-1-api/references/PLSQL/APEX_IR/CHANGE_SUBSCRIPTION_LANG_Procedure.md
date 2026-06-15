# APEX_IR.CHANGE_SUBSCRIPTION_LANG Procedure

Source: [Oracle APEX 26.1 API Reference](https://docs.oracle.com/en/database/oracle/apex/26.1/aeapi/CHANGE_SUBSCRIPTION_LANG-Procedure.html)

Status: generated detailed reference. Review edge cases against the source before production use.

Parent package: [APEX_IR](../APEX_IR.md)

## Purpose

This procedure changes the interactive report subscription language.

## When To Use

Use this page when code needs the `APEX_IR.CHANGE_SUBSCRIPTION_LANG` procedure. Confirm security, workspace, and session requirements for your calling context.

## Signature

```sql
APEX_IR.CHANGE_SUBSCRIPTION_LANG (
    p_subscription_id IN NUMBER,
    p_language        IN VARCHAR2 )
```

## Parameters

| Parameter | Description |
| --- | --- |
| `p_subscription_id` | Subscription ID to change the language within the current workspace. |
| `p_language` | This is an IANA language code. Some examples include: en , de , de - at , zh - cn , and pt - br . |

## Returns

This is a procedure and does not return a value.

## Important Notes

- Most APEX APIs assume the correct APEX workspace, application, and session context.
- Validate user-controlled values before passing them into administrative, security, SQL, or web-service APIs.
- Use the source link for exact behavior, defaults, and version-specific caveats.

## Simple Example

Change the language used when APEX sends a subscription email.

```sql
begin
    apex_ir.change_subscription_lang(
        p_subscription_id => 2456813,
        p_language        => 'de'
    );
end;
/
```
