# APEX_ESCAPE.SET_HTML_ESCAPING_MODE Procedure

Source: [Oracle APEX 26.1 API Reference](https://docs.oracle.com/en/database/oracle/apex/26.1/aeapi/SET_HTML_ESCAPING_MODE-Procedure.html)

Status: generated detailed reference. Review edge cases against the source before production use.

Parent package: [APEX_ESCAPE](../APEX_ESCAPE.md)

## Purpose

The SET_HTML_ESCAPING_MODE procedure configures HTML escaping mode for apex_escape.html .

## When To Use

Use this page when code needs the `APEX_ESCAPE.SET_HTML_ESCAPING_MODE` procedure. Confirm security, workspace, and session requirements for your calling context.

## Signature

```sql
APEX_ESCAPE.SET_HTML_ESCAPING_MODE (
    p_mode  IN VARCHAR2 )
```

## Parameters

| Parameter | Description |
| --- | --- |
| `p_mode` | If B , then do basic escaping, like sys.htf.escape_sc . If E , then do extended escaping. |

## Returns

This is a procedure and does not return a value.

## Important Notes

- Most APEX APIs assume the correct APEX workspace, application, and session context.
- Validate user-controlled values before passing them into administrative, security, SQL, or web-service APIs.
- Use the source link for exact behavior, defaults, and version-specific caveats.

## Simple Example

```sql
begin
    apex_escape.SET_HTML_ESCAPING_MODE(
        p_mode => 'EXAMPLE'
    );
end;
/
```

## More Complex Example

```sql
begin
    -- Assuming this runs inside an APEX page process with the right workspace/app context.
    apex_escape.SET_HTML_ESCAPING_MODE(
            p_mode => 'EXAMPLE'
        );
end;
/
```

