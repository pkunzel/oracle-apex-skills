# APEX_WORKFLOW.SET_LOG_LEVEL Procedure

Source: [Oracle APEX 26.1 API Reference](https://docs.oracle.com/en/database/oracle/apex/26.1/aeapi/APEX_WORKFLOW.SET_LOG_LEVEL-Procedure.html)

Status: generated detailed reference. Review edge cases against the source before production use.

Parent package: [APEX_WORKFLOW](../APEX_WORKFLOW.md)

## Purpose

This procedure sets the debug log level for the Workflow instance. When set, this overrides the debug log level settings for the Workflow version.

## When To Use

Use this page when code needs the `APEX_WORKFLOW.SET_LOG_LEVEL` procedure. Confirm security, workspace, and session requirements for your calling context.

## Signature

```sql
APEX_WORKFLOW.SET_LOG_LEVEL (
    p_instance_id            IN NUMBER,
    p_debug_level            IN apex_debug_api.t_log_level );
```

## Parameters

| Parameter | Description |
| --- | --- |
| `p_instance_id` | ID of the Workflow. |
| `p_debug_level` | The debug level to use. |

## Returns

This is a procedure and does not return a value.

## Important Notes

- Most APEX APIs assume the correct APEX workspace, application, and session context.
- Validate user-controlled values before passing them into administrative, security, SQL, or web-service APIs.
- Use the source link for exact behavior, defaults, and version-specific caveats.

## Simple Example

```sql
begin
    apex_workflow.SET_LOG_LEVEL(
        p_instance_id => 1,
        p_debug_level => null
    );
end;
/
```

