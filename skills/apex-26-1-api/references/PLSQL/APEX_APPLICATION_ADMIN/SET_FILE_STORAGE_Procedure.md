# APEX_APPLICATION_ADMIN.SET_FILE_STORAGE Procedure

Source: [Oracle APEX 26.1 API Reference](https://docs.oracle.com/en/database/oracle/apex/26.1/aeapi/SET_FILE_STORAGE-Procedure.html)

Status: generated detailed reference. Review edge cases against the source before production use.

Parent package: [APEX_APPLICATION_ADMIN](../APEX_APPLICATION_ADMIN.md)

## Purpose

This procedure sets the file storage type to use either the local database or OCI Object store. If Object store is chosen, you must pass the static ID of the remote server pointing to the object store bucket.

## When To Use

Use this page when code needs the `APEX_APPLICATION_ADMIN.SET_FILE_STORAGE` procedure. Confirm security, workspace, and session requirements for your calling context.

## Signature

```sql
APEX_APPLICATION_ADMIN.SET_FILE_STORAGE (
    p_application_id            IN  NUMBER,
    p_storage_type              t_storage_type,
    p_remote_server_static_id   IN  VARCHAR2 DEFAULT NULL,
    p_migrate_files             IN  BOOLEAN DEFAULT FALSE );
```

## Parameters

| Parameter | Description |
| --- | --- |
| `p_application_id` | The ID of the application. |
| `p_storage_type` | Whether to use database or OCI storage for files. |
| `p_remote_server_static_id` | If OCI is used, Static ID of the remote server. |
| `p_migrate_files` | If TRUE , migrates application files from the application export to specified file storage server. |

## Returns

This is a procedure and does not return a value.

## Important Notes

- Most APEX APIs assume the correct APEX workspace, application, and session context.
- Validate user-controlled values before passing them into administrative, security, SQL, or web-service APIs.
- Use the source link for exact behavior, defaults, and version-specific caveats.

## Simple Example

```sql
begin
    apex_application_admin.SET_FILE_STORAGE(
        p_application_id => 1,
        p_storage_type => 'EXAMPLE',
        p_remote_server_static_id => 'EXAMPLE_STATIC_ID',
        p_migrate_files => true
    );
end;
/
```

## More Complex Example

```sql
begin
    -- Assuming this runs inside an APEX page process with the right workspace/app context.
    apex_application_admin.SET_FILE_STORAGE(
            p_application_id => 1,
            p_storage_type => 'EXAMPLE',
            p_remote_server_static_id => 'EXAMPLE_STATIC_ID',
            p_migrate_files => true
        );
end;
/
```

