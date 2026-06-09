# APEX_WORKFLOW.REMOVE_DEVELOPMENT_INSTANCES Procedure

Source: [Oracle APEX 26.1 API Reference](https://docs.oracle.com/en/database/oracle/apex/26.1/aeapi/APEX_WORKFLOW.REMOVE_DEVELOPMENT_INSTANCES-Procedure.html)

Status: generated detailed reference. Review edge cases against the source before production use.

Parent package: [APEX_WORKFLOW](../APEX_WORKFLOW.md)

## Purpose

This procedure removes workflow instances created in "DEV" mode. This API can be used by a developer to remove any workflow instances that have been started from App Builder in DEV mode.

## When To Use

Use this page when code needs the `APEX_WORKFLOW.REMOVE_DEVELOPMENT_INSTANCES` procedure. Confirm security, workspace, and session requirements for your calling context.

## Signature

```sql
APEX_WORKFLOW.REMOVE_DEVELOPMENT_INSTANCES (
    p_application_id         IN NUMBER   DEFAULT apex_application.g_flow_id,
    p_static_id              IN VARCHAR2 DEFAULT NULL );
```

## Parameters

| Parameter | Description |
| --- | --- |
| `p_application_id` | The application ID. |
| `p_static_id` | Static ID of the workflow. If omitted, removes all development workflow instances of the application. |

## Returns

This is a procedure and does not return a value.

## Important Notes

- Most APEX APIs assume the correct APEX workspace, application, and session context.
- Validate user-controlled values before passing them into administrative, security, SQL, or web-service APIs.
- Use the source link for exact behavior, defaults, and version-specific caveats.

## Simple Example

```sql
begin
    apex_workflow.REMOVE_DEVELOPMENT_INSTANCES(
        p_application_id => 1,
        p_static_id => 'EXAMPLE_STATIC_ID'
    );
end;
/
```

## More Complex Example

```sql
begin
    -- Assuming this runs inside an APEX page process with the right workspace/app context.
    apex_workflow.REMOVE_DEVELOPMENT_INSTANCES(
            p_application_id => 1,
            p_static_id => 'EXAMPLE_STATIC_ID'
        );
end;
/
```

