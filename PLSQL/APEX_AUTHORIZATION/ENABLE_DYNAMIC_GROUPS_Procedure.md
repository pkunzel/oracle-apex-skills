# APEX_AUTHORIZATION.ENABLE_DYNAMIC_GROUPS Procedure

Source: [Oracle APEX 26.1 API Reference](https://docs.oracle.com/en/database/oracle/apex/26.1/aeapi/ENABLE_DYNAMIC_GROUPS-Procedure.html)

Status: generated detailed reference. Review edge cases against the source before production use.

Parent package: [APEX_AUTHORIZATION](../APEX_AUTHORIZATION.md)

## Purpose

This procedure enables groups in the current session. These groups do not have to be created in the Oracle APEX workspace repository, but can be loaded from an LDAP repository or retrieved from a trusted HTTP header. Enabling a group that exists in the workspace repository and has other groups granted to it, also enables the granted groups.

## When To Use

Use this page when code needs the `APEX_AUTHORIZATION.ENABLE_DYNAMIC_GROUPS` procedure. Confirm security, workspace, and session requirements for your calling context.

## Signature

```sql
APEX_AUTHORIZATION.ENABLE_DYNAMIC_GROUPS (
    p_group_names   IN apex_t_varchar2 )
```

## Parameters

| Parameter | Description |
| --- | --- |
| `p_group_names` | Table of group names. |

## Returns

This is a procedure and does not return a value.

## Important Notes

- Most APEX APIs assume the correct APEX workspace, application, and session context.
- Validate user-controlled values before passing them into administrative, security, SQL, or web-service APIs.
- Use the source link for exact behavior, defaults, and version-specific caveats.

## Simple Example

```sql
begin
    apex_authorization.ENABLE_DYNAMIC_GROUPS(
        p_group_names => 'EXAMPLE'
    );
end;
/
```

## More Complex Example

```sql
begin
    -- Assuming this runs inside an APEX page process with the right workspace/app context.
    apex_authorization.ENABLE_DYNAMIC_GROUPS(
            p_group_names => 'EXAMPLE'
        );
end;
/
```

