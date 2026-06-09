# APEX_APPLICATION_ADMIN.SET_BUILD_OPTION_STATUS Procedure Signature 1

Source: [Oracle APEX 26.1 API Reference](https://docs.oracle.com/en/database/oracle/apex/26.1/aeapi/APEX_APPLICATION_ADMIN.SET_BUILD_OPTION_STATUS-Procedure-Signature-1.html)

Status: generated detailed reference. Review edge cases against the source before production use.

Parent package: [APEX_APPLICATION_ADMIN](../APEX_APPLICATION_ADMIN.md)

## Purpose

This procedure sets the status of a build option by ID.

## When To Use

Use this page when code needs the `APEX_APPLICATION_ADMIN.SET_BUILD_OPTION_STATUS` procedure. Confirm security, workspace, and session requirements for your calling context.

## Signature

```sql
APEX_APPLICATION_ADMIN.SET_BUILD_OPTION_STATUS (
    p_application_id   IN NUMBER,
    p_id               IN NUMBER,
    p_build_status     IN t_build_option_status );
```

## Parameters

| Parameter | Description |
| --- | --- |
| `p_application_id` | The application ID. |
| `p_id` | The build option ID. |
| `p_build_status` | Status with possible values: apex_application_admin.c_build_option_status_include apex_application_admin.c_build_option_status_exclude |

## Returns

This is a procedure and does not return a value.

## Important Notes

- Most APEX APIs assume the correct APEX workspace, application, and session context.
- Validate user-controlled values before passing them into administrative, security, SQL, or web-service APIs.
- Use the source link for exact behavior, defaults, and version-specific caveats.

## Simple Example

```sql
begin
    apex_application_admin.SET_BUILD_OPTION_STATUS(
        p_application_id => 1,
        p_id => 1,
        p_build_status => null
    );
end;
/
```

## More Complex Example

```sql
begin
    -- Assuming this runs inside an APEX page process with the right workspace/app context.
    apex_application_admin.SET_BUILD_OPTION_STATUS(
            p_application_id => 1,
            p_id => 1,
            p_build_status => null
        );
end;
/
```

