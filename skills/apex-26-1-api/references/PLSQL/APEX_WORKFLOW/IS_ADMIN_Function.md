# APEX_WORKFLOW.IS_ADMIN Function

Source: [Oracle APEX 26.1 API Reference](https://docs.oracle.com/en/database/oracle/apex/26.1/aeapi/APEX_WORKFLOW.IS_ADMIN-Function.html)

Status: generated detailed reference. Review edge cases against the source before production use.

Parent package: [APEX_WORKFLOW](../APEX_WORKFLOW.md)

## Purpose

This function checks whether the given user is a business administrator for at least one workflow in this application.

## When To Use

Use this page when code needs the `APEX_WORKFLOW.IS_ADMIN` function. Confirm security, workspace, and session requirements for your calling context.

## Signature

```sql
APEX_WORKFLOW.IS_ADMIN (
    p_user           IN VARCHAR2 DEFAULT apex_security.g_user,
    p_application_id IN NUMBER   DEFAULT NULL )
RETURN BOOLEAN;
```

## Parameters

| Parameter | Description |
| --- | --- |
| `p_user` | The user to check for. Default is logged-in user. |
| `p_application_id` | The application to check for. Default behavior checks against all applications in the workspace. |

## Returns

TRUE if the user given by p_user is defined as a Business Admin for at least one workflow in the given application. Otherwise FALSE .

## Important Notes

- Most APEX APIs assume the correct APEX workspace, application, and session context.
- Validate user-controlled values before passing them into administrative, security, SQL, or web-service APIs.
- Use the source link for exact behavior, defaults, and version-specific caveats.

## Simple Example

```sql
declare
    l_result BOOLEAN;
begin
    l_result := apex_workflow.IS_ADMIN(
        p_user => 'USER',
        p_application_id => 1
    );
    sys.dbms_output.put_line('Result captured.');
end;
/
```

