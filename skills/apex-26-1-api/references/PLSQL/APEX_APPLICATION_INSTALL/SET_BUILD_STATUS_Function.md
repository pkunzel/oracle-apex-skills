# APEX_APPLICATION_INSTALL.SET_BUILD_STATUS Function

Source: [Oracle APEX 26.1 API Reference](https://docs.oracle.com/en/database/oracle/apex/26.1/aeapi/APEX_APPLICATION_INSTALL.SET_BUILD_STATUS-Function.html)

Status: generated detailed reference. Review edge cases against the source before production use.

Parent package: [APEX_APPLICATION_INSTALL](../APEX_APPLICATION_INSTALL.md)

## Purpose

Use this function to override the build status for applications that are about to be installed.

## When To Use

Use this page when code needs the `APEX_APPLICATION_INSTALL.SET_BUILD_STATUS` function. Confirm security, workspace, and session requirements for your calling context.

## Signature

```sql
APEX_APPLICATION_INSTALL.SET_BUILD_STATUS (
    p_build_status  IN  wwv_flow_application_admin_api.t_build_status )
```

## Parameters

| Parameter | Description |
| --- | --- |
| `p_build_status` | New build status to set the application to. Values include: apex_application_admin.c_build_status_run_and_build - Developers and users can both run and develop the application. apex_application_admin.c_build_status_run_only - Only users can run the application. Developers cannot edit the application. |

## Important Notes

- Most APEX APIs assume the correct APEX workspace, application, and session context.
- Validate user-controlled values before passing them into administrative, security, SQL, or web-service APIs.
- Use the source link for exact behavior, defaults, and version-specific caveats.

## Simple Example

```sql
declare
    l_result varchar2(32767);
begin
    l_result := apex_application_install.SET_BUILD_STATUS(
        p_build_status => null
    );
    sys.dbms_output.put_line('Result captured.');
end;
/
```

## More Complex Example

```sql
declare
    l_result varchar2(32767);
begin
    -- Assuming this runs outside a normal APEX page request.
    apex_session.create_session(
        p_app_id   => 100,
        p_page_id  => 1,
        p_username => 'USER');

    l_result := apex_application_install.SET_BUILD_STATUS(
            p_build_status => null
        );

    apex_session.delete_session;
exception
    when others then
        apex_session.delete_session;
        raise;
end;
/
```

