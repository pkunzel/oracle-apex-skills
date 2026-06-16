# APEX_WORKFLOW.DELETE_WORKFLOWS Procedure

Source: [Oracle APEX 26.1 API Reference](https://docs.oracle.com/en/database/oracle/apex/26.1/aeapi/APEX_WORKFLOW.DELETE_WORKFLOWS-Procedure.html)

Status: generated detailed reference. Review edge cases against the source before production use.

Parent package: [APEX_WORKFLOW](../APEX_WORKFLOW.md)

## Purpose

This procedure removes workflow instances for a given application.

## When To Use

Use this page when code needs the `APEX_WORKFLOW.DELETE_WORKFLOWS` procedure. Confirm security, workspace, and session requirements for your calling context.

## Signature

```sql
PROCEDURE apex_workflow.delete_workflows (
    p_application_id         IN   NUMBER               DEFAULT apex_application.g_flow_id,
    p_static_id              IN   VARCHAR2             DEFAULT NULL,
    p_states                 IN   apex_t_varchar2  DEFAULT NULL,
    p_include_all_versions   IN   BOOLEAN              DEFAULT FALSE );
```

## Parameters

| Parameter | Description |
| --- | --- |
| `p_application_id` | The application ID. Defaults to the currently running application. |
| `p_static_id` | Static ID of the workflow. If omitted, the deletion applies to all workflows in the application |
| `p_states` | (Optional) State(s) of the workflow instances. If provided, only those workflow instances which belong to the specified state(s), will be deleted |
| `p_include_all_versions` | If false, only instances created from Inactive workflow versions will be deleted . Default is false. |

## Returns

This is a procedure and does not return a value.

## Important Notes

- Most APEX APIs assume the correct APEX workspace, application, and session context.
- Validate user-controlled values before passing them into administrative, security, SQL, or web-service APIs.
- Use the source link for exact behavior, defaults, and version-specific caveats.

## Simple Example

Delete completed or terminated workflow instances for one workflow definition.

```sql
begin
    apex_workflow.delete_workflows(
        p_application_id       => :APP_ID,
        p_static_id            => 'ORDER_FULFILLMENT',
        p_states               => apex_t_varchar2(
                                      apex_workflow.c_state_completed,
                                      apex_workflow.c_state_terminated),
        p_include_all_versions => false);
end;
/
```

