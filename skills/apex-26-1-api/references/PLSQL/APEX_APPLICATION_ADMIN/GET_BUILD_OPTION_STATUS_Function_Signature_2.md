# APEX_APPLICATION_ADMIN.GET_BUILD_OPTION_STATUS Function Signature 2

Source: [Oracle APEX 26.1 API Reference](https://docs.oracle.com/en/database/oracle/apex/26.1/aeapi/APEX_APPLICATION_ADMIN.GET_BUILD_OPTION_STATUS-Function-Signature-2.html)

Status: generated detailed reference. Review edge cases against the source before production use.

Parent package: [APEX_APPLICATION_ADMIN](../APEX_APPLICATION_ADMIN.md)

## Purpose

Note:

## When To Use

Use this page when code needs the `APEX_APPLICATION_ADMIN.GET_BUILD_OPTION_STATUS` function. Confirm security, workspace, and session requirements for your calling context.

## Signature

```sql
APEX_APPLICATION_ADMIN.GET_BUILD_OPTION_STATUS (
    p_application_id    IN NUMBER,
    p_build_option_name IN VARCHAR2 )
RETURN t_build_option_status;
```

## Parameters

| Parameter | Description |
| --- | --- |
| `p_application_id` | The application ID. |
| `p_build_option_name` | The build option Static ID. |

## Important Notes

- Most APEX APIs assume the correct APEX workspace, application, and session context.
- Validate user-controlled values before passing them into administrative, security, SQL, or web-service APIs.
- Use the source link for exact behavior, defaults, and version-specific caveats.

## Simple Example

```sql
declare
    l_result T_BUILD_OPTION_STATUS;
begin
    l_result := apex_application_admin.GET_BUILD_OPTION_STATUS(
        p_application_id => 1,
        p_build_option_name => 'EXAMPLE'
    );
    sys.dbms_output.put_line('Result captured.');
end;
/
```

