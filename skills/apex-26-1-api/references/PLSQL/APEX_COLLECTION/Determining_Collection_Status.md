# APEX_COLLECTION.Determining Collection Status

Source: [Oracle APEX 26.1 API Reference](https://docs.oracle.com/en/database/oracle/apex/26.1/aeapi/Determining-Collection-Status.html)

Status: generated detailed reference. Review edge cases against the source before production use.

Parent package: [APEX_COLLECTION](../APEX_COLLECTION.md)

## Purpose

The p_generate_md5 parameter determines if the MD5 message digests are computed for each member of a collection. The collection status flag is set to FALSE immediately after you create a collection. If any operations are performed on the collection (such as add, update, truncate, and so on), this flag is set to TRUE .

## When To Use

Use this page when code needs the `APEX_COLLECTION.Determining Collection Status` topic. Confirm security, workspace, and session requirements for your calling context.

## Important Notes

- Most APEX APIs assume the correct APEX workspace, application, and session context.
- Validate user-controlled values before passing them into administrative, security, SQL, or web-service APIs.
- Use the source link for exact behavior, defaults, and version-specific caveats.

## Example

This member is a topic, constants section, data type section, or conceptual page. Use the documented definitions from the source link directly in the calling API examples.

