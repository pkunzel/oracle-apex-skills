# APEX_UTIL.GET_BUILD_OPTION_STATUS Function Signature 1 (Deprecated)

Source: [Oracle APEX 26.1 API Reference](https://docs.oracle.com/en/database/oracle/apex/26.1/aeapi/GET_BUILD_OPTION_STATUS-Function-Signature-1.html)

Status: generated detailed reference. Review edge cases against the source before production use.

Parent package: [APEX_UTIL](../APEX_UTIL.md)

## Purpose

Note:

## When To Use

Use this page when code needs the `APEX_UTIL.GET_BUILD_OPTION_STATUS` function. Confirm security, workspace, and session requirements for your calling context.

## Deprecation

This member is marked deprecated in the APEX 26.1 documentation. Prefer the documented replacement when available.

## Signature

```sql
FUNCTION get_build_option_status(
    p_application_id   IN NUMBER,
    p_id               IN NUMBER )
    RETURN varchar2;
```

## Parameters

| Parameter | Description |
| --- | --- |
| `p_application_id` | The ID of the application that owns the build option under shared components. |
| `p_id` | The ID of the build option in the application. |

## Important Notes

- Most APEX APIs assume the correct APEX workspace, application, and session context.
- Validate user-controlled values before passing them into administrative, security, SQL, or web-service APIs.
- Use the source link for exact behavior, defaults, and version-specific caveats.

## Simple Example

Legacy only. Check a build option by id in older code.

```sql
declare
    l_status varchar2(255);
begin
    l_status := apex_util.get_build_option_status(
        p_application_id => :APP_ID,
        p_id             => 123456789);
end;
/
```

