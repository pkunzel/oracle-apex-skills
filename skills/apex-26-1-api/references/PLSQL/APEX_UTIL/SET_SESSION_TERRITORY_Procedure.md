# APEX_UTIL.SET_SESSION_TERRITORY Procedure

Source: [Oracle APEX 26.1 API Reference](https://docs.oracle.com/en/database/oracle/apex/26.1/aeapi/SET_SESSION_TERRITORY-Procedure.html)

Status: generated detailed reference. Review edge cases against the source before production use.

Parent package: [APEX_UTIL](../APEX_UTIL.md)

## Purpose

This procedure sets the territory to be used for the current user in the current Oracle APEX session. The territory name must be a valid Oracle territory.

## When To Use

Use this page when code needs the `APEX_UTIL.SET_SESSION_TERRITORY` procedure. Confirm security, workspace, and session requirements for your calling context.

## Signature

```sql
APEX_UTIL.SET_SESSION_TERRITORY (
    p_territory IN VARCHAR2 );
```

## Parameters

| Parameter | Description |
| --- | --- |
| `p_territory` | A valid Oracle territory name. Examples include: AMERICA , UNITED KINGDOM , ISRAEL , AUSTRIA , and UNITED ARAB EMIRATES . |

## Returns

This is a procedure and does not return a value.

## Important Notes

- Most APEX APIs assume the correct APEX workspace, application, and session context.
- Validate user-controlled values before passing them into administrative, security, SQL, or web-service APIs.
- Use the source link for exact behavior, defaults, and version-specific caveats.

## Simple Example

```sql
begin
    apex_util.SET_SESSION_TERRITORY(
        p_territory => 'EXAMPLE'
    );
end;
/
```

