# APEX_UTIL.SET_EDITION Procedure

Source: [Oracle APEX 26.1 API Reference](https://docs.oracle.com/en/database/oracle/apex/26.1/aeapi/SET_EDITION-Procedure.html)

Status: generated detailed reference. Review edge cases against the source before production use.

Parent package: [APEX_UTIL](../APEX_UTIL.md)

## Purpose

This procedure sets the name of the edition to be used in all application SQL parsed in the current page view or page submission.

## When To Use

Use this page when code needs the `APEX_UTIL.SET_EDITION` procedure. Confirm security, workspace, and session requirements for your calling context.

## Signature

```sql
APEX_UTIL.SET_EDITION (
    p_edition IN VARCHAR2 );
```

## Parameters

| Parameter | Description |
| --- | --- |
| `p_edition` | Edition name. |

## Returns

This is a procedure and does not return a value.

## Important Notes

- Most APEX APIs assume the correct APEX workspace, application, and session context.
- Validate user-controlled values before passing them into administrative, security, SQL, or web-service APIs.
- Use the source link for exact behavior, defaults, and version-specific caveats.

## Simple Example

Set the database edition for the current APEX request.

```sql
begin
    apex_util.set_edition(
        p_edition => 'APP_V2');
end;
/
```

