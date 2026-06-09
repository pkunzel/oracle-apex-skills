# APEX_APPLICATION_ADMIN.GET_PARSING_SCHEMA Function

Source: [Oracle APEX 26.1 API Reference](https://docs.oracle.com/en/database/oracle/apex/26.1/aeapi/APEX_APPLICATION_ADMIN.GET_PARSING_SCHEMA-Function.html)

Status: generated detailed reference. Review edge cases against the source before production use.

Parent package: [APEX_APPLICATION_ADMIN](../APEX_APPLICATION_ADMIN.md)

## Purpose

This function retrieves the parsing schema (or "owner" ) of an application.

## When To Use

Use this page when code needs the `APEX_APPLICATION_ADMIN.GET_PARSING_SCHEMA` function. Confirm security, workspace, and session requirements for your calling context.

## Signature

```sql
APEX_APPLICATION_ADMIN.GET_PARSING_SCHEMA (
    p_application_id    IN  NUMBER )
    RETURN VARCHAR2;
```

## Parameters

| Parameter | Description |
| --- | --- |
| `p_application_id` | The application ID. |

## Important Notes

- Most APEX APIs assume the correct APEX workspace, application, and session context.
- Validate user-controlled values before passing them into administrative, security, SQL, or web-service APIs.
- Use the source link for exact behavior, defaults, and version-specific caveats.

## Simple Example

```sql
declare
    l_result VARCHAR2;
begin
    l_result := apex_application_admin.GET_PARSING_SCHEMA(
        p_application_id => 1
    );
    sys.dbms_output.put_line('Result captured.');
end;
/
```

