# APEX_JSON.OPEN_ARRAY Procedure

Source: [Oracle APEX 26.1 API Reference](https://docs.oracle.com/en/database/oracle/apex/26.1/aeapi/OPEN_ARRAY-Procedure.html)

Status: generated detailed reference. Review edge cases against the source before production use.

Parent package: [APEX_JSON](../APEX_JSON.md)

## Purpose

This procedure writes an open bracket symbol as follows:

## When To Use

Use this page when code needs the `APEX_JSON.OPEN_ARRAY` procedure. Confirm security, workspace, and session requirements for your calling context.

## Signature

```sql
APEX_JSON.OPEN_ARRAY (
    p_name     IN VARCHAR2 DEFAULT NULL )
```

## Parameters

| Parameter | Description |
| --- | --- |
| `p_name` | If not null, write an object attribute name and colon before the opening bracket. |

## Returns

This is a procedure and does not return a value.

## Important Notes

- Most APEX APIs assume the correct APEX workspace, application, and session context.
- Validate user-controlled values before passing them into administrative, security, SQL, or web-service APIs.
- Use the source link for exact behavior, defaults, and version-specific caveats.

## Simple Example

Open a named JSON array inside an object.

```sql
declare
    l_json clob;
begin
    apex_json.initialize_clob_output;

    apex_json.open_object;
    apex_json.open_array('statuses');
    apex_json.write('OPEN');
    apex_json.write('CLOSED');
    apex_json.close_array;
    apex_json.close_object;

    l_json := apex_json.get_clob_output;
    apex_debug.info('JSON payload: %s', dbms_lob.substr(l_json, 4000, 1));
    apex_json.free_output;
end;
/
```
