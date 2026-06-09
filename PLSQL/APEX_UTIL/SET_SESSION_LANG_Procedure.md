# APEX_UTIL.SET_SESSION_LANG Procedure

Source: [Oracle APEX 26.1 API Reference](https://docs.oracle.com/en/database/oracle/apex/26.1/aeapi/SET_SESSION_LANG-Procedure.html)

Status: generated detailed reference. Review edge cases against the source before production use.

Parent package: [APEX_UTIL](../APEX_UTIL.md)

## Purpose

This procedure sets the language for the current user in the current Oracle APEX session. The language must be a valid IANA language name.

## When To Use

Use this page when code needs the `APEX_UTIL.SET_SESSION_LANG` procedure. Confirm security, workspace, and session requirements for your calling context.

## Signature

```sql
APEX_UTIL.SET_SESSION_LANG (
    p_lang IN VARCHAR2 );
```

## Parameters

| Parameter | Description |
| --- | --- |
| `p_lang` | This is an IANA language code. Examples include en, de, de-at, zh-cn, and pt-br. |

## Returns

This is a procedure and does not return a value.

## Important Notes

- Most APEX APIs assume the correct APEX workspace, application, and session context.
- Validate user-controlled values before passing them into administrative, security, SQL, or web-service APIs.
- Use the source link for exact behavior, defaults, and version-specific caveats.

## Simple Example

```sql
begin
    apex_util.SET_SESSION_LANG(
        p_lang => 'EXAMPLE'
    );
end;
/
```

## More Complex Example

```sql
begin
    -- Assuming this runs inside an APEX page process with the right workspace/app context.
    apex_util.SET_SESSION_LANG(
            p_lang => 'EXAMPLE'
        );
end;
/
```

