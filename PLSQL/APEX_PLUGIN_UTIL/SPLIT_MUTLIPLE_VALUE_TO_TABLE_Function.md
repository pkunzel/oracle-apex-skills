# APEX_PLUGIN_UTIL.SPLIT_MUTLIPLE_VALUE_TO_TABLE Function

Source: [Oracle APEX 26.1 API Reference](https://docs.oracle.com/en/database/oracle/apex/26.1/aeapi/SPLIT_MUTLIPLE_VALUE_TO_TABLE-Function.html)

Status: generated detailed reference. Review edge cases against the source before production use.

Parent package: [APEX_PLUGIN_UTIL](../APEX_PLUGIN_UTIL.md)

## Purpose

This function converts a separated input string into an array.

## When To Use

Use this page when code needs the `APEX_PLUGIN_UTIL.SPLIT_MUTLIPLE_VALUE_TO_TABLE` function. Confirm security, workspace, and session requirements for your calling context.

## Signature

```sql
APEX_PLUGIN_UTIL.SPLIT_MUTLIPLE_VALUE_TO_TABLE (
    p_value IN CLOB,
    p_item  IN apex_plugin_api.t_item )
    RETURN apex_t_varchar2;
```

## Parameters

| Parameter | Description |
| --- | --- |
| `p_value` | The input value. |
| `p_item` | This type contains information about the current item. |

## Returns

An array of strings.

## Important Notes

- Most APEX APIs assume the correct APEX workspace, application, and session context.
- Validate user-controlled values before passing them into administrative, security, SQL, or web-service APIs.
- Use the source link for exact behavior, defaults, and version-specific caveats.

## Simple Example

```sql
declare
    l_result APEX_T_VARCHAR2;
begin
    l_result := apex_plugin_util.SPLIT_MUTLIPLE_VALUE_TO_TABLE(
        p_value => to_clob('Example text'),
        p_item => null
    );
    sys.dbms_output.put_line('Result captured.');
end;
/
```

## More Complex Example

```sql
declare
    l_result APEX_T_VARCHAR2;
begin
    -- Assuming this runs outside a normal APEX page request.
    apex_session.create_session(
        p_app_id   => 100,
        p_page_id  => 1,
        p_username => 'USER');

    l_result := apex_plugin_util.SPLIT_MUTLIPLE_VALUE_TO_TABLE(
            p_value => to_clob('Example text'),
            p_item => null
        );

    apex_session.delete_session;
exception
    when others then
        apex_session.delete_session;
        raise;
end;
/
```

