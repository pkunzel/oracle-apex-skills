# APEX_HTTP

Source: [Oracle APEX 26.1 API Reference](https://docs.oracle.com/en/database/oracle/apex/26.1/aeapi/APEX_HTTP.html)

Status: curated first-pass reference.

## Purpose

`APEX_HTTP` contains response-download helpers for sending BLOB or CLOB content to the browser. It is for returning files from APEX processes, not for making outbound HTTP calls.

Use [APEX_WEB_SERVICE](APEX_WEB_SERVICE.md) for outbound REST/SOAP calls.

## API Surface

| Need | Members |
| --- | --- |
| Download binary content | `DOWNLOAD` BLOB signature |
| Download text content | `DOWNLOAD` CLOB signature |

## Download BLOB

Assuming table `app_files(id number, file_name varchar2(255), mime_type varchar2(255), file_blob blob)`:

```sql
declare
    l_blob      blob;
    l_mime_type varchar2(255);
    l_file_name varchar2(255);
begin
    select file_blob, mime_type, file_name
      into l_blob, l_mime_type, l_file_name
      from app_files
     where id = :P10_FILE_ID;

    apex_http.download(
        p_blob         => l_blob,
        p_content_type => l_mime_type,
        p_filename     => l_file_name,
        p_is_inline    => false);

    apex_application.stop_apex_engine;
end;
/
```

Stop the APEX engine after writing a download response so no page HTML is appended to the file.

## Download CLOB

Assuming `l_csv` contains generated CSV:

```sql
declare
    l_csv clob;
begin
    l_csv := 'ORDER_ID,STATUS' || chr(10) ||
             '1001,READY';

    apex_http.download(
        p_clob         => l_csv,
        p_content_type => 'text/csv; charset=utf-8',
        p_filename     => 'orders.csv',
        p_is_inline    => false);

    apex_application.stop_apex_engine;
end;
/
```

Use accurate content types and file extensions.

## Inline PDF Or Image

```sql
begin
    apex_http.download(
        p_blob         => l_pdf_blob,
        p_content_type => 'application/pdf',
        p_filename     => 'invoice-1001.pdf',
        p_is_inline    => true);

    apex_application.stop_apex_engine;
end;
/
```

`p_is_inline => true` asks the browser to display the content inline when it supports the content type.

## Safety Notes

- Authorize the download before selecting or generating the file.
- Validate IDs and avoid exposing arbitrary files.
- Set content type and file name deliberately.
- Stop the APEX engine after download responses.
- Do not use this package for outbound HTTP; use `APEX_WEB_SERVICE`.

## Related APIs

- [APEX_WEB_SERVICE](APEX_WEB_SERVICE.md) for outbound HTTP calls.
- [APEX_DATA_EXPORT](APEX_DATA_EXPORT.md) for report-style exports.
- [APEX_PRINT](APEX_PRINT.md) for generated documents.
- [APEX_APPLICATION](APEX_APPLICATION.md) for `STOP_APEX_ENGINE`.

<!-- BEGIN GENERATED MEMBER LINKS -->

## Local Member Detail Pages

Generated navigation for LLM retrieval. Use the local detail page first, then follow the Oracle source link when exact wording or edge-case behavior must be verified.

| Member | Kind | Local detail | Source |
| --- | --- | --- | --- |
| DOWNLOAD Procedure Signature 1 | procedure | [local](APEX_HTTP/DOWNLOAD_Procedure_Signature_1.md) | [Oracle](https://docs.oracle.com/en/database/oracle/apex/26.1/aeapi/APEX_HTTP.DOWNLOAD-Procedure-Signature-1.html) |
| DOWNLOAD Procedure Signature 2 | procedure | [local](APEX_HTTP/DOWNLOAD_Procedure_Signature_2.md) | [Oracle](https://docs.oracle.com/en/database/oracle/apex/26.1/aeapi/APEX_HTTP.DOWNLOAD-Procedure-Signature-2.html) |

<!-- END GENERATED MEMBER LINKS -->
