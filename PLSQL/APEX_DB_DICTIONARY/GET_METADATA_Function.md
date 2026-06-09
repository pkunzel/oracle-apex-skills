# APEX_DB_DICTIONARY.GET_METADATA Function

Source: [Oracle APEX 26.1 API Reference](https://docs.oracle.com/en/database/oracle/apex/26.1/aeapi/APEX_DB_DICTIONARY.GET_METADATA-Function.html)

Status: generated detailed reference. Review edge cases against the source before production use.

Parent package: [APEX_DB_DICTIONARY](../APEX_DB_DICTIONARY.md)

## Purpose

This procedure wraps DBMS_DEVELOPER.GET_METADATA for calling from within an APEX application. Parameters are modeled to match DBMS_DEVELOPER.GET_METADATA and pass unmodified. The return value may be passed as is to APEX_DB_DICTIONARY.FORMAT_METADATA .

## When To Use

Use this page when code needs the `APEX_DB_DICTIONARY.GET_METADATA` function. Confirm security, workspace, and session requirements for your calling context.

## Signature

```sql
FUNCTION apex_db_dictionary.get_metadata (
    p_name           IN   VARCHAR2,
    p_schema         IN   VARCHAR2     DEFAULT NULL,
    p_object_type    IN   VARCHAR2     DEFAULT NULL,
    p_level          IN   VARCHAR2     DEFAULT 'typical',
    p_etag           IN   RAW          DEFAULT NULL )
    RETURN JSON;
```

## Parameters

| Parameter | Description |
| --- | --- |
| `p_name` | The object name. A synonym of the object name can also be provided. It is case sensitive and should be provided as it appears in the data dictionary. |
| `p_schema` | The schema name. The default is the current user. It is case sensitive and should be provided as it appears in the data dictionary. |
| `p_object_type` | The type of object that you want to be retrieved. This is optional as name resolution can also be done without specifying object_type. Supported values: TABLE , INDEX , and VIEW . |
| `p_level` | The level of detail. The default is TYPICAL . Available values are BASIC (columns only), TYPICAL (includes constraints and annotations), or ALL (includes storage info). |
| `p_etag` | A unique identifier for a specific version of the document. This etag value lets an application determine whether the content of a particular version of a document is the same as that of another version. |

## Returns

The function returns metadata in JSON form as JSON on Oracle Database 21c and later and as CLOB on earlier supported releases.

## Important Notes

- Most APEX APIs assume the correct APEX workspace, application, and session context.
- Validate user-controlled values before passing them into administrative, security, SQL, or web-service APIs.
- Use the source link for exact behavior, defaults, and version-specific caveats.

## Simple Example

```sql
declare
    l_result JSON;
begin
    l_result := apex_db_dictionary.GET_METADATA(
        p_name => 'EXAMPLE',
        p_schema => 'EXAMPLE',
        p_object_type => 'EXAMPLE',
        p_level => 'EXAMPLE',
        p_etag => null
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

    l_result := apex_db_dictionary.GET_METADATA(
            p_name => 'EXAMPLE',
            p_schema => 'EXAMPLE',
            p_object_type => 'EXAMPLE',
            p_level => 'EXAMPLE',
            p_etag => null
        );

    apex_session.delete_session;
exception
    when others then
        apex_session.delete_session;
        raise;
end;
/
```

