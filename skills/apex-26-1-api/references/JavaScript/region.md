# region

Source: [Oracle APEX 26.1 JavaScript API Reference](https://docs.oracle.com/en/database/oracle/apex/26.1/aexjs/region.html)

Status: curated first-pass reference.

## Purpose

`region` is the client-side interface returned by `apex.region("static_id")`. It gives APEX-aware access to region refresh, focus, DOM element, parent/detail relationships, faceted-search integration, region widgets, and custom region plug-in behavior.

This page documents the region interface itself. Use [apex.region](apex.region.md) for namespace functions such as `apex.region.create`, `destroy`, `findClosest`, and `isRegion`.

## When To Use

Use the region interface when code needs to refresh or interact with a region by Static ID, especially from buttons, Dynamic Actions, Ajax callbacks, and custom region plug-ins.

Common tasks:

- Refresh a report, chart, Cards, Interactive Report, or custom region.
- Keep an Interactive Report on the current page while refreshing.
- Focus a region after an action.
- Access a widget-backed region such as Interactive Grid.
- Register custom region behavior from a plug-in.
- Connect a custom region to Faceted Search or Smart Filters.

## API Surface

| Need | Members |
| --- | --- |
| DOM and identity | `element`, `type`, `widgetName` |
| Region relationships | `parentRegionId`, `filterRegionId` |
| Refresh/focus | `refresh`, `focus`, `alternateLoadingIndicator` |
| Widget-backed regions | `widget`, `call`, `on`, `off` |

## Refresh Region

```javascript
const orders = apex.region( "orders" );

orders.refresh().then( function() {
    apex.debug.info( "Orders refreshed." );
} );
```

For Interactive Report, pass `true` when you want to keep current pagination/scroll behavior where supported:

```javascript
apex.region( "orders_ir" ).refresh( true );
```

Not all regions return meaningful data from the refresh promise. Use it as a completion signal.

## Refresh After Ajax

```javascript
apex.server.process( "SAVE_ORDER", {
    x01: $v( "P10_ORDER_ID" ),
    pageItems: "#P10_STATUS,#P10_OWNER"
} ).done( function() {
    apex.region( "orders" ).refresh();
} ).fail( function( jqXHR, textStatus, errorThrown ) {
    apex.debug.error( textStatus, errorThrown );
} );
```

Use `pageItems` when the Ajax process needs current page item session state.

## Widget-Backed Region

Some regions expose a jQuery UI style widget. Interactive Grid is a common example.

```javascript
const ig = apex.region( "emp" );
const selectedRecords = ig.call( "getSelectedRecords" );

if ( selectedRecords.length === 0 ) {
    apex.message.alert( "Select at least one row." );
}
```

`call` is a shorthand for invoking widget methods. If you need direct widget access:

```javascript
const widget$ = apex.region( "emp" ).widget();

if ( widget$ ) {
    widget$.interactiveGrid( "getActions" ).invoke( "selection-add-row" );
}
```

Check the region-specific interface page before using widget methods.

## Custom Region Plug-In Interface

Assuming a region plug-in render callback outputs `<div id="task_board">...</div>` and passes an Ajax identifier into JavaScript:

```javascript
apex.region.create( "task_board", {
    type: "taskBoard",
    ajaxIdentifier: "PLUGIN_AJAX_IDENTIFIER",

    refresh: function() {
        const region = this;

        return apex.server.plugin(
            region.ajaxIdentifier,
            {},
            {
                refreshObject: region.element
            }
        ).done( function( data ) {
            region.element.find( ".task-board-body" ).html( data.html );
        } );
    },

    focus: function() {
        this.element.find( ".task-board-search" ).trigger( "focus" );
    }
} );
```

After registration, app code can use the same API as native regions:

```javascript
apex.region( "task_board" ).refresh();
apex.region( "task_board" ).focus();
```

## Faceted Search Or Smart Filters

For a custom region that should refresh with a Faceted Search or Smart Filters region, provide the filter region DOM ID.

```javascript
apex.region.create( "task_cards", {
    type: "taskCards",
    filterRegionId: "task_facets",

    refresh: function() {
        return apex.server.plugin(
            this.ajaxIdentifier,
            {},
            { refreshObject: this.element }
        );
    }
} );
```

When a refresh callback returns a promise, APEX can coordinate locking/unlocking with the filter region.

## Loading Indicator Placement

Use `alternateLoadingIndicator` in advanced custom regions where the default item or region spinner would be placed poorly, such as editable grids or virtualized layouts.

```javascript
apex.region.create( "task_board", {
    type: "taskBoard",

    alternateLoadingIndicator: function( element, loadingIndicator$ ) {
        return this.element.find( ".task-board-toolbar" ).append( loadingIndicator$ );
    }
} );
```

Return the loading indicator jQuery object you inserted, or `null` if the region has no better location.

## Safety Notes

- Give regions a stable Static ID and use that ID with `apex.region`.
- Prefer `region.refresh()` over triggering low-level DOM refresh events.
- Check whether a region is widget-backed before using `widget` or `call`.
- Keep custom `refresh` methods promise-aware so APEX can coordinate loading states.
- Clean up custom regions with `apex.region.destroy` if the DOM is removed dynamically.
- Do not update a region with unescaped HTML from untrusted sources.

## Related APIs

- [apex.region](apex.region.md) for namespace functions.
- [APEX_PLUGIN](../PLSQL/APEX_PLUGIN.md) for server-side region plug-in callback types.
- [APEX_PLUGIN_UTIL](../PLSQL/APEX_PLUGIN_UTIL.md) for region plug-in helpers.
- [apex.server](apex.server.md) for Ajax refresh callbacks.
- [interactiveGrid](interactiveGrid.md), [interactiveReportRegion](interactiveReportRegion.md), [cardsRegion](cardsRegion.md), and [facetsRegion](facetsRegion.md) for specialized region APIs.
