# APEX_DATA_LOADING.Data Types

Source: [Oracle APEX 26.1 API Reference](https://docs.oracle.com/en/database/oracle/apex/26.1/aeapi/APEX_DATA_LOADING-Data-Types.html)

Status: generated detailed reference. Review edge cases against the source before production use.

Parent package: [APEX_DATA_LOADING](../APEX_DATA_LOADING.md)

## Purpose

The APEX_DATA_LOADING package uses the following data types.

## When To Use

Use this page when code needs the `APEX_DATA_LOADING.Data Types` data types. Confirm security, workspace, and session requirements for your calling context.

## Important Notes

- Most APEX APIs assume the correct APEX workspace, application, and session context.
- Validate user-controlled values before passing them into administrative, security, SQL, or web-service APIs.
- Use the source link for exact behavior, defaults, and version-specific caveats.

## Example

The package exposes the `t_data_load_result` record returned by `LOAD_DATA`.

```sql
type t_data_load_result is record(
    processed_rows pls_integer,
    error_rows     pls_integer
);
```

Use the returned counts to decide whether to continue the workflow or route the user to load-error review.

```sql
declare
    l_result apex_data_loading.t_data_load_result;
begin
    l_result := apex_data_loading.load_data(
        p_static_id    => 'ORDER_IMPORT',
        p_data_to_load => :P30_CSV_TEXT
    );

    if l_result.error_rows > 0 then
        apex_debug.warn('Rows rejected during load: %s', l_result.error_rows);
    end if;
end;
/
```
