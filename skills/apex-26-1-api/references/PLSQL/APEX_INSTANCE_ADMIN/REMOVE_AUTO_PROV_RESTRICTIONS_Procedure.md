# APEX_INSTANCE_ADMIN.REMOVE_AUTO_PROV_RESTRICTIONS Procedure

Source: [Oracle APEX 26.1 API Reference](https://docs.oracle.com/en/database/oracle/apex/26.1/aeapi/REMOVE_AUTO_PROV_RESTRICTIONS-Procedure.html)

Status: generated detailed reference. Review edge cases against the source before production use.

Parent package: [APEX_INSTANCE_ADMIN](../APEX_INSTANCE_ADMIN.md)

## Purpose

This procedure removes blocking email patterns when an instance has auto-provisioning or self-provisioning enabled for workspaces.

## When To Use

Use this page when code needs the `APEX_INSTANCE_ADMIN.REMOVE_AUTO_PROV_RESTRICTIONS` procedure. Confirm security, workspace, and session requirements for your calling context.

## Signature

```sql
APEX_INSTANCE_ADMIN.REMOVE_AUTO_PROV_RESTRICTIONS (
    p_block_email_patterns IN apex_t_varchar2 DEFAULT NULL )
```

## Parameters

| Parameter | Description |
| --- | --- |
| `p_block_email_patterns` | Add one or more email patterns to be added to the apex_auto_prov_email_patterns table. |

## Returns

This is a procedure and does not return a value.

## Important Notes

- Most APEX APIs assume the correct APEX workspace, application, and session context.
- Validate user-controlled values before passing them into administrative, security, SQL, or web-service APIs.
- Use the source link for exact behavior, defaults, and version-specific caveats.

## Simple Example

```sql
begin
    apex_instance_admin.remove_auto_prov_restrictions(
        p_block_email_patterns => apex_t_varchar2(
            '%@blocked-domain.test',
            '%@temporary-mail.test'
        )
    );
end;
/
```
