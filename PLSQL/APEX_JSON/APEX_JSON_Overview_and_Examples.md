# APEX_JSON.APEX_JSON Overview and Examples

Source: [Oracle APEX 26.1 API Reference](https://docs.oracle.com/en/database/oracle/apex/26.1/aeapi/Package-Overview-and-Examples.html)

Status: generated detailed reference. Review edge cases against the source before production use.

Parent package: [APEX_JSON](../APEX_JSON.md)

## Purpose

To read from a string that contains JSON data, first use parse() to convert the string to an internal format. Then use the get_% routines (for example, get_varchar2() , get_number() , ...) to access the data and find_paths_like() to search.

## When To Use

Use this page when code needs the `APEX_JSON.APEX_JSON` examples. Confirm security, workspace, and session requirements for your calling context.

## Important Notes

- Most APEX APIs assume the correct APEX workspace, application, and session context.
- Validate user-controlled values before passing them into administrative, security, SQL, or web-service APIs.
- Use the source link for exact behavior, defaults, and version-specific caveats.

## Example

This member is a topic, constants section, data type section, or conceptual page. Use the documented definitions from the source link directly in the calling API examples.

