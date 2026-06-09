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

## Simple Example

```sql
declare
    l_result BOOLEAN;
begin
    l_result := apex_region.IS_READ_ONLY;
    sys.dbms_output.put_line('Result captured.');
end;
/
```

## More Complex Example

```sql
declare
    l_result BOOLEAN;
begin
    -- Assuming this runs outside a normal APEX page request.
    apex_session.create_session(
        p_app_id   => 100,
        p_page_id  => 1,
        p_username => 'USER');

    l_result := apex_region.IS_READ_ONLY;

    apex_session.delete_session;
exception
    when others then
        apex_session.delete_session;
        raise;
end;
/
```

