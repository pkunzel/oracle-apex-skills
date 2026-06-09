# APEX_UTIL.GET_FEEDBACK_FOLLOW_UP Function

Source: [Oracle APEX 26.1 API Reference](https://docs.oracle.com/en/database/oracle/apex/26.1/aeapi/GET_FEEDBACK_FOLLOW_UP-Function.html)

Status: generated detailed reference. Review edge cases against the source before production use.

Parent package: [APEX_UTIL](../APEX_UTIL.md)

## Purpose

Use this function to retrieve any remaining follow up associated with a specific feedback.

## When To Use

Use this page when code needs the `APEX_UTIL.GET_FEEDBACK_FOLLOW_UP` function. Confirm security, workspace, and session requirements for your calling context.

## Signature

```sql
APEX_UTIL.GET_FEEDBACK_FOLLOW_UP (
    p_feedback_id    IN NUMBER,
    p_row            IN NUMBER DEFAULT 1,
    p_template       IN VARCHAR2 DEFAULT '
#CREATED_ON# (#CREATED_BY#) #FOLLOW_UP#')
RETURN VARCHAR2;
```

## Parameters

| Parameter | Description |
| --- | --- |
| `p_feedback_id` | The unique identifier of the feedback item. |
| `p_row` | Identifies which follow-up to retrieve and is ordered by created_on_desc . |
| `p_template` | The template to use to return the follow up. Given the in the default template, the function can be used in a loop to return all the follow up to a feedback. |

## Important Notes

- Most APEX APIs assume the correct APEX workspace, application, and session context.
- Validate user-controlled values before passing them into administrative, security, SQL, or web-service APIs.
- Use the source link for exact behavior, defaults, and version-specific caveats.

## Simple Example

```sql
declare
    l_result VARCHAR2;
begin
    l_result := apex_util.GET_FEEDBACK_FOLLOW_UP(
        p_feedback_id => 1,
        p_row => 1,
        p_template => 'EXAMPLE'
    );
    sys.dbms_output.put_line('Result captured.');
end;
/
```

