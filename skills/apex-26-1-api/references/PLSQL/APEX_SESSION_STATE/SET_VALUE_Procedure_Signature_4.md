# APEX_SESSION_STATE.SET_VALUE Procedure Signature 4

Source: [Oracle APEX 26.1 API Reference](https://docs.oracle.com/en/database/oracle/apex/26.1/aeapi/APEX_SESSION_STATE.SET_VALUE-Procedure-Signature-4.html)

Status: generated detailed reference. Review edge cases against the source before production use.

Parent package: [APEX_SESSION_STATE](../APEX_SESSION_STATE.md)

## Purpose

This procedure sets an item's session state value based on a generic t_value .

## When To Use

Use this page when code needs the `APEX_SESSION_STATE.SET_VALUE` procedure. Confirm security, workspace, and session requirements for your calling context.

## Signature

```sql
APEX_SESSION_STATE.SET_VALUE (
    p_item   IN VARCHAR2,
    p_value  IN t_value,
    p_commit IN BOOLEAN DEFAULT TRUE );
```

## Parameters

| Parameter | Description |
| --- | --- |
| `p_item` | The item name. |
| `p_value` | The item value. |
| `p_commit` | If TRUE (default), commit after modifying the session state. If FALSE , or if the existing value in session state equals p_value , no commit is issued. This parameter is ignored when the application's Session State Changes attribute is set to "End Of Request." |

## Returns

This is a procedure and does not return a value.

## Important Notes

- Most APEX APIs assume the correct APEX workspace, application, and session context.
- Validate user-controlled values before passing them into administrative, security, SQL, or web-service APIs.
- Use the source link for exact behavior, defaults, and version-specific caveats.

## Simple Example

```sql
begin
    apex_session_state.SET_VALUE(
        p_item => 'EXAMPLE',
        p_value => null,
        p_commit => true
    );
end;
/
```

## More Complex Example

```sql
begin
    -- Assuming this runs inside an APEX page process with the right workspace/app context.
    apex_session_state.SET_VALUE(
            p_item => 'EXAMPLE',
            p_value => null,
            p_commit => true
        );
end;
/
```

