# facetsRegion

Source: [Oracle APEX 26.1 JavaScript API Reference](https://docs.oracle.com/en/database/oracle/apex/26.1/aexjs/facetsRegion.html)

Status: curated first-pass reference.

## Purpose

`facetsRegion` is the region interface for Faceted Search and Smart Filters. It manages facet controls, current filters, counts, charts, batch/apply behavior, locking during refresh, and coordination with the filtered report region.

Use this page when code needs to clear filters, apply batched changes, read counts, show/hide facets, or coordinate custom report refresh behavior with a Faceted Search or Smart Filters region.

## API Surface

| Need | Members |
| --- | --- |
| Apply/reset | `apply`, `clear`, `clearFacets`, `reset`, `change` |
| Counts | `fetchCounts`, `getFacetCount`, `getFacetValueCounts`, `getTotalResourceCount` |
| Facet visibility | `hideFacet`, `showFacet` |
| Charts | `addChart`, `removeChart`, `beforeAddChart`, `afterRemoveChart` |
| Refresh/lock | `refresh`, `refreshView`, `lock`, `unlock` |
| Region events | `on`, `off`, `focus` |
| Configuration | `controls`, `batch`, `uiMode`, `searchField`, `currentFacets`, `feedback`, control type definitions |

## Clear Or Reset Filters

Clear current facet values while keeping persistent configuration:

```javascript
apex.region( "order_facets" ).clear();
```

Reset filters and persistent UI settings to their configured defaults:

```javascript
apex.region( "order_facets" ).reset();
```

Use `reset` for a full "Start over" command.

## Batch Apply

When the facets region is configured for batched changes:

```javascript
const facets = apex.region( "order_facets" );

facets.clearFacets();
facets.apply();
```

If the UI uses an external Apply button:

```javascript
apex.jQuery( "#apply_filters" ).on( "click", function() {
    apex.region( "order_facets" ).apply();
} );
```

## Read Counts

```javascript
const facets = apex.region( "order_facets" );
const total = facets.getTotalResourceCount();

apex.item( "P10_RESULT_COUNT" ).setValue( String( total ), null, true );
```

Read per-facet value counts:

```javascript
const counts = apex.region( "order_facets" ).getFacetValueCounts();

if ( counts.STATUS ) {
    apex.debug.info( "Open count: " + counts.STATUS.OPEN );
}
```

Counts depend on region configuration and whether feedback/counts are enabled.

## Show Or Hide Facets

Facet names are the facet item/session-state names.

```javascript
const facets = apex.region( "order_facets" );

facets.hideFacet( "P10_ARCHIVED_YN" );
facets.showFacet( "P10_STATUS" );
```

If the facet has a value, understand the `clearOnHide` setting before hiding it.

## Lock During Custom Work

```javascript
const facets = apex.region( "order_facets" );

facets.lock();

apex.server.process( "REFRESH_EXTERNAL_FILTERS" )
    .always( function() {
        facets.unlock();
    } );
```

Balance every `lock` with an `unlock`.

## Coordinated Report Refresh

Most native Cards, Report, and Map regions are configured declaratively to refresh when the facets change. For custom code, listen for changes and refresh the target region:

```javascript
apex.jQuery( "#order_facets" ).on( "change", function() {
    apex.region( "orders_cards" ).refresh();
} );
```

Prefer declarative region binding when available.

## Safety Notes

- Facet values are user input. Validate and authorize again in server-side processes.
- Avoid doing expensive `fetchCounts` calls on every keystroke unless the UX requires live feedback.
- Use batch/apply mode for expensive filtered reports.
- Be cautious hiding facets with values; hidden filters can confuse users.
- For custom filtered regions, return promises from refresh logic so APEX can lock/unlock the facets region properly.

## Related APIs

- [cardsRegion](cardsRegion.md), [templateReportRegion](templateReportRegion.md), and [mapRegion](mapRegion.md) for common filtered target regions.
- [apex.region](apex.region.md) and [region](region.md) for generic refresh behavior.
- [apex.server](apex.server.md) for custom Ajax work.
