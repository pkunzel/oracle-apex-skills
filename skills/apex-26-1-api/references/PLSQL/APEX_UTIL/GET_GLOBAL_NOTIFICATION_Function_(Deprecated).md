# APEX_UTIL.GET_GLOBAL_NOTIFICATION Function (Deprecated)

Source: [Oracle APEX 26.1 API Reference](https://docs.oracle.com/en/database/oracle/apex/26.1/aeapi/GET_GLOBAL_NOTIFICATION-Function.html)

Status: generated detailed reference. Review edge cases against the source before production use.

Parent package: [APEX_UTIL](../APEX_UTIL.md)

## Purpose

Note:

## When To Use

Use this page when code needs the `APEX_UTIL.GET_GLOBAL_NOTIFICATION` function. Confirm security, workspace, and session requirements for your calling context.

## Deprecation

This member is marked deprecated in the APEX 26.1 documentation. Prefer the documented replacement when available.

## Signature

```sql
APEX_UTIL.GET_GLOBAL_NOTIFICATION (
   p_application_id IN NUMBER ) RETURN VARCHAR2;
```

## Parameters

| Parameter | Description |
| --- | --- |
| `p_application_id` | The application ID. |

## Important Notes

- Most APEX APIs assume the correct APEX workspace, application, and session context.
- Validate user-controlled values before passing them into administrative, security, SQL, or web-service APIs.
- Use the source link for exact behavior, defaults, and version-specific caveats.

## Simple Example

Legacy only. Prefer modern application administration APIs for new code.

```sql
declare
    l_message varchar2(4000);
begin
    l_message := apex_util.get_global_notification(
        p_application_id => :APP_ID);
end;
/
```

