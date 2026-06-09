# htmlBuilder

Source: [Oracle APEX 26.1 JavaScript API Reference](https://docs.oracle.com/en/database/oracle/apex/26.1/aexjs/htmlBuilder.html)

Status: curated first-pass reference.

## Purpose

`htmlBuilder` is the chainable interface returned by `apex.util.htmlBuilder()`. It helps build well-formed HTML while escaping attribute values and text content. It is safer than string concatenation for small templates and plug-in/component markup.

Use [apex.util](apex.util.md) for the namespace function that creates a builder.

## When To Use

Use `htmlBuilder` when JavaScript needs to produce small HTML fragments with mixed trusted markup and untrusted values.

Good fits:

- Button, badge, list-item, or toolbar fragments.
- Client-side templates inside custom regions or item plug-ins.
- Markup that should avoid inline style attributes for CSP compatibility.

For larger templates, prefer `apex.util.applyTemplate` or server-rendered templates.

## API Surface

| Need | Member |
| --- | --- |
| Add trusted markup | `markup` |
| Add escaped text content | `content` |
| Add escaped attributes | `attr`, `optionalAttr`, `optionalBoolAttr` |
| Add CSP-friendly CSS data attributes | `css` |
| Combine builders | `append` |
| Reset builder | `clear` |
| Output | `toString`, `toJquery` |

## Build Safe Markup

```javascript
const out = apex.util.htmlBuilder();
const options = {
    id: "refresh_orders",
    label: $v( "P10_BUTTON_LABEL" ),
    title: "Refresh current orders"
};

out.markup( "<button type='button'" )
    .attr( "id", options.id )
    .attr( "class", "t-Button t-Button--hot" )
    .optionalAttr( "title", options.title )
    .markup( ">" )
    .content( options.label )
    .markup( "</button>" );

apex.jQuery( "#orders_toolbar" ).append( out.toString() );
```

Use `markup` only for trusted literal HTML structure. Use `content` and `attr` for values that can contain user or application data.

## Optional Attributes

```javascript
const out = apex.util.htmlBuilder();

out.markup( "<input type='search'" )
    .attr( "id", "P10_SEARCH" )
    .optionalAttr( "placeholder", $v( "P10_PLACEHOLDER" ) )
    .optionalBoolAttr( "required", $v( "P10_REQUIRED" ) === "Y" )
    .markup( ">" );
```

`optionalAttr` skips empty values. `optionalBoolAttr` adds the attribute only when the value is true.

## Use `css` With `toJquery`

The `css` method stores CSS properties as data attributes. Use `toJquery` when you need those CSS values applied safely.

```javascript
const badge$ = apex.util.htmlBuilder()
    .markup( "<span" )
    .attr( "class", "status-badge" )
    .css( "color", "#2e6f40" )
    .markup( ">" )
    .content( "Approved" )
    .markup( "</span>" )
    .toJquery();

apex.jQuery( "#status_container" ).empty().append( badge$ );
```

Prefer CSS classes for most styling. Use `css` only for small dynamic values that cannot be expressed as classes.

## Append Builders

```javascript
const label = apex.util.htmlBuilder()
    .markup( "<span class='task-label'>" )
    .content( "Assigned To" )
    .markup( "</span>" );

const value = apex.util.htmlBuilder()
    .markup( "<strong>" )
    .content( $v( "P10_OWNER" ) )
    .markup( "</strong>" );

const row = apex.util.htmlBuilder()
    .markup( "<div class='task-row'>" )
    .append( label )
    .append( value )
    .markup( "</div>" );

apex.jQuery( "#task_details" ).html( row.toString() );
```

`append` includes both markup and any CSS data stored by the appended builder.

## Reuse A Builder

```javascript
const out = apex.util.htmlBuilder();
const items = [ "New", "In Progress", "Closed" ];

items.forEach( function( label ) {
    out.clear()
        .markup( "<li>" )
        .content( label )
        .markup( "</li>" );

    apex.jQuery( "#status_list" ).append( out.toString() );
} );
```

`clear` removes previously generated markup and CSS properties.

## Safety Notes

- `content` escapes text. Use it for labels, values, and user-controlled strings.
- `attr` escapes attribute values. Do not concatenate attribute values manually.
- `markup` does no escaping. Use it only for trusted literal tags and separators.
- Avoid inline `<script>`, `<style>`, inline event handlers, and inline style attributes.
- Use `toJquery` when `css` was used; otherwise `toString` is more efficient.
- For large repeated templates, use `apex.util.applyTemplate` or a declarative APEX template.

## Related APIs

- [apex.util](apex.util.md) for `htmlBuilder`, `applyTemplate`, and escape helpers.
- [apex.item](apex.item.md) and [item](item.md) for item state used in generated markup.
- [apex.region](apex.region.md) and [region](region.md) for custom region rendering and refresh behavior.
- [APEX_ESCAPE](../PLSQL/APEX_ESCAPE.md) for server-side escaping.
