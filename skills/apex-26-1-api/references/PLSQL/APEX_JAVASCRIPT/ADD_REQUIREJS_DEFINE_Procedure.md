# APEX_JAVASCRIPT.ADD_REQUIREJS_DEFINE Procedure

Source: [Oracle APEX 26.1 API Reference](https://docs.oracle.com/en/database/oracle/apex/26.1/aeapi/ADD_REQUIREJS_DEFINE-Procedure.html)

Status: generated detailed reference. Review edge cases against the source before production use.

Parent package: [APEX_JAVASCRIPT](../APEX_JAVASCRIPT.md)

## Purpose

This procedure adds a RequireJS define after RequireJS has been loaded to let it know about the existence of a library.

## When To Use

Use this page when code needs the `APEX_JAVASCRIPT.ADD_REQUIREJS_DEFINE` procedure. Confirm security, workspace, and session requirements for your calling context.

## Signature

```sql
APEX_JAVASCRIPT.ADD_REQUIREJS_DEFINE (
    p_module        IN VARCHAR2,
    p_js_expression IN VARCHAR2 )
```

## Parameters

| Parameter | Description |
| --- | --- |
| `p_module` | The module name under which the library is registered in RequireJS . |
| `p_js_expression` | The JavaScript expression whose value is exposed as the export of p_module . |

## Returns

This is a procedure and does not return a value.

## Important Notes

- Most APEX APIs assume the correct APEX workspace, application, and session context.
- Validate user-controlled values before passing them into administrative, security, SQL, or web-service APIs.
- Use the source link for exact behavior, defaults, and version-specific caveats.

## Simple Example

```sql
begin
    apex_javascript.ADD_REQUIREJS_DEFINE(
        p_module => 'EXAMPLE',
        p_js_expression => 'EXAMPLE'
    );
end;
/
```

## More Complex Example

```sql
begin
    -- Assuming this runs inside an APEX page process with the right workspace/app context.
    apex_javascript.ADD_REQUIREJS_DEFINE(
            p_module => 'EXAMPLE',
            p_js_expression => 'EXAMPLE'
        );
end;
/
```

