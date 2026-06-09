# interactiveReportRegion

Source: [Oracle APEX 26.1 JavaScript API Reference](https://docs.oracle.com/en/database/oracle/apex/26.1/aexjs/interactiveReportRegion.html)

Status: curated first-pass reference.

## Purpose

`interactiveReportRegion` is the client-side region interface returned by `apex.region( staticId )` for Interactive Report regions. It exposes focus, refresh, current row, selected rows, selected row values, and current view name.

Use `APEX_IR` PL/SQL for server-side saved report state. Use this JavaScript interface for browser runtime behavior such as selection, current row handling, and refresh.

## When To Use

Use `interactiveReportRegion` when:

- JavaScript needs selected Interactive Report row values.
- A button should act on the current row.
- A Dynamic Action should refresh the report and optionally preserve pagination.
- Client code needs to know the current report view mode.
- Generic code needs to focus the report after a UI change.

Selection-related methods return `null` when the report does not support selection.

## Access Pattern

Assuming an Interactive Report region with Static ID `orders_ir`:

```javascript
const ir = apex.region( "orders_ir" );

ir.refresh( true );
ir.focus();
```

`refresh( true )` keeps pagination where supported.

## Selected Row Values

Assuming the Interactive Report is configured so row values are represented by the row `data-id` value:

```javascript
const ir = apex.region( "orders_ir" );
const selectedValues = ir.getSelectedValues() || [];

if ( selectedValues.length === 0 ) {
    apex.message.showErrors( [ {
        type: "error",
        location: "page",
        message: "Select at least one order.",
        unsafe: false
    } ] );
} else {
    apex.server.process( "PROCESS_SELECTED_ORDERS", {
        f01: selectedValues
    } ).done( function() {
        ir.refresh( true );
    } );
}
```

For DOM row elements instead of row values, use `getSelection`.

## Current Row

```javascript
const ir = apex.region( "orders_ir" );
const currentOrderId = ir.getCurrentRowValue();

if ( currentOrderId ) {
    apex.item( "P20_ORDER_ID" ).setValue( currentOrderId );
}
```

`getCurrentRowValue` returns the primary-key-like row value or `null` if there is no current row or the report does not support it.

## View Name And Refresh

```javascript
const ir = apex.region( "orders_ir" );

apex.debug.info( "Current IR view: %s", ir.getViewName() );
ir.refresh( true );
```

## Related APIs

- `APEX_IR` for server-side filters, reset, clear, saved reports, and subscriptions.
- `APEX_REGION` for PL/SQL query/export of a report region.
- `apex.region` for generic region refresh/focus/discovery.

## API Surface

| Member | Parameters | Returns |
| --- | --- | --- |
| `element` | None documented | Not documented |
| `type` | None documented | Not documented |
| `focus` | None documented | Not documented |
| `getCurrentRow` | None documented | The current row or null if not supported. Type jQuery Example This example gets the current row in the report. |
| `getCurrentRowValue` | None documented | The current row value or null if not supported. Type string |
| `getSelectedValues` | None documented | Array of selected record values. Returns null if selection is not supported. Type Array. |
| `getSelection` | None documented | The selected row elements as a jQuery collection. Returns null if selection isn't supported. Type jQuery Example This example get the current selection. |
| `getViewName` | None documented | The current view mode. Type string Example The following example gets the current view name. |
| `refresh` | `pKeepPagination` | Not documented |
| `selectAll` | `pFocus`, `nullable`, `pNoNotify` | Not documented |
| `setCurrentRow` | `pRow$`, `pFocus` | Not documented |
| `setCurrentRowValue` | `pRowValue`, `pFocus` | Not documented |
| `setSelectedValues` | `pValues`, `pFocus`, `pNoNotify` | Count of the rows actually selected or -1 if selection is not supported. Type number |
| `setSelection` | `pElements$`, `pFocus`, `pNoNotify` | Not documented |

## element

Signature: `element :jQuery`

### Purpose

The jQuery object for the region element.

### Simple Example

```javascript
interactiveReportRegion.element;
```

## type

Signature: `type :string`

### Purpose

The Interactive Report region type is "InteractiveReport".

### Simple Example

```javascript
interactiveReportRegion.type;
```

## focus

Signature: `focus ()`

### Purpose

Set focus to the Interactive Report if possible. If the report supports selection then the last focused (current) row will be focused. Otherwise, the first focusable element within the region, if any, will be focused.

### Simple Example

```javascript
interactiveReportRegion.focus();
```

## getCurrentRow

Signature: `getCurrentRow () &rarr; {jQuery}`

### Purpose

Returns the current row as a jQuery object. The current row is the row that has or last had focus.

### Returns

The current row or null if not supported. Type jQuery Example This example gets the current row in the report.

### Simple Example

```javascript
interactiveReportRegion.getCurrentRow();
```

## getCurrentRowValue

Signature: `getCurrentRowValue () &rarr; {string}`

### Purpose

Returns the value of the current row. The current row is the row that has or last had focus. The value of a row is its primary key in the data-id attribute.

### Returns

The current row value or null if not supported. Type string

### Simple Example

```javascript
interactiveReportRegion.getCurrentRowValue();
```

## getSelectedValues

Signature: `getSelectedValues () &rarr; (nullable) {Array. }`

### Purpose

Returns the value for each selected row. The value of a row is its primary key in the data-id attribute

### Returns

Array of selected record values. Returns null if selection is not supported. Type Array.

### Simple Example

```javascript
interactiveReportRegion.getSelectedValues();
```

## getSelection

Signature: `getSelection () &rarr; (nullable) {jQuery}`

### Purpose

Return the currently selected rows as a jQuery collection.

### Returns

The selected row elements as a jQuery collection. Returns null if selection isn't supported. Type jQuery Example This example get the current selection.

### Simple Example

```javascript
interactiveReportRegion.getSelection();
```

## getViewName

Signature: `getViewName () &rarr; {string}`

### Purpose

Get the name of the current view. Interactive Report supports multiple views, such as:

### Returns

The current view mode. Type string Example The following example gets the current view name.

### Simple Example

```javascript
interactiveReportRegion.getViewName();
```

## refresh

Signature: `refresh (pKeepPagination opt )`

### Purpose

Refreshes the report with new data from the server.

### Parameters

| Name | Type | Description |
| --- | --- | --- |
| `pKeepPagination` | boolean |  Controls the pagination and scroll behavior after refresh. |

### Simple Example

```javascript
interactiveReportRegion.refresh(
    null
);
```

## selectAll

Signature: `selectAll (pFocus opt, nullable , pNoNotify opt )`

### Purpose

Select all the rows in the report that can be selected. Typically this applies to all currently visible rows. Triggers the apex.event:apexselectionchange event if the selection changes unless pNoNotify is true.

### Parameters

| Name | Type | Description |
| --- | --- | --- |
| `pFocus` | boolean |  If true the first selected row is given focus. If false the first selected row is made focusable. If null or not given the current item and focus is not changed. |
| `pNoNotify` | boolean |  If true the selection change notification will be suppressed. |

### Simple Example

```javascript
interactiveReportRegion.selectAll(
    null,
    null,
    null
);
```

## setCurrentRow

Signature: `setCurrentRow (pRow$, pFocus opt )`

### Purpose

Sets the last focused row to the given pRow$. If pRow$ is not a row or not in the report container the current row is not changed.

### Parameters

| Name | Type | Description |
| --- | --- | --- |
| `pRow$` | jQuery |  The row to make current. |
| `pFocus` | boolean |  If true also focus the row. |

### Simple Example

```javascript
interactiveReportRegion.setCurrentRow(
    null,
    null
);
```

## setCurrentRowValue

Signature: `setCurrentRowValue (pRowValue, pFocus opt )`

### Purpose

Sets the last focused row to the one with the given pRowValue. If no row has the given value the current row is not changed. The row must be rendered in order to be made the current row. The value of a row is its primary key in the data-id attribute.

### Parameters

| Name | Type | Description |
| --- | --- | --- |
| `pRowValue` | string |  The value of a row. |
| `pFocus` | boolean |  If true also focus the row. |

### Simple Example

```javascript
interactiveReportRegion.setCurrentRowValue(
    "Example",
    null
);
```

## setSelectedValues

Signature: `setSelectedValues (pValues, pFocus opt , pNoNotify opt ) &rarr; {number}`

### Purpose

Selects the report rows that correspond to the given values. The value of a row is the primary key in the data-id attribute. The row must be rendered in order to be made a selectable row. Triggers the apex.event:apexselectionchange event if the selection changes unless pNoNotify is true.

### Parameters

| Name | Type | Description |
| --- | --- | --- |
| `pValues` | Array. |  Array of row values to select. |
| `pFocus` | boolean |  If true the first row of the selection is given focus. |
| `pNoNotify` | boolean |  If true the selection change event will be suppressed. |

### Returns

Count of the rows actually selected or -1 if selection is not supported. Type number

### Simple Example

```javascript
interactiveReportRegion.setSelectedValues(
    "Example",
    null,
    null
);
```

## setSelection

Signature: `setSelection (pElements$, pFocus opt , pNoNotify opt )`

### Purpose

Set the selected rows. Triggers the apex.event:apexselectionchange event if the selection changes unless pNoNotify is true.

### Parameters

| Name | Type | Description |
| --- | --- | --- |
| `pElements$` | jQuery |  A jQuery object with row elements such as the return value of getSelection. |
| `pFocus` | boolean |  If true the first row element of the selection is given focus. |
| `pNoNotify` | boolean |  If true the selection change event will be suppressed. |

### Simple Example

```javascript
interactiveReportRegion.setSelection(
    null,
    null,
    null
);
```

## Notes

- Run APEX JavaScript APIs from an APEX page where the `apex` namespace is loaded.
- Treat client-side values as untrusted when they reach PL/SQL.
- Prefer documented APIs over direct DOM or internal widget state when interacting with APEX components.
