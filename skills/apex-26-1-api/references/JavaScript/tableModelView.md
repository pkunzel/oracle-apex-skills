# tableModelView

Source: [Oracle APEX 26.1 JavaScript API Reference](https://docs.oracle.com/en/database/oracle/apex/26.1/aexjs/tableModelView.html)

Status: curated first-pass reference.

## Purpose

`tableModelView` renders an APEX client-side `model` as repeated table/list/icon items. It builds on `tableModelViewBase` and adds templates, item selection/current item handling, optional `iconList` integration, and record/value lookup methods.

## When To Use

Use it for custom model-backed report/list widgets. For declarative APEX Cards, Template Component reports, Interactive Reports, and Interactive Grids, use the region-specific interface first.

## API Surface

| Area | Members |
| --- | --- |
| Templates | `beforeTemplate`, `recordTemplate`, `afterTemplate`, `headerTemplate`, `aggregateTemplate`, `controlBreakTemplate`, `applyTemplateOptions` |
| Model | `modelName`, `getModel`, `getRecords`, `getActiveRecord`, `getActiveRecordId` |
| Selection/current item | `getSelection`, `setSelection`, `getSelectedRecords`, `setSelectedRecords`, `getSelectedValues`, `setSelectedValues`, `getCurrentItem`, `setCurrentItem`, `getCurrentItemValue`, `setCurrentItemValue`, `selectAll` |
| Paging/lifecycle | `firstPage`, `previousPage`, `nextPage`, `lastPage`, `gotoPage`, `loadMore`, `refresh`, `resize`, `getPageInfo`, `fetchAllData` |
| Icon list | `useIconList`, `iconListOptions`, `getIconList` |
| Editing | `editable`, `finishEditing`, `setActiveRecordValue`, `lockActive`, `unlockActive` |
| Events | `selectionchange`, `currentitemchange`, `pagechange` |

## Selection Example

Assuming a custom view widget is initialized on `#orders_view`:

```javascript
const view$ = apex.jQuery( "#orders_view" );
const model = view$.tableModelView( "getModel" );
const records = view$.tableModelView( "getSelectedRecords" ) || [];

records.forEach( function( record ) {
    apex.debug.info( model.getValue( record, "ORDER_ID" ) );
} );
```

## Select By Model Identity

```javascript
view$.tableModelView( "setSelectedValues", [ "1001", "1002" ], true );
```

## Paging Example

```javascript
const pageInfo = view$.tableModelView( "getPageInfo" );

if ( pageInfo && pageInfo.currentPage < pageInfo.totalPages - 1 ) {
    view$.tableModelView( "nextPage" );
}
```

## Notes

- Selected values are model record identities, usually matching `model.getRecordId(record)`.
- Use `refresh()` when the model or templates change; use `resize()` when the container size changes.
- If `useIconList` is true, `getIconList()` returns the nested `iconList` widget instance.
- Template values must be escaped unless they are trusted and deliberately rendered as markup.

## Related APIs

- [tableModelViewBase](tableModelViewBase.md)
- [model](model.md)
- [iconList](iconList.md)
- [cardsRegion](cardsRegion.md)
- [templateReportRegion](templateReportRegion.md)
