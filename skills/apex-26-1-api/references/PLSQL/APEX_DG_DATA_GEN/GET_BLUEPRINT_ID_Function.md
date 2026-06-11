# APEX_DG_DATA_GEN.GET_BLUEPRINT_ID Function

Source: [Oracle APEX 26.1 API Reference](https://docs.oracle.com/en/database/oracle/apex/26.1/aeapi/GET_BLUEPRINT_ID-Function.html)

Status: generated detailed reference. Review edge cases against the source before production use.

Parent package: [APEX_DG_DATA_GEN](../APEX_DG_DATA_GEN.md)

## Purpose

This function returns the blueprint ID from the name.

## When To Use

Use this page when code needs the `APEX_DG_DATA_GEN.GET_BLUEPRINT_ID` function. Confirm security, workspace, and session requirements for your calling context.

## Signature

```sql
APEX_DG_DATA_GEN.GET_BLUEPRINT_ID (
    p_name  IN VARCHAR2 )
    RETURN NUMBER;
```

## Parameters

| Parameter | Description |
| --- | --- |
| `p_name` | The blueprint identifier. |

## Returns

ID of the blueprint.

## Important Notes

- Most APEX APIs assume the correct APEX workspace, application, and session context.
- Validate user-controlled values before passing them into administrative, security, SQL, or web-service APIs.
- Use the source link for exact behavior, defaults, and version-specific caveats.

## Simple Example

```sql
declare
    l_blueprint_id number;
begin
    l_blueprint_id := apex_dg_data_gen.get_blueprint_id(p_blueprint => 'DEMO_ORDER_BP');
    sys.dbms_output.put_line('Blueprint id: ' || l_blueprint_id);
end;
/
```
