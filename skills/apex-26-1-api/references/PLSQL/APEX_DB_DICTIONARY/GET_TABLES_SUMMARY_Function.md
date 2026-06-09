# APEX_DB_DICTIONARY.GET_TABLES_SUMMARY Function

Source: [Oracle APEX 26.1 API Reference](https://docs.oracle.com/en/database/oracle/apex/26.1/aeapi/APEX_DB_DICTIONARY.GET_TABLES_SUMMARY-Function.html)

Status: generated detailed reference. Review edge cases against the source before production use.

Parent package: [APEX_DB_DICTIONARY](../APEX_DB_DICTIONARY.md)

## Purpose

This function gets a list of table/view names formatted as markdown or plain text.

## When To Use

Use this page when code needs the `APEX_DB_DICTIONARY.GET_TABLES_SUMMARY` function. Confirm security, workspace, and session requirements for your calling context.

## Signature

```sql
FUNCTION apex_db_dictionary.get_tables_summary (
    p_regex                  IN   VARCHAR2         DEFAULT NULL,
    p_owner                  IN   VARCHAR2         DEFAULT NULL,
    p_object_type            IN   VARCHAR2         DEFAULT NULL,
    p_include_comments       IN   BOOLEAN          DEFAULT TRUE,
    p_include_annotations    IN   BOOLEAN          DEFAULT TRUE,
    p_format                 IN   t_format_type    DEFAULT C_MARKDOWN )
    RETURN CLOB;
```

## Parameters

| Parameter | Description |
| --- | --- |
| `p_regex` | Regular expression for object names. |
| `p_owner` | Owner of the tables/views (default current user). |
| `p_object_type` | TABLE or VIEW . The default NULL returns tables and views. |
| `p_include_comments` | Include table/view comments and comment-derived attributes (default TRUE ). |
| `p_include_annotations` | Include table/view annotations (default TRUE ). |
| `p_format` | c_markdown (default) or c_plain . |

## Returns

This function returns a CLOB summary for all matching tables/views, including requested annotations and/or comment-derived attributes.

## Important Notes

- Most APEX APIs assume the correct APEX workspace, application, and session context.
- Validate user-controlled values before passing them into administrative, security, SQL, or web-service APIs.
- Use the source link for exact behavior, defaults, and version-specific caveats.

## Simple Example

```sql
declare
    l_result CLOB;
begin
    l_result := apex_db_dictionary.GET_TABLES_SUMMARY(
        p_regex => 'EXAMPLE',
        p_owner => 'EXAMPLE',
        p_object_type => 'EXAMPLE',
        p_include_comments => true,
        p_include_annotations => true,
        p_format => null
    );
    sys.dbms_output.put_line('Result captured.');
end;
/
```

