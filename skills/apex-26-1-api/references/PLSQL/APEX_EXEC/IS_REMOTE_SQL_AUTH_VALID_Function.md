# APEX_EXEC.IS_REMOTE_SQL_AUTH_VALID Function

Source: [Oracle APEX 26.1 API Reference](https://docs.oracle.com/en/database/oracle/apex/26.1/aeapi/APEX_EXEC.IS_REMOTE_SQL_AUTH_VALID-Function.html)

Status: generated detailed reference. Review edge cases against the source before production use.

Parent package: [APEX_EXEC](../APEX_EXEC.md)

## Purpose

This function checks whether the current authentication credentials are correct for the given REST Enabled SQL instance.

## When To Use

Use this page when code needs the `APEX_EXEC.IS_REMOTE_SQL_AUTH_VALID` function. Confirm security, workspace, and session requirements for your calling context.

## Signature

```sql
function IS_REMOTE_SQL_AUTH_VALID (
    p_server_static_id  IN    VARCHAR2 )
RETURN BOOLEAN;
```

## Parameters

| Parameter | Description |
| --- | --- |
| `p_server_static_id` | Static ID of the REST enabled SQL instance. |

## Returns

Returns true , when credentials are correct, false otherwise.

## Important Notes

- Most APEX APIs assume the correct APEX workspace, application, and session context.
- Validate user-controlled values before passing them into administrative, security, SQL, or web-service APIs.
- Use the source link for exact behavior, defaults, and version-specific caveats.

## Simple Example

```sql
begin
    if apex_exec.is_remote_sql_auth_valid(p_server_static_id => 'REMOTE_HR') then sys.dbms_output.put_line('Remote SQL credentials are valid.'); end if;
end;
/
```
