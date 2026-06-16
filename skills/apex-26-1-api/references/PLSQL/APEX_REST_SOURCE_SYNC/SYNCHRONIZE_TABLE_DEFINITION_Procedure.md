# APEX_REST_SOURCE_SYNC.SYNCHRONIZE_TABLE_DEFINITION Procedure

Source: [Oracle APEX 26.1 API Reference](https://docs.oracle.com/en/database/oracle/apex/26.1/aeapi/SYNCHRONIZE_TABLE_DEFINITION-Procedure.html)

Status: generated detailed reference. Review edge cases against the source before production use.

Parent package: [APEX_REST_SOURCE_SYNC](../APEX_REST_SOURCE_SYNC.md)

## Purpose

This procedure synchronizes the local table definition with the data profile.

## When To Use

Use this page when code needs the `APEX_REST_SOURCE_SYNC.SYNCHRONIZE_TABLE_DEFINITION` procedure. Confirm security, workspace, and session requirements for your calling context.

## Signature

```sql
APEX_REST_SOURCE_SYNC.SYNCHRONIZE_TABLE_DEFINITION (
    p_module_static_id      IN VARCHAR2,
    p_application_id        IN NUMBER   DEFAULT {current application id},
    p_drop_unused_columns   IN BOOLEAN  DEFAULT FALSE );
```

## Parameters

| Parameter | Description |
| --- | --- |
| `p_module_static_id` | Static ID to identify the REST Data Source. |
| `p_application_id` | (Optional) The application ID. |
| `p_drop_unused_columns` | If TRUE , the procedure also drops columns which do not exist in the data profile any more. |

## Returns

This is a procedure and does not return a value.

## Important Notes

- Most APEX APIs assume the correct APEX workspace, application, and session context.
- Validate user-controlled values before passing them into administrative, security, SQL, or web-service APIs.
- Use the source link for exact behavior, defaults, and version-specific caveats.

## Example

Apply REST Source data-profile changes to the synchronized table after reviewing the generated DDL.

```sql
begin
    apex_rest_source_sync.synchronize_table_definition(
        p_module_static_id    => 'ORDERS_API',
        p_application_id      => :APP_ID,
        p_drop_unused_columns => false);
end;
/
```
