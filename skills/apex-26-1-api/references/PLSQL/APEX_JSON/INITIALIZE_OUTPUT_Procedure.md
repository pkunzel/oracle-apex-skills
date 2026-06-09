# APEX_JSON.INITIALIZE_OUTPUT Procedure

Source: [Oracle APEX 26.1 API Reference](https://docs.oracle.com/en/database/oracle/apex/26.1/aeapi/INITIALIZE_OUTPUT-Procedure.html)

Status: generated detailed reference. Review edge cases against the source before production use.

Parent package: [APEX_JSON](../APEX_JSON.md)

## Purpose

This procedure initializes the output interface. You only have to call this procedure if you want to modify the parameters below. Initially, output is already configured with the defaults mentioned in the parameter table.

## When To Use

Use this page when code needs the `APEX_JSON.INITIALIZE_OUTPUT` procedure. Confirm security, workspace, and session requirements for your calling context.

## Signature

```sql
APEX_JSON.INITIALIZE_OUTPUT (
    p_http_header     IN BOOLEAN     DEFAULT TRUE,
    p_http_cache      IN BOOLEAN     DEFAULT FALSE,
    p_http_cache_etag IN VARCHAR2    DEFAULT NULL, 
    p_indent          IN PLS_INTEGER DEFAULT NULL )
```

## Parameters

| Parameter | Description |
| --- | --- |
| `p_http_header` | If TRUE (default), writes an application/JSON mime type header. |
| `p_http_cache` | This parameter is only relevant if p_http_header is TRUE. If TRUE, writes Cache-Control: max-age=315360000. If FALSE (the default), writes Cache-Control: no-cache. Otherwise, does not write Cache-Control. |
| `http_cache_etag` | If not null, writes an etag header. This parameter is only used if P_HTTP_CACHE is true. |
| `p_indent` | Indent level. Defaults to 2, if debug is turned on, otherwise defaults to 0. |

## Returns

This is a procedure and does not return a value.

## Important Notes

- Most APEX APIs assume the correct APEX workspace, application, and session context.
- Validate user-controlled values before passing them into administrative, security, SQL, or web-service APIs.
- Use the source link for exact behavior, defaults, and version-specific caveats.

## Simple Example

```sql
begin
    apex_json.INITIALIZE_OUTPUT(
        p_http_header => true,
        p_http_cache => true,
        p_http_cache_etag => 'EXAMPLE',
        p_indent => 1
    );
end;
/
```

