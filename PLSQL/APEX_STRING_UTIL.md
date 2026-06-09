# APEX_STRING_UTIL

Source: [Oracle APEX 26.1 API Reference](https://docs.oracle.com/en/database/oracle/apex/26.1/aeapi/APEX_STRING_UTIL.html)

Status: curated first-pass reference.

## Purpose

`APEX_STRING_UTIL` contains higher-level text helpers that complement [APEX_STRING](APEX_STRING.md): extracting emails/links/tags/phrases, generating slugs, displaying file sizes, parsing mail-like fields, and producing line diffs.

## When To Use

Use it for common application text cleanup/extraction tasks where a built-in utility avoids writing brittle regular expressions. Use [APEX_STRING](APEX_STRING.md) for lower-level split/join/format routines.

## API Surface

| Area | Members |
| --- | --- |
| Extraction | `FIND_EMAIL_ADDRESSES`, `FIND_EMAIL_FROM`, `FIND_EMAIL_SUBJECT`, `FIND_IDENTIFIERS`, `FIND_LINKS`, `FIND_PHRASES`, `FIND_TAGS` |
| String checks/transforms | `PHRASE_EXISTS`, `REPLACE_WHITESPACE`, `GET_DOMAIN`, `GET_FILE_EXTENSION`, `GET_SLUG` |
| Display helpers | `TO_DISPLAY_FILESIZE` |
| Comparison | `DIFF` |

## Email Extraction Example

```sql
declare
    l_addresses apex_t_varchar2;
begin
    l_addresses := apex_string_util.find_email_addresses(
        p_string => :P10_MESSAGE_TEXT);

    for i in 1 .. l_addresses.count loop
        insert into message_recipients(message_id, email_address)
        values (:P10_MESSAGE_ID, l_addresses(i));
    end loop;
end;
/
```

## Slug And File Display Example

```sql
begin
    :P10_SLUG := apex_string_util.get_slug(
        p_string      => :P10_TITLE,
        p_hash_length => 6);

    :P10_FILESIZE_LABEL := apex_string_util.to_display_filesize(
        p_size_in_bytes => :P10_FILE_BYTES);
end;
/
```

## Diff Example

Assuming two text areas contain newline-separated content:

```sql
declare
    l_diff apex_t_varchar2;
begin
    l_diff := apex_string_util.diff(
        p_left    => apex_string.split(:P10_OLD_TEXT, chr(10)),
        p_right   => apex_string.split(:P10_NEW_TEXT, chr(10)),
        p_context => 2);

    :P10_DIFF_TEXT := apex_string.join(l_diff, chr(10));
end;
/
```

## Notes

- `DIFF` is documented as not intended for very large inputs.
- Extraction helpers return APEX arrays such as `apex_t_varchar2`; iterate from `1 .. count`.
- `GET_SLUG` returns at most 255 characters, including optional hash digits.
- Always escape extracted values before rendering in HTML.

## Related APIs

- [APEX_STRING](APEX_STRING.md) for split/join/string formatting.
- [APEX_ESCAPE](APEX_ESCAPE.md) for safe rendering.
- [APEX_MAIL](APEX_MAIL.md) for email workflows that may use extracted addresses.

<!-- BEGIN GENERATED MEMBER LINKS -->

## Local Member Detail Pages

Generated navigation for LLM retrieval. Use the local detail page first, then follow the Oracle source link when exact wording or edge-case behavior must be verified.

| Member | Kind | Local detail | Source |
| --- | --- | --- | --- |
| DIFF Function | function | [local](APEX_STRING_UTIL/DIFF_Function.md) | [Oracle](https://docs.oracle.com/en/database/oracle/apex/26.1/aeapi/APEX_STRING_UTIL-DIFF-Function.html) |
| FIND_EMAIL_ADDRESSES Function | function | [local](APEX_STRING_UTIL/FIND_EMAIL_ADDRESSES_Function.md) | [Oracle](https://docs.oracle.com/en/database/oracle/apex/26.1/aeapi/FIND_EMAIL_ADDRESSES-Function.html) |
| FIND_EMAIL_FROM Function | function | [local](APEX_STRING_UTIL/FIND_EMAIL_FROM_Function.md) | [Oracle](https://docs.oracle.com/en/database/oracle/apex/26.1/aeapi/FIND_EMAIL_FROM-Function.html) |
| FIND_EMAIL_SUBJECT Function | function | [local](APEX_STRING_UTIL/FIND_EMAIL_SUBJECT_Function.md) | [Oracle](https://docs.oracle.com/en/database/oracle/apex/26.1/aeapi/FIND_EMAIL_SUBJECT-Function.html) |
| FIND_IDENTIFIERS Function | function | [local](APEX_STRING_UTIL/FIND_IDENTIFIERS_Function.md) | [Oracle](https://docs.oracle.com/en/database/oracle/apex/26.1/aeapi/FIND_IDENTIFIERS-Function.html) |
| FIND_LINKS Function | function | [local](APEX_STRING_UTIL/FIND_LINKS_Function.md) | [Oracle](https://docs.oracle.com/en/database/oracle/apex/26.1/aeapi/FIND_LINKS-Function.html) |
| FIND_PHRASES Function | function | [local](APEX_STRING_UTIL/FIND_PHRASES_Function.md) | [Oracle](https://docs.oracle.com/en/database/oracle/apex/26.1/aeapi/FIND_PHRASES-Function.html) |
| FIND_TAGS Function | function | [local](APEX_STRING_UTIL/FIND_TAGS_Function.md) | [Oracle](https://docs.oracle.com/en/database/oracle/apex/26.1/aeapi/FIND_TAGS-Function.html) |
| GET_DOMAIN Function | function | [local](APEX_STRING_UTIL/GET_DOMAIN_Function.md) | [Oracle](https://docs.oracle.com/en/database/oracle/apex/26.1/aeapi/GET_DOMAIN-Function.html) |
| GET_FILE_EXTENSION Function | function | [local](APEX_STRING_UTIL/GET_FILE_EXTENSION_Function.md) | [Oracle](https://docs.oracle.com/en/database/oracle/apex/26.1/aeapi/GET_FILE_EXTENSION-Function.html) |
| GET_SLUG Function | function | [local](APEX_STRING_UTIL/GET_SLUG_Function.md) | [Oracle](https://docs.oracle.com/en/database/oracle/apex/26.1/aeapi/GET_SLUG-Function.html) |
| PHRASE_EXISTS Function | function | [local](APEX_STRING_UTIL/PHRASE_EXISTS_Function.md) | [Oracle](https://docs.oracle.com/en/database/oracle/apex/26.1/aeapi/PHRASE_EXISTS-Function.html) |
| REPLACE_WHITESPACE Function | function | [local](APEX_STRING_UTIL/REPLACE_WHITESPACE_Function.md) | [Oracle](https://docs.oracle.com/en/database/oracle/apex/26.1/aeapi/REPLACE_WHITESPACE-Function.html) |
| TO_DISPLAY_FILESIZE Function | function | [local](APEX_STRING_UTIL/TO_DISPLAY_FILESIZE_Function.md) | [Oracle](https://docs.oracle.com/en/database/oracle/apex/26.1/aeapi/TO_DISPLAY_FILESIZE-Function.html) |

<!-- END GENERATED MEMBER LINKS -->
