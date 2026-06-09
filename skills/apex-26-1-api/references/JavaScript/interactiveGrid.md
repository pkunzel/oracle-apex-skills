# interactiveGrid

Source: [Oracle APEX 26.1 JavaScript API Reference](https://docs.oracle.com/en/database/oracle/apex/26.1/aexjs/interactiveGrid.html)

Status: curated first-pass reference.

## Purpose

`interactiveGrid` is the client-side widget API behind an Interactive Grid region. Use it through `apex.region( staticId ).widget().interactiveGrid( ... )` to access IG actions, selected records, views, toolbar metadata, refresh/resize behavior, and edit-mode behavior.

Use `APEX_IG` PL/SQL for server-side saved report management. Use this JavaScript API for browser runtime behavior.

## When To Use

Use `interactiveGrid` when:

- A button or Dynamic Action needs to save, refresh, or open an IG action.
- Client code needs selected model records.
- You need the current view or a named view such as `grid`.
- Toolbar buttons or actions need customization.
- Code needs to coordinate master-detail grids on the client.

Avoid manipulating IG DOM rows directly when a widget method or model API exists.

## Access Pattern

Assuming an Interactive Grid region with Static ID `orders_ig`:

```javascript
const ig$ = apex.region( "orders_ig" ).widget();

ig$.interactiveGrid( "getActions" ).invoke( "save" );
```

Open the built-in download dialog:

```javascript
apex.region( "orders_ig" )
    .widget()
    .interactiveGrid( "getActions" )
    .invoke( "show-download-dialog" );
```

## Selected Records

Assuming the grid query includes columns `ORDER_ID` and `STATUS`:

```javascript
const ig$ = apex.region( "orders_ig" ).widget();
const records = ig$.interactiveGrid( "getSelectedRecords" ) || [];
const view = ig$.interactiveGrid( "getCurrentView" );
const model = view.model;

records.forEach( function( record ) {
    apex.debug.info(
        "Selected order %s with status %s",
        model.getValue( record, "ORDER_ID" ),
        model.getValue( record, "STATUS" )
    );
} );
```

`getSelectedRecords` can return `null` if the current view does not support selection.

## Edit Mode And Refresh

```javascript
const actions = apex.region( "orders_ig" )
    .widget()
    .interactiveGrid( "getActions" );

actions.set( "edit", true );
apex.region( "orders_ig" ).refresh();
```

Use built-in actions where possible. They preserve IG state and accessibility behavior better than direct DOM operations.

## Related APIs

- `interactiveGridView` for the view object returned by `getCurrentView` or `getViews`.
- `apex.model` for record values and model operations.
- `APEX_IG` for server-side saved report state.
- `APEX_REGION` for PL/SQL query/export of region data.

## API Surface

| Member | Parameters | Returns |
| --- | --- | --- |
| `defaultDetailViewOptions` | None documented | Not documented |
| `defaultGridViewOptions` | None documented | Not documented |
| `defaultIconViewOptions` | None documented | Not documented |
| `defaultModelOptions` | None documented | Not documented |
| `defaultSingleRowOptions` | None documented | Not documented |
| `editable` | None documented | Not documented |
| `features` | None documented | Not documented |
| `initActions` | None documented | Not documented |
| `initialSelection` | None documented | Not documented |
| `reportSettingsArea` | None documented | Not documented |
| `saveLoadingIndicator` | None documented | Not documented |
| `saveLoadingIndicatorPosition` | None documented | Not documented |
| `text` | None documented | Not documented |
| `toolbar` | None documented | Not documented |
| `toolbarData` | None documented | Not documented |
| `trackParentSelection` | None documented | Not documented |
| `modechange` | None documented | Not documented |
| `reportchange` | None documented | Not documented |
| `reportsettingschange` | None documented | Not documented |
| `save` | None documented | Not documented |
| `selectionchange` | None documented | Not documented |
| `viewchange` | None documented | Not documented |
| `viewmodelcreate` | None documented | Not documented |
| `focus` | None documented | Not documented |
| `getActions` | None documented | the actions context Type apex.actions Example |
| `getCurrentView` | None documented | View interface. Type interactiveGridView |
| `getCurrentViewId` | None documented | view id. Type string |
| `getSelectedRecords` | None documented | array of records from the model corresponding to the selected rows/records Returns empty array if there is no selection. Returns null if the current view doesn't support selection. Type Array |
| `getToolbar` | None documented | jQuery object of the interactive grid toolbar or null if there is no toolbar Type jQuery |
| `getViews` | `pViewId` | View interface. Type interactiveGridView |
| `gotoCell` | `pModelInstanceId`, `pRecordId`, `pColumn` | Not documented |
| `refresh` | None documented | Not documented |
| `resize` | None documented | Not documented |
| `setMasterRecord` | `pMasterModel`, `pMasterRecord` | Not documented |
| `setSelectedRecords` | `pRecords`, `pFocus`, `pNoNotify` | Not documented |
| `copyDefaultToolbar` | None documented | Returns an array containing a copy of the default Interactive Grid toolbar metadata. Type interactiveGrid.toolbarData Examples The following example shows how to make the download dialog more easily accessible, by adding a button to the toolbar to open it. This example is similar to the previous one except that the Download menu item is removed from the Actions menu and inserted as a toolbar button after the Actions menu button. Type Definitions |
| `toolbarData` | None documented | Not documented |

## defaultDetailViewOptions

Signature: `defaultDetailViewOptions :Object`

### Purpose

This option allows passing options to the underlying tableModelView widget for detail view. See tableModelView for the options it supports. Interactive Grid may override some of these settings. Some settings may interfere with the proper functioning of Interactive Grid.

### Simple Example

```javascript
interactiveGrid.defaultDetailViewOptions;
```

## defaultGridViewOptions

Signature: `defaultGridViewOptions :Object`

### Purpose

This option allows passing options to the underlying grid widget for grid view. See grid for the options it supports. Interactive Grid may override some of these settings. Some settings may interfere with the proper functioning of Interactive Grid.

### Simple Example

```javascript
interactiveGrid.defaultGridViewOptions;
```

## defaultIconViewOptions

Signature: `defaultIconViewOptions :Object`

### Purpose

This option allows passing options to the underlying tableModelView widget for icon view. See tableModelView for the options it supports. Interactive Grid may override some of these settings. Some settings may interfere with the proper functioning of Interactive Grid.

### Simple Example

```javascript
interactiveGrid.defaultIconViewOptions;
```

## defaultModelOptions

Signature: `defaultModelOptions :Object`

### Purpose

This option allows passing options not explicitly set by Interactive Grid to the underlying view models. See apex.model.create for the supported model options. Some settings may interfere with the proper functioning of Interactive Grid.

### Simple Example

```javascript
interactiveGrid.defaultModelOptions;
```

## defaultSingleRowOptions

Signature: `defaultSingleRowOptions :Object`

### Purpose

This option allows passing options to the underlying recordView widget for the single row view of grid view. See recordView for the options it supports. Interactive Grid may override some of these settings. Some settings may interfere with the proper functioning of Interactive Grid.

### Simple Example

```javascript
interactiveGrid.defaultSingleRowOptions;
```

## editable

Signature: `editable :boolean`

### Purpose

Initialize the interactiveGrid with the editable option specified in the Interactive Grid region JavaScript Initialization Code attribute.

### Simple Example

```javascript
interactiveGrid.editable;
```

## features

Signature: `features :Object`

### Purpose

Controls which general features of the Interactive Grid are enabled.

### Option/Object Properties

| Name | Type | Description |
| --- | --- | --- |
| `filter` | boolean | Controls if filtering is available for the Interactive Grid |
| `flashback` | boolean | Controls if flashback is available for the Interactive Grid |

### Simple Example

```javascript
interactiveGrid.features;
```

## initActions

Signature: `initActions :function`

### Purpose

Allows you to add or modify actions . function( actions ) Function has one argument 'actions', which is the Interactive Grid's action's interface object. Note: Within the function, the actions.context property can be used to access the main interactiveGrid widget element (the context for the actions).

### Simple Example

```javascript
interactiveGrid.initActions;
```

## initialSelection

Signature: `initialSelection :boolean`

### Purpose

Controls if the Interactive Grid has an initial selection.

### Simple Example

```javascript
interactiveGrid.initialSelection;
```

## reportSettingsArea

Signature: `reportSettingsArea :boolean`

### Purpose

Controls if the report settings area displays for the Interactive Grid. The report settings area shows information such as filters, control breaks and highlights applied to the current report. Pass false to hide the report settings area, however you should not rely on this being set to true to display report settings, it just needs to evaluate to truthy.

### Simple Example

```javascript
interactiveGrid.reportSettingsArea;
```

## saveLoadingIndicator

Signature: `saveLoadingIndicator :string|jQuery|Element|function`

### Purpose

A loading indicator suitable for the apex.server.plugin loadingIndicator option to be used during the save action.

### Simple Example

```javascript
interactiveGrid.saveLoadingIndicator;
```

## saveLoadingIndicatorPosition

Signature: `saveLoadingIndicatorPosition :string`

### Purpose

A loading indicator position suitable for the apex.server.plugin loadingIndicatorPosition option to be used during the save action.

### Simple Example

```javascript
interactiveGrid.saveLoadingIndicatorPosition;
```

## text

Signature: `text :object`

### Purpose

Defines various text messages. Most messages come from declarative attributes. If there is no value given for a declarative attribute the default may come from an APEX runtime message.

### Option/Object Properties

| Name | Type | Description |
| --- | --- | --- |
| `addRowButton` | string | The label for the toolbar add row button. The default comes from text message APEX.IG.ADD_ROW. |
| `noDataFound` | string | The message to display when there are no results. The default comes from text message APEX.IG.NO_DATA_FOUND. |
| `noParentSelected` | string | The message to display when the parent region, in a master-detail configuration, does not have exactly one row selected. The default comes from text message APEX.IG.SELECT_1_ROW_IN_MASTER. |
| `help` | string | The first help text to display as part of help dialog. There is no default. |

### Simple Example

```javascript
interactiveGrid.text;
```

## toolbar

Signature: `toolbar :Object`

### Purpose

Controls which functionality of the default Interactive Grid toolbar is displayed. If false or null, there will be no toolbar.

### Option/Object Properties

| Name | Type | Description |
| --- | --- | --- |
| `actionMenu` | boolean | Hide or show the actions menu. |
| `columnSelection` | boolean | Hide or show the column selection menu, to allow column-specific searches. Note: Ignored if toolbar.searchField is false . |
| `editing` | boolean | Hide or show the edit button. Note: This does not prevent the Interactive Grid from being edited, merely hides the button from the toolbar. If you wish to control whether the Interactive Grid can be edited at all, please see the interactiveGrid#editable option. |
| `reset` | boolean | Hide or show the reset button. |
| `save` | boolean | Hide or show the save button. |
| `savedReports` | boolean | Hide or show the select list showing any saved reports. |
| `searchField` | boolean | Hide or show the search controls (affects the column selection menu, search input field and go button). |

### Simple Example

```javascript
interactiveGrid.toolbar;
```

## toolbarData

Signature: `toolbarData :Array`

### Purpose

Contains the metadata for the toolbar displayed at the top of the Interactive Grid. If no value is provided, the toolbar defaults to the standard toolbar required in APEX.

### Simple Example

```javascript
interactiveGrid.toolbarData;
```

## trackParentSelection

Signature: `trackParentSelection :boolean`

### Purpose

Determines if a detail Interactive Grid will change the detail instance automatically when the selection in the master region changes. When true, the default, this detail Interactive Grid creates a selection change event handler for the master region and updates the data shown in this region to correspond to the selected row of the master region. Set to false to manually control the detail instance shown in this region using the interactiveGrid#setMasterRecord method.

### Simple Example

```javascript
interactiveGrid.trackParentSelection;
```

## modechange

Signature: `modechange`

### Purpose

Use `modechange` as documented by the `interactiveGrid` module.

### Option/Object Properties

| Name | Type | Description |
| --- | --- | --- |
| `event` | event | jQuery event object. |
| `data` | Object | Additional data for the event. Properties Name Type Description |
| `editMode` | boolean | The new edit mode. |

### Simple Example

```javascript
interactiveGrid.modechange();
```

## reportchange

Signature: `reportchange`

### Purpose

Use `reportchange` as documented by the `interactiveGrid` module.

### Option/Object Properties

| Name | Type | Description |
| --- | --- | --- |
| `event` | event | jQuery event object. |

### Simple Example

```javascript
interactiveGrid.reportchange();
```

## reportsettingschange

Signature: `reportsettingschange`

### Purpose

Use `reportsettingschange` as documented by the `interactiveGrid` module.

### Option/Object Properties

| Name | Type | Description |
| --- | --- | --- |
| `event` | event | jQuery event object. |

### Simple Example

```javascript
interactiveGrid.reportsettingschange();
```

## save

Signature: `save`

### Purpose

Use `save` as documented by the `interactiveGrid` module.

### Option/Object Properties

| Name | Type | Description |
| --- | --- | --- |
| `event` | event | jQuery event object. |
| `data` | Object | Additional data for the event. Properties Name Type Description |
| `status` | String | If the save was successful then the status property equals "success". |

### Simple Example

```javascript
interactiveGrid.save();
```

## selectionchange

Signature: `selectionchange`

### Purpose

Triggered when the selection state changes and will work for all views that support selection (grid, icon, etc.).

### Option/Object Properties

| Name | Type | Description |
| --- | --- | --- |
| `event` | event | jQuery event object. |
| `data` | Object | Additional data for the event. Properties Name Type Description |
| `selectedRecords` | Array | An array containing the underlying data model records corresponding to the current selection in the current view. See interactiveGrid#getSelectedRecords for further information on how to deal with these records. |
| `model` | Object | The underlying data model for the current view. See apex.model for further information. |

### Simple Example

```javascript
interactiveGrid.selectionchange();
```

## viewchange

Signature: `viewchange`

### Purpose

Triggered when the view changes.

### Option/Object Properties

| Name | Type | Description |
| --- | --- | --- |
| `event` | event | jQuery event object. |
| `data` | Object | Additional data for the event. Properties Name Type Description |
| `view` | String | Identifier for the current view. |
| `created` | boolean | If true this indicates the view has just been created (or viewed for the first time). |

### Simple Example

```javascript
interactiveGrid.viewchange();
```

## viewmodelcreate

Signature: `viewmodelcreate`

### Purpose

Use `viewmodelcreate` as documented by the `interactiveGrid` module.

### Option/Object Properties

| Name | Type | Description |
| --- | --- | --- |
| `event` | event | jQuery event object. |
| `data` | Object | Additional data for the event. Properties Name Type Description |
| `viewId` | Object | The id of the view for which the model is created. |
| `model` | Object | The underlying data model for the current view. See apex.model for further information. |

### Simple Example

```javascript
interactiveGrid.viewmodelcreate();
```

## focus

Signature: `focus ()`

### Purpose

Use `focus` as documented by the `interactiveGrid` module.

### Simple Example

```javascript
interactiveGrid.focus();
```

## getActions

Signature: `getActions () &rarr; { apex.actions }`

### Purpose

Use `getActions` as documented by the `interactiveGrid` module.

### Returns

the actions context Type apex.actions Example

### Simple Example

```javascript
interactiveGrid.getActions();
```

## getCurrentView

Signature: `getCurrentView () &rarr; { interactiveGridView }`

### Purpose

Use `getCurrentView` as documented by the `interactiveGrid` module.

### Returns

View interface. Type interactiveGridView

### Simple Example

```javascript
interactiveGrid.getCurrentView();
```

## getCurrentViewId

Signature: `getCurrentViewId () &rarr; {string}`

### Purpose

Use `getCurrentViewId` as documented by the `interactiveGrid` module.

### Returns

view id. Type string

### Simple Example

```javascript
interactiveGrid.getCurrentViewId();
```

## getSelectedRecords

Signature: `getSelectedRecords () &rarr; {Array}`

### Purpose

apex.region( region HTML DOM id ).widget().interactiveGrid("getCurrentView").model

### Returns

array of records from the model corresponding to the selected rows/records Returns empty array if there is no selection. Returns null if the current view doesn't support selection. Type Array

### Simple Example

```javascript
interactiveGrid.getSelectedRecords();
```

## getToolbar

Signature: `getToolbar () &rarr; {jQuery}`

### Purpose

Use `getToolbar` as documented by the `interactiveGrid` module.

### Returns

jQuery object of the interactive grid toolbar or null if there is no toolbar Type jQuery

### Simple Example

```javascript
interactiveGrid.getToolbar();
```

## getViews

Signature: `getViews (pViewId opt ) &rarr; { interactiveGridView }`

### Purpose

Use `getViews` as documented by the `interactiveGrid` module.

### Parameters

| Name | Type | Description |
| --- | --- | --- |
| `pViewId` | string |  Id of the view to get. For example "grid" or "chart". |

### Returns

View interface. Type interactiveGridView

### Simple Example

```javascript
interactiveGrid.getViews(
    "P1_ITEM"
);
```

## gotoCell

Signature: `gotoCell (pModelInstanceId opt , pRecordId, pColumn opt )`

### Purpose

Use `gotoCell` as documented by the `interactiveGrid` module.

### Parameters

| Name | Type | Description |
| --- | --- | --- |
| `pModelInstanceId` | String |  model instance id. only needed if using multiple models such as in master detail and the model has not already been set correctly by the master. |
| `pRecordId` | String |  the record id of the row to go to. |
| `pColumn` | String |  column in the record row to go to. |

### Simple Example

```javascript
interactiveGrid.gotoCell(
    {},
    {},
    null
);
```

## refresh

Signature: `refresh ()`

### Purpose

Use `refresh` as documented by the `interactiveGrid` module.

### Simple Example

```javascript
interactiveGrid.refresh();
```

## resize

Signature: `resize ()`

### Purpose

Use `resize` as documented by the `interactiveGrid` module.

### Simple Example

```javascript
interactiveGrid.resize();
```

## setMasterRecord

Signature: `setMasterRecord (pMasterModel, pMasterRecord)`

### Purpose

Set the instance of this Interactive Grid to correspond to the specified master record. Normally this is done automatically when the master region selection changes. However, it can also be done manually when the interactiveGrid#trackParentSelection option is false.

### Parameters

| Name | Type | Description |
| --- | --- | --- |
| `pMasterModel` | model | The model of the master region. |
| `pMasterRecord` | model.Record | The record of the master region that determines which records this detail region will show. |

### Simple Example

```javascript
interactiveGrid.setMasterRecord(
    {},
    {}
);
```

## setSelectedRecords

Signature: `setSelectedRecords (pRecords, pFocus opt , pNoNotify opt )`

### Purpose

Use `setSelectedRecords` as documented by the `interactiveGrid` module.

### Parameters

| Name | Type | Description |
| --- | --- | --- |
| `pRecords` | Array |  an array of model records or an array of model record ids as returned by model getRecordId. If this is an empty array then the selection is cleared. |
| `pFocus` | boolean |  if true the first cell of the selection is given focus |
| `pNoNotify` | boolean |  if true the selection change event will be suppressed |

### Simple Example

```javascript
interactiveGrid.setSelectedRecords(
    {},
    null,
    null
);
```

## copyDefaultToolbar

Signature: `(static) copyDefaultToolbar () &rarr; { interactiveGrid.toolbarData }`

### Purpose

Returns a copy of the default Interactive Grid toolbar data structure. This is a copy of the array that will be used as the data option when the Interactive Grid's toolbar is created. This is typically used from the Advanced JavaScript code function to customize the return value of this function and then assign to the interactiveGrid#toolbarData config property.

### Returns

Returns an array containing a copy of the default Interactive Grid toolbar metadata. Type interactiveGrid.toolbarData Examples The following example shows how to make the download dialog more easily accessible, by adding a button to the toolbar to open it. This example is similar to the previous one except that the Download menu item is removed from the Actions menu and inserted as a toolbar button after the Actions menu button. Type Definitions

### Simple Example

```javascript
interactiveGrid.copyDefaultToolbar();
```

## toolbarData

Signature: `toolbarData`

### Purpose

Toolbar widget metadata returned by interactiveGrid.copyDefaultToolbar .

### Option/Object Properties

| Name | Type | Description |
| --- | --- | --- |
| `search` |  | All search controls (column search menu, search field and go button) |
| `reports` |  | Saved report select list |
| `views` |  | View selection pill buttons |
| `actions1` |  | Actions menu button |
| `actions2` |  | Edit and Save buttons |
| `actions3` |  | Add Row button |
| `actions4` |  | Reset report button |

### Simple Example

```javascript
interactiveGrid.toolbarData();
```

## Notes

- Run APEX JavaScript APIs from an APEX page where the `apex` namespace is loaded.
- Treat client-side values as untrusted when they reach PL/SQL.
- Prefer documented APIs over direct DOM or internal widget state when interacting with APEX components.
