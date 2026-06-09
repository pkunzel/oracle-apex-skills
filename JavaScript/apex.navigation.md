# apex.navigation

Source: [Oracle APEX 26.1 JavaScript API Reference](https://docs.oracle.com/en/database/oracle/apex/26.1/aexjs/apex.navigation.html)

Status: curated first-pass reference.

## Purpose

`apex.navigation` changes browser location, opens APEX dialogs, opens popup windows, and opens new browser windows. Use it instead of raw `window.location` or `window.open` when the action participates in APEX dialog/navigation behavior.

## API Surface

| Member | Use |
| --- | --- |
| `redirect` | Navigate to another URL. |
| `dialog` | Open an APEX page URL as a modal or non-modal dialog. |
| `popup` | Open a popup window from options. |
| `openInNewWindow` | Open a URL in a new browser window/tab. |

## Redirect

Simple redirect:

```javascript
apex.navigation.redirect( "f?p=&APP_ID.:10:&SESSION." );
```

Ignore unsaved changes warning for a deliberate cancel action:

```javascript
apex.navigation.redirect(
    "f?p=&APP_ID.:1:&SESSION.",
    true
);
```

Prefer server-generated URLs for security-sensitive navigation:

```sql
apex_page.get_url(
    p_page   => 10,
    p_items  => 'P10_ID',
    p_values => :P1_ID )
```

## Dialog

Open a modal dialog from a URL:

```javascript
apex.navigation.dialog(
    "f?p=&APP_ID.:20:&SESSION.::NO::P20_ID:1001",
    {
        title: "Order Details",
        height: "auto",
        width: "720",
        modal: true
    },
    "t-Dialog-page--standard",
    apex.jQuery( "#view_order_btn" )
);
```

Use `apex_page.get_url` on the server to build dialog URLs when possible.

## Popup

Open a named popup:

```javascript
const popupWindow = apex.navigation.popup( {
    url: "f?p=&APP_ID.:30:&SESSION.",
    name: "orderPopup",
    width: 900,
    height: 700,
    scroll: "yes",
    resizeable: "yes"
} );
```

## New Window

```javascript
apex.navigation.openInNewWindow(
    "f?p=&APP_ID.:40:&SESSION.",
    "reportWindow",
    {
        noopener: true
    }
);
```

Use `noopener: true` when the new page does not need access to the opener.

## Safety Guidance

- Prefer APEX-generated URLs over string concatenation.
- Do not put sensitive values directly in URLs.
- Use the `pIgnoreUnsavedChanges` flag only for deliberate navigation away from changes.
- Use dialogs for short focused tasks; navigate pages for full workflows.
- Browser popup blockers can block popup/new-window calls not triggered directly by a user action.

