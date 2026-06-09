# APEX_APPLICATION_INSTALL.ADD_DATA_REPORTER_REMAP Procedure

Source: [Oracle APEX 26.1 API Reference](https://docs.oracle.com/en/database/oracle/apex/26.1/aeapi/APEX_APPLICATION_INSTALL-ADD_DATA_REPORTER_REMAP-Procedure.html)

Status: generated detailed reference. Review edge cases against the source before production use.

Parent package: [APEX_APPLICATION_INSTALL](../APEX_APPLICATION_INSTALL.md)

## Purpose

This procedure remaps a data reporter object owner when importing a dataset or reporting app.

## When To Use

Use this page when code needs the `APEX_APPLICATION_INSTALL.ADD_DATA_REPORTER_REMAP` procedure. Confirm security, workspace, and session requirements for your calling context.

## Signature

```sql
PROCEDURE apex_application_install.add_data_reporter_remap (
    p_schema_from    IN   VARCHAR2,
    p_schema_to      IN   VARCHAR2 );
```

## Parameters

| Parameter | Description |
| --- | --- |
| `p_schema_from` | The source schema to map from. |
| `p_schema_to` | The target schema we are mapping to. |

## Returns

This is a procedure and does not return a value.

## Important Notes

- Most APEX APIs assume the correct APEX workspace, application, and session context.
- Validate user-controlled values before passing them into administrative, security, SQL, or web-service APIs.
- Use the source link for exact behavior, defaults, and version-specific caveats.

## Simple Example

```sql
begin
    apex_application_install.ADD_DATA_REPORTER_REMAP(
        p_schema_from => 'EXAMPLE',
        p_schema_to => 'EXAMPLE'
    );
end;
/
```

