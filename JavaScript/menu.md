# menu

Source: [Oracle APEX 26.1 JavaScript API Reference](https://docs.oracle.com/en/database/oracle/apex/26.1/aexjs/menu.html)

Status: curated first-pass reference.

## Purpose

`menu` is the APEX widget for popup menus, context menus, menubars, submenus, toggles, radio groups, and action-integrated menu items.

## When To Use

Use it when a custom component needs an APEX-styled menu. Prefer [apex.actions](apex.actions.md) for command definitions, then bind those actions into menus by name.

## API Surface

| Area | Members |
| --- | --- |
| Setup options | `items`, `menubar`, `actionsContext`, `asyncFetchMenu`, `customContent`, `useLinks`, `popupMenuLabelId`, `iconType`, `tabBehavior` |
| Open/close | `open`, `toggle`, `beforeOpen`, `afterClose` |
| Lookup/state | `find`, `setCurrentMenuItem`, `refresh`, `resize` |
| Item shape | `menu.Item` with `type`, `id`, `label`, `href`, `action`, `disabled`, `hide`, `menu`, `get`, `set`, `accelerator` |
| Async loading | `asyncFetch` callback pattern |

## Popup Menu Example

```javascript
apex.jQuery( "#order_menu" ).menu( {
    items: [
        {
            type: "action",
            id: "view-order",
            label: "View",
            action: function() {
                apex.navigation.redirect( "f?p=&APP_ID.:20:&SESSION.::NO::P20_ORDER_ID:" + $v( "P10_ORDER_ID" ) );
            }
        },
        {
            type: "separator"
        },
        {
            type: "action",
            id: "refresh-orders",
            label: "Refresh",
            action: function() {
                apex.region( "orders" ).refresh();
            }
        }
    ]
} );
```

## Context Menu Example

```javascript
const menu$ = apex.jQuery( "#order_menu" ).menu( "instance" );

apex.jQuery( "#orders" ).on( "contextmenu", ".order-row", function( event ) {
    event.preventDefault();
    apex.item( "P10_ORDER_ID" ).setValue( this.dataset.orderId, null, true );
    menu$.toggle( event.pageX, event.pageY );
} );
```

## Action Context Example

```javascript
const actions = apex.actions.createContext( "orders-context", apex.jQuery( "#orders" )[0] );

actions.add( {
    name: "orders-refresh",
    label: "Refresh",
    action: function() {
        apex.region( "orders" ).refresh();
    }
} );

apex.jQuery( "#orders_actions_menu" ).menu( {
    actionsContext: actions,
    items: [
        { type: "action", action: "orders-refresh" }
    ]
} );
```

## Notes

- Use `popupMenuLabelId` for accessible popup menu labeling.
- `action` can be a function or an `apex.actions` action name.
- Use `beforeOpen` to enable/disable or hide items based on current selection.
- If menu items are fetched from the server, call the async callback exactly once.

## Related APIs

- [menuButton](menuButton.md)
- [apex.actions](apex.actions.md)
- [actions](actions.md)
- [apex.navigation](apex.navigation.md)
