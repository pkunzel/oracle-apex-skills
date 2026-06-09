# APEX_APPLICATION_INSTALL

Source: [Oracle APEX 26.1 API Reference](https://docs.oracle.com/en/database/oracle/apex/26.1/aeapi/APEX_APPLICATION_INSTALL.html)

Status: curated first-pass reference.

## Purpose

`APEX_APPLICATION_INSTALL` configures and runs APEX application imports. It lets install scripts change the application ID, workspace, parsing schema, alias, component ID offset, build status, supporting object behavior, remote server values, subscriptions, dataset import modes, data reporter remaps, and related install-time settings before calling `INSTALL`.

Use this package for CI/CD import scripts, cross-environment migrations, template application installs, and controlled app replacement.

## When To Use

Use `APEX_APPLICATION_INSTALL` before or during an import. Use [APEX_APPLICATION_ADMIN](APEX_APPLICATION_ADMIN.md) after an application is already installed.

Common tasks:

- Import an exported application into a different workspace or schema.
- Generate a new application ID and component offset.
- Replace remote server base URLs for a target environment.
- Force an imported app to `RUN_ONLY` or `RUN_AND_BUILD`.
- Preserve or discard sessions and background executions.
- Remap subscriptions, datasets, and Data Reporter metadata during import.

## API Surface

| Need | Members |
| --- | --- |
| Reset state | `CLEAR_ALL` |
| Choose app identity | `GENERATE_APPLICATION_ID`, `SET_APPLICATION_ID`, `SET_APPLICATION_ALIAS`, `SET_APPLICATION_NAME` |
| Avoid component ID conflicts | `GENERATE_OFFSET`, `SET_OFFSET` |
| Workspace/schema target | `SET_WORKSPACE`, `SET_WORKSPACE_ID`, `SET_SCHEMA` |
| Runtime/build behavior | `SET_BUILD_STATUS`, `SET_AUTO_INSTALL_SUP_OBJ`, `SET_KEEP_SESSIONS`, `SET_KEEP_BACKGROUND_EXECS`, `SUSPEND_BACKGROUND_EXECS` |
| Environment remapping | `SET_PROXY`, `SET_REMOTE_SERVER`, `SET_REST_SOURCE_CATALOG_GROUP`, `SET_AUTHENTICATION_SCHEME` |
| Subscriptions and generated data | `SET_SUBSCRIPTION_MODE`, `SET_SUBSCRIPTION_MAPPING`, `SET_DATASET_IMPORT_MODE`, `ADD_DATA_REPORTER_REMAP` |
| Inspect chosen values | `GET_*`, `GET_INFO` |
| Install/remove | `INSTALL`, `REMOVE_APPLICATION` |

## Safe Import Skeleton

Assuming `l_source` is an `apex_t_export_files` value read from an exported application file or produced by `APEX_EXPORT.GET_APPLICATION`:

```sql
declare
    l_source apex_t_export_files;
begin
    apex_application_install.clear_all;

    apex_application_install.set_workspace('EXAMPLE_WS');
    apex_application_install.set_schema('EXAMPLE_APP');
    apex_application_install.generate_application_id;
    apex_application_install.generate_offset;
    apex_application_install.set_application_alias('EXAMPLE_APP');
    apex_application_install.set_build_status('RUN_ONLY');
    apex_application_install.set_auto_install_sup_obj(true);

    apex_application_install.install(
        p_source             => l_source,
        p_overwrite_existing => false);
end;
/
```

Use `CLEAR_ALL` at the start of scripted imports so settings from earlier imports in the same session do not bleed into the next install.

## Import From Export File

Assuming a table `deploy_files(file_name varchar2(255), file_clob clob)` stores an APEX export file:

```sql
declare
    l_source apex_t_export_files;
begin
    select apex_t_export_files(
               apex_t_export_file(
                   name     => file_name,
                   contents => file_clob))
      into l_source
      from deploy_files
     where file_name = 'f100.sql';

    apex_application_install.clear_all;
    apex_application_install.set_workspace('EXAMPLE_WS');
    apex_application_install.set_application_id(200);
    apex_application_install.set_schema('EXAMPLE_APP');
    apex_application_install.generate_offset;

    apex_application_install.install(
        p_source             => l_source,
        p_overwrite_existing => true);
end;
/
```

For split exports, build `apex_t_export_files` with all split file names and CLOB contents. Passing multiple applications in one call is not supported.

## Remote Server Remapping

Use `SET_REMOTE_SERVER` when the exported application contains a remote server or REST/AI service endpoint that differs by environment.

```sql
begin
    apex_application_install.set_remote_server(
        p_static_id => 'ORDERS_API',
        p_base_url  => 'https://api.example.com/prod/');

    apex_application_install.set_remote_server(
        p_static_id => 'GENAI_SERVICE',
        p_base_url  => 'https://ai.example.com/v1/');
end;
/
```

For AI remote server attributes in APEX 26.1, inspect the `GET_REMOTE_SERVER_AI_*` local member pages for exact fields and defaults.

## Build Status Pattern

Set imported apps to `RUN_ONLY` for production and leave `RUN_AND_BUILD` for development.

```sql
begin
    apex_application_install.set_build_status('RUN_ONLY');
end;
/
```

Pair this with a post-install check:

```sql
begin
    if apex_application_install.get_build_status <> 'RUN_ONLY' then
        raise_application_error(-20000, 'Production import must be RUN_ONLY.');
    end if;
end;
/
```

## Export And Reinstall Pattern

Assuming you need to clone app `100` into a new generated ID in the same APEX instance:

```sql
declare
    l_source apex_t_export_files;
begin
    l_source := apex_export.get_application(
        p_application_id          => 100,
        p_type                    => apex_export.c_type_sql,
        p_split                   => false,
        p_with_supporting_objects => 'Y');

    apex_application_install.clear_all;
    apex_application_install.set_workspace('EXAMPLE_WS');
    apex_application_install.generate_application_id;
    apex_application_install.generate_offset;
    apex_application_install.set_application_alias('EXAMPLE_APP_CLONE');
    apex_application_install.install(l_source);
end;
/
```

## Safety Notes

- Run import scripts as a privileged deployment user with the correct APEX workspace context.
- Always set workspace and parsing schema explicitly in automation.
- Use `GENERATE_APPLICATION_ID` and `GENERATE_OFFSET` unless intentionally replacing a known app ID.
- Use `p_overwrite_existing => false` by default; make overwrite explicit in deployment scripts.
- Do not import untrusted export files. APEX exports contain executable SQL/PLSQL definitions.
- Review remote server, credential, AI service, and proxy remaps before production import.
- `INSTALL` can raise import parser and ID reservation errors; let CI/CD fail loudly.
- Open local member detail pages for exact signatures, especially newer APEX 26.1 data reporter, dataset, subscription, and AI remote server settings.

## Related APIs

- [APEX_EXPORT](APEX_EXPORT.md) for producing application exports.
- [APEX_APPLICATION_ADMIN](APEX_APPLICATION_ADMIN.md) for modifying installed applications.
- [APEX_INSTANCE_ADMIN](APEX_INSTANCE_ADMIN.md) for workspace/schema administration.
- [APEX_UTIL](APEX_UTIL.md) for setting workspace context in older scripts.

<!-- BEGIN GENERATED MEMBER LINKS -->

## Local Member Detail Pages

Generated navigation for LLM retrieval. Use the local detail page first, then follow the Oracle source link when exact wording or edge-case behavior must be verified.

| Member | Kind | Local detail | Source |
| --- | --- | --- | --- |
| About the APEX_APPLICATION_INSTALL API | about | [local](APEX_APPLICATION_INSTALL/About_the_APEX_APPLICATION_INSTALL_API.md) | [Oracle](https://docs.oracle.com/en/database/oracle/apex/26.1/aeapi/Package-Overview.html) |
| Attributes Manipulated by APEX_APPLICATION_INSTALL | topic | [local](APEX_APPLICATION_INSTALL/Attributes_Manipulated_by_APEX_APPLICATION_INSTALL.md) | [Oracle](https://docs.oracle.com/en/database/oracle/apex/26.1/aeapi/Attributes-Manipulated-by-APEX_APPLICATION_INSTALL.html) |
| Import Data Types | data types | [local](APEX_APPLICATION_INSTALL/Import_Data_Types.md) | [Oracle](https://docs.oracle.com/en/database/oracle/apex/26.1/aeapi/APEX_APPLICATION_INSTALL-Data-Types.html) |
| Import Script Examples | examples | [local](APEX_APPLICATION_INSTALL/Import_Script_Examples.md) | [Oracle](https://docs.oracle.com/en/database/oracle/apex/26.1/aeapi/Import-Script-Examples.html) |
| ADD_DATA_REPORTER_REMAP Procedure | procedure | [local](APEX_APPLICATION_INSTALL/ADD_DATA_REPORTER_REMAP_Procedure.md) | [Oracle](https://docs.oracle.com/en/database/oracle/apex/26.1/aeapi/APEX_APPLICATION_INSTALL-ADD_DATA_REPORTER_REMAP-Procedure.html) |
| CLEAR_ALL Procedure | procedure | [local](APEX_APPLICATION_INSTALL/CLEAR_ALL_Procedure.md) | [Oracle](https://docs.oracle.com/en/database/oracle/apex/26.1/aeapi/CLEAR_ALL-Procedure.html) |
| CLEAR_DATASET_IMPORT_MODES Procedure | procedure | [local](APEX_APPLICATION_INSTALL/CLEAR_DATASET_IMPORT_MODES_Procedure.md) | [Oracle](https://docs.oracle.com/en/database/oracle/apex/26.1/aeapi/APEX_APPLICATION_INSTALL.CLEAR_DATASET_IMPORT_MODES-Procedure.html) |
| CLEAR_DATA_REPORTER_REMAP Procedure | procedure | [local](APEX_APPLICATION_INSTALL/CLEAR_DATA_REPORTER_REMAP_Procedure.md) | [Oracle](https://docs.oracle.com/en/database/oracle/apex/26.1/aeapi/APEX_APPLICATION_INSTALL.CLEAR_DATA_REPORTER_REMAP-Procedure.html) |
| GENERATE_APPLICATION_ID Procedure | procedure | [local](APEX_APPLICATION_INSTALL/GENERATE_APPLICATION_ID_Procedure.md) | [Oracle](https://docs.oracle.com/en/database/oracle/apex/26.1/aeapi/GENERATE_APPLICATION_ID-Procedure.html) |
| GENERATE_OFFSET Procedure | procedure | [local](APEX_APPLICATION_INSTALL/GENERATE_OFFSET_Procedure.md) | [Oracle](https://docs.oracle.com/en/database/oracle/apex/26.1/aeapi/GENERATE_OFFSET-Procedure.html) |
| GET_APPLICATION_ALIAS Function | function | [local](APEX_APPLICATION_INSTALL/GET_APPLICATION_ALIAS_Function.md) | [Oracle](https://docs.oracle.com/en/database/oracle/apex/26.1/aeapi/APEX_APPLICATION_INSTALL.GET_APPLICATION_ALIAS-Function.html) |
| GET_APPLICATION_ID Function | function | [local](APEX_APPLICATION_INSTALL/GET_APPLICATION_ID_Function.md) | [Oracle](https://docs.oracle.com/en/database/oracle/apex/26.1/aeapi/GET_APPLICATION_ID-Function.html) |
| GET_APPLICATION_NAME Function | function | [local](APEX_APPLICATION_INSTALL/GET_APPLICATION_NAME_Function.md) | [Oracle](https://docs.oracle.com/en/database/oracle/apex/26.1/aeapi/APEX_APPLICATION_INSTALL.GET_APPLICATION_NAME-Function.html) |
| GET_AUTHENTICATION_SCHEME Function | function | [local](APEX_APPLICATION_INSTALL/GET_AUTHENTICATION_SCHEME_Function.md) | [Oracle](https://docs.oracle.com/en/database/oracle/apex/26.1/aeapi/APEX_APPLICATION_INSTALL.GET_AUTHENTICATION_SCHEME-Function.html) |
| GET_AUTO_INSTALL_SUP_OBJ Function | function | [local](APEX_APPLICATION_INSTALL/GET_AUTO_INSTALL_SUP_OBJ_Function.md) | [Oracle](https://docs.oracle.com/en/database/oracle/apex/26.1/aeapi/GET_AUTO_INSTALL_SUP_OBJ-Function.html) |
| GET_BUILD_STATUS Function | function | [local](APEX_APPLICATION_INSTALL/GET_BUILD_STATUS_Function.md) | [Oracle](https://docs.oracle.com/en/database/oracle/apex/26.1/aeapi/APEX_APPLICATION_INSTALL.GET_BUILD_STATUS-Function.html) |
| GET_DATA_REPORTER_REMAP Function | function | [local](APEX_APPLICATION_INSTALL/GET_DATA_REPORTER_REMAP_Function.md) | [Oracle](https://docs.oracle.com/en/database/oracle/apex/26.1/aeapi/APEX_APPLICATION_INSTALL.GET_DATA_REPORTER_REMAP-Function.html) |
| GET_DATASET_IMPORT_MODE Function | function | [local](APEX_APPLICATION_INSTALL/GET_DATASET_IMPORT_MODE_Function.md) | [Oracle](https://docs.oracle.com/en/database/oracle/apex/26.1/aeapi/APEX_APPLICATION_INSTALL.GET_DATASET_IMPORT_MODE-Function.html) |
| GET_IMAGE_PREFIX Function | function | [local](APEX_APPLICATION_INSTALL/GET_IMAGE_PREFIX_Function.md) | [Oracle](https://docs.oracle.com/en/database/oracle/apex/26.1/aeapi/APEX_APPLICATION_INSTALL.GET_IMAGE_PREFIX-Function.html) |
| GET_INFO Function | function | [local](APEX_APPLICATION_INSTALL/GET_INFO_Function.md) | [Oracle](https://docs.oracle.com/en/database/oracle/apex/26.1/aeapi/GET_INFO-Function.html) |
| GET_KEEP_BACKGROUND_EXECS Function | function | [local](APEX_APPLICATION_INSTALL/GET_KEEP_BACKGROUND_EXECS_Function.md) | [Oracle](https://docs.oracle.com/en/database/oracle/apex/26.1/aeapi/GET_KEEP_BACKGROUND_EXECS-Function.html) |
| GET_KEEP_SESSIONS Function | function | [local](APEX_APPLICATION_INSTALL/GET_KEEP_SESSIONS_Function.md) | [Oracle](https://docs.oracle.com/en/database/oracle/apex/26.1/aeapi/GET_KEEP_SESSIONS-Function.html) |
| GET_MAX_SCHEDULER_JOBS Function | function | [local](APEX_APPLICATION_INSTALL/GET_MAX_SCHEDULER_JOBS_Function.md) | [Oracle](https://docs.oracle.com/en/database/oracle/apex/26.1/aeapi/APEX_APPLICATION_INSTALL.GET_MAX_SCHEDULER_JOBS-Function.html) |
| GET_NO_PROXY_DOMAINS Function | function | [local](APEX_APPLICATION_INSTALL/GET_NO_PROXY_DOMAINS_Function.md) | [Oracle](https://docs.oracle.com/en/database/oracle/apex/26.1/aeapi/APEX_APPLICATION_INSTALL.GET_NO_PROXY_DOMAINS-Function.html) |
| GET_OFFSET Function | function | [local](APEX_APPLICATION_INSTALL/GET_OFFSET_Function.md) | [Oracle](https://docs.oracle.com/en/database/oracle/apex/26.1/aeapi/GET_OFFSET-Function.html) |
| GET_PASS_ECID Function | function | [local](APEX_APPLICATION_INSTALL/GET_PASS_ECID_Function.md) | [Oracle](https://docs.oracle.com/en/database/oracle/apex/26.1/aeapi/APEX_APPLICATION_INSTALL.GET_PASS_ECID-Function.html) |
| GET_PROXY Function | function | [local](APEX_APPLICATION_INSTALL/GET_PROXY_Function.md) | [Oracle](https://docs.oracle.com/en/database/oracle/apex/26.1/aeapi/GET_PROXY-Function.html) |
| GET_REMOTE_SERVER_AI_ATTRS Function | function | [local](APEX_APPLICATION_INSTALL/GET_REMOTE_SERVER_AI_ATTRS_Function.md) | [Oracle](https://docs.oracle.com/en/database/oracle/apex/26.1/aeapi/GET_REMOTE_SERVER_AI_ATTRS-Function.html) |
| GET_REMOTE_SERVER_AI_HEADERS Function | function | [local](APEX_APPLICATION_INSTALL/GET_REMOTE_SERVER_AI_HEADERS_Function.md) | [Oracle](https://docs.oracle.com/en/database/oracle/apex/26.1/aeapi/GET_REMOTE_SERVER_AI_HEADERS-Function.html) |
| GET_REMOTE_SERVER_AI_MAXTOKENS Function | function | [local](APEX_APPLICATION_INSTALL/GET_REMOTE_SERVER_AI_MAXTOKENS_Function.md) | [Oracle](https://docs.oracle.com/en/database/oracle/apex/26.1/aeapi/APEX_APPLICATION_INSTALL.GET_REMOTE_SERVER_AI_MAXTOKENS-Function.html) |
| GET_REMOTE_SERVER_AI_MODEL Function | function | [local](APEX_APPLICATION_INSTALL/GET_REMOTE_SERVER_AI_MODEL_Function.md) | [Oracle](https://docs.oracle.com/en/database/oracle/apex/26.1/aeapi/GET_REMOTE_SERVER_AI_MODEL-Function.html) |
| GET_REMOTE_SERVER_BASE_URL Function | function | [local](APEX_APPLICATION_INSTALL/GET_REMOTE_SERVER_BASE_URL_Function.md) | [Oracle](https://docs.oracle.com/en/database/oracle/apex/26.1/aeapi/GET_REMOTE_SERVER_BASE_URL-Function.html) |
| GET_REMOTE_SERVER_DEFAULT_DB Function | function | [local](APEX_APPLICATION_INSTALL/GET_REMOTE_SERVER_DEFAULT_DB_Function.md) | [Oracle](https://docs.oracle.com/en/database/oracle/apex/26.1/aeapi/GET_REMOTE_SERVER_DEFAULT_DB-Function.html) |
| GET_REMOTE_SERVER_HTTPS_HOST Function | function | [local](APEX_APPLICATION_INSTALL/GET_REMOTE_SERVER_HTTPS_HOST_Function.md) | [Oracle](https://docs.oracle.com/en/database/oracle/apex/26.1/aeapi/GET_REMOTE_SERVER_HTTPS_HOST-Function.html) |
| GET_REMOTE_SERVER_SQL_MODE Function | function | [local](APEX_APPLICATION_INSTALL/GET_REMOTE_SERVER_SQL_MODE_Function.md) | [Oracle](https://docs.oracle.com/en/database/oracle/apex/26.1/aeapi/GET_REMOTE_SERVER_SQL_MODE-Function.html) |
| GET_REST_SOURCE_CATALOG_GROUP Function | function | [local](APEX_APPLICATION_INSTALL/GET_REST_SOURCE_CATALOG_GROUP_Function.md) | [Oracle](https://docs.oracle.com/en/database/oracle/apex/26.1/aeapi/GET_REST_SOURCE_CATALOG_GROUP-Function.html) |
| GET_SCHEMA Function | function | [local](APEX_APPLICATION_INSTALL/GET_SCHEMA_Function.md) | [Oracle](https://docs.oracle.com/en/database/oracle/apex/26.1/aeapi/GET_SCHEMA-Function.html) |
| GET_SUBSCRIPTION_MAPPING Function | function | [local](APEX_APPLICATION_INSTALL/GET_SUBSCRIPTION_MAPPING_Function.md) | [Oracle](https://docs.oracle.com/en/database/oracle/apex/26.1/aeapi/APEX_APPLICATION_INSTALL.GET_SUBSCRIPTION_MAPPING-Function.html) |
| GET_SUBSCRIPTION_MODE Function | function | [local](APEX_APPLICATION_INSTALL/GET_SUBSCRIPTION_MODE_Function.md) | [Oracle](https://docs.oracle.com/en/database/oracle/apex/26.1/aeapi/APEX_APPLICATION_INSTALL.GET_SUBSCRIPTION_MODE-Function.html) |
| GET_THEME_ID Function | function | [local](APEX_APPLICATION_INSTALL/GET_THEME_ID_Function.md) | [Oracle](https://docs.oracle.com/en/database/oracle/apex/26.1/aeapi/GET_THEME_ID-Function.html) |
| GET_WORKSPACE_ID Function | function | [local](APEX_APPLICATION_INSTALL/GET_WORKSPACE_ID_Function.md) | [Oracle](https://docs.oracle.com/en/database/oracle/apex/26.1/aeapi/GET_WORKSPACE_ID-Function.html) |
| INSTALL Procedure | procedure | [local](APEX_APPLICATION_INSTALL/INSTALL_Procedure.md) | [Oracle](https://docs.oracle.com/en/database/oracle/apex/26.1/aeapi/INSTALL-Procedure.html) |
| REMOVE_APPLICATION Procedure | procedure | [local](APEX_APPLICATION_INSTALL/REMOVE_APPLICATION_Procedure.md) | [Oracle](https://docs.oracle.com/en/database/oracle/apex/26.1/aeapi/APEX_APPLICATION_INSTALL.REMOVE_APPLICATION-Procedure.html) |
| SET_APPLICATION_ALIAS Procedure | procedure | [local](APEX_APPLICATION_INSTALL/SET_APPLICATION_ALIAS_Procedure.md) | [Oracle](https://docs.oracle.com/en/database/oracle/apex/26.1/aeapi/APEX_APPLICATION_INSTALL.SET_APPLICATION_ALIAS-Procedure.html) |
| SET_APPLICATION_ID Procedure | procedure | [local](APEX_APPLICATION_INSTALL/SET_APPLICATION_ID_Procedure.md) | [Oracle](https://docs.oracle.com/en/database/oracle/apex/26.1/aeapi/SET_APPLICATION_ID-Procedure.html) |
| SET_APPLICATION_NAME Procedure | procedure | [local](APEX_APPLICATION_INSTALL/SET_APPLICATION_NAME_Procedure.md) | [Oracle](https://docs.oracle.com/en/database/oracle/apex/26.1/aeapi/APEX_APPLICATION_INSTALL.SET_APPLICATION_NAME-Procedure.html) |
| SET_AUTHENTICATION_SCHEME Procedure | procedure | [local](APEX_APPLICATION_INSTALL/SET_AUTHENTICATION_SCHEME_Procedure.md) | [Oracle](https://docs.oracle.com/en/database/oracle/apex/26.1/aeapi/APEX_APPLICATION_INSTALL.SET_AUTHENTICATION_SCHEME-Procedure.html) |
| SET_AUTO_INSTALL_SUP_OBJ Procedure | procedure | [local](APEX_APPLICATION_INSTALL/SET_AUTO_INSTALL_SUP_OBJ_Procedure.md) | [Oracle](https://docs.oracle.com/en/database/oracle/apex/26.1/aeapi/SET_AUTO_INSTALL_SUP_OBJ-Procedure.html) |
| SET_BUILD_STATUS Function | function | [local](APEX_APPLICATION_INSTALL/SET_BUILD_STATUS_Function.md) | [Oracle](https://docs.oracle.com/en/database/oracle/apex/26.1/aeapi/APEX_APPLICATION_INSTALL.SET_BUILD_STATUS-Function.html) |
| SET_DATASET_IMPORT_MODE Procedure | procedure | [local](APEX_APPLICATION_INSTALL/SET_DATASET_IMPORT_MODE_Procedure.md) | [Oracle](https://docs.oracle.com/en/database/oracle/apex/26.1/aeapi/APEX_APPLICATION_INSTALL.SET_DATASET_IMPORT_MODE-Function.html) |
| SET_IMAGE_PREFIX Procedure | procedure | [local](APEX_APPLICATION_INSTALL/SET_IMAGE_PREFIX_Procedure.md) | [Oracle](https://docs.oracle.com/en/database/oracle/apex/26.1/aeapi/APEX_APPLICATION_INSTALL.SET_IMAGE_PREFIX-Procedure.html) |
| SET_KEEP_BACKGROUND_EXECS Procedure | procedure | [local](APEX_APPLICATION_INSTALL/SET_KEEP_BACKGROUND_EXECS_Procedure.md) | [Oracle](https://docs.oracle.com/en/database/oracle/apex/26.1/aeapi/SET_KEEP_BACKGROUND_EXECS-Procedure.html) |
| SET_KEEP_SESSIONS Procedure | procedure | [local](APEX_APPLICATION_INSTALL/SET_KEEP_SESSIONS_Procedure.md) | [Oracle](https://docs.oracle.com/en/database/oracle/apex/26.1/aeapi/SET_KEEP_SESSIONS-Procedure.html) |
| SET_MAX_SCHEDULER_JOBS Procedure | procedure | [local](APEX_APPLICATION_INSTALL/SET_MAX_SCHEDULER_JOBS_Procedure.md) | [Oracle](https://docs.oracle.com/en/database/oracle/apex/26.1/aeapi/APEX_APPLICATION_INSTALL.SET_MAX_SCHEDULER_JOBS-Procedure.html) |
| SET_OFFSET Procedure | procedure | [local](APEX_APPLICATION_INSTALL/SET_OFFSET_Procedure.md) | [Oracle](https://docs.oracle.com/en/database/oracle/apex/26.1/aeapi/SET_OFFSET-Procedure.html) |
| SET_PASS_ECID Procedure | procedure | [local](APEX_APPLICATION_INSTALL/SET_PASS_ECID_Procedure.md) | [Oracle](https://docs.oracle.com/en/database/oracle/apex/26.1/aeapi/APEX_APPLICATION_INSTALL.SET_PASS_ECID-Procedure.html) |
| SET_PROXY Procedure | procedure | [local](APEX_APPLICATION_INSTALL/SET_PROXY_Procedure.md) | [Oracle](https://docs.oracle.com/en/database/oracle/apex/26.1/aeapi/SET_PROXY-Procedure.html) |
| SET_REMOTE_SERVER Procedure | procedure | [local](APEX_APPLICATION_INSTALL/SET_REMOTE_SERVER_Procedure.md) | [Oracle](https://docs.oracle.com/en/database/oracle/apex/26.1/aeapi/SET_REMOTE_SERVER-Procedure.html) |
| SET_REST_SOURCE_CATALOG_GROUP Procedure | procedure | [local](APEX_APPLICATION_INSTALL/SET_REST_SOURCE_CATALOG_GROUP_Procedure.md) | [Oracle](https://docs.oracle.com/en/database/oracle/apex/26.1/aeapi/SET_REST_SOURCE_CATALOG_GROUP-Procedure.html) |
| SET_SCHEMA Procedure | procedure | [local](APEX_APPLICATION_INSTALL/SET_SCHEMA_Procedure.md) | [Oracle](https://docs.oracle.com/en/database/oracle/apex/26.1/aeapi/SET_SCHEMA-Procedure.html) |
| SET_SUBSCRIPTION_MAPPING Procedure | procedure | [local](APEX_APPLICATION_INSTALL/SET_SUBSCRIPTION_MAPPING_Procedure.md) | [Oracle](https://docs.oracle.com/en/database/oracle/apex/26.1/aeapi/APEX_APPLICATION_INSTALL.SET_SUBSCRIPTION_MAPPING-Procedure.html) |
| SET_SUBSCRIPTION_MODE Procedure | procedure | [local](APEX_APPLICATION_INSTALL/SET_SUBSCRIPTION_MODE_Procedure.md) | [Oracle](https://docs.oracle.com/en/database/oracle/apex/26.1/aeapi/APEX_APPLICATION_INSTALL.SET_SUBSCRIPTION_MODE-Procedure.html) |
| SET_THEME_ID Procedure | procedure | [local](APEX_APPLICATION_INSTALL/SET_THEME_ID_Procedure.md) | [Oracle](https://docs.oracle.com/en/database/oracle/apex/26.1/aeapi/SET_THEME_ID-Procedure.html) |
| SET_WORKSPACE_ID Procedure | procedure | [local](APEX_APPLICATION_INSTALL/SET_WORKSPACE_ID_Procedure.md) | [Oracle](https://docs.oracle.com/en/database/oracle/apex/26.1/aeapi/SET_WORKSPACE_ID-Procedure.html) |
| SET_WORKSPACE Procedure | procedure | [local](APEX_APPLICATION_INSTALL/SET_WORKSPACE_Procedure.md) | [Oracle](https://docs.oracle.com/en/database/oracle/apex/26.1/aeapi/APEX_APPLICATION_INSTALL.SET_WORKSPACE_Procedure.html) |
| SUSPEND_BACKGROUND_EXECS Procedure | procedure | [local](APEX_APPLICATION_INSTALL/SUSPEND_BACKGROUND_EXECS_Procedure.md) | [Oracle](https://docs.oracle.com/en/database/oracle/apex/26.1/aeapi/SUSPEND_BACKGROUND_EXECS-Procedure.html) |

<!-- END GENERATED MEMBER LINKS -->
