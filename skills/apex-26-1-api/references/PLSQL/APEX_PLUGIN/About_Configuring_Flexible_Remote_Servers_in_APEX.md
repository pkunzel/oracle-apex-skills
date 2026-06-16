# APEX_PLUGIN.About Configuring Flexible Remote Servers in APEX

Source: [Oracle APEX 26.1 API Reference](https://docs.oracle.com/en/database/oracle/apex/26.1/aeapi/About-Configuring-Flexible-Remote-Servers.html)

Status: generated detailed reference. Review edge cases against the source before production use.

Parent package: [APEX_PLUGIN](../APEX_PLUGIN.md)

## Purpose

Flexible remote servers use a configuration procedure to change the URL endpoint of the server.

## When To Use

Use this page when code needs the `APEX_PLUGIN.About Configuring Flexible Remote Servers in APEX` about. Confirm security, workspace, and session requirements for your calling context.

## Important Notes

- Most APEX APIs assume the correct APEX workspace, application, and session context.
- Validate user-controlled values before passing them into administrative, security, SQL, or web-service APIs.
- Use the source link for exact behavior, defaults, and version-specific caveats.

## Example

Flexible Remote Server plug-ins use the APEX-supplied remote server records during configuration instead of hard-coding endpoint details.

```sql
procedure configure_remote_server (
    p_plugin        in            apex_plugin.t_plugin,
    p_remote_server in            apex_plugin.t_remote_server_info,
    p_config        in out nocopy apex_plugin.t_remote_server_config )
is
begin
    apex_debug.info('Configuring flexible remote server for plug-in %s', p_plugin.name);
end;
/
```
