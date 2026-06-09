# APEX_UTIL.GET_SUPPORTING_OBJECT_SCRIPT Function

Source: [Oracle APEX 26.1 API Reference](https://docs.oracle.com/en/database/oracle/apex/26.1/aeapi/GET_SUPPORTING_OBJECT_SCRIPT-Function.html)

Status: generated detailed reference. Review edge cases against the source before production use.

Parent package: [APEX_UTIL](../APEX_UTIL.md)

## Purpose

This function gets supporting object scripts defined in an application.

## When To Use

Use this page when code needs the `APEX_UTIL.GET_SUPPORTING_OBJECT_SCRIPT` function. Confirm security, workspace, and session requirements for your calling context.

## Signature

```sql
APEX_UTIL.GET_SUPPORTING_OBJECT_SCRIPT (
    p_application_id  IN NUMBER,
    p_script_type     IN VARCHAR2 )
RETURN CLOB;
```

## Parameters

| Parameter | Description |
| --- | --- |
| `p_application_id` | The application ID to get supporting objects from. |
| `p_script_type` | The supporting objects script type. Valid values are apex_util.c_install_script , apex_util.c_upgrade_script , apex_util.c_deinstall_script . |

## Important Notes

- Most APEX APIs assume the correct APEX workspace, application, and session context.
- Validate user-controlled values before passing them into administrative, security, SQL, or web-service APIs.
- Use the source link for exact behavior, defaults, and version-specific caveats.

## Simple Example

```sql
declare
    l_result CLOB;
begin
    l_result := apex_util.GET_SUPPORTING_OBJECT_SCRIPT(
        p_application_id => 1,
        p_script_type => 'EXAMPLE'
    );
    sys.dbms_output.put_line('Result captured.');
end;
/
```

