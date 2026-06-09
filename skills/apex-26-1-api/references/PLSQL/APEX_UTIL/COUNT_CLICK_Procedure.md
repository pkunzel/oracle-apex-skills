# APEX_UTIL.COUNT_CLICK Procedure

Source: [Oracle APEX 26.1 API Reference](https://docs.oracle.com/en/database/oracle/apex/26.1/aeapi/COUNT_CLICK-Procedure.html)

Status: generated detailed reference. Review edge cases against the source before production use.

Parent package: [APEX_UTIL](../APEX_UTIL.md)

## Purpose

This procedure counts clicks from an application built in App Builder to an external site. You can also use the shorthand version, procedure Z , in place of APEX_UTIL.COUNT_CLICK .

## When To Use

Use this page when code needs the `APEX_UTIL.COUNT_CLICK` procedure. Confirm security, workspace, and session requirements for your calling context.

## Signature

```sql
APEX_UTIL.COUNT_CLICK (
    p_url             IN VARCHAR2,
    p_cat             IN VARCHAR2,
    p_id              IN VARCHAR2 DEFAULT NULL,
    p_user            IN VARCHAR2 DEFAULT NULL,
    p_workspace       IN VARCHAR2 DEFAULT NULL,
    p_referrer_policy IN VARCHAR2 DEFAULT NULL );
```

## Parameters

| Parameter | Description |
| --- | --- |
| `p_url` | The URL to which to redirect. |
| `p_cat` | A category to classify the click. |
| `p_id` | (Optional) Secondary ID to associate with the click. |
| `p_user` | (Optional) The application user ID. |
| `p_workspace` | (Optional) The workspace associated with the application. |
| `p_referrer_policy` | The referrer-policy HTTP response header. |

## Returns

This is a procedure and does not return a value.

## Important Notes

- Most APEX APIs assume the correct APEX workspace, application, and session context.
- Validate user-controlled values before passing them into administrative, security, SQL, or web-service APIs.
- Use the source link for exact behavior, defaults, and version-specific caveats.

## Simple Example

```sql
begin
    apex_util.COUNT_CLICK(
        p_url => 'EXAMPLE',
        p_cat => 'EXAMPLE',
        p_id => 'EXAMPLE',
        p_user => 'USER',
        p_workspace => 'EXAMPLE',
        p_referrer_policy => 'EXAMPLE'
    );
end;
/
```

