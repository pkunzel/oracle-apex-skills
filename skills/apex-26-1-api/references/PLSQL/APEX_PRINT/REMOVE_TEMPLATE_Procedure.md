# APEX_PRINT.REMOVE_TEMPLATE Procedure

Source: [Oracle APEX 26.1 API Reference](https://docs.oracle.com/en/database/oracle/apex/26.1/aeapi/APEX_PRINT.REMOVE_TEMPLATE-Procedure.html)

Status: generated detailed reference. Review edge cases against the source before production use.

Parent package: [APEX_PRINT](../APEX_PRINT.md)

## Purpose

This procedure removes a template from OCI Object Storage.

## When To Use

Use this page when code needs the `APEX_PRINT.REMOVE_TEMPLATE` procedure. Confirm security, workspace, and session requirements for your calling context.

## Signature

```sql
APEX_PRINT.REMOVE_TEMPLATE (
    p_template_id IN NUMBER )
```

## Parameters

| Parameter | Description |
| --- | --- |
| `p_template_id` | ID of the the template. |

## Returns

This is a procedure and does not return a value.

## Important Notes

- Most APEX APIs assume the correct APEX workspace, application, and session context.
- Validate user-controlled values before passing them into administrative, security, SQL, or web-service APIs.
- Use the source link for exact behavior, defaults, and version-specific caveats.

## Simple Example

```sql
begin
    apex_print.REMOVE_TEMPLATE(
        p_template_id => 1
    );
end;
/
```

