# cardsRegion

Source: [Oracle APEX 26.1 JavaScript API Reference](https://docs.oracle.com/en/database/oracle/apex/26.1/aexjs/cardsRegion.html)

Status: curated first-pass reference.

## Purpose

`cardsRegion` is the region interface returned by `apex.region(staticId)` for APEX Cards regions. Cards are client-rendered regions backed by the APEX client-side `model` data layer and a `tableModelView` view layer. The interface wraps common paging, refresh, focus, selection, current-card, and model operations.

Use this when client code needs to interact with Cards as data-aware items rather than raw DOM cards.

## API Surface

| Need | Members |
| --- | --- |
| Refresh/focus | `refresh`, `refreshView`, `focus` |
| Paging | `firstPage`, `previousPage`, `nextPage`, `lastPage`, `gotoPage`, `loadMore`, `getPageInfo` |
| Selection | `getSelection`, `setSelection`, `getSelectedRecords`, `setSelectedRecords`, `getSelectedValues`, `setSelectedValues`, `selectAll` |
| Current card | `getCurrentItem`, `setCurrentItem`, `getCurrentItemValue`, `setCurrentItemValue` |
| Data/model | `getModel`, `getRecords` |
| Widget/event access | `widget`, `call`, `on`, `off` |

## Refresh Cards

```javascript
apex.region( "orders_cards" ).refresh().then( function() {
    apex.debug.info( "Cards refreshed." );
} );
```

Use `refreshView` when the data has not changed and only the rendered view needs to update.

```javascript
apex.region( "orders_cards" ).refreshView();
```

## Paging

```javascript
const cards = apex.region( "orders_cards" );

cards.nextPage();
cards.previousPage();
cards.firstPage();
```

Page numbers for `gotoPage` are zero-based:

```javascript
apex.region( "orders_cards" ).gotoPage( 2 );
```

Use `loadMore` only when the Cards region uses a load-more/scroll paging configuration.

## Selection

Assuming the Cards region Static ID is `orders_cards` and selection is enabled:

```javascript
const cards = apex.region( "orders_cards" );
const selectedIds = cards.getSelectedValues() || [];

if ( selectedIds.length === 0 ) {
    apex.message.alert( "Select at least one order." );
}
```

Select cards by record ID:

```javascript
apex.region( "orders_cards" ).setSelectedValues(
    [ "1001", "1002" ],
    true
);
```

For virtual scrolling with persisted selection, prefer `getSelectedRecords` or `getSelectedValues` over `getSelection`, because `getSelection` only returns card elements currently in the DOM.

## Current Card

```javascript
const cards = apex.region( "orders_cards" );
const currentId = cards.getCurrentItemValue();

if ( currentId ) {
    apex.item( "P10_ORDER_ID" ).setValue( currentId );
}
```

Move focus/current item to a known card value:

```javascript
apex.region( "orders_cards" ).setCurrentItemValue( "1001", true );
```

Current-item APIs depend on the Cards region navigation mode supporting focus or selection.

## Work With The Model

```javascript
const cards = apex.region( "orders_cards" );
const model = cards.getModel();
const records = cards.getSelectedRecords() || [];

records.forEach( function( record ) {
    apex.debug.info(
        "Selected order: " + model.getValue( record, "ORDER_ID" )
    );
} );
```

The model returned by `getModel` can change over time. Do not keep it indefinitely; reacquire it when needed.

## Selection Change Handler

```javascript
apex.jQuery( "#orders_cards" ).on( "apexselectionchange", function() {
    const selected = apex.region( "orders_cards" ).getSelectedValues() || [];

    apex.item( "P10_SELECTED_COUNT" ).setValue( String( selected.length ), null, true );
} );
```

## Safety Notes

- Give the Cards region a stable Static ID.
- Selection and current-card methods return `null` or `-1` when the feature is not enabled or the region is not initialized.
- `getSelection` only sees DOM elements currently rendered.
- Treat record IDs sent back to PL/SQL as untrusted; re-authorize on the server.
- Use the Cards interface before reaching into `tableModelView` internals.

## Related APIs

- [region](region.md) and [apex.region](apex.region.md) for generic region APIs.
- [apex.model](apex.model.md) and [model](model.md) for model record access.
- [tableModelView](tableModelView.md) for lower-level view behavior.
- [facetsRegion](facetsRegion.md) for filtering Cards regions.
