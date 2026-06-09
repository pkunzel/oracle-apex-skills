# APEX_EXPORT.GET_APPLICATION Function

Source: [Oracle APEX 26.1 API Reference](https://docs.oracle.com/en/database/oracle/apex/26.1/aeapi/GET_APPLICATION_Function.html)

Status: generated detailed reference. Review edge cases against the source before production use.

Parent package: [APEX_EXPORT](../APEX_EXPORT.md)

## Purpose

This function exports the given application and optionally splits the application definition into multiple files. The optional p_with_% parameters can be used to include additional information in the export.

## When To Use

Use this page when code needs the `APEX_EXPORT.GET_APPLICATION` function. Confirm security, workspace, and session requirements for your calling context.

## Signature

```sql
APEX_EXPORT.GET_APPLICATION (
    p_application_id            IN NUMBER,
    p_type                      IN t_export_type    DEFAULT c_type_sql,
    p_split                     IN BOOLEAN          DEFAULT FALSE,
    p_with_date                 IN BOOLEAN          DEFAULT FALSE,
    p_with_ir_public_reports    IN BOOLEAN          DEFAULT FALSE,
    p_with_ir_private_reports   IN BOOLEAN          DEFAULT FALSE,
    p_with_ir_notifications     IN BOOLEAN          DEFAULT FALSE,
    p_with_translations         IN BOOLEAN          DEFAULT FALSE,
    p_with_original_ids         IN BOOLEAN          DEFAULT FALSE,
    p_with_no_subscriptions     IN BOOLEAN          DEFAULT FALSE,
    p_with_comments             IN BOOLEAN          DEFAULT FALSE,
    p_with_supporting_objects   IN VARCHAR2         DEFAULT NULL,
    p_with_acl_assignments      IN BOOLEAN          DEFAULT FALSE,  
    p_components                IN apex_t_varchar2  DEFAULT NULL,
    p_with_audit_info           IN t_audit_type     DEFAULT NULL,
    p_with_runtime_instances    IN apex_t_varchar2  DEFAULT NULL )
    RETURN apex_t_export_files;
```

## Parameters

| Parameter | Description |
| --- | --- |
| `p_application_id` | The application ID. |
| `p_type` | Comma-delimited list of export types to perform: APEXLANG - export the APEX application metadata in the readable, modifiable, and importable APEXlang format. Note: If READABLE_YAML (deprecated) is passed in, APEXLANG is generated. SQL - export the APEX application metadata in the importable SQL format. EMBEDDED_CODE - export code such as SQL, PL/SQL and JavaScript. APEX ignores all other options when EMBEDDED_CODE is selected. CHECKSUM-SH1 - export a SHA1 checksum that is independent of IDs and can be compared across instances and workspaces. CHECKSUM-SH256 - export a SHA-256 checksum that is independent of IDs and can be compared across instances and workspaces. |
| `p_split` | If TRUE , splits the definition into discrete elements that can be stored in separate files. If FALSE , the result is a single file. |
| `p_with_date` | If TRUE , includes export date and time in the result. |
| `p_with_ir_public_reports` | If TRUE , includes public reports that a user saved. |
| `p_with_ir_private_reports` | If TRUE , includes private reports that a user saved. |
| `p_with_ir_notifications` | If TRUE , includes report notifications. |
| `p_with_translations` | If TRUE , includes application translation mappings and all text from the translation repository. |
| `p_with_original_ids` | If TRUE , exports with the IDs as they were when the application was imported. |
| `p_with_no_subscriptions` | If FALSE , components contain subscription references. |
| `p_with_comments` | If TRUE , includes all comments. |
| `p_with_supporting_objects` | If Y , exports supporting objects. If I , installs on import automatically. If N , does not export supporting objects. If NULL , uses the application's Include in Export deployment value. |
| `p_with_acl_assignments` | If TRUE , exports ACL user role assignments. |
| `p_components` | If not NULL , exports only the given components (array elements should be of form type : name , for example, PAGE:42 or MESSAGE:12345 ). Use % to indicate that all components of the given type should be exported. For example: LOV:% exports all Lists Of Values contained in the application. See view APEX_APPL_EXPORT_COMPS for components that can be exported. |
| `p_with_audit_info` | Specifies the detail of audit information to include: NULL - export excludes all audit information. NAMES_AND_DATES - export includes Created On, Created By, Updated On, Updated By values if they exist. DATES_ONLY - export includes Created On and Updated On values if they exist. User names are excluded. |
| `p_with_runtime_instances` | An array with components for which to export runtime instance data. For example, specify WORKFLOW to export all Workflow Instances together with the application. |

## Returns

A table of apex_t_export_file . Unless the caller passes p_split=>true to the function, the result is a single file.

## Important Notes

- Most APEX APIs assume the correct APEX workspace, application, and session context.
- Validate user-controlled values before passing them into administrative, security, SQL, or web-service APIs.
- Use the source link for exact behavior, defaults, and version-specific caveats.

## Simple Example

```sql
declare
    l_result APEX_T_EXPORT_FILES;
begin
    l_result := apex_export.GET_APPLICATION(
        p_application_id => 1,
        p_type => null,
        p_split => true,
        p_with_date => true,
        p_with_ir_public_reports => true,
        p_with_ir_private_reports => true,
        p_with_ir_notifications => true,
        p_with_translations => true,
        p_with_original_ids => true,
        p_with_no_subscriptions => true,
        p_with_comments => true,
        p_with_supporting_objects => 'EXAMPLE',
        p_with_acl_assignments => true,
        p_components => 'EXAMPLE',
        p_with_audit_info => null,
        p_with_runtime_instances => 'EXAMPLE'
    );
    sys.dbms_output.put_line('Result captured.');
end;
/
```

## More Complex Example

```sql
declare
    l_result APEX_T_EXPORT_FILES;
begin
    -- Assuming this runs outside a normal APEX page request.
    apex_session.create_session(
        p_app_id   => 100,
        p_page_id  => 1,
        p_username => 'USER');

    l_result := apex_export.GET_APPLICATION(
            p_application_id => 1,
            p_type => null,
            p_split => true,
            p_with_date => true,
            p_with_ir_public_reports => true,
            p_with_ir_private_reports => true,
            p_with_ir_notifications => true,
            p_with_translations => true,
            p_with_original_ids => true,
            p_with_no_subscriptions => true,
            p_with_comments => true,
            p_with_supporting_objects => 'EXAMPLE',
            p_with_acl_assignments => true,
            p_components => 'EXAMPLE',
            p_with_audit_info => null,
            p_with_runtime_instances => 'EXAMPLE'
        );

    apex_session.delete_session;
exception
    when others then
        apex_session.delete_session;
        raise;
end;
/
```

