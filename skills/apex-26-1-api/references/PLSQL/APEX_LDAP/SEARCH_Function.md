# APEX_LDAP.SEARCH Function

Source: [Oracle APEX 26.1 API Reference](https://docs.oracle.com/en/database/oracle/apex/26.1/aeapi/APEX_LDAP.SEARCH-Function.html)

Status: generated detailed reference. Review edge cases against the source before production use.

Parent package: [APEX_LDAP](../APEX_LDAP.md)

## Purpose

The SEARCH function searches the LDAP repository and returns an object table of (dn, name, val) that can be used in table queries.

## When To Use

Use this page when code needs the `APEX_LDAP.SEARCH` function. Confirm security, workspace, and session requirements for your calling context.

## Signature

```sql
APEX_LDAP.SEARCH (
    p_username             IN VARCHAR2 DEFAULT NULL,
    p_pass                 IN VARCHAR2 DEFAULT NULL,
    p_auth_base            IN VARCHAR2 DEFAULT NULL,
    p_host                 IN VARCHAR2,
    p_port                 IN NUMBER   DEFAULT 389,
    p_use_ssl              IN VARCHAR2 DEFAULT 'N',
    p_search_base          IN VARCHAR2,
    p_search_filter        IN VARCHAR2,
    p_scope                IN binary_integer DEFAULT
                                   sys.dbms_ldap.scope_subtree,
    p_timeout_sec          IN binary_integer DEFAULT 3,
    p_attribute_names      IN VARCHAR2,
    p_credential_static_id IN VARCHAR2 DEFAULT NULL )
    RETURN apex_t_ldap_attributes pipelined;
```

## Parameters

| Parameter | Description |
| --- | --- |
| `p_username` | Username to connect as (can be null for anonymous binds). |
| `p_pass` | Password of p_username (can be null for anonymous binds). |
| `p_auth_base` | Authentication base dn for p_username (can be null for anonymous binds). |
| `p_host` | LDAP server hostname. |
| `p_port` | LDAP server port (default 389 ). |
| `p_use_ssl` | Y if a SSL connection is required (default N ). |
| `p_search_base` | dn base for the search. |
| `p_search_filter` | LDAP search filter expression. |
| `p_scope` | Search scope (default descends into sub-trees). |
| `p_timeout_sec` | Timeout for the search (default 3 seconds). |
| `p_attribute_names` | Comma-separated list of return attribute names. |
| `p_credential_static_id` | The credential static ID (can be null for anonymous or username/pass binds). If it is not null and the credential could not be found, then raises the error no_data_found . |

## Important Notes

- Most APEX APIs assume the correct APEX workspace, application, and session context.
- Validate user-controlled values before passing them into administrative, security, SQL, or web-service APIs.
- Use the source link for exact behavior, defaults, and version-specific caveats.

## Simple Example

Query LDAP attributes from the pipelined SEARCH result in SQL.

```sql
begin
    for r in (
        select dn, name, val
        from table(
            apex_ldap.search(
                p_username             => :P101_BIND_USER,
                p_pass                 => :P101_BIND_PASSWORD,
                p_auth_base            => 'dc=company,dc=test',
                p_host                 => 'ldap.company.test',
                p_port                 => 636,
                p_use_ssl              => 'Y',
                p_search_base          => 'ou=People,dc=company,dc=test',
                p_search_filter        => '(mail=*@company.test)',
                p_scope                => sys.dbms_ldap.scope_subtree,
                p_timeout_sec          => 5,
                p_attribute_names      => 'mail,displayName,departmentNumber',
                p_credential_static_id => 'LDAP_BIND_CREDENTIAL'
            )
        )
    ) loop
        apex_debug.info('%s %s=%s', r.dn, r.name, r.val);
    end loop;
end;
/
```
