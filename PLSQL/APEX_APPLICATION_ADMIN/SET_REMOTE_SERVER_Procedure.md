# APEX_APPLICATION_ADMIN.SET_REMOTE_SERVER Procedure

Source: [Oracle APEX 26.1 API Reference](https://docs.oracle.com/en/database/oracle/apex/26.1/aeapi/APEX_APPLICATION_ADMIN.SET_REMOTE_SERVER-Procedure.html)

Status: generated detailed reference. Review edge cases against the source before production use.

Parent package: [APEX_APPLICATION_ADMIN](../APEX_APPLICATION_ADMIN.md)

## Purpose

This procedure sets the base URL, HTTPS host, and other attributes for remote servers. Remote servers are identified by their Static ID.

## When To Use

Use this page when code needs the `APEX_APPLICATION_ADMIN.SET_REMOTE_SERVER` procedure. Confirm security, workspace, and session requirements for your calling context.

## Signature

```sql
APEX_APPLICATION_ADMIN.SET_REMOTE_SERVER (
    p_static_id        IN VARCHAR2,
    p_base_url         IN VARCHAR2,
    p_https_host       IN VARCHAR2 DEFAULT NULL,
    --
    p_default_database IN VARCHAR2 DEFAULT NULL,
    p_mysql_sql_modes  IN VARCHAR2 DEFAULT NULL,
    --
    p_ords_timezone    IN VARCHAR2 DEFAULT NULL,
    --
    p_ai_model_name    IN VARCHAR2 DEFAULT NULL,
    p_ai_http_headers  IN CLOB     DEFAULT NULL,
    p_ai_attributes    IN CLOB     DEFAULT NULL,
    p_ai_max_tokens    IN NUMBER   DEFAULT NULL );
```

## Parameters

| Parameter | Description |
| --- | --- |
| `p_static_id` | Static ID to reference the remote server object. |
| `p_base_url` | New base URL to use for this remote server object. |
| `p_https_host` | New HTTPS host property to use for this remote server object. |
| `p_default_database` | Default database to use when connecting. Currently only supported for MySQL databases. |
| `p_mysql_sql_modes` | SQL modes to use when connecting to a MySQL database. |
| `p_ords_timezone` | Time zone in which the remote ORDS server runs. Only relevant for REST-Enabled SQL services, when remote ORDS does not run in UTC time zone. |
| `p_ai_model_name` | The AI model to use when requesting a response from a generative AI service. |
| `p_ai_http_headers` | HTTP headers to use when making a request to a generative AI service. |
| `p_ai_attributes` | Attributes in JSON format to use when making a request to a generative AI service. |
| `p_ai_max_tokens` | Maximum number of tokens in a rolling 24-hour window APEX is allowed to make to this Generative AI Service. |

## Returns

This is a procedure and does not return a value.

## Important Notes

- Most APEX APIs assume the correct APEX workspace, application, and session context.
- Validate user-controlled values before passing them into administrative, security, SQL, or web-service APIs.
- Use the source link for exact behavior, defaults, and version-specific caveats.

## Simple Example

```sql
begin
    apex_application_admin.SET_REMOTE_SERVER(
        p_static_id => 'EXAMPLE_STATIC_ID',
        p_base_url => 'EXAMPLE',
        p_https_host => 'EXAMPLE',
        p_default_database => 'EXAMPLE',
        p_mysql_sql_modes => to_clob('Example text'),
        p_ords_timezone => 'EXAMPLE',
        p_ai_model_name => 'EXAMPLE',
        p_ai_http_headers => to_clob('Example text'),
        p_ai_attributes => to_clob('Example text'),
        p_ai_max_tokens => 1
    );
end;
/
```

## More Complex Example

```sql
begin
    -- Assuming this runs inside an APEX page process with the right workspace/app context.
    apex_application_admin.SET_REMOTE_SERVER(
            p_static_id => 'EXAMPLE_STATIC_ID',
            p_base_url => 'EXAMPLE',
            p_https_host => 'EXAMPLE',
            p_default_database => 'EXAMPLE',
            p_mysql_sql_modes => to_clob('Example text'),
            p_ords_timezone => 'EXAMPLE',
            p_ai_model_name => 'EXAMPLE',
            p_ai_http_headers => to_clob('Example text'),
            p_ai_attributes => to_clob('Example text'),
            p_ai_max_tokens => 1
        );
end;
/
```

