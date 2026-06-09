# APEX_JSON.TO_MEMBER_NAME Function

Source: [Oracle APEX 26.1 API Reference](https://docs.oracle.com/en/database/oracle/apex/26.1/aeapi/To_MEMBER_NAME-Function.html)

Status: generated detailed reference. Review edge cases against the source before production use.

Parent package: [APEX_JSON](../APEX_JSON.md)

## Purpose

This function converts the given string to a JSON member name, usable for accessing values via the get_% functions. Unless member names are simple identifiers ( A-Z,0-9, "_" ), they need to be quoted.

## When To Use

Use this page when code needs the `APEX_JSON.TO_MEMBER_NAME` function. Confirm security, workspace, and session requirements for your calling context.

## Signature

```sql
FUNCTION TO_MEMBER_NAME (
   p_string IN VARCHAR2 )
   RETURN VARCHAR2;
```

## Parameters

| Parameter | Description |
| --- | --- |
| `p_string` | The raw member name. |

## Returns

A valid member name for get_% functions.

## Important Notes

- Most APEX APIs assume the correct APEX workspace, application, and session context.
- Validate user-controlled values before passing them into administrative, security, SQL, or web-service APIs.
- Use the source link for exact behavior, defaults, and version-specific caveats.

## Simple Example

```sql
declare
    l_result VARCHAR2;
begin
    l_result := apex_json.TO_MEMBER_NAME(
        p_string => 'EXAMPLE'
    );
    sys.dbms_output.put_line('Result captured.');
end;
/
```

