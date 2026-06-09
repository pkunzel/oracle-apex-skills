# APEX_STRING.JOIN Function Signature 1

Source: [Oracle APEX 26.1 API Reference](https://docs.oracle.com/en/database/oracle/apex/26.1/aeapi/JOIN-Function-Signature-1.html)

Status: generated detailed reference. Review edge cases against the source before production use.

Parent package: [APEX_STRING](../APEX_STRING.md)

## Purpose

Returns the values of the apex_t_varchar2 input table p_table as a concatenated varchar2 , separated by p_sep .

## When To Use

Use this page when code needs the `APEX_STRING.JOIN` function. Confirm security, workspace, and session requirements for your calling context.

## Signature

```sql
APEX_STRING.JOIN (
   p_table IN apex_t_varchar2,
   p_sep IN VARCHAR2 DEFAULT apex_application.LF )
   RETURN VARCHAR2
```

## Parameters

| Parameter | Description |
| --- | --- |
| `p_table` | The input table. |
| `p_sep` | The separator, default is line feed. |

## Important Notes

- Most APEX APIs assume the correct APEX workspace, application, and session context.
- Validate user-controlled values before passing them into administrative, security, SQL, or web-service APIs.
- Use the source link for exact behavior, defaults, and version-specific caveats.

## Simple Example

```sql
declare
    l_result VARCHAR2;
begin
    l_result := apex_string.JOIN(
        p_table => 'EXAMPLE',
        p_sep => 'EXAMPLE'
    );
    sys.dbms_output.put_line('Result captured.');
end;
/
```

