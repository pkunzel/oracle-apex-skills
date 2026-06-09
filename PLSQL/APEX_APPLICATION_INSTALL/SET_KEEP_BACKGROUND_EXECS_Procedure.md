# APEX_APPLICATION_INSTALL.SET_KEEP_BACKGROUND_EXECS Procedure

Source: [Oracle APEX 26.1 API Reference](https://docs.oracle.com/en/database/oracle/apex/26.1/aeapi/SET_KEEP_BACKGROUND_EXECS-Procedure.html)

Status: generated detailed reference. Review edge cases against the source before production use.

Parent package: [APEX_APPLICATION_INSTALL](../APEX_APPLICATION_INSTALL.md)

## Purpose

This procedure preserves background executions associated with the application during upgrades.

## When To Use

Use this page when code needs the `APEX_APPLICATION_INSTALL.SET_KEEP_BACKGROUND_EXECS` procedure. Confirm security, workspace, and session requirements for your calling context.

## Signature

```sql
APEX_APPLICATION_INSTALL.SET_KEEP_BACKGROUND_EXECS (
    p_keep_background_execs IN BOOLEAN )
```

## Parameters

| Parameter | Description |
| --- | --- |
| `p_keep_background_execs` | TRUE to preserve background executions. FALSE to delete them. |

## Returns

This is a procedure and does not return a value.

## Important Notes

- Most APEX APIs assume the correct APEX workspace, application, and session context.
- Validate user-controlled values before passing them into administrative, security, SQL, or web-service APIs.
- Use the source link for exact behavior, defaults, and version-specific caveats.

## Simple Example

```sql
begin
    apex_application_install.SET_KEEP_BACKGROUND_EXECS(
        p_keep_background_execs => true
    );
end;
/
```

## More Complex Example

```sql
begin
    -- Assuming this runs inside an APEX page process with the right workspace/app context.
    apex_application_install.SET_KEEP_BACKGROUND_EXECS(
            p_keep_background_execs => true
        );
end;
/
```

