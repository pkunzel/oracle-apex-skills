# APEX_APPLICATION_INSTALL.GET_DATA_REPORTER_REMAP Function

Source: [Oracle APEX 26.1 API Reference](https://docs.oracle.com/en/database/oracle/apex/26.1/aeapi/APEX_APPLICATION_INSTALL.GET_DATA_REPORTER_REMAP-Function.html)

Status: generated detailed reference. Review edge cases against the source before production use.

Parent package: [APEX_APPLICATION_INSTALL](../APEX_APPLICATION_INSTALL.md)

## Purpose

This function gets the remapped schema ( owner ) for the supplied schema.

## When To Use

Use this page when code needs the `APEX_APPLICATION_INSTALL.GET_DATA_REPORTER_REMAP` function. Confirm security, workspace, and session requirements for your calling context.

## Signature

```sql
FUNCTION apex_application_install.get_data_reporter_remap (
    p_schema_from    IN   VARCHAR2 )
    RETURN VARCHAR2;
```

## Parameters

| Parameter | Description |
| --- | --- |
| `p_schema_from` | The source schema to map from. |

## Important Notes

- Most APEX APIs assume the correct APEX workspace, application, and session context.
- Validate user-controlled values before passing them into administrative, security, SQL, or web-service APIs.
- Use the source link for exact behavior, defaults, and version-specific caveats.

## Simple Example

```sql
declare
    l_target_schema varchar2(128);
begin
    l_target_schema := apex_application_install.get_data_reporter_remap(
        p_schema_from => 'OLD_REPORTING'
    );

    sys.dbms_output.put_line('OLD_REPORTING maps to ' || l_target_schema);
end;
/
```
