# APEX_APPLICATION_INSTALL.GET_SUBSCRIPTION_MAPPING Function

Source: [Oracle APEX 26.1 API Reference](https://docs.oracle.com/en/database/oracle/apex/26.1/aeapi/APEX_APPLICATION_INSTALL.GET_SUBSCRIPTION_MAPPING-Function.html)

Status: generated detailed reference. Review edge cases against the source before production use.

Parent package: [APEX_APPLICATION_INSTALL](../APEX_APPLICATION_INSTALL.md)

## Purpose

Use this function to get the Application ID of the new subscription source. If there is no mapping found, the function returns the input Application ID.

## When To Use

Use this page when code needs the `APEX_APPLICATION_INSTALL.GET_SUBSCRIPTION_MAPPING` function. Confirm security, workspace, and session requirements for your calling context.

## Signature

```sql
APEX_APPLICATION_INSTALL.GET_SUBSCRIPTION_MAPPING (
    p_from_application_id    IN              NUMBER)
    RETURN NUMBER;
```

## Parameters

| Parameter | Description |
| --- | --- |
| `p_from_application_id` | The Application ID of the current subscription source. |

## Important Notes

- Most APEX APIs assume the correct APEX workspace, application, and session context.
- Validate user-controlled values before passing them into administrative, security, SQL, or web-service APIs.
- Use the source link for exact behavior, defaults, and version-specific caveats.

## Simple Example

```sql
declare
    l_result NUMBER;
begin
    l_result := apex_application_install.GET_SUBSCRIPTION_MAPPING(
        p_from_application_id => 1
    );
    sys.dbms_output.put_line('Result captured.');
end;
/
```

