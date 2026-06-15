# APEX_INSTANCE_ADMIN.GET_SCHEMAS Function

Source: [Oracle APEX 26.1 API Reference](https://docs.oracle.com/en/database/oracle/apex/26.1/aeapi/GET_SCHEMAS-Function.html)

Status: generated detailed reference. Review edge cases against the source before production use.

Parent package: [APEX_INSTANCE_ADMIN](../APEX_INSTANCE_ADMIN.md)

## Purpose

The GET_SCHEMAS function retrieves a comma-delimited list of schemas that are mapped to a given workspace.

## When To Use

Use this page when code needs the `APEX_INSTANCE_ADMIN.GET_SCHEMAS` function. Confirm security, workspace, and session requirements for your calling context.

## Signature

```sql
APEX_INSTANCE_ADMIN.GET_SCHEMAS (
    p_workspace     IN VARCHAR2 )
RETURN VARCHAR2;
```

## Parameters

| Parameter | Description |
| --- | --- |
| `p_workspace` | The name of the workspace from which to retrieve the schema list. |

## Important Notes

- Most APEX APIs assume the correct APEX workspace, application, and session context.
- Validate user-controlled values before passing them into administrative, security, SQL, or web-service APIs.
- Use the source link for exact behavior, defaults, and version-specific caveats.

## Simple Example

```sql
declare
    l_schemas varchar2(32767);
begin
    l_schemas := apex_instance_admin.get_schemas(
        p_workspace => 'SALES_ANALYTICS'
    );

    sys.dbms_output.put_line('Workspace schemas: ' || l_schemas);
end;
/
```
