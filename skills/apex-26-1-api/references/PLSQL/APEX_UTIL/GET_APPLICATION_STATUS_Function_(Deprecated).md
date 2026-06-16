# APEX_UTIL.GET_APPLICATION_STATUS Function (Deprecated)

Source: [Oracle APEX 26.1 API Reference](https://docs.oracle.com/en/database/oracle/apex/26.1/aeapi/GET_APPLICATION_STATUS-Function.html)

Status: generated detailed reference. Review edge cases against the source before production use.

Parent package: [APEX_UTIL](../APEX_UTIL.md)

## Purpose

Note:

## When To Use

Use this page when code needs the `APEX_UTIL.GET_APPLICATION_STATUS` function. Confirm security, workspace, and session requirements for your calling context.

## Deprecation

This member is marked deprecated in the APEX 26.1 documentation. Prefer the documented replacement when available.

## Signature

```sql
APEX_UTIL.GET_APPLICATION_STATUS (
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

Legacy only. Prefer APEX_APPLICATION_ADMIN.GET_APPLICATION_STATUS in new code.

```sql
declare
    l_status varchar2(255);
begin
    l_status := apex_util.get_application_status(
        p_application_id => :APP_ID);
end;
/
```

