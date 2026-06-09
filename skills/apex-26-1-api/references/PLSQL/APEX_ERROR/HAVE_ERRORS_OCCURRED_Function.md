# APEX_ERROR.HAVE_ERRORS_OCCURRED Function

Source: [Oracle APEX 26.1 API Reference](https://docs.oracle.com/en/database/oracle/apex/26.1/aeapi/APEX_ERROR.HAVE_ERRORS_OCCURRED-Function.html)

Status: generated detailed reference. Review edge cases against the source before production use.

Parent package: [APEX_ERROR](../APEX_ERROR.md)

## Purpose

This function returns TRUE if (inline) errors have occurred and FALSE if no error has occurred.

## When To Use

Use this page when code needs the `APEX_ERROR.HAVE_ERRORS_OCCURRED` function. Confirm security, workspace, and session requirements for your calling context.

## Signature

```sql
APEX_ERROR.HAVE_ERRORS_OCCURRED
RETURN BOOLEAN;
```

## Important Notes

- Most APEX APIs assume the correct APEX workspace, application, and session context.
- Validate user-controlled values before passing them into administrative, security, SQL, or web-service APIs.
- Use the source link for exact behavior, defaults, and version-specific caveats.

## Simple Example

```sql
declare
    l_result BOOLEAN;
begin
    l_result := apex_error.HAVE_ERRORS_OCCURRED;
    sys.dbms_output.put_line('Result captured.');
end;
/
```

