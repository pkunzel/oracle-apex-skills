# APEX_REGION.IS_READ_ONLY Function

Source: [Oracle APEX 26.1 API Reference](https://docs.oracle.com/en/database/oracle/apex/26.1/aeapi/APEX_REGION-IS_READ_ONLY-Function.html)

Status: generated detailed reference. Review edge cases against the source before production use.

Parent package: [APEX_REGION](../APEX_REGION.md)

## Purpose

This function returns TRUE if the current region is rendered read-only and FALSE if not. If the function is called from a context where no region is currently processed, it returns NULL . For example, you can use this function in conditions of a region or its underlying items and buttons.

## When To Use

Use this page when code needs the `APEX_REGION.IS_READ_ONLY` function. Confirm security, workspace, and session requirements for your calling context.

## Signature

```sql
FUNCTION IS_READ_ONLY 
RETURN BOOLEAN;
```

## Important Notes

- Most APEX APIs assume the correct APEX workspace, application, and session context.
- Validate user-controlled values before passing them into administrative, security, SQL, or web-service APIs.
- Use the source link for exact behavior, defaults, and version-specific caveats.

## Example

Guard data-changing code when the current region is rendered read-only.

```sql
begin
    if apex_region.is_read_only then
        raise_application_error(-20000, 'This region is read-only.');
    end if;

    update orders
       set status = :P10_STATUS
     where order_id = :P10_ORDER_ID;
end;
/
```
