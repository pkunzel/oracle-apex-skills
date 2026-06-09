# templateReportRegion

Source: [Oracle APEX 26.1 JavaScript API Reference](https://docs.oracle.com/en/database/oracle/apex/26.1/aexjs/templateReportRegion.html)

Status: curated first-pass reference.

## Purpose

`templateReportRegion` is the client-side interface returned by `apex.region(staticId)` for Template Component report regions. It supports refresh, focus, paging, current row, and row selection APIs.

Use it when code needs to work with selected rows or current rows in a Template Component report without depending on raw DOM traversal.

## API Surface

| Need | Members |
| --- | --- |
| Refresh/focus | `refresh`, `focus` |
| Paging | `firstPage`, `previousPage`, `nextPage`, `lastPage` |
| Selection | `getSelection`, `setSelection`, `getSelectedValues`, `setSelectedValues`, `selectAll` |
| Current row | `getCurrentRow`, `setCurrentRow`, `getCurrentRowValue`, `setCurrentRowValue` |
| Region identity | `element`, `type`, `filterRegionId` |

## Refresh

```javascript
apex.region( "task_report" ).refresh().then( function() {
    apex.debug.info( "Template report refreshed." );
} );
```

## Selection

Assuming selection is enabled and the template uses `#APEX$ROW_IDENTIFICATION#` so rows have stable `data-id` values:

```javascript
const report = apex.region( "task_report" );
const selectedIds = report.getSelectedValues() || [];

if ( selectedIds.length ) {
    apex.item( "P10_SELECTED_TASKS" ).setValue(
        selectedIds.join( ":" )
    );
}
```

Select rows by value:

```javascript
apex.region( "task_report" ).setSelectedValues(
    [ "TASK-1001", "TASK-1002" ],
    true
);
```

`setSelectedValues` returns the count of rows actually selected, or `-1` if the region is not initialized or selection is not supported.

## Current Row

```javascript
const report = apex.region( "task_report" );
const currentTaskId = report.getCurrentRowValue();

if ( currentTaskId ) {
    apex.item( "P10_TASK_ID" ).setValue( currentTaskId );
}
```

Move focus to a known row:

```javascript
apex.region( "task_report" ).setCurrentRowValue(
    "TASK-1001",
    true
);
```

The row must be rendered to become current.

## Paging

```javascript
const report = apex.region( "task_report" );

report.firstPage();
report.nextPage();
report.previousPage();
```

Paging calls return `true` for success and `false` if a page is currently being rendered.

## Selection Change Handler

```javascript
apex.jQuery( "#task_report" ).on( "apexselectionchange", function() {
    const selected = apex.region( "task_report" ).getSelectedValues() || [];

    apex.jQuery( "#bulk_actions" ).toggle( selected.length > 0 );
} );
```

## Safety Notes

- Give the Template Component report a stable Static ID.
- Include `#APEX$ROW_IDENTIFICATION#` in the template when row selection/current-row APIs need stable row values.
- Selection APIs return `null` or `-1` when selection is not enabled or the report is not initialized.
- Treat selected row values sent to PL/SQL as untrusted; re-authorize the rows server-side.
- Use the region API before writing DOM selectors tied to template internals.

## Related APIs

- [cardsRegion](cardsRegion.md) for Cards regions with similar selection/paging behavior.
- [facetsRegion](facetsRegion.md) for filtering Template Component reports.
- [region](region.md) and [apex.region](apex.region.md) for generic refresh/focus behavior.
