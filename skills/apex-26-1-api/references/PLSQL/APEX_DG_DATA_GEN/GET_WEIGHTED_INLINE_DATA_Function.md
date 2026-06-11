# APEX_DG_DATA_GEN.GET_WEIGHTED_INLINE_DATA Function

Source: [Oracle APEX 26.1 API Reference](https://docs.oracle.com/en/database/oracle/apex/26.1/aeapi/GET_WEIGHTED_INLINE_DATA-Function.html)

Status: generated detailed reference. Review edge cases against the source before production use.

Parent package: [APEX_DG_DATA_GEN](../APEX_DG_DATA_GEN.md)

## Purpose

This function returns a list of generated inline rows from a semi colon (;) delimited list of values. For each value add a comma to define weight (such as F,45;M,30 ).

## When To Use

Use this page when code needs the `APEX_DG_DATA_GEN.GET_WEIGHTED_INLINE_DATA` function. Confirm security, workspace, and session requirements for your calling context.

## Signature

```sql
APEX_DG_DATA_GEN.GET_WEIGHTED_INLINE_DATA (
    p_data  IN VARCHAR2 )
    RETURN wwv_flow_t_varchar2
```

## Parameters

| Parameter | Description |
| --- | --- |
| `p_data` | The list of values. |

## Important Notes

- Most APEX APIs assume the correct APEX workspace, application, and session context.
- Validate user-controlled values before passing them into administrative, security, SQL, or web-service APIs.
- Use the source link for exact behavior, defaults, and version-specific caveats.

## Simple Example

```sql
declare
    l_values wwv_flow_t_varchar2;
begin
    l_values := apex_dg_data_gen.get_weighted_inline_data(
        p_data => 'STANDARD,70;EXPRESS,25;OVERNIGHT,5'
    );

    for i in 1 .. least(l_values.count, 10) loop
        sys.dbms_output.put_line(l_values(i));
    end loop;
end;
/
```
