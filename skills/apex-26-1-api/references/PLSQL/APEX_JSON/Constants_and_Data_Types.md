# APEX_JSON.Constants and Data Types

Source: [Oracle APEX 26.1 API Reference](https://docs.oracle.com/en/database/oracle/apex/26.1/aeapi/APEX_JSON-Constants-and-Data-Types.html)

Status: generated detailed reference. Review edge cases against the source before production use.

Parent package: [APEX_JSON](../APEX_JSON.md)

## Purpose

Covers the documented constants APEX_JSON.Constants and Data Types.

## When To Use

Use this page when code needs the `APEX_JSON.Constants and Data Types` constants. Confirm security, workspace, and session requirements for your calling context.

## Important Notes

- Most APEX APIs assume the correct APEX workspace, application, and session context.
- Validate user-controlled values before passing them into administrative, security, SQL, or web-service APIs.
- Use the source link for exact behavior, defaults, and version-specific caveats.

## Simple Example

Use APEX_JSON.T_VALUES when you want to parse JSON once and read several paths from it.

```sql
declare
    l_values apex_json.t_values;
    l_order_id number;
    l_status   varchar2(30);

begin
    apex_json.parse(
        p_values => l_values,
        p_source => '{"order":{"id":101,"status":"OPEN","total":1250.75,"created":"2026-06-15T12:30:00Z","expedited":true,"lines":[{"sku":"A100","qty":2},{"sku":"B200","qty":1}]}}'
    );

    l_order_id := apex_json.get_number(p_path => 'order.id', p_values => l_values);
    l_status   := apex_json.get_varchar2(p_path => 'order.status', p_values => l_values);

    apex_debug.info('Order %s is %s', l_order_id, l_status);

end;
/
```
