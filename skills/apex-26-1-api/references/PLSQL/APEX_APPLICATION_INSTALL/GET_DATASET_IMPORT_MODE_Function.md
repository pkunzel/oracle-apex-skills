# APEX_APPLICATION_INSTALL.GET_DATASET_IMPORT_MODE Function

Source: [Oracle APEX 26.1 API Reference](https://docs.oracle.com/en/database/oracle/apex/26.1/aeapi/APEX_APPLICATION_INSTALL.GET_DATASET_IMPORT_MODE-Function.html)

Status: generated detailed reference. Review edge cases against the source before production use.

Parent package: [APEX_APPLICATION_INSTALL](../APEX_APPLICATION_INSTALL.md)

## Purpose

This function returns the dataset import mode for the supplied dataset. If no import mode has been set, this function returns null.

## When To Use

Use this page when code needs the `APEX_APPLICATION_INSTALL.GET_DATASET_IMPORT_MODE` function. Confirm security, workspace, and session requirements for your calling context.

## Signature

```sql
FUNCTION apex_application_install.get_dataset_import_mode (
    p_static_id  IN   VARCHAR2 )
    RETURN t_dataset_import_mode;
```

## Parameters

| Parameter | Description |
| --- | --- |
| `p_static_id` | Static ID used to reference the dataset. |

## Important Notes

- Most APEX APIs assume the correct APEX workspace, application, and session context.
- Validate user-controlled values before passing them into administrative, security, SQL, or web-service APIs.
- Use the source link for exact behavior, defaults, and version-specific caveats.

## Simple Example

```sql
declare
    l_mode apex_application_install.t_dataset_import_mode;
begin
    l_mode := apex_application_install.get_dataset_import_mode(
        p_static_id => 'SALES_SAMPLE'
    );

    if l_mode = apex_application_install.c_dataset_overwrite then
        sys.dbms_output.put_line('SALES_SAMPLE will be overwritten on import.');
    end if;
end;
/
```
