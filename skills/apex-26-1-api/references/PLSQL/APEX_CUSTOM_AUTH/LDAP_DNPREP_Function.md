# APEX_CUSTOM_AUTH.LDAP_DNPREP Function

Source: [Oracle APEX 26.1 API Reference](https://docs.oracle.com/en/database/oracle/apex/26.1/aeapi/LDAP_DNPREP-Function.html)

Status: generated detailed reference. Review edge cases against the source before production use.

Parent package: [APEX_CUSTOM_AUTH](../APEX_CUSTOM_AUTH.md)

## Purpose

This function replaces any occurrences of a period character ( . ) with an underscore character ( _ ) in the passed in p_username value and then returns that newly massaged username value.

## When To Use

Use this page when code needs the `APEX_CUSTOM_AUTH.LDAP_DNPREP` function. Confirm security, workspace, and session requirements for your calling context.

## Signature

```sql
APEX_CUSTOM_AUTH.LDAP_DNPREP (
    p_username IN VARCHAR2 )
    RETURN VARCHAR2;
IS
BEGIN
    RETURN replace(p_username,'.','_');
END ldap_dnprep;
```

## Parameters

| Parameter | Description |
| --- | --- |
| `p_username` | Username value of an end user. |

## Important Notes

- Most APEX APIs assume the correct APEX workspace, application, and session context.
- Validate user-controlled values before passing them into administrative, security, SQL, or web-service APIs.
- Use the source link for exact behavior, defaults, and version-specific caveats.

## Simple Example

```sql
declare
    l_ldap_user varchar2(255);
begin
    l_ldap_user := apex_custom_auth.ldap_dnprep(
        p_username => 'jane.doe@example.com'
    );

    apex_debug.info('Prepared LDAP user value: %s', l_ldap_user);
end;
/
```

