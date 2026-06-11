# APEX_ERROR.GET_FIRST_ORA_ERROR_TEXT Function

Source: [Oracle APEX 26.1 API Reference](https://docs.oracle.com/en/database/oracle/apex/26.1/aeapi/GET_FIRST_ORA_ERROR_TEXT-Function.html)

Status: generated detailed reference. Review edge cases against the source before production use.

Parent package: [APEX_ERROR](../APEX_ERROR.md)

## Purpose

This function returns the first ORA error message text stored in p_error.ora_sqlerrm . If p_error_ora_sqlerrm does not contain a value, NULL is returned.

## When To Use

Use this page when code needs the `APEX_ERROR.GET_FIRST_ORA_ERROR_TEXT` function. Confirm security, workspace, and session requirements for your calling context.

## Signature

```sql
APEX_ERROR.GET_FIRST_ORA_ERROR_TEXT (
    p_error            IN t_error,
    p_include_error_no IN BOOLEAN DEFAULT FALSE )
    RETURN VARCHAR2;
```

## Parameters

| Parameter | Description |
| --- | --- |
| `p_error` | The p_error parameter of your error handling function. |
| `p_include_error_no` | If set to TRUE , ORA-xxxx is included in the returned error message. If set to FALSE , only the error message text is returned. |

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

    if p_error.ora_sqlerrm is not null then
        l_result.message := apex_error.get_first_ora_error_text(
            p_error            => p_error,
            p_include_error_no => false
        );
    end if;

    return l_result;
end;
/
```
