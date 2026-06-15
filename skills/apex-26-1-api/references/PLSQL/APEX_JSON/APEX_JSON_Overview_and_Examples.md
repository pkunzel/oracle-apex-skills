# APEX_JSON.APEX_JSON Overview and Examples

Source: [Oracle APEX 26.1 API Reference](https://docs.oracle.com/en/database/oracle/apex/26.1/aeapi/Package-Overview-and-Examples.html)

Status: generated detailed reference. Review edge cases against the source before production use.

Parent package: [APEX_JSON](../APEX_JSON.md)

## Purpose

To read from a string that contains JSON data, first use parse() to convert the string to an internal format. Then use the get_% routines (for example, get_varchar2() , get_number() , ...) to access the data and find_paths_like() to search.

## When To Use

Use this page when code needs the `APEX_JSON.APEX_JSON` examples. Confirm security, workspace, and session requirements for your calling context.

## Important Notes

- Most APEX APIs assume the correct APEX workspace, application, and session context.
- Validate user-controlled values before passing them into administrative, security, SQL, or web-service APIs.
- Use the source link for exact behavior, defaults, and version-specific caveats.

## Simple Example

Parse JSON when reading values, and use OPEN_OBJECT/WRITE/CLOSE_OBJECT when generating JSON.

```sql
declare
    l_values apex_json.t_values;
    l_status varchar2(30);
    l_json   clob;
begin
    apex_json.parse(
        p_values => l_values,
        p_source => '{"order":{"id":101,"status":"OPEN"}}'
    );
    l_status := apex_json.get_varchar2(
        p_path   => 'order.status',
        p_values => l_values
    );

    apex_json.initialize_clob_output;
    apex_json.open_object;
    apex_json.write('status', l_status);
    apex_json.close_object;
    l_json := apex_json.get_clob_output;
    apex_json.free_output;
end;
/
```
