# APEX_LANG

Source: [Oracle APEX 26.1 API Reference](https://docs.oracle.com/en/database/oracle/apex/26.1/aeapi/APEX_LANG.html)

Status: curated first-pass reference.

## Purpose

`APEX_LANG` manages and retrieves translated APEX text messages and application translations. It covers message creation, update, import/export, XLIFF documents, language mappings, seeding, publishing translated applications, and language selector output.

Use it when PL/SQL code needs localized text or when deployment/admin scripts need to manage translated APEX metadata.

## When To Use

Common tasks:

- Return a translated text message from PL/SQL.
- Create or update Shared Components text messages.
- Export/import message translations.
- Seed and publish translated applications.
- Manage language mappings between a primary application and translated application IDs.
- Emit or retrieve a language selector.

## API Surface

| Need | Members |
| --- | --- |
| Runtime message lookup | `GET_MESSAGE`, `LANG`, deprecated `MESSAGE` |
| Message maintenance | `CREATE_MESSAGE`, `UPDATE_MESSAGE`, `DELETE_MESSAGE`, `UPDATE_TRANSLATED_STRING` |
| Import/export messages | `EXPORT_TEXT_MESSAGES`, `IMPORT_TEXT_MESSAGES` |
| XLIFF workflow | `GET_XLIFF_DOCUMENT`, `APPLY_XLIFF_DOCUMENT` |
| Translation lifecycle | `SEED_TRANSLATIONS`, `PUBLISH_APPLICATION` |
| Language mappings | `CREATE_LANGUAGE_MAPPING`, `UPDATE_LANGUAGE_MAPPING`, `DELETE_LANGUAGE_MAPPING` |
| Language selector | `GET_LANGUAGE_SELECTOR_LIST`, `EMIT_LANGUAGE_SELECTOR_LIST` |

## Runtime Message Lookup

Assuming app `100` has Shared Components text message `ORDER_STATUS` with named placeholders:

```sql
declare
    l_message varchar2(4000);
begin
    l_message := apex_lang.get_message(
        p_name           => 'ORDER_STATUS',
        p_params         => apex_t_varchar2(
                                'ORDER_ID', '1001',
                                'STATUS',   'Ready'),
        p_lang           => 'en-us',
        p_application_id => 100);

    sys.htp.p(apex_escape.html(l_message));
end;
/
```

Use `GET_MESSAGE`; `MESSAGE` is deprecated.

## Create A JavaScript-Visible Message

```sql
begin
    apex_lang.create_message(
        p_application_id     => 100,
        p_name               => 'TASK_SAVED',
        p_language           => 'en-us',
        p_message_text       => 'Task %TASK_ID saved.',
        p_used_in_javascript => true,
        p_comment            => 'Shown after Ajax save.');
end;
/
```

When `p_used_in_javascript` is true, use the client-side [apex.lang](../JavaScript/apex.lang.md) APIs from JavaScript.

## Update A Message

```sql
begin
    apex_lang.update_message(
        p_application_id     => 100,
        p_name               => 'TASK_SAVED',
        p_language           => 'en-us',
        p_message_text       => 'Task %TASK_ID has been saved.',
        p_used_in_javascript => true);
end;
/
```

Keep message names stable. Treat them like API identifiers, not display labels.

## Seed And Publish Translation

Assuming primary app `100` has a French language mapping:

```sql
begin
    apex_lang.seed_translations(
        p_application_id => 100,
        p_language       => 'fr');

    apex_lang.publish_application(
        p_application_id => 100,
        p_language       => 'fr');
end;
/
```

Run seed/publish after changing translatable text or after importing translated strings.

## XLIFF Workflow

```sql
declare
    l_xliff clob;
begin
    l_xliff := apex_lang.get_xliff_document(
        p_application_id => 100,
        p_language       => 'fr');

    insert into translation_exports(application_id, language_code, xliff_doc)
    values (100, 'fr', l_xliff);
end;
/
```

Assuming a translated XLIFF CLOB has been returned by a translation service:

```sql
begin
    apex_lang.apply_xliff_document(
        p_application_id => 100,
        p_language       => 'fr',
        p_xliff_document => :P10_XLIFF_CLOB);
end;
/
```

## Language Selector

```sql
begin
    apex_lang.emit_language_selector_list(
        p_application_id => 100);
end;
/
```

Use `GET_LANGUAGE_SELECTOR_LIST` instead when the calling code needs to inspect or wrap the generated list before output.

## Safety Notes

- Escape translated messages according to output context. Translations are content and should be treated as untrusted for HTML output.
- Use IANA language codes consistently, such as `en-us`, `fr-ca`, `ja`, or `he`.
- Message placeholders are replaced left to right from name/value pairs in `p_params`.
- Use `p_application_id` in packages and jobs that can run outside a normal APEX request.
- Prefer XLIFF import/export for translation workflows; avoid hand-editing hidden translated application metadata.
- Use `apex.lang` in JavaScript for messages marked as used in JavaScript.

## Related APIs

- [apex.lang](../JavaScript/apex.lang.md) for translated JavaScript messages.
- [APEX_ESCAPE](APEX_ESCAPE.md) for output escaping.
- [APEX_APPLICATION_INSTALL](APEX_APPLICATION_INSTALL.md) and [APEX_EXPORT](APEX_EXPORT.md) for deployment flows that include translations.

<!-- BEGIN GENERATED MEMBER LINKS -->

## Local Member Detail Pages

Generated navigation for LLM retrieval. Use the local detail page first, then follow the Oracle source link when exact wording or edge-case behavior must be verified.

| Member | Kind | Local detail | Source |
| --- | --- | --- | --- |
| APPLY_XLIFF_DOCUMENT Procedure | procedure | [local](APEX_LANG/APPLY_XLIFF_DOCUMENT_Procedure.md) | [Oracle](https://docs.oracle.com/en/database/oracle/apex/26.1/aeapi/APPLY_XLIFF_DOCUMENT-Procedure.html) |
| CREATE_LANGUAGE_MAPPING Procedure | procedure | [local](APEX_LANG/CREATE_LANGUAGE_MAPPING_Procedure.md) | [Oracle](https://docs.oracle.com/en/database/oracle/apex/26.1/aeapi/CREATE_LANGUAGE_MAPPING-Procedure.html) |
| CREATE_MESSAGE Procedure | procedure | [local](APEX_LANG/CREATE_MESSAGE_Procedure.md) | [Oracle](https://docs.oracle.com/en/database/oracle/apex/26.1/aeapi/APEX_LANG.CREATE_MESSAGE-Procedure.html) |
| DELETE_LANGUAGE_MAPPING Procedure | procedure | [local](APEX_LANG/DELETE_LANGUAGE_MAPPING_Procedure.md) | [Oracle](https://docs.oracle.com/en/database/oracle/apex/26.1/aeapi/DELETE_LANGUAGE_MAPPING-Procedure.html) |
| DELETE_MESSAGE Procedure | procedure | [local](APEX_LANG/DELETE_MESSAGE_Procedure.md) | [Oracle](https://docs.oracle.com/en/database/oracle/apex/26.1/aeapi/DELETE_MESSAGE-Procedure.html) |
| EMIT_LANGUAGE_SELECTOR_LIST Procedure | procedure | [local](APEX_LANG/EMIT_LANGUAGE_SELECTOR_LIST_Procedure.md) | [Oracle](https://docs.oracle.com/en/database/oracle/apex/26.1/aeapi/EMIT_LANGUAGE_SELECTOR_LIST-Procedure.html) |
| EXPORT_TEXT_MESSAGES Function Signature 1 | function | [local](APEX_LANG/EXPORT_TEXT_MESSAGES_Function_Signature_1.md) | [Oracle](https://docs.oracle.com/en/database/oracle/apex/26.1/aeapi/APEX_LANG.EXPORT_TEXT_MESSAGES-Function-Signature-1.html) |
| EXPORT_TEXT_MESSAGES Function Signature 2 | function | [local](APEX_LANG/EXPORT_TEXT_MESSAGES_Function_Signature_2.md) | [Oracle](https://docs.oracle.com/en/database/oracle/apex/26.1/aeapi/APEX_LANG.EXPORT_TEXT_MESSAGES-Function-Signature-2.html) |
| GET_LANGUAGE_SELECTOR_LIST Function | function | [local](APEX_LANG/GET_LANGUAGE_SELECTOR_LIST_Function.md) | [Oracle](https://docs.oracle.com/en/database/oracle/apex/26.1/aeapi/GET_LANGUAGE_SELECTOR_LIST-Function.html) |
| GET_MESSAGE Function | function | [local](APEX_LANG/GET_MESSAGE_Function.md) | [Oracle](https://docs.oracle.com/en/database/oracle/apex/26.1/aeapi/APEX_LANG.GET_MESSAGE-Function.html) |
| GET_XLIFF_DOCUMENT Function | function | [local](APEX_LANG/GET_XLIFF_DOCUMENT_Function.md) | [Oracle](https://docs.oracle.com/en/database/oracle/apex/26.1/aeapi/GET_XLIFF_DOCUMENT-Function.html) |
| IMPORT_TEXT_MESSAGES Procedure Signature 1 | procedure | [local](APEX_LANG/IMPORT_TEXT_MESSAGES_Procedure_Signature_1.md) | [Oracle](https://docs.oracle.com/en/database/oracle/apex/26.1/aeapi/APEX_LANG.IMPORT_TEXT_MESSAGES-Procedure-Signature-1.html) |
| IMPORT_TEXT_MESSAGES Procedure Signature 2 | procedure | [local](APEX_LANG/IMPORT_TEXT_MESSAGES_Procedure_Signature_2.md) | [Oracle](https://docs.oracle.com/en/database/oracle/apex/26.1/aeapi/APEX_LANG.IMPORT_TEXT_MESSAGES-Procedure-Signature-2.html) |
| LANG Function | function | [local](APEX_LANG/LANG_Function.md) | [Oracle](https://docs.oracle.com/en/database/oracle/apex/26.1/aeapi/LANG_Function.html) |
| MESSAGE Function (Deprecated) | function | [local](APEX_LANG/MESSAGE_Function_(Deprecated).md) | [Oracle](https://docs.oracle.com/en/database/oracle/apex/26.1/aeapi/MESSAGE-Function.html) |
| PUBLISH_APPLICATION Procedure | procedure | [local](APEX_LANG/PUBLISH_APPLICATION_Procedure.md) | [Oracle](https://docs.oracle.com/en/database/oracle/apex/26.1/aeapi/PUBLISH_APPLICATION-Procedure.html) |
| SEED_TRANSLATIONS Procedure | procedure | [local](APEX_LANG/SEED_TRANSLATIONS_Procedure.md) | [Oracle](https://docs.oracle.com/en/database/oracle/apex/26.1/aeapi/SEED_TRANSLATIONS-Procedure.html) |
| UPDATE_LANGUAGE_MAPPING Procedure | procedure | [local](APEX_LANG/UPDATE_LANGUAGE_MAPPING_Procedure.md) | [Oracle](https://docs.oracle.com/en/database/oracle/apex/26.1/aeapi/UPDATE_LANGUAGE_MAPPING-Procedure.html) |
| UPDATE_MESSAGE Procedure Signature 1 | procedure | [local](APEX_LANG/UPDATE_MESSAGE_Procedure_Signature_1.md) | [Oracle](https://docs.oracle.com/en/database/oracle/apex/26.1/aeapi/APEX_LANG.UPDATE_MESSAGE-Procedure-Signature-1.html) |
| UPDATE_MESSAGE Procedure Signature 2 | procedure | [local](APEX_LANG/UPDATE_MESSAGE_Procedure_Signature_2.md) | [Oracle](https://docs.oracle.com/en/database/oracle/apex/26.1/aeapi/APEX_LANG.UPDATE_MESSAGE-Procedure-Signature-2.html) |
| UPDATE_TRANSLATED_STRING Procedure | procedure | [local](APEX_LANG/UPDATE_TRANSLATED_STRING_Procedure.md) | [Oracle](https://docs.oracle.com/en/database/oracle/apex/26.1/aeapi/UPDATE_TRANSLATED_STRING-Procedure.html) |

<!-- END GENERATED MEMBER LINKS -->
