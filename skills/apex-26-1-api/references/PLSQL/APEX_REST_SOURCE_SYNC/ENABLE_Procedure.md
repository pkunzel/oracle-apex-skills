# APEX_REST_SOURCE_SYNC.ENABLE Procedure

Source: [Oracle APEX 26.1 API Reference](https://docs.oracle.com/en/database/oracle/apex/26.1/aeapi/APEX_REST_SOURCE_SYNC-ENABLE-Procedure.html)

Status: generated detailed reference. Review edge cases against the source before production use.

Parent package: [APEX_REST_SOURCE_SYNC](../APEX_REST_SOURCE_SYNC.md)

## Purpose

This procedure enables synchronization for the REST Data Source.

## When To Use

Use this page when code needs the `APEX_REST_SOURCE_SYNC.ENABLE` procedure. Confirm security, workspace, and session requirements for your calling context.

## Signature

```sql
APEX_REST_SOURCE_SYNC.ENABLE (
  p_application_id    IN NUMBER    DEFAULT {current application id},
  p_module_static_id  IN VARCHAR2 )
```

## Parameters

| Parameter | Description |
| --- | --- |
| `p_application_id` | (Optional) The application ID. |
| `p_module_static_id` | Static ID to identify the REST Data Source. |

## Returns

This is a procedure and does not return a value.

## Important Notes

- Most APEX APIs assume the correct APEX workspace, application, and session context.
- Validate user-controlled values before passing them into administrative, security, SQL, or web-service APIs.
- Use the source link for exact behavior, defaults, and version-specific caveats.

## Simple Example

```sql
begin
    apex_rest_source_sync.ENABLE(
        p_application_id => 1,
        p_module_static_id => 'EXAMPLE_STATIC_ID'
    );
end;
/
```

