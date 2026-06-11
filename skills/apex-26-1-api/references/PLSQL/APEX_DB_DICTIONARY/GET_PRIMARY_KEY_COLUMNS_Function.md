# APEX_DB_DICTIONARY.GET_PRIMARY_KEY_COLUMNS Function

Source: [Oracle APEX 26.1 API Reference](https://docs.oracle.com/en/database/oracle/apex/26.1/aeapi/APEX_DB_DICTIONARY.GET_PRIMARY_KEY_COLUMNS-Function.html)

Status: generated detailed reference. Review edge cases against the source before production use.

Parent package: [APEX_DB_DICTIONARY](../APEX_DB_DICTIONARY.md)

## Purpose

This procedure returns a comma-delimited list of column names in the primary key. Returns NULL if no PK constraint exists.

## When To Use

Use this page when code needs the `APEX_DB_DICTIONARY.GET_PRIMARY_KEY_COLUMNS` function. Confirm security, workspace, and session requirements for your calling context.

## Signature

```sql
FUNCTION apex_db_dictionary.get_primary_key_columns (
    p_table      IN   VARCHAR2,
    p_owner      IN   VARCHAR2     DEFAULT NULL,
    p_delimiter  IN   VARCHAR2     DEFAULT ',' )
    RETURN VARCHAR2;
```

## Parameters

| Parameter | Description |
| --- | --- |
| `p_table` | Name of the object (table or view). May include the owner, e.g. HR.EMP . |
| `p_owner` | (Optional) The owner of the object (default current user). |
| `p_delimiter` | Delimiter used between column names (default ' , '). |

## Returns

This function returns a comma-delimited list of primary key column names. Returns NULL if no primary key constraint exists.

## Important Notes

- Most APEX APIs assume the correct APEX workspace, application, and session context.
- Validate user-controlled values before passing them into administrative, security, SQL, or web-service APIs.
- Use the source link for exact behavior, defaults, and version-specific caveats.

## Simple Example

```sql
declare
    l_columns apex_t_varchar2;
begin
    l_columns := apex_db_dictionary.get_primary_key_columns(
        p_table => 'EMPLOYEES',
        p_owner => 'HR'
    );

    for i in 1 .. l_columns.count loop
        sys.dbms_output.put_line(l_columns(i));
    end loop;
end;
/
```
