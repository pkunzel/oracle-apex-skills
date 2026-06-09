# apex.item

Source: [Oracle APEX 26.1 JavaScript API Reference](https://docs.oracle.com/en/database/oracle/apex/26.1/aexjs/apex.item.html)

Status: curated first-pass reference.

## Purpose

`apex.item` contains global helpers related to APEX page items. There are two closely related concepts:

- `apex.item( "P1_ITEM" )` returns an item interface for one item.
- `apex.item.create(...)`, `apex.item.addAttachHandler(...)`, and `apex.item.isItem(...)` support item plug-in development and item interface registration.

For normal page code, most developers use `apex.item( itemName )`, `$v`, and `$s`. Use the namespace functions on this page mostly when building plug-in item types or checking whether an item has an explicit APEX item interface.

## Function Summary

| Function | Returns | Use |
| --- | --- | --- |
| `apex.item.addAttachHandler(handler)` | none | Register an item plug-in attach handler that runs when APEX initializes page content. |
| `apex.item.create(itemId, itemImpl)` | object or deferred | Register or customize an item interface for an item plug-in. |
| `apex.item.isItem(itemId)` | boolean | Check whether an element has an explicit APEX item interface. |

## `addAttachHandler(handler)`

Use this only for item plug-ins. The handler receives a jQuery context and should find item plug-in DOM nodes inside that context, then call `apex.item.create` for each item.

Simple example:

```javascript
apex.item.addAttachHandler( function( context$ ) {
    apex.jQuery( ".my-rating-item", context$ ).each( function() {
        apex.item.create( this.id, {
            item_type: "MY_RATING"
        } );
    } );
} );
```

More complete plug-in attach pattern:

```javascript
( function( $, item ) {
    function attachRatings( context$ ) {
        $( ".my-rating-item", context$ ).each( function() {
            const node = this;

            item.create( node.id, {
                item_type: "MY_RATING",
                getValue: function() {
                    return node.dataset.value || "";
                },
                setValue: function( value ) {
                    node.dataset.value = value;
                    $( node ).trigger( "change" );
                },
                isChanged: function() {
                    return node.dataset.value !== node.dataset.originalValue;
                }
            } );
        } );
    }

    item.addAttachHandler( attachRatings );
} )( apex.jQuery, apex.item );
```

## `create(itemId, itemImpl)`

Use this to define the client behavior for an item plug-in. APEX item APIs, Dynamic Actions, validation, focus handling, and page-change detection depend on consistent item behavior.

Common `itemImpl` properties:

- `item_type`: string identifying the item type.
- `getValue`: return the current value.
- `setValue`: set the value.
- `displayValueFor`: map a value to a display value.
- `disable` and `enable`: handle disabled state.
- `isDisabled`: report disabled state.
- `show` and `hide`: show or hide compound item UI.
- `isChanged`: support Warn on Unsaved Changes.
- `getValidity` and `getValidationMessage`: integrate custom validity.
- `setFocusTo`: element or function used for focus.
- `setStyleTo`: element or function used for style updates.
- `loadingIndicator`: place item-level loading indicators.
- `nullValue`: define the null return value for LOV-style items.
- `storageType` and `separator`: describe multi-value serialization.
- `delayLoading`: delay APEX page-load completion until the returned deferred is resolved.

Simple example:

```javascript
apex.item.create( "P10_COLOR", {
    item_type: "COLOR_SWATCH",
    getValue: function() {
        return apex.jQuery( "#P10_COLOR" ).attr( "data-value" ) || "";
    },
    setValue: function( value ) {
        apex.jQuery( "#P10_COLOR" )
            .attr( "data-value", value )
            .css( "background-color", value )
            .trigger( "change" );
    }
} );
```

Function-based implementation example:

```javascript
apex.item.create( "P10_RATING", function( baseItem ) {
    const item$ = apex.jQuery( "#P10_RATING" );

    baseItem.item_type = "STAR_RATING";
    baseItem.getValue = function() {
        return item$.attr( "data-rating" ) || "";
    };
    baseItem.setValue = function( value, displayValue, suppressChangeEvent ) {
        item$.attr( "data-rating", value );
        item$.find( "[data-star]" ).toggleClass( "is-active", function() {
            return Number( this.dataset.star ) <= Number( value );
        } );

        if ( !suppressChangeEvent ) {
            item$.trigger( "change" );
        }
    };
    baseItem.clear = function() {
        baseItem.setValue( "", null, false );
    };
} );
```

Delayed initialization example:

```javascript
const ready = apex.item.create( "P10_TAGS", {
    item_type: "REMOTE_TAGS",
    delayLoading: true,
    getValue: function() {
        return apex.jQuery( "#P10_TAGS" ).val();
    }
} );

apex.server.process( "INIT_TAGS" ).always( function() {
    ready.resolve();
} );
```

Important note: if `delayLoading` is used, always resolve the deferred. Failing to resolve it can block APEX page initialization logic.

## `isItem(itemId)`

Use this to check whether an item has an explicit APEX item interface created for it.

Simple example:

```javascript
if ( apex.item.isItem( "P10_STATUS" ) ) {
    apex.item( "P10_STATUS" ).hide();
}
```

Practical defensive helper:

```javascript
function setItemIfPresent( itemName, value ) {
    if ( apex.item.isItem( itemName ) || document.getElementById( itemName ) ) {
        apex.item( itemName ).setValue( value );
    }
}

setItemIfPresent( "P10_STATUS", "OPEN" );
```

## Normal Page Usage

Most app-level code does not call `apex.item.create`. It uses the item interface returned by `apex.item(...)`:

```javascript
const statusItem = apex.item( "P10_STATUS" );

statusItem.setValue( "APPROVED" );
statusItem.disable();
statusItem.show();
```

For simple values, APEX legacy helpers are still common:

```javascript
const oldValue = $v( "P10_STATUS" );
$s( "P10_STATUS", "CLOSED" );
```

## Safety And Quality Notes

- Use `apex.item.create` for plug-in item types so APEX Dynamic Actions and validation can interact with the item.
- For compound controls, override focus, style, show, hide, enable, and disable behavior.
- Implement `isChanged` if the item stores state outside native form controls.
- Trigger `change` when `setValue` should notify Dynamic Actions, unless the caller suppresses the event.
- Avoid long asynchronous initialization; if `delayLoading` is necessary, resolve the deferred reliably.
- For app-level code, prefer the item interface over direct DOM manipulation when item state matters to APEX.

