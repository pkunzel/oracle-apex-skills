# APEX_UTIL.HOST_URL Function

Source: [Oracle APEX 26.1 API Reference](https://docs.oracle.com/en/database/oracle/apex/26.1/aeapi/HOST_URL-Function.html)

Status: generated detailed reference. Review edge cases against the source before production use.

Parent package: [APEX_UTIL](../APEX_UTIL.md)

## Purpose

This function returns the URL to the Oracle APEX instance, depending on the option passed.

## When To Use

Use this page when code needs the `APEX_UTIL.HOST_URL` function. Confirm security, workspace, and session requirements for your calling context.

## Signature

```sql
APEX_UTIL.HOST_URL (
    p_option    IN VARCHAR2 DEFAULT NULL )
RETURN VARCHAR2;
```

## Parameters

| Parameter | Description |
| --- | --- |
| `p_option` | Specifies the parts of the URL to include. Possible values for p_option include: NULL - Return URL up to port number. For example: http://example.com:7778 SCRIPT - Return URL to include script name. For example: For example (Friendly URL enabled): https://example.com:7778/pls/apex/r/{workspace}/{application} For example (Friendly URL disabled) https://example.com:7778/pls/apex/ APEX_PATH - Return URL to include the APEX path. For example: https://example.com:7778/pls/apex/ IMGPRE - Return URL to include image prefix. For example: https://example.com:7778/i/ |

## Important Notes

- Most APEX APIs assume the correct APEX workspace, application, and session context.
- Validate user-controlled values before passing them into administrative, security, SQL, or web-service APIs.
- Use the source link for exact behavior, defaults, and version-specific caveats.

## Simple Example

Build an absolute link that includes the current APEX script path.

```sql
declare
    l_base_url varchar2(4000);
    l_link     varchar2(4000);
begin
    l_base_url := apex_util.host_url(
        p_option => 'SCRIPT');

    l_link := l_base_url || apex_page.get_url(
        p_page   => 10,
        p_items  => 'P10_ORDER_ID',
        p_values => :P10_ORDER_ID);
end;
/
```

