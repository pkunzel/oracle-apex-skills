# APEX_DATA_INSTALL.LOAD_SUPPORTING_OBJECT_DATA Procedure

Source: [Oracle APEX 26.1 API Reference](https://docs.oracle.com/en/database/oracle/apex/26.1/aeapi/LOAD_SUPPORTING_OBJECT_DATA-Procedure.html)

Status: generated detailed reference. Review edge cases against the source before production use.

Parent package: [APEX_DATA_INSTALL](../APEX_DATA_INSTALL.md)

## Purpose

This procedure loads the supporting object data and installs the data in the specified application.

## When To Use

Use this page when code needs the `APEX_DATA_INSTALL.LOAD_SUPPORTING_OBJECT_DATA` procedure. Confirm security, workspace, and session requirements for your calling context.

## Signature

```sql
APEX_DATA_INSTALL.LOAD_SUPPORTING_OBJECT_DATA (
    p_table_name            IN  VARCHAR2,
    p_delete_after_install  IN  BOOLEAN,
    p_app_id                IN  NUMBER  DEFAULT NULL );
```

## Parameters

| Parameter | Description |
| --- | --- |
| `p_table_name` | Name of the table where the data will be deposited. |
| `p_delete_after_install` | Indicates if files are removed after installing supporting objects. Default TRUE . |
| `p_app_id` | APEX application ID of the application that contains the static files associated with a data migration export. This can be used from SQL workshop outside the context of installing supporting objects, enabling a developer to reinstall migrated data without reinstalling all supporting objects. |

## Returns

This is a procedure and does not return a value.

## Important Notes

- Most APEX APIs assume the correct APEX workspace, application, and session context.
- Validate user-controlled values before passing them into administrative, security, SQL, or web-service APIs.
- Use the source link for exact behavior, defaults, and version-specific caveats.

## Simple Example

```sql
begin
    apex_data_install.load_supporting_object_data(
        p_table_name           => 'ORDER_SEED_DATA',
        p_delete_after_install => true,
        p_app_id               => apex_application.g_flow_id
    );
end;
/
```

