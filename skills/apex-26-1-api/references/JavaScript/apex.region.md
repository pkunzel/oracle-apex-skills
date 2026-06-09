# apex.region

Source: [Oracle APEX 26.1 JavaScript API Reference](https://docs.oracle.com/en/database/oracle/apex/26.1/aexjs/apex.region.html)

Status: curated first-pass reference.

## Purpose

`apex.region` returns and manages client-side region interfaces. App code most often uses `apex.region( staticId )` to refresh, focus, or call region-specific methods. Plug-in developers use `apex.region.create` and `apex.region.destroy` to register custom region behavior.

## Normal App Usage

Refresh a region with Static ID `orders`:

```javascript
apex.region( "orders" ).refresh();
```

Focus a region:

```javascript
apex.region( "orders" ).focus();
```

Call after Ajax update:

```javascript
apex.server.process( "SAVE_FILTERS", {
    pageItems: "#P10_STATUS,#P10_OWNER"
} ).done( function() {
    apex.region( "orders" ).refresh();
} );
```

## API Surface

| Member | Use |
| --- | --- |
| `create` | Register a custom region interface. Mostly for region plug-ins. |
| `destroy` | Remove custom region behavior. Mostly for plug-ins/dynamic teardown. |
| `findClosest` | Find the nearest registered region containing a DOM target. |
| `isRegion` | Check whether a region interface exists for an ID. |

## `findClosest`

Refresh the region containing a clicked button:

```javascript
apex.jQuery( document ).on( "click", ".js-refresh-containing-region", function() {
    const region = apex.region.findClosest( this );

    if ( region ) {
        region.refresh();
    }
} );
```

## `isRegion`

Defensive region refresh:

```javascript
function refreshIfRegionExists( staticId ) {
    if ( apex.region.isRegion( staticId ) ) {
        apex.region( staticId ).refresh();
    }
}

refreshIfRegionExists( "orders" );
```

## Plug-In Pattern

Assuming a custom region plug-in renders a root element with DOM ID from `p_region.dom_id`:

```javascript
apex.region.create( "my_custom_region", {
    type: "myCustomRegion",
    refresh: function() {
        return apex.server.plugin(
            this.ajaxIdentifier,
            {},
            {
                refreshObject: this.element
            }
        );
    },
    focus: function() {
        this.element.find( "button, input, a" ).first().trigger( "focus" );
    }
} );
```

Destroy plug-in behavior when a dynamic component is removed:

```javascript
apex.region.destroy( "my_custom_region" );
```

## Safety Guidance

- Give important regions a Static ID and use that ID consistently.
- Prefer `apex.region( staticId ).refresh()` over triggering low-level DOM events.
- Use `findClosest` for generic buttons/actions inside reusable region markup.
- Only plug-in code should normally call `create` and `destroy`.
- Region-specific APIs vary by region type; check the interface docs for Interactive Grid, Cards, Facets, and other specialized regions.

