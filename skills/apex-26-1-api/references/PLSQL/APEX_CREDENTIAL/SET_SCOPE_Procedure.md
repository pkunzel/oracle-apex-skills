# APEX_CREDENTIAL.SET_SCOPE Procedure

Source: [Oracle APEX 26.1 API Reference](https://docs.oracle.com/en/database/oracle/apex/26.1/aeapi/APEX_CREDENTIAL.SET_SCOPE-Procedure.html)

Status: generated detailed reference. Review edge cases against the source before production use.

Parent package: [APEX_CREDENTIAL](../APEX_CREDENTIAL.md)

## Purpose

This procedure changes the "scope" attribute of a Web Credential. All existing tokens for the given credential are cleared.

## When To Use

Use this page when code needs the `APEX_CREDENTIAL.SET_SCOPE` procedure. Confirm security, workspace, and session requirements for your calling context.

## Signature

```sql
APEX_CREDENTIAL.SET_SCOPE (
    p_credential_static_id      IN VARCHAR2,
    p_scope                     IN VARCHAR2,
    p_named_scopes              IN VARCHAR2 DEFAULT NULL );
```

## Parameters

| Parameter | Description |
| --- | --- |
| `p_credential_static_id` | Credential static ID. |
| `p_scope` | New scope value to store within the Web Credential. |
| `p_named_scopes` | JSON array with named scopes. If the invoker specifies a named scope, APEX uses the value from the property list. Specify NULL to leave the existing named scope list unchanged; an empty JSON array to clear the list, and a populated array to store the list. There is no merging functionality; the whole list is being replaced. For now, we use a VARCHAR2 parameter that restricts the JSON size to 32K. Format: |

## Returns

This is a procedure and does not return a value.

## Important Notes

- Most APEX APIs assume the correct APEX workspace, application, and session context.
- Validate user-controlled values before passing them into administrative, security, SQL, or web-service APIs.
- Use the source link for exact behavior, defaults, and version-specific caveats.

## Simple Example

```sql
begin
    apex_credential.SET_SCOPE(
        p_credential_static_id => 'EXAMPLE_STATIC_ID',
        p_scope => 'EXAMPLE',
        p_named_scopes => 'EXAMPLE'
    );
end;
/
```

