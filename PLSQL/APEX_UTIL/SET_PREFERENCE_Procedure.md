# APEX_UTIL.SET_PREFERENCE Procedure

Source: [Oracle APEX 26.1 API Reference](https://docs.oracle.com/en/database/oracle/apex/26.1/aeapi/SET_PREFERENCE-Procedure.html)

Status: generated detailed reference. Review edge cases against the source before production use.

Parent package: [APEX_UTIL](../APEX_UTIL.md)

## Purpose

This procedure sets a preference that persists beyond the user's current session.

## When To Use

Use this page when code needs the `APEX_UTIL.SET_PREFERENCE` procedure. Confirm security, workspace, and session requirements for your calling context.

## Signature

```sql
APEX_UTIL.SET_PREFERENCE (
    p_preference   IN    VARCHAR2 DEFAULT NULL,
    p_value        IN    VARCHAR2 DEFAULT NULL,
    p_user         IN    VARCHAR2 DEFAULT NULL );
```

## Parameters

| Parameter | Description |
| --- | --- |
| `p_preference` | Name of the preference (case-sensitive). |
| `p_value` | Value of the preference. |
| `p_user` | User for whom the preference is being set. |

## Returns

This is a procedure and does not return a value.

## Important Notes

- Most APEX APIs assume the correct APEX workspace, application, and session context.
- Validate user-controlled values before passing them into administrative, security, SQL, or web-service APIs.
- Use the source link for exact behavior, defaults, and version-specific caveats.

## Simple Example

```sql
begin
    apex_util.SET_PREFERENCE(
        p_preference => 'EXAMPLE',
        p_value => 'EXAMPLE',
        p_user => 'USER'
    );
end;
/
```

## More Complex Example

```sql
begin
    -- Assuming this runs inside an APEX page process with the right workspace/app context.
    apex_util.SET_PREFERENCE(
            p_preference => 'EXAMPLE',
            p_value => 'EXAMPLE',
            p_user => 'USER'
        );
end;
/
```

