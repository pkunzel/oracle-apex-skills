# APEX_CUSTOM_AUTH.GET_LDAP_PROPS Procedure

Source: [Oracle APEX 26.1 API Reference](https://docs.oracle.com/en/database/oracle/apex/26.1/aeapi/GET_LDAP_PROPS-Procedure.html)

Status: generated detailed reference. Review edge cases against the source before production use.

Parent package: [APEX_CUSTOM_AUTH](../APEX_CUSTOM_AUTH.md)

## Purpose

This procedure obtains the LDAP attributes of the current authentication scheme for the current application. These properties can be viewed directly in App Builder by viewing the authentication scheme attributes.

## When To Use

Use this page when code needs the `APEX_CUSTOM_AUTH.GET_LDAP_PROPS` procedure. Confirm security, workspace, and session requirements for your calling context.

## Signature

```sql
APEX_CUSTOM_AUTH.GET_LDAP_PROPS (
    p_ldap_host                OUT VARCHAR2,
    p_ldap_port                OUT INTEGER,
    p_use_ssl                  OUT VARCHAR2,
    p_use_exact_dn             OUT VARCHAR2,
    p_ldap_dn                  OUT VARCHAR2,
    p_search_filter            OUT VARCHAR2,
    p_ldap_edit_function       OUT VARCHAR2 )
```

## Parameters

| Parameter | Description |
| --- | --- |
| `p_ldap_host` | LDAP host name. |
| `p_ldap_port` | LDAP port number. |
| `p_use_ssl` | Whether SSL is used. |
| `p_use_exact_dn` | Whether exact distinguished names are used. |
| `p_search_filter` | The search filter used if exact DN is not used. |
| `p_ldap_dn` | LDAP DN string. |
| `p_ldap_edit_function` | LDAP edit function name. |

## Returns

This is a procedure and does not return a value.

## Important Notes

- Most APEX APIs assume the correct APEX workspace, application, and session context.
- Validate user-controlled values before passing them into administrative, security, SQL, or web-service APIs.
- Use the source link for exact behavior, defaults, and version-specific caveats.

## Simple Example

```sql
declare
    l_host               varchar2(4000);
    l_port               integer;
    l_use_ssl            varchar2(10);
    l_use_exact_dn       varchar2(10);
    l_dn                 varchar2(4000);
    l_search_filter      varchar2(4000);
    l_ldap_edit_function varchar2(4000);
begin
    apex_custom_auth.get_ldap_props(
        p_ldap_host          => l_host,
        p_ldap_port          => l_port,
        p_use_ssl            => l_use_ssl,
        p_use_exact_dn       => l_use_exact_dn,
        p_ldap_dn            => l_dn,
        p_search_filter      => l_search_filter,
        p_ldap_edit_function => l_ldap_edit_function
    );

    apex_debug.info('LDAP host: %s:%s', l_host, l_port);
end;
/
```

