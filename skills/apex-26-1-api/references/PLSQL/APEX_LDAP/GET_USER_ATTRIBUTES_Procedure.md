# APEX_LDAP.GET_USER_ATTRIBUTES Procedure

Source: [Oracle APEX 26.1 API Reference](https://docs.oracle.com/en/database/oracle/apex/26.1/aeapi/GET_USER_ATTRIBUTES-Procedure.html)

Status: generated detailed reference. Review edge cases against the source before production use.

Parent package: [APEX_LDAP](../APEX_LDAP.md)

## Purpose

This procedure returns an OUT array of user_attribute values for the user name designated by p_username (with password if required) corresponding to the attribute names passed in p_attributes using the provided auth base, host, and port.

## When To Use

Use this page when code needs the `APEX_LDAP.GET_USER_ATTRIBUTES` procedure. Confirm security, workspace, and session requirements for your calling context.

## Signature

```sql
APEX_LDAP.GET_USER_ATTRIBUTES (
    p_username              IN   VARCHAR2 DEFAULT NULL,
    p_pass                  IN   VARCHAR2 DEFAULT NULL,
    p_auth_base             IN   VARCHAR2,
    p_host                  IN   VARCHAR2,
    p_port                  IN   VARCHAR2 DEFAULT 389,
    p_use_ssl               IN   VARCHAR2 DEFAULT 'N',
    p_attributes            IN   apex_application_global.vc_arr2,
    p_attribute_values      OUT  apex_application_global.vc_arr2,
    p_credential_static_id  IN   VARCHAR2 DEFAULT NULL );
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
| `p_attributes` | An array of attribute names for which values are to be returned. |
| `p_attribute_values` | An array of values returned for each corresponding attribute name in p_attributes . |
| `p_credential_static_id` | The credential static ID (can be NULL for anonymous or username/pass binds). If it is not NULL and the credential could not be found, then raises the error no_data_found . |

## Returns

This is a procedure and does not return a value.

## Important Notes

- Most APEX APIs assume the correct APEX workspace, application, and session context.
- Validate user-controlled values before passing them into administrative, security, SQL, or web-service APIs.
- Use the source link for exact behavior, defaults, and version-specific caveats.

## Simple Example

Request a focused set of LDAP attributes and capture their values.

```sql
declare
    l_attributes       apex_application_global.vc_arr2;
    l_attribute_values apex_application_global.vc_arr2;
begin
    l_attributes(1) := 'mail';
    l_attributes(2) := 'displayName';
    l_attributes(3) := 'departmentNumber';

    apex_ldap.get_user_attributes(
        p_username             => :P101_USERNAME,
        p_pass                 => :P101_PASSWORD,
        p_auth_base            => 'ou=People,dc=company,dc=test',
        p_host                 => 'ldap.company.test',
        p_port                 => '636',
        p_use_ssl              => 'Y',
        p_attributes           => l_attributes,
        p_attribute_values     => l_attribute_values,
        p_credential_static_id => 'LDAP_BIND_CREDENTIAL'
    );

    apex_util.set_session_state('P101_EMAIL', l_attribute_values(1));
end;
/
```
