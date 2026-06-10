# APEX_APPLICATION_INSTALL.SET_DATASET_IMPORT_MODE Procedure

Source: [Oracle APEX 26.1 API Reference](https://docs.oracle.com/en/database/oracle/apex/26.1/aeapi/APEX_APPLICATION_INSTALL.SET_DATASET_IMPORT_MODE-Function.html)

Status: generated detailed reference. Review edge cases against the source before production use.

Parent package: [APEX_APPLICATION_INSTALL](../APEX_APPLICATION_INSTALL.md)

## Purpose

This procedure sets the dataset import mode for a supplied dataset that is used to determine whether the dataset is kept or overwritten during import. By default a dataset is retained on import unless explicitly set to be overwritten.

## When To Use

Use this page when code needs the `APEX_APPLICATION_INSTALL.SET_DATASET_IMPORT_MODE` procedure. Confirm security, workspace, and session requirements for your calling context.

## Signature

```sql
PROCEDURE apex_application_install.set_dataset_import_mode (
    p_static_id  IN   VARCHAR2,
    p_mode       IN   t_dataset_import_mode );
```

## Parameters

| Parameter | Description |
| --- | --- |
| `p_static_id` | Static ID used to reference the dataset. |
| `p_mode` | Dataset import mode, see t_dataset_import_mode constants |

## Returns

This is a procedure and does not return a value.

## Important Notes

- Most APEX APIs assume the correct APEX workspace, application, and session context.
- Validate user-controlled values before passing them into administrative, security, SQL, or web-service APIs.
- Use the source link for exact behavior, defaults, and version-specific caveats.

## Simple Example

```sql
begin
    apex_application_install.set_dataset_import_mode(
        p_static_id => 'SALES_SAMPLE',
        p_mode      => apex_application_install.c_dataset_overwrite
    );
end;
/
```
