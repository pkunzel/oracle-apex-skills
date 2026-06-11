# APEX_DG_DATA_GEN.PREVIEW_BLUEPRINT Procedure

Source: [Oracle APEX 26.1 API Reference](https://docs.oracle.com/en/database/oracle/apex/26.1/aeapi/PREVIEW_BLUEPRINT-Procedure.html)

Status: generated detailed reference. Review edge cases against the source before production use.

Parent package: [APEX_DG_DATA_GEN](../APEX_DG_DATA_GEN.md)

## Purpose

This procedure creates preview data for a blueprint and stores this in APEX collections. This procedure can only be used with an active APEX session.

## When To Use

Use this page when code needs the `APEX_DG_DATA_GEN.PREVIEW_BLUEPRINT` procedure. Confirm security, workspace, and session requirements for your calling context.

## Signature

```sql
APEX_DG_DATA_GEN.PREVIEW_BLUEPRINT (
  parameter_1 IN NUMBER,
  parameter_2 IN VARCHAR2,
  parameter_3 IN NUMBER )
```

## Parameters

| Parameter | Description |
| --- | --- |
| `p_blueprint` | Name of the blueprint. |
| `p_table_name` | If null, all tables. If not null, the specified table. |
| `p_number_of_rows` | Number of rows to generate (maximum of 50). |
| `p_data_collection` | Name of the APEX collection for data. |
| `p_header_collection` | Name of the APEX collection for headers. |

## Returns

This is a procedure and does not return a value.

## Important Notes

- Most APEX APIs assume the correct APEX workspace, application, and session context.
- Validate user-controlled values before passing them into administrative, security, SQL, or web-service APIs.
- Use the source link for exact behavior, defaults, and version-specific caveats.

## Simple Example

```sql
begin
    apex_dg_data_gen.preview_blueprint(
        p_blueprint          => 'DEMO_ORDER_BP',
        p_table_name         => 'CUSTOMERS',
        p_number_of_rows     => 10,
        p_data_collection    => 'DG_PREVIEW_DATA',
        p_header_collection  => 'DG_PREVIEW_HEADERS'
    );
end;
/
```
