# APEX_LANG.GET_XLIFF_DOCUMENT Function

Source: [Oracle APEX 26.1 API Reference](https://docs.oracle.com/en/database/oracle/apex/26.1/aeapi/GET_XLIFF_DOCUMENT-Function.html)

Status: generated detailed reference. Review edge cases against the source before production use.

Parent package: [APEX_LANG](../APEX_LANG.md)

## Purpose

This function returns the XLIFF document for the specified language.

## When To Use

Use this page when code needs the `APEX_LANG.GET_XLIFF_DOCUMENT` function. Confirm security, workspace, and session requirements for your calling context.

## Signature

```sql
APEX_LANG.GET_XLIFF_DOCUMENT (
  p_application_id          IN NUMBER,
  p_page_id                 IN NUMBER  DEFAULT NULL,
  p_language                IN VARCHAR2,
  p_only_modified_elements  IN BOOLEAN DEFAULT FALSE )
  RETURN CLOB;
```

## Parameters

| Parameter | Description |
| --- | --- |
| `p_application_id` | Application ID of the primary application. |
| `p_page_id` | (Optional) Page ID if the XLIFF document must only contain the specified page. |
| `p_language` | The IANA language code for the existing translation mapping (such as en-us , fr-ca , ja , he ). |
| `p_only_modified_elements` | Choose whether to export all translatable elements of the application or only those elements which are new or have been updated. |

## Important Notes

- Most APEX APIs assume the correct APEX workspace, application, and session context.
- Validate user-controlled values before passing them into administrative, security, SQL, or web-service APIs.
- Use the source link for exact behavior, defaults, and version-specific caveats.

## Simple Example

```sql
declare
    l_result CLOB;
begin
    l_result := apex_lang.GET_XLIFF_DOCUMENT(
        p_application_id => 1,
        p_page_id => 1,
        p_language => 'EXAMPLE',
        p_only_modified_elements => true
    );
    sys.dbms_output.put_line('Result captured.');
end;
/
```

