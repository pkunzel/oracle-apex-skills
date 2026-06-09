# APEX_PLUGIN_UTIL.IS_EQUAL Function

Source: [Oracle APEX 26.1 API Reference](https://docs.oracle.com/en/database/oracle/apex/26.1/aeapi/IS_EQUAL-Function.html)

Status: generated detailed reference. Review edge cases against the source before production use.

Parent package: [APEX_PLUGIN_UTIL](../APEX_PLUGIN_UTIL.md)

## Purpose

This function returns TRUE if both values are equal and FALSE if not. If both values are NULL , TRUE is returned.

## When To Use

Use this page when code needs the `APEX_PLUGIN_UTIL.IS_EQUAL` function. Confirm security, workspace, and session requirements for your calling context.

## Signature

```sql
APEX_PLUGIN_UTIL.IS_EQUAL (
    p_value1 IN VARCHAR2
    p_value2 IN VARCHAR2 )
RETURN BOOLEAN;
```

## Parameters

| Parameter | Description |
| --- | --- |
| `p_value1` | First value to compare. |
| `p_value2` | Second value to compare. |

## Returns

Return Description BOOLEAN Returns TRUE if both values are equal or both values are NULL , otherwise it returns FALSE .

## Important Notes

- Most APEX APIs assume the correct APEX workspace, application, and session context.
- Validate user-controlled values before passing them into administrative, security, SQL, or web-service APIs.
- Use the source link for exact behavior, defaults, and version-specific caveats.

## Simple Example

```sql
declare
    l_result BOOLEAN;
begin
    l_result := apex_plugin_util.IS_EQUAL(
        p_value1 => 'EXAMPLE',
        p_value2 => 'EXAMPLE'
    );
    sys.dbms_output.put_line('Result captured.');
end;
/
```

