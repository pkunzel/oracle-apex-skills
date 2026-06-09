# APEX_UTIL.PREPARE_URL Function

Source: [Oracle APEX 26.1 API Reference](https://docs.oracle.com/en/database/oracle/apex/26.1/aeapi/PREPARE_URL-Function.html)

Status: generated detailed reference. Review edge cases against the source before production use.

Parent package: [APEX_UTIL](../APEX_UTIL.md)

## Purpose

Note:

## When To Use

Use this page when code needs the `APEX_UTIL.PREPARE_URL` function. Confirm security, workspace, and session requirements for your calling context.

## Signature

```sql
APEX_UTIL.PREPARE_URL (
    p_url                    IN VARCHAR2,
    p_url_charset            IN VARCHAR2 DEFAULT NULL,
    p_checksum_type          IN VARCHAR2 DEFAULT NULL,
    p_triggering_element     IN VARCHAR2 DEFAULT 'this',
    p_plain_url              IN BOOLEAN  DEFAULT FALSE,
RETURN VARCHAR2;
```

## Parameters

| Parameter | Description |
| --- | --- |
| `p_url` | An APEX navigation URL with all substitutions resolved. |
| `p_url_charset` | The character set name (for example, UTF-8 ) to use when escaping special characters contained within argument values. |
| `p_checksum_type` | Null or any of the following values: PUBLIC_BOOKMARK or 1 - Use this when generating links to be used by any user. For example, use this value when generating an email which includes links to an application. PRIVATE_BOOKMARK or 2 - Use this when generating a link to be used outside of the current session. This option can only be used by the same currently authenticated user. SESSION or 3 - Use this when generating links to an application. This option can only be used within the current session. |
| `p_triggering_element` | A jQuery selector (for example, #my_button , where my_button is the static ID for a button element), to identify which element to use to trigger the dialog. This is required for Modal Dialog support. |
| `p_plain_url` | If the page you are calling APEX_UTIL.PREPARE_URL from is a modal dialog, specify p_plain_url to omit the unnecessary dialog code in the generated link. By default, if this function is called from a modal dialog, extra code to close the modal dialog is included in the generated URL. |

## Important Notes

- Most APEX APIs assume the correct APEX workspace, application, and session context.
- Validate user-controlled values before passing them into administrative, security, SQL, or web-service APIs.
- Use the source link for exact behavior, defaults, and version-specific caveats.

## Simple Example

```sql
declare
    l_result VARCHAR2;
begin
    l_result := apex_util.PREPARE_URL(
        p_url => 'EXAMPLE',
        p_url_charset => 'EXAMPLE',
        p_checksum_type => 'EXAMPLE',
        p_triggering_element => 'EXAMPLE',
        p_plain_url => true
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

    l_result := apex_util.PREPARE_URL(
            p_url => 'EXAMPLE',
            p_url_charset => 'EXAMPLE',
            p_checksum_type => 'EXAMPLE',
            p_triggering_element => 'EXAMPLE',
            p_plain_url => true
        );

    apex_session.delete_session;
exception
    when others then
        apex_session.delete_session;
        raise;
end;
/
```

