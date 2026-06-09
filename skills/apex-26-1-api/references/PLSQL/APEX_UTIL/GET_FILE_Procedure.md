# APEX_UTIL.GET_FILE Procedure

Source: [Oracle APEX 26.1 API Reference](https://docs.oracle.com/en/database/oracle/apex/26.1/aeapi/GET_FILE-Procedure.html)

Status: generated detailed reference. Review edge cases against the source before production use.

Parent package: [APEX_UTIL](../APEX_UTIL.md)

## Purpose

This procedure downloads files from the Oracle APEX file repository. If you invoke this procedure during page processing, ensure that no page branch is invoked under the same condition to avoid interference with the file retrieval. This means that branches with any of the following conditions should NOT be set to fire:

## When To Use

Use this page when code needs the `APEX_UTIL.GET_FILE` procedure. Confirm security, workspace, and session requirements for your calling context.

## Signature

```sql
APEX_UTIL.GET_FILE (
    p_file_id    IN VARCHAR2,
    p_inline     IN VARCHAR2 DEFAULT 'NO' );
```

## Parameters

| Parameter | Description |
| --- | --- |
| `p_file_id` | ID in APEX_APPLICATION_FILES of the file to be downloaded. APEX_APPLICATION_FILES is a view on all files uploaded to your workspace. The following example demonstrates how to use APEX_APPLICATION_FILES : |
| `p_inline` | Valid values include YES and NO . YES to display inline in a browser. NO to download as attachment. |

## Returns

This is a procedure and does not return a value.

## Important Notes

- Most APEX APIs assume the correct APEX workspace, application, and session context.
- Validate user-controlled values before passing them into administrative, security, SQL, or web-service APIs.
- Use the source link for exact behavior, defaults, and version-specific caveats.

## Simple Example

```sql
begin
    apex_util.GET_FILE(
        p_file_id => 'EXAMPLE',
        p_inline => 'EXAMPLE'
    );
end;
/
```

