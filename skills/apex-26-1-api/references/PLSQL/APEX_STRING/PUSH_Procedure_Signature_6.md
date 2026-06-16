# APEX_STRING.PUSH Procedure Signature 6

Source: [Oracle APEX 26.1 API Reference](https://docs.oracle.com/en/database/oracle/apex/26.1/aeapi/PUSH-Procedure-Signature-6.html)

Status: generated detailed reference. Review edge cases against the source before production use.

Parent package: [APEX_STRING](../APEX_STRING.md)

## Purpose

This procedure appends values of a PL/SQL table to the apex_t_varchar2 table.

## When To Use

Use this page when code needs the `APEX_STRING.PUSH` procedure. Confirm security, workspace, and session requirements for your calling context.

## Signature

```sql
APEX_STRING.PUSH (
  p_table  IN OUT NOCOPY apex_t_varchar2,
  p_values IN            apex_application_global.vc_arr2 )
```

## Parameters

| Parameter | Description |
| --- | --- |
| `p_table` | The table. |
| `p_values` | Values to add to p_table . |

## Returns

This is a procedure and does not return a value.

## Important Notes

- Most APEX APIs assume the correct APEX workspace, application, and session context.
- Validate user-controlled values before passing them into administrative, security, SQL, or web-service APIs.
- Use the source link for exact behavior, defaults, and version-specific caveats.

## Simple Example

Append values from a legacy vc_arr2 array into an APEX varchar2 collection.

```sql
declare
    l_target apex_t_varchar2;
    l_source apex_application_global.vc_arr2;
begin
    l_source := apex_string.string_to_table('CSV:PDF:XLSX');

    apex_string.push(
        p_table  => l_target,
        p_values => l_source);
end;
/
```

