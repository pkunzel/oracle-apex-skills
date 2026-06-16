# APEX_STRING_UTIL.FIND_EMAIL_ADDRESSES Function

Source: [Oracle APEX 26.1 API Reference](https://docs.oracle.com/en/database/oracle/apex/26.1/aeapi/FIND_EMAIL_ADDRESSES-Function.html)

Status: generated detailed reference. Review edge cases against the source before production use.

Parent package: [APEX_STRING_UTIL](../APEX_STRING_UTIL.md)

## Purpose

This function finds all email addresses in the given input string.

## When To Use

Use this page when code needs the `APEX_STRING_UTIL.FIND_EMAIL_ADDRESSES` function. Confirm security, workspace, and session requirements for your calling context.

## Signature

```sql
APEX_STRING_UTIL.FIND_EMAIL_ADDRESSES (
    p_string IN VARCHAR2 )
    RETURN apex_t_varchar2;
```

## Parameters

| Parameter | Description |
| --- | --- |
| `p_string` | The input string. |

## Returns

This function returns an array of email addresses without duplicates.

## Important Notes

- Most APEX APIs assume the correct APEX workspace, application, and session context.
- Validate user-controlled values before passing them into administrative, security, SQL, or web-service APIs.
- Use the source link for exact behavior, defaults, and version-specific caveats.

## Simple Example

Extract unique email addresses from free-form message text.

```sql
declare
    l_addresses apex_t_varchar2;
begin
    l_addresses := apex_string_util.find_email_addresses(
        p_string => :P10_MESSAGE_TEXT);

    for i in 1 .. l_addresses.count loop
        insert into message_recipients(message_id, email_address)
        values (:P10_MESSAGE_ID, l_addresses(i));
    end loop;
end;
/
```

