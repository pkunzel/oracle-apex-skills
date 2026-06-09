# APEX_DB_DICTIONARY.GET_TABLE_INFO Function Signature 2

Source: [Oracle APEX 26.1 API Reference](https://docs.oracle.com/en/database/oracle/apex/26.1/aeapi/APEX_DB_DICTIONARY.GET_TABLE_INFO-Function-Signature-2.html)

Status: generated detailed reference. Review edge cases against the source before production use.

Parent package: [APEX_DB_DICTIONARY](../APEX_DB_DICTIONARY.md)

## Purpose

This function gets formatted metadata for one or more tables or views, specified with an array.

## When To Use

Use this page when code needs the `APEX_DB_DICTIONARY.GET_TABLE_INFO` function. Confirm security, workspace, and session requirements for your calling context.

## Signature

```sql
FUNCTION apex_db_dictionary.get_table_info (
    p_table_array                IN   apex_t_varchar2,
    p_include_constraints        IN   BOOLEAN              DEFAULT TRUE,
    p_include_indexes            IN   BOOLEAN              DEFAULT FALSE,
    p_include_comments           IN   BOOLEAN              DEFAULT TRUE,
    p_include_annotations        IN   BOOLEAN              DEFAULT TRUE,
    p_include_domains            IN   BOOLEAN              DEFAULT TRUE,
    p_include_virtual_columns    IN   BOOLEAN              DEFAULT FALSE,
    p_format                     IN   t_format_type        DEFAULT C_MARKDOWN )
    RETURN CLOB;
```

## Parameters

| Parameter | Description |
| --- | --- |
| `p_table_array` | Array of table/view names, e.g. apex_t_varchar2('EMP','DEPT') Optionally, include the owner, e.g. apex_t_varchar2('HR.EMP, HR.DEPT') if not owned by the current user. Enclose in double-quotes if the identifier is case-sensitive or includes special characters, e.g. apex__t_varchar2(' "HR" . "Employees" ') |
| `p_include_constraints` | Show constraints section (default TRUE ) |
| `p_include_indexes` | Show indexes section (default FALSE ) |
| `p_include_comments` | Show table/column comments (default TRUE ) |
| `p_include_annotations` | Show table/column annotations (default TRUE ) |
| `p_include_domains` | Show SQL Domain metadata section (default TRUE ) |
| `p_include_virtual_columns` | Include virtual columns in output (default FALSE ) |
| `p_format` | c_markdown (default) or c_plain |

## Returns

This function returns a CLOB containing formatted descriptions for all requested tables/views.

## Important Notes

- Most APEX APIs assume the correct APEX workspace, application, and session context.
- Validate user-controlled values before passing them into administrative, security, SQL, or web-service APIs.
- Use the source link for exact behavior, defaults, and version-specific caveats.

## Simple Example

```sql
declare
    l_result CLOB;
begin
    l_result := apex_db_dictionary.GET_TABLE_INFO(
        p_table_array => 'EXAMPLE',
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

    l_result := apex_db_dictionary.GET_TABLE_INFO(
            p_table_array => 'EXAMPLE',
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

