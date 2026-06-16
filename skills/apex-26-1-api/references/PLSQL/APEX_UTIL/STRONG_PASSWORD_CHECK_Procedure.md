# APEX_UTIL.STRONG_PASSWORD_CHECK Procedure

Source: [Oracle APEX 26.1 API Reference](https://docs.oracle.com/en/database/oracle/apex/26.1/aeapi/STRONG_PASSWORD_CHECK-Procedure.html)

Status: generated detailed reference. Review edge cases against the source before production use.

Parent package: [APEX_UTIL](../APEX_UTIL.md)

## Purpose

This procedure returns Boolean OUT values based on whether a proposed password meets the password strength requirements as defined by the Oracle APEX site administrator.

## When To Use

Use this page when code needs the `APEX_UTIL.STRONG_PASSWORD_CHECK` procedure. Confirm security, workspace, and session requirements for your calling context.

## Signature

```sql
APEX_UTIL.STRONG_PASSWORD_CHECK (
    p_username                    IN  VARCHAR2,
    p_password                    IN  VARCHAR2,
    p_old_password                IN  VARCHAR2,
    p_workspace_name              IN  VARCHAR2,
    p_use_strong_rules            IN  BOOLEAN,
    p_min_length_err              OUT BOOLEAN,
    p_new_differs_by_err          OUT BOOLEAN,
    p_one_alpha_err               OUT BOOLEAN,
    p_one_numeric_err             OUT BOOLEAN,
    p_one_punctuation_err         OUT BOOLEAN,
    p_one_upper_err               OUT BOOLEAN,
    p_one_lower_err               OUT BOOLEAN,
    p_not_like_username_err       OUT BOOLEAN,
    p_not_like_workspace_name_err OUT BOOLEAN,
    p_not_like_words_err          OUT BOOLEAN,
    p_not_reusable_err            OUT BOOLEAN );
```

## Parameters

| Parameter | Description |
| --- | --- |
| `p_username` | Username that identifies the account in the current workspace. |
| `p_password` | Password to be checked against password strength rules. |
| `p_old_password` | Current password for the account. Used only to enforce "new password must differ from old" rule. |
| `p_workspace_name` | Current workspace name, used only to enforce "password must not contain workspace name" rule. |
| `p_use_strong_rules` | Pass FALSE when calling this API. |
| `p_min_length_err` | Result returns TRUE or FALSE depending upon whether the password meets minimum length requirement. |
| `p_new_differs_by_err` | Result returns TRUE or FALSE depending upon whether the password meets "new password must differ from old" requirements. |
| `p_one_alpha_err` | Result returns TRUE or FALSE depending upon whether the password meets requirement to contain at least one alphabetic character. |
| `p_one_numeric_err` | Result returns TRUE or FALSE depending upon whether the password meets requirements to contain at least one numeric character. |
| `p_one_punctuation_err` | Result returns TRUE or FALSE depending upon whether the password meets requirements to contain at least one punctuation character. |
| `p_one_upper_err` | Result returns TRUE or FALSE depending upon whether the password meets requirements to contain at least one upper-case character. |
| `p_one_lower_err` | Result returns TRUE or FALSE depending upon whether the password meets requirements to contain at least one lower-case character. |
| `p_not_like_username_err` | Result returns TRUE or FALSE depending upon whether the password meets requirements that it must not contain the username. |
| `p_not_like_workspace_name_err` | Result returns TRUE or FALSE depending upon whether the password meets requirements that it must not contain the workspace name. |
| `p_not_like_words_err` | Result returns TRUE or FALSE whether the password meets requirements that it must not contain specified simple words. |
| `p_not_reusable_err` | Result returns TRUE or FALSE whether the password can be reused based on password history rules. |

## Returns

This is a procedure and does not return a value.

## Important Notes

- Most APEX APIs assume the correct APEX workspace, application, and session context.
- Validate user-controlled values before passing them into administrative, security, SQL, or web-service APIs.
- Use the source link for exact behavior, defaults, and version-specific caveats.

## Simple Example

Inspect which password rule checks failed before showing a custom message.

```sql
declare
    l_min_length_err              boolean;
    l_new_differs_by_err          boolean;
    l_one_alpha_err               boolean;
    l_one_numeric_err             boolean;
    l_one_punctuation_err         boolean;
    l_one_upper_err               boolean;
    l_one_lower_err               boolean;
    l_not_like_username_err       boolean;
    l_not_like_workspace_name_err boolean;
    l_not_like_words_err          boolean;
    l_not_reusable_err            boolean;
begin
    apex_util.strong_password_check(
        p_username                    => :APP_USER,
        p_password                    => :P100_NEW_PASSWORD,
        p_old_password                => :P100_OLD_PASSWORD,
        p_workspace_name              => 'MY_WORKSPACE',
        p_use_strong_rules            => false,
        p_min_length_err              => l_min_length_err,
        p_new_differs_by_err          => l_new_differs_by_err,
        p_one_alpha_err               => l_one_alpha_err,
        p_one_numeric_err             => l_one_numeric_err,
        p_one_punctuation_err         => l_one_punctuation_err,
        p_one_upper_err               => l_one_upper_err,
        p_one_lower_err               => l_one_lower_err,
        p_not_like_username_err       => l_not_like_username_err,
        p_not_like_workspace_name_err => l_not_like_workspace_name_err,
        p_not_like_words_err          => l_not_like_words_err,
        p_not_reusable_err            => l_not_reusable_err);

    if l_min_length_err or l_not_reusable_err then
        apex_error.add_error(
            p_message          => 'Choose a stronger password.',
            p_display_location => apex_error.c_inline_in_notification);
    end if;
end;
/
```
