# item

Source: [Oracle APEX 26.1 JavaScript API Reference](https://docs.oracle.com/en/database/oracle/apex/26.1/aexjs/item.html)

Status: curated first-pass reference.

## Purpose

`item` is the client-side interface returned by `apex.item("P1_ITEM")`. It gives APEX-aware access to page item and column item values, display values, focus behavior, disabled state, validation state, change tracking, refresh behavior, and delayed initialization.

This page documents the item interface itself. Use [apex.item](apex.item.md) for the namespace functions, especially `apex.item.create` for custom item plug-ins.

## When To Use

Use the item interface when code needs to work with item state in a way that APEX understands.

Common tasks:

- Get or set a page item value.
- Suppress or intentionally fire the item change event.
- Work with multi-value items such as Shuttle or multi-select lists.
- Focus, show, hide, enable, or disable an item.
- Check browser/APEX validity state.
- Implement a custom item plug-in interface with `apex.item.create`.

## API Surface

| Need | Members |
| --- | --- |
| Identity and DOM | `id`, `node`, `element`, `item_type` |
| Values | `value`, `getValue`, `setValue`, `displayValueFor`, `addValue`, `removeValue`, `getSeparator`, `getMultiValueStorage` |
| State | `isChanged`, `isEmpty`, `isDisabled`, `getValidity`, `getValidationMessage`, `isReady`, `whenReady`, `hasDisplayValue` |
| UI behavior | `setFocus`, `setStyle`, `refresh`, `show`, `hide`, `enable`, `disable` |

## Read And Set Values

```javascript
const statusItem = apex.item( "P10_STATUS" );

if ( !statusItem.isDisabled() ) {
    const currentStatus = statusItem.getValue();

    if ( currentStatus === "NEW" ) {
        statusItem.setValue( "IN_PROGRESS" );
    }
}
```

The `value` property is shorthand for `getValue` and `setValue`:

```javascript
apex.item( "P10_STATUS" ).value = "APPROVED";
const status = apex.item( "P10_STATUS" ).value;
```

Use the methods when you need the optional `displayValue` or `suppressChangeEvent` arguments.

## Suppress Change Events

Use the third `setValue` argument when a programmatic update should not fire Dynamic Actions bound to change.

```javascript
apex.item( "P10_STATUS" ).setValue( "DRAFT", null, true );
```

For values that should trigger Dynamic Actions, omit the third argument or pass `false`.

## Multi-Value Items

`getValue` can return either a string or an array depending on item type and configuration.

```javascript
const tagsItem = apex.item( "P10_TAGS" );
const tags = tagsItem.getValue();

const selectedTags = Array.isArray( tags )
    ? tags
    : apex.util.toArray( tags, tagsItem.getSeparator() || ":" );
```

Use `addValue` and `removeValue` only for item types that support those methods.

```javascript
const reviewers = apex.item( "P10_REVIEWERS" );

if ( reviewers.addValue ) {
    reviewers.addValue( "JSMITH", "John Smith" );
}
```

## Display Values

Use `displayValueFor` when an item has separate return and display values, such as select lists or Popup LOVs.

```javascript
const label = apex.item( "P10_OWNER" ).displayValueFor( "JSMITH" );

apex.jQuery( "#owner_label" ).text( label );
```

For multi-value items, pass an array if the item supports multiple values.

## Validation State

```javascript
const item = apex.item( "P10_EMAIL" );
const validity = item.getValidity();

if ( !validity.valid ) {
    apex.message.showErrors( [ {
        type: "error",
        location: "inline",
        pageItem: "P10_EMAIL",
        message: item.getValidationMessage( "Email" ),
        unsafe: false
    } ] );
}
```

The returned object follows the HTML5 `ValidityState` pattern where possible. A custom plug-in item should at least provide a `valid` property when it implements custom validation.

## Delayed Items

Some items initialize asynchronously. Check readiness near page load, or use `whenReady` if the item provides it.

```javascript
const chartItem = apex.item( "P10_COMPLEX_ITEM" );

if ( chartItem.whenReady ) {
    chartItem.whenReady().then( function() {
        chartItem.setValue( "READY" );
    } );
} else if ( chartItem.isReady() ) {
    chartItem.setValue( "READY" );
}
```

Dynamic Actions that run on page load wait for item loading, so this is mostly useful for custom initialization code.

## Custom Item Plug-In Interface

Assuming a plug-in render callback outputs a root element with ID `P10_RATING` and clickable elements with `data-rating` attributes:

```javascript
apex.item.create( "P10_RATING", function( baseItem ) {
    const item$ = apex.jQuery( "#P10_RATING" );

    baseItem.item_type = "RATING";

    baseItem.getValue = function() {
        return item$.attr( "data-value" ) || "";
    };

    baseItem.setValue = function( value, displayValue, suppressChangeEvent ) {
        item$.attr( "data-value", value || "" );

        item$.find( "[data-rating]" ).toggleClass( "is-active", function() {
            return Number( apex.jQuery( this ).attr( "data-rating" ) ) <= Number( value || 0 );
        } );

        if ( !suppressChangeEvent ) {
            item$.trigger( "change" );
        }
    };

    baseItem.isEmpty = function() {
        return baseItem.getValue() === "";
    };

    baseItem.setFocus = function() {
        item$.find( "[data-rating]" ).first().trigger( "focus" );
    };

    baseItem.disable = function() {
        item$.attr( "aria-disabled", "true" ).addClass( "is-disabled" );
    };

    baseItem.enable = function() {
        item$.removeAttr( "aria-disabled" ).removeClass( "is-disabled" );
    };
} );
```

Plug-ins that wrap non-native controls should implement enough of the item interface for Dynamic Actions, validation, focus handling, and change tracking to work predictably.

## Safety Notes

- Use `setValue` rather than direct DOM changes when APEX state, Dynamic Actions, or validations must notice the change.
- Treat client values as untrusted on the server.
- Suppress change events only when the update is internal and should not trigger business logic.
- Check for method existence before using optional item-type methods such as `addValue`, `removeValue`, or `whenReady`.
- For custom plug-ins, trigger `change` when a user action changes the value.
- Do not use deprecated `show(true)` or `hide(true)` table-row behavior for modern grid-layout pages.

## Related APIs

- [apex.item](apex.item.md) for namespace functions and `apex.item.create`.
- [APEX_PLUGIN](../PLSQL/APEX_PLUGIN.md) for server-side item plug-in callback types.
- [APEX_PLUGIN_UTIL](../PLSQL/APEX_PLUGIN_UTIL.md) for server-side item rendering helpers.
- [apex.message](apex.message.md) for validation and message display.
- [apex.server](apex.server.md) for saving item values through Ajax.
