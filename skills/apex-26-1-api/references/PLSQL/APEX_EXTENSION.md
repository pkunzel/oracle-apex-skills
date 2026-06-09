# APEX_EXTENSION

Source: [Oracle APEX 26.1 API Reference](https://docs.oracle.com/en/database/oracle/apex/26.1/aeapi/APEX_EXTENSION.html)

Status: curated first-pass reference.

## Purpose

`APEX_EXTENSION` supports APEX Builder extension applications. It lets extension workspaces publish Builder menu links, generate Builder links that focus specific application components, and switch extension execution context to a subscribed workspace.

This is a specialized package for extension applications and extension-hosting workspaces. Most APEX applications should not call it.

## Required Context

The official APEX 26.1 package page describes this API for workspaces with Component Availability set to allow hosting extensions, published public extension menu links, and subscribed/granted workspaces. It can also run in Automations or database sessions after establishing an APEX session with `APEX_SESSION.CREATE_SESSION`.

`ADD_MENU_ENTRY` and `REMOVE_MENU_ENTRY` require `APEX_ADMINISTRATOR_ROLE`.

## API Surface

| Need | Member |
| --- | --- |
| Add an extension menu link | `ADD_MENU_ENTRY` |
| Remove an extension menu link | `REMOVE_MENU_ENTRY` |
| Generate a Builder action or data-action attributes | `GET_BUILDER_LINK` |
| Get the grantor workspace name | `GET_GRANTOR_WORKSPACE` |
| Switch extension context by workspace ID | `SET_WORKSPACE(p_id)` |
| Switch extension context by workspace name | `SET_WORKSPACE(p_name)` |

## Add Extension Menu Entry

Assuming workspace `EXTENSIONS_WS` hosts extension app `1200` and is enabled for hosting extensions:

```sql
begin
    apex_extension.add_menu_entry(
        p_label            => 'Metadata Inspector',
        p_url              => 'f?p=1200:1:&APP_SESSION.',
        p_display_sequence => 50,
        p_description      => 'Inspect applications and pages in the subscribed workspace',
        p_is_public        => true,
        p_tab_identifier   => 'metadata_inspector',
        p_workspace        => 'EXTENSIONS_WS');
end;
/
```

Use `p_is_public => true` only for links intended for subscribed workspaces. Use a stable `p_tab_identifier` when several links should reuse the same browser tab.

## Remove Extension Menu Entry

```sql
begin
    apex_extension.remove_menu_entry(
        p_label     => 'Metadata Inspector',
        p_workspace => 'EXTENSIONS_WS');
end;
/
```

Keep labels stable because the label identifies the menu entry within the workspace.

## Generate Builder Links

Use `GET_BUILDER_LINK` in reports inside extension apps to let the user jump from extension output to the relevant Builder component.

```sql
select page_id,
       page_name,
       apex_extension.get_builder_link(
           p_app_id  => application_id,
           p_page_id => page_id) as builder_href
  from apex_application_pages
 where application_id = :P10_APPLICATION_ID
 order by page_id;
```

Then render `builder_href` as an anchor `href`.

For button action data attributes:

```sql
select page_id,
       apex_extension.get_builder_link(
           p_app_id         => application_id,
           p_page_id        => page_id,
           p_as_data_action => 'Y') as builder_action_attrs
  from apex_application_pages
 where application_id = :P10_APPLICATION_ID;
```

When using the `p_as_data_action => 'Y'` output in a report column, follow the member page note about escaping because the output is intended to become attributes, not plain text.

## Switch To Subscribed Workspace

Assuming an automation in extension app `1200` needs to inspect metadata for subscribed workspace `CUSTOMER_WS`:

```sql
declare
    l_grantor_workspace varchar2(255);
begin
    apex_session.create_session(
        p_app_id   => 1200,
        p_page_id  => 1,
        p_username => 'EXTENSION_JOB');

    apex_extension.set_workspace(p_name => 'CUSTOMER_WS');
    l_grantor_workspace := apex_extension.get_grantor_workspace;

    for r in (
        select application_id, application_name
          from apex_applications
         order by application_id
    ) loop
        apex_debug.info(
            p_message => 'Workspace %s app %s %s',
            p0        => l_grantor_workspace,
            p1        => r.application_id,
            p2        => r.application_name);
    end loop;

    apex_session.delete_session;
exception
    when others then
        apex_session.delete_session;
        raise;
end;
/
```

After `SET_WORKSPACE`, application-related public APEX views are evaluated for the target subscribed workspace in the extension context. Keep this behavior explicit in code reviews because it changes which workspace metadata a query sees.

## Safety Notes

- Use this package only for extension applications and extension-hosting workspaces.
- Confirm the workspace has extension hosting enabled before publishing public menu entries.
- Use least privilege. Menu administration requires `APEX_ADMINISTRATOR_ROLE`.
- Treat workspace names, application IDs, page IDs, and component IDs as controlled administrative inputs.
- Be explicit when `SET_WORKSPACE` changes which workspace public APEX views read from.
- Prefer `GET_BUILDER_LINK` over constructing Builder URLs manually.

## Related APIs

- [APEX_SESSION](APEX_SESSION.md) for creating APEX session context in jobs and database sessions.
- [APEX_APPLICATION_ADMIN](APEX_APPLICATION_ADMIN.md) and [APEX_INSTANCE_ADMIN](APEX_INSTANCE_ADMIN.md) for broader administrative APIs.
- [APEX_PAGE](APEX_PAGE.md) for application page URL helpers outside Builder extension workflows.

<!-- BEGIN GENERATED MEMBER LINKS -->

## Local Member Detail Pages

Generated navigation for LLM retrieval. Use the local detail page first, then follow the Oracle source link when exact wording or edge-case behavior must be verified.

| Member | Kind | Local detail | Source |
| --- | --- | --- | --- |
| ADD_MENU_ENTRY Procedure | procedure | [local](APEX_EXTENSION/ADD_MENU_ENTRY_Procedure.md) | [Oracle](https://docs.oracle.com/en/database/oracle/apex/26.1/aeapi/APEX_EXTENSION.ADD_MENU_ENTRY-Procedure.html) |
| GET_BUILDER_LINK Function | function | [local](APEX_EXTENSION/GET_BUILDER_LINK_Function.md) | [Oracle](https://docs.oracle.com/en/database/oracle/apex/26.1/aeapi/APEX_EXTENSION.GET_BUILDER_LINK-Function.html) |
| GET_GRANTOR_WORKSPACE Function | function | [local](APEX_EXTENSION/GET_GRANTOR_WORKSPACE_Function.md) | [Oracle](https://docs.oracle.com/en/database/oracle/apex/26.1/aeapi/APEX_EXTENSION.GET_GRANTOR_WORKSPACE-Function.html) |
| REMOVE_MENU_ENTRY Procedure | procedure | [local](APEX_EXTENSION/REMOVE_MENU_ENTRY_Procedure.md) | [Oracle](https://docs.oracle.com/en/database/oracle/apex/26.1/aeapi/APEX_EXTENSION.REMOVE_MENU_ENTRY-Procedure.html) |
| SET_WORKSPACE Procedure Signature 1 | procedure | [local](APEX_EXTENSION/SET_WORKSPACE_Procedure_Signature_1.md) | [Oracle](https://docs.oracle.com/en/database/oracle/apex/26.1/aeapi/APEX_EXTENSION.SET_WORKSPACE-Procedure-Signature-1.html) |
| SET_WORKSPACE Procedure Signature 2 | procedure | [local](APEX_EXTENSION/SET_WORKSPACE_Procedure_Signature_2.md) | [Oracle](https://docs.oracle.com/en/database/oracle/apex/26.1/aeapi/APEX_EXTENSION.SET_WORKSPACE-Procedure-Signature-2.html) |

<!-- END GENERATED MEMBER LINKS -->
