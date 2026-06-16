# APEX_UTIL.SET_SECURITY_GROUP_ID Procedure

Source: [Oracle APEX 26.1 API Reference](https://docs.oracle.com/en/database/oracle/apex/26.1/aeapi/SET_SECURITY_GROUP_ID-Procedure.html)

Status: generated detailed reference. Review edge cases against the source before production use.

Parent package: [APEX_UTIL](../APEX_UTIL.md)

## Purpose

Use this procedure with apex_util.find_security_group_id to ease the use of the mail package in batch mode. This procedure is especially useful when a schema is associated with more than one workspace. For example, you might want to create a procedure that is run by a nightly job to email all outstanding tasks.

## When To Use

Use this page when code needs the `APEX_UTIL.SET_SECURITY_GROUP_ID` procedure. Confirm security, workspace, and session requirements for your calling context.

## Signature

```sql
APEX_UTIL.SET_SECURITY_GROUP_ID ( 
    p_security_group_id  IN NUMBER);
```

## Parameters

| Parameter | Description |
| --- | --- |
| `p_security_group_id` | This is the security group id of the workspace you are working in. |

## Returns

This is a procedure and does not return a value.

## Important Notes

- Most APEX APIs assume the correct APEX workspace, application, and session context.
- Validate user-controlled values before passing them into administrative, security, SQL, or web-service APIs.
- Use the source link for exact behavior, defaults, and version-specific caveats.

## Simple Example

Set workspace context by security group id for a non-browser script.

```sql
begin
    apex_util.set_security_group_id(
        p_security_group_id => apex_util.find_security_group_id('MY_WORKSPACE'));
end;
/
```

