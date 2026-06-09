# APEX_ACL

Source: [Oracle APEX 26.1 API Reference](https://docs.oracle.com/en/database/oracle/apex/26.1/aeapi/APEX_ACL.html)

Status: curated first-pass reference.

## Purpose

`APEX_ACL` manages and checks application Access Control List role assignments. It is the package for granting, removing, replacing, and checking APEX application roles for users.

Use `APEX_ACL` for role membership. Use `APEX_AUTHORIZATION` to evaluate authorization schemes that may depend on these roles.

## When To Use

Use `APEX_ACL` when:

- An admin page grants or removes application roles for a user.
- A provisioning script assigns default roles to a new user.
- A page process replaces a user's complete set of roles from a controlled UI.
- Server-side code needs to check whether a user has any role or a specific role.
- A role-maintenance page needs to detect whether a role was removed from a submitted set.

Do not expose role maintenance without a strict server-side authorization check. Client-side hiding of buttons is not enough.

## API Surface

| Need | Members |
| --- | --- |
| Add a role | `ADD_USER_ROLE` by role ID or role Static ID |
| Remove a role | `REMOVE_USER_ROLE` by role ID or role Static ID |
| Replace all roles | `REPLACE_USER_ROLES` by role ID array or role Static ID array |
| Remove all roles | `REMOVE_ALL_USER_ROLES` |
| Check roles | `HAS_USER_ROLE`, `HAS_USER_ANY_ROLES` |
| Detect role removal | `IS_ROLE_REMOVED_FROM_USER` |

## Grant A Role

Prefer Static IDs in generated examples because they survive display-name changes.

```sql
begin
    if not apex_authorization.has_access('CAN_MANAGE_USERS') then
        raise_application_error(-20000, 'Not authorized.');
    end if;

    apex_acl.add_user_role(
        p_application_id => :APP_ID,
        p_user_name      => :P20_USER_NAME,
        p_role_static_id => 'AI_ADMIN');

    apex_authorization.reset_cache;
end;
/
```

`p_user_name` is case-insensitive, but application code should still normalize and validate input consistently.

## Remove A Role

```sql
begin
    apex_acl.remove_user_role(
        p_application_id => :APP_ID,
        p_user_name      => :P20_USER_NAME,
        p_role_static_id => 'AI_ADMIN');

    apex_authorization.reset_cache;
end;
/
```

If the current session's access depends on the changed roles, reset authorization cache before re-checking.

## Replace All Roles

Assuming `P20_ROLE_STATIC_IDS` is a colon-delimited shuttle item that contains approved role Static IDs:

```sql
declare
    l_roles apex_t_varchar2;
begin
    if not apex_authorization.has_access('CAN_MANAGE_USERS') then
        raise_application_error(-20000, 'Not authorized.');
    end if;

    l_roles := apex_string.split(:P20_ROLE_STATIC_IDS, ':');

    apex_acl.replace_user_roles(
        p_application_id  => :APP_ID,
        p_user_name       => :P20_USER_NAME,
        p_role_static_ids => l_roles);

    apex_authorization.reset_cache;
end;
/
```

Because `REPLACE_USER_ROLES` replaces the complete set, validate that the submitted role list is exactly the intended result.

## Check Roles

Check whether the current user has a role:

```sql
begin
    if apex_acl.has_user_role(
        p_application_id => :APP_ID,
        p_user_name      => :APP_USER,
        p_role_static_id => 'AI_ADMIN')
    then
        :P10_SHOW_ADMIN_TOOLS := 'Y';
    else
        :P10_SHOW_ADMIN_TOOLS := 'N';
    end if;
end;
/
```

Check whether a user has any role in the application:

```sql
begin
    if not apex_acl.has_user_any_roles(
        p_application_id => :APP_ID,
        p_user_name      => :APP_USER)
    then
        raise_application_error(-20000, 'No application role assigned.');
    end if;
end;
/
```

## Detect Removed Roles

`IS_ROLE_REMOVED_FROM_USER` helps compare a submitted role list against current role membership.

```sql
declare
    l_new_role_ids apex_t_number := apex_t_number(10, 20);
begin
    if apex_acl.is_role_removed_from_user(
        p_application_id => :APP_ID,
        p_user_name      => :P20_USER_NAME,
        p_role_static_id => 'AI_ADMIN',
        p_role_ids       => l_new_role_ids)
    then
        apex_debug.warn('AI_ADMIN was removed from %s', :P20_USER_NAME);
    end if;
end;
/
```

## Safety Guidance

- Protect every role-maintenance operation with a server-side authorization check.
- Prefer role Static IDs for generated code and documentation examples.
- Reset authorization cache after changing roles in the current session.
- Treat page item role lists as untrusted until validated against known roles.
- Use `APEX_AUTHORIZATION` for runtime scheme checks and `APEX_ACL` for role assignment maintenance.

<!-- BEGIN GENERATED MEMBER LINKS -->

## Local Member Detail Pages

Generated navigation for LLM retrieval. Use the local detail page first, then follow the Oracle source link when exact wording or edge-case behavior must be verified.

| Member | Kind | Local detail | Source |
| --- | --- | --- | --- |
| ADD_USER_ROLE Procedure Signature 1 | procedure | [local](APEX_ACL/ADD_USER_ROLE_Procedure_Signature_1.md) | [Oracle](https://docs.oracle.com/en/database/oracle/apex/26.1/aeapi/ADD_USER_ROLE-Procedure-Signature1.html) |
| ADD_USER_ROLE Procedure Signature 2 | procedure | [local](APEX_ACL/ADD_USER_ROLE_Procedure_Signature_2.md) | [Oracle](https://docs.oracle.com/en/database/oracle/apex/26.1/aeapi/ADD_USER_ROLE-Procedure-Signature2.html) |
| HAS_USER_ANY_ROLES Function | function | [local](APEX_ACL/HAS_USER_ANY_ROLES_Function.md) | [Oracle](https://docs.oracle.com/en/database/oracle/apex/26.1/aeapi/HAS_USER_ANY_ROLES-Function.html) |
| HAS_USER_ROLE Function | function | [local](APEX_ACL/HAS_USER_ROLE_Function.md) | [Oracle](https://docs.oracle.com/en/database/oracle/apex/26.1/aeapi/HAS_USER_ROLE-Function.html) |
| IS_ROLE_REMOVED_FROM_USER Function | function | [local](APEX_ACL/IS_ROLE_REMOVED_FROM_USER_Function.md) | [Oracle](https://docs.oracle.com/en/database/oracle/apex/26.1/aeapi/IS_ROLE_REMOVED_FROM_USER-Function.html) |
| REMOVE_USER_ROLE Procedure Signature 1 | procedure | [local](APEX_ACL/REMOVE_USER_ROLE_Procedure_Signature_1.md) | [Oracle](https://docs.oracle.com/en/database/oracle/apex/26.1/aeapi/REMOVE_USER_ROLE-Procedure-Signature1.html) |
| REMOVE_USER_ROLE Procedure Signature 2 | procedure | [local](APEX_ACL/REMOVE_USER_ROLE_Procedure_Signature_2.md) | [Oracle](https://docs.oracle.com/en/database/oracle/apex/26.1/aeapi/REMOVE_USER_ROLE-Procedure-Signature2.html) |
| REPLACE_USER_ROLES Procedure Signature 1 | procedure | [local](APEX_ACL/REPLACE_USER_ROLES_Procedure_Signature_1.md) | [Oracle](https://docs.oracle.com/en/database/oracle/apex/26.1/aeapi/REPLACE_USER_ROLES-Procedure-Signature1.html) |
| REPLACE_USER_ROLES Procedure Signature 2 | procedure | [local](APEX_ACL/REPLACE_USER_ROLES_Procedure_Signature_2.md) | [Oracle](https://docs.oracle.com/en/database/oracle/apex/26.1/aeapi/REPLACE_USER_ROLES-Procedure-Signature2.html) |
| REMOVE_ALL_USER_ROLES Procedure | procedure | [local](APEX_ACL/REMOVE_ALL_USER_ROLES_Procedure.md) | [Oracle](https://docs.oracle.com/en/database/oracle/apex/26.1/aeapi/REMOVE_ALL_USER_ROLES-Procedure.html) |

<!-- END GENERATED MEMBER LINKS -->
