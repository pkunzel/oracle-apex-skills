# APEX_CUSTOM_AUTH

Source: [Oracle APEX 26.1 API Reference](https://docs.oracle.com/en/database/oracle/apex/26.1/aeapi/APEX_CUSTOM_AUTH.html)

Status: curated first-pass reference.

## Purpose

`APEX_CUSTOM_AUTH` is the older custom authentication helper package for registering users, sessions, cookies, and authentication checks. New work should usually start with [APEX_AUTHENTICATION](APEX_AUTHENTICATION.md), but this package is still important for maintaining legacy custom schemes.

## When To Use

Use it when an existing application authentication scheme already calls `APEX_CUSTOM_AUTH`, or when you need to understand older login/page-sentry logic. Prefer `APEX_AUTHENTICATION` for modern plug-in and callback-oriented authentication code.

## API Surface

| Area | Members |
| --- | --- |
| Login/session registration | `LOGIN`, `POST_LOGIN`, `DEFINE_USER_SESSION` |
| Session identity | `GET_SESSION_ID`, `GET_SESSION_ID_FROM_COOKIE`, `GET_NEXT_SESSION_ID`, `SET_SESSION_ID`, `SET_SESSION_ID_TO_NEXT_VALUE`, `SESSION_ID_EXISTS` |
| User identity | `GET_USER`, `GET_USERNAME`, `SET_USER`, `GET_SECURITY_GROUP_ID` |
| Session checks | `IS_SESSION_VALID`, `CURRENT_PAGE_IS_PUBLIC`, `APPLICATION_PAGE_ITEM_EXISTS` |
| Cookie and LDAP configuration | `GET_COOKIE_PROPS`, `GET_LDAP_PROPS`, `LDAP_DNPREP` |
| Logout | `LOGOUT` is deprecated; prefer modern logout APIs. |

## Login Example

Use only after validating credentials through your trusted authentication logic:

```sql
begin
    apex_custom_auth.login(
        p_uname         => :P101_USERNAME,
        p_password      => :P101_PASSWORD,
        p_session_id    => v('APP_SESSION'),
        p_app_page      => :APP_ID || ':1',
        p_preserve_case => true);
end;
/
```

## Post-Login Example

Assuming an external identity provider has already verified the user and the APEX page request is active:

```sql
begin
    apex_custom_auth.post_login(
        p_uname         => :P101_VERIFIED_USER,
        p_session_id    => v('APP_SESSION'),
        p_app_page      => :APP_ID || ':1',
        p_preserve_case => true);
end;
/
```

## Session Check Example

```sql
begin
    if not apex_custom_auth.is_session_valid then
        raise_application_error(-20000, 'APEX session is not valid.');
    end if;
end;
/
```

## Notes

- Never pass unvalidated credentials to `LOGIN`.
- `POST_LOGIN` assumes authentication has already succeeded and only registers the session.
- Keep legacy custom-auth code small and isolated so it can later migrate to `APEX_AUTHENTICATION`.
- Avoid deprecated `LOGOUT`; use [APEX_AUTHENTICATION](APEX_AUTHENTICATION.md) logout support for new code.

## Related APIs

- [APEX_AUTHENTICATION](APEX_AUTHENTICATION.md) for modern authentication flows.
- [APEX_SESSION](APEX_SESSION.md) for attaching/creating sessions from scripts.
- [APEX_LDAP](APEX_LDAP.md) for direct LDAP checks in legacy environments.

<!-- BEGIN GENERATED MEMBER LINKS -->

## Local Member Detail Pages

Generated navigation for LLM retrieval. Use the local detail page first, then follow the Oracle source link when exact wording or edge-case behavior must be verified.

| Member | Kind | Local detail | Source |
| --- | --- | --- | --- |
| APPLICATION_PAGE_ITEM_EXISTS Function | function | [local](APEX_CUSTOM_AUTH/APPLICATION_PAGE_ITEM_EXISTS_Function.md) | [Oracle](https://docs.oracle.com/en/database/oracle/apex/26.1/aeapi/APPLICATION_PAGE_ITEM_EXISTS-Function.html) |
| CURRENT_PAGE_IS_PUBLIC Function | function | [local](APEX_CUSTOM_AUTH/CURRENT_PAGE_IS_PUBLIC_Function.md) | [Oracle](https://docs.oracle.com/en/database/oracle/apex/26.1/aeapi/CURRENT_PAGE_IS_PUBLIC-Function.html) |
| DEFINE_USER_SESSION Procedure | procedure | [local](APEX_CUSTOM_AUTH/DEFINE_USER_SESSION_Procedure.md) | [Oracle](https://docs.oracle.com/en/database/oracle/apex/26.1/aeapi/DEFINE_USER_SESSION-Procedure.html) |
| GET_COOKIE_PROPS Procedure | procedure | [local](APEX_CUSTOM_AUTH/GET_COOKIE_PROPS_Procedure.md) | [Oracle](https://docs.oracle.com/en/database/oracle/apex/26.1/aeapi/GET_COOKIE_PROPS-Procedure.html) |
| GET_LDAP_PROPS Procedure | procedure | [local](APEX_CUSTOM_AUTH/GET_LDAP_PROPS_Procedure.md) | [Oracle](https://docs.oracle.com/en/database/oracle/apex/26.1/aeapi/GET_LDAP_PROPS-Procedure.html) |
| GET_NEXT_SESSION_ID Function | function | [local](APEX_CUSTOM_AUTH/GET_NEXT_SESSION_ID_Function.md) | [Oracle](https://docs.oracle.com/en/database/oracle/apex/26.1/aeapi/GET_NEXT_SESSION_ID-Function.html) |
| GET_SECURITY_GROUP_ID Function | function | [local](APEX_CUSTOM_AUTH/GET_SECURITY_GROUP_ID_Function.md) | [Oracle](https://docs.oracle.com/en/database/oracle/apex/26.1/aeapi/GET_SECURITY_GROUP_ID-Function.html) |
| GET_SESSION_ID Function | function | [local](APEX_CUSTOM_AUTH/GET_SESSION_ID_Function.md) | [Oracle](https://docs.oracle.com/en/database/oracle/apex/26.1/aeapi/GET_SESSION_ID-Function.html) |
| GET_SESSION_ID_FROM_COOKIE Function | function | [local](APEX_CUSTOM_AUTH/GET_SESSION_ID_FROM_COOKIE_Function.md) | [Oracle](https://docs.oracle.com/en/database/oracle/apex/26.1/aeapi/GET_SESSION_ID_FROM_COOKIE-Function.html) |
| GET_USER Function | function | [local](APEX_CUSTOM_AUTH/GET_USER_Function.md) | [Oracle](https://docs.oracle.com/en/database/oracle/apex/26.1/aeapi/GET_USER-Function.html) |
| GET_USERNAME Function | function | [local](APEX_CUSTOM_AUTH/GET_USERNAME_Function.md) | [Oracle](https://docs.oracle.com/en/database/oracle/apex/26.1/aeapi/GET_USERNAME-Function.html) |
| IS_SESSION_VALID Function | function | [local](APEX_CUSTOM_AUTH/IS_SESSION_VALID_Function.md) | [Oracle](https://docs.oracle.com/en/database/oracle/apex/26.1/aeapi/IS_SESSION_VALID-Function.html) |
| LDAP_DNPREP Function | function | [local](APEX_CUSTOM_AUTH/LDAP_DNPREP_Function.md) | [Oracle](https://docs.oracle.com/en/database/oracle/apex/26.1/aeapi/LDAP_DNPREP-Function.html) |
| LOGIN Procedure | procedure | [local](APEX_CUSTOM_AUTH/LOGIN_Procedure.md) | [Oracle](https://docs.oracle.com/en/database/oracle/apex/26.1/aeapi/LOGIN-Procedure-2.html) |
| LOGOUT Procedure (Deprecated) | procedure | [local](APEX_CUSTOM_AUTH/LOGOUT_Procedure_(Deprecated).md) | [Oracle](https://docs.oracle.com/en/database/oracle/apex/26.1/aeapi/LOGOUT-Procedure-DEPRECATED.html) |
| POST_LOGIN Procedure | procedure | [local](APEX_CUSTOM_AUTH/POST_LOGIN_Procedure.md) | [Oracle](https://docs.oracle.com/en/database/oracle/apex/26.1/aeapi/POST_LOGIN-Procedure-2.html) |
| SESSION_ID_EXISTS Function | function | [local](APEX_CUSTOM_AUTH/SESSION_ID_EXISTS_Function.md) | [Oracle](https://docs.oracle.com/en/database/oracle/apex/26.1/aeapi/SESSION_ID_EXISTS-Function.html) |
| SET_SESSION_ID Procedure | procedure | [local](APEX_CUSTOM_AUTH/SET_SESSION_ID_Procedure.md) | [Oracle](https://docs.oracle.com/en/database/oracle/apex/26.1/aeapi/SET_SESSION_ID-Procedure.html) |
| SET_SESSION_ID_TO_NEXT_VALUE Procedure | procedure | [local](APEX_CUSTOM_AUTH/SET_SESSION_ID_TO_NEXT_VALUE_Procedure.md) | [Oracle](https://docs.oracle.com/en/database/oracle/apex/26.1/aeapi/SET_SESSION_ID_TO_NEXT_VALUE-Procedure.html) |
| SET_USER Procedure | procedure | [local](APEX_CUSTOM_AUTH/SET_USER_Procedure.md) | [Oracle](https://docs.oracle.com/en/database/oracle/apex/26.1/aeapi/SET_USER-Procedure.html) |

<!-- END GENERATED MEMBER LINKS -->
