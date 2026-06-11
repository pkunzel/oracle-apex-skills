# APEX_DATA_EXPORT.Data Types

Source: [Oracle APEX 26.1 API Reference](https://docs.oracle.com/en/database/oracle/apex/26.1/aeapi/APEX_DATA_EXPORT-Data-Types.html)

Status: generated detailed reference. Review edge cases against the source before production use.

Parent package: [APEX_DATA_EXPORT](../APEX_DATA_EXPORT.md)

## Purpose

The APEX_DATA_EXPORT package uses the following data types.

## When To Use

Use this page when code needs the `APEX_DATA_EXPORT.Data Types` data types. Confirm security, workspace, and session requirements for your calling context.

## Important Notes

- Most APEX APIs assume the correct APEX workspace, application, and session context.
- Validate user-controlled values before passing them into administrative, security, SQL, or web-service APIs.
- Use the source link for exact behavior, defaults, and version-specific caveats.

## Example

The most commonly used types are collections passed to helper procedures and the `t_export` record returned by `EXPORT`.

```sql
subtype t_alignment           is varchar2(255);
subtype t_label               is varchar2(255);
subtype t_color               is varchar2(4000);
subtype t_format              is varchar2(20);
subtype t_content_disposition is varchar2(30);

type t_export is record (
    file_name    varchar2(32767),
    format       t_format,
    mime_type    varchar2(32767),
    as_clob      boolean,
    content_blob blob,
    content_clob clob
);

type t_columns       is table of t_column       index by pls_integer;
type t_column_groups is table of t_column_group index by pls_integer;
type t_highlights    is table of t_highlight    index by pls_integer;
type t_aggregates    is table of t_aggregate    index by pls_integer;
```

Typical flow: build optional `t_columns`, `t_column_groups`, `t_highlights`, or `t_aggregates`, call `EXPORT`, then pass the returned `t_export` to `DOWNLOAD` or store its BLOB/CLOB content.
