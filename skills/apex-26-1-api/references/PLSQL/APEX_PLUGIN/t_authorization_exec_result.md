# APEX_PLUGIN.t_authorization_exec_result

Source: [Oracle APEX 26.1 API Reference](https://docs.oracle.com/en/database/oracle/apex/26.1/aeapi/APEX_PLUGIN-Data-Types.html)

Status: generated detailed reference. Review edge cases against the source before production use.

Parent package: [APEX_PLUGIN](../APEX_PLUGIN.md)

## Purpose

This section describes the data types used by the APEX_PLUGIN package.

## When To Use

Use this page when code needs the `APEX_PLUGIN.t_authorization_exec_result` topic. Confirm security, workspace, and session requirements for your calling context.

## Important Notes

- Most APEX APIs assume the correct APEX workspace, application, and session context.
- Validate user-controlled values before passing them into administrative, security, SQL, or web-service APIs.
- Use the source link for exact behavior, defaults, and version-specific caveats.

## Example

Authorization plug-ins return an authorization execution result from the callback.

```sql
function authorize_request (
    p_authorization in apex_plugin.t_authorization,
    p_plugin        in apex_plugin.t_plugin )
    return apex_plugin.t_authorization_exec_result
is
    l_result apex_plugin.t_authorization_exec_result;
begin
    apex_debug.info('Authorization plug-in invoked: %s', p_authorization.name);
    return l_result;
end;
/
```
