# APEX_LDAP.AUTHENTICATE Function

Source: [Oracle APEX 26.1 API Reference](https://docs.oracle.com/en/database/oracle/apex/26.1/aeapi/AUTHENTICATE-Function.html)

Status: generated detailed reference. Review edge cases against the source before production use.

Parent package: [APEX_LDAP](../APEX_LDAP.md)

## Purpose

This function returns a boolean TRUE if the user name and password can be used to perform a SIMPLE_BIND_S call using the provided search base, host, and port.

## When To Use

Use this page when code needs the `APEX_LDAP.AUTHENTICATE` function. Confirm security, workspace, and session requirements for your calling context.

## Signature

```sql
APEX_LDAP.AUTHENTICATE (
    p_username     IN VARCHAR2 DEFAULT NULL,
    p_password     IN VARCHAR2 DEFAULT NULL,
    p_search_base  IN VARCHAR2,
    p_host         IN VARCHAR2,
    p_port         IN VARCHAR2 DEFAULT 389,
    p_use_ssl      IN VARCHAR2 DEFAULT 'N' )
RETURN BOOLEAN;
```

## Parameters

| Parameter | Description |
| --- | --- |
| `p_username` | Login name of the user. |
| `p_password` | Password for p_username . |
| `p_search_base` | LDAP search base, for example, dc=users,dc=my,dc=org . |
| `p_host` | LDAP server host name. |
| `p_port` | LDAP server port number. |
| `p_use_ssl` | (Default) Set to N to not use SSL. Set to Y to use SSL in bind to LDAP server. Set to A to use SSL with one-way authentication (requires LDAP server certificate configured in an Oracle wallet). |

## Important Notes

- Most APEX APIs assume the correct APEX workspace, application, and session context.
- Validate user-controlled values before passing them into administrative, security, SQL, or web-service APIs.
- Use the source link for exact behavior, defaults, and version-specific caveats.

## Simple Example

Authenticate an end user against an LDAPS server.

```sql
declare
    l_authenticated boolean;
begin
    l_authenticated := apex_ldap.authenticate(
        p_username    => :P101_USERNAME,
        p_password    => :P101_PASSWORD,
        p_search_base => 'ou=People,dc=company,dc=test',
        p_host        => 'ldap.company.test',
        p_port        => '636',
        p_use_ssl     => 'Y'
    );

    apex_util.set_session_state(
        p_name  => 'P101_AUTH_RESULT',
        p_value => case when l_authenticated then 'OK' else 'FAILED' end
    );
end;
/
```
