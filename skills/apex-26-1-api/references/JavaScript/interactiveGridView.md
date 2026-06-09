# interactiveGridView

Source: [Oracle APEX 26.1 JavaScript API Reference](https://docs.oracle.com/en/database/oracle/apex/26.1/aexjs/interactiveGridView.html)

Status: curated first-pass reference.

## Purpose

`interactiveGridView` is the view interface returned by `interactiveGrid` methods such as `getCurrentView` and `getViews`. It exposes the view model, view DOM, selected records, context-record lookup, and view metadata.

Use this page when code already has an Interactive Grid region and needs to work with a specific rendered view, most often the `grid` view.

## When To Use

Use `interactiveGridView` when:

- Client code needs the current IG model.
- You need selected records from a specific view.
- A click target inside the view must be mapped back to its model record.
- Code needs to work differently for grid, icon, detail, chart, or single-row views.

For region-wide actions such as save, refresh, or toolbar changes, start with `interactiveGrid`.

## Access Pattern

Assuming an Interactive Grid region with Static ID `orders_ig`:

```javascript
const ig$ = apex.region( "orders_ig" ).widget();
const view = ig$.interactiveGrid( "getViews", "grid" );
const model = view.model;
```

Use `getCurrentView` when the code should follow the user's active view:

```javascript
const currentView = apex.region( "orders_ig" )
    .widget()
    .interactiveGrid( "getCurrentView" );
```

## Selected Records In A View

```javascript
const view = apex.region( "orders_ig" )
    .widget()
    .interactiveGrid( "getViews", "grid" );

const records = view.getSelectedRecords();

records.forEach( function( record ) {
    apex.debug.info(
        "Selected order: %s",
        view.model.getValue( record, "ORDER_ID" )
    );
} );
```

Selection must be enabled for the view. Check for an empty array before assuming the user selected rows.

## Context Record From A Click Target

Assuming a custom button with class `js-order-row-action` is rendered inside each grid row:

```javascript
apex.jQuery( "#orders_ig" ).on( "click", ".js-order-row-action", function() {
    const view = apex.region( "orders_ig" )
        .widget()
        .interactiveGrid( "getViews", "grid" );

    const records = view.getContextRecord( this );

    if ( records.length ) {
        apex.item( "P20_ORDER_ID" ).setValue(
            view.model.getValue( records[0], "ORDER_ID" )
        );
    }
} );
```

`getContextRecord` returns an array with at most one record for the supplied context element.

## Related APIs

- `interactiveGrid` to retrieve views and invoke region actions.
- `apex.model` for record value access and model subscriptions.
- `grid` for lower-level grid widget behavior used by IG grid view.

## API Surface

| Member | Parameters | Returns |
| --- | --- | --- |
| `cssClass` | None documented | Not documented |
| `icon` | None documented | Not documented |
| `internalIdentifier` | None documented | Not documented |
| `model` | None documented | Not documented |
| `modelName` | None documented | Not documented |
| `singleRowMode` | None documented | Not documented |
| `singleRowView$` | None documented | Not documented |
| `title` | None documented | Not documented |
| `view$` | None documented | Not documented |
| `getContextRecord` | `pContext` | Array of model records for the given context element. The array contains at most one item. If array is empty if the given context element does not correspond with a record or the view does not support this method. Type Array |
| `getSelectedRecords` | None documented | Array of model records selected. Type Array |
| `setSelectedRecords` | `pRecords`, `pFocus`, `pNoNotify` | Not documented |

## cssClass

Signature: `cssClass :string`

### Purpose

Use `cssClass` as documented by the `interactiveGridView` module.

### Simple Example

```javascript
interactiveGridView.cssClass;
```

## icon

Signature: `icon :string`

### Purpose

Use `icon` as documented by the `interactiveGridView` module.

### Simple Example

```javascript
interactiveGridView.icon;
```

## internalIdentifier

Signature: `internalIdentifier :string`

### Purpose

Use `internalIdentifier` as documented by the `interactiveGridView` module.

### Simple Example

```javascript
interactiveGridView.internalIdentifier;
```

## model

Signature: `model : model`

### Purpose

The model used by this view.

### Simple Example

```javascript
interactiveGridView.model;
```

## modelName

Signature: `modelName : model.ModelId`

### Purpose

The id of the model used by this view.

### Simple Example

```javascript
interactiveGridView.modelName;
```

## singleRowMode

Signature: `singleRowMode :boolean`

### Purpose

True if the view is currently showing Single Row View and false otherwise. This only applies if the view supports Single Row View (it is undefined otherwise).

### Simple Example

```javascript
interactiveGridView.singleRowMode;
```

## singleRowView$

Signature: `singleRowView$ :jQuery`

### Purpose

The jQuery object for the alternate recordView widget that implements Single Row View. This only applies if the view supports single row view and the feature is configured.

### Simple Example

```javascript
interactiveGridView.singleRowView$;
```

## title

Signature: `title :string`

### Purpose

Use `title` as documented by the `interactiveGridView` module.

### Simple Example

```javascript
interactiveGridView.title;
```

## view$

Signature: `view$ :jQuery`

### Purpose

The jQuery object for the view.

### Simple Example

```javascript
interactiveGridView.view$;
```

## getContextRecord

Signature: `getContextRecord (pContext) &rarr; {Array}`

### Purpose

Use `getContextRecord` as documented by the `interactiveGridView` module.

### Parameters

| Name | Type | Description |
| --- | --- | --- |
| `pContext` | Element | An element within visual DOM representation of a record. |

### Returns

Array of model records for the given context element. The array contains at most one item. If array is empty if the given context element does not correspond with a record or the view does not support this method. Type Array

### Simple Example

```javascript
interactiveGridView.getContextRecord(
    "Example"
);
```

## getSelectedRecords

Signature: `getSelectedRecords () &rarr; {Array}`

### Purpose

Returns the currently selected model records in the view. If there is no selection or the view does not support selection then an empty array is returned.

### Returns

Array of model records selected. Type Array

### Simple Example

```javascript
interactiveGridView.getSelectedRecords();
```

## setSelectedRecords

Signature: `setSelectedRecords (pRecords, pFocus opt , pNoNotify opt )`

### Purpose

Sets the current selection in the view from the given array of model records. Only applies if the view supports selection.

### Parameters

| Name | Type | Description |
| --- | --- | --- |
| `pRecords` | Array |  an array of model records or an array of model record ids as returned by model getRecordId. If this is an empty array then the selection is cleared. |
| `pFocus` | boolean |  if true the first cell/field/item of the selection is given focus. |
| `pNoNotify` | boolean |  if true the selection change event will be suppressed |

### Simple Example

```javascript
interactiveGridView.setSelectedRecords(
    {},
    null,
    null
);
```

## Notes

- Run APEX JavaScript APIs from an APEX page where the `apex` namespace is loaded.
- Treat client-side values as untrusted when they reach PL/SQL.
- Prefer documented APIs over direct DOM or internal widget state when interacting with APEX components.
