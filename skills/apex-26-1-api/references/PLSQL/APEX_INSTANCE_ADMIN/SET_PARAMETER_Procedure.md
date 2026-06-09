# APEX_INSTANCE_ADMIN.SET_PARAMETER Procedure

Source: [Oracle APEX 26.1 API Reference](https://docs.oracle.com/en/database/oracle/apex/26.1/aeapi/SET_PARAMETER-Procedure.html)

Status: generated detailed reference. Review edge cases against the source before production use.

Parent package: [APEX_INSTANCE_ADMIN](../APEX_INSTANCE_ADMIN.md)

## Purpose

This procedure sets a parameter used in administering a runtime environment. You must issue a commit for the parameter change to take affect.

## When To Use

Use this page when code needs the `APEX_INSTANCE_ADMIN.SET_PARAMETER` procedure. Confirm security, workspace, and session requirements for your calling context.

## Signature

```sql
APEX_INSTANCE_ADMIN.SET_PARAMETER (
    p_parameter     IN VARCHAR2,
    p_value         IN VARCHAR2 DEFAULT 'N',
    p_force         IN BOOLEAN  DEFAULT FALSE );
```

## Parameters

| Parameter | Description |
| --- | --- |
| `p_parameter` | The instance parameter to be set. |
| `p_value` | The value of the parameter. See Available Parameter Values . |
| `p_force` | Default FALSE . If TRUE , accepts the value even if it is missing some quality criteria. Basic data type validation occurs (such as numeric, Y/N) , but Oracle APEX accepts more values. For example, credentials can be SHA-1 and shorter than 2048 bit. ALLOW_HASH_FUNCTIONS parameter must also support SHA-1 . The parameter only applies for the parameters: SAML_APEX_CERTIFICATE SAML_APEX_CERTIFICATE2 SAML_IP_SIGNING_CERTIFICATE SAML_IP_SIGNING_CERTIFICATE2 The parameter forces the storage of the certificate in case the quality check of the certificate raises an error. |

## Returns

This is a procedure and does not return a value.

## Important Notes

- Most APEX APIs assume the correct APEX workspace, application, and session context.
- Validate user-controlled values before passing them into administrative, security, SQL, or web-service APIs.
- Use the source link for exact behavior, defaults, and version-specific caveats.

## Simple Example

```sql
begin
    apex_instance_admin.SET_PARAMETER(
        p_parameter => 'EXAMPLE',
        p_value => 'EXAMPLE',
        p_force => true
    );
end;
/
```

