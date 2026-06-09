# APEX_JSON.GET_CLOB_OUTPUT Function

Source: [Oracle APEX 26.1 API Reference](https://docs.oracle.com/en/database/oracle/apex/26.1/aeapi/GET_CLOB_OUTPUT-Function.html)

Status: generated detailed reference. Review edge cases against the source before production use.

Parent package: [APEX_JSON](../APEX_JSON.md)

## Purpose

Returns the temporary CLOB that you created with INITIALIZE_CLOB_OUTPUT .

## When To Use

Use this page when code needs the `APEX_JSON.GET_CLOB_OUTPUT` function. Confirm security, workspace, and session requirements for your calling context.

## Signature

```sql
APEX_JSON.GET_CLOB_OUTPUT (
    p_free  IN BOOLEAN  DEFAULT FALSE )
    RETURN CLOB;
```

## Parameters

| Parameter | Description |
| --- | --- |
| `p_free` | If true , frees output resources. Defaults to false. |

## Important Notes

- Most APEX APIs assume the correct APEX workspace, application, and session context.
- Validate user-controlled values before passing them into administrative, security, SQL, or web-service APIs.
- Use the source link for exact behavior, defaults, and version-specific caveats.

## Simple Example

```sql
declare
    l_result CLOB;
begin
    l_result := apex_json.GET_CLOB_OUTPUT(
        p_free => true
    );
    sys.dbms_output.put_line('Result captured.');
end;
/
```

