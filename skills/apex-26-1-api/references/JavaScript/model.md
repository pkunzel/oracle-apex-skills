# model

Source: [Oracle APEX 26.1 JavaScript API Reference](https://docs.oracle.com/en/database/oracle/apex/26.1/aexjs/model.html)

Status: curated first-pass reference.

## Purpose

`model` is the interface for an APEX client-side data model instance. It stores records for Interactive Grid, Cards, template reports, table-model views, trees, and other data-driven components. It supports fetching, paging, editing, change tracking, validation metadata, saving, selection state, and tree traversal.

## When To Use

Use it when code already has a model instance from an APEX region/view and needs record values, changed rows, selected records, or controlled edits.

Use [apex.model](apex.model.md) to create/get/release model instances. Use this page for instance methods after you have the model.

## API Surface

| Area | Common members |
| --- | --- |
| Fetch/save | `fetch`, `fetchAll`, `fetchRecords`, `fetchChildNodes`, `save`, `addChangesToSaveRequest` |
| Iterate/read | `forEach`, `forEachInPage`, `recordAt`, `getRecord`, `getRecordId`, `getValue`, `getRecordValue`, `getFieldKey`, `getFieldMetadata` |
| Edit/change | `setValue`, `setRecordValue`, `insertNewRecord`, `copyRecords`, `moveRecords`, `deleteRecords`, `revertRecords`, `clearChanges`, `isChanged`, `getChanges`, `hasErrors`, `getErrors` |
| Permissions | `allowAdd`, `allowEdit`, `allowDelete`, `allowDrag`, `check` |
| Selection | `getSelectedRecords`, `getSelectedCount`, `setSelectionState`, `clearSelection`, `getSelectionState` |
| Metadata/state | `getRecordMetadata`, `metadataChanged`, `setValidity`, `setDisabledState`, `setHiddenState`, `updateVisibility` |
| Tree models | `root`, `parent`, `child`, `childCount`, `hasChildren`, `walkTree` |
| Observation | `subscribe`, `unSubscribe` |
| Transform | `transform` |

## Get Values From Selected IG Records

Assuming Interactive Grid Static ID `emp_ig`:

```javascript
const ig$ = apex.region( "emp_ig" ).widget();
const grid = ig$.interactiveGrid( "getViews", "grid" );
const model = grid.model;

grid.getSelectedRecords().forEach( function( record ) {
    apex.debug.info( {
        empno: model.getValue( record, "EMPNO" ),
        ename: model.getValue( record, "ENAME" )
    } );
} );
```

## Set A Value Safely

```javascript
const record = grid.getSelectedRecords()[0];

if ( record && model.allowEdit( record ) ) {
    const result = model.setValue( record, "STATUS", "APPROVED" );

    if ( result === "DUP" ) {
        apex.message.alert( "Duplicate identity value." );
    }
}
```

## Save Changes Example

For Interactive Grid, prefer the built-in save action:

```javascript
if ( model.isChanged() ) {
    ig$.interactiveGrid( "getActions" ).invoke( "save" );
}
```

For custom model-backed widgets:

```javascript
const promise = model.save();

if ( promise ) {
    promise.done( function() {
        apex.message.showPageSuccess( "Saved." );
    } ).fail( function( error ) {
        apex.debug.error( error );
    } );
}
```

## Subscribe Example

```javascript
const viewId = model.subscribe( {
    viewId: "orders-summary",
    onChange: function( changeType, change ) {
        if ( changeType === "set" || changeType === "delete" ) {
            apex.region( "orders_summary" ).refresh();
        }
    }
} );

// Later:
model.unSubscribe( viewId );
```

## Notes

- Model records can be arrays or objects depending on model shape; use `getValue`/`setValue` rather than assuming shape.
- `setValue` returns status codes such as `"SET"`, `"DUP"`, `"NC"`, or `null`.
- Client-side edits are not trusted until server validation/save succeeds.
- Avoid long-lived model references across region refreshes unless using `apex.model.get`/`release` correctly.

## Related APIs

- [apex.model](apex.model.md)
- [interactiveGrid](interactiveGrid.md)
- [interactiveGridView](interactiveGridView.md)
- [tableModelView](tableModelView.md)
- [treeView](treeView.md)
