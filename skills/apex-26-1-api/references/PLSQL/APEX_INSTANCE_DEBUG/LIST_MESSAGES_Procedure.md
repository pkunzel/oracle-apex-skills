# APEX_INSTANCE_DEBUG.LIST_MESSAGES Procedure

Source: [Oracle APEX 26.1 API Reference](https://docs.oracle.com/en/database/oracle/apex/26.1/aeapi/APEX_INSTANCE_DEBUG.LIST_MESSAGES-Procedure.html)

Status: generated detailed reference. Review edge cases against the source before production use.

Parent package: [APEX_INSTANCE_DEBUG](../APEX_INSTANCE_DEBUG.md)

## Purpose

List all messages for a given page view ID. Each Oracle APEX request which had debug enabled gets an unique page view ID.

## When To Use

Use this page when code needs the `APEX_INSTANCE_DEBUG.LIST_MESSAGES` procedure. Confirm security, workspace, and session requirements for your calling context.

## Signature

```sql
APEX_INSTANCE_DEBUG.LIST_MESSAGES (
    p_page_view_id           IN              NUMBER);
```

## Parameters

| Parameter | Description |
| --- | --- |
| `p_page_view_id` | The page view ID. |

## Returns

This is a procedure and does not return a value.

## Important Notes

- Most APEX APIs assume the correct APEX workspace, application, and session context.
- Validate user-controlled values before passing them into administrative, security, SQL, or web-service APIs.
- Use the source link for exact behavior, defaults, and version-specific caveats.

## Simple Example

```sql
begin
    apex_instance_debug.LIST_MESSAGES(
        p_page_view_id => 1
    );
end;
/
```

