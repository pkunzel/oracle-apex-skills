# APEX_ERROR.ADD_ERROR Procedure Signature 1

Source: [Oracle APEX 26.1 API Reference](https://docs.oracle.com/en/database/oracle/apex/26.1/aeapi/ADD_ERROR-Procedure-Signature-1.html)

Status: generated detailed reference. Review edge cases against the source before production use.

Parent package: [APEX_ERROR](../APEX_ERROR.md)

## Purpose

This procedure adds an error message to the error stack that is used to display an error on an error page or inline in a notification. It can be called in a validation or process to add one or more errors to the error stack.

## When To Use

Use this page when code needs the `APEX_ERROR.ADD_ERROR` procedure. Confirm security, workspace, and session requirements for your calling context.

## Signature

```sql
APEX_ERROR.ADD_ERROR (
    p_message          IN VARCHAR2,
    p_additional_info  IN VARCHAR2 DEFAULT NULL,
    p_display_location IN VARCHAR2,
    p_ignore_ora_error IN BOOLEAN  DEFAULT FALSE );
```

## Parameters

| Parameter | Description |
| --- | --- |
| `p_message` | Displayed error message. |
| `p_additional_info` | Additional error information needed if the error is displayed on the error page. |
| `p_display_location` | Specifies where the error message is displayed. Use the constant apex_error.c_inline_in_notification or apex_error.c_on_error_page . See Constants and Attributes Used for Result Types . |
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
    apex_error.add_error(
        p_message          => 'The order cannot be submitted until it has at least one line.',
        p_additional_info  => 'Validation ORDER_HAS_LINES failed.',
        p_display_location => apex_error.c_inline_in_notification
    );
end;
/
```
