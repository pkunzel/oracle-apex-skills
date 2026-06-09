# APEX_JAVASCRIPT.ADD_LIBRARY Procedure

Source: [Oracle APEX 26.1 API Reference](https://docs.oracle.com/en/database/oracle/apex/26.1/aeapi/ADD_LIBRARY-Procedure.html)

Status: generated detailed reference. Review edge cases against the source before production use.

Parent package: [APEX_JAVASCRIPT](../APEX_JAVASCRIPT.md)

## Purpose

This procedure adds the script tag to load a JavaScript library. If a library has been added, it is not added a second time.

## When To Use

Use this page when code needs the `APEX_JAVASCRIPT.ADD_LIBRARY` procedure. Confirm security, workspace, and session requirements for your calling context.

## Signature

```sql
APEX_JAVASCRIPT.ADD_LIBRARY (
    p_name                    IN VARCHAR2,
    p_directory               IN VARCHAR2,
    p_version                 IN VARCHAR2 DEFAULT NULL,
    p_check_to_add_minified   IN BOOLEAN  DEFAULT FALSE,
    p_skip_extension          IN BOOLEAN  DEFAULT FALSE,
    p_ie_condition            IN VARCHAR2 DEFAULT NULL,
    p_requirejs_module        IN VARCHAR2 DEFAULT NULL,
    p_requirejs_js_expression IN VARCHAR2 DEFAULT NULL,
    p_requirejs_required      IN BOOLEAN  DEFAULT FALSE,
    p_is_module               IN BOOLEAN  DEFAULT FALSE,
    p_is_async                IN BOOLEAN  DEFAULT FALSE,
    p_is_defer                IN BOOLEAN  DEFAULT FALSE,
    p_attributes              IN VARCHAR2 DEFAILT NULL,
    p_key                     IN VARCHAR2 DEFAULT NULL )
```

## Parameters

| Parameter | Description |
| --- | --- |
| `p_name` | Name of the JavaScript file. Must not use .js when specifying. |
| `p_directory` | Directory where JavaScript library is loaded. Must have a trailing slash. |
| `p_version` | Version identifier. |
| `p_check_to_add_minified` | If TRUE, the procedure tests if it is appropriate to add .min extension and add it if appropriate. This is added if an application is not running in DEBUG mode, and omitted when in DEBUG mode. |
| `p_skip_extension` | If TRUE, the extension .js is NOT added. |
| `p_ie_condition` | Condition which is used as Internet Explorer condition. |
| `p_requirejs_module` | Module name which is used to expose the library to RequireJS. |
| `p_requirejs_js_expression` | JavaScript expression which is used to expose the library to the RequireJS module. |
| `p_requirejs_required` | This has to be true if the library uses RequireJS in its code to loading other JavaScript files. |
| `p_key` | If not specified, defaults to p_directory\|\|p_name\|\|p_version . |
| `p_is_module` | If true, adds type="module" to the script tag. |
| `p_is_async` | If true, adds attribute async to the script tag. |
| `p_is_defer` | If true adds attribute defer to the script tag. defer cannot be used in combination with async . defer should not be used in combination with type="module" as module scripts defer by default. |
| `p_attributes` | Extra attributes to add to the script tag. Note: Callers are responsible for escaping this parameter. |

## Returns

This is a procedure and does not return a value.

## Important Notes

- Most APEX APIs assume the correct APEX workspace, application, and session context.
- Validate user-controlled values before passing them into administrative, security, SQL, or web-service APIs.
- Use the source link for exact behavior, defaults, and version-specific caveats.

## Simple Example

```sql
begin
    apex_javascript.ADD_LIBRARY(
        p_name => 'EXAMPLE',
        p_directory => 'EXAMPLE',
        p_version => 'EXAMPLE',
        p_check_to_add_minified => true,
        p_skip_extension => true,
        p_ie_condition => 'EXAMPLE',
        p_requirejs_module => 'EXAMPLE',
        p_requirejs_js_expression => 'EXAMPLE',
        p_requirejs_required => true,
        p_is_module => true,
        p_is_async => true,
        p_is_defer => true,
        p_attributes => 'EXAMPLE',
        p_key => 'EXAMPLE'
    );
end;
/
```

