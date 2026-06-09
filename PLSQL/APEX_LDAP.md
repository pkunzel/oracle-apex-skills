# APEX_LDAP

Source: [Oracle APEX 26.1 API Reference](https://docs.oracle.com/en/database/oracle/apex/26.1/aeapi/APEX_LDAP.html)

Status: curated first-pass reference.

## Purpose

`APEX_LDAP` provides direct LDAP bind, search, attribute lookup, and group membership helpers. It is most relevant for legacy authentication/authorization integrations or environments where LDAP is still the identity source.

## When To Use

Use it when an application must authenticate against LDAP, search directory attributes, or check group membership from PL/SQL. Prefer declarative authentication schemes and [APEX_AUTHENTICATION](APEX_AUTHENTICATION.md) where possible.

## API Surface

| Area | Members |
| --- | --- |
| Authentication | `AUTHENTICATE` |
| Attribute lookup | `GET_USER_ATTRIBUTES`, `GET_ALL_USER_ATTRIBUTES`, `SEARCH` |
| Group membership | `IS_MEMBER`, `MEMBER_OF`, `MEMBER_OF2` |
| DN preparation | `LDAP_DNPREP` |

## Authenticate Example

```sql
declare
    l_ok boolean;
begin
    l_ok := apex_ldap.authenticate(
        p_username    => :P101_USERNAME,
        p_password    => :P101_PASSWORD,
        p_search_base => 'dc=example,dc=com',
        p_host        => 'ldap.example.com',
        p_port        => 636,
        p_use_ssl     => 'A');

    if not l_ok then
        raise_application_error(-20000, 'Invalid LDAP credentials.');
    end if;
end;
/
```

## Search Example

Assuming a Web Credential `LDAP_BIND` stores the bind account and the page needs mail/display-name values:

```sql
select dn, name, val
  from table(
           apex_ldap.search(
               p_host                 => 'ldap.example.com',
               p_port                 => 636,
               p_use_ssl              => 'A',
               p_search_base          => 'ou=People,dc=example,dc=com',
               p_search_filter        => '(uid=' || apex_escape.ldap_search(:P10_UID) || ')',
               p_attribute_names      => 'mail,displayName',
               p_credential_static_id => 'LDAP_BIND'));
```

## Group Membership Example

```sql
declare
    l_groups varchar2(32767);
begin
    l_groups := apex_ldap.member_of2(
        p_username             => :APP_USER,
        p_auth_base            => 'ou=People,dc=example,dc=com',
        p_host                 => 'ldap.example.com',
        p_port                 => 636,
        p_use_ssl              => 'A',
        p_credential_static_id => 'LDAP_BIND');

    :P10_GROUPS := l_groups;
end;
/
```

## Notes

- Prefer SSL mode `A` when the LDAP server certificate is configured in an Oracle wallet.
- Escape user-controlled LDAP filter fragments with [APEX_ESCAPE](APEX_ESCAPE.md) LDAP helpers.
- Use Web Credentials instead of hard-coded bind passwords.
- Keep timeouts short for page-request searches; move slow directory sync to jobs or background processing.

## Related APIs

- [APEX_AUTHENTICATION](APEX_AUTHENTICATION.md) for modern auth callbacks.
- [APEX_CREDENTIAL](APEX_CREDENTIAL.md) for credential-backed directory binds.
- [APEX_ESCAPE](APEX_ESCAPE.md) for LDAP-safe escaping.

<!-- BEGIN GENERATED MEMBER LINKS -->

## Local Member Detail Pages

Generated navigation for LLM retrieval. Use the local detail page first, then follow the Oracle source link when exact wording or edge-case behavior must be verified.

| Member | Kind | Local detail | Source |
| --- | --- | --- | --- |
| AUTHENTICATE Function | function | [local](APEX_LDAP/AUTHENTICATE_Function.md) | [Oracle](https://docs.oracle.com/en/database/oracle/apex/26.1/aeapi/AUTHENTICATE-Function.html) |
| GET_ALL_USER_ATTRIBUTES Procedure | procedure | [local](APEX_LDAP/GET_ALL_USER_ATTRIBUTES_Procedure.md) | [Oracle](https://docs.oracle.com/en/database/oracle/apex/26.1/aeapi/GET_ALL_USER_ATTRIBUTES-Procedure.html) |
| GET_USER_ATTRIBUTES Procedure | procedure | [local](APEX_LDAP/GET_USER_ATTRIBUTES_Procedure.md) | [Oracle](https://docs.oracle.com/en/database/oracle/apex/26.1/aeapi/GET_USER_ATTRIBUTES-Procedure.html) |
| IS_MEMBER Function | function | [local](APEX_LDAP/IS_MEMBER_Function.md) | [Oracle](https://docs.oracle.com/en/database/oracle/apex/26.1/aeapi/IS_MEMBER-Function.html) |
| MEMBER_OF Function | function | [local](APEX_LDAP/MEMBER_OF_Function.md) | [Oracle](https://docs.oracle.com/en/database/oracle/apex/26.1/aeapi/MEMBER_OF-Function.html) |
| MEMBER_OF2 Function | function | [local](APEX_LDAP/MEMBER_OF2_Function.md) | [Oracle](https://docs.oracle.com/en/database/oracle/apex/26.1/aeapi/MEMBER_OF2-Function.html) |
| SEARCH Function | function | [local](APEX_LDAP/SEARCH_Function.md) | [Oracle](https://docs.oracle.com/en/database/oracle/apex/26.1/aeapi/APEX_LDAP.SEARCH-Function.html) |

<!-- END GENERATED MEMBER LINKS -->
