# APEX_UTIL.REPLY_TO_FEEDBACK Procedure

Source: [Oracle APEX 26.1 API Reference](https://docs.oracle.com/en/database/oracle/apex/26.1/aeapi/APEX_UTIL.REPLY_TO_FEEDBACK-Procedure.html)

Status: generated detailed reference. Review edge cases against the source before production use.

Parent package: [APEX_UTIL](../APEX_UTIL.md)

## Purpose

This procedure enables you to submit a reply to a feedback.

## When To Use

Use this page when code needs the `APEX_UTIL.REPLY_TO_FEEDBACK` procedure. Confirm security, workspace, and session requirements for your calling context.

## Signature

```sql
APEX_UTIL.REPLY_TO_FEEDBACK (
    p_feedback_id        IN NUMBER,
    p_type               IN NUMBER   DEFAULT NULL,
    p_status             IN NUMBER   DEFAULT NULL,
    p_tags               IN VARCHAR2 DEFAULT NULL,
    p_developer_comment  IN VARCHAR2 DEFAULT NULL,
    p_public_response    IN VARCHAR2 DEFAULT NULL,
    p_followup           IN VARCHAR2 DEFAULT NULL )
```

## Parameters

| Parameter | Description |
| --- | --- |
| `p_feedback_id` | The ID of feedback. |
| `p_type` | The type of feedback (1 is General Comment, 2 is Enhancement Request, 3 is Bug). |
| `p_status` | The status of the feedback (0 is No Action, 1 is Acknowledged, 3 is Open and 4 is Closed). |
| `p_tags` | Used to categorize feedback, only to be displayed to developers (not in the current feature implementation). |
| `p_developer_comment` | Comments not displayed to the users but could be displayed to developers (not in the current feature implementation). |
| `p_public_response` | Text that will be displayed to the users. |
| `p_followup` | The text of the follow-up. When the Feedback feature is added to an application, it only uses p_public_response . It does not support passing data to p_followup . |

## Returns

This is a procedure and does not return a value.

## Important Notes

- Most APEX APIs assume the correct APEX workspace, application, and session context.
- Validate user-controlled values before passing them into administrative, security, SQL, or web-service APIs.
- Use the source link for exact behavior, defaults, and version-specific caveats.

## Simple Example

```sql
begin
    apex_util.REPLY_TO_FEEDBACK(
        p_feedback_id => 1,
        p_type => 1,
        p_status => 1,
        p_tags => 'EXAMPLE',
        p_developer_comment => 'EXAMPLE',
        p_public_response => true,
        p_followup => 'EXAMPLE'
    );
end;
/
```

