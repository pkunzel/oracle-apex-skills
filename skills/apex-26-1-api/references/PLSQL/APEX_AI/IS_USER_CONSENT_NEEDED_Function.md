# APEX_AI.IS_USER_CONSENT_NEEDED Function

Source: [Oracle APEX 26.1 API Reference](https://docs.oracle.com/en/database/oracle/apex/26.1/aeapi/APEX_AI.IS_USER_CONSENT_NEEDED-Function.html)

Status: generated detailed reference. Review edge cases against the source before production use.

Parent package: [APEX_AI](../APEX_AI.md)

## Purpose

This function returns whether a consent screen is shown to the user before interacting with the AI.

## When To Use

Use this page when code needs the `APEX_AI.IS_USER_CONSENT_NEEDED` function. Confirm security, workspace, and session requirements for your calling context.

## Signature

```sql
APEX_AI.IS_USER_CONSENT_NEEDED (
    p_user_name         IN  VARCHAR2    DEFAULT {the current user},
    p_application_id    IN  NUMBER      DEFAULT {the current application} )
    RETURN BOOLEAN;
```

## Parameters

| Parameter | Description |
| --- | --- |
| `p_user_name` | The user name. Defaults to the current user. |
| `p_application_id` | The application ID. Defaults to the current application. |

## Returns

TRUE if an AI consent message exists and if the user has not already consented. Otherwise, FALSE .

## Important Notes

- Most APEX APIs assume the correct APEX workspace, application, and session context.
- Validate user-controlled values before passing them into administrative, security, SQL, or web-service APIs.
- Use the source link for exact behavior, defaults, and version-specific caveats.

## Simple Example

```sql
declare
    l_result BOOLEAN;
begin
    l_result := apex_ai.IS_USER_CONSENT_NEEDED(
        p_user_name => 'USER',
        p_application_id => 1
    );
    sys.dbms_output.put_line('Result captured.');
end;
/
```

