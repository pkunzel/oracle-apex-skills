# APEX_UTIL.SET_GLOBAL_NOTIFICATION Procedure (Deprecated)

Source: [Oracle APEX 26.1 API Reference](https://docs.oracle.com/en/database/oracle/apex/26.1/aeapi/SET_GLOBAL_NOTIFICATION-Procedure.html)

Status: generated detailed reference. Review edge cases against the source before production use.

Parent package: [APEX_UTIL](../APEX_UTIL.md)

## Purpose

Note:

## When To Use

Use this page when code needs the `APEX_UTIL.SET_GLOBAL_NOTIFICATION` procedure. Confirm security, workspace, and session requirements for your calling context.

## Deprecation

This member is marked deprecated in the APEX 26.1 documentation. Prefer the documented replacement when available.

## Signature

```sql
APEX_UTIL.SET_GLOBAL_NOTIFICATION (
   p_application_id              IN NUMBER,
   p_global_notification_message IN VARCHAR2 );
```

## Parameters

| Parameter | Description |
| --- | --- |
| `p_application_id` | The Application ID. |
| `p_global_notification_message` | Text string to be used for the global notification message. |

## Returns

This is a procedure and does not return a value.

## Important Notes

- Most APEX APIs assume the correct APEX workspace, application, and session context.
- Validate user-controlled values before passing them into administrative, security, SQL, or web-service APIs.
- Use the source link for exact behavior, defaults, and version-specific caveats.

## Simple Example

```sql
begin
    apex_util.SET_GLOBAL_NOTIFICATION(
        p_application_id => 1,
        p_global_notification_message => to_clob('Example text')
    );
end;
/
```

## More Complex Example

```sql
begin
    -- Assuming this runs inside an APEX page process with the right workspace/app context.
    apex_util.SET_GLOBAL_NOTIFICATION(
            p_application_id => 1,
            p_global_notification_message => to_clob('Example text')
        );
end;
/
```

