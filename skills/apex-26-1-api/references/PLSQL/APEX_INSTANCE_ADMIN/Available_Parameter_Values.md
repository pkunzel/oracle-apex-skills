# APEX_INSTANCE_ADMIN.Available Parameter Values

Source: [Oracle APEX 26.1 API Reference](https://docs.oracle.com/en/database/oracle/apex/26.1/aeapi/APEX_INSTANCE_ADMIN.Available-Parameter-Values.html)

Status: generated detailed reference. Review edge cases against the source before production use.

Parent package: [APEX_INSTANCE_ADMIN](../APEX_INSTANCE_ADMIN.md)

## Purpose

The following tables list all the available parameter values you can set within the APEX_INSTANCE_ADMIN package, including parameters for email, wallet, and reporting printing.

## When To Use

Use this page when code needs the `APEX_INSTANCE_ADMIN.Available Parameter Values` topic. Confirm security, workspace, and session requirements for your calling context.

## Important Notes

- Most APEX APIs assume the correct APEX workspace, application, and session context.
- Validate user-controlled values before passing them into administrative, security, SQL, or web-service APIs.
- Use the source link for exact behavior, defaults, and version-specific caveats.

## Example

Use parameter names from this page with `SET_PARAMETER`, `GET_PARAMETER`, `SET_WORKSPACE_PARAMETER`, and `GET_WORKSPACE_PARAMETER`. Instance-only parameters must be set with `SET_PARAMETER`; workspace-level overrides use `SET_WORKSPACE_PARAMETER`.

```sql
begin
    apex_instance_admin.set_parameter(
        p_parameter => 'SMTP_HOST_ADDRESS',
        p_value     => 'smtp.mail.internal'
    );

    apex_instance_admin.set_workspace_parameter(
        p_workspace => 'SALES_ANALYTICS',
        p_parameter => 'WORKSPACE_EMAIL_MAXIMUM',
        p_value     => '2500'
    );
end;
/
```
