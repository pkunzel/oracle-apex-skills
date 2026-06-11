# APEX_ERROR.AUTO_SET_ASSOCIATED_ITEM Procedure

Source: [Oracle APEX 26.1 API Reference](https://docs.oracle.com/en/database/oracle/apex/26.1/aeapi/AUTO_SET_ASSOCIATED_ITEM-Procedure.html)

Status: generated detailed reference. Review edge cases against the source before production use.

Parent package: [APEX_ERROR](../APEX_ERROR.md)

## Purpose

This procedure automatically sets the associated page item or tabular form column based on a constraint contained in p_error.ora_sqlerrm .This procedure performs the following:

## When To Use

Use this page when code needs the `APEX_ERROR.AUTO_SET_ASSOCIATED_ITEM` procedure. Confirm security, workspace, and session requirements for your calling context.

## Signature

```sql
APEX_ERROR.AUTO_SET_ASSOCIATED_ITEM (
    p_error_result IN OUT NOCOPY t_error_result,
    p_error        IN            t_error );
```

## Parameters

| Parameter | Description |
| --- | --- |
| `p_error_result` | The result variable of your error handling function. |
| `p_error` | The p_error parameter of your error handling function. |

## Returns

This is a procedure and does not return a value.

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
    l_result apex_error.t_error_result;
begin
    l_result := apex_error.init_error_result(p_error);

    apex_error.auto_set_associated_item(
        p_error_result => l_result,
        p_error        => p_error
    );

    return l_result;
end;
/
```
