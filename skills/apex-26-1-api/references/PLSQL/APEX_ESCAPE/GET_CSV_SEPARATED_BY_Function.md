# APEX_ESCAPE.GET_CSV_SEPARATED_BY Function

Source: [Oracle APEX 26.1 API Reference](https://docs.oracle.com/en/database/oracle/apex/26.1/aeapi/GET_CSV_SEPARATED_BY-Function.html)

Status: generated detailed reference. Review edge cases against the source before production use.

Parent package: [APEX_ESCAPE](../APEX_ESCAPE.md)

## Purpose

This function returns the CSV separated by character.

## When To Use

Use this page when code needs the `APEX_ESCAPE.GET_CSV_SEPARATED_BY` function. Confirm security, workspace, and session requirements for your calling context.

## Signature

```sql
APEX_ESCAPE.GET_CSV_SEPARATED_BY
    RETURN VARCHAR2;
```

## Parameters

| Parameter | Description |
| --- | --- |
| `None.` | None. |

## Important Notes

- Most APEX APIs assume the correct APEX workspace, application, and session context.
- Validate user-controlled values before passing them into administrative, security, SQL, or web-service APIs.
- Use the source link for exact behavior, defaults, and version-specific caveats.

## Simple Example

```sql
declare
    l_result VARCHAR2;
begin
    l_result := apex_escape.GET_CSV_SEPARATED_BY;
    sys.dbms_output.put_line('Result captured.');
end;
/
```

