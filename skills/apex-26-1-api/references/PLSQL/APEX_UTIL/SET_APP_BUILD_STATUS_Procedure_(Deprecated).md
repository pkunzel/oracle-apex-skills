# APEX_UTIL.SET_APP_BUILD_STATUS Procedure (Deprecated)

Source: [Oracle APEX 26.1 API Reference](https://docs.oracle.com/en/database/oracle/apex/26.1/aeapi/SET_APP_BUILD_STATUS_Procedure.html)

Status: generated detailed reference. Review edge cases against the source before production use.

Parent package: [APEX_UTIL](../APEX_UTIL.md)

## Purpose

Note:

## When To Use

Use this page when code needs the `APEX_UTIL.SET_APP_BUILD_STATUS` procedure. Confirm security, workspace, and session requirements for your calling context.

## Deprecation

This member is marked deprecated in the APEX 26.1 documentation. Prefer the documented replacement when available.

## Signature

```sql
APEX_UTIL.SET_APP_BUILD_STATUS (
    p_application_id  IN NUMBER,
    p_build_status    IN VARCHAR2 )
```

## Parameters

| Parameter | Description |
| --- | --- |
| `p_application_id` | The ID of the application. |
| `p_build_status` | The new build status of the application. Values include: RUN_ONLY - The application can be run but cannot be edited by developers. RUN_AND_BUILD - The application can be run and can also be edited by developers. |

## Returns

This is a procedure and does not return a value.

## Important Notes

- Most APEX APIs assume the correct APEX workspace, application, and session context.
- Validate user-controlled values before passing them into administrative, security, SQL, or web-service APIs.
- Use the source link for exact behavior, defaults, and version-specific caveats.

## Simple Example

```sql
begin
    apex_util.SET_APP_BUILD_STATUS(
        p_application_id => 1,
        p_build_status => 'EXAMPLE'
    );
end;
/
```

