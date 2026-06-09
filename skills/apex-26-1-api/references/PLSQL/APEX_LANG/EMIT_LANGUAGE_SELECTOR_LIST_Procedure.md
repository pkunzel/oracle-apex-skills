# APEX_LANG.EMIT_LANGUAGE_SELECTOR_LIST Procedure

Source: [Oracle APEX 26.1 API Reference](https://docs.oracle.com/en/database/oracle/apex/26.1/aeapi/EMIT_LANGUAGE_SELECTOR_LIST-Procedure.html)

Status: generated detailed reference. Review edge cases against the source before production use.

Parent package: [APEX_LANG](../APEX_LANG.md)

## Purpose

This procedure determines which languages the current application is translated into and prints the language selector. You can use this procedure from a PL/SQL region to include a language selector.

## When To Use

Use this page when code needs the `APEX_LANG.EMIT_LANGUAGE_SELECTOR_LIST` procedure. Confirm security, workspace, and session requirements for your calling context.

## Signature

```sql
APEX_LANG.EMIT_LANGUAGE_SELECTOR_LIST;
```

## Returns

This is a procedure and does not return a value.

## Important Notes

- Most APEX APIs assume the correct APEX workspace, application, and session context.
- Validate user-controlled values before passing them into administrative, security, SQL, or web-service APIs.
- Use the source link for exact behavior, defaults, and version-specific caveats.

## Simple Example

```sql
begin
    apex_lang.EMIT_LANGUAGE_SELECTOR_LIST;
end;
/
```

