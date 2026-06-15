# APEX_INSTANCE_ADMIN.GET_WORKSPACE_PARAMETER Procedure

Source: [Oracle APEX 26.1 API Reference](https://docs.oracle.com/en/database/oracle/apex/26.1/aeapi/GET_WORKSPACE_PARAMETER.html)

Status: generated detailed reference. Review edge cases against the source before production use.

Parent package: [APEX_INSTANCE_ADMIN](../APEX_INSTANCE_ADMIN.md)

## Purpose

Gets the workspace parameter.

## When To Use

Use this page when code needs the `APEX_INSTANCE_ADMIN.GET_WORKSPACE_PARAMETER` procedure. Confirm security, workspace, and session requirements for your calling context.

## Signature

```sql
APEX_INSTANCE_ADMIN.GET_WORKSPACE_PARAMETER (
    p_workspace     IN VARCHAR2,
    p_parameter     IN VARCHAR2 )
RETURN VARCHAR2;
```

## Parameters

| Parameter | Description |
| --- | --- |
| `p_workspace` | The name of the workspace from which you are getting the workspace parameter. |
| `p_parameter` | The name of the parameter to get. Parameter names include: ACCOUNT_LIFETIME_DAYS ALLOW_HOSTNAMES ENV_BANNER_COLOR ENV_BANNER_LABEL ENV_BANNER_POS ENV_BANNER_YN EXPIRE_FND_USER_ACCOUNTS MAX_LOGIN_FAILURES MAX_SESSION_IDLE_SEC MAX_SESSION_LENGTH_SEC MAX_WEBSERVICE_REQUESTS QOS_MAX_SESSION_KILL_TIMEOUT QOS_MAX_SESSION_REQUESTS QOS_MAX_WORKSPACE_REQUESTS RM_CONSUMER_GROUP WEBSERVICE_LOGGING WORKSPACE_EMAIL_MAXIMUM WORKSPACE_MAX_FILE_BYTES |

## Returns

Returns the current value of the requested workspace parameter.

## Important Notes

- Most APEX APIs assume the correct APEX workspace, application, and session context.
- Validate user-controlled values before passing them into administrative, security, SQL, or web-service APIs.
- Use the source link for exact behavior, defaults, and version-specific caveats.

## Simple Example

```sql
begin
    sys.dbms_output.put_line(
        apex_instance_admin.get_workspace_parameter(
            p_workspace => 'SALES_ANALYTICS',
            p_parameter => 'WORKSPACE_EMAIL_MAXIMUM'
        )
    );
end;
/
```
