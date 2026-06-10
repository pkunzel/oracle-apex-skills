# APEX_APPLICATION.HELP Procedure

Source: [Oracle APEX 26.1 API Reference](https://docs.oracle.com/en/database/oracle/apex/26.1/aeapi/HELP-Procedure.html)

Status: generated detailed reference. Review edge cases against the source before production use.

Parent package: [APEX_APPLICATION](../APEX_APPLICATION.md)

## Purpose

This procedure outputs page and item level help text as formatted HTML. You can also use it to customize how help information is displayed in your application.

## When To Use

Use this page when code needs the `APEX_APPLICATION.HELP` procedure. Confirm security, workspace, and session requirements for your calling context.

## Signature

```sql
APEX_APPLICATION.HELP (
    p_request             IN VARCHAR2 DEFAULT NULL,
    p_flow_id             IN VARCHAR2 DEFAULT NULL,
    p_flow_step_id        IN VARCHAR2 DEFAULT NULL,
    p_show_item_help      IN VARCHAR2 DEFAULT 'YES',
    p_show_regions        IN VARCHAR2 DEFAULT 'YES',
    p_before_page_html    IN VARCHAR2 DEFAULT '',
    p_after_page_html     IN VARCHAR2 DEFAULT NULL,
    p_before_region_html  IN VARCHAR2 DEFAULT NULL,
    p_after_region_html   IN VARCHAR2 DEFAULT '',
    p_before_prompt_html  IN VARCHAR2 DEFAULT '',
    p_after_prompt_html   IN VARCHAR2 DEFAULT ':&nbsp;',
    p_before_item_html    IN VARCHAR2 DEFAULT NULL,
    p_after_item_html     IN VARCHAR2 DEFAULT NULL );
```

## Parameters

| Parameter | Description |
| --- | --- |
| `p_request` | Not used. |
| `p_flow_id` | The application ID that contains the page or item level help you want to output. |
| `p_flow_step_id` | The page ID that contains the page or item level help you want to display. |
| `p_show_item_help` | Flag to determine if item-level help is output. If this parameter is supplied, the value must be either YES (default) or NO . |
| `p_show_regions` | Flag to determine if region headers are output (for regions containing page items). If this parameter is supplied, the value must be either YES (default) or NO . |
| `p_before_page_html` | Use this parameter to include HTML between the page-level help text and item-level help text. |
| `p_after_page_html` | Use this parameter to include HTML at the bottom of the output, after all other help. |
| `p_before_region_html` | Use this parameter to include HTML before every region section. This parameter is ignored if p_show_regions is set to NO . |
| `p_after_region_html` | Use this parameter to include HTML after every region section. This parameter is ignored if p_show_regions is set to NO . |
| `p_before_prompt_html` | Use this parameter to include HTML before every item label for item-level help. This parameter is ignored if p_show_item_help is set to NO . |
| `p_after_prompt_html` | Use this parameter to include HTML after every item label for item-level help. This parameter is ignored if p_show_item_help is set to NO . |
| `p_before_item_html` | Use this parameter to include HTML before every item help text for item-level help. This parameter is ignored if p_show_item_help is set to NO . |
| `p_after_item_html` | Use this parameter to include HTML after every item help text for item-level help. This parameter is ignored if p_show_item_help is set to NO . |

## Returns

This is a procedure and does not return a value.

## Important Notes

- Most APEX APIs assume the correct APEX workspace, application, and session context.
- Validate user-controlled values before passing them into administrative, security, SQL, or web-service APIs.
- Use the source link for exact behavior, defaults, and version-specific caveats.

## Simple Example

```sql
begin
    apex_application.help(
        p_flow_id => :APP_ID,
        p_flow_step_id => :APP_PAGE_ID,
        p_show_item_help => 'YES',
        p_show_regions => 'YES',
        p_before_region_html => '<section class="a-Help-region">',
        p_after_region_html => '</section>',
        p_before_prompt_html => '<strong>',
        p_after_prompt_html => '</strong>: '
    );
end;
/
```
