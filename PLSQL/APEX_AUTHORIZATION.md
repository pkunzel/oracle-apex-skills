# APEX_AUTHORIZATION

Source: [Oracle APEX 26.1 API Reference](https://docs.oracle.com/en/database/oracle/apex/26.1/aeapi/APEX_AUTHORIZATION.html)

Status: curated first-pass reference.

## Purpose

`APEX_AUTHORIZATION` evaluates APEX authorization schemes for the current application session and manages the authorization result cache. It is for runtime permission decisions, not for maintaining role assignments.

Use `APEX_ACL` to grant, remove, or inspect application ACL roles. Use `APEX_AUTHORIZATION` when code needs to ask whether the current user passes a named authorization scheme or scheme Static ID.

## When To Use

Use `APEX_AUTHORIZATION` when:

- A page process must enforce the same authorization scheme used declaratively.
- A reusable PL/SQL routine needs to check a scheme before performing a sensitive action.
- A custom authentication or authorization integration needs temporary dynamic groups.
- Application logic changes group/role state and must force the next authorization check to re-evaluate.

Do not rely on client-side checks for authorization. Use these functions on the server side before mutating data, exposing secrets, or calling privileged services.

## API Surface

| Member | Use |
| --- | --- |
| `IS_AUTHORIZED` | Check a named authorization scheme in the current application. |
| `HAS_ACCESS` | Check an authorization scheme by Static ID. |
| `RESET_CACHE` | Clear cached authorization results for the current session. |
| `ENABLE_DYNAMIC_GROUPS` | Enable runtime group names for the current session. |

## Check A Scheme By Name

Signature:

```sql
apex_authorization.is_authorized(
    p_authorization_name in varchar2 )
    return boolean;
```

Simple server-side guard:

```sql
begin
    if not apex_authorization.is_authorized('Can Manage Users') then
        raise_application_error(-20000, 'Not authorized.');
    end if;

    -- Privileged operation here.
end;
/
```

Use the exact authorization scheme name from the application. Results can be cached for performance.

## Check A Scheme By Static ID

Signature:

```sql
apex_authorization.has_access(
    p_static_id in varchar2 )
    return boolean;
```

Static IDs are usually better for generated code and LLM examples because they are stable across label changes:

```sql
begin
    if apex_authorization.has_access('CAN_MANAGE_AI_AGENTS') then
        :P10_CAN_EDIT := 'Y';
    else
        :P10_CAN_EDIT := 'N';
    end if;
end;
/
```

## Reset Authorization Cache

Authorization checks are cached in the current session. After changing inputs that affect authorization, reset the cache before checking again.

```sql
begin
    apex_acl.add_user_role(
        p_application_id => :APP_ID,
        p_user_name      => :P20_USER_NAME,
        p_role_static_id => 'AI_ADMIN');

    apex_authorization.reset_cache;
end;
/
```

The cache reset affects the session where it runs. It does not globally invalidate every active user session.

## Enable Dynamic Groups

Signature:

```sql
apex_authorization.enable_dynamic_groups(
    p_group_names in apex_t_varchar2 );
```

Assuming a trusted upstream identity provider supplies vetted group names:

```sql
begin
    apex_authorization.enable_dynamic_groups(
        p_group_names => apex_t_varchar2('AI_REVIEWERS', 'FINANCE_APPROVERS'));
end;
/
```

Use dynamic groups only after validating the upstream source. Do not pass raw request headers, URL parameters, or page item values directly into `ENABLE_DYNAMIC_GROUPS`.

## More Complex Example

Assuming a custom post-authentication process maps trusted identity-provider groups to APEX groups:

```sql
declare
    l_groups apex_t_varchar2 := apex_t_varchar2();
begin
    if l_idp_claims.has('groups') then
        -- Populate l_groups only from verified token claims.
        l_groups := apex_t_varchar2('AI_USERS', 'AI_AGENT_BUILDERS');
    end if;

    apex_authorization.enable_dynamic_groups(l_groups);
    apex_authorization.reset_cache;
end;
/
```

## Safety Guidance

- Prefer authorization scheme Static IDs for generated code.
- Keep authorization checks on the server for sensitive behavior.
- Remember that results are cached; call `RESET_CACHE` after role/group changes in the same session.
- Do not confuse `APEX_AUTHORIZATION` with `APEX_ACL`: authorization evaluates access, ACL maintains role assignments.
- For code outside a browser request, create or attach an APEX session before evaluating authorization.

<!-- BEGIN GENERATED MEMBER LINKS -->

## Local Member Detail Pages

Generated navigation for LLM retrieval. Use the local detail page first, then follow the Oracle source link when exact wording or edge-case behavior must be verified.

| Member | Kind | Local detail | Source |
| --- | --- | --- | --- |
| ENABLE_DYNAMIC_GROUPS Procedure | procedure | [local](APEX_AUTHORIZATION/ENABLE_DYNAMIC_GROUPS_Procedure.md) | [Oracle](https://docs.oracle.com/en/database/oracle/apex/26.1/aeapi/ENABLE_DYNAMIC_GROUPS-Procedure.html) |
| HAS_ACCESS Function | function | [local](APEX_AUTHORIZATION/HAS_ACCESS_Function.md) | [Oracle](https://docs.oracle.com/en/database/oracle/apex/26.1/aeapi/APEX_AUTHORIZATION.HAS_ACCESS-Function.html) |
| IS_AUTHORIZED Function | function | [local](APEX_AUTHORIZATION/IS_AUTHORIZED_Function.md) | [Oracle](https://docs.oracle.com/en/database/oracle/apex/26.1/aeapi/IS_AUTHORIZED-Function.html) |
| RESET_CACHE Procedure | procedure | [local](APEX_AUTHORIZATION/RESET_CACHE_Procedure.md) | [Oracle](https://docs.oracle.com/en/database/oracle/apex/26.1/aeapi/RESET_CACHE-Procedure.html) |

<!-- END GENERATED MEMBER LINKS -->
