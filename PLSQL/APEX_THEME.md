# APEX_THEME

Source: [Oracle APEX 26.1 API Reference](https://docs.oracle.com/en/database/oracle/apex/26.1/aeapi/APEX_THEME.html)

Status: curated first-pass reference.

## Purpose

`APEX_THEME` manages theme style preferences for an application, session, or user. It can set the current default style, apply session-only style/CSS, persist a user's style choice, and clear or enable/disable style preferences.

## When To Use

Use it for theme-style switching, user preference management, and post-login style selection. Use [APEX_CSS](APEX_CSS.md) when you only need to add CSS files or inline CSS to a page.

## API Surface

| Area | Members |
| --- | --- |
| App/default style | `SET_CURRENT_STYLE` |
| Session style | `SET_SESSION_STYLE`, `SET_SESSION_STYLE_CSS` |
| User style | `SET_USER_STYLE`, `GET_USER_STYLE`, `CLEAR_USER_STYLE`, `CLEAR_ALL_USERS_STYLE`, `ENABLE_USER_STYLE`, `DISABLE_USER_STYLE` |

## Set User Style Example

Assuming `:P20_STYLE_ID` is selected from valid theme style IDs:

```sql
begin
    apex_theme.set_user_style(
        p_application_id => :APP_ID,
        p_user           => :APP_USER,
        p_theme_number   => 42,
        p_id             => :P20_STYLE_ID);
end;
/
```

## Post-Login Session CSS Example

Assuming the application has a tenant-specific CSS file:

```sql
begin
    apex_theme.set_session_style_css(
        p_application_id   => :APP_ID,
        p_theme_number     => 42,
        p_css_file_urls    => '#APP_FILES#themes/acme.css',
        p_page_css_classes => 'tenant-acme');
end;
/
```

## Read Preference Example

```sql
declare
    l_style_id number;
begin
    l_style_id := apex_theme.get_user_style(
        p_application_id => :APP_ID,
        p_user           => :APP_USER,
        p_theme_number   => 42);

    :P20_CURRENT_STYLE_ID := l_style_id;
end;
/
```

## Notes

- Theme style IDs are numeric for user/session preference APIs; validate against APEX metadata before assigning.
- User style preferences override session style choices where documented.
- Call session style setup after authentication or early in the request lifecycle.
- Avoid using this package for arbitrary custom CSS injection; keep CSS file URLs controlled.

## Related APIs

- [APEX_CSS](APEX_CSS.md) for page-level CSS registration.
- [apex.theme](../JavaScript/apex.theme.md) for client-side theme helpers.
- [APEX_UTIL](APEX_UTIL.md) for generic user preferences.

<!-- BEGIN GENERATED MEMBER LINKS -->

## Local Member Detail Pages

Generated navigation for LLM retrieval. Use the local detail page first, then follow the Oracle source link when exact wording or edge-case behavior must be verified.

| Member | Kind | Local detail | Source |
| --- | --- | --- | --- |
| CLEAR_ALL_USERS_STYLE Procedure | procedure | [local](APEX_THEME/CLEAR_ALL_USERS_STYLE_Procedure.md) | [Oracle](https://docs.oracle.com/en/database/oracle/apex/26.1/aeapi/CLEAR_ALL_USERS_STYLE-Procedure.html) |
| CLEAR_USER_STYLE Procedure | procedure | [local](APEX_THEME/CLEAR_USER_STYLE_Procedure.md) | [Oracle](https://docs.oracle.com/en/database/oracle/apex/26.1/aeapi/CLEAR_USER_STYLE-Procedure.html) |
| DISABLE_USER_STYLE Procedure | procedure | [local](APEX_THEME/DISABLE_USER_STYLE_Procedure.md) | [Oracle](https://docs.oracle.com/en/database/oracle/apex/26.1/aeapi/DISABLE_USER_STYLE-Procedure.html) |
| ENABLE_USER_STYLE Procedure | procedure | [local](APEX_THEME/ENABLE_USER_STYLE_Procedure.md) | [Oracle](https://docs.oracle.com/en/database/oracle/apex/26.1/aeapi/ENABLE_USER_STYLE-Procedure.html) |
| GET_USER_STYLE Function | function | [local](APEX_THEME/GET_USER_STYLE_Function.md) | [Oracle](https://docs.oracle.com/en/database/oracle/apex/26.1/aeapi/GET_USER_STYLE-Function.html) |
| SET_CURRENT_STYLE Procedure | procedure | [local](APEX_THEME/SET_CURRENT_STYLE_Procedure.md) | [Oracle](https://docs.oracle.com/en/database/oracle/apex/26.1/aeapi/SET_CURRENT_STYLE-Procedure.html) |
| SET_SESSION_STYLE Procedure | procedure | [local](APEX_THEME/SET_SESSION_STYLE_Procedure.md) | [Oracle](https://docs.oracle.com/en/database/oracle/apex/26.1/aeapi/SET_SESSION_STYLE-Procedure.html) |
| SET_SESSION_STYLE_CSS Procedure | procedure | [local](APEX_THEME/SET_SESSION_STYLE_CSS_Procedure.md) | [Oracle](https://docs.oracle.com/en/database/oracle/apex/26.1/aeapi/SET_SESSION_STYLE_CSS-Procedure.html) |
| SET_USER_STYLE Procedure | procedure | [local](APEX_THEME/SET_USER_STYLE_Procedure.md) | [Oracle](https://docs.oracle.com/en/database/oracle/apex/26.1/aeapi/SET_USER_STYLE-Procedure.html) |

<!-- END GENERATED MEMBER LINKS -->
