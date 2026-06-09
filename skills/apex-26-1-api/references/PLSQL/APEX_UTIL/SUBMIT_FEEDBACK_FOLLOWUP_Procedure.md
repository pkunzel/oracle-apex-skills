# APEX_UTIL.SUBMIT_FEEDBACK_FOLLOWUP Procedure

Source: [Oracle APEX 26.1 API Reference](https://docs.oracle.com/en/database/oracle/apex/26.1/aeapi/SUBMIT_FEEDBACK_FOLLOWUP-Procedure.html)

Status: generated detailed reference. Review edge cases against the source before production use.

Parent package: [APEX_UTIL](../APEX_UTIL.md)

## Purpose

This procedure enables you to submit follow up to a feedback.

## When To Use

Use this page when code needs the `APEX_UTIL.SUBMIT_FEEDBACK_FOLLOWUP` procedure. Confirm security, workspace, and session requirements for your calling context.

## Signature

```sql
APEX_UTIL.SUBMIT_FEEDBACK_FOLLOWUP (
    p_feedback_id      IN NUMBER,
    p_follow_up        IN VARCHAR2 DEFAULT NULL,
    p_email            IN VARCHAR2 DEFAULT NULL );
```

## Parameters

| Parameter | Description |
| --- | --- |
| `p_feedback_id` | ID of feedback that this is a follow up to. |
| `p_follow_up` | Text of follow up. |
| `p_email` | Email of user providing the follow up. |

## Returns

This is a procedure and does not return a value.

## Important Notes

- Most APEX APIs assume the correct APEX workspace, application, and session context.
- Validate user-controlled values before passing them into administrative, security, SQL, or web-service APIs.
- Use the source link for exact behavior, defaults, and version-specific caveats.

## Simple Example

```sql
begin
    apex_util.SUBMIT_FEEDBACK_FOLLOWUP(
        p_feedback_id => 1,
        p_follow_up => 'EXAMPLE',
        p_email => 'EXAMPLE'
    );
end;
/
```

## More Complex Example

```sql
begin
    -- Assuming this runs inside an APEX page process with the right workspace/app context.
    apex_util.SUBMIT_FEEDBACK_FOLLOWUP(
            p_feedback_id => 1,
            p_follow_up => 'EXAMPLE',
            p_email => 'EXAMPLE'
        );
end;
/
```

