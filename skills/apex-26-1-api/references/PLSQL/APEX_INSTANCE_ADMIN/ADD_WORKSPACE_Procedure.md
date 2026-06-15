# APEX_INSTANCE_ADMIN.ADD_WORKSPACE Procedure

Source: [Oracle APEX 26.1 API Reference](https://docs.oracle.com/en/database/oracle/apex/26.1/aeapi/ADD_WORKSPACE-Procedure.html)

Status: generated detailed reference. Review edge cases against the source before production use.

Parent package: [APEX_INSTANCE_ADMIN](../APEX_INSTANCE_ADMIN.md)

## Purpose

Adds a workspace to an Oracle APEX instance.

## When To Use

Use this page when code needs the `APEX_INSTANCE_ADMIN.ADD_WORKSPACE` procedure. Confirm security, workspace, and session requirements for your calling context.

## Signature

```sql
APEX_INSTANCE_ADMIN.ADD_WORKSPACE (
    p_workspace_id        IN NUMBER DEFAULT NULL,
    p_workspace           IN VARCHAR2,
    p_source_identifier   IN VARCHAR2 DEFAULT NULL,
    p_primary_schema      IN VARCHAR2,
    p_additional_schemas  IN VARCHAR2,
    p_rm_consumer_group   IN VARCHAR2 DEFAULT NULL,
    p_host_prefix         IN VARCHAR2 DEFAULT NULL );
```

## Parameters

| Parameter | Description |
| --- | --- |
| `p_workspace_id` | The ID to uniquely identify the workspace in an APEX instance. This may be left null and a new unique ID is assigned. |
| `p_workspace` | The name of the workspace to be added. |
| `p_source_identifier` | A short identifier for the workspace used when synchronizing feedback between different instances. |
| `p_primary_schema` | The primary database schema to associate with the new workspace. |
| `p_additional_schemas` | A colon delimited list of additional schemas to associate with this workspace. |
| `p_rm_consumer_group` | Resource Manager consumer group which is used when executing applications of this workspace. |
| `p_host_prefix` | If set, users can only navigate to an application if the URL's hostname part contains this value. |

## Returns

This is a procedure and does not return a value.

## Important Notes

- Most APEX APIs assume the correct APEX workspace, application, and session context.
- Validate user-controlled values before passing them into administrative, security, SQL, or web-service APIs.
- Use the source link for exact behavior, defaults, and version-specific caveats.

## Simple Example

```sql
begin
    apex_instance_admin.add_workspace(
        p_workspace_id       => 8675309,
        p_workspace          => 'SALES_ANALYTICS',
        p_source_identifier  => 'SALES_ANALYTICS_PROD',
        p_primary_schema     => 'SALES_APP',
        p_additional_schemas => 'SALES_STAGE:SALES_MART',
        p_rm_consumer_group  => 'APEX_LOW',
        p_host_prefix        => 'sales'
    );
end;
/
```
