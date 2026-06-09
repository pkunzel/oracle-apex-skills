# recordView

Source: [Oracle APEX 26.1 JavaScript API Reference](https://docs.oracle.com/en/database/oracle/apex/26.1/aexjs/recordView.html)

Status: curated first-pass reference.

## Purpose

`recordView` displays or edits one record from an APEX client-side `model`. It is a lower-level form-style view widget with fields, field groups, edit mode, toolbar/actions, and active-record synchronization.

## When To Use

Use it when building custom model-backed record forms. For normal APEX page forms, use declarative page items and processes. For Interactive Grid detail views, prefer the higher-level Interactive Grid APIs unless direct `recordView` access is required.

## API Surface

| Area | Members |
| --- | --- |
| Model/record | `modelName`, `getModel`, `getRecord`, `getActiveRecord`, `getActiveRecordId`, `recordOffset` |
| Fields | `fields`, `fieldGroups`, `getFields`, `fieldElement`, `gotoField`, `refreshFields` |
| Edit mode | `editable`, `alwaysEdit`, `setEditMode`, `inEditMode`, `finishEditing`, `setActiveRecordValue` |
| Actions/toolbar | `actionsContext`, `getActions`, `toolbar`, `getToolbar` |
| Lifecycle | `refresh`, `resize`, `focus`, `lockActive`, `unlockActive` |
| Events | `recordchange`, `modechange` |

## Inspect Current Record

```javascript
const rv$ = apex.jQuery( "#order_record" );
const model = rv$.recordView( "getModel" );
const record = rv$.recordView( "getRecord" );

if ( record ) {
    apex.debug.info( "Order", model.getValue( record, "ORDER_ID" ) );
}
```

## Focus A Field With An Error

```javascript
const recordId = rv$.recordView( "getActiveRecordId" );

if ( recordId ) {
    rv$.recordView( "gotoField", recordId, "CUSTOMER_NAME" );
}
```

## Finish Editing Before Save

```javascript
rv$.recordView( "finishEditing" ).then( function() {
    const model = rv$.recordView( "getModel" );
    const promise = model.save();

    if ( promise ) {
        promise.done( function() {
            apex.message.showPageSuccess( "Saved." );
        } );
    }
} );
```

## Notes

- `fields` define how model fields appear; `elementId` binds editable fields to APEX item elements.
- `getModel()` can return a new model after refresh; avoid stale long-lived references.
- `finishEditing()` synchronizes the active editor back into the model.
- Use `lockActive`/`unlockActive` around async work that must not lose the active row.

## Related APIs

- [model](model.md)
- [apex.model](apex.model.md)
- [tableModelView](tableModelView.md)
- [interactiveGridView](interactiveGridView.md)
