# APEX_EXTENSION.GET_BUILDER_LINK Function

Source: [Oracle APEX 26.1 API Reference](https://docs.oracle.com/en/database/oracle/apex/26.1/aeapi/APEX_EXTENSION.GET_BUILDER_LINK-Function.html)

Status: generated detailed reference. Review edge cases against the source before production use.

Parent package: [APEX_EXTENSION](../APEX_EXTENSION.md)

## Purpose

Generate an action fragment or action data attributes to open the APEX Builder window or tab, redirect, and focus on a specific component.

## When To Use

Use this page when code needs the `APEX_EXTENSION.GET_BUILDER_LINK` function. Confirm security, workspace, and session requirements for your calling context.

## Signature

```sql
APEX_EXTENSION.GET_BUILDER_LINK (
    p_app_id          IN NUMBER,
    p_page_id         IN NUMBER   DEFAULT NULL,
    p_view_name       IN VARCHAR2 DEFAULT NULL,
    p_component_id    IN NUMBER   DEFAULT NULL,
    p_as_data_action  IN VARCHAR2 DEFAULT 'N' )
RETURN VARCHAR2;
```

## Parameters

| Parameter | Description |
| --- | --- |
| `p_app_id` | ID of application to open in the Builder |
| `p_page_id` | Optional ID of page in application to open. NULL if p_component_id references a shared component, but mandatory if referencing a component defined on a page, like page items, regions, or report columns. |
| `p_view_name` | APEX Dictionary view of component identified in p_component_id . |
| `p_component_id` | ID of component to focus on in the Designer or redirect to the corresponding edit page in Builder. |
| `p_as_data_action` | Default is N , which will generate an action fragment to be used in a href attribute of an anchor element. If set to Y , this function returns the corresponding data attributes for a button action. Note: When set to Y to generate the link as data attributes for a button and referencing the column value as a substitution string, the Escape Special Characters must be switched off for the column that uses the get_builder_link function. |

## Important Notes

- Most APEX APIs assume the correct APEX workspace, application, and session context.
- Validate user-controlled values before passing them into administrative, security, SQL, or web-service APIs.
- Use the source link for exact behavior, defaults, and version-specific caveats.

## Simple Example

Generate Builder backlinks from APEX dictionary rows. The `p_view_name` identifies the dictionary view and `p_component_id` is the row's component ID.

```sql
select application_id,
       page_id,
       item_name,
       apex_extension.get_builder_link(
           p_app_id       => application_id,
           p_page_id      => page_id,
           p_view_name    => 'APEX_APPLICATION_PAGE_ITEMS',
           p_component_id => item_id
       ) as builder_link
  from apex_application_page_items
 where application_id = 100
   and page_id = 10;
```
