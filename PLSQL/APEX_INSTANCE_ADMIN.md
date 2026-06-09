# APEX_INSTANCE_ADMIN

Source: [Oracle APEX 26.1 API Reference](https://docs.oracle.com/en/database/oracle/apex/26.1/aeapi/APEX_INSTANCE_ADMIN.html)

Status: curated first-pass reference.

## Purpose

`APEX_INSTANCE_ADMIN` manages the APEX runtime environment at instance level. It can read and set instance parameters, create workspaces, map schemas, configure email/wallet/report printing settings, manage workspace app ID reservations, unlock users, truncate logs, and administer extension workspace grants.

This is an administrator package. It can be executed by `SYS`, `SYSTEM`, or users granted `APEX_ADMINISTRATOR_ROLE`.

## When To Use

Use this package for instance administration and provisioning, not ordinary application logic.

Common tasks:

- Create a workspace and map schemas.
- Add or remove schema-to-workspace mappings.
- Configure instance parameters such as SMTP, wallet, or printing.
- Create or update the internal instance administrator user.
- Reserve or free workspace application ID ranges.
- Grant or revoke extension workspace access.
- Truncate logs under a controlled retention policy.

## API Surface

| Need | Members |
| --- | --- |
| Instance parameters | `GET_PARAMETER`, `SET_PARAMETER`, `Available Parameter Values` |
| Workspace provisioning | `ADD_WORKSPACE`, `REMOVE_WORKSPACE`, `ADD_SCHEMA`, `REMOVE_SCHEMA`, `GET_SCHEMAS` |
| Workspace parameters | `GET_WORKSPACE_PARAMETER`, `SET_WORKSPACE_PARAMETER`, `SET_WORKSPACE_CONSUMER_GROUP` |
| Users and apps | `CREATE_OR_UPDATE_ADMIN_USER`, `UNLOCK_USER`, `REMOVE_APPLICATION`, saved report removal |
| Schema restrictions | `RESTRICT_SCHEMA`, `UNRESTRICT_SCHEMA`, schema exceptions |
| App ID ranges | `RESERVE_WORKSPACE_APP_IDS`, `FREE_WORKSPACE_APP_IDS` |
| Extension workspaces | `GRANT_EXTENSION_WORKSPACE`, `REVOKE_EXTENSION_WORKSPACE` |
| Logs and diagnostics | `SET_LOG_SWITCH_INTERVAL`, `TRUNCATE_LOG`, `DB_SIGNATURE`, `IS_DB_SIGNATURE_VALID` |

## Create Workspace

Assuming database schema `EXAMPLE_APP` already exists:

```sql
begin
    apex_instance_admin.add_workspace(
        p_workspace          => 'EXAMPLE_WS',
        p_primary_schema     => 'EXAMPLE_APP',
        p_additional_schemas => null,
        p_source_identifier  => 'EXAMPLE_WS');

    commit;
end;
/
```

Use explicit commits for administrative changes that persist configuration.

## Add Schema Mapping

```sql
begin
    apex_instance_admin.add_schema(
        p_workspace             => 'EXAMPLE_WS',
        p_schema                => 'EXAMPLE_REPORTING',
        p_grant_apex_privileges => 'Y');

    commit;
end;
/
```

Keep schema mappings reviewed. Mapping a schema to a workspace allows APEX applications in that workspace to use it as a parsing schema when configured.

## Configure Instance Parameter

```sql
begin
    apex_instance_admin.set_parameter(
        p_parameter => 'SMTP_HOST_ADDRESS',
        p_value     => 'smtp.example.com');

    apex_instance_admin.set_parameter(
        p_parameter => 'SMTP_HOST_PORT',
        p_value     => '587');

    commit;
end;
/
```

Verify:

```sql
select apex_instance_admin.get_parameter('SMTP_HOST_ADDRESS') as smtp_host
  from dual;
```

Use the local `Available Parameter Values` member page before setting production parameters.

## Create Or Update Internal Admin User

```sql
begin
    apex_instance_admin.create_or_update_admin_user(
        p_username => 'ADMIN_BACKUP');

    commit;
end;
/
```

This is intended for Administration Services / INTERNAL workspace administration. Use normal workspace user APIs for application users.

## Reserve Application IDs

```sql
begin
    apex_instance_admin.reserve_workspace_app_ids(
        p_workspace_id => 1234567890,
        p_range_start  => 5000,
        p_range_end    => 5999);

    commit;
end;
/
```

Use reservations to keep CI/CD application IDs predictable across workspaces.

## Safety Notes

- This package changes instance-wide or workspace-level administration. Keep it out of end-user request code.
- Require `APEX_ADMINISTRATOR_ROLE`, `SYS`, or `SYSTEM`; use least privilege and audited deployment accounts.
- Commit only after verifying the desired settings were applied.
- Do not log credentials, wallet paths, tokens, or certificates.
- Use `p_force` on `SET_PARAMETER` only when you understand the quality checks being bypassed.
- Treat workspace names, schema names, and app ID ranges as administrative inputs, not user input.
- Keep destructive calls such as `REMOVE_WORKSPACE`, `REMOVE_APPLICATION`, and `TRUNCATE_LOG` behind change-control procedures.

## Related APIs

- [APEX_APPLICATION_ADMIN](APEX_APPLICATION_ADMIN.md) for installed app administration.
- [APEX_APPLICATION_INSTALL](APEX_APPLICATION_INSTALL.md) for import-time settings.
- [APEX_EXTENSION](APEX_EXTENSION.md) for extension app workspace context.
- [APEX_INSTANCE_DEBUG](APEX_INSTANCE_DEBUG.md) for instance-level debug listing.

<!-- BEGIN GENERATED MEMBER LINKS -->

## Local Member Detail Pages

Generated navigation for LLM retrieval. Use the local detail page first, then follow the Oracle source link when exact wording or edge-case behavior must be verified.

| Member | Kind | Local detail | Source |
| --- | --- | --- | --- |
| Available Parameter Values | topic | [local](APEX_INSTANCE_ADMIN/Available_Parameter_Values.md) | [Oracle](https://docs.oracle.com/en/database/oracle/apex/26.1/aeapi/APEX_INSTANCE_ADMIN.Available-Parameter-Values.html) |
| ADD_AUTO_PROV_RESTRICTIONS Procedure | procedure | [local](APEX_INSTANCE_ADMIN/ADD_AUTO_PROV_RESTRICTIONS_Procedure.md) | [Oracle](https://docs.oracle.com/en/database/oracle/apex/26.1/aeapi/ADD_AUTO_PROV_RESTRICTIONS-Procedure.html) |
| ADD_SCHEMA Procedure | procedure | [local](APEX_INSTANCE_ADMIN/ADD_SCHEMA_Procedure.md) | [Oracle](https://docs.oracle.com/en/database/oracle/apex/26.1/aeapi/ADD_SCHEMA-Procedure.html) |
| ADD_WEB_ENTRY_POINT Procedure | procedure | [local](APEX_INSTANCE_ADMIN/ADD_WEB_ENTRY_POINT_Procedure.md) | [Oracle](https://docs.oracle.com/en/database/oracle/apex/26.1/aeapi/ADD_WEB_ENTRY_POINT-procedure.html) |
| ADD_WORKSPACE Procedure | procedure | [local](APEX_INSTANCE_ADMIN/ADD_WORKSPACE_Procedure.md) | [Oracle](https://docs.oracle.com/en/database/oracle/apex/26.1/aeapi/ADD_WORKSPACE-Procedure.html) |
| CREATE_CLOUD_CREDENTIAL Procedure | procedure | [local](APEX_INSTANCE_ADMIN/CREATE_CLOUD_CREDENTIAL_Procedure.md) | [Oracle](https://docs.oracle.com/en/database/oracle/apex/26.1/aeapi/CREATE_CLOUD_CREDENTIAL-Procedure.html) |
| CREATE_OR_UPDATE_ADMIN_USER Procedure | procedure | [local](APEX_INSTANCE_ADMIN/CREATE_OR_UPDATE_ADMIN_USER_Procedure.md) | [Oracle](https://docs.oracle.com/en/database/oracle/apex/26.1/aeapi/CREATE_OR_UPDATE_ADMIN_USER-Procedure.html) |
| CREATE_SCHEMA_EXCEPTION Procedure | procedure | [local](APEX_INSTANCE_ADMIN/CREATE_SCHEMA_EXCEPTION_Procedure.md) | [Oracle](https://docs.oracle.com/en/database/oracle/apex/26.1/aeapi/CREATE_SCHEMA_EXCEPTION-Procedure.html) |
| DB_SIGNATURE Function | function | [local](APEX_INSTANCE_ADMIN/DB_SIGNATURE_Function.md) | [Oracle](https://docs.oracle.com/en/database/oracle/apex/26.1/aeapi/DB_SIGNATURE-Function.html) |
| DROP_CLOUD_CREDENTIAL Procedure | procedure | [local](APEX_INSTANCE_ADMIN/DROP_CLOUD_CREDENTIAL_Procedure.md) | [Oracle](https://docs.oracle.com/en/database/oracle/apex/26.1/aeapi/DROP_CLOUD_CREDENTIAL-Procedure.html) |
| FREE_WORKSPACE_APP_IDS Procedure | procedure | [local](APEX_INSTANCE_ADMIN/FREE_WORKSPACE_APP_IDS_Procedure.md) | [Oracle](https://docs.oracle.com/en/database/oracle/apex/26.1/aeapi/FREE_WORKSPACE_APP_IDS-Procedure.html) |
| GET_PARAMETER Function | function | [local](APEX_INSTANCE_ADMIN/GET_PARAMETER_Function.md) | [Oracle](https://docs.oracle.com/en/database/oracle/apex/26.1/aeapi/GET_PARAMETER-Function.html) |
| GET_SCHEMAS Function | function | [local](APEX_INSTANCE_ADMIN/GET_SCHEMAS_Function.md) | [Oracle](https://docs.oracle.com/en/database/oracle/apex/26.1/aeapi/GET_SCHEMAS-Function.html) |
| GET_WORKSPACE_PARAMETER Procedure | procedure | [local](APEX_INSTANCE_ADMIN/GET_WORKSPACE_PARAMETER_Procedure.md) | [Oracle](https://docs.oracle.com/en/database/oracle/apex/26.1/aeapi/GET_WORKSPACE_PARAMETER.html) |
| GRANT_EXTENSION_WORKSPACE Procedure | procedure | [local](APEX_INSTANCE_ADMIN/GRANT_EXTENSION_WORKSPACE_Procedure.md) | [Oracle](https://docs.oracle.com/en/database/oracle/apex/26.1/aeapi/GRANT_EXTENSION_WORKSPACE-Procedure.html) |
| IS_DB_SIGNATURE_VALID Function | function | [local](APEX_INSTANCE_ADMIN/IS_DB_SIGNATURE_VALID_Function.md) | [Oracle](https://docs.oracle.com/en/database/oracle/apex/26.1/aeapi/IS_DB_SIGNATURE_VALID-Function.html) |
| REMOVE_APPLICATION Procedure | procedure | [local](APEX_INSTANCE_ADMIN/REMOVE_APPLICATION_Procedure.md) | [Oracle](https://docs.oracle.com/en/database/oracle/apex/26.1/aeapi/REMOVE_APPLICATION-Procedure.html) |
| REMOVE_AUTO_PROV_RESTRICTIONS Procedure | procedure | [local](APEX_INSTANCE_ADMIN/REMOVE_AUTO_PROV_RESTRICTIONS_Procedure.md) | [Oracle](https://docs.oracle.com/en/database/oracle/apex/26.1/aeapi/REMOVE_AUTO_PROV_RESTRICTIONS-Procedure.html) |
| REMOVE_SAVED_REPORT Procedure | procedure | [local](APEX_INSTANCE_ADMIN/REMOVE_SAVED_REPORT_Procedure.md) | [Oracle](https://docs.oracle.com/en/database/oracle/apex/26.1/aeapi/REMOVE_SAVED_REPORT-Procedure.html) |
| REMOVE_SAVED_REPORTS Procedure | procedure | [local](APEX_INSTANCE_ADMIN/REMOVE_SAVED_REPORTS_Procedure.md) | [Oracle](https://docs.oracle.com/en/database/oracle/apex/26.1/aeapi/REMOVE_SAVED_REPORTS-Procedure.html) |
| REMOVE_SCHEMA Procedure | procedure | [local](APEX_INSTANCE_ADMIN/REMOVE_SCHEMA_Procedure.md) | [Oracle](https://docs.oracle.com/en/database/oracle/apex/26.1/aeapi/REMOVE_SCHEMA-Procedure.html) |
| REMOVE_SCHEMA_EXCEPTION Procedure | procedure | [local](APEX_INSTANCE_ADMIN/REMOVE_SCHEMA_EXCEPTION_Procedure.md) | [Oracle](https://docs.oracle.com/en/database/oracle/apex/26.1/aeapi/REMOVE_SCHEMA_EXCEPTION-Procedure.html) |
| REMOVE_SCHEMA_EXCEPTIONS Procedure | procedure | [local](APEX_INSTANCE_ADMIN/REMOVE_SCHEMA_EXCEPTIONS_Procedure.md) | [Oracle](https://docs.oracle.com/en/database/oracle/apex/26.1/aeapi/REMOVE_SCHEMA_EXCEPTIONS-Procedure.html) |
| REMOVE_SUBSCRIPTION Procedure | procedure | [local](APEX_INSTANCE_ADMIN/REMOVE_SUBSCRIPTION_Procedure.md) | [Oracle](https://docs.oracle.com/en/database/oracle/apex/26.1/aeapi/REMOVE_SUBSCRIPTION-Procedure.html) |
| REMOVE_WEB_ENTRY_POINT Procedure | procedure | [local](APEX_INSTANCE_ADMIN/REMOVE_WEB_ENTRY_POINT_Procedure.md) | [Oracle](https://docs.oracle.com/en/database/oracle/apex/26.1/aeapi/REMOVE_WEB_ENTRY_POINT-Procedure.html) |
| REMOVE_WORKSPACE Procedure | procedure | [local](APEX_INSTANCE_ADMIN/REMOVE_WORKSPACE_Procedure.md) | [Oracle](https://docs.oracle.com/en/database/oracle/apex/26.1/aeapi/REMOVE_WORKSPACE-Procedure.html) |
| REMOVE_WORKSPACE_EXCEPTIONS Procedure | procedure | [local](APEX_INSTANCE_ADMIN/REMOVE_WORKSPACE_EXCEPTIONS_Procedure.md) | [Oracle](https://docs.oracle.com/en/database/oracle/apex/26.1/aeapi/REMOVE_WORKSPACE_EXCEPTIONS-Procedure.html) |
| RESERVE_WORKSPACE_APP_IDS Procedure | procedure | [local](APEX_INSTANCE_ADMIN/RESERVE_WORKSPACE_APP_IDS_Procedure.md) | [Oracle](https://docs.oracle.com/en/database/oracle/apex/26.1/aeapi/RESERVE_WORKSPACE_APP_IDS-Procedure.html) |
| RESTRICT_SCHEMA Procedure | procedure | [local](APEX_INSTANCE_ADMIN/RESTRICT_SCHEMA_Procedure.md) | [Oracle](https://docs.oracle.com/en/database/oracle/apex/26.1/aeapi/RESTRICT_SCHEMA-Procedure.html) |
| REVOKE_EXTENSION_WORKSPACE Procedure | procedure | [local](APEX_INSTANCE_ADMIN/REVOKE_EXTENSION_WORKSPACE_Procedure.md) | [Oracle](https://docs.oracle.com/en/database/oracle/apex/26.1/aeapi/REVOKE_EXTENSION_WORKSPACE-Procedure.html) |
| SET_LOG_SWITCH_INTERVAL Procedure | procedure | [local](APEX_INSTANCE_ADMIN/SET_LOG_SWITCH_INTERVAL_Procedure.md) | [Oracle](https://docs.oracle.com/en/database/oracle/apex/26.1/aeapi/SET_LOG_SWITCH_INTERVAL-Procedure.html) |
| SET_PARAMETER Procedure | procedure | [local](APEX_INSTANCE_ADMIN/SET_PARAMETER_Procedure.md) | [Oracle](https://docs.oracle.com/en/database/oracle/apex/26.1/aeapi/SET_PARAMETER-Procedure.html) |
| SET_WORKSPACE_CONSUMER_GROUP Procedure | procedure | [local](APEX_INSTANCE_ADMIN/SET_WORKSPACE_CONSUMER_GROUP_Procedure.md) | [Oracle](https://docs.oracle.com/en/database/oracle/apex/26.1/aeapi/SET_WORKSPACE_CONSUMER_GROUP-Procedure.html) |
| SET_WORKSPACE_PARAMETER Procedure | procedure | [local](APEX_INSTANCE_ADMIN/SET_WORKSPACE_PARAMETER_Procedure.md) | [Oracle](https://docs.oracle.com/en/database/oracle/apex/26.1/aeapi/SET_WORKSPACE_PARAMETER.html) |
| TRUNCATE_LOG Procedure | procedure | [local](APEX_INSTANCE_ADMIN/TRUNCATE_LOG_Procedure.md) | [Oracle](https://docs.oracle.com/en/database/oracle/apex/26.1/aeapi/TRUNCATE_LOG-Procedure.html) |
| UNLOCK_USER Procedure | procedure | [local](APEX_INSTANCE_ADMIN/UNLOCK_USER_Procedure.md) | [Oracle](https://docs.oracle.com/en/database/oracle/apex/26.1/aeapi/UNLOCK_USER-Procedure.html) |
| UNRESTRICT_SCHEMA Procedure | procedure | [local](APEX_INSTANCE_ADMIN/UNRESTRICT_SCHEMA_Procedure.md) | [Oracle](https://docs.oracle.com/en/database/oracle/apex/26.1/aeapi/UNRESTRICT_SCHEMA-Procedure.html) |
| VALIDATE_EMAIL_CONFIG Procedure | procedure | [local](APEX_INSTANCE_ADMIN/VALIDATE_EMAIL_CONFIG_Procedure.md) | [Oracle](https://docs.oracle.com/en/database/oracle/apex/26.1/aeapi/VALIDATE_EMAIL_CONFIG-Procedure.html) |

<!-- END GENERATED MEMBER LINKS -->
