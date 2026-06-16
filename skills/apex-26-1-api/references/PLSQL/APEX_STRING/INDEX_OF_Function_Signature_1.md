# APEX_STRING.INDEX_OF Function Signature 1

Source: [Oracle APEX 26.1 API Reference](https://docs.oracle.com/en/database/oracle/apex/26.1/aeapi/INDEX_OF-Function-Signature-1.html)

Status: generated detailed reference. Review edge cases against the source before production use.

Parent package: [APEX_STRING](../APEX_STRING.md)

## Purpose

This function returns the first position in the list where p_value is stored. If not found, returns NULL.

## When To Use

Use this page when code needs the `APEX_STRING.INDEX_OF` function. Confirm security, workspace, and session requirements for your calling context.

## Signature

```sql
APEX_STRING.INDEX_OF (
    p_table IN apex_t_varchar2,
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

Check whether a status value is present in an APEX varchar2 collection.

```sql
declare
    l_allowed apex_t_varchar2 := apex_t_varchar2('NEW', 'OPEN', 'CLOSED');
    l_pos     number;
begin
    l_pos := apex_string.index_of(
        p_table => l_allowed,
        p_value => :P10_STATUS);

    if l_pos is null then
        raise_application_error(-20000, 'Unsupported status.');
    end if;
end;
/
```

