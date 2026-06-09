# APEX_APPLICATION_INSTALL.SET_PASS_ECID Procedure

Source: [Oracle APEX 26.1 API Reference](https://docs.oracle.com/en/database/oracle/apex/26.1/aeapi/APEX_APPLICATION_INSTALL.SET_PASS_ECID-Procedure.html)

Status: generated detailed reference. Review edge cases against the source before production use.

Parent package: [APEX_APPLICATION_INSTALL](../APEX_APPLICATION_INSTALL.md)

## Purpose

This procedure overrides the pass Execution Context ID (ECID) attribute for applications that are being installed.

## When To Use

Use this page when code needs the `APEX_APPLICATION_INSTALL.SET_PASS_ECID` procedure. Confirm security, workspace, and session requirements for your calling context.

## Signature

```sql
APEX_APPLICATION_INSTALL.SET_PASS_ECID (
    p_pass_ecid IN BOOLEAN )
```

## Parameters

| Parameter | Description |
| --- | --- |
| `p_pass_ecid` | New pass ECID value to set application to. Values include: TRUE : Pass the ECID to the external web services for end-to-end tracing. FALSE : Deny the ECID. |

## Returns

This is a procedure and does not return a value.

## Important Notes

- Most APEX APIs assume the correct APEX workspace, application, and session context.
- Validate user-controlled values before passing them into administrative, security, SQL, or web-service APIs.
- Use the source link for exact behavior, defaults, and version-specific caveats.

## Simple Example

```sql
begin
    apex_application_install.SET_PASS_ECID(
        p_pass_ecid => true
    );
end;
/
```

## More Complex Example

```sql
begin
    -- Assuming this runs inside an APEX page process with the right workspace/app context.
    apex_application_install.SET_PASS_ECID(
            p_pass_ecid => true
        );
end;
/
```

