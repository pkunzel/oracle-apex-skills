# APEX_ERROR.EXTRACT_CONSTRAINT_NAME Function

Source: [Oracle APEX 26.1 API Reference](https://docs.oracle.com/en/database/oracle/apex/26.1/aeapi/EXTRACT_CONSTRAINT_NAME-Function.html)

Status: generated detailed reference. Review edge cases against the source before production use.

Parent package: [APEX_ERROR](../APEX_ERROR.md)

## Purpose

This function extracts a constraint name contained in p_error.ora_sqlerrm . The constraint must match the pattern schema.constraint .

## When To Use

Use this page when code needs the `APEX_ERROR.EXTRACT_CONSTRAINT_NAME` function. Confirm security, workspace, and session requirements for your calling context.

## Signature

```sql
APEX_ERROR.EXTRACT_CONSTRAINT_NAME (
    p_error          IN t_error,
    p_include_schema IN BOOLEAN DEFAULT FALSE )
    RETURN VARCHAR2;
```

## Parameters

| Parameter | Description |
| --- | --- |
| `p_error` | The p_error parameter of your error handling function. |
| `p_include_schema` | If set to TRUE , the result is prefixed with the schema name. For example, HR.DEMO_PRODUCT_INFO_PK . If set to FALSE , only the constraint name is returned. |

## Important Notes

- Most APEX APIs assume the correct APEX workspace, application, and session context.
- Validate user-controlled values before passing them into administrative, security, SQL, or web-service APIs.
- Use the source link for exact behavior, defaults, and version-specific caveats.

## Simple Example

```sql
declare
    l_result VARCHAR2;
begin
    l_result := apex_error.EXTRACT_CONSTRAINT_NAME(
        p_error => null,
        p_include_schema => true
    );
    sys.dbms_output.put_line('Result captured.');
end;
/
```

## More Complex Example

```sql
declare
    l_result VARCHAR2;
begin
    -- Assuming this runs outside a normal APEX page request.
    apex_session.create_session(
        p_app_id   => 100,
        p_page_id  => 1,
        p_username => 'USER');

    l_result := apex_error.EXTRACT_CONSTRAINT_NAME(
            p_error => null,
            p_include_schema => true
        );

    apex_session.delete_session;
exception
    when others then
        apex_session.delete_session;
        raise;
end;
/
```

