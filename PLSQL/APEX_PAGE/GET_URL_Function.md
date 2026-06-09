# APEX_PAGE.GET_URL Function

Source: [Oracle APEX 26.1 API Reference](https://docs.oracle.com/en/database/oracle/apex/26.1/aeapi/GET_URL-Function.html)

Status: generated detailed reference. Review edge cases against the source before production use.

Parent package: [APEX_PAGE](../APEX_PAGE.md)

## Purpose

Returns an APEX f?p= URL . It is sometimes clearer to read a function call than a concatenated URL. See the example below for a comparison.

## When To Use

Use this page when code needs the `APEX_PAGE.GET_URL` function. Confirm security, workspace, and session requirements for your calling context.

## Signature

```sql
APEX_PAGE.GET_URL (
    p_application        IN VARCHAR2 DEFAULT NULL,
    p_page               IN VARCHAR2 DEFAULT NULL,
    p_session            IN NUMBER   DEFAULT apex_application.g_instance,
    p_request            IN VARCHAR2 DEFAULT NULL,
    p_debug              IN VARCHAR2 DEFAULT NULL,
    p_clear_cache        IN VARCHAR2 DEFAULT NULL,
    p_items              IN VARCHAR2 DEFAULT NULL,
    p_values             IN VARCHAR2 DEFAULT NULL,
    p_printer_friendly   IN VARCHAR2 DEFAULT NULL,
    p_trace              IN VARCHAR2 DEFAULT NULL,
    p_x01                IN VARCHAR2 DEFAULT NULL,
    p_hash               IN VARCHAR2 DEFAULT NULL,
    p_triggering_element IN VARCHAR2 DEFAULT 'this',
    p_plain_url          IN BOOLEAN  DEFAULT FALSE,
    p_absolute_url       IN BOOLEAN  DEFAULT FALSE )
    RETURN VARCHAR2;
```

## Parameters

| Parameter | Description |
| --- | --- |
| `p_application` | The application ID or alias. Defaults to the current application. |
| `p_page` | Page ID or alias. Defaults to the current page. |
| `p_session` | Session ID. Defaults to the current session ID. |
| `p_request` | URL request parameter. |
| `p_debug` | URL debug parameter. Defaults to the current debug mode. |
| `p_clear_cache` | URL clear cache parameter. |
| `p_items` | Comma-delimited list of item names to set session state. |
| `p_values` | Comma-separated list of item values to set session state. |
| `p_printer_friendly` | URL printer-friendly parameter. Defaults to the current request's printer-friendly mode. |
| `p_trace` | SQL trace parameter. |
| `p_x01` | Adds the parameter &x01=value to the URL. |
| `p_hash` | Adds #hash-value at the end of the URL. |
| `p_triggering_element` | A jQuery selector to identify which element to use to trigger the dialog (for example, #my_button , where "my_button" is the static ID for a button element). Required for Modal Dialog support. |
| `p_plain_url` | If the page you are calling APEX_PAGE.GET_URL from is a modal dialog, specify p_plain_url to omit the unnecessary JavaScript code in the generated link. By default, if this function is called from a modal dialog, JavaScript code to close the modal dialog is included in the generated URL. |
| `p_absolute_url` | If FALSE (default), auto-determines if an absolute URL is needed. If TRUE , always generates an absolute URL. |

## Important Notes

- Most APEX APIs assume the correct APEX workspace, application, and session context.
- Validate user-controlled values before passing them into administrative, security, SQL, or web-service APIs.
- Use the source link for exact behavior, defaults, and version-specific caveats.

## Simple Example

```sql
declare
    l_result VARCHAR2;
begin
    l_result := apex_page.GET_URL(
        p_application => 'EXAMPLE',
        p_page => 'EXAMPLE',
        p_session => 1,
        p_request => 'EXAMPLE',
        p_debug => 'EXAMPLE',
        p_clear_cache => 'EXAMPLE',
        p_items => 'EXAMPLE',
        p_values => 'EXAMPLE',
        p_printer_friendly => 'EXAMPLE',
        p_trace => 'EXAMPLE',
        p_x01 => 'EXAMPLE',
        p_hash => 'EXAMPLE',
        p_triggering_element => 'EXAMPLE',
        p_plain_url => true,
        p_absolute_url => true
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

    l_result := apex_page.GET_URL(
            p_application => 'EXAMPLE',
            p_page => 'EXAMPLE',
            p_session => 1,
            p_request => 'EXAMPLE',
            p_debug => 'EXAMPLE',
            p_clear_cache => 'EXAMPLE',
            p_items => 'EXAMPLE',
            p_values => 'EXAMPLE',
            p_printer_friendly => 'EXAMPLE',
            p_trace => 'EXAMPLE',
            p_x01 => 'EXAMPLE',
            p_hash => 'EXAMPLE',
            p_triggering_element => 'EXAMPLE',
            p_plain_url => true,
            p_absolute_url => true
        );

    apex_session.delete_session;
exception
    when others then
        apex_session.delete_session;
        raise;
end;
/
```

