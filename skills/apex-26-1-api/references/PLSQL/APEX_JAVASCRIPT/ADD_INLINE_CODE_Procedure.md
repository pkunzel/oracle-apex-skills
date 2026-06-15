# APEX_JAVASCRIPT.ADD_INLINE_CODE Procedure

Source: [Oracle APEX 26.1 API Reference](https://docs.oracle.com/en/database/oracle/apex/26.1/aeapi/ADD_INLINE_CODE-Procedure.html)

Status: generated detailed reference. Review edge cases against the source before production use.

Parent package: [APEX_JAVASCRIPT](../APEX_JAVASCRIPT.md)

## Purpose

This procedure adds a code snippet that is included inline into the HTML output. For example, you can use this procedure to add new functions or global variable declarations.

## When To Use

Use this page when code needs the `APEX_JAVASCRIPT.ADD_INLINE_CODE` procedure. Confirm security, workspace, and session requirements for your calling context.

## Signature

```sql
APEX_JAVASCRIPT.ADD_INLINE_CODE (
    p_code       IN VARCHAR2,
    p_key        IN VARCHAR2 DEFAULT NULL )
```

## Parameters

| Parameter | Description |
| --- | --- |
| `p_code` | JavaScript code snippet. For example: $s('P1_TEST',123); |
| `p_key` | Identifier for the code snippet. If specified and a code snippet with the same name has already been added, the new code snippet is ignored. If p_key is NULL the snippet is always added. |

## Returns

This is a procedure and does not return a value.

## Important Notes

- Most APEX APIs assume the correct APEX workspace, application, and session context.
- Validate user-controlled values before passing them into administrative, security, SQL, or web-service APIs.
- Use the source link for exact behavior, defaults, and version-specific caveats.

## Simple Example

Add inline JavaScript once per page rendering by supplying a stable key.

```sql
begin
    apex_javascript.add_inline_code(
        p_code => 'window.orderSearch = { pageItem: "P10_SEARCH" };',
        p_key  => 'order-search-config'
    );
end;
/
```
