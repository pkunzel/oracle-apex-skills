# menuButton

Source: [Oracle APEX 26.1 JavaScript API Reference](https://docs.oracle.com/en/database/oracle/apex/26.1/aexjs/menuButton.html)

Status: curated first-pass reference.

## Purpose

`menuButton` is the APEX widget that turns a button into a launcher for an APEX `menu`. It handles the button/menu relationship, keyboard behavior, ARIA state, and open/close behavior.

## When To Use

Use it for custom buttons that should open a `menu` widget. Prefer built-in APEX button/menu templates or toolbar APIs when working inside standard APEX components.

## API Surface

The generator did not detect method sections for this page, but the documented widget is used as a jQuery UI style APEX widget:

```javascript
apex.jQuery( "#button_id" ).menuButton( options );
```

The options connect the button to a menu, usually by menu element ID or menu options.

## Simple Example

Assuming button `#orders_actions_btn` and menu container `#orders_actions_menu`:

```javascript
apex.jQuery( "#orders_actions_menu" ).menu( {
    items: [
        {
            type: "action",
            label: "Refresh",
            action: function() {
                apex.region( "orders" ).refresh();
            }
        }
    ]
} );

apex.jQuery( "#orders_actions_btn" ).menuButton( {
    menu: "#orders_actions_menu"
} );
```

## Action-Backed Example

```javascript
apex.actions.add( {
    name: "download-orders",
    label: "Download",
    action: function() {
        apex.submit( "DOWNLOAD_ORDERS" );
    }
} );

apex.jQuery( "#orders_actions_menu" ).menu( {
    items: [
        { type: "action", action: "download-orders" }
    ]
} );

apex.jQuery( "#orders_actions_btn" ).menuButton( {
    menu: "#orders_actions_menu"
} );
```

## Notes

- Keep the menu element in the page markup or create it before initializing the button.
- Let `menuButton` open the menu instead of manually binding click handlers when possible.
- Use [apex.actions](apex.actions.md) for commands that also need keyboard shortcuts or toolbar integration.

## Related APIs

- [menu](menu.md)
- [apex.actions](apex.actions.md)
- [apex.widget](apex.widget.md)
