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

```sql
begin
    apex_util.STRONG_PASSWORD_CHECK(
        p_username => 'USER',
        p_password => 'EXAMPLE',
        p_old_password => 'EXAMPLE',
        p_workspace_name => 'EXAMPLE',
        p_use_strong_rules => true,
        p_min_length_err => true,
        p_new_differs_by_err => true,
        p_one_alpha_err => true,
        p_one_numeric_err => true,
        p_one_punctuation_err => true,
        p_one_upper_err => true,
        p_one_lower_err => true,
        p_not_like_username_err => true,
        p_not_like_workspace_name_err => true,
        p_not_like_words_err => true,
        p_not_reusable_err => true
    );
end;
/
```

## More Complex Example

```sql
begin
    -- Assuming this runs inside an APEX page process with the right workspace/app context.
    apex_util.STRONG_PASSWORD_CHECK(
            p_username => 'USER',
            p_password => 'EXAMPLE',
            p_old_password => 'EXAMPLE',
            p_workspace_name => 'EXAMPLE',
            p_use_strong_rules => true,
            p_min_length_err => true,
            p_new_differs_by_err => true,
            p_one_alpha_err => true,
            p_one_numeric_err => true,
            p_one_punctuation_err => true,
            p_one_upper_err => true,
            p_one_lower_err => true,
            p_not_like_username_err => true,
            p_not_like_workspace_name_err => true,
            p_not_like_words_err => true,
            p_not_reusable_err => true
        );
end;
/
```

