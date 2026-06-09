# APEX_APP_OBJECT_DEPENDENCY.SCAN Procedure

Source: [Oracle APEX 26.1 API Reference](https://docs.oracle.com/en/database/oracle/apex/26.1/aeapi/APEX_APP_OBJECT_DEPENDENCY.SCAN-Procedure.html)

Status: generated detailed reference. Review edge cases against the source before production use.

Parent package: [APEX_APP_OBJECT_DEPENDENCY](../APEX_APP_OBJECT_DEPENDENCY.md)

## Purpose

This procedure generates the object dependency report.

## When To Use

Use this page when code needs the `APEX_APP_OBJECT_DEPENDENCY.SCAN` procedure. Confirm security, workspace, and session requirements for your calling context.

## Signature

```sql
APEX_APP_OBJECT_DEPENDENCY.SCAN (
    p_application_id IN NUMBER,
    p_page_id        IN NUMBER   DEFAULT NULL,
    p_options        IN VARCHAR2 DEFAULT c_option_all )
```

## Parameters

| Parameter | Description |
| --- | --- |
| `p_application_id` | ID of the application to be analyzed. |
| `p_page_id` | Set this parameter to analyze a single page of an application. |
| `p_options` | Options include: c_option_all - (Default) Scan all sources. c_option_dependencies - Only scan for top-level dependencies with dba_dependencies . c_option_identifiers - Scan for detailed dependencies with PL/Scope where available. This enables detection of dependencies on columns in tables and views, and also member functions and procedures within packages compiled with identifiers:all . c_option_errors - Scan neither (report compilation errors only). |

## Returns

This is a procedure and does not return a value.

## Important Notes

- Most APEX APIs assume the correct APEX workspace, application, and session context.
- Validate user-controlled values before passing them into administrative, security, SQL, or web-service APIs.
- Use the source link for exact behavior, defaults, and version-specific caveats.

## Simple Example

```sql
begin
    apex_app_object_dependency.SCAN(
        p_application_id => 1,
        p_page_id => 1,
        p_options => 'EXAMPLE'
    );
end;
/
```

## More Complex Example

```sql
begin
    -- Assuming this runs inside an APEX page process with the right workspace/app context.
    apex_app_object_dependency.SCAN(
            p_application_id => 1,
            p_page_id => 1,
            p_options => 'EXAMPLE'
        );
end;
/
```

