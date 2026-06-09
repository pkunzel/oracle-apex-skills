# APEX_CUSTOM_AUTH.APPLICATION_PAGE_ITEM_EXISTS Function

Source: [Oracle APEX 26.1 API Reference](https://docs.oracle.com/en/database/oracle/apex/26.1/aeapi/APPLICATION_PAGE_ITEM_EXISTS-Function.html)

Status: generated detailed reference. Review edge cases against the source before production use.

Parent package: [APEX_CUSTOM_AUTH](../APEX_CUSTOM_AUTH.md)

## Purpose

This function checks for the existence of a page-level item within the current page of an application. This function requires the parameter p_item_name . This function returns a Boolean value (TRUE or FALSE).

## When To Use

Use this page when code needs the `APEX_CUSTOM_AUTH.APPLICATION_PAGE_ITEM_EXISTS` function. Confirm security, workspace, and session requirements for your calling context.

## Signature

```sql
APEX_CUSTOM_AUTH.APPLICATION_PAGE_ITEM_EXISTS (
    p_item_name   IN    VARCHAR2 )
RETURN BOOLEAN;
```

## Parameters

| Parameter | Description |
| --- | --- |
| `p_item_name` | The name of the page-level item. |

## Important Notes

- Most APEX APIs assume the correct APEX workspace, application, and session context.
- Validate user-controlled values before passing them into administrative, security, SQL, or web-service APIs.
- Use the source link for exact behavior, defaults, and version-specific caveats.

## Simple Example

```sql
declare
    l_result BOOLEAN;
begin
    l_result := apex_custom_auth.APPLICATION_PAGE_ITEM_EXISTS(
        p_item_name => 'EXAMPLE'
    );
    sys.dbms_output.put_line('Result captured.');
end;
/
```

