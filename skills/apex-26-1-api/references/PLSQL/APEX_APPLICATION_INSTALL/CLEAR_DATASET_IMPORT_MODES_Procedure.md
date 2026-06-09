# APEX_APPLICATION_INSTALL.CLEAR_DATASET_IMPORT_MODES Procedure

Source: [Oracle APEX 26.1 API Reference](https://docs.oracle.com/en/database/oracle/apex/26.1/aeapi/APEX_APPLICATION_INSTALL.CLEAR_DATASET_IMPORT_MODES-Procedure.html)

Status: generated detailed reference. Review edge cases against the source before production use.

Parent package: [APEX_APPLICATION_INSTALL](../APEX_APPLICATION_INSTALL.md)

## Purpose

This procedure clears all dataset import mode settings configured using the APEX_APPLICATION_INSTALL package.

## When To Use

Use this page when code needs the `APEX_APPLICATION_INSTALL.CLEAR_DATASET_IMPORT_MODES` procedure. Confirm security, workspace, and session requirements for your calling context.

## Signature

```sql
PROCEDURE apex_application_install.clear_dataset_import_modes;
```

## Returns

This is a procedure and does not return a value.

## Important Notes

- Most APEX APIs assume the correct APEX workspace, application, and session context.
- Validate user-controlled values before passing them into administrative, security, SQL, or web-service APIs.
- Use the source link for exact behavior, defaults, and version-specific caveats.

## Simple Example

```sql
begin
    apex_application_install.CLEAR_DATASET_IMPORT_MODES;
end;
/
```

