# APEX_JAVASCRIPT.ADD_ONLOAD_CODE Procedure

Source: [Oracle APEX 26.1 API Reference](https://docs.oracle.com/en/database/oracle/apex/26.1/aeapi/ADD_ONLOAD_CODE-Procedure.html)

Status: generated detailed reference. Review edge cases against the source before production use.

Parent package: [APEX_JAVASCRIPT](../APEX_JAVASCRIPT.md)

## Purpose

This procedure adds a JavaScript code snippet to the HTML output which the onload event executes. If an entry with the same key exists, it is ignored. If p_key is NULL the snippet is always added.

## When To Use

Use this page when code needs the `APEX_JAVASCRIPT.ADD_ONLOAD_CODE` procedure. Confirm security, workspace, and session requirements for your calling context.

## Signature

```sql
APEX_JAVASCRIPT.ADD_ONLOAD_CODE (
    p_code           IN VARCHAR2,
    p_key            IN VARCHAR2 DEFAULT NULL )
```

## Parameters

| Parameter | Description |
| --- | --- |
| `p_code` | JavaScript code snippet to execute during the onload event. |
| `p_key` | Any name to identify the specified code snippet. If specified, the code snippet is added if there has been no other call with the same p_key . If p_key is NULL the code snippet is always added. |

## Returns

This is a procedure and does not return a value.

## Important Notes

- Most APEX APIs assume the correct APEX workspace, application, and session context.
- Validate user-controlled values before passing them into administrative, security, SQL, or web-service APIs.
- Use the source link for exact behavior, defaults, and version-specific caveats.

## Simple Example

```sql
begin
    apex_javascript.ADD_ONLOAD_CODE(
        p_code => 'EXAMPLE',
        p_key => 'EXAMPLE'
    );
end;
/
```

## More Complex Example

```sql
begin
    -- Assuming this runs inside an APEX page process with the right workspace/app context.
    apex_javascript.ADD_ONLOAD_CODE(
            p_code => 'EXAMPLE',
            p_key => 'EXAMPLE'
        );
end;
/
```

