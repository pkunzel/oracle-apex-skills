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

```sql
declare
    l_result APEX_T_LDAP_ATTRIBUTES;
begin
    l_result := apex_ldap.SEARCH(
        p_username => 'USER',
        p_pass => 'EXAMPLE',
        p_auth_base => 'EXAMPLE',
        p_host => 'EXAMPLE',
        p_port => 1,
        p_use_ssl => 'EXAMPLE',
        p_search_base => 'EXAMPLE',
        p_search_filter => 'EXAMPLE',
        p_scope => 1,
        p_timeout_sec => 1,
        p_attribute_names => 'EXAMPLE',
        p_credential_static_id => 'EXAMPLE_STATIC_ID'
    );
    sys.dbms_output.put_line('Result captured.');
end;
/
```

## More Complex Example

```sql
declare
    l_result APEX_T_LDAP_ATTRIBUTES;
begin
    -- Assuming this runs outside a normal APEX page request.
    apex_session.create_session(
        p_app_id   => 100,
        p_page_id  => 1,
        p_username => 'USER');

    l_result := apex_ldap.SEARCH(
            p_username => 'USER',
            p_pass => 'EXAMPLE',
            p_auth_base => 'EXAMPLE',
            p_host => 'EXAMPLE',
            p_port => 1,
            p_use_ssl => 'EXAMPLE',
            p_search_base => 'EXAMPLE',
            p_search_filter => 'EXAMPLE',
            p_scope => 1,
            p_timeout_sec => 1,
            p_attribute_names => 'EXAMPLE',
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

