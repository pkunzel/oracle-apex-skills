# APEX_UTIL

Source: [Oracle APEX 26.1 API Reference](https://docs.oracle.com/en/database/oracle/apex/26.1/aeapi/APEX_UTIL.html)

Status: curated first-pass reference.

## Purpose

`APEX_UTIL` is a broad utility package for APEX session state, users, preferences, URLs, workspace context, cache management, file helpers, printing helpers, account state, accessibility toggles, and legacy compatibility APIs.

Because it is broad, use it carefully. Many members are administrative or security-sensitive, and several older members are deprecated.

## When To Use

Use `APEX_UTIL` when:

- Server-side code needs to set or get APEX session state.
- A script needs workspace/security group context.
- The app manages APEX workspace users or user preferences.
- Code needs to prepare APEX URLs with checksum/session behavior.
- A process needs to clear app/page/user cache.
- A page must support print/download helpers.

Prefer newer, more specific packages when available, such as `APEX_SESSION`, `APEX_SESSION_STATE`, `APEX_AUTHORIZATION`, `APEX_CREDENTIAL`, or dedicated region/report APIs.

## Common Member Groups

| Need | Members |
| --- | --- |
| Session state | `SET_SESSION_STATE`, `GET_SESSION_STATE`, `GET_NUMERIC_SESSION_STATE`, `FETCH_APP_ITEM` |
| Workspace context | `SET_WORKSPACE`, `FIND_SECURITY_GROUP_ID`, `SET_SECURITY_GROUP_ID`, `FIND_WORKSPACE` |
| URLs/navigation | `PREPARE_URL`, `REDIRECT_URL`, `HOST_URL` |
| Preferences | `SET_PREFERENCE`, `GET_PREFERENCE`, `REMOVE_PREFERENCE`, sort preferences |
| User management | `CREATE_USER`, `EDIT_USER`, `REMOVE_USER`, `GET_USER_ID`, `GET_USERNAME`, `LOCK_ACCOUNT`, `UNLOCK_ACCOUNT` |
| Cache | `CLEAR_APP_CACHE`, `CLEAR_PAGE_CACHE`, `CLEAR_USER_CACHE`, `CACHE_PURGE_*` |
| Files/printing | `GET_BLOB_FILE_SRC`, `GET_FILE`, `GET_PRINT_DOCUMENT`, `DOWNLOAD_PRINT_DOCUMENT` |
| Accessibility/session settings | high contrast, screen reader, session language, territory, time zone |
| Deprecated legacy APIs | IR helpers, build-option status helpers, `STRING_TO_TABLE`, `TABLE_TO_STRING`, `URL_ENCODE` |

## Session State

Set session state from PL/SQL:

```sql
begin
    apex_util.set_session_state(
        p_name  => 'P10_STATUS',
        p_value => 'APPROVED');
end;
/
```

Read session state:

```sql
declare
    l_status varchar2(30);
begin
    l_status := apex_util.get_session_state('P10_STATUS');
end;
/
```

Use `APEX_SESSION.CREATE_SESSION` before calling this from scripts outside a normal APEX request.

## Prepare A URL

Use `PREPARE_URL` when generating an APEX URL that needs the correct session and checksum behavior:

```sql
declare
    l_url varchar2(4000);
begin
    l_url := apex_util.prepare_url(
        p_url => 'f?p=' || :APP_ID || ':20:' || :APP_SESSION || '::NO::P20_ID:' || :P10_ID);
end;
/
```

Prefer `APEX_PAGE.GET_URL` when it fits the use case. Use `PREPARE_URL` for legacy URL strings and checksum preparation.

## Preferences

Store a user preference:

```sql
begin
    apex_util.set_preference(
        p_preference => 'DEFAULT_REPORT_VIEW',
        p_value      => 'CARDS',
        p_user       => :APP_USER);
end;
/
```

Read it later:

```sql
declare
    l_view varchar2(100);
begin
    l_view := apex_util.get_preference(
        p_preference => 'DEFAULT_REPORT_VIEW',
        p_user       => :APP_USER);
end;
/
```

## Workspace Context For Scripts

Assuming a script must run outside a browser request:

```sql
begin
    apex_util.set_workspace('MY_WORKSPACE');

    apex_session.create_session(
        p_app_id   => 100,
        p_page_id  => 1,
        p_username => 'ADMIN');

    apex_util.set_session_state('P1_MODE', 'BATCH');

    apex_session.delete_session;
end;
/
```

Use the exact workspace and application context required by the operation.

## User Administration

Administrative user operations should be tightly controlled:

```sql
begin
    apex_util.lock_account(
        p_user_name => 'SCOTT');
end;
/
```

Before exposing user operations in an app, enforce authorization with an authorization scheme or explicit server-side check.

## Safety Guidance

- Many `APEX_UTIL` members change APEX user/session/workspace state. Treat them as privileged APIs.
- Prefer specialized packages when they express the intent more clearly.
- Avoid deprecated APIs for new work.
- Use `APEX_SESSION` when a script needs APEX context.
- Never concatenate untrusted values into URLs without escaping/checksum handling.
- Do not expose user-management operations without strict authorization.

<!-- BEGIN GENERATED MEMBER LINKS -->

## Local Member Detail Pages

Generated navigation for LLM retrieval. Use the local detail page first, then follow the Oracle source link when exact wording or edge-case behavior must be verified.

| Member | Kind | Local detail | Source |
| --- | --- | --- | --- |
| BLOB_TO_CLOB Function | function | [local](APEX_UTIL/BLOB_TO_CLOB_Function.md) | [Oracle](https://docs.oracle.com/en/database/oracle/apex/26.1/aeapi/BLOB_TO_CLOB-Function.html) |
| CACHE_GET_DATE_OF_PAGE_CACHE Function | function | [local](APEX_UTIL/CACHE_GET_DATE_OF_PAGE_CACHE_Function.md) | [Oracle](https://docs.oracle.com/en/database/oracle/apex/26.1/aeapi/CACHE_GET_DATE_OF_PAGE_CACHE-Function.html) |
| CACHE_GET_DATE_OF_REGION_CACHE Function | function | [local](APEX_UTIL/CACHE_GET_DATE_OF_REGION_CACHE_Function.md) | [Oracle](https://docs.oracle.com/en/database/oracle/apex/26.1/aeapi/CACHE_GET_DATE_OF_REGION_CACHE-Function.html) |
| CACHE_PURGE_BY_APPLICATION Procedure | procedure | [local](APEX_UTIL/CACHE_PURGE_BY_APPLICATION_Procedure.md) | [Oracle](https://docs.oracle.com/en/database/oracle/apex/26.1/aeapi/CACHE_PURGE_BY_APPLICATION-Procedure.html) |
| CACHE_PURGE_BY_PAGE Procedure | procedure | [local](APEX_UTIL/CACHE_PURGE_BY_PAGE_Procedure.md) | [Oracle](https://docs.oracle.com/en/database/oracle/apex/26.1/aeapi/CACHE_PURGE_BY_PAGE-Procedure.html) |
| CACHE_PURGE_STALE Procedure | procedure | [local](APEX_UTIL/CACHE_PURGE_STALE_Procedure.md) | [Oracle](https://docs.oracle.com/en/database/oracle/apex/26.1/aeapi/CACHE_PURGE_STALE-Procedure.html) |
| CHANGE_CURRENT_USER_PW Procedure | procedure | [local](APEX_UTIL/CHANGE_CURRENT_USER_PW_Procedure.md) | [Oracle](https://docs.oracle.com/en/database/oracle/apex/26.1/aeapi/CHANGE_CURRENT_USER_PW-Procedure.html) |
| CHANGE_PASSWORD_ON_FIRST_USE Function | function | [local](APEX_UTIL/CHANGE_PASSWORD_ON_FIRST_USE_Function.md) | [Oracle](https://docs.oracle.com/en/database/oracle/apex/26.1/aeapi/CHANGE_PASSWORD_ON_FIRST_USE-Function.html) |
| CLOB_TO_BLOB Function | function | [local](APEX_UTIL/CLOB_TO_BLOB_Function.md) | [Oracle](https://docs.oracle.com/en/database/oracle/apex/26.1/aeapi/CLOB_TO_BLOB-Function.html) |
| CLOSE_OPEN_DB_LINKS Procedure | procedure | [local](APEX_UTIL/CLOSE_OPEN_DB_LINKS_Procedure.md) | [Oracle](https://docs.oracle.com/en/database/oracle/apex/26.1/aeapi/CLOSE_OPEN_DB_LINKS-Procedure.html) |
| CLEAR_APP_CACHE Procedure | procedure | [local](APEX_UTIL/CLEAR_APP_CACHE_Procedure.md) | [Oracle](https://docs.oracle.com/en/database/oracle/apex/26.1/aeapi/CLEAR_APP_CACHE-Procedure.html) |
| CLEAR_PAGE_CACHE Procedure | procedure | [local](APEX_UTIL/CLEAR_PAGE_CACHE_Procedure.md) | [Oracle](https://docs.oracle.com/en/database/oracle/apex/26.1/aeapi/CLEAR_PAGE_CACHE-Procedure.html) |
| CLEAR_USER_CACHE Procedure | procedure | [local](APEX_UTIL/CLEAR_USER_CACHE_Procedure.md) | [Oracle](https://docs.oracle.com/en/database/oracle/apex/26.1/aeapi/CLEAR_USER_CACHE-Procedure.html) |
| COUNT_CLICK Procedure | procedure | [local](APEX_UTIL/COUNT_CLICK_Procedure.md) | [Oracle](https://docs.oracle.com/en/database/oracle/apex/26.1/aeapi/COUNT_CLICK-Procedure.html) |
| CREATE_USER Procedure | procedure | [local](APEX_UTIL/CREATE_USER_Procedure.md) | [Oracle](https://docs.oracle.com/en/database/oracle/apex/26.1/aeapi/CREATE_USER-Procedure.html) |
| CREATE_USER_GROUP Procedure | procedure | [local](APEX_UTIL/CREATE_USER_GROUP_Procedure.md) | [Oracle](https://docs.oracle.com/en/database/oracle/apex/26.1/aeapi/CREATE_USER_GROUP-Procedure.html) |
| CURRENT_USER_IN_GROUP Function | function | [local](APEX_UTIL/CURRENT_USER_IN_GROUP_Function.md) | [Oracle](https://docs.oracle.com/en/database/oracle/apex/26.1/aeapi/CURRENT_USER_IN_GROUP-Function.html) |
| CUSTOM_CALENDAR Procedure (Deprecated) | procedure | [local](APEX_UTIL/CUSTOM_CALENDAR_Procedure_(Deprecated).md) | [Oracle](https://docs.oracle.com/en/database/oracle/apex/26.1/aeapi/CUSTOM_CALENDAR-Procedure.html) |
| DELETE_FEEDBACK Procedure | procedure | [local](APEX_UTIL/DELETE_FEEDBACK_Procedure.md) | [Oracle](https://docs.oracle.com/en/database/oracle/apex/26.1/aeapi/APEX_UTIL.DELETE_FEEDBACK-Procedure.html) |
| DELETE_FEEDBACK_ATTACHMENT Procedure | procedure | [local](APEX_UTIL/DELETE_FEEDBACK_ATTACHMENT_Procedure.md) | [Oracle](https://docs.oracle.com/en/database/oracle/apex/26.1/aeapi/APEX_UTIL.DELETE_FEEDBACK_ATTACHMENT-Procedure.html) |
| DELETE_USER_GROUP Procedure Signature 1 | procedure | [local](APEX_UTIL/DELETE_USER_GROUP_Procedure_Signature_1.md) | [Oracle](https://docs.oracle.com/en/database/oracle/apex/26.1/aeapi/DELETE_USER_GROUP-Procedure-Signature-1.html) |
| DELETE_USER_GROUP Procedure Signature 2 | procedure | [local](APEX_UTIL/DELETE_USER_GROUP_Procedure_Signature_2.md) | [Oracle](https://docs.oracle.com/en/database/oracle/apex/26.1/aeapi/DELETE_USER_GROUP-Procedure-Signature-2.html) |
| DOWNLOAD_PRINT_DOCUMENT Procedure Signature 1 | procedure | [local](APEX_UTIL/DOWNLOAD_PRINT_DOCUMENT_Procedure_Signature_1.md) | [Oracle](https://docs.oracle.com/en/database/oracle/apex/26.1/aeapi/DOWNLOAD_PRINT_DOCUMENT-Procedure-Signature-1.html) |
| DOWNLOAD_PRINT_DOCUMENT Procedure Signature 2 | procedure | [local](APEX_UTIL/DOWNLOAD_PRINT_DOCUMENT_Procedure_Signature_2.md) | [Oracle](https://docs.oracle.com/en/database/oracle/apex/26.1/aeapi/DOWNLOAD_PRINT_DOCUMENT-Procedure-Signature-2.html) |
| DOWNLOAD_PRINT_DOCUMENT Procedure Signature 3 | procedure | [local](APEX_UTIL/DOWNLOAD_PRINT_DOCUMENT_Procedure_Signature_3.md) | [Oracle](https://docs.oracle.com/en/database/oracle/apex/26.1/aeapi/DOWNLOAD_PRINT_DOCUMENT-Procedure-Signature-3.html) |
| DOWNLOAD_PRINT_DOCUMENT Procedure Signature 4 | procedure | [local](APEX_UTIL/DOWNLOAD_PRINT_DOCUMENT_Procedure_Signature_4.md) | [Oracle](https://docs.oracle.com/en/database/oracle/apex/26.1/aeapi/DOWNLOAD_PRINT_DOCUMENT-Procedure-Signature-4.html) |
| EDIT_USER Procedure | procedure | [local](APEX_UTIL/EDIT_USER_Procedure.md) | [Oracle](https://docs.oracle.com/en/database/oracle/apex/26.1/aeapi/EDIT_USER-Procedure.html) |
| END_USER_ACCOUNT_DAYS_LEFT Function | function | [local](APEX_UTIL/END_USER_ACCOUNT_DAYS_LEFT_Function.md) | [Oracle](https://docs.oracle.com/en/database/oracle/apex/26.1/aeapi/END_USER_ACCOUNT_DAYS_LEFT-Function.html) |
| EXPIRE_END_USER_ACCOUNT Procedure | procedure | [local](APEX_UTIL/EXPIRE_END_USER_ACCOUNT_Procedure.md) | [Oracle](https://docs.oracle.com/en/database/oracle/apex/26.1/aeapi/EXPIRE_END_USER_ACCOUNT-Procedure.html) |
| EXPIRE_WORKSPACE_ACCOUNT Procedure | procedure | [local](APEX_UTIL/EXPIRE_WORKSPACE_ACCOUNT_Procedure.md) | [Oracle](https://docs.oracle.com/en/database/oracle/apex/26.1/aeapi/EXPIRE_WORKSPACE_ACCOUNT-Procedure.html) |
| EXPORT_USERS Procedure | procedure | [local](APEX_UTIL/EXPORT_USERS_Procedure.md) | [Oracle](https://docs.oracle.com/en/database/oracle/apex/26.1/aeapi/EXPORT_USERS-Procedure.html) |
| FEEDBACK_ENABLED Function | function | [local](APEX_UTIL/FEEDBACK_ENABLED_Function.md) | [Oracle](https://docs.oracle.com/en/database/oracle/apex/26.1/aeapi/FEEDBACK_ENABLED-Function.html) |
| FETCH_APP_ITEM Function | function | [local](APEX_UTIL/FETCH_APP_ITEM_Function.md) | [Oracle](https://docs.oracle.com/en/database/oracle/apex/26.1/aeapi/FETCH_APP_ITEM-Function.html) |
| FETCH_USER Procedure Signature 1 | procedure | [local](APEX_UTIL/FETCH_USER_Procedure_Signature_1.md) | [Oracle](https://docs.oracle.com/en/database/oracle/apex/26.1/aeapi/FETCH_USER-Procedure-Signature-1.html) |
| FETCH_USER Procedure Signature 2 | procedure | [local](APEX_UTIL/FETCH_USER_Procedure_Signature_2.md) | [Oracle](https://docs.oracle.com/en/database/oracle/apex/26.1/aeapi/FETCH_USER-Procedure-Signature-2.html) |
| FETCH_USER Procedure Signature 3 | procedure | [local](APEX_UTIL/FETCH_USER_Procedure_Signature_3.md) | [Oracle](https://docs.oracle.com/en/database/oracle/apex/26.1/aeapi/FETCH_USER-Procedure-Signature-3.html) |
| FIND_SECURITY_GROUP_ID Function | function | [local](APEX_UTIL/FIND_SECURITY_GROUP_ID_Function.md) | [Oracle](https://docs.oracle.com/en/database/oracle/apex/26.1/aeapi/FIND_SECURITY_GROUP_ID-Function.html) |
| FIND_WORKSPACE Function | function | [local](APEX_UTIL/FIND_WORKSPACE_Function.md) | [Oracle](https://docs.oracle.com/en/database/oracle/apex/26.1/aeapi/FIND_WORKSPACE-Function.html) |
| GET_ACCOUNT_LOCKED_STATUS Function | function | [local](APEX_UTIL/GET_ACCOUNT_LOCKED_STATUS_Function.md) | [Oracle](https://docs.oracle.com/en/database/oracle/apex/26.1/aeapi/GET_ACCOUNT_LOCKED_STATUS-Function.html) |
| GET_APEX_OWNER Function | function | [local](APEX_UTIL/GET_APEX_OWNER_Function.md) | [Oracle](https://docs.oracle.com/en/database/oracle/apex/26.1/aeapi/APEX_UTIL.GET_APEX_OWNER-Function.html) |
| GET_APPLICATION_STATUS Function (Deprecated) | function | [local](APEX_UTIL/GET_APPLICATION_STATUS_Function_(Deprecated).md) | [Oracle](https://docs.oracle.com/en/database/oracle/apex/26.1/aeapi/GET_APPLICATION_STATUS-Function.html) |
| GET_ATTRIBUTE Function | function | [local](APEX_UTIL/GET_ATTRIBUTE_Function.md) | [Oracle](https://docs.oracle.com/en/database/oracle/apex/26.1/aeapi/GET_ATTRIBUTE-Function.html) |
| GET_AUTHENTICATION_RESULT Function | function | [local](APEX_UTIL/GET_AUTHENTICATION_RESULT_Function.md) | [Oracle](https://docs.oracle.com/en/database/oracle/apex/26.1/aeapi/GET_AUTHENTICATION_RESULT-Function.html) |
| GET_BLOB_FILE_SRC Function | function | [local](APEX_UTIL/GET_BLOB_FILE_SRC_Function.md) | [Oracle](https://docs.oracle.com/en/database/oracle/apex/26.1/aeapi/GET_BLOB_FILE_SRC-Function.html) |
| GET_BUILD_OPTION_STATUS Function Signature 1 (Deprecated) | function | [local](APEX_UTIL/GET_BUILD_OPTION_STATUS_Function_Signature_1_(Deprecated).md) | [Oracle](https://docs.oracle.com/en/database/oracle/apex/26.1/aeapi/GET_BUILD_OPTION_STATUS-Function-Signature-1.html) |
| GET_BUILD_OPTION_STATUS Function Signature 2 (Deprecated) | function | [local](APEX_UTIL/GET_BUILD_OPTION_STATUS_Function_Signature_2_(Deprecated).md) | [Oracle](https://docs.oracle.com/en/database/oracle/apex/26.1/aeapi/GET_BUILD_OPTION_STATUS-Function-Signature-2.html) |
| GET_CURRENT_USER_ID Function | function | [local](APEX_UTIL/GET_CURRENT_USER_ID_Function.md) | [Oracle](https://docs.oracle.com/en/database/oracle/apex/26.1/aeapi/GET_CURRENT_USER_ID-Function.html) |
| GET_DEFAULT_SCHEMA Function | function | [local](APEX_UTIL/GET_DEFAULT_SCHEMA_Function.md) | [Oracle](https://docs.oracle.com/en/database/oracle/apex/26.1/aeapi/GET_DEFAULT_SCHEMA-Function.html) |
| GET_EDITION Function | function | [local](APEX_UTIL/GET_EDITION_Function.md) | [Oracle](https://docs.oracle.com/en/database/oracle/apex/26.1/aeapi/GET_EDITION-Function.html) |
| GET_EMAIL Function | function | [local](APEX_UTIL/GET_EMAIL_Function.md) | [Oracle](https://docs.oracle.com/en/database/oracle/apex/26.1/aeapi/GET_EMAIL-Function.html) |
| GET_FEEDBACK_FOLLOW_UP Function | function | [local](APEX_UTIL/GET_FEEDBACK_FOLLOW_UP_Function.md) | [Oracle](https://docs.oracle.com/en/database/oracle/apex/26.1/aeapi/GET_FEEDBACK_FOLLOW_UP-Function.html) |
| GET_FILE Procedure | procedure | [local](APEX_UTIL/GET_FILE_Procedure.md) | [Oracle](https://docs.oracle.com/en/database/oracle/apex/26.1/aeapi/GET_FILE-Procedure.html) |
| GET_FILE_ID Function | function | [local](APEX_UTIL/GET_FILE_ID_Function.md) | [Oracle](https://docs.oracle.com/en/database/oracle/apex/26.1/aeapi/GET_FILE_ID-Function.html) |
| GET_FIRST_NAME Function | function | [local](APEX_UTIL/GET_FIRST_NAME_Function.md) | [Oracle](https://docs.oracle.com/en/database/oracle/apex/26.1/aeapi/GET_FIRST_NAME-Function.html) |
| GET_GLOBAL_NOTIFICATION Function (Deprecated) | function | [local](APEX_UTIL/GET_GLOBAL_NOTIFICATION_Function_(Deprecated).md) | [Oracle](https://docs.oracle.com/en/database/oracle/apex/26.1/aeapi/GET_GLOBAL_NOTIFICATION-Function.html) |
| GET_GROUPS_USER_BELONGS_TO Function | function | [local](APEX_UTIL/GET_GROUPS_USER_BELONGS_TO_Function.md) | [Oracle](https://docs.oracle.com/en/database/oracle/apex/26.1/aeapi/GET_GROUPS_USER_BELONGS_TO-Function.html) |
| GET_GROUP_ID Function | function | [local](APEX_UTIL/GET_GROUP_ID_Function.md) | [Oracle](https://docs.oracle.com/en/database/oracle/apex/26.1/aeapi/GET_GROUP_ID-Function.html) |
| GET_GROUP_NAME Function | function | [local](APEX_UTIL/GET_GROUP_NAME_Function.md) | [Oracle](https://docs.oracle.com/en/database/oracle/apex/26.1/aeapi/GET_GROUP_NAME-Function.html) |
| GET_HASH Function | function | [local](APEX_UTIL/GET_HASH_Function.md) | [Oracle](https://docs.oracle.com/en/database/oracle/apex/26.1/aeapi/GET_HASH-Function.html) |
| GET_HIGH_CONTRAST_MODE_TOGGLE Function | function | [local](APEX_UTIL/GET_HIGH_CONTRAST_MODE_TOGGLE_Function.md) | [Oracle](https://docs.oracle.com/en/database/oracle/apex/26.1/aeapi/GET_HIGH_CONTRAST_MODE_TOGGLE-Function.html) |
| GET_LAST_NAME Function | function | [local](APEX_UTIL/GET_LAST_NAME_Function.md) | [Oracle](https://docs.oracle.com/en/database/oracle/apex/26.1/aeapi/GET_LAST_NAME-Function.html) |
| GET_NUMERIC_SESSION_STATE Function | function | [local](APEX_UTIL/GET_NUMERIC_SESSION_STATE_Function.md) | [Oracle](https://docs.oracle.com/en/database/oracle/apex/26.1/aeapi/GET_NUMERIC_SESSION_STATE-Function.html) |
| GET_PREFERENCE Function | function | [local](APEX_UTIL/GET_PREFERENCE_Function.md) | [Oracle](https://docs.oracle.com/en/database/oracle/apex/26.1/aeapi/GET_PREFERENCE-Function.html) |
| GET_PRINT_DOCUMENT Function Signature 1 | function | [local](APEX_UTIL/GET_PRINT_DOCUMENT_Function_Signature_1.md) | [Oracle](https://docs.oracle.com/en/database/oracle/apex/26.1/aeapi/GET_PRINT_DOCUMENT-Function-Signature-1.html) |
| GET_PRINT_DOCUMENT Function Signature 2 | function | [local](APEX_UTIL/GET_PRINT_DOCUMENT_Function_Signature_2.md) | [Oracle](https://docs.oracle.com/en/database/oracle/apex/26.1/aeapi/GET_PRINT_DOCUMENT-Function-Signature-2.html) |
| GET_PRINT_DOCUMENT Function Signature 3 | function | [local](APEX_UTIL/GET_PRINT_DOCUMENT_Function_Signature_3.md) | [Oracle](https://docs.oracle.com/en/database/oracle/apex/26.1/aeapi/GET_PRINT_DOCUMENT-Function-Signature-3.html) |
| GET_PRINT_DOCUMENT Function Signature 4 | function | [local](APEX_UTIL/GET_PRINT_DOCUMENT_Function_Signature_4.md) | [Oracle](https://docs.oracle.com/en/database/oracle/apex/26.1/aeapi/GET_PRINT_DOCUMENT-Function-Signature-4.html) |
| GET_SCREEN_READER_MODE_TOGGLE Function | function | [local](APEX_UTIL/GET_SCREEN_READER_MODE_TOGGLE_Function.md) | [Oracle](https://docs.oracle.com/en/database/oracle/apex/26.1/aeapi/GET_SCREEN_READER_MODE_TOGGLE-Function.html) |
| GET_SESSION_LANG Function | function | [local](APEX_UTIL/GET_SESSION_LANG_Function.md) | [Oracle](https://docs.oracle.com/en/database/oracle/apex/26.1/aeapi/GET_SESSION_LANG-Function.html) |
| GET_SESSION_STATE Function | function | [local](APEX_UTIL/GET_SESSION_STATE_Function.md) | [Oracle](https://docs.oracle.com/en/database/oracle/apex/26.1/aeapi/GET_SESSION_STATE-Function.html) |
| GET_SESSION_TERRITORY Function | function | [local](APEX_UTIL/GET_SESSION_TERRITORY_Function.md) | [Oracle](https://docs.oracle.com/en/database/oracle/apex/26.1/aeapi/GET_SESSION_TERRITORY-Function.html) |
| GET_SESSION_TIME_ZONE Function | function | [local](APEX_UTIL/GET_SESSION_TIME_ZONE_Function.md) | [Oracle](https://docs.oracle.com/en/database/oracle/apex/26.1/aeapi/GET_SESSION_TIME_ZONE-Function.html) |
| GET_SINCE Function Signature 1 | function | [local](APEX_UTIL/GET_SINCE_Function_Signature_1.md) | [Oracle](https://docs.oracle.com/en/database/oracle/apex/26.1/aeapi/GET_SINCE-Function-Signature-1.html) |
| GET_SINCE Function Signature 2 | function | [local](APEX_UTIL/GET_SINCE_Function_Signature_2.md) | [Oracle](https://docs.oracle.com/en/database/oracle/apex/26.1/aeapi/GET_SINCE-Function-Signature-2.html) |
| GET_SUPPORTING_OBJECT_SCRIPT Function | function | [local](APEX_UTIL/GET_SUPPORTING_OBJECT_SCRIPT_Function.md) | [Oracle](https://docs.oracle.com/en/database/oracle/apex/26.1/aeapi/GET_SUPPORTING_OBJECT_SCRIPT-Function.html) |
| GET_SUPPORTING_OBJECT_SCRIPT Procedure | procedure | [local](APEX_UTIL/GET_SUPPORTING_OBJECT_SCRIPT_Procedure.md) | [Oracle](https://docs.oracle.com/en/database/oracle/apex/26.1/aeapi/GET_SUPPORTING_OBJECT_SCRIPT-Procedure.html) |
| GET_USER_ID Function | function | [local](APEX_UTIL/GET_USER_ID_Function.md) | [Oracle](https://docs.oracle.com/en/database/oracle/apex/26.1/aeapi/GET_USER_ID-Function.html) |
| GET_USER_ROLES Function | function | [local](APEX_UTIL/GET_USER_ROLES_Function.md) | [Oracle](https://docs.oracle.com/en/database/oracle/apex/26.1/aeapi/GET_USER_ROLES-Function.html) |
| GET_USERNAME Function | function | [local](APEX_UTIL/GET_USERNAME_Function.md) | [Oracle](https://docs.oracle.com/en/database/oracle/apex/26.1/aeapi/GET_USERNAME-Function-2.html) |
| HOST_URL Function | function | [local](APEX_UTIL/HOST_URL_Function.md) | [Oracle](https://docs.oracle.com/en/database/oracle/apex/26.1/aeapi/HOST_URL-Function.html) |
| HTML_PCT_GRAPH_MASK Function | function | [local](APEX_UTIL/HTML_PCT_GRAPH_MASK_Function.md) | [Oracle](https://docs.oracle.com/en/database/oracle/apex/26.1/aeapi/HTML_PCT_GRAPH_MASK-Function.html) |
| INCREMENT_CALENDAR Procedure (Deprecated) | procedure | [local](APEX_UTIL/INCREMENT_CALENDAR_Procedure_(Deprecated).md) | [Oracle](https://docs.oracle.com/en/database/oracle/apex/26.1/aeapi/INCREMENT_CALENDAR-Procedure.html) |
| IR_CLEAR Procedure (Deprecated) | procedure | [local](APEX_UTIL/IR_CLEAR_Procedure_(Deprecated).md) | [Oracle](https://docs.oracle.com/en/database/oracle/apex/26.1/aeapi/IR_CLEAR-Procedure-DEPRECATED.html) |
| IR_DELETE_REPORT Procedure (Deprecated) | procedure | [local](APEX_UTIL/IR_DELETE_REPORT_Procedure_(Deprecated).md) | [Oracle](https://docs.oracle.com/en/database/oracle/apex/26.1/aeapi/IR_DELETE_REPORT-Procedure-DEPRECATED.html) |
| IR_DELETE_SUBSCRIPTION Procedure (Deprecated) | procedure | [local](APEX_UTIL/IR_DELETE_SUBSCRIPTION_Procedure_(Deprecated).md) | [Oracle](https://docs.oracle.com/en/database/oracle/apex/26.1/aeapi/IR_DELETE_SUBSCRIPTION-Procedure-DEPRECATED.html) |
| IR_FILTER Procedure (Deprecated) | procedure | [local](APEX_UTIL/IR_FILTER_Procedure_(Deprecated).md) | [Oracle](https://docs.oracle.com/en/database/oracle/apex/26.1/aeapi/IR_FILTER-Procedure-DEPRECATED.html) |
| IR_RESET Procedure (Deprecated) | procedure | [local](APEX_UTIL/IR_RESET_Procedure_(Deprecated).md) | [Oracle](https://docs.oracle.com/en/database/oracle/apex/26.1/aeapi/IR_RESET-Procedure-DEPRECATED.html) |
| IS_HIGH_CONTRAST_SESSION Function | function | [local](APEX_UTIL/IS_HIGH_CONTRAST_SESSION_Function.md) | [Oracle](https://docs.oracle.com/en/database/oracle/apex/26.1/aeapi/IS_HIGH_CONTRAST_SESSION-Function.html) |
| IS_HIGH_CONTRAST_SESSION_YN Function | function | [local](APEX_UTIL/IS_HIGH_CONTRAST_SESSION_YN_Function.md) | [Oracle](https://docs.oracle.com/en/database/oracle/apex/26.1/aeapi/IS_HIGH_CONTRAST_SESSION_YN-Function.html) |
| IS_LOGIN_PASSWORD_VALID Function | function | [local](APEX_UTIL/IS_LOGIN_PASSWORD_VALID_Function.md) | [Oracle](https://docs.oracle.com/en/database/oracle/apex/26.1/aeapi/IS_LOGIN_PASSWORD_VALID-Function.html) |
| IS_SCREEN_READER_SESSION Function | function | [local](APEX_UTIL/IS_SCREEN_READER_SESSION_Function.md) | [Oracle](https://docs.oracle.com/en/database/oracle/apex/26.1/aeapi/IS_SCREEN_READER_SESSION-Function.html) |
| IS_SCREEN_READER_SESSION_YN Function | function | [local](APEX_UTIL/IS_SCREEN_READER_SESSION_YN_Function.md) | [Oracle](https://docs.oracle.com/en/database/oracle/apex/26.1/aeapi/IS_SCREEN_READER_SESSION_YN-Function.html) |
| IS_USERNAME_UNIQUE Function | function | [local](APEX_UTIL/IS_USERNAME_UNIQUE_Function.md) | [Oracle](https://docs.oracle.com/en/database/oracle/apex/26.1/aeapi/IS_USERNAME_UNIQUE-Function.html) |
| KEYVAL_NUM Function | function | [local](APEX_UTIL/KEYVAL_NUM_Function.md) | [Oracle](https://docs.oracle.com/en/database/oracle/apex/26.1/aeapi/KEYVAL_NUM-Function.html) |
| KEYVAL_VC2 Function | function | [local](APEX_UTIL/KEYVAL_VC2_Function.md) | [Oracle](https://docs.oracle.com/en/database/oracle/apex/26.1/aeapi/KEYVAL_VC2-Function.html) |
| LOCK_ACCOUNT Procedure | procedure | [local](APEX_UTIL/LOCK_ACCOUNT_Procedure.md) | [Oracle](https://docs.oracle.com/en/database/oracle/apex/26.1/aeapi/LOCK_ACCOUNT-Procedure.html) |
| PASSWORD_FIRST_USE_OCCURRED Function | function | [local](APEX_UTIL/PASSWORD_FIRST_USE_OCCURRED_Function.md) | [Oracle](https://docs.oracle.com/en/database/oracle/apex/26.1/aeapi/PASSWORD_FIRST_USE_OCCURRED-Function.html) |
| PREPARE_URL Function | function | [local](APEX_UTIL/PREPARE_URL_Function.md) | [Oracle](https://docs.oracle.com/en/database/oracle/apex/26.1/aeapi/PREPARE_URL-Function.html) |
| PRN Procedure | procedure | [local](APEX_UTIL/PRN_Procedure.md) | [Oracle](https://docs.oracle.com/en/database/oracle/apex/26.1/aeapi/PRN-Procedure.html) |
| PUBLIC_CHECK_AUTHORIZATION Function (Deprecated) | function | [local](APEX_UTIL/PUBLIC_CHECK_AUTHORIZATION_Function_(Deprecated).md) | [Oracle](https://docs.oracle.com/en/database/oracle/apex/26.1/aeapi/PUBLIC_CHECK_AUTHORIZATION-Function-DEPRECATED.html) |
| PURGE_REGIONS_BY_APP Procedure | procedure | [local](APEX_UTIL/PURGE_REGIONS_BY_APP_Procedure.md) | [Oracle](https://docs.oracle.com/en/database/oracle/apex/26.1/aeapi/PURGE_REGIONS_BY_APP-Procedure.html) |
| PURGE_REGIONS_BY_NAME Procedure | procedure | [local](APEX_UTIL/PURGE_REGIONS_BY_NAME_Procedure.md) | [Oracle](https://docs.oracle.com/en/database/oracle/apex/26.1/aeapi/PURGE_REGIONS_BY_NAME-Procedure.html) |
| PURGE_REGIONS_BY_PAGE Procedure | procedure | [local](APEX_UTIL/PURGE_REGIONS_BY_PAGE_Procedure.md) | [Oracle](https://docs.oracle.com/en/database/oracle/apex/26.1/aeapi/PURGE_REGIONS_BY_PAGE-Procedure.html) |
| REDIRECT_URL Procedure | procedure | [local](APEX_UTIL/REDIRECT_URL_Procedure.md) | [Oracle](https://docs.oracle.com/en/database/oracle/apex/26.1/aeapi/REDIRECT_URL-Procedure.html) |
| REMOVE_PREFERENCE Procedure | procedure | [local](APEX_UTIL/REMOVE_PREFERENCE_Procedure.md) | [Oracle](https://docs.oracle.com/en/database/oracle/apex/26.1/aeapi/REMOVE_PREFERENCE-Procedure.html) |
| REMOVE_SORT_PREFERENCES Procedure | procedure | [local](APEX_UTIL/REMOVE_SORT_PREFERENCES_Procedure.md) | [Oracle](https://docs.oracle.com/en/database/oracle/apex/26.1/aeapi/REMOVE_SORT_PREFERENCES-Procedure.html) |
| REMOVE_USER Procedure Signature 1 | procedure | [local](APEX_UTIL/REMOVE_USER_Procedure_Signature_1.md) | [Oracle](https://docs.oracle.com/en/database/oracle/apex/26.1/aeapi/REMOVE_USER-Signature-1-Procedure.html) |
| REMOVE_USER Procedure Signature 2 | procedure | [local](APEX_UTIL/REMOVE_USER_Procedure_Signature_2.md) | [Oracle](https://docs.oracle.com/en/database/oracle/apex/26.1/aeapi/REMOVE_USER-Signature-2-Procedure.html) |
| REPLY_TO_FEEDBACK Procedure | procedure | [local](APEX_UTIL/REPLY_TO_FEEDBACK_Procedure.md) | [Oracle](https://docs.oracle.com/en/database/oracle/apex/26.1/aeapi/APEX_UTIL.REPLY_TO_FEEDBACK-Procedure.html) |
| RESET_AUTHORIZATIONS Procedure (Deprecated) | procedure | [local](APEX_UTIL/RESET_AUTHORIZATIONS_Procedure_(Deprecated).md) | [Oracle](https://docs.oracle.com/en/database/oracle/apex/26.1/aeapi/RESET_AUTHORIZATIONS-Procedure-DEPRECATED.html) |
| RESET_PASSWORD Procedure | procedure | [local](APEX_UTIL/RESET_PASSWORD_Procedure.md) | [Oracle](https://docs.oracle.com/en/database/oracle/apex/26.1/aeapi/RESET_PASSWORD-Procedure.html) |
| RESET_PW Procedure | procedure | [local](APEX_UTIL/RESET_PW_Procedure.md) | [Oracle](https://docs.oracle.com/en/database/oracle/apex/26.1/aeapi/RESET_PW-Procedure.html) |
| SAVEKEY_NUM Function | function | [local](APEX_UTIL/SAVEKEY_NUM_Function.md) | [Oracle](https://docs.oracle.com/en/database/oracle/apex/26.1/aeapi/SAVEKEY_NUM-Function.html) |
| SAVEKEY_VC2 Function | function | [local](APEX_UTIL/SAVEKEY_VC2_Function.md) | [Oracle](https://docs.oracle.com/en/database/oracle/apex/26.1/aeapi/SAVEKEY_VC2-Function.html) |
| SET_APP_BUILD_STATUS Procedure (Deprecated) | procedure | [local](APEX_UTIL/SET_APP_BUILD_STATUS_Procedure_(Deprecated).md) | [Oracle](https://docs.oracle.com/en/database/oracle/apex/26.1/aeapi/SET_APP_BUILD_STATUS_Procedure.html) |
| SET_APPLICATION_STATUS Procedure (Deprecated) | procedure | [local](APEX_UTIL/SET_APPLICATION_STATUS_Procedure_(Deprecated).md) | [Oracle](https://docs.oracle.com/en/database/oracle/apex/26.1/aeapi/SET_APPLICATION_STATUS-Procedure.html) |
| SET_ATTRIBUTE Procedure | procedure | [local](APEX_UTIL/SET_ATTRIBUTE_Procedure.md) | [Oracle](https://docs.oracle.com/en/database/oracle/apex/26.1/aeapi/SET_ATTRIBUTE-Procedure.html) |
| SET_AUTHENTICATION_RESULT Procedure | procedure | [local](APEX_UTIL/SET_AUTHENTICATION_RESULT_Procedure.md) | [Oracle](https://docs.oracle.com/en/database/oracle/apex/26.1/aeapi/SET_AUTHENTICATION_RESULT-Procedure.html) |
| SET_BUILD_OPTION_STATUS Procedure (Deprecated) | procedure | [local](APEX_UTIL/SET_BUILD_OPTION_STATUS_Procedure_(Deprecated).md) | [Oracle](https://docs.oracle.com/en/database/oracle/apex/26.1/aeapi/SET_BUILD_OPTION_STATUS-Procedure.html) |
| SET_CURRENT_THEME_STYLE Procedure (Deprecated) | procedure | [local](APEX_UTIL/SET_CURRENT_THEME_STYLE_Procedure_(Deprecated).md) | [Oracle](https://docs.oracle.com/en/database/oracle/apex/26.1/aeapi/SET_CURRENT_THEME_STYLE-Procedure.html) |
| SET_CUSTOM_AUTH_STATUS Procedure | procedure | [local](APEX_UTIL/SET_CUSTOM_AUTH_STATUS_Procedure.md) | [Oracle](https://docs.oracle.com/en/database/oracle/apex/26.1/aeapi/SET_CUSTOM_AUTH_STATUS-Procedure.html) |
| SET_EDITION Procedure | procedure | [local](APEX_UTIL/SET_EDITION_Procedure.md) | [Oracle](https://docs.oracle.com/en/database/oracle/apex/26.1/aeapi/SET_EDITION-Procedure.html) |
| SET_EMAIL Procedure | procedure | [local](APEX_UTIL/SET_EMAIL_Procedure.md) | [Oracle](https://docs.oracle.com/en/database/oracle/apex/26.1/aeapi/SET_EMAIL-Procedure.html) |
| SET_FIRST_NAME Procedure | procedure | [local](APEX_UTIL/SET_FIRST_NAME_Procedure.md) | [Oracle](https://docs.oracle.com/en/database/oracle/apex/26.1/aeapi/SET_FIRST_NAME-Procedure.html) |
| SET_GLOBAL_NOTIFICATION Procedure (Deprecated) | procedure | [local](APEX_UTIL/SET_GLOBAL_NOTIFICATION_Procedure_(Deprecated).md) | [Oracle](https://docs.oracle.com/en/database/oracle/apex/26.1/aeapi/SET_GLOBAL_NOTIFICATION-Procedure.html) |
| SET_GROUP_GROUP_GRANTS Procedure | procedure | [local](APEX_UTIL/SET_GROUP_GROUP_GRANTS_Procedure.md) | [Oracle](https://docs.oracle.com/en/database/oracle/apex/26.1/aeapi/SET_GROUP_GROUP_GRANTS-Procedure.html) |
| SET_GROUP_USER_GRANTS Procedure | procedure | [local](APEX_UTIL/SET_GROUP_USER_GRANTS_Procedure.md) | [Oracle](https://docs.oracle.com/en/database/oracle/apex/26.1/aeapi/SET_GROUP_USER_GRANTS-Procedure.html) |
| SET_LAST_NAME Procedure | procedure | [local](APEX_UTIL/SET_LAST_NAME_Procedure.md) | [Oracle](https://docs.oracle.com/en/database/oracle/apex/26.1/aeapi/SET_LAST_NAME-Procedure.html) |
| SET_PARSING_SCHEMA_FOR _REQUEST Procedure | procedure | [local](APEX_UTIL/SET_PARSING_SCHEMA_FOR_REQUEST_Procedure.md) | [Oracle](https://docs.oracle.com/en/database/oracle/apex/26.1/aeapi/SET_PARSING_SCHEMA_FOR_REQUEST-Procedure.html) |
| SET_PREFERENCE Procedure | procedure | [local](APEX_UTIL/SET_PREFERENCE_Procedure.md) | [Oracle](https://docs.oracle.com/en/database/oracle/apex/26.1/aeapi/SET_PREFERENCE-Procedure.html) |
| SET_SECURITY_GROUP_ID Procedure | procedure | [local](APEX_UTIL/SET_SECURITY_GROUP_ID_Procedure.md) | [Oracle](https://docs.oracle.com/en/database/oracle/apex/26.1/aeapi/SET_SECURITY_GROUP_ID-Procedure.html) |
| SET_SESSION_HIGH_CONTRAST_OFF Procedure | procedure | [local](APEX_UTIL/SET_SESSION_HIGH_CONTRAST_OFF_Procedure.md) | [Oracle](https://docs.oracle.com/en/database/oracle/apex/26.1/aeapi/SET_SESSION_HIGH_CONTRAST_OFF-Procedure.html) |
| SET_SESSION_HIGH_CONTRAST_ON Procedure | procedure | [local](APEX_UTIL/SET_SESSION_HIGH_CONTRAST_ON_Procedure.md) | [Oracle](https://docs.oracle.com/en/database/oracle/apex/26.1/aeapi/SET_SESSION_HIGH_CONTRAST_ON-Procedure.html) |
| SET_SESSION_LANG Procedure | procedure | [local](APEX_UTIL/SET_SESSION_LANG_Procedure.md) | [Oracle](https://docs.oracle.com/en/database/oracle/apex/26.1/aeapi/SET_SESSION_LANG-Procedure.html) |
| SET_SESSION_LIFETIME_SECONDS Procedure | procedure | [local](APEX_UTIL/SET_SESSION_LIFETIME_SECONDS_Procedure.md) | [Oracle](https://docs.oracle.com/en/database/oracle/apex/26.1/aeapi/SET_SESSION_LIFETIME_SECONDS-Procedure.html) |
| SET_SESSION_MAX_IDLE_SECONDS Procedure | procedure | [local](APEX_UTIL/SET_SESSION_MAX_IDLE_SECONDS_Procedure.md) | [Oracle](https://docs.oracle.com/en/database/oracle/apex/26.1/aeapi/SET_SESSION_MAX_IDLE_SECONDS-Procedure.html) |
| SET_SESSION_SCREEN_READER_OFF Procedure | procedure | [local](APEX_UTIL/SET_SESSION_SCREEN_READER_OFF_Procedure.md) | [Oracle](https://docs.oracle.com/en/database/oracle/apex/26.1/aeapi/SET_SESSION_SCREEN_READER_OFF-Procedure.html) |
| SET_SESSION_SCREEN_READER_ON Procedure | procedure | [local](APEX_UTIL/SET_SESSION_SCREEN_READER_ON_Procedure.md) | [Oracle](https://docs.oracle.com/en/database/oracle/apex/26.1/aeapi/SET_SESSION_SCREEN_READER_ON-Procedure.html) |
| SET_SESSION_STATE Procedure | procedure | [local](APEX_UTIL/SET_SESSION_STATE_Procedure.md) | [Oracle](https://docs.oracle.com/en/database/oracle/apex/26.1/aeapi/SET_SESSION_STATE-Procedure.html) |
| SET_SESSION_TERRITORY Procedure | procedure | [local](APEX_UTIL/SET_SESSION_TERRITORY_Procedure.md) | [Oracle](https://docs.oracle.com/en/database/oracle/apex/26.1/aeapi/SET_SESSION_TERRITORY-Procedure.html) |
| SET_SESSION_TIME_ZONE Procedure | procedure | [local](APEX_UTIL/SET_SESSION_TIME_ZONE_Procedure.md) | [Oracle](https://docs.oracle.com/en/database/oracle/apex/26.1/aeapi/SET_SESSION_TIME_ZONE-Procedure.html) |
| SET_USERNAME Procedure | procedure | [local](APEX_UTIL/SET_USERNAME_Procedure.md) | [Oracle](https://docs.oracle.com/en/database/oracle/apex/26.1/aeapi/SET_USERNAME-Procedure.html) |
| SET_WORKSPACE Procedure | procedure | [local](APEX_UTIL/SET_WORKSPACE_Procedure.md) | [Oracle](https://docs.oracle.com/en/database/oracle/apex/26.1/aeapi/APEX_UTIL.SET_WORKSPACE_Procedure-2.html) |
| SHOW_HIGH_CONTRAST_MODE_TOGGLE Procedure | procedure | [local](APEX_UTIL/SHOW_HIGH_CONTRAST_MODE_TOGGLE_Procedure.md) | [Oracle](https://docs.oracle.com/en/database/oracle/apex/26.1/aeapi/SHOW_HIGH_CONTRAST_MODE_TOGGLE-Procedure.html) |
| SHOW_SCREEN_READER_MODE_TOGGLE Procedure | procedure | [local](APEX_UTIL/SHOW_SCREEN_READER_MODE_TOGGLE_Procedure.md) | [Oracle](https://docs.oracle.com/en/database/oracle/apex/26.1/aeapi/SHOW_SCREEN_READER_MODE_TOGGLE-Procedure.html) |
| STRING_TO_TABLE Function (Deprecated) | function | [local](APEX_UTIL/STRING_TO_TABLE_Function_(Deprecated).md) | [Oracle](https://docs.oracle.com/en/database/oracle/apex/26.1/aeapi/STRING_TO_TABLE-Function.html) |
| STRONG_PASSWORD_CHECK Procedure | procedure | [local](APEX_UTIL/STRONG_PASSWORD_CHECK_Procedure.md) | [Oracle](https://docs.oracle.com/en/database/oracle/apex/26.1/aeapi/STRONG_PASSWORD_CHECK-Procedure.html) |
| STRONG_PASSWORD_VALIDATION Function | function | [local](APEX_UTIL/STRONG_PASSWORD_VALIDATION_Function.md) | [Oracle](https://docs.oracle.com/en/database/oracle/apex/26.1/aeapi/STRONG_PASSWORD_VALIDATION-Function.html) |
| SUBMIT_FEEDBACK Procedure | procedure | [local](APEX_UTIL/SUBMIT_FEEDBACK_Procedure.md) | [Oracle](https://docs.oracle.com/en/database/oracle/apex/26.1/aeapi/SUBMIT_FEEDBACK-Procedure.html) |
| SUBMIT_FEEDBACK_FOLLOWUP Procedure | procedure | [local](APEX_UTIL/SUBMIT_FEEDBACK_FOLLOWUP_Procedure.md) | [Oracle](https://docs.oracle.com/en/database/oracle/apex/26.1/aeapi/SUBMIT_FEEDBACK_FOLLOWUP-Procedure.html) |
| TABLE_TO_STRING Function (Deprecated) | function | [local](APEX_UTIL/TABLE_TO_STRING_Function_(Deprecated).md) | [Oracle](https://docs.oracle.com/en/database/oracle/apex/26.1/aeapi/TABLE_TO_STRING-Function.html) |
| UNEXPIRE_END_USER_ACCOUNT Procedure | procedure | [local](APEX_UTIL/UNEXPIRE_END_USER_ACCOUNT_Procedure.md) | [Oracle](https://docs.oracle.com/en/database/oracle/apex/26.1/aeapi/UNEXPIRE_END_USER_ACCOUNT-Procedure.html) |
| UNEXPIRE_WORKSPACE_ACCOUNT Procedure | procedure | [local](APEX_UTIL/UNEXPIRE_WORKSPACE_ACCOUNT_Procedure.md) | [Oracle](https://docs.oracle.com/en/database/oracle/apex/26.1/aeapi/UNEXPIRE_WORKSPACE_ACCOUNT-Procedure.html) |
| UNLOCK_ACCOUNT Procedure | procedure | [local](APEX_UTIL/UNLOCK_ACCOUNT_Procedure.md) | [Oracle](https://docs.oracle.com/en/database/oracle/apex/26.1/aeapi/UNLOCK_ACCOUNT-Procedure.html) |
| URL_ENCODE Function (Deprecated) | function | [local](APEX_UTIL/URL_ENCODE_Function_(Deprecated).md) | [Oracle](https://docs.oracle.com/en/database/oracle/apex/26.1/aeapi/URL_ENCODE-Function.html) |
| WORKSPACE_ACCOUNT_DAYS_LEFT Function | function | [local](APEX_UTIL/WORKSPACE_ACCOUNT_DAYS_LEFT_Function.md) | [Oracle](https://docs.oracle.com/en/database/oracle/apex/26.1/aeapi/WORKSPACE_ACCOUNT_DAYS_LEFT-Function.html) |

<!-- END GENERATED MEMBER LINKS -->
