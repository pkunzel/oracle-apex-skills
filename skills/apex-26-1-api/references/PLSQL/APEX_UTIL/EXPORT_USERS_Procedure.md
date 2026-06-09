# APEX_UTIL.EXPORT_USERS Procedure

Source: [Oracle APEX 26.1 API Reference](https://docs.oracle.com/en/database/oracle/apex/26.1/aeapi/EXPORT_USERS-Procedure.html)

Status: generated detailed reference. Review edge cases against the source before production use.

Parent package: [APEX_UTIL](../APEX_UTIL.md)

## Purpose

This procedure produces an export file of the current workspace definition, workspace users, and workspace groups when called from a page. To execute this procedure, the current user must have administrative privilege in the workspace.

## When To Use

Use this page when code needs the `APEX_UTIL.EXPORT_USERS` procedure. Confirm security, workspace, and session requirements for your calling context.

## Signature

```sql
APEX_UTIL.EXPORT_USERS (
    p_export_format     IN VARCHAR2 DEFAULT 'UNIX' );
```

## Parameters

| Parameter | Description |
| --- | --- |
| `p_export_format` | Indicates how rows in the export file are formatted. Specify UNIX to have the resulting file contain rows delimited by line feeds. Specify DOS to have the resulting file contain rows delimited by carriage returns and line feeds. |

## Returns

This is a procedure and does not return a value.

## Important Notes

- Most APEX APIs assume the correct APEX workspace, application, and session context.
- Validate user-controlled values before passing them into administrative, security, SQL, or web-service APIs.
- Use the source link for exact behavior, defaults, and version-specific caveats.

## Simple Example

```sql
begin
    apex_util.EXPORT_USERS(
        p_export_format => 'EXAMPLE'
    );
end;
/
```

