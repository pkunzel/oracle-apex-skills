# APEX_UTIL.SET_APPLICATION_STATUS Procedure (Deprecated)

Source: [Oracle APEX 26.1 API Reference](https://docs.oracle.com/en/database/oracle/apex/26.1/aeapi/SET_APPLICATION_STATUS-Procedure.html)

Status: generated detailed reference. Review edge cases against the source before production use.

Parent package: [APEX_UTIL](../APEX_UTIL.md)

## Purpose

Note:

## When To Use

Use this page when code needs the `APEX_UTIL.SET_APPLICATION_STATUS` procedure. Confirm security, workspace, and session requirements for your calling context.

## Deprecation

This member is marked deprecated in the APEX 26.1 documentation. Prefer the documented replacement when available.

## Signature

```sql
APEX_UTIL.SET_APPLICATION_STATUS (
   p_application_id        IN NUMBER,
   p_application_status    IN VARCHAR2,
   p_unavailable_value     IN VARCHAR2,
   p_restricted_user_list  IN VARCHAR2 )
```

## Parameters

| Parameter | Description |
| --- | --- |
| `p_application_id` | The Application ID. |
| `p_application_status` | New application status. Values include: AVAILABLE - Application is available with no restrictions. AVAILABLE_W_EDIT_LINK - Application is available with no restrictions. Developer Toolbar shown to developers. DEVELOPERS_ONLY - Application only available to developers. RESTRICTED_ACCESS - Application only available to users in p_restricted_user_list . UNAVAILABLE - Application unavailable. Message shown in p_unavailable_value . UNAVAILABLE_PLSQL - Application unavailable. Message shown from PL/SQL block in p_unavailable_value . UNAVAILABLE_URL - Application unavailable. Redirected to URL provided in p_unavailable_value . |
| `p_unavailable_value` | Value used when application is unavailable. This value has different semantics dependent upon value for p_application_status . |
| `p_restricted_user_list` | Comma separated list of users permitted to access application, when p_application_status = RESTRICTED_ACCESS . |

## Returns

This is a procedure and does not return a value.

## Important Notes

- Most APEX APIs assume the correct APEX workspace, application, and session context.
- Validate user-controlled values before passing them into administrative, security, SQL, or web-service APIs.
- Use the source link for exact behavior, defaults, and version-specific caveats.

## Simple Example

```sql
begin
    apex_util.SET_APPLICATION_STATUS(
        p_application_id => 1,
        p_application_status => 'EXAMPLE',
        p_unavailable_value => 'EXAMPLE',
        p_restricted_user_list => 'USER'
    );
end;
/
```

## More Complex Example

```sql
begin
    -- Assuming this runs inside an APEX page process with the right workspace/app context.
    apex_util.SET_APPLICATION_STATUS(
            p_application_id => 1,
            p_application_status => 'EXAMPLE',
            p_unavailable_value => 'EXAMPLE',
            p_restricted_user_list => 'USER'
        );
end;
/
```

