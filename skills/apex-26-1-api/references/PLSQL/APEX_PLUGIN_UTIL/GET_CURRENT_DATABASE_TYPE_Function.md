# APEX_PLUGIN_UTIL.GET_CURRENT_DATABASE_TYPE Function

Source: [Oracle APEX 26.1 API Reference](https://docs.oracle.com/en/database/oracle/apex/26.1/aeapi/GET_CURRENT_DATABASE_TYPE-Function.html)

Status: generated detailed reference. Review edge cases against the source before production use.

Parent package: [APEX_PLUGIN_UTIL](../APEX_PLUGIN_UTIL.md)

## Purpose

This function retrieves the database type for the currently active region. If Plug-In developers generate SQL in their code, this information helps to generate correct SQL for the corresponding database type.

## When To Use

Use this page when code needs the `APEX_PLUGIN_UTIL.GET_CURRENT_DATABASE_TYPE` function. Confirm security, workspace, and session requirements for your calling context.

## Signature

```sql
APEX_PLUGIN_UTIL.GET_CURRENT_DATABASE_TYPE (
    p_remote_server_id  IN NUMBER   DEFAULT NULL )
RETURN apex_exec.t_database_type;
```

## Parameters

| Parameter | Description |
| --- | --- |
| `p_remote_server_id` | The internal ID of the REST Enabled SQL reference. |

## Returns

This function returns the database vendor for the data source of the currently executed region.

## Important Notes

- Most APEX APIs assume the correct APEX workspace, application, and session context.
- Validate user-controlled values before passing them into administrative, security, SQL, or web-service APIs.
- Use the source link for exact behavior, defaults, and version-specific caveats.

## Example

Use the current database type before generating SQL that may differ for local, REST Enabled SQL, or remote sources.

```sql
declare
    l_database_type apex_exec.t_database_type;
begin
    l_database_type := apex_plugin_util.get_current_database_type;

    apex_debug.info(
        p_message => 'Active region database type: %s',
        p0        => to_char(l_database_type));
end;
/
```
