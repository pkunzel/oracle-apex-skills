# APEX_DB_DICTIONARY.GET_TABLE_INFO_REGEX Function

Source: [Oracle APEX 26.1 API Reference](https://docs.oracle.com/en/database/oracle/apex/26.1/aeapi/APEX_DB_DICTIONARY.GET_TABLE_INFO_REGEX-Function.html)

Status: generated detailed reference. Review edge cases against the source before production use.

Parent package: [APEX_DB_DICTIONARY](../APEX_DB_DICTIONARY.md)

## Purpose

This function gets formatted metadata for one or more tables or views, specified with regex.

## When To Use

Use this page when code needs the `APEX_DB_DICTIONARY.GET_TABLE_INFO_REGEX` function. Confirm security, workspace, and session requirements for your calling context.

## Signature

```sql
FUNCTION apex_db_dictionary.get_table_info_regex (
    p_regex                      IN   VARCHAR2,
    p_owner                      IN   VARCHAR2         DEFAULT NULL,
    p_object_type                IN   VARCHAR2         DEFAULT NULL,
    p_include_constraints        IN   BOOLEAN          DEFAULT TRUE,
    p_include_indexes            IN   BOOLEAN          DEFAULT FALSE,
    p_include_comments           IN   BOOLEAN          DEFAULT TRUE,
    p_include_annotations        IN   BOOLEAN          DEFAULT TRUE,
    p_include_domains            IN   BOOLEAN          DEFAULT TRUE,
    p_include_virtual_columns    IN   BOOLEAN          DEFAULT FALSE,
    p_format                     IN   t_format_type    DEFAULT C_MARKDOWN )
    RETURN CLOB;
```

## Parameters

| Parameter | Description |
| --- | --- |
| `p_regex` | Regular expression used to search the tables and views e.g. '^EBA_' to find tables whose names start with EBA_. Use '.' to get all tables and views in the schema. |
| `p_owner` | Owner of the tables and views (default is current user) |
| `p_object_type` | Use 'TABLE' to only search table names and 'VIEW' to only search view names (default NULL for both tables and views). |
| `p_include_constraints` | Show constraints section (default TRUE ). |
| `p_include_indexes` | Show indexes section (default FALSE ). |
| `p_include_comments` | Show table/column comments (default TRUE ). |
| `p_include_annotations` | Show table/column annotations (default TRUE ). |
| `p_include_domains` | Show SQL Domain metadata section (default TRUE ). |
| `p_include_virtual_columns` | Include virtual columns in output (default FALSE ). |
| `p_format` | c_markdown (default) or c_plain . |

## Returns

This function returns a CLOB containing formatted descriptions for all tables/views matching the regex.

## Important Notes

- Most APEX APIs assume the correct APEX workspace, application, and session context.
- Validate user-controlled values before passing them into administrative, security, SQL, or web-service APIs.
- Use the source link for exact behavior, defaults, and version-specific caveats.

## Simple Example

```sql
declare
    l_result CLOB;
begin
    l_result := apex_db_dictionary.GET_TABLE_INFO_REGEX(
        p_regex => 'EXAMPLE',
        p_owner => 'EXAMPLE',
        p_object_type => 'EXAMPLE',
        p_include_constraints => true,
        p_include_indexes => true,
        p_include_comments => true,
        p_include_annotations => true,
        p_include_domains => true,
        p_include_virtual_columns => true,
        p_format => null
    );
    sys.dbms_output.put_line('Result captured.');
end;
/
```

## More Complex Example

```sql
declare
    l_result CLOB;
begin
    -- Assuming this runs outside a normal APEX page request.
    apex_session.create_session(
        p_app_id   => 100,
        p_page_id  => 1,
        p_username => 'USER');

    l_result := apex_db_dictionary.GET_TABLE_INFO_REGEX(
            p_regex => 'EXAMPLE',
            p_owner => 'EXAMPLE',
            p_object_type => 'EXAMPLE',
            p_include_constraints => true,
            p_include_indexes => true,
            p_include_comments => true,
            p_include_annotations => true,
            p_include_domains => true,
            p_include_virtual_columns => true,
            p_format => null
        );

    apex_session.delete_session;
exception
    when others then
        apex_session.delete_session;
        raise;
end;
/
```

