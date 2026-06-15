# APEX_JSON.WRITE Procedure Signature 15

Source: [Oracle APEX 26.1 API Reference](https://docs.oracle.com/en/database/oracle/apex/26.1/aeapi/WRITE-Procedure-Signature-15.html)

Status: generated detailed reference. Review edge cases against the source before production use.

Parent package: [APEX_JSON](../APEX_JSON.md)

## Purpose

Covers the documented procedure APEX_JSON.WRITE.

## When To Use

Use this page when code needs the `APEX_JSON.WRITE` procedure. Confirm security, workspace, and session requirements for your calling context.

## Signature

```sql
APEX_JSON.WRITE (
    p_name         IN VARCHAR2,
    p_value        IN sys.xmltype,
    p_write_null   IN BOOLEAN  DEFAULT FALSE );
```

## Parameters

| Parameter | Description |
| --- | --- |
| `p_name` | The attribute name. |
| `p_value` | The value to be written. The XML is converted to JSON |
| `p_write_null` | If TRUE, write NULL values. If FALSE (default), do not write NULL s. |

## Returns

This is a procedure and does not return a value.

## Important Notes

- Most APEX APIs assume the correct APEX workspace, application, and session context.
- Validate user-controlled values before passing them into administrative, security, SQL, or web-service APIs.
- Use the source link for exact behavior, defaults, and version-specific caveats.

## Simple Example

Generate JSON into a temporary CLOB so the result can be stored, returned, or inspected before it is sent.

```sql
declare
    l_json clob;
begin
    apex_json.initialize_clob_output;

    apex_json.open_object;
    apex_json.write(p_name => 'orderXml', p_value => sys.xmltype('<order><id>101</id><status>OPEN</status></order>'), p_write_null => false);
    apex_json.close_object;

    l_json := apex_json.get_clob_output;
    apex_debug.info('JSON payload: %s', dbms_lob.substr(l_json, 4000, 1));
    apex_json.free_output;
end;
/
```
