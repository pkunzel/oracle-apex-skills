# APEX_WORKFLOW.REFRESH_PARTICIPANTS Procedure

Source: [Oracle APEX 26.1 API Reference](https://docs.oracle.com/en/database/oracle/apex/26.1/aeapi/APEX_WORKFLOW.REFRESH_PARTICIPANTS-Procedure.html)

Status: generated detailed reference. Review edge cases against the source before production use.

Parent package: [APEX_WORKFLOW](../APEX_WORKFLOW.md)

## Purpose

This procedure refreshes the participants for this workflow instance.

## When To Use

Use this page when code needs the `APEX_WORKFLOW.REFRESH_PARTICIPANTS` procedure. Confirm security, workspace, and session requirements for your calling context.

## Signature

```sql
APEX_WORKFLOW.REFRESH_PARTICIPANTS (
    p_instance_id    IN NUMBER );
```

## Parameters

| Parameter | Description |
| --- | --- |
| `p_instance_id` | The Workflow ID. |

## Returns

This is a procedure and does not return a value.

## Important Notes

- Most APEX APIs assume the correct APEX workspace, application, and session context.
- Validate user-controlled values before passing them into administrative, security, SQL, or web-service APIs.
- Use the source link for exact behavior, defaults, and version-specific caveats.

## Simple Example

```sql
begin
    apex_workflow.REFRESH_PARTICIPANTS(
        p_instance_id => 1
    );
end;
/
```

## More Complex Example

```sql
begin
    -- Assuming this runs inside an APEX page process with the right workspace/app context.
    apex_workflow.REFRESH_PARTICIPANTS(
            p_instance_id => 1
        );
end;
/
```

