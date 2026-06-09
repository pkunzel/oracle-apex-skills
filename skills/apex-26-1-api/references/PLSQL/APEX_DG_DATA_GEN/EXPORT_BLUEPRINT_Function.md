# APEX_DG_DATA_GEN.EXPORT_BLUEPRINT Function

Source: [Oracle APEX 26.1 API Reference](https://docs.oracle.com/en/database/oracle/apex/26.1/aeapi/EXPORT_BLUEPRINT-Function.html)

Status: generated detailed reference. Review edge cases against the source before production use.

Parent package: [APEX_DG_DATA_GEN](../APEX_DG_DATA_GEN.md)

## Purpose

This function exports a blueprint in JSON format.

## When To Use

Use this page when code needs the `APEX_DG_DATA_GEN.EXPORT_BLUEPRINT` function. Confirm security, workspace, and session requirements for your calling context.

## Signature

```sql
APEX_DG_DATA_GEN.EXPORT_BLUEPRINT (
    p_name                  IN VARCHAR2,
    p_pretty                IN VARCHAR2 DEFAULT 'Y' )
RETURN CLOB;
```

## Parameters

| Parameter | Description |
| --- | --- |
| `p_name` | Name of blueprint to export. |
| `p_pretty` | Y to return pretty results, all other values do not. |

## Returns

Returns the blueprint as a JSON document in a CLOB.

## Important Notes

- Most APEX APIs assume the correct APEX workspace, application, and session context.
- Validate user-controlled values before passing them into administrative, security, SQL, or web-service APIs.
- Use the source link for exact behavior, defaults, and version-specific caveats.

## Simple Example

```sql
declare
    l_result CLOB;
begin
    l_result := apex_dg_data_gen.EXPORT_BLUEPRINT(
        p_name => 'EXAMPLE',
        p_pretty => 'EXAMPLE'
    );
    sys.dbms_output.put_line('Result captured.');
end;
/
```

