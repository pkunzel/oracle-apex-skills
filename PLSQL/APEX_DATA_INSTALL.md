# APEX_DATA_INSTALL

Source: [Oracle APEX 26.1 API Reference](https://docs.oracle.com/en/database/oracle/apex/26.1/aeapi/APEX_DATA_INSTALL.html)

Status: curated first-pass reference.

## Purpose

`APEX_DATA_INSTALL` loads supporting object data that is packaged with an APEX application. It is a narrow deployment helper: the package has one documented procedure for loading exported seed/migration data into a target table.

## When To Use

Use this package when reinstalling or replaying supporting object data without reinstalling every supporting object, especially from SQL Workshop or a controlled post-install script.

Do not use it for regular end-user uploads; use [APEX_DATA_LOADING](APEX_DATA_LOADING.md), [APEX_DATA_PARSER](APEX_DATA_PARSER.md), or application-specific import code for that.

## API Surface

| Member | Use |
| --- | --- |
| `LOAD_SUPPORTING_OBJECT_DATA` | Loads supporting object data into a named target table for an application. |

## Signature

```sql
apex_data_install.load_supporting_object_data(
    p_table_name           in varchar2,
    p_delete_after_install in boolean,
    p_app_id               in number default null);
```

## Simple Example

Assuming the app package includes data for table `DEMO_LOOKUPS`:

```sql
begin
    apex_data_install.load_supporting_object_data(
        p_table_name           => 'DEMO_LOOKUPS',
        p_delete_after_install => true,
        p_app_id               => 100);
end;
/
```

## Controlled Reinstall Example

Assuming a post-deployment script should reload seed rows but leave exported files available for another environment:

```sql
begin
    apex_application_install.set_application_id(100);

    apex_data_install.load_supporting_object_data(
        p_table_name           => 'APP_SEED_COUNTRIES',
        p_delete_after_install => false,
        p_app_id               => 100);
end;
/
```

## Notes

- Run from a trusted install/admin context with the correct workspace and parsing schema.
- Confirm the target table name and app ID before running in production.
- Use `p_delete_after_install => true` when the deployment package should clean up supporting files after load.

## Related APIs

- [APEX_APPLICATION_INSTALL](APEX_APPLICATION_INSTALL.md) for application imports.
- [APEX_DATA_LOADING](APEX_DATA_LOADING.md) for declarative data loading.
- [APEX_DATA_PARSER](APEX_DATA_PARSER.md) for parsing uploaded or staged files.

<!-- BEGIN GENERATED MEMBER LINKS -->

## Local Member Detail Pages

Generated navigation for LLM retrieval. Use the local detail page first, then follow the Oracle source link when exact wording or edge-case behavior must be verified.

| Member | Kind | Local detail | Source |
| --- | --- | --- | --- |
| LOAD_SUPPORTING_OBJECT_DATA Procedure | procedure | [local](APEX_DATA_INSTALL/LOAD_SUPPORTING_OBJECT_DATA_Procedure.md) | [Oracle](https://docs.oracle.com/en/database/oracle/apex/26.1/aeapi/LOAD_SUPPORTING_OBJECT_DATA-Procedure.html) |

<!-- END GENERATED MEMBER LINKS -->
