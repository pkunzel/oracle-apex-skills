# APEX_APPROVAL.IS_BUSINESS_ADMIN Function

Source: [Oracle APEX 26.1 API Reference](https://docs.oracle.com/en/database/oracle/apex/26.1/aeapi/IS_BUSINESS_ADMIN-Function.html)

Status: generated detailed reference. Review edge cases against the source before production use.

Parent package: [APEX_APPROVAL](../APEX_APPROVAL.md)

## Purpose

Caution:

## When To Use

Use this page when code needs the `APEX_APPROVAL.IS_BUSINESS_ADMIN` function. Confirm security, workspace, and session requirements for your calling context.

## Signature

```sql
APEX_APPROVAL.IS_BUSINESS_ADMIN (
    p_user              IN VARCHAR2 DEFAULT apex_application.g_user,
    p_application_id    IN NUMBER   DEFAULT NULL )
RETURN BOOLEAN;
```

## Parameters

| Parameter | Description |
| --- | --- |
| `p_user` | The user to check for. Default is logged-in user. |
| `p_application_id` | The application to check for. Default behavior checks against all applications in the workspace. |

## Returns

TRUE if the user given by p_user is at least in one task definition configured as participant type BUSINESS_ADMIN , FALSE otherwise.

## Important Notes

- Most APEX APIs assume the correct APEX workspace, application, and session context.
- Validate user-controlled values before passing them into administrative, security, SQL, or web-service APIs.
- Use the source link for exact behavior, defaults, and version-specific caveats.

## Simple Example

```sql
declare
    l_is_admin boolean;
begin
    l_is_admin := apex_approval.is_business_admin(
        p_user           => :APP_USER,
        p_application_id => apex_application.g_flow_id
    );

    if l_is_admin then
        sys.dbms_output.put_line(:APP_USER || ' can administer approval tasks.');
    end if;
end;
/
```
