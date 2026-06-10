# APEX_APPLICATION_INSTALL.GET_INFO Function

Source: [Oracle APEX 26.1 API Reference](https://docs.oracle.com/en/database/oracle/apex/26.1/aeapi/GET_INFO-Function.html)

Status: generated detailed reference. Review edge cases against the source before production use.

Parent package: [APEX_APPLICATION_INSTALL](../APEX_APPLICATION_INSTALL.md)

## Purpose

Use this function to retrieve install information from a source file.

## When To Use

Use this page when code needs the `APEX_APPLICATION_INSTALL.GET_INFO` function. Confirm security, workspace, and session requirements for your calling context.

## Signature

```sql
FUNCTION GET_INFO (
    p_source    IN  apex_t_export_files )
    RETURN t_file_info;
```

## Parameters

| Parameter | Description |
| --- | --- |
| `p_source` | The source code, a table of (name, contents) with a single record for normal APEX applications or multiple records for applications that were split when exporting. Note that passing multiple applications is not supported. |

## Returns

This function returns information about the application that can be used to configure the installation.

## Important Notes

- Most APEX APIs assume the correct APEX workspace, application, and session context.
- Validate user-controlled values before passing them into administrative, security, SQL, or web-service APIs.
- Use the source link for exact behavior, defaults, and version-specific caveats.

## Simple Example

```sql
declare
    l_source apex_t_export_files;
    l_info   apex_application_install.t_file_info;
begin
    l_source := apex_export.get_application(
        p_application_id => 100
    );

    l_info := apex_application_install.get_info(
        p_source => l_source
    );

    sys.dbms_output.put_line('Importing app ' || l_info.app_id || ': ' || l_info.app_name);
end;
/
```
