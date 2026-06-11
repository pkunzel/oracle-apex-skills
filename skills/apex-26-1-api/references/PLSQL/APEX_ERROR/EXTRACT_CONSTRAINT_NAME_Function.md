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
create or replace function app_error_handler (
    p_error in apex_error.t_error )
    return apex_error.t_error_result
is
    l_result          apex_error.t_error_result;
    l_constraint_name varchar2(255);
begin
    l_result := apex_error.init_error_result(p_error);
    l_constraint_name := apex_error.extract_constraint_name(
        p_error          => p_error,
        p_include_schema => false
    );

    if l_constraint_name = 'ORDERS_CUSTOMER_FK' then
        l_result.message := 'Select a valid customer before saving the order.';
        l_result.page_item_name := 'P10_CUSTOMER_ID';
        l_result.display_location := apex_error.c_inline_with_field_and_notif;
    end if;

    return l_result;
end;
/
```
