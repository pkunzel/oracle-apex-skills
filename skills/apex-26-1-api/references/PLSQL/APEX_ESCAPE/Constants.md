# APEX_ESCAPE.Constants

Source: [Oracle APEX 26.1 API Reference](https://docs.oracle.com/en/database/oracle/apex/26.1/aeapi/APEX_ESCAPE-Constants.html)

Status: generated detailed reference. Review edge cases against the source before production use.

Parent package: [APEX_ESCAPE](../APEX_ESCAPE.md)

## Purpose

The APEX_ESCAPE package uses the following constants.

## Constants

```sql
c_ldap_dn_reserved_chars     -- reserved characters for LDAP distinguished names
c_ldap_search_reserved_chars -- reserved characters for LDAP search filters
c_html_allowlist_tags        -- default tags allowed by HTML_ALLOWLIST and HTML_ALLOWLIST_CLOB
```

Use the package constants as defaults instead of hard-coded reserved-character lists when calling `LDAP_DN`, `LDAP_SEARCH_FILTER`, `HTML_ALLOWLIST`, or `HTML_ALLOWLIST_CLOB`.

## When To Use

Use this page when code needs the `APEX_ESCAPE.Constants` constants. Confirm security, workspace, and session requirements for your calling context.

## Important Notes

- Most APEX APIs assume the correct APEX workspace, application, and session context.
- Validate user-controlled values before passing them into administrative, security, SQL, or web-service APIs.
- Use the source link for exact behavior, defaults, and version-specific caveats.

## Example

Use the allowlist and reserved-character constants when you need the documented defaults explicitly:

```sql
begin
    sys.dbms_output.put_line(apex_escape.c_html_allowlist_tags);
    sys.dbms_output.put_line(apex_escape.ldap_dn('CN=Doe, Jane+Sales'));
    sys.dbms_output.put_line(apex_escape.ldap_search_filter('jane*(doe)'));
end;
/
```
