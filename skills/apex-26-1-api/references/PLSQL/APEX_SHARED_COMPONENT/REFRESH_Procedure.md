# APEX_SHARED_COMPONENT.REFRESH Procedure

Source: [Oracle APEX 26.1 API Reference](https://docs.oracle.com/en/database/oracle/apex/26.1/aeapi/APEX_SHARED_COMPONENT.REFRESH-Procedure.html)

Status: generated detailed reference. Review edge cases against the source before production use.

Parent package: [APEX_SHARED_COMPONENT](../APEX_SHARED_COMPONENT.md)

## Purpose

This procedure refreshes a component.

## When To Use

Use this page when code needs the `APEX_SHARED_COMPONENT.REFRESH` procedure. Confirm security, workspace, and session requirements for your calling context.

## Signature

```sql
APEX_SHARED_COMPONENT.REFRESH (
    p_component_type IN t_component_type,
    p_component_id   IN NUMBER )
```

## Parameters

| Parameter | Description |
| --- | --- |
| `p_component_type` | Component type to refresh. |
| `p_component_id` | Component ID to refresh. |

## Returns

This is a procedure and does not return a value.

## Important Notes

- Most APEX APIs assume the correct APEX workspace, application, and session context.
- Validate user-controlled values before passing them into administrative, security, SQL, or web-service APIs.
- Use the source link for exact behavior, defaults, and version-specific caveats.

## Simple Example

```sql
begin
    apex_shared_component.REFRESH(
        p_component_type => null,
        p_component_id => 1
    );
end;
/
```

