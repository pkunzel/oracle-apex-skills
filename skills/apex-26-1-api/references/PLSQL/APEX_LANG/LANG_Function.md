# APEX_LANG.LANG Function

Source: [Oracle APEX 26.1 API Reference](https://docs.oracle.com/en/database/oracle/apex/26.1/aeapi/LANG_Function.html)

Status: generated detailed reference. Review edge cases against the source before production use.

Parent package: [APEX_LANG](../APEX_LANG.md)

## Purpose

Use this function to return a translated text string for translations defined in dynamic translations.

## When To Use

Use this page when code needs the `APEX_LANG.LANG` function. Confirm security, workspace, and session requirements for your calling context.

## Signature

```sql
APEX_LANG.LANG (
    p_primary_text_string IN VARCHAR2 DEFAULT NULL,
    p0 IN VARCHAR2 DEFAULT NULL,
    p1 IN VARCHAR2 DEFAULT NULL,
    p2 IN VARCHAR2 DEFAULT NULL,
    ...
    p9 IN VARCHAR2 DEFAULT NULL,
    p_primary_language IN VARCHAR2 DEFAULT NULL )
RETURN VARCHAR2;
```

## Parameters

| Parameter | Description |
| --- | --- |
| `p_primary_text_string` | Text string of the primary language. This is the value of the Translate From Text in the dynamic translation. |
| `p0 through p9` | Dynamic substitution value: p0 corresponds to %0 in the translation string; p1 corresponds to %1 in the translation string; p2 corresponds to %2 in the translation string, and so on. |
| `p_primary_language` | Language code for the message to be retrieved. If not specified, Oracle APEX uses the current language for the user as defined in the Application Language Derived From attribute. See also Specifying the Primary Language for an Application in Oracle APEX App Builder User’s Guide . |

## Important Notes

- Most APEX APIs assume the correct APEX workspace, application, and session context.
- Validate user-controlled values before passing them into administrative, security, SQL, or web-service APIs.
- Use the source link for exact behavior, defaults, and version-specific caveats.

## Simple Example

Translate a primary-language string using the current application translation repository.

```sql
declare
    l_label varchar2(32767);
begin
    l_label := apex_lang.lang(
        p_primary_text_string => 'Order total',
        p_primary_language    => 'en'
    );

    apex_util.set_session_state('P10_TOTAL_LABEL', l_label);
end;
/
```
