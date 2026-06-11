# APEX_DB_DICTIONARY.GET_TABLES_ARRAY Function

Source: [Oracle APEX 26.1 API Reference](https://docs.oracle.com/en/database/oracle/apex/26.1/aeapi/APEX_DB_DICTIONARY.GET_TABLES_ARRAY-Function.html)

Status: generated detailed reference. Review edge cases against the source before production use.

Parent package: [APEX_DB_DICTIONARY](../APEX_DB_DICTIONARY.md)

## Purpose

This function gets a list of table/view names matching regex criteria. If p_regex is null after trim, an empty array is returned.

## When To Use

Use this page when code needs the `APEX_DB_DICTIONARY.GET_TABLES_ARRAY` function. Confirm security, workspace, and session requirements for your calling context.

## Signature

```sql
FUNCTION apex_db_dictionary.get_tables_array (
    p_regex          IN   VARCHAR2     DEFAULT NULL,
    p_owner          IN   VARCHAR2     DEFAULT NULL,
    p_object_type    IN   VARCHAR2     DEFAULT NULL )
    RETURN WWV_FLOW_T_VARCHAR2;
```

## Parameters

| Parameter | Description |
| --- | --- |
| `p_regex` | Regular expression for object names. |
| `p_owner` | Owner of the tables/views (default current user). |
| `p_object_type` | TABLE or VIEW . The default NULL returns tables and views. |

## Returns

This function returns an array of fully qualified names in the format OWNER . OBJECT_NAME .

## Important Notes

- Most APEX APIs assume the correct APEX workspace, application, and session context.
- Validate user-controlled values before passing them into administrative, security, SQL, or web-service APIs.
- Use the source link for exact behavior, defaults, and version-specific caveats.

## Simple Example

```sql
declare
    l_tables apex_t_varchar2;
begin
    l_tables := apex_db_dictionary.get_tables_array(
        p_regex       => '^EMP',
        p_owner       => 'HR',
        p_object_type => 'TABLE'
    );

    for i in 1 .. l_tables.count loop
        sys.dbms_output.put_line(l_tables(i));
    end loop;
end;
/
```
