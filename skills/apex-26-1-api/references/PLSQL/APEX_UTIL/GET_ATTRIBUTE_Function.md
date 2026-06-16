# APEX_UTIL.GET_ATTRIBUTE Function

Source: [Oracle APEX 26.1 API Reference](https://docs.oracle.com/en/database/oracle/apex/26.1/aeapi/GET_ATTRIBUTE-Function.html)

Status: generated detailed reference. Review edge cases against the source before production use.

Parent package: [APEX_UTIL](../APEX_UTIL.md)

## Purpose

This function returns the value of one of the attribute values (1 through 10) of a named user in the Oracle APEX accounts table. These are only accessible by using the APIs.

## When To Use

Use this page when code needs the `APEX_UTIL.GET_ATTRIBUTE` function. Confirm security, workspace, and session requirements for your calling context.

## Signature

```sql
APEX_UTIL.GET_ATTRIBUTE (
    p_username                IN VARCHAR2,
    p_attribute_number        IN NUMBER )
RETURN VARCHAR2;
```

## Parameters

| Parameter | Description |
| --- | --- |
| `p_username` | User name in the account. |
| `p_attribute_number` | Number of attributes in the user record (1 through 10). |

## Important Notes

- Most APEX APIs assume the correct APEX workspace, application, and session context.
- Validate user-controlled values before passing them into administrative, security, SQL, or web-service APIs.
- Use the source link for exact behavior, defaults, and version-specific caveats.

## Simple Example

Read one of the custom attributes stored on an APEX user account.

```sql
declare
    l_cost_center varchar2(4000);
begin
    l_cost_center := apex_util.get_attribute(
        p_username         => 'JSMITH',
        p_attribute_number => 1);
end;
/
```

