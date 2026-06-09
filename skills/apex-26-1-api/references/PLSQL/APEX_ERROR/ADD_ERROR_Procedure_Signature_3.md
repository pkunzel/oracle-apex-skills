# APEX_ERROR.ADD_ERROR Procedure Signature 3

Source: [Oracle APEX 26.1 API Reference](https://docs.oracle.com/en/database/oracle/apex/26.1/aeapi/ADD_ERROR-Procedure-Signature-3.html)

Status: generated detailed reference. Review edge cases against the source before production use.

Parent package: [APEX_ERROR](../APEX_ERROR.md)

## Purpose

Adds an error message to the error stack based on a text message defined in Shared Components. This error message can be displayed in all display locations. It can be called in a validation or process to add one or more errors to the error stack.

## When To Use

Use this page when code needs the `APEX_ERROR.ADD_ERROR` procedure. Confirm security, workspace, and session requirements for your calling context.

## Signature

```sql
APEX_ERROR.ADD_ERROR (
    p_error_code          IN VARCHAR2,
    p0                    IN VARCHAR2 DEFAULT NULL,
    p1                    IN VARCHAR2 DEFAULT NULL,
    p2                    IN VARCHAR2 DEFAULT NULL,
    p3                    IN VARCHAR2 DEFAULT NULL,
    p4                    IN VARCHAR2 DEFAULT NULL,
    p5                    IN VARCHAR2 DEFAULT NULL,
    p6                    IN VARCHAR2 DEFAULT NULL,
    p7                    IN VARCHAR2 DEFAULT NULL,
    p8                    IN VARCHAR2 DEFAULT NULL,
    p9                    IN VARCHAR2 DEFAULT NULL,
    p_escape_placeholders IN BOOLEAN  DEFAULT TRUE,
    p_additional_info     IN VARCHAR2 DEFAULT NULL,
    p_display_location    IN VARCHAR2,
    p_page_item_name      IN VARCHAR2,
    p_ignore_ora_error    IN BOOLEAN  DEFAULT FALSE );
```

## Parameters

| Parameter | Description |
| --- | --- |
| `p_error_code` | Name of shared component text message. |
| `p_additional_info` | Additional error information needed if the error is displayed on the error page. |
| `p0 through p9` | Values for %0 through %9 placeholders defined in the text message. |
| `p_escape_placeholders` | If set to TRUE , the values provided in p0 through p9 are escaped with sys.htf.escape_sc before replacing the placeholder in the text message. If set to FALSE , values are not escaped. |
| `p_display_location` | Specifies where the error message is displayed. Use the constants defined for p_display_location . See Constants and Attributes Used for Result Types . |
| `p_page_item_name` | Name of the page item on the current page that is highlighted if apex_error.c_inline_with_field or apex_error.c_inline_with_field_and_notif are used as the display location. |
| `p_ignore_ora_error` | If FALSE (default), retains the original error in the error stack. If TRUE and add_error is called from an exception handler, removes the original error that caused the exception from the error stack. |

## Returns

This is a procedure and does not return a value.

## Important Notes

- Most APEX APIs assume the correct APEX workspace, application, and session context.
- Validate user-controlled values before passing them into administrative, security, SQL, or web-service APIs.
- Use the source link for exact behavior, defaults, and version-specific caveats.

## Simple Example

```sql
begin
    apex_error.ADD_ERROR(
        p_error_code => 'EXAMPLE',
        p_escape_placeholders => true,
        p_additional_info => 'EXAMPLE',
        p_display_location => 'EXAMPLE',
        p_page_item_name => 'EXAMPLE',
        p_ignore_ora_error => true
    );
end;
/
```

## More Complex Example

```sql
begin
    -- Assuming this runs inside an APEX page process with the right workspace/app context.
    apex_error.ADD_ERROR(
            p_error_code => 'EXAMPLE',
            p_escape_placeholders => true,
            p_additional_info => 'EXAMPLE',
            p_display_location => 'EXAMPLE',
            p_page_item_name => 'EXAMPLE',
            p_ignore_ora_error => true
        );
end;
/
```

