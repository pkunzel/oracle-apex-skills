# APEX_DB_DICTIONARY.GET_TABLES_JSON Function

Source: [Oracle APEX 26.1 API Reference](https://docs.oracle.com/en/database/oracle/apex/26.1/aeapi/APEX_DB_DICTIONARY.GET_TABLES_JSON-Function.html)

Status: generated detailed reference. Review edge cases against the source before production use.

Parent package: [APEX_DB_DICTIONARY](../APEX_DB_DICTIONARY.md)

## Purpose

This function gets a list of table/view names matching regex criteria as JSON. If p_regex is null after trim, an empty array is returned.

## When To Use

Use this page when code needs the `APEX_DB_DICTIONARY.GET_TABLES_JSON` function. Confirm security, workspace, and session requirements for your calling context.

## Signature

```sql
FUNCTION apex_db_dictionary.get_tables_json (
    p_regex                  IN   VARCHAR2     DEFAULT NULL,
    p_owner                  IN   VARCHAR2     DEFAULT NULL,JSON
    p_object_type            IN   VARCHAR2     DEFAULT NULL,
    p_include_comments       IN   BOOLEAN      DEFAULT TRUE,
    p_include_annotations    IN   BOOLEAN      DEFAULT TRUE )
    RETURN JSON;
```

## Parameters

| Parameter | Description |
| --- | --- |
| `p_regex` | Regular expression for object names. |
| `p_owner` | Owner of the tables/views (default current user). |
| `p_object_type` | TABLE or VIEW . The default NULL returns tables and views. |
| `p_include_comments` | Include table/view comments and comment-derived attributes (default TRUE ). |
| `p_include_annotations` | Include table/view annotations (default TRUE ). |

## Returns

This function returns a JSON array of objects. Each object includes: owner: object owner name: object name type: TABLE or VIEW comment: base table/view comment text, excluding embedded common attributes (when present and requested) annotations: table/view annotations plus common attributes parsed from comments (when requested)

## Important Notes

- Most APEX APIs assume the correct APEX workspace, application, and session context.
- Validate user-controlled values before passing them into administrative, security, SQL, or web-service APIs.
- Use the source link for exact behavior, defaults, and version-specific caveats.

## Simple Example

```sql
declare
    l_result JSON;
begin
    l_result := apex_db_dictionary.GET_TABLES_JSON(
        p_regex => 'EXAMPLE',
        p_owner => 'EXAMPLE',
        p_object_type => 'EXAMPLE',
        p_include_comments => true,
        p_include_annotations => true
    );
    sys.dbms_output.put_line('Result captured.');
end;
/
```

## More Complex Example

```sql
declare
    l_result JSON;
begin
    -- Assuming this runs outside a normal APEX page request.
    apex_session.create_session(
        p_app_id   => 100,
        p_page_id  => 1,
        p_username => 'USER');

    l_result := apex_db_dictionary.GET_TABLES_JSON(
            p_regex => 'EXAMPLE',
            p_owner => 'EXAMPLE',
            p_object_type => 'EXAMPLE',
            p_include_comments => true,
            p_include_annotations => true
        );

    apex_session.delete_session;
exception
    when others then
        apex_session.delete_session;
        raise;
end;
/
```

