# APEX_UTIL.IS_USERNAME_UNIQUE Function

Source: [Oracle APEX 26.1 API Reference](https://docs.oracle.com/en/database/oracle/apex/26.1/aeapi/IS_USERNAME_UNIQUE-Function.html)

Status: generated detailed reference. Review edge cases against the source before production use.

Parent package: [APEX_UTIL](../APEX_UTIL.md)

## Purpose

Note:

## When To Use

Use this page when code needs the `APEX_UTIL.IS_USERNAME_UNIQUE` function. Confirm security, workspace, and session requirements for your calling context.

## Signature

```sql
APEX_UTIL.IS_USERNAME_UNIQUE (
    p_username IN VARCHAR2 )
RETURN BOOLEAN;
```

## Parameters

| Parameter | Description |
| --- | --- |
| `p_username` | Identifies the user name to be tested. |

## Important Notes

- Most APEX APIs assume the correct APEX workspace, application, and session context.
- Validate user-controlled values before passing them into administrative, security, SQL, or web-service APIs.
- Use the source link for exact behavior, defaults, and version-specific caveats.

## Simple Example

```sql
declare
    l_result BOOLEAN;
begin
    l_result := apex_util.IS_USERNAME_UNIQUE(
        p_username => 'USER'
    );
    sys.dbms_output.put_line('Result captured.');
end;
/
```

