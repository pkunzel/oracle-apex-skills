# APEX_STRING.INDEX_OF Function Signature 2

Source: [Oracle APEX 26.1 API Reference](https://docs.oracle.com/en/database/oracle/apex/26.1/aeapi/INDEX_OF-Function-Signature-2.html)

Status: generated detailed reference. Review edge cases against the source before production use.

Parent package: [APEX_STRING](../APEX_STRING.md)

## Purpose

This function returns the first position in the list where p_value is stored. If not found, returns NULL.

## When To Use

Use this page when code needs the `APEX_STRING.INDEX_OF` function. Confirm security, workspace, and session requirements for your calling context.

## Signature

```sql
APEX_STRING.INDEX_OF (
    p_table IN apex_application_global.vc_arr2,
    p_value IN VARCHAR2 )
    RETURN NUMBER;
```

## Parameters

| Parameter | Description |
| --- | --- |
| `p_table` | The table. |
| `p_value` | Value that is being searched for. |

## Returns

Index of the searched value in the table.

## Important Notes

- Most APEX APIs assume the correct APEX workspace, application, and session context.
- Validate user-controlled values before passing them into administrative, security, SQL, or web-service APIs.
- Use the source link for exact behavior, defaults, and version-specific caveats.

## Simple Example

```sql
declare
    l_result NUMBER;
begin
    l_result := apex_string.INDEX_OF(
        p_table => null,
        p_value => 'EXAMPLE'
    );
    sys.dbms_output.put_line('Result captured.');
end;
/
```

