# APEX_UTIL.SET_BUILD_OPTION_STATUS Procedure (Deprecated)

Source: [Oracle APEX 26.1 API Reference](https://docs.oracle.com/en/database/oracle/apex/26.1/aeapi/SET_BUILD_OPTION_STATUS-Procedure.html)

Status: generated detailed reference. Review edge cases against the source before production use.

Parent package: [APEX_UTIL](../APEX_UTIL.md)

## Purpose

Note:

## When To Use

Use this page when code needs the `APEX_UTIL.SET_BUILD_OPTION_STATUS` procedure. Confirm security, workspace, and session requirements for your calling context.

## Deprecation

This member is marked deprecated in the APEX 26.1 documentation. Prefer the documented replacement when available.

## Signature

```sql
APEX_UTIL.SET_BUILD_OPTION_STATUS (
    p_application_id IN NUMBER,
    p_id             IN NUMBER,
    p_build_status   IN VARCHAR2 )
```

## Parameters

| Parameter | Description |
| --- | --- |
| `p_application_id` | The ID of the application that owns the build option under shared components. |
| `p_id` | The ID of the build option in the application. |
| `p_build _status` | The new status of the build option. Possible values are INCLUDE , EXCLUDE both upper case. |

## Returns

This is a procedure and does not return a value.

## Important Notes

- Most APEX APIs assume the correct APEX workspace, application, and session context.
- Validate user-controlled values before passing them into administrative, security, SQL, or web-service APIs.
- Use the source link for exact behavior, defaults, and version-specific caveats.

## Simple Example

Legacy only. Set a build option status by id in older code.

```sql
begin
    apex_util.set_build_option_status(
        p_application_id => :APP_ID,
        p_id             => 123456789,
        p_build_status   => 'INCLUDE');
end;
/
```

