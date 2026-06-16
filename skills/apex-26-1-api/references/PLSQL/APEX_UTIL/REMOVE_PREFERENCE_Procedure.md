# APEX_UTIL.REMOVE_PREFERENCE Procedure

Source: [Oracle APEX 26.1 API Reference](https://docs.oracle.com/en/database/oracle/apex/26.1/aeapi/REMOVE_PREFERENCE-Procedure.html)

Status: generated detailed reference. Review edge cases against the source before production use.

Parent package: [APEX_UTIL](../APEX_UTIL.md)

## Purpose

This procedure removes the preference for the supplied user.

## When To Use

Use this page when code needs the `APEX_UTIL.REMOVE_PREFERENCE` procedure. Confirm security, workspace, and session requirements for your calling context.

## Signature

```sql
APEX_UTIL.REMOVE_PREFERENCE(
    p_preference    IN    VARCHAR2 DEFAULT NULL,
    p_user          IN    VARCHAR2 DEFAULT V('USER') );
```

## Parameters

| Parameter | Description |
| --- | --- |
| `p_preference` | Name of the preference to remove. |
| `p_user` | User for whom the preference is defined. |

## Returns

This is a procedure and does not return a value.

## Important Notes

- Most APEX APIs assume the correct APEX workspace, application, and session context.
- Validate user-controlled values before passing them into administrative, security, SQL, or web-service APIs.
- Use the source link for exact behavior, defaults, and version-specific caveats.

## Simple Example

Remove a saved preference for the current user.

```sql
begin
    apex_util.remove_preference(
        p_preference => 'ORDER_REPORT_VIEW',
        p_user       => :APP_USER);
end;
/
```

