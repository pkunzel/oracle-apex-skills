# APEX_ERROR.Constants and Attributes Used for Result Types

Source: [Oracle APEX 26.1 API Reference](https://docs.oracle.com/en/database/oracle/apex/26.1/aeapi/Constants-and-Attributes-used-for-Result-Types.html)

Status: generated detailed reference. Review edge cases against the source before production use.

Parent package: [APEX_ERROR](../APEX_ERROR.md)

## Purpose

The following constants are used for the API parameter p_display_location and the attribute display_location in the t_error and t_error_result types.

## Display Locations

- `c_inline_with_field`: show inline with an associated page item or region column.
- `c_inline_with_field_and_notif`: show inline with the field and also in the page notification.
- `c_inline_in_notification`: show in the page notification.
- `c_on_error_page`: show on the error page.

## Association Types

- `c_ass_type_page_item`
- `c_ass_type_region`
- `c_ass_type_region_column`

## Error Records

`t_error` is passed to an application error handling function and includes the message, additional info, display location, association details, APEX error code, internal-error flags, ORA error details, backtrace, failing statement, and processed component.

`t_error_result` is returned by an error handling function and includes `message`, `additional_info`, `display_location`, `page_item_name`, and `column_alias`.

## When To Use

Use this page when code needs the `APEX_ERROR.Constants and Attributes Used for Result Types` constants. Confirm security, workspace, and session requirements for your calling context.

## Important Notes

- Most APEX APIs assume the correct APEX workspace, application, and session context.
- Validate user-controlled values before passing them into administrative, security, SQL, or web-service APIs.
- Use the source link for exact behavior, defaults, and version-specific caveats.

## Example

Use `APEX_ERROR` display-location constants instead of string literals when adding or returning errors:

```sql
begin
    apex_error.add_error(
        p_message          => 'Quantity must be greater than zero.',
        p_display_location => apex_error.c_inline_with_field_and_notif,
        p_page_item_name   => 'P10_QUANTITY'
    );
end;
/
```
