# APEX_DB_DICTIONARY.FORMAT_METADATA Function Signature 2

Source: [Oracle APEX 26.1 API Reference](https://docs.oracle.com/en/database/oracle/apex/26.1/aeapi/APEX_DB_DICTIONARY.FORMAT_METADATA-Function-Signature-2.html)

Status: generated detailed reference. Review edge cases against the source before production use.

Parent package: [APEX_DB_DICTIONARY](../APEX_DB_DICTIONARY.md)

## Purpose

This procedure converts DBMS_DEVELOPER.GET_METADATA JSON output to readable text for human and LLM consumption. This overload is provided for Oracle Database 19c backwards compatibility.

## When To Use

Use this page when code needs the `APEX_DB_DICTIONARY.FORMAT_METADATA` function. Confirm security, workspace, and session requirements for your calling context.

## Signature

```sql
FUNCTION apex_db_dictionary.format_metadata (
    p_json                       IN   CLOB,
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
| `p_json` | JSON output from DBMS_DEVELOPER.GET_METADATA as CLOB |
| `p_include_constraints` | Show constraints section (default TRUE ) |
| `p_include_indexes` | Show indexes section (default FALSE ) |
| `p_include_comments` | Show table/column comments (default TRUE ) |
| `p_include_annotations` | Show table/column annotations (default TRUE ) |
| `p_include_domains` | Show SQL Domain metadata section (default TRUE ) |
| `p_include_virtual_columns` | Include virtual columns in output (default FALSE ) |
| `p_format` | C_MARKDOWN (default) or C_PLAIN |

## Returns

CLOB containing formatted table description. Parent topic: APEX_DB_DICTIONARY

## Important Notes

- Most APEX APIs assume the correct APEX workspace, application, and session context.
- Validate user-controlled values before passing them into administrative, security, SQL, or web-service APIs.
- Use the source link for exact behavior, defaults, and version-specific caveats.

## Simple Example

```sql
declare
    l_metadata clob;
    l_plain    clob;
begin
    l_metadata := apex_db_dictionary.get_metadata(
        p_name        => 'EMPLOYEES',
        p_schema      => 'HR',
        p_object_type => 'TABLE'
    );

    l_plain := apex_db_dictionary.format_metadata(
        p_json                => l_metadata,
        p_include_constraints => true,
        p_include_indexes     => false,
        p_include_comments    => true,
        p_format              => apex_db_dictionary.c_plain
    );

    sys.dbms_output.put_line(dbms_lob.substr(l_plain, 4000, 1));
end;
/
```
