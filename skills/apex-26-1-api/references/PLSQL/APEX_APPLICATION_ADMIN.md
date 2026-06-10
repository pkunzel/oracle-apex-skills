# APEX_APPLICATION_ADMIN

Source: [Oracle APEX 26.1 API Reference](https://docs.oracle.com/en/database/oracle/apex/26.1/aeapi/APEX_APPLICATION_ADMIN.html)

Status: curated first-pass reference.

## Purpose

`APEX_APPLICATION_ADMIN` modifies attributes of installed APEX applications. It covers application identity, status, version, build status, authentication scheme, build option statuses, file storage, global notification, parsing schema, proxy settings, image prefix, and remote server settings.

Use it after an app exists. Use [APEX_APPLICATION_INSTALL](APEX_APPLICATION_INSTALL.md) before or during import.

## When To Use

Use this package for controlled administrative changes across one or more installed applications.

Common tasks:

- Put an application in maintenance mode.
- Restrict application access to a named allowlist.
- Set build status to `RUN_ONLY` after deployment.
- Update version, global notification, or alias after install.
- Change parsing schema or proxy settings under administrator control.
- Toggle build options by build option ID or static ID.

## API Surface

| Need | Members |
| --- | --- |
| Identity/version | `GET_APPLICATION_NAME`, `SET_APPLICATION_NAME`, `GET_APPLICATION_ALIAS`, `SET_APPLICATION_ALIAS`, `GET_APPLICATION_VERSION`, `SET_APPLICATION_VERSION` |
| Runtime availability | `GET_APPLICATION_STATUS`, `SET_APPLICATION_STATUS`, `GET_BUILD_STATUS`, `SET_BUILD_STATUS` |
| Build options | `GET_BUILD_OPTION_STATUS`, `SET_BUILD_OPTION_STATUS` |
| Security/runtime configuration | `GET_AUTHENTICATION_SCHEME`, `SET_AUTHENTICATION_SCHEME`, `GET_PARSING_SCHEMA`, `SET_PARSING_SCHEMA` |
| User-facing metadata | `GET_GLOBAL_NOTIFICATION`, `SET_GLOBAL_NOTIFICATION` |
| Infrastructure settings | `GET_IMAGE_PREFIX`, `SET_IMAGE_PREFIX`, `GET_FILE_STORAGE`, `SET_FILE_STORAGE`, proxy and remote server members |

## Maintenance Mode

Assuming application `100` needs a planned outage message:

```sql
begin
    apex_application_admin.set_application_status(
        p_application_id     => 100,
        p_application_status => apex_application_admin.c_app_unavailable,
        p_message            => 'This application is temporarily unavailable for maintenance.');
end;
/
```

Restore normal access:

```sql
begin
    apex_application_admin.set_application_status(
        p_application_id     => 100,
        p_application_status => apex_application_admin.c_app_available);
end;
/
```

Use constants instead of hard-coded status strings.

## Restricted Access During Testing

```sql
begin
    apex_application_admin.set_application_status(
        p_application_id     => 100,
        p_application_status => apex_application_admin.c_app_restricted_access,
        p_allowed_users_list => apex_t_varchar2('PKUNZEL', 'QA_USER'),
        p_message            => 'This application is currently open only for testing.');
end;
/
```

Keep the allowlist short and deliberate. This is an application availability setting, not a substitute for authorization logic inside the app.

## Lock Production To Run Only

```sql
begin
    apex_application_admin.set_build_status(
        p_application_id => 100,
        p_build_status   => 'RUN_ONLY');
end;
/
```

Return to editable development mode:

```sql
begin
    apex_application_admin.set_build_status(
        p_application_id => 100,
        p_build_status   => 'RUN_AND_BUILD');
end;
/
```

## Toggle Build Option

Assuming a build option static ID `FEATURE_AI_CHAT` exists in app `100`:

```sql
begin
    apex_application_admin.set_build_option_status(
        p_application_id         => 100,
        p_static_id              => 'FEATURE_AI_CHAT',
        p_build_status           => apex_application_admin.c_build_option_status_include);
end;
/
```

Use the ID-based signature when automation has a component ID from APEX metadata views. Use the static-ID signature in deployment scripts because static IDs survive export/import better.

## Post-Deploy Metadata Update

```sql
begin
    apex_application_admin.set_application_version(
        p_application_id => 100,
        p_version        => '2026.06.10');

    apex_application_admin.set_global_notification(
        p_application_id              => 100,
        p_global_notification_message => 'New release deployed.');
end;
/
```

## Safety Notes

- Run with an administrative deployment account and a deliberate workspace/security context.
- Avoid changing parsing schema, authentication scheme, proxy server, or remote server settings from end-user request code.
- Use constants for application status where documented.
- Prefer build option static IDs in scripts.
- Treat `SET_APPLICATION_STATUS` messages and PL/SQL outage blocks as user-facing output; escape or keep values static.
- Review changes that affect authentication, proxy, parsing schema, or remote server configuration before production.

## Related APIs

- [APEX_APPLICATION_INSTALL](APEX_APPLICATION_INSTALL.md) for install-time changes.
- [APEX_INSTANCE_ADMIN](APEX_INSTANCE_ADMIN.md) for instance/workspace administration.
- [APEX_APP_SETTING](APEX_APP_SETTING.md) for application settings and feature flags.
- [APEX_AUTHENTICATION](APEX_AUTHENTICATION.md) and [APEX_AUTHORIZATION](APEX_AUTHORIZATION.md) for request-time security behavior.

<!-- BEGIN GENERATED MEMBER LINKS -->

## Local Member Detail Pages

Generated navigation for LLM retrieval. Use the local detail page first, then follow the Oracle source link when exact wording or edge-case behavior must be verified.

| Member | Kind | Local detail | Source |
| --- | --- | --- | --- |
| Constants and Data Types | constants | [local](APEX_APPLICATION_ADMIN/Constants_and_Data_Types.md) | [Oracle](https://docs.oracle.com/en/database/oracle/apex/26.1/aeapi/APEX_APPLICATION_ADMIN.Constants-and-Data-Types.html) |
| GET_APPLICATION_ALIAS Function | function | [local](APEX_APPLICATION_ADMIN/GET_APPLICATION_ALIAS_Function.md) | [Oracle](https://docs.oracle.com/en/database/oracle/apex/26.1/aeapi/APEX_APPLICATION_ADMIN.GET_APPLICATION_ALIAS-Function.html) |
| GET_APPLICATION_NAME Function | function | [local](APEX_APPLICATION_ADMIN/GET_APPLICATION_NAME_Function.md) | [Oracle](https://docs.oracle.com/en/database/oracle/apex/26.1/aeapi/APEX_APPLICATION_ADMIN.GET_APPLICATION_NAME-Function.html) |
| GET_APPLICATION_STATUS Function | function | [local](APEX_APPLICATION_ADMIN/GET_APPLICATION_STATUS_Function.md) | [Oracle](https://docs.oracle.com/en/database/oracle/apex/26.1/aeapi/APEX_APPLICATION_ADMIN.GET_APPLICATION_STATUS-Function.html) |
| GET_APPLICATION_VERSION Function | function | [local](APEX_APPLICATION_ADMIN/GET_APPLICATION_VERSION_Function.md) | [Oracle](https://docs.oracle.com/en/database/oracle/apex/26.1/aeapi/APEX_APPLICATION_ADMIN.GET_APPLICATION_VERSION-Function.html) |
| GET_AUTHENTICATION_SCHEME Function | function | [local](APEX_APPLICATION_ADMIN/GET_AUTHENTICATION_SCHEME_Function.md) | [Oracle](https://docs.oracle.com/en/database/oracle/apex/26.1/aeapi/APEX_APPLICATION_ADMIN.GET_AUTHENTICATION_SCHEME-Function.html) |
| GET_BUILD_OPTION_STATUS Function Signature 1 | function | [local](APEX_APPLICATION_ADMIN/GET_BUILD_OPTION_STATUS_Function_Signature_1.md) | [Oracle](https://docs.oracle.com/en/database/oracle/apex/26.1/aeapi/APEX_APPLICATION_ADMIN.GET_BUILD_OPTION_STATUS-Function-Signature-1.html) |
| GET_BUILD_OPTION_STATUS Function Signature 2 | function | [local](APEX_APPLICATION_ADMIN/GET_BUILD_OPTION_STATUS_Function_Signature_2.md) | [Oracle](https://docs.oracle.com/en/database/oracle/apex/26.1/aeapi/APEX_APPLICATION_ADMIN.GET_BUILD_OPTION_STATUS-Function-Signature-2.html) |
| GET_BUILD_STATUS Function | function | [local](APEX_APPLICATION_ADMIN/GET_BUILD_STATUS_Function.md) | [Oracle](https://docs.oracle.com/en/database/oracle/apex/26.1/aeapi/APEX_APPLICATION_ADMIN.GET_BUILD_STATUS-Function.html) |
| GET_GLOBAL_NOTIFICATION Function | function | [local](APEX_APPLICATION_ADMIN/GET_GLOBAL_NOTIFICATION_Function.md) | [Oracle](https://docs.oracle.com/en/database/oracle/apex/26.1/aeapi/APEX_APPLICATION_ADMIN.GET_GLOBAL_NOTIFICATION-Function.html) |
| GET_FILE_STORAGE Function | function | [local](APEX_APPLICATION_ADMIN/GET_FILE_STORAGE_Function.md) | [Oracle](https://docs.oracle.com/en/database/oracle/apex/26.1/aeapi/GET_FILE_STORAGE-Function.html) |
| GET_IMAGE_PREFIX Function | function | [local](APEX_APPLICATION_ADMIN/GET_IMAGE_PREFIX_Function.md) | [Oracle](https://docs.oracle.com/en/database/oracle/apex/26.1/aeapi/APEX_APPLICATION_ADMIN.GET_IMAGE_PREFIX-Function.html) |
| GET_MAX_SCHEDULER_JOBS Function | function | [local](APEX_APPLICATION_ADMIN/GET_MAX_SCHEDULER_JOBS_Function.md) | [Oracle](https://docs.oracle.com/en/database/oracle/apex/26.1/aeapi/APEX_APPLICATION_ADMIN.GET_MAX_SCHEDULER_JOBS-Function.html) |
| GET_NO_PROXY_DOMAINS Function | function | [local](APEX_APPLICATION_ADMIN/GET_NO_PROXY_DOMAINS_Function.md) | [Oracle](https://docs.oracle.com/en/database/oracle/apex/26.1/aeapi/APEX_APPLICATION_ADMIN.GET_NO_PROXY_DOMAINS-Function.html) |
| GET_PARSING_SCHEMA Function | function | [local](APEX_APPLICATION_ADMIN/GET_PARSING_SCHEMA_Function.md) | [Oracle](https://docs.oracle.com/en/database/oracle/apex/26.1/aeapi/APEX_APPLICATION_ADMIN.GET_PARSING_SCHEMA-Function.html) |
| GET_PASS_ECID Function | function | [local](APEX_APPLICATION_ADMIN/GET_PASS_ECID_Function.md) | [Oracle](https://docs.oracle.com/en/database/oracle/apex/26.1/aeapi/APEX_APPLICATION_ADMIN.GET_PASS_ECID-Function.html) |
| GET_PROXY_SERVER Function | function | [local](APEX_APPLICATION_ADMIN/GET_PROXY_SERVER_Function.md) | [Oracle](https://docs.oracle.com/en/database/oracle/apex/26.1/aeapi/APEX_APPLICATION_ADMIN.GET_PROXY_SERVER-Function.html) |
| SET_APPLICATION_ALIAS Procedure | procedure | [local](APEX_APPLICATION_ADMIN/SET_APPLICATION_ALIAS_Procedure.md) | [Oracle](https://docs.oracle.com/en/database/oracle/apex/26.1/aeapi/APEX_APPLICATION_ADMIN.SET_APPLICATION_ALIAS-Procedure.html) |
| SET_APPLICATION_NAME Procedure | procedure | [local](APEX_APPLICATION_ADMIN/SET_APPLICATION_NAME_Procedure.md) | [Oracle](https://docs.oracle.com/en/database/oracle/apex/26.1/aeapi/APEX_APPLICATION_ADMIN.SET_APPLICATION_NAME-Procedure.html) |
| SET_APPLICATION_STATUS Procedure | procedure | [local](APEX_APPLICATION_ADMIN/SET_APPLICATION_STATUS_Procedure.md) | [Oracle](https://docs.oracle.com/en/database/oracle/apex/26.1/aeapi/APEX_APPLICATION_ADMIN.SET_APPLICATION_STATUS-Procedure.html) |
| SET_APPLICATION_VERSION Procedure | procedure | [local](APEX_APPLICATION_ADMIN/SET_APPLICATION_VERSION_Procedure.md) | [Oracle](https://docs.oracle.com/en/database/oracle/apex/26.1/aeapi/APEX_APPLICATION_ADMIN.SET_APPLICATION_VERSION-Procedure.html) |
| SET_AUTHENTICATION_SCHEME Procedure | procedure | [local](APEX_APPLICATION_ADMIN/SET_AUTHENTICATION_SCHEME_Procedure.md) | [Oracle](https://docs.oracle.com/en/database/oracle/apex/26.1/aeapi/APEX_APPLICATION_ADMIN.SET_AUTHENTICATION_SCHEME-Procedure.html) |
| SET_BUILD_OPTION_STATUS Procedure Signature 1 | procedure | [local](APEX_APPLICATION_ADMIN/SET_BUILD_OPTION_STATUS_Procedure_Signature_1.md) | [Oracle](https://docs.oracle.com/en/database/oracle/apex/26.1/aeapi/APEX_APPLICATION_ADMIN.SET_BUILD_OPTION_STATUS-Procedure-Signature-1.html) |
| SET_BUILD_OPTION_STATUS Procedure Signature 2 | procedure | [local](APEX_APPLICATION_ADMIN/SET_BUILD_OPTION_STATUS_Procedure_Signature_2.md) | [Oracle](https://docs.oracle.com/en/database/oracle/apex/26.1/aeapi/APEX_APPLICATION_ADMIN.SET_BUILD_OPTION_STATUS-Procedure-Signature-2.html) |
| SET_BUILD_STATUS Procedure | procedure | [local](APEX_APPLICATION_ADMIN/SET_BUILD_STATUS_Procedure.md) | [Oracle](https://docs.oracle.com/en/database/oracle/apex/26.1/aeapi/APEX_APPLICATION_ADMIN.SET_BUILD_STATUS-Procedure.html) |
| SET_FILE_STORAGE Procedure | procedure | [local](APEX_APPLICATION_ADMIN/SET_FILE_STORAGE_Procedure.md) | [Oracle](https://docs.oracle.com/en/database/oracle/apex/26.1/aeapi/SET_FILE_STORAGE-Procedure.html) |
| SET_GLOBAL_NOTIFICATION Procedure | procedure | [local](APEX_APPLICATION_ADMIN/SET_GLOBAL_NOTIFICATION_Procedure.md) | [Oracle](https://docs.oracle.com/en/database/oracle/apex/26.1/aeapi/APEX_APPLICATION_ADMIN.SET_GLOBAL_NOTIFICATION-Procedure.html) |
| SET_IMAGE_PREFIX Procedure | procedure | [local](APEX_APPLICATION_ADMIN/SET_IMAGE_PREFIX_Procedure.md) | [Oracle](https://docs.oracle.com/en/database/oracle/apex/26.1/aeapi/APEX_APPLICATION_ADMIN.SET_IMAGE_PREFIX-Procedure.html) |
| SET_MAX_SCHEDULER_JOBS Procedure | procedure | [local](APEX_APPLICATION_ADMIN/SET_MAX_SCHEDULER_JOBS_Procedure.md) | [Oracle](https://docs.oracle.com/en/database/oracle/apex/26.1/aeapi/APEX_APPLICATION_ADMIN.SET_MAX_SCHEDULER_JOBS-Procedure.html) |
| SET_PARSING_SCHEMA Procedure | procedure | [local](APEX_APPLICATION_ADMIN/SET_PARSING_SCHEMA_Procedure.md) | [Oracle](https://docs.oracle.com/en/database/oracle/apex/26.1/aeapi/APEX_APPLICATION_ADMIN.SET_PARSING_SCHEMA-Procedure.html) |
| SET_PASS_ECID Procedure | procedure | [local](APEX_APPLICATION_ADMIN/SET_PASS_ECID_Procedure.md) | [Oracle](https://docs.oracle.com/en/database/oracle/apex/26.1/aeapi/APEX_APPLICATION_ADMIN.SET_PASS_ECID-Procedure.html) |
| SET_PROXY_SERVER Procedure | procedure | [local](APEX_APPLICATION_ADMIN/SET_PROXY_SERVER_Procedure.md) | [Oracle](https://docs.oracle.com/en/database/oracle/apex/26.1/aeapi/APEX_APPLICATION_ADMIN.SET_PROXY_SERVER-Procedure.html) |
| SET_REMOTE_SERVER Procedure | procedure | [local](APEX_APPLICATION_ADMIN/SET_REMOTE_SERVER_Procedure.md) | [Oracle](https://docs.oracle.com/en/database/oracle/apex/26.1/aeapi/APEX_APPLICATION_ADMIN.SET_REMOTE_SERVER-Procedure.html) |

<!-- END GENERATED MEMBER LINKS -->
