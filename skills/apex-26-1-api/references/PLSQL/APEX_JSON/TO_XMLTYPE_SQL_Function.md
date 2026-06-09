# APEX_JSON.TO_XMLTYPE_SQL Function

Source: [Oracle APEX 26.1 API Reference](https://docs.oracle.com/en/database/oracle/apex/26.1/aeapi/TO_XMLTYPE_SQL-Function.html)

Status: generated detailed reference. Review edge cases against the source before production use.

Parent package: [APEX_JSON](../APEX_JSON.md)

## Purpose

This function parses a JSON-formatted varchar2 or CLOB and converts it to an xmltype. This function overload has the p_strict parameter as VARCHAR2 in order to allow invoking from within a SQL query and having JSON parsing in LAX mode.

## When To Use

Use this page when code needs the `APEX_JSON.TO_XMLTYPE_SQL` function. Confirm security, workspace, and session requirements for your calling context.

## Signature

```sql
APEX_JSON.TO_XMLTYPE_SQL (
    p_source   IN VARCHAR2,
    p_strict   IN VARCHAR2 DEFAULT 'Y' )
RETURN sys.xmltype;

APEX_JSON.TO_XMLTYPE_SQL (
    p_source   IN CLOB,
    p_strict   IN VARCHAR2 DEFAULT 'Y' )
RETURN sys.xmltype;
```

## Parameters

| Parameter | Description |
| --- | --- |
| `p_source` | The JSON source ( VARCHAR2 or CLOB ) |
| `p_strict` | If Y (default), enforce strict JSON rules |

## Returns

An xmltype representation of the json data

## Important Notes

- Most APEX APIs assume the correct APEX workspace, application, and session context.
- Validate user-controlled values before passing them into administrative, security, SQL, or web-service APIs.
- Use the source link for exact behavior, defaults, and version-specific caveats.

## Simple Example

```sql
declare
    l_result SYS.XMLTYPE;
begin
    l_result := apex_json.TO_XMLTYPE_SQL(
        p_source => to_clob('Example text'),
        p_strict => 'EXAMPLE'
    );
    sys.dbms_output.put_line('Result captured.');
end;
/
```

