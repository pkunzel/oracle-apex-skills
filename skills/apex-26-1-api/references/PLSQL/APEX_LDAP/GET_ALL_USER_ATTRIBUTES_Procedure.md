# APEX_LDAP.GET_ALL_USER_ATTRIBUTES Procedure

Source: [Oracle APEX 26.1 API Reference](https://docs.oracle.com/en/database/oracle/apex/26.1/aeapi/GET_ALL_USER_ATTRIBUTES-Procedure.html)

Status: generated detailed reference. Review edge cases against the source before production use.

Parent package: [APEX_LDAP](../APEX_LDAP.md)

## Purpose

This procedure returns two OUT arrays of user_attribute names and values for the user name designated by p_username (with password if required) using the provided auth base, host, and port.

## When To Use

Use this page when code needs the `APEX_LDAP.GET_ALL_USER_ATTRIBUTES` procedure. Confirm security, workspace, and session requirements for your calling context.

## Signature

```sql
APEX_LDAP.GET_ALL_USER_ATTRIBUTES (
    p_username              IN VARCHAR2 DEFAULT NULL,
    p_pass                  IN VARCHAR2 DEFAULT NULL,
    p_auth_base             IN VARCHAR2 DEFAULT NULL,
    p_host                  IN VARCHAR2,
    p_port                  IN VARCHAR2 DEFAULT 636,
    p_use_ssl               IN VARCHAR2 DEFAULT 'N',
    p_attributes            OUT apex_application_global.vc_arr2,
    p_attribute_values      OUT apex_application_global.vc_arr2,
    p_credential_static_id  IN VARCHAR2 DEFAULT NULL );
```

## Parameters

| Parameter | Description |
| --- | --- |
| `p_username` | Login name of the user. |
| `p_pass` | Password for p_username . |
| `p_auth_base` | LDAP search base, for example, dc=users,dc=my,dc=org . |
| `p_host` | LDAP server host name. |
| `p_port` | LDAP server port number. |
| `p_use_ssl` | (Default) Set to N to not use SSL. Set to Y to use SSL in bind to LDAP server. Set to A to use SSL with one-way authentication (requires LDAP server certificate configured in an Oracle wallet). |
| `p_attributes` | An array of attribute names returned. |
| `p_attribute_values` | An array of values returned for each corresponding attribute name returned in p_attributes . |
| `p_credential_static_id` | The credential static ID (can be NULL for anonymous or username/pass binds). If it is not NULL and the credential could not be found, then raises the error no_data_found . |

## Returns

This is a procedure and does not return a value.

## Important Notes

- Most APEX APIs assume the correct APEX workspace, application, and session context.
- Validate user-controlled values before passing them into administrative, security, SQL, or web-service APIs.
- Use the source link for exact behavior, defaults, and version-specific caveats.

## Simple Example

```sql
begin
    apex_ldap.GET_ALL_USER_ATTRIBUTES(
        p_username => 'USER',
        p_pass => 'EXAMPLE',
        p_auth_base => 'EXAMPLE',
        p_host => 'EXAMPLE',
        p_port => 'EXAMPLE',
        p_use_ssl => 'EXAMPLE',
        p_attributes => null,
        p_attribute_values => 'EXAMPLE',
        p_credential_static_id => 'EXAMPLE_STATIC_ID'
    );
end;
/
```

