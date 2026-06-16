# APEX_PWA.GENERATE_PUSH_CREDENTIALS Procedure

Source: [Oracle APEX 26.1 API Reference](https://docs.oracle.com/en/database/oracle/apex/26.1/aeapi/APEX_PWA.GENERATE_PUSH_CREDENTIALS-Procedure.html)

Status: generated detailed reference. Review edge cases against the source before production use.

Parent package: [APEX_PWA](../APEX_PWA.md)

## Purpose

This procedure regenerates push credential keys based on the provided application ID.

## When To Use

Use this page when code needs the `APEX_PWA.GENERATE_PUSH_CREDENTIALS` procedure. Confirm security, workspace, and session requirements for your calling context.

## Signature

```sql
APEX_PWA.GENERATE_PUSH_CREDENTIALS (
    p_application_id IN NUMBER DEFAULT [current application id] )
```

## Parameters

| Parameter | Description |
| --- | --- |
| `p_application_id` | ID of the application. Defaults to current application. |

## Returns

This is a procedure and does not return a value.

## Important Notes

- Most APEX APIs assume the correct APEX workspace, application, and session context.
- Validate user-controlled values before passing them into administrative, security, SQL, or web-service APIs.
- Use the source link for exact behavior, defaults, and version-specific caveats.

## Example

Generate push credentials as an administrative setup action for an application that has PWA enabled.

```sql
begin
    if not apex_authorization.has_access('CAN_ADMINISTER_APPLICATION') then
        raise_application_error(-20000, 'Not authorized to manage PWA credentials.');
    end if;

    apex_pwa.generate_push_credentials(
        p_application_id => :APP_ID);
end;
/
```
