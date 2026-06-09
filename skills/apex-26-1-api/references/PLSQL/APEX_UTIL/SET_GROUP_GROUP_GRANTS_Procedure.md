# APEX_UTIL.SET_GROUP_GROUP_GRANTS Procedure

Source: [Oracle APEX 26.1 API Reference](https://docs.oracle.com/en/database/oracle/apex/26.1/aeapi/SET_GROUP_GROUP_GRANTS-Procedure.html)

Status: generated detailed reference. Review edge cases against the source before production use.

Parent package: [APEX_UTIL](../APEX_UTIL.md)

## Purpose

This procedure modifies the group grants for a given group.

## When To Use

Use this page when code needs the `APEX_UTIL.SET_GROUP_GROUP_GRANTS` procedure. Confirm security, workspace, and session requirements for your calling context.

## Signature

```sql
APEX_UTIL.SET_GROUP_GROUP_GRANTS (
    p_group_name          IN VARCHAR2,
    p_granted_group_names IN apex_t_varchar2 );
```

## Parameters

| Parameter | Description |
| --- | --- |
| `p_group_name` | The target group name. |
| `p_granted_group_names` | The names of groups to grant to p_group_name . |

## Returns

This is a procedure and does not return a value.

## Important Notes

- Most APEX APIs assume the correct APEX workspace, application, and session context.
- Validate user-controlled values before passing them into administrative, security, SQL, or web-service APIs.
- Use the source link for exact behavior, defaults, and version-specific caveats.

## Simple Example

```sql
begin
    apex_util.SET_GROUP_GROUP_GRANTS(
        p_group_name => 'EXAMPLE',
        p_granted_group_names => 'EXAMPLE'
    );
end;
/
```

## More Complex Example

```sql
begin
    -- Assuming this runs inside an APEX page process with the right workspace/app context.
    apex_util.SET_GROUP_GROUP_GRANTS(
            p_group_name => 'EXAMPLE',
            p_granted_group_names => 'EXAMPLE'
        );
end;
/
```

