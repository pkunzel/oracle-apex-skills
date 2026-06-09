# APEX_ERROR.ADD_ERROR Procedure Signature 4

Source: [Oracle APEX 26.1 API Reference](https://docs.oracle.com/en/database/oracle/apex/26.1/aeapi/ADD_ERROR-Procedure-Signature-4.html)

Status: generated detailed reference. Review edge cases against the source before production use.

Parent package: [APEX_ERROR](../APEX_ERROR.md)

## Purpose

This procedure adds an error message to the error stack that is used to display an error for a tabular form inline in a notification. It can be called in a validation or process to add one or more errors to the error stack.

## When To Use

Use this page when code needs the `APEX_ERROR.ADD_ERROR` procedure. Confirm security, workspace, and session requirements for your calling context.

## Signature

```sql
APEX_ERROR.ADD_ERROR (
    p_message          IN VARCHAR2,
    p_additional_info  IN VARCHAR2 DEFAULT NULL,
    p_display_location IN VARCHAR2,
    p_region_id        IN NUMBER,
    p_column_alias     IN VARCHAR2 DEFAULT NULL,
    p_row_num          IN NUMBER,
    p_ignore_ora_error IN BOOLEAN  DEFAULT FALSE );
```

## Parameters

| Parameter | Description |
| --- | --- |
| `p_message` | Displayed error message. |
| `p_additional_info` | Additional error information needed if the error is displayed on the error page. |
| `p_display_location` | Specifies where the error message is displayed. Use the constant apex_error.c_inline_with_field or apex_error.c_inline_with_field_and_notif . See Constants and Attributes Used for Result Types . |
| `p_region_id` | The ID of a tabular form region on the current page. The ID can be read from the view APEX_APPLICATION_PAGE_REGIONS . |
| `p_column_alias` | Name of a tabular form column alias defined for p_region_id that is highlighted if apex_error.c_inline_with_field or apex_error.c_inline_with_field_and_notif are used as a display location. |
| `p_row_num` | Number of the tabular form row where the error occurred. |
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
        p_message => to_clob('Example text'),
        p_additional_info => 'EXAMPLE',
        p_display_location => 'EXAMPLE',
        p_region_id => 1,
        p_column_alias => 'EXAMPLE',
        p_row_num => 1,
        p_ignore_ora_error => true
    );
end;
/
```

