# APEX_UTIL.DELETE_USER_GROUP Procedure Signature 2

Source: [Oracle APEX 26.1 API Reference](https://docs.oracle.com/en/database/oracle/apex/26.1/aeapi/DELETE_USER_GROUP-Procedure-Signature-2.html)

Status: generated detailed reference. Review edge cases against the source before production use.

Parent package: [APEX_UTIL](../APEX_UTIL.md)

## Purpose

This procedure deletes a user group by providing the name of the group when you are using Oracle APEX Accounts authentication. To execute this procedure, the current user must have administrative privileges in the workspace.

## When To Use

Use this page when code needs the `APEX_UTIL.DELETE_USER_GROUP` procedure. Confirm security, workspace, and session requirements for your calling context.

## Signature

```sql
APEX_UTIL.DELETE_USER_GROUP (
    p_group_name    IN VARCHAR2 );
```

## Returns

This is a procedure and does not return a value.

## Important Notes

- Most APEX APIs assume the correct APEX workspace, application, and session context.
- Validate user-controlled values before passing them into administrative, security, SQL, or web-service APIs.
- Use the source link for exact behavior, defaults, and version-specific caveats.

## Simple Example

Delete a workspace user group by group name.

```sql
begin
    apex_util.delete_user_group(
        p_group_name => 'OLD_REVIEWERS');
end;
/
```

