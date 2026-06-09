# tableModelViewBase

Source: [Oracle APEX 26.1 JavaScript API Reference](https://docs.oracle.com/en/database/oracle/apex/26.1/aexjs/tableModelViewBase.html)

Status: curated first-pass reference.

## Purpose

`tableModelViewBase` is the shared base interface for APEX model-backed table/list views. It provides common paging, selection persistence, editing synchronization, status/footer behavior, and model access.

## When To Use

Use it to understand methods shared by `grid`, `tableModelView`, Cards/Template Report style views, and other model-backed views. In app code, call methods on the concrete widget or region interface.

## API Surface

| Area | Members |
| --- | --- |
| Model | `modelName`, `getModel`, `getActiveRecord`, `getActiveRecordId`, `setActiveRecordValue` |
| Paging | `pagination`, `getPageInfo`, `firstPage`, `previousPage`, `nextPage`, `lastPage`, `gotoPage`, `loadMore`, `fetchAllData` |
| Editing | `editable`, `autoAddRecord`, `finishEditing`, `hideDeletedRows`, `lockActive`, `unlockActive` |
| Display | `footer`, `hideEmptyFooter`, `stickyFooter`, `stickyTop`, `showNullAs`, `noDataMessage`, `noDataIcon`, `highlights` |
| Selection behavior | `persistSelection`, `loadIncompleteSelection`, `selectionStatusMessageKey` |
| Progress/status | `progressOptions`, `updateStatus` |
| Types | `pageInfo` |

## Page Info Example

```javascript
const view$ = apex.jQuery( "#orders_view" );
const info = view$.tableModelView( "getPageInfo" );

if ( info ) {
    apex.debug.info( "Rows", info.firstOffset, info.lastOffset, info.total );
}
```

## Fetch All Data Example

Use this only when the data set is reasonably small:

```javascript
view$.tableModelView( "fetchAllData", true );
```

## Finish Editing Example

```javascript
view$.tableModelView( "finishEditing" ).then( function() {
    const model = view$.tableModelView( "getModel" );

    if ( model.isChanged() ) {
        model.save();
    }
} );
```

## Notes

- `gotoPage` uses zero-based page numbers.
- `getPageInfo()` returns null when there is no data.
- `fetchAllData()` can be expensive and should not be used casually on large reports.
- If scroll pagination removes DOM records, use persistent selection when selection must survive virtual paging.

## Related APIs

- [tableModelView](tableModelView.md)
- [grid](grid.md)
- [model](model.md)
- [cardsRegion](cardsRegion.md)
- [templateReportRegion](templateReportRegion.md)
