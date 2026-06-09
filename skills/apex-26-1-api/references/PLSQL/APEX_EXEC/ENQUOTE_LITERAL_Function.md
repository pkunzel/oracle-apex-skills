# APEX_EXEC.ENQUOTE_LITERAL Function

Source: [Oracle APEX 26.1 API Reference](https://docs.oracle.com/en/database/oracle/apex/26.1/aeapi/APEX_EXEC.ENQUOTE_LITERAL-Function.html)

Status: generated detailed reference. Review edge cases against the source before production use.

Parent package: [APEX_EXEC](../APEX_EXEC.md)

## Purpose

This function enquotes a string literal and escape contained quotes. This function works for all database types supported by Oracle APEX over REST-enabled SQL.

## When To Use

Use this page when code needs the `APEX_EXEC.ENQUOTE_LITERAL` function. Confirm security, workspace, and session requirements for your calling context.

## Signature

```sql
APEX_EXEC.ENQUOTE_LITERAL (
    p_str               IN VARCHAR2,
    p_for_database      IN t_database_type DEFAULT NULL )
RETURN VARCHAR2;
```

## Parameters

| Parameter | Description |
| --- | --- |
| `p_str` | String literal to enquote. |
| `p_for_database` | Target database to enquote for. If omitted, the function enquotes for the target database of the currently executed region. |

## Returns

This function returns the enquoted string literal.

## Important Notes

- Most APEX APIs assume the correct APEX workspace, application, and session context.
- Validate user-controlled values before passing them into administrative, security, SQL, or web-service APIs.
- Use the source link for exact behavior, defaults, and version-specific caveats.

## Simple Example

```sql
declare
    l_result VARCHAR2;
begin
    l_result := apex_exec.ENQUOTE_LITERAL(
        p_str => 'EXAMPLE',
        p_for_database => null
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

    l_result := apex_exec.ENQUOTE_LITERAL(
            p_str => 'EXAMPLE',
            p_for_database => null
        );

    apex_session.delete_session;
exception
    when others then
        apex_session.delete_session;
        raise;
end;
/
```

