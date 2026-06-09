# APEX_ERROR

Source: [Oracle APEX 26.1 API Reference](https://docs.oracle.com/en/database/oracle/apex/26.1/aeapi/APEX_ERROR.html)

Status: curated first-pass reference.

## Purpose

`APEX_ERROR` adds page and item errors from PL/SQL and customizes APEX error handling. Use it to show user-friendly validation messages, associate errors with page items, map database constraint errors to readable text, and implement an application-level Error Handling Function.

## When To Use

Use `APEX_ERROR` when:

- A validation or page process needs to add multiple errors without immediately raising an exception.
- A process should show an inline error next to a page item.
- A custom Error Handling Function should replace internal/constraint errors with user-safe text.
- You need to inspect whether errors have already been added.

Use `raise_application_error` for exception control in PL/SQL APIs. Use `APEX_ERROR.ADD_ERROR` when the goal is APEX page validation feedback.

## Common Member Groups

| Need | Members |
| --- | --- |
| Add errors | `ADD_ERROR` signatures |
| Error handler return object | `INIT_ERROR_RESULT`, constants/attributes for result types |
| Database error cleanup | `GET_FIRST_ORA_ERROR_TEXT`, `EXTRACT_CONSTRAINT_NAME`, `AUTO_SET_ASSOCIATED_ITEM` |
| Error state | `HAVE_ERRORS_OCCURRED` |

## Page Error

```sql
begin
    apex_error.add_error(
        p_message          => 'The order cannot be submitted because it has no lines.',
        p_display_location => apex_error.c_inline_in_notification);
end;
/
```

## Item Error

```sql
begin
    if :P10_EMAIL is null then
        apex_error.add_error(
            p_message          => 'Email is required.',
            p_display_location => apex_error.c_inline_with_field_and_notif,
            p_page_item_name   => 'P10_EMAIL');
    end if;
end;
/
```

## Multiple Validation Errors

```sql
begin
    if :P10_START_DATE > :P10_END_DATE then
        apex_error.add_error(
            p_message          => 'Start date must be before end date.',
            p_display_location => apex_error.c_inline_with_field_and_notif,
            p_page_item_name   => 'P10_START_DATE');
    end if;

    if :P10_AMOUNT <= 0 then
        apex_error.add_error(
            p_message          => 'Amount must be greater than zero.',
            p_display_location => apex_error.c_inline_with_field_and_notif,
            p_page_item_name   => 'P10_AMOUNT');
    end if;
end;
/
```

## Application Error Handler Pattern

Assuming this function is configured as the application Error Handling Function:

```sql
create or replace function app_error_handler (
    p_error in apex_error.t_error )
    return apex_error.t_error_result
as
    l_result apex_error.t_error_result;
begin
    l_result := apex_error.init_error_result(p_error);

    if p_error.is_internal_error then
        l_result.message := 'An unexpected error occurred. Contact support with reference ' ||
                            apex_debug.get_page_view_id || '.';
    elsif p_error.ora_sqlcode = -1 then
        l_result.message := 'This record already exists.';
    end if;

    return l_result;
end;
/
```

## Safety Guidance

- Do not expose raw internal errors to end users.
- Log diagnostic details with `APEX_DEBUG`; show concise user-safe messages with `APEX_ERROR`.
- Use item-associated errors for fields users can fix.
- Use page-level notification errors for workflow-level problems.
- Keep constraint-name mappings centralized in the application Error Handling Function.

<!-- BEGIN GENERATED MEMBER LINKS -->

## Local Member Detail Pages

Generated navigation for LLM retrieval. Use the local detail page first, then follow the Oracle source link when exact wording or edge-case behavior must be verified.

| Member | Kind | Local detail | Source |
| --- | --- | --- | --- |
| Constants and Attributes Used for Result Types | constants | [local](APEX_ERROR/Constants_and_Attributes_Used_for_Result_Types.md) | [Oracle](https://docs.oracle.com/en/database/oracle/apex/26.1/aeapi/Constants-and-Attributes-used-for-Result-Types.html) |
| Example of an Error Handling Function | example | [local](APEX_ERROR/Example_of_an_Error_Handling_Function.md) | [Oracle](https://docs.oracle.com/en/database/oracle/apex/26.1/aeapi/Example-of-an-Error-Handling-Function.html) |
| ADD_ERROR Procedure Signature 1 | procedure | [local](APEX_ERROR/ADD_ERROR_Procedure_Signature_1.md) | [Oracle](https://docs.oracle.com/en/database/oracle/apex/26.1/aeapi/ADD_ERROR-Procedure-Signature-1.html) |
| ADD_ERROR Procedure Signature 2 | procedure | [local](APEX_ERROR/ADD_ERROR_Procedure_Signature_2.md) | [Oracle](https://docs.oracle.com/en/database/oracle/apex/26.1/aeapi/ADD_ERROR-Procedure-Signature-2.html) |
| ADD_ERROR Procedure Signature 3 | procedure | [local](APEX_ERROR/ADD_ERROR_Procedure_Signature_3.md) | [Oracle](https://docs.oracle.com/en/database/oracle/apex/26.1/aeapi/ADD_ERROR-Procedure-Signature-3.html) |
| ADD_ERROR Procedure Signature 4 | procedure | [local](APEX_ERROR/ADD_ERROR_Procedure_Signature_4.md) | [Oracle](https://docs.oracle.com/en/database/oracle/apex/26.1/aeapi/ADD_ERROR-Procedure-Signature-4.html) |
| ADD_ERROR Procedure Signature 5 | procedure | [local](APEX_ERROR/ADD_ERROR_Procedure_Signature_5.md) | [Oracle](https://docs.oracle.com/en/database/oracle/apex/26.1/aeapi/ADD_ERROR-Procedure-Signature-5.html) |
| AUTO_SET_ASSOCIATED_ITEM Procedure | procedure | [local](APEX_ERROR/AUTO_SET_ASSOCIATED_ITEM_Procedure.md) | [Oracle](https://docs.oracle.com/en/database/oracle/apex/26.1/aeapi/AUTO_SET_ASSOCIATED_ITEM-Procedure.html) |
| EXTRACT_CONSTRAINT_NAME Function | function | [local](APEX_ERROR/EXTRACT_CONSTRAINT_NAME_Function.md) | [Oracle](https://docs.oracle.com/en/database/oracle/apex/26.1/aeapi/EXTRACT_CONSTRAINT_NAME-Function.html) |
| GET_FIRST_ORA_ERROR_TEXT Function | function | [local](APEX_ERROR/GET_FIRST_ORA_ERROR_TEXT_Function.md) | [Oracle](https://docs.oracle.com/en/database/oracle/apex/26.1/aeapi/GET_FIRST_ORA_ERROR_TEXT-Function.html) |
| HAVE_ERRORS_OCCURRED Function | function | [local](APEX_ERROR/HAVE_ERRORS_OCCURRED_Function.md) | [Oracle](https://docs.oracle.com/en/database/oracle/apex/26.1/aeapi/APEX_ERROR.HAVE_ERRORS_OCCURRED-Function.html) |
| INIT_ERROR_RESULT Function | function | [local](APEX_ERROR/INIT_ERROR_RESULT_Function.md) | [Oracle](https://docs.oracle.com/en/database/oracle/apex/26.1/aeapi/INIT_ERROR_RESULT-Function.html) |

<!-- END GENERATED MEMBER LINKS -->
