# APEX_STRING.PLIST_PUSH Procedure

Source: [Oracle APEX 26.1 API Reference](https://docs.oracle.com/en/database/oracle/apex/26.1/aeapi/PLIST_PUSH-Procedure.html)

Status: generated detailed reference. Review edge cases against the source before production use.

Parent package: [APEX_STRING](../APEX_STRING.md)

## Purpose

This procedure appends key/value to the property list, without looking for duplicates.

## When To Use

Use this page when code needs the `APEX_STRING.PLIST_PUSH` procedure. Confirm security, workspace, and session requirements for your calling context.

## Signature

```sql
APEX_STRING.PLIST_PUSH (
    p_table IN OUT NOCOPY apex_t_varchar2,
    p_key   IN VARCHAR2,
    p_value IN VARCHAR2 );
```

## Parameters

| Parameter | Description |
| --- | --- |
| `p_table` | The input table. |
| `p_key` | The input key. |
| `p_value` | The input value. |

## Returns

This is a procedure and does not return a value.

## Important Notes

- Most APEX APIs assume the correct APEX workspace, application, and session context.
- Validate user-controlled values before passing them into administrative, security, SQL, or web-service APIs.
- Use the source link for exact behavior, defaults, and version-specific caveats.

## Simple Example

Append a duplicate-key entry when order matters.

```sql
declare
    l_props apex_t_varchar2;
begin
    apex_string.plist_push(l_props, 'filter', 'status = OPEN');
    apex_string.plist_push(l_props, 'filter', 'priority = HIGH');
end;
/
```

