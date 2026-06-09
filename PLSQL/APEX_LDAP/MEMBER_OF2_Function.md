# APEX_LDAP.MEMBER_OF2 Function

Source: [Oracle APEX 26.1 API Reference](https://docs.oracle.com/en/database/oracle/apex/26.1/aeapi/MEMBER_OF2-Function.html)

Status: generated detailed reference. Review edge cases against the source before production use.

Parent package: [APEX_LDAP](../APEX_LDAP.md)

## Purpose

This function returns a VARCHAR2 colon delimited list of groups the user name designated by p_username (with password if required) belongs to, using the provided auth base, host, and port.

## When To Use

Use this page when code needs the `APEX_LDAP.MEMBER_OF2` function. Confirm security, workspace, and session requirements for your calling context.

## Signature

```sql
APEX_LDAP.MEMBER_OF2 (
    p_username     IN VARCHAR2 DEFAULT NULL,
    p_pass         IN VARCHAR2 DEFAULT NULL,
    p_auth_base    IN VARCHAR2,
    p_host         IN VARCHAR2,
    p_port         IN VARCHAR2 DEFAULT 389,
    p_use_ssl      IN VARCHAR2 DEFAULT 'N',
    p_credential_static_id  IN VARCHAR2 DEFAULT NULL );
RETURN VARCHAR2;
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
| `p_credential_static_id` | The credential static ID (can be NULL for anonymous or username/pass binds). If it is not NULL and the credential could not be found, then raises the error no_data_found . |

## Important Notes

- Most APEX APIs assume the correct APEX workspace, application, and session context.
- Validate user-controlled values before passing them into administrative, security, SQL, or web-service APIs.
- Use the source link for exact behavior, defaults, and version-specific caveats.

## Simple Example

```sql
declare
    l_result VARCHAR2;
begin
    l_result := apex_ldap.MEMBER_OF2(
        p_username => 'USER',
        p_pass => 'EXAMPLE',
        p_auth_base => 'EXAMPLE',
        p_host => 'EXAMPLE',
        p_port => 'EXAMPLE',
        p_use_ssl => 'EXAMPLE',
        p_credential_static_id => 'EXAMPLE_STATIC_ID'
    );
    sys.dbms_output.put_line('Result captured.');
end;
/
```

## More Complex Example

```sql
declare
    l_result VARCHAR2;
begin
    -- Assuming this runs outside a normal APEX page request.
    apex_session.create_session(
        p_app_id   => 100,
        p_page_id  => 1,
        p_username => 'USER');

    l_result := apex_ldap.MEMBER_OF2(
            p_username => 'USER',
            p_pass => 'EXAMPLE',
            p_auth_base => 'EXAMPLE',
            p_host => 'EXAMPLE',
            p_port => 'EXAMPLE',
            p_use_ssl => 'EXAMPLE',
            p_credential_static_id => 'EXAMPLE_STATIC_ID'
        );

    apex_session.delete_session;
exception
    when others then
        apex_session.delete_session;
        raise;
end;
/
```

