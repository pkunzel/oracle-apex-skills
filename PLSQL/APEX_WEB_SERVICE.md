# APEX_WEB_SERVICE

Source: [Oracle APEX 26.1 API Reference](https://docs.oracle.com/en/database/oracle/apex/26.1/aeapi/APEX_WEB_SERVICE.html)

Status: curated first-pass reference.

## Purpose

`APEX_WEB_SERVICE` calls external HTTP, REST, and SOAP services from PL/SQL. It also manages request headers, cookies, multipart bodies, base64 conversion, OAuth token helpers, and XML response parsing.

For declarative REST Data Sources, prefer APEX Shared Components and `APEX_EXEC` when the service is modeled as part of the application. Use `APEX_WEB_SERVICE` when code needs direct procedural control over an HTTP request.

## When To Use

Use `APEX_WEB_SERVICE` when:

- A page process or job must call a REST endpoint directly.
- The request needs custom headers, cookies, or multipart content.
- The response is JSON/XML and the app needs procedural parsing.
- You need SOAP-style web service calls.
- OAuth token setup is part of a low-level integration flow.

Prefer Web Credentials over hard-coded secrets. Prefer HTTPS endpoints and validate all data returned by external services.

## Common Member Groups

| Need | Members |
| --- | --- |
| REST calls | `MAKE_REST_REQUEST`, `MAKE_REST_REQUEST_B` |
| SOAP calls | `MAKE_REQUEST` function/procedure signatures |
| Headers/cookies | `SET_REQUEST_HEADERS`, `GET_REQUEST_HEADER`, `REMOVE_REQUEST_HEADER`, `CLEAR_REQUEST_HEADERS`, cookie globals |
| Multipart | `APPEND_TO_MULTIPART`, `GENERATE_REQUEST_BODY` |
| OAuth | `OAUTH_AUTHENTICATE`, `OAUTH_AUTHENTICATE_CREDENTIAL`, `OAUTH_GET_LAST_TOKEN`, `OAUTH_SET_TOKEN` |
| Encoding | `BLOB2CLOBBASE64`, `CLOBBASE642BLOB` |
| XML parsing | `PARSE_XML`, `PARSE_XML_CLOB`, `PARSE_RESPONSE`, `PARSE_RESPONSE_CLOB` |

## Simple REST GET

```sql
declare
    l_response clob;
begin
    l_response := apex_web_service.make_rest_request(
        p_url         => 'https://api.example.test/status',
        p_http_method => 'GET');

    apex_debug.info('Response: %s', dbms_lob.substr(l_response, 4000, 1));
end;
/
```

## REST POST With JSON

Assuming an external endpoint accepts an order event:

```sql
declare
    l_payload  clob;
    l_response clob;
begin
    apex_json.initialize_clob_output;
    apex_json.open_object;
    apex_json.write('orderId', :P10_ORDER_ID);
    apex_json.write('status', 'submitted');
    apex_json.close_object;
    l_payload := apex_json.get_clob_output;
    apex_json.free_output;

    apex_web_service.set_request_headers(
        p_name_01  => 'Content-Type',
        p_value_01 => 'application/json');

    l_response := apex_web_service.make_rest_request(
        p_url         => 'https://api.example.test/orders',
        p_http_method => 'POST',
        p_body        => l_payload);
end;
/
```

## REST GET With Web Credential

Use a configured Web Credential static ID rather than embedding secrets:

```sql
declare
    l_response clob;
begin
    l_response := apex_web_service.make_rest_request(
        p_url                  => 'https://api.example.test/me',
        p_http_method          => 'GET',
        p_credential_static_id => 'MY_API_CREDENTIAL');
end;
/
```

## Binary Response Pattern

Use `MAKE_REST_REQUEST_B` when the response is binary, such as a PDF or image.

```sql
declare
    l_file blob;
begin
    l_file := apex_web_service.make_rest_request_b(
        p_url         => 'https://api.example.test/report/1001.pdf',
        p_http_method => 'GET');

    insert into downloaded_files (
        file_name,
        mime_type,
        content_blob )
    values (
        'report-1001.pdf',
        'application/pdf',
        l_file );
end;
/
```

## Multipart Upload Pattern

Assuming `l_file_blob` contains a file:

```sql
declare
    l_parts    apex_web_service.t_multipart_parts;
    l_body     blob;
    l_response clob;
begin
    apex_web_service.append_to_multipart(
        p_multipart    => l_parts,
        p_name         => 'file',
        p_filename     => 'invoice.pdf',
        p_content_type => 'application/pdf',
        p_body_blob    => l_file_blob);

    l_body := apex_web_service.generate_request_body(l_parts);

    l_response := apex_web_service.make_rest_request(
        p_url         => 'https://api.example.test/upload',
        p_http_method => 'POST',
        p_body_blob   => l_body);
end;
/
```

Use the local detail pages for exact multipart signatures and required headers.

## Response Parsing

For JSON responses, use `APEX_JSON`, SQL/JSON, or PL/SQL JSON object types:

```sql
declare
    l_response clob;
    l_json     sys.json_object_t;
begin
    l_response := apex_web_service.make_rest_request(
        p_url         => 'https://api.example.test/orders/1001',
        p_http_method => 'GET');

    l_json := sys.json_object_t.parse(l_response);
    :P10_STATUS := l_json.get_string('status');
end;
/
```

For XML/SOAP responses, use the parse helpers or XML DB APIs, depending on the response shape.

## Safety Guidance

- Prefer Web Credentials and `p_credential_static_id`.
- Clear or overwrite request headers when reusing code paths.
- Avoid logging secrets, bearer tokens, or full payloads with personal data.
- Set explicit `Content-Type` headers for JSON and multipart requests.
- Validate response status and payload before using external data.
- Use network ACLs and wallet/certificate setup appropriate for the database environment.
- For modeled REST Data Sources, consider `APEX_EXEC` instead of hand-built HTTP calls.

<!-- BEGIN GENERATED MEMBER LINKS -->

## Local Member Detail Pages

Generated navigation for LLM retrieval. Use the local detail page first, then follow the Oracle source link when exact wording or edge-case behavior must be verified.

| Member | Kind | Local detail | Source |
| --- | --- | --- | --- |
| About the APEX_WEB_SERVICE API | about | [local](APEX_WEB_SERVICE/About_the_APEX_WEB_SERVICE_API.md) | [Oracle](https://docs.oracle.com/en/database/oracle/apex/26.1/aeapi/About-the-APEX_WEB_SERVICE-API.html) |
| Invoking a SOAP-style Web Service | topic | [local](APEX_WEB_SERVICE/Invoking_a_SOAP-style_Web_Service.md) | [Oracle](https://docs.oracle.com/en/database/oracle/apex/26.1/aeapi/Invoking-a-SOAP-Style-Web-Service.html) |
| Invoking a RESTful-style Web Service | topic | [local](APEX_WEB_SERVICE/Invoking_a_RESTful-style_Web_Service.md) | [Oracle](https://docs.oracle.com/en/database/oracle/apex/26.1/aeapi/Invoking-a-RESTful-Style-Web-Service.html) |
| Setting Cookies and HTTP Headers | topic | [local](APEX_WEB_SERVICE/Setting_Cookies_and_HTTP_Headers.md) | [Oracle](https://docs.oracle.com/en/database/oracle/apex/26.1/aeapi/Setting-Cookies-and-HTTP-Headers.html) |
| Retrieving Cookies and HTTP Headers | topic | [local](APEX_WEB_SERVICE/Retrieving_Cookies_and_HTTP_Headers.md) | [Oracle](https://docs.oracle.com/en/database/oracle/apex/26.1/aeapi/Retrieving-Cookies-and-HTTP-Headers.html) |
| About Web Credentials and APEX_WEB_SERVICE | about | [local](APEX_WEB_SERVICE/About_Web_Credentials_and_APEX_WEB_SERVICE.md) | [Oracle](https://docs.oracle.com/en/database/oracle/apex/26.1/aeapi/about-web-credentials-APEX_WEB_SERVICE.html) |
| Data Types | data types | [local](APEX_WEB_SERVICE/Data_Types.md) | [Oracle](https://docs.oracle.com/en/database/oracle/apex/26.1/aeapi/APEX_WEB_SERVICE.Data-Types.html) |
| Global Variables | topic | [local](APEX_WEB_SERVICE/Global_Variables.md) | [Oracle](https://docs.oracle.com/en/database/oracle/apex/26.1/aeapi/APEX_WEB_SERVICE.Global-Variables.html) |
| APPEND_TO_MULTIPART Procedure Signature 1 | procedure | [local](APEX_WEB_SERVICE/APPEND_TO_MULTIPART_Procedure_Signature_1.md) | [Oracle](https://docs.oracle.com/en/database/oracle/apex/26.1/aeapi/APEX_WEB_SERVICE.APPEND_TO_MULTIPART-Procedure-1.html) |
| APPEND_TO_MULTIPART Procedure Signature 2 | procedure | [local](APEX_WEB_SERVICE/APPEND_TO_MULTIPART_Procedure_Signature_2.md) | [Oracle](https://docs.oracle.com/en/database/oracle/apex/26.1/aeapi/APEX_WEB_SERVICE.APPEND_TO_MULTIPART-Procedure-2.html) |
| BLOB2CLOBBASE64 Function | function | [local](APEX_WEB_SERVICE/BLOB2CLOBBASE64_Function.md) | [Oracle](https://docs.oracle.com/en/database/oracle/apex/26.1/aeapi/BLOB2CLOBBASE64-Function.html) |
| CLEAR_REQUEST_COOKIES Procedure | procedure | [local](APEX_WEB_SERVICE/CLEAR_REQUEST_COOKIES_Procedure.md) | [Oracle](https://docs.oracle.com/en/database/oracle/apex/26.1/aeapi/CLEAR_REQUEST_COOKIES-Procedure.html) |
| CLEAR_REQUEST_HEADERS Procedure | procedure | [local](APEX_WEB_SERVICE/CLEAR_REQUEST_HEADERS_Procedure.md) | [Oracle](https://docs.oracle.com/en/database/oracle/apex/26.1/aeapi/CLEAR_REQUEST_HEADERS-Procedure.html) |
| CLOBBASE642BLOB Function | function | [local](APEX_WEB_SERVICE/CLOBBASE642BLOB_Function.md) | [Oracle](https://docs.oracle.com/en/database/oracle/apex/26.1/aeapi/CLOBBASE642BLOB-Function.html) |
| GENERATE_REQUEST_BODY Function | function | [local](APEX_WEB_SERVICE/GENERATE_REQUEST_BODY_Function.md) | [Oracle](https://docs.oracle.com/en/database/oracle/apex/26.1/aeapi/GENERATE_REQUEST_BODY-Function.html) |
| GET_REQUEST_HEADER Function | function | [local](APEX_WEB_SERVICE/GET_REQUEST_HEADER_Function.md) | [Oracle](https://docs.oracle.com/en/database/oracle/apex/26.1/aeapi/GET_REQUEST_HEADER-Function.html) |
| MAKE_REQUEST Function Signature 1 | function | [local](APEX_WEB_SERVICE/MAKE_REQUEST_Function_Signature_1.md) | [Oracle](https://docs.oracle.com/en/database/oracle/apex/26.1/aeapi/MAKE_REQUEST-Function.html) |
| MAKE_REQUEST Function Signature 2 | function | [local](APEX_WEB_SERVICE/MAKE_REQUEST_Function_Signature_2.md) | [Oracle](https://docs.oracle.com/en/database/oracle/apex/26.1/aeapi/MAKE_REQUEST-Function-Signature-2.html) |
| MAKE_REQUEST Procedure Signature 1 | procedure | [local](APEX_WEB_SERVICE/MAKE_REQUEST_Procedure_Signature_1.md) | [Oracle](https://docs.oracle.com/en/database/oracle/apex/26.1/aeapi/MAKE_REQUEST-Procedure.html) |
| MAKE_REQUEST Procedure Signature 2 | procedure | [local](APEX_WEB_SERVICE/MAKE_REQUEST_Procedure_Signature_2.md) | [Oracle](https://docs.oracle.com/en/database/oracle/apex/26.1/aeapi/MAKE_REQUEST-Procedure-Signature-2.html) |
| MAKE_REST_REQUEST Function | function | [local](APEX_WEB_SERVICE/MAKE_REST_REQUEST_Function.md) | [Oracle](https://docs.oracle.com/en/database/oracle/apex/26.1/aeapi/MAKE_REST_REQUEST-Function.html) |
| MAKE_REST_REQUEST_B Function | function | [local](APEX_WEB_SERVICE/MAKE_REST_REQUEST_B_Function.md) | [Oracle](https://docs.oracle.com/en/database/oracle/apex/26.1/aeapi/MAKE_REST_REQUEST_B-Function.html) |
| OAUTH_AUTHENTICATE Procedure Signature 1 | procedure | [local](APEX_WEB_SERVICE/OAUTH_AUTHENTICATE_Procedure_Signature_1.md) | [Oracle](https://docs.oracle.com/en/database/oracle/apex/26.1/aeapi/OAUTH_AUTHENTICATE-Procedure-Signature-1.html) |
| OAUTH_AUTHENTICATE Procedure Signature 2 (Deprecated) | procedure | [local](APEX_WEB_SERVICE/OAUTH_AUTHENTICATE_Procedure_Signature_2_(Deprecated).md) | [Oracle](https://docs.oracle.com/en/database/oracle/apex/26.1/aeapi/OAUTH_AUTHENTICATE-Procedure-Signature-2.html) |
| OAUTH_AUTHENTICATE_CREDENTIAL Procedure | procedure | [local](APEX_WEB_SERVICE/OAUTH_AUTHENTICATE_CREDENTIAL_Procedure.md) | [Oracle](https://docs.oracle.com/en/database/oracle/apex/26.1/aeapi/OAUTH_AUTHENTICATE_CREDENTIAL.html) |
| OAUTH_GET_LAST_TOKEN Function | function | [local](APEX_WEB_SERVICE/OAUTH_GET_LAST_TOKEN_Function.md) | [Oracle](https://docs.oracle.com/en/database/oracle/apex/26.1/aeapi/OAUTH_GET_LAST_TOKEN-Function.html) |
| OAUTH_SET_TOKEN Procedure | procedure | [local](APEX_WEB_SERVICE/OAUTH_SET_TOKEN_Procedure.md) | [Oracle](https://docs.oracle.com/en/database/oracle/apex/26.1/aeapi/OAUTH_SET_TOKEN-Procedure.html) |
| PARSE_RESPONSE Function | function | [local](APEX_WEB_SERVICE/PARSE_RESPONSE_Function.md) | [Oracle](https://docs.oracle.com/en/database/oracle/apex/26.1/aeapi/PARSE_RESPONSE-Function.html) |
| PARSE_RESPONSE_CLOB Function | function | [local](APEX_WEB_SERVICE/PARSE_RESPONSE_CLOB_Function.md) | [Oracle](https://docs.oracle.com/en/database/oracle/apex/26.1/aeapi/PARSE_RESPONSE_CLOB-Function.html) |
| PARSE_XML Function | function | [local](APEX_WEB_SERVICE/PARSE_XML_Function.md) | [Oracle](https://docs.oracle.com/en/database/oracle/apex/26.1/aeapi/PARSE_XML-Function.html) |
| PARSE_XML_CLOB Function | function | [local](APEX_WEB_SERVICE/PARSE_XML_CLOB_Function.md) | [Oracle](https://docs.oracle.com/en/database/oracle/apex/26.1/aeapi/PARSE_XML_CLOB-Function.html) |
| REMOVE_REQUEST_HEADER Procedure | procedure | [local](APEX_WEB_SERVICE/REMOVE_REQUEST_HEADER_Procedure.md) | [Oracle](https://docs.oracle.com/en/database/oracle/apex/26.1/aeapi/REMOVE_REQUEST_HEADER-Procedure.html) |
| SET_REQUEST_ECID_CONTEXT Procedure | procedure | [local](APEX_WEB_SERVICE/SET_REQUEST_ECID_CONTEXT_Procedure.md) | [Oracle](https://docs.oracle.com/en/database/oracle/apex/26.1/aeapi/SET_REQUEST_ECID_CONTEXT-Procedure.html) |
| SET_REQUEST_HEADERS Procedure | procedure | [local](APEX_WEB_SERVICE/SET_REQUEST_HEADERS_Procedure.md) | [Oracle](https://docs.oracle.com/en/database/oracle/apex/26.1/aeapi/SET_REQUEST_HEADERS-Procedure.html) |

<!-- END GENERATED MEMBER LINKS -->
