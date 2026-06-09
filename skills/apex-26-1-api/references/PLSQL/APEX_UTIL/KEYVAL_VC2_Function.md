# APEX_UTIL.KEYVAL_VC2 Function

Source: [Oracle APEX 26.1 API Reference](https://docs.oracle.com/en/database/oracle/apex/26.1/aeapi/KEYVAL_VC2-Function.html)

Status: generated detailed reference. Review edge cases against the source before production use.

Parent package: [APEX_UTIL](../APEX_UTIL.md)

## Purpose

This function gets the value of the package variable ( apex_utilities.g_val_vc2 ) set by APEX_UTIL.SAVEKEY_VC2 .

## When To Use

Use this page when code needs the `APEX_UTIL.KEYVAL_VC2` function. Confirm security, workspace, and session requirements for your calling context.

## Signature

```sql
APEX_UTIL.KEYVAL_VC2;
```

## Important Notes

- Most APEX APIs assume the correct APEX workspace, application, and session context.
- Validate user-controlled values before passing them into administrative, security, SQL, or web-service APIs.
- Use the source link for exact behavior, defaults, and version-specific caveats.

## Simple Example

```sql
declare
    l_result varchar2(32767);
begin
    l_result := apex_util.KEYVAL_VC2;
    sys.dbms_output.put_line('Result captured.');
end;
/
```

## More Complex Example

```sql
declare
    l_result varchar2(32767);
begin
    -- Assuming this runs outside a normal APEX page request.
    apex_session.create_session(
        p_app_id   => 100,
        p_page_id  => 1,
        p_username => 'USER');

    l_result := apex_util.KEYVAL_VC2;

    apex_session.delete_session;
exception
    when others then
        apex_session.delete_session;
        raise;
end;
/
```

