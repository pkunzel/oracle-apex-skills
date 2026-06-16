# APEX_STRING.SHUFFLE Function

Source: [Oracle APEX 26.1 API Reference](https://docs.oracle.com/en/database/oracle/apex/26.1/aeapi/SHUFFLE-Function.html)

Status: generated detailed reference. Review edge cases against the source before production use.

Parent package: [APEX_STRING](../APEX_STRING.md)

## Purpose

Returns the input table values, re-ordered.

## When To Use

Use this page when code needs the `APEX_STRING.SHUFFLE` function. Confirm security, workspace, and session requirements for your calling context.

## Signature

```sql
APEX_STRING.SHUFFLE (
    p_table IN apex_t_varchar2 )
    RETURN apex_t_varchar2;
```

## Parameters

| Parameter | Description |
| --- | --- |
| `p_table` | The input table. |

## Important Notes

- Most APEX APIs assume the correct APEX workspace, application, and session context.
- Validate user-controlled values before passing them into administrative, security, SQL, or web-service APIs.
- Use the source link for exact behavior, defaults, and version-specific caveats.

## Simple Example

Return a shuffled copy of a collection without changing the original variable.

```sql
declare
    l_choices  apex_t_varchar2 := apex_t_varchar2('A', 'B', 'C', 'D');
    l_shuffled apex_t_varchar2;
begin
    l_shuffled := apex_string.shuffle(
        p_table => l_choices);
end;
/
```

