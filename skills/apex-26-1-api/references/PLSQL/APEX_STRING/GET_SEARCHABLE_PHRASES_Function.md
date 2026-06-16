# APEX_STRING.GET_SEARCHABLE_PHRASES Function

Source: [Oracle APEX 26.1 API Reference](https://docs.oracle.com/en/database/oracle/apex/26.1/aeapi/GET_SEARCHABLE_PHRASES-Function.html)

Status: generated detailed reference. Review edge cases against the source before production use.

Parent package: [APEX_STRING](../APEX_STRING.md)

## Purpose

This function returns distinct phrases of 1-3 consecutive lower case words in the input strings. Stopwords in the given language are ignored and split phrases.

## When To Use

Use this page when code needs the `APEX_STRING.GET_SEARCHABLE_PHRASES` function. Confirm security, workspace, and session requirements for your calling context.

## Signature

```sql
FUNCTION GET_SEARCHABLE_PHRASES (
    p_strings   IN   apex_t_varchar2,
    p_max_words IN   PLS_INTEGER     DEFAULT 3,
    p_language  IN   apex_t_varchar2 DEFAULT 'en' )
    RETURN apex_t_varchar2;
```

## Parameters

| Parameter | Description |
| --- | --- |
| `p_string` | The input string. |
| `p_max_words` | The maximum number of words in a phrase. The default is 3. |
| `p_language` | The language identifier for stopwords, defaults to "en" . Supported values are "cn","de","en","es","fr","it","ja","ko","pt-br" . |

## Important Notes

- Most APEX APIs assume the correct APEX workspace, application, and session context.
- Validate user-controlled values before passing them into administrative, security, SQL, or web-service APIs.
- Use the source link for exact behavior, defaults, and version-specific caveats.

## Simple Example

Generate phrase candidates for a small in-application search index.

```sql
declare
    l_phrases apex_t_varchar2;
begin
    l_phrases := apex_string.get_searchable_phrases(
        p_strings   => apex_t_varchar2(:P10_TITLE, :P10_DESCRIPTION),
        p_max_words => 3,
        p_language  => 'en');

    for i in 1 .. l_phrases.count loop
        insert into article_search_terms(article_id, phrase)
        values (:P10_ARTICLE_ID, l_phrases(i));
    end loop;
end;
/
```

