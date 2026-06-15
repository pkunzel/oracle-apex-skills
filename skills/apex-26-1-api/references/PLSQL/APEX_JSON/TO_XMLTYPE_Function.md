# APEX_JSON.TO_XMLTYPE Function

Source: [Oracle APEX 26.1 API Reference](https://docs.oracle.com/en/database/oracle/apex/26.1/aeapi/TO_XMLTYPE-Function.html)

Status: generated detailed reference. Review edge cases against the source before production use.

Parent package: [APEX_JSON](../APEX_JSON.md)

## Purpose

This procedure parses a JSON-formatted varchar2 or CLOB and converts it to an xmltype.

## When To Use

Use this page when code needs the `APEX_JSON.TO_XMLTYPE` function. Confirm security, workspace, and session requirements for your calling context.

## Signature

```sql
APEX_JSON.TO_XMLTYPE (
    p_source   IN VARCHAR2,
    p_strict   IN BOOLEAN DEFAULT TRUE )
RETURN sys.xmltype;

APEX_JSON.TO_XMLTYPE (
    p_source   IN CLOB,
    p_strict   IN BOOLEAN DEFAULT TRUE )
RETURN sys.xmltype;
```

## Parameters

| Parameter | Description |
| --- | --- |
| `p_source` | The JSON source ( VARCHAR2 or CLOB ) |
| `p_strict` | If TRUE (default), enforce strict JSON rules |

## Returns

Return Description sys.xmltype An xmltype representation of the JSON data.

## Important Notes

- Most APEX APIs assume the correct APEX workspace, application, and session context.
- Validate user-controlled values before passing them into administrative, security, SQL, or web-service APIs.
- Use the source link for exact behavior, defaults, and version-specific caveats.

## Simple Example

Convert JSON to XMLTYPE so SQL XML functions can query it.

```sql
select x.order_id,
       x.status
from xmltable(
       '/json/order'
       passing apex_json.to_xmltype('{"order":{"order_id":101,"status":"OPEN"}}')
       columns
           order_id number       path 'order_id',
           status   varchar2(30) path 'status'
     ) x
```
