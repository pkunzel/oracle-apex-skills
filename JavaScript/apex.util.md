# apex.util

Source: [Oracle APEX 26.1 JavaScript API Reference](https://docs.oracle.com/en/database/oracle/apex/26.1/aexjs/apex.util.html)

Status: curated first-pass reference.

## Purpose

`apex.util` contains general JavaScript helpers for escaping, templates, arrays, timing, spinners, date parsing, nested object creation, and other client-side utilities. It is a toolbox module used by APEX components and application code.

## Common Member Groups

| Need | Members |
| --- | --- |
| Escape user data | `escapeHTML`, `escapeHTMLAttr`, `escapeCSS`, `stripHTML` |
| Template rendering | `applyTemplate`, `applyNamedTemplate`, `defineTemplates`, template directives |
| Arrays and values | `toArray`, `arrayEqual` |
| Timing | `debounce`, `throttle`, `invokeAfterPaint`, `cancelInvokeAfterPaint` |
| UI feedback | `showSpinner` |
| Date/object helpers | `getDateFromISO8601String`, `getNestedObject`, `getScrollbarSize` |
| Builder helpers | `htmlBuilder` |

## Escaping

Escape untrusted text before appending HTML:

```javascript
const name = $v( "P10_NAME" );

apex.jQuery( "#preview" ).html(
    "Hello " + apex.util.escapeHTML( name )
);
```

Escape attributes:

```javascript
const title = apex.util.escapeHTMLAttr( $v( "P10_TITLE" ) );
apex.jQuery( "#preview" ).attr( "title", title );
```

Escape an item ID or DOM ID for a CSS selector:

```javascript
const itemId = "P10.ITEM";
const item$ = apex.jQuery( "#" + apex.util.escapeCSS( itemId ) );
```

## Arrays

Convert multi-value item content into an array:

```javascript
const selected = apex.util.toArray( $v( "P10_SELECTED_IDS" ), ":" );
```

Compare shallow arrays:

```javascript
if ( apex.util.arrayEqual( selected, previousSelected ) ) {
    apex.debug.info( "Selection unchanged." );
}
```

## Debounce And Throttle

Use debounce for typing/search:

```javascript
const search = apex.util.debounce( function() {
    apex.region( "orders" ).refresh();
}, 300 );

apex.jQuery( "#P10_SEARCH" ).on( "input", search );
```

Use throttle for scroll/resize:

```javascript
const updateLayout = apex.util.throttle( function() {
    apex.region( "dashboard" ).refresh();
}, 1000 );

apex.jQuery( window ).on( "resize", updateLayout );
```

## Spinner

```javascript
const spinner$ = apex.util.showSpinner( "#orders" );

apex.server.process( "REFRESH_DATA" )
    .always( function() {
        spinner$.remove();
    } );
```

Prefer `apex.server.process` `loadingIndicator` options when the spinner is tied to an Ajax call.

## Templates

Simple template:

```javascript
const html = apex.util.applyTemplate(
    "<strong>#NAME!HTML.</strong>",
    {
        placeholders: {
            NAME: $v( "P10_NAME" )
        }
    }
);

apex.jQuery( "#preview" ).html( html );
```

Named template pattern:

```javascript
apex.util.defineTemplates( {
    orderBadge: "<span class='order-badge #STATUS!ATTR.'>#LABEL!HTML.</span>"
} );

const badgeHtml = apex.util.applyNamedTemplate( "orderBadge", {
    placeholders: {
        STATUS: "is-open",
        LABEL: "Open"
    }
} );
```

Check the official member page for the full template directive syntax.

## Nested Object

Create a nested option path safely:

```javascript
const options = {};

apex.util.getNestedObject(
    options,
    "views.grid.features"
).cellRangeActions = false;
```

## Safety Guidance

- Escape untrusted values before placing them in HTML or attributes.
- Use `escapeCSS` for dynamic selectors.
- Use debounce for user typing and throttle for high-frequency events.
- Remove spinners after async work finishes, including failure paths.
- Template placeholders should use the proper escaping filters.
- Do not use client-side escaping as a replacement for server-side validation.

