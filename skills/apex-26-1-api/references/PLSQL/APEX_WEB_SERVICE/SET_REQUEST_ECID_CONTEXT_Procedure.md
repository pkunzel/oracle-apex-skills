# APEX_WEB_SERVICE.SET_REQUEST_ECID_CONTEXT Procedure

Source: [Oracle APEX 26.1 API Reference](https://docs.oracle.com/en/database/oracle/apex/26.1/aeapi/SET_REQUEST_ECID_CONTEXT-Procedure.html)

Status: generated detailed reference. Review edge cases against the source before production use.

Parent package: [APEX_WEB_SERVICE](../APEX_WEB_SERVICE.md)

## Purpose

This procedure adds an Execution Context ID (ECID) HTTP request header to g_request_headers . This overrides the application level security setting "Pass ECID."

## When To Use

Use this page when code needs the `APEX_WEB_SERVICE.SET_REQUEST_ECID_CONTEXT` procedure. Confirm security, workspace, and session requirements for your calling context.

## Signature

```sql
APEX_WEB_SERVICE.SET_REQUEST_ECID_CONTEXT (
    p_ecid  IN VARCHAR2 DEFAULT AUTO_ECID )
```

## Parameters

| Parameter | Description |
| --- | --- |
| `p_ecid` | The identifier for the execution context. Options include: AUTO_ECID - (Default) An automatically determined ECID header is added. NULL - No ECID header is added. If neither, substrb(p_ecid, 1, 64) is used as the ECID header. |

## Returns

This is a procedure and does not return a value.

## Important Notes

- Most APEX APIs assume the correct APEX workspace, application, and session context.
- Validate user-controlled values before passing them into administrative, security, SQL, or web-service APIs.
- Use the source link for exact behavior, defaults, and version-specific caveats.

## Simple Example

Attach an execution context ID to outbound requests for tracing.

```sql
begin
    apex_web_service.set_request_ecid_context(
        p_ecid => 'ORDER-' || :P10_ORDER_ID);
end;
/
```

