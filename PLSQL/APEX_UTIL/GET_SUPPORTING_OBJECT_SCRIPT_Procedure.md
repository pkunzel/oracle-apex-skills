# APEX_UTIL.GET_SUPPORTING_OBJECT_SCRIPT Procedure

Source: [Oracle APEX 26.1 API Reference](https://docs.oracle.com/en/database/oracle/apex/26.1/aeapi/GET_SUPPORTING_OBJECT_SCRIPT-Procedure.html)

Status: generated detailed reference. Review edge cases against the source before production use.

Parent package: [APEX_UTIL](../APEX_UTIL.md)

## Purpose

This procedure gets supporting object scripts and outputs to sys.dbms_output buffer or download as a file.

## When To Use

Use this page when code needs the `APEX_UTIL.GET_SUPPORTING_OBJECT_SCRIPT` procedure. Confirm security, workspace, and session requirements for your calling context.

## Signature

```sql
APEX_UTIL.GET_SUPPORTING_OBJECT_SCRIPT (
    p_application_id  IN NUMBER,
    p_script_type     IN VARCHAR2,
    p_output_type     IN VARCHAR2 DEFAULT c_output_as_dbms_output );
```

## Parameters

| Parameter | Description |
| --- | --- |
| `p_application_id` | The application ID to get supporting objects from. |
| `p_script_type` | The supporting objects script type. Valid values are apex_util.c_install_script , apex_util.c_upgrade_script , apex_util.c_deinstall_script . |
| `p_output_type` | The script can be output to sys.dbms_output buffer or download as a file. Valid values are apex_util.c_output_as_dbms_output , apex_util.c_output_as_file . The default is c_output_as_dbms_output . |

## Returns

This is a procedure and does not return a value.

## Important Notes

- Most APEX APIs assume the correct APEX workspace, application, and session context.
- Validate user-controlled values before passing them into administrative, security, SQL, or web-service APIs.
- Use the source link for exact behavior, defaults, and version-specific caveats.

## Simple Example

```sql
begin
    apex_util.GET_SUPPORTING_OBJECT_SCRIPT(
        p_application_id => 1,
        p_script_type => 'EXAMPLE',
        p_output_type => 'EXAMPLE'
    );
end;
/
```

## More Complex Example

```sql
begin
    -- Assuming this runs inside an APEX page process with the right workspace/app context.
    apex_util.GET_SUPPORTING_OBJECT_SCRIPT(
            p_application_id => 1,
            p_script_type => 'EXAMPLE',
            p_output_type => 'EXAMPLE'
        );
end;
/
```

