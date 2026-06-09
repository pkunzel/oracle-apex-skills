# APEX_WEB_SERVICE.Setting Cookies and HTTP Headers

Source: [Oracle APEX 26.1 API Reference](https://docs.oracle.com/en/database/oracle/apex/26.1/aeapi/Setting-Cookies-and-HTTP-Headers.html)

Status: generated detailed reference. Review edge cases against the source before production use.

Parent package: [APEX_WEB_SERVICE](../APEX_WEB_SERVICE.md)

## Purpose

Set cookies and HTTP headers that should be sent along with a Web Service request by populating the globals g_request_cookies and g_request_headers before the process that invokes the Web Service.

## When To Use

Use this page when code needs the `APEX_WEB_SERVICE.Setting Cookies and HTTP Headers` topic. Confirm security, workspace, and session requirements for your calling context.

## Important Notes

- Most APEX APIs assume the correct APEX workspace, application, and session context.
- Validate user-controlled values before passing them into administrative, security, SQL, or web-service APIs.
- Use the source link for exact behavior, defaults, and version-specific caveats.

## Example

This member is a topic, constants section, data type section, or conceptual page. Use the documented definitions from the source link directly in the calling API examples.

