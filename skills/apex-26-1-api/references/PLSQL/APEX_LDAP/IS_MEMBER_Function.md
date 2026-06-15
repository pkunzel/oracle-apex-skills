# APEX_LDAP.IS_MEMBER Function

Source: [Oracle APEX 26.1 API Reference](https://docs.oracle.com/en/database/oracle/apex/26.1/aeapi/IS_MEMBER-Function.html)

Status: generated detailed reference. Review edge cases against the source before production use.

Parent package: [APEX_LDAP](../APEX_LDAP.md)

## Purpose

This function returns a boolean TRUE if the user named by p_username (with password if required) is a member of the group specified by the p_group and p_group_base parameters using the provided auth base, host, and port.

## When To Use

Use this page when code needs the `APEX_LDAP.IS_MEMBER` function. Confirm security, workspace, and session requirements for your calling context.

## Signature

```sql
APEX_LDAP.IS_MEMBER (
    p_username              IN VARCHAR2,
    p_pass                  IN VARCHAR2 DEFAULT NULL,
    p_auth_base             IN VARCHAR2,
    p_host                  IN VARCHAR2,
    p_port                  IN VARCHAR2 DEFAULT 389,
    p_use_ssl               IN VARCHAR2 DEFAULT 'N',
    p_group                 IN VARCHAR2,
    p_group_base            IN VARCHAR2,
    p_credential_static_id  IN VARCHAR2 DEFAULT NULL );
RETURN BOOLEAN;
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
| `p_group` | Name of the group to be search for membership. |
| `p_group_base` | The base from which the search should be started. |
| `p_credential_static_id` | The credential static ID (can be NULL for anonymous or username/pass binds). If it is not NULL and the credential could not be found, then raises the error no_data_found . |

## Important Notes

- Most APEX APIs assume the correct APEX workspace, application, and session context.
- Validate user-controlled values before passing them into administrative, security, SQL, or web-service APIs.
- Use the source link for exact behavior, defaults, and version-specific caveats.

## Simple Example

Check whether a user belongs to a specific LDAP group.

```sql
declare
    l_is_member boolean;
begin
    l_is_member := apex_ldap.is_member(
        p_username             => :APP_USER,
        p_pass                 => :P101_PASSWORD,
        p_auth_base            => 'ou=People,dc=company,dc=test',
        p_host                 => 'ldap.company.test',
        p_port                 => '636',
        p_use_ssl              => 'Y',
        p_group                => 'cn=APEX_DEVELOPERS,ou=Groups,dc=company,dc=test',
        p_group_base           => 'ou=Groups,dc=company,dc=test',
        p_credential_static_id => 'LDAP_BIND_CREDENTIAL'
    );

    apex_util.set_session_state('P101_IS_DEVELOPER', case when l_is_member then 'Y' else 'N' end);
end;
/
```
