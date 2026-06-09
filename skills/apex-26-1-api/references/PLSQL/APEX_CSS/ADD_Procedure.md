# APEX_CSS.ADD Procedure

Source: [Oracle APEX 26.1 API Reference](https://docs.oracle.com/en/database/oracle/apex/26.1/aeapi/ADD-Procedure.html)

Status: generated detailed reference. Review edge cases against the source before production use.

Parent package: [APEX_CSS](../APEX_CSS.md)

## Purpose

This procedure adds a CSS style snippet that is included inline in the HTML output. Use this procedure to add new CSS style declarations.

## When To Use

Use this page when code needs the `APEX_CSS.ADD` procedure. Confirm security, workspace, and session requirements for your calling context.

## Signature

```sql
APEX_CSS.ADD (
    p_css   IN  VARCHAR2,
    p_key   IN  VARCHAR2  DEFAULT NULL )
```

## Parameters

| Parameter | Description |
| --- | --- |
| `p_css` | The CSS style snippet. For example, #test {color:#fff} |
| `p_key` | Identifier for the style snippet. If specified and a style snippet with the same name has already been added the new style snippet will be ignored. |

## Returns

This is a procedure and does not return a value.

## Important Notes

- Most APEX APIs assume the correct APEX workspace, application, and session context.
- Validate user-controlled values before passing them into administrative, security, SQL, or web-service APIs.
- Use the source link for exact behavior, defaults, and version-specific caveats.

## Simple Example

```sql
begin
    apex_css.ADD(
        p_css => 'EXAMPLE',
        p_key => 'EXAMPLE'
    );
end;
/
```

