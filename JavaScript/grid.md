# grid

Source: [Oracle APEX 26.1 JavaScript API Reference](https://docs.oracle.com/en/database/oracle/apex/26.1/aexjs/grid.html)

Status: curated first-pass reference.

## Purpose

`grid` is the low-level APEX widget used for editable and selectable grid views, most notably Interactive Grid grid views. It handles columns, cells, paging, selection, editing, clipboard support, and model integration.

## When To Use

Use it when custom code already has the grid view widget instance and needs cell/row selection, edit-mode, paging, column visibility/width, or active-record behavior.

Prefer [interactiveGrid](interactiveGrid.md) and [interactiveGridView](interactiveGridView.md) for normal Interactive Grid code. Use `grid` directly only when the higher-level APIs do not expose the behavior.

## API Surface

| Area | Common members |
| --- | --- |
| Model and active record | `getModel`, `getActiveRecord`, `getActiveRecordId`, `setActiveRecordValue`, `finishEditing` |
| Selection | `getSelection`, `setSelection`, `getSelectedRecords`, `setSelectedRecords`, `getSelectedRanges`, `setSelectedRanges`, `selectAll` |
| Cells and columns | `getCurrentCell`, `setCurrentCell`, `getColumnForCell`, `getColumns`, `hideColumn`, `showColumn`, `freezeColumn`, `unfreezeColumn`, `setColumnWidth`, `moveColumn`, `refreshColumns` |
| Paging | `firstPage`, `previousPage`, `nextPage`, `lastPage`, `gotoPage`, `loadMore`, `getPageInfo` |
| Editing | `setEditMode`, `inEditMode`, `copyDownSelection`, `fillSelection`, `lockActive`, `unlockActive` |
| Lifecycle | `refresh`, `resize`, `fetchAllData`, `focus` |
| Events | `selectionchange`, `currentcellchange`, `pagechange`, `sortchange`, `modechange`, `columnresize`, `columnreorder` |

## Getting A Grid View

Assuming an Interactive Grid region Static ID `orders_ig`:

```javascript
const ig$ = apex.region( "orders_ig" ).widget();
const gridView = ig$.interactiveGrid( "getViews", "grid" );
const grid$ = gridView.view$;
```

## Selected Rows Example

```javascript
const model = grid$.grid( "getModel" );
const records = grid$.grid( "getSelectedRecords" );

records.forEach( function( record ) {
    apex.debug.info( "Order", model.getValue( record, "ORDER_ID" ) );
} );
```

## Edit And Save Example

Prefer the built-in Interactive Grid save action, but finish editing first if your code has just changed a cell:

```javascript
grid$.grid( "finishEditing" ).then( function() {
    ig$.interactiveGrid( "getActions" ).invoke( "save" );
} );
```

## Column Example

```javascript
grid$.grid( "hideColumn", "INTERNAL_NOTE" );
grid$.grid( "setColumnWidth", "CUSTOMER_NAME", 220 );
grid$.grid( "refreshColumns" );
```

## Notes

- Methods are called on the widget jQuery object: `grid$.grid( "methodName", args... )`.
- The grid model can change after refresh; avoid storing long-lived model references unless you manage release semantics through `apex.model`.
- For row selection, use records and model values rather than scraping DOM text.
- For editable Interactive Grids, prefer the region actions (`save`, `selection-add-row`, and friends) when available.

## Related APIs

- [interactiveGrid](interactiveGrid.md)
- [interactiveGridView](interactiveGridView.md)
- [model](model.md)
- [apex.model](apex.model.md)
