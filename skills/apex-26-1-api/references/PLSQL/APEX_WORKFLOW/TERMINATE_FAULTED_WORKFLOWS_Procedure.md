# APEX_WORKFLOW.TERMINATE_FAULTED_WORKFLOWS Procedure

Source: [Oracle APEX 26.1 API Reference](https://docs.oracle.com/en/database/oracle/apex/26.1/aeapi/APEX_WORKFLOW.TERMINATE_FAULTED_WORKFLOWS-Procedure.html)

Status: generated detailed reference. Review edge cases against the source before production use.

Parent package: [APEX_WORKFLOW](../APEX_WORKFLOW.md)

## Purpose

This procedure terminates all faulted workflow instances for an application.

## When To Use

Use this page when code needs the `APEX_WORKFLOW.TERMINATE_FAULTED_WORKFLOWS` procedure. Confirm security, workspace, and session requirements for your calling context.

## Signature

```sql
APEX_WORKFLOW.TERMINATE_FAULTED_WORKFLOWS (
    p_application_id         IN NUMBER );
```

## Parameters

| Parameter | Description |
| --- | --- |
| `p_application_id` | ID of the application. |

## Returns

This is a procedure and does not return a value.

## Important Notes

- Most APEX APIs assume the correct APEX workspace, application, and session context.
- Validate user-controlled values before passing them into administrative, security, SQL, or web-service APIs.
- Use the source link for exact behavior, defaults, and version-specific caveats.

## Simple Example

```sql
begin
    apex_workflow.TERMINATE_FAULTED_WORKFLOWS(
        p_application_id => 1
    );
end;
/
```

