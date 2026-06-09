# APEX_EXTENSION.SET_WORKSPACE Procedure Signature 1

Source: [Oracle APEX 26.1 API Reference](https://docs.oracle.com/en/database/oracle/apex/26.1/aeapi/APEX_EXTENSION.SET_WORKSPACE-Procedure-Signature-1.html)

Status: generated detailed reference. Review edge cases against the source before production use.

Parent package: [APEX_EXTENSION](../APEX_EXTENSION.md)

## Purpose

This procedure sets the current workspace to the workspace that is processed by the extension application or background automation by its ID.

## When To Use

Use this page when code needs the `APEX_EXTENSION.SET_WORKSPACE` procedure. Confirm security, workspace, and session requirements for your calling context.

## Signature

```sql
APEX_EXTENSION.SET_WORKSPACE (
    p_id    IN NUMBER )
```

## Parameters

| Parameter | Description |
| --- | --- |
| `p_id` | The ID of the workspace to be accessed. |

## Returns

This is a procedure and does not return a value.

## Important Notes

- Most APEX APIs assume the correct APEX workspace, application, and session context.
- Validate user-controlled values before passing them into administrative, security, SQL, or web-service APIs.
- Use the source link for exact behavior, defaults, and version-specific caveats.

## Simple Example

```sql
begin
    apex_extension.SET_WORKSPACE(
        p_id => 1
    );
end;
/
```

## More Complex Example

```sql
begin
    -- Assuming this runs inside an APEX page process with the right workspace/app context.
    apex_extension.SET_WORKSPACE(
            p_id => 1
        );
end;
/
```

