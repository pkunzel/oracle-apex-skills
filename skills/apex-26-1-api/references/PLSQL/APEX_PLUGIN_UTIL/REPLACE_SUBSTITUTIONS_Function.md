# APEX_PLUGIN_UTIL.REPLACE_SUBSTITUTIONS Function

Source: [Oracle APEX 26.1 API Reference](https://docs.oracle.com/en/database/oracle/apex/26.1/aeapi/REPLACE_SUBSTITUTIONS-Function.html)

Status: generated detailed reference. Review edge cases against the source before production use.

Parent package: [APEX_PLUGIN_UTIL](../APEX_PLUGIN_UTIL.md)

## Purpose

This function replaces any &ITEM . substitution references with their actual value. If p_escape is set to TRUE , any special characters contained in the value of the referenced item are escaped to prevent Cross-site scripting (XSS) attacks.

## When To Use

Use this page when code needs the `APEX_PLUGIN_UTIL.REPLACE_SUBSTITUTIONS` function. Confirm security, workspace, and session requirements for your calling context.

## Signature

```sql
APEX_PLUGIN_UTIL.REPLACE_SUBSTITUTIONS (
    p_value    IN VARCHAR2,
    p_escape   IN BOOLEAN  DEFAULT TRUE )
    RETURN VARCHAR2;
```

## Parameters

| Parameter | Description |
| --- | --- |
| `p_value` | This value is a string which can contain several &ITEM. references which are replaced by their actual page item values. |
| `p_escape` | If set to TRUE any special characters contained in the value of the referenced item are escaped to prevent Cross-site scripting (XSS) attacks. If set to FALSE , the referenced items are not escaped. |

## Important Notes

- Most APEX APIs assume the correct APEX workspace, application, and session context.
- Validate user-controlled values before passing them into administrative, security, SQL, or web-service APIs.
- Use the source link for exact behavior, defaults, and version-specific caveats.

## Simple Example

```sql
declare
    l_result VARCHAR2;
begin
    l_result := apex_plugin_util.REPLACE_SUBSTITUTIONS(
        p_value => 'EXAMPLE',
        p_escape => true
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

    l_result := apex_plugin_util.REPLACE_SUBSTITUTIONS(
            p_value => 'EXAMPLE',
            p_escape => true
        );

    apex_session.delete_session;
exception
    when others then
        apex_session.delete_session;
        raise;
end;
/
```

