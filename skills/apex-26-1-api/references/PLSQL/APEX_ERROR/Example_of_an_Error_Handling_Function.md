# APEX_ERROR.Example of an Error Handling Function

Source: [Oracle APEX 26.1 API Reference](https://docs.oracle.com/en/database/oracle/apex/26.1/aeapi/Example-of-an-Error-Handling-Function.html)

Status: generated detailed reference. Review edge cases against the source before production use.

Parent package: [APEX_ERROR](../APEX_ERROR.md)

## Purpose

The following is an example of an error handling function.

## When To Use

Use this page when code needs the `APEX_ERROR.Example of an Error Handling Function` example. Confirm security, workspace, and session requirements for your calling context.

## Important Notes

- Most APEX APIs assume the correct APEX workspace, application, and session context.
- Validate user-controlled values before passing them into administrative, security, SQL, or web-service APIs.
- Use the source link for exact behavior, defaults, and version-specific caveats.

## Example

```sql
create or replace function app_error_handler (
    p_error in apex_error.t_error )
    return apex_error.t_error_result
is
    l_result          apex_error.t_error_result;
    l_constraint_name varchar2(255);
begin
    l_result := apex_error.init_error_result(p_error);

    if p_error.is_internal_error and not p_error.is_common_runtime_error then
        l_result.message := 'An unexpected application error occurred.';
        l_result.additional_info := null;
    elsif p_error.ora_sqlcode in (-1, -2291, -2292) then
        l_constraint_name := apex_error.extract_constraint_name(p_error);

        if l_constraint_name = 'ORDERS_CUSTOMER_FK' then
            l_result.message := 'Choose an existing customer before saving the order.';
            l_result.display_location := apex_error.c_inline_with_field_and_notif;
            l_result.page_item_name := 'P10_CUSTOMER_ID';
        end if;
    end if;

    apex_error.auto_set_associated_item(
        p_error_result => l_result,
        p_error        => p_error
    );

    return l_result;
end;
/
```
