# APEX_UTIL.REMOVE_SORT_PREFERENCES Procedure

Source: [Oracle APEX 26.1 API Reference](https://docs.oracle.com/en/database/oracle/apex/26.1/aeapi/REMOVE_SORT_PREFERENCES-Procedure.html)

Status: generated detailed reference. Review edge cases against the source before production use.

Parent package: [APEX_UTIL](../APEX_UTIL.md)

## Purpose

This procedure removes the user's column heading sorting preference value.

## When To Use

Use this page when code needs the `APEX_UTIL.REMOVE_SORT_PREFERENCES` procedure. Confirm security, workspace, and session requirements for your calling context.

## Signature

```sql
APEX_UTIL.REMOVE_SORT_PREFERENCES (
    p_user  IN   VARCHAR2 DEFAULT V('USER') );
```

## Parameters

| Parameter | Description |
| --- | --- |
| `p_user` | Identifies the user for whom sorting preferences are removed. |

## Returns

This is a procedure and does not return a value.

## Important Notes

- Most APEX APIs assume the correct APEX workspace, application, and session context.
- Validate user-controlled values before passing them into administrative, security, SQL, or web-service APIs.
- Use the source link for exact behavior, defaults, and version-specific caveats.

## Simple Example

```sql
begin
    apex_util.REMOVE_SORT_PREFERENCES(
        p_user => 'USER'
    );
end;
/
```

## More Complex Example

```sql
begin
    -- Assuming this runs inside an APEX page process with the right workspace/app context.
    apex_util.REMOVE_SORT_PREFERENCES(
            p_user => 'USER'
        );
end;
/
```

