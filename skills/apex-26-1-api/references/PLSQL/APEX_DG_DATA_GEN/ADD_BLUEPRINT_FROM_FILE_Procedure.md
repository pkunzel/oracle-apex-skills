# APEX_DG_DATA_GEN.ADD_BLUEPRINT_FROM_FILE Procedure

Source: [Oracle APEX 26.1 API Reference](https://docs.oracle.com/en/database/oracle/apex/26.1/aeapi/ADD_BLUEPRINT_FROM_FILE-Procedure.html)

Status: generated detailed reference. Review edge cases against the source before production use.

Parent package: [APEX_DG_DATA_GEN](../APEX_DG_DATA_GEN.md)

## Purpose

This procedure imports a JSON blueprint from a workspace or application file. The file should be JSON, containing a correct blueprint definition.

## When To Use

Use this page when code needs the `APEX_DG_DATA_GEN.ADD_BLUEPRINT_FROM_FILE` procedure. Confirm security, workspace, and session requirements for your calling context.

## Signature

```sql
APEX_DG_DATA_GEN.ADD_BLUEPRINT_FROM_FILE (
    p_filename          IN VARCHAR2,                -- name of workspace or application file   
    p_application_id    IN NUMBER   DEFAULT NULL,   -- Application ID of an Application File, or null if a workspace file
    p_override_name     IN VARCHAR2 DEFAULT NULL,   -- Name of blueprint, overrides the name provided in the file
    p_replace           IN BOOLEAN  DEFAULT FALSE,  -- return error if blueprint exist and p_replace=FALSE
    p_blueprint_id      OUT NUMBER );
```

## Parameters

| Parameter | Description |
| --- | --- |
| `p_filename` | Name of the file (apex_application_files.filename). |
| `p_application_id` | ID of the application, or null for workspace files. |
| `p_override_name` | Name of blueprint, this will override the name provided in the file. |
| `p_replace` | Return error if blueprint exists and p_replace = FALSE. Will replace the blueprint (or p_override_name if provided). |
| `p_blueprint_id` | ID of the imported blueprint (OUT). |

## Returns

This is a procedure and does not return a value.

## Important Notes

- Most APEX APIs assume the correct APEX workspace, application, and session context.
- Validate user-controlled values before passing them into administrative, security, SQL, or web-service APIs.
- Use the source link for exact behavior, defaults, and version-specific caveats.

## Simple Example

```sql
declare
    l_result ERROR;
begin
    l_result := apex_dg_data_gen.ADD_BLUEPRINT_FROM_FILE(
        p_filename => 'EXAMPLE',
        p_application_id => 1,
        p_override_name => 'EXAMPLE',
        p_replace => true,
        p_blueprint_id => 1
    );
    sys.dbms_output.put_line('Result captured.');
end;
/
```

