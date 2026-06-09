# APEX_APPLICATION_ADMIN.SET_BUILD_STATUS Procedure

Source: [Oracle APEX 26.1 API Reference](https://docs.oracle.com/en/database/oracle/apex/26.1/aeapi/APEX_APPLICATION_ADMIN.SET_BUILD_STATUS-Procedure.html)

Status: generated detailed reference. Review edge cases against the source before production use.

Parent package: [APEX_APPLICATION_ADMIN](../APEX_APPLICATION_ADMIN.md)

## Purpose

This procedure sets the application build status.

## When To Use

Use this page when code needs the `APEX_APPLICATION_ADMIN.SET_BUILD_STATUS` procedure. Confirm security, workspace, and session requirements for your calling context.

## Signature

```sql
APEX_APPLICATION_ADMIN.SET_BUILD_STATUS (
    p_application_id IN NUMBER,
    p_build_status   IN t_build_status )
```

## Parameters

| Parameter | Description |
| --- | --- |
| `p_application_id` | The application ID. |
| `p_build_status` | New build status to set application to. Values include: RUN_AND_BUILD - Developers and users can both run and develop the application. RUN_ONLY - Users can only run the application. Developers cannot edit the application. |

## Returns

This is a procedure and does not return a value.

## Important Notes

- Most APEX APIs assume the correct APEX workspace, application, and session context.
- Validate user-controlled values before passing them into administrative, security, SQL, or web-service APIs.
- Use the source link for exact behavior, defaults, and version-specific caveats.

## Simple Example

```sql
begin
    apex_application_admin.SET_BUILD_STATUS(
        p_application_id => 1,
        p_build_status => null
    );
end;
/
```

