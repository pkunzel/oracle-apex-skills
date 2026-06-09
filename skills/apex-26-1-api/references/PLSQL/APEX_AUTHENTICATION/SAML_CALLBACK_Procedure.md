# APEX_AUTHENTICATION.SAML_CALLBACK Procedure

Source: [Oracle APEX 26.1 API Reference](https://docs.oracle.com/en/database/oracle/apex/26.1/aeapi/SAML_CALLBACK-Procedure.html)

Status: generated detailed reference. Review edge cases against the source before production use.

Parent package: [APEX_AUTHENTICATION](../APEX_AUTHENTICATION.md)

## Purpose

Landing resource for SAML authentication. To be called directly from the browser by the SAML identity provider.

## When To Use

Use this page when code needs the `APEX_AUTHENTICATION.SAML_CALLBACK` procedure. Confirm security, workspace, and session requirements for your calling context.

## Signature

```sql
APEX_AUTHENTICATION.SAML_CALLBACK (
    SAMLResponse      IN VARCHAR2 DEFAULT NULL,
    SAMLRequest       IN VARCHAR2 DEFAULT NULL,
    RelayState        IN VARCHAR2 DEFAULT NULL,
    SigAlg            IN VARCHAR2 DEFAULT NULL,
    Signature         IN VARCHAR2 DEFAULT NULL )
```

## Parameters

| Parameter | Description |
| --- | --- |
| `SAMLResponse` | The base64-encoded SAML response. For GET requests, Oracle APEX assumes that the data is also deflated. |
| `SAMLRequest` | Request from the IP to APEX (such as logout). Same format as SAMLRESPONSE. |
| `RelayState` | APEX session specific data. |
| `SigAlg` | Signature algorithm. |
| `Signature` | Signature value. |

## Returns

This is a procedure and does not return a value.

## Important Notes

- Most APEX APIs assume the correct APEX workspace, application, and session context.
- Validate user-controlled values before passing them into administrative, security, SQL, or web-service APIs.
- Use the source link for exact behavior, defaults, and version-specific caveats.

## Simple Example

```sql
begin
    apex_authentication.SAML_CALLBACK;
end;
/
```

