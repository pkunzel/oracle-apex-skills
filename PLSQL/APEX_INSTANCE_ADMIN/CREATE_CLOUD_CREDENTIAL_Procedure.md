# APEX_INSTANCE_ADMIN.CREATE_CLOUD_CREDENTIAL Procedure

Source: [Oracle APEX 26.1 API Reference](https://docs.oracle.com/en/database/oracle/apex/26.1/aeapi/CREATE_CLOUD_CREDENTIAL-Procedure.html)

Status: generated detailed reference. Review edge cases against the source before production use.

Parent package: [APEX_INSTANCE_ADMIN](../APEX_INSTANCE_ADMIN.md)

## Purpose

This procedure creates a new DBMS_CLOUD OCI API Key credential. This procedure creates a credential in DBMS_CLOUD using DBMS_CLOUD.CREATE_CREDENTIAL .

## When To Use

Use this page when code needs the `APEX_INSTANCE_ADMIN.CREATE_CLOUD_CREDENTIAL` procedure. Confirm security, workspace, and session requirements for your calling context.

## Signature

```sql
APEX_INSTANCE_ADMIN.CREATE_CLOUD_CREDENTIAL (
    p_credential_name       IN VARCHAR2,
    p_user_ocid             IN VARCHAR2,
    p_tenancy_ocid          IN VARCHAR2,
    p_private_key           IN VARCHAR2,
    p_fingerprint           IN VARCHAR2 )
```

## Parameters

| Parameter | Description |
| --- | --- |
| `p_credential_name` | Name for credential. |
| `p_user_ocid` | Oracle Cloud identifier (OCID) for the user. |
| `p_tenancy_ocid` | Oracle Cloud identifier (OCID) for the tenancy. |
| `p_private_key` | Private key. |
| `p_fingerprint` | Specifies a fingerprint. |

## Returns

This is a procedure and does not return a value.

## Important Notes

- Most APEX APIs assume the correct APEX workspace, application, and session context.
- Validate user-controlled values before passing them into administrative, security, SQL, or web-service APIs.
- Use the source link for exact behavior, defaults, and version-specific caveats.

## Simple Example

```sql
begin
    apex_instance_admin.CREATE_CLOUD_CREDENTIAL(
        p_credential_name => 'EXAMPLE',
        p_user_ocid => 'USER',
        p_tenancy_ocid => 'EXAMPLE',
        p_private_key => 'EXAMPLE',
        p_fingerprint => 'EXAMPLE'
    );
end;
/
```

## More Complex Example

```sql
begin
    -- Assuming this runs inside an APEX page process with the right workspace/app context.
    apex_instance_admin.CREATE_CLOUD_CREDENTIAL(
            p_credential_name => 'EXAMPLE',
            p_user_ocid => 'USER',
            p_tenancy_ocid => 'EXAMPLE',
            p_private_key => 'EXAMPLE',
            p_fingerprint => 'EXAMPLE'
        );
end;
/
```

