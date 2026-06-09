# APEX_SHARED_COMPONENT

Source: [Oracle APEX 26.1 API Reference](https://docs.oracle.com/en/database/oracle/apex/26.1/aeapi/APEX_SHARED_COMPONENT.html)

Status: curated first-pass reference.

## Purpose

`APEX_SHARED_COMPONENT` refreshes or publishes shared components that have a component type and component ID. It is a small administrative package for component lifecycle actions from PL/SQL.

## When To Use

Use it from controlled Builder/administrative automation when a shared component must be refreshed or published after metadata changes. Do not expose it directly to ordinary users.

## API Surface

| Member | Use |
| --- | --- |
| `REFRESH` | Refresh a shared component by type and ID. |
| `PUBLISH` | Publish a shared component by type and ID. |
| Global constants | Component type constants used by `REFRESH` and `PUBLISH`. |

## Simple Example

Assuming `l_component_type` and `l_component_id` were selected from trusted APEX metadata:

```sql
begin
    apex_shared_component.refresh(
        p_component_type => l_component_type,
        p_component_id   => l_component_id);
end;
/
```

## Publish Example

Assuming an admin page stores a validated shared component ID in `:P50_COMPONENT_ID`:

```sql
declare
    l_component_type apex_shared_component.t_component_type;
begin
    -- Use one of the documented component type constants from the local member page.
    l_component_type := apex_shared_component.c_component_email_template;

    apex_shared_component.publish(
        p_component_type => l_component_type,
        p_component_id   => :P50_COMPONENT_ID);
end;
/
```

## Notes

- Use the [Global Constants](APEX_SHARED_COMPONENT/Global_Constants.md) member page to choose valid component type constants.
- Component IDs should come from trusted metadata lookup, not free-form user input.
- This package mutates application metadata; restrict execution to admins and deployment scripts.

## Related APIs

- [APEX_APPLICATION_ADMIN](APEX_APPLICATION_ADMIN.md) for broader application administration.
- [APEX_EXPORT](APEX_EXPORT.md) for preserving metadata before changes.
- [APEX_LANG](APEX_LANG.md) for translation publishing flows.

<!-- BEGIN GENERATED MEMBER LINKS -->

## Local Member Detail Pages

Generated navigation for LLM retrieval. Use the local detail page first, then follow the Oracle source link when exact wording or edge-case behavior must be verified.

| Member | Kind | Local detail | Source |
| --- | --- | --- | --- |
| Global Constants | constants | [local](APEX_SHARED_COMPONENT/Global_Constants.md) | [Oracle](https://docs.oracle.com/en/database/oracle/apex/26.1/aeapi/APEX_SHARED_COMPONENT.Global-Constants.html) |
| PUBLISH Procedure | procedure | [local](APEX_SHARED_COMPONENT/PUBLISH_Procedure.md) | [Oracle](https://docs.oracle.com/en/database/oracle/apex/26.1/aeapi/APEX_SHARED_COMPONENT.PUBLISH-Procedure.html) |
| REFRESH Procedure | procedure | [local](APEX_SHARED_COMPONENT/REFRESH_Procedure.md) | [Oracle](https://docs.oracle.com/en/database/oracle/apex/26.1/aeapi/APEX_SHARED_COMPONENT.REFRESH-Procedure.html) |

<!-- END GENERATED MEMBER LINKS -->
