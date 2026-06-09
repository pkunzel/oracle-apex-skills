# apex.server

Source: [Oracle APEX 26.1 JavaScript API Reference](https://docs.oracle.com/en/database/oracle/apex/26.1/aexjs/apex.server.html)

Status: curated first-pass reference.

## Purpose

`apex.server` contains the client-side Ajax helpers for communicating from an APEX page to the APEX server. Use it for on-demand processes, plug-in Ajax callbacks, generated GET URLs, request queues, refresh events, and loading scripts.

Most functions return either a string URL, a value, or a promise-like object. The Ajax promise supports `done`, `fail`, `always`, and usually `abort`, but queue behavior can affect abort semantics.

## Function Summary

| Function | Returns | Use |
| --- | --- | --- |
| `apex.server.chunk(text)` | `string` or `Array<string>` | Split long text into chunks no larger than 8000 characters. |
| `apex.server.loadScript(options, callback)` | `*` | Load a JavaScript file using RequireJS or jQuery script loading. |
| `apex.server.plugin(ajaxIdentifier, data, options)` | `Promise` | Call a plug-in Ajax callback. |
| `apex.server.pluginUrl(ajaxIdentifier, data)` | `string` | Build a GET URL for a plug-in Ajax callback. |
| `apex.server.process(name, data, options)` | `Promise` | Call a page-level or application-level Ajax Callback process. |
| `apex.server.url(data, page)` | `string` | Build a GET URL for the current or specified page. |

## Common Ajax Data Shape

`apex.server.process` and `apex.server.plugin` send ordinary object properties as JSON in `p_json`, with special handling for common APEX channels:

- `pageItems`: item names, DOM elements, jQuery objects, or selectors whose values should be submitted to session state.
- `x01` to `x20`: scalar values exposed server-side as `apex_application.g_x01` through `g_x20`.
- `f01` to `f20`: arrays exposed server-side as `apex_application.g_f01` through `g_f20`.
- `regions`: structured region-specific payloads, especially useful for plug-ins.

Useful options:

- `refreshObject`: element that receives `apexbeforerefresh` and `apexafterrefresh`.
- `clear`: callback invoked after before-refresh and before Ajax starts.
- `loadingIndicator`: element or function used for a spinner.
- `loadingIndicatorPosition`: `before`, `after`, `prepend`, `append`, `centered`, or `page`.
- `queue`: `{ name, action }`, where action is `wait`, `replace`, or `lazyWrite`.
- `target`: required when submitting column items so APEX can resolve region session-state context.

## `chunk(text)`

Use `chunk` when a large text value might exceed regular request limits. It returns the original string if it is short enough, otherwise an array of chunks.

Simple example:

```javascript
const value = apex.server.chunk( $v( "P1_LONG_TEXT" ) );
const chunks = Array.isArray( value ) ? value : [value];
```

Server-side process pattern:

```sql
declare
    l_text clob;
begin
    for i in 1 .. apex_application.g_f01.count loop
        l_text := l_text || apex_application.g_f01(i);
    end loop;

    apex_json.open_object;
    apex_json.write('length', dbms_lob.getlength(l_text));
    apex_json.close_object;
end;
```

Client-side submit pattern:

```javascript
const chunks = [].concat( apex.server.chunk( $v( "P1_LONG_TEXT" ) ) );

apex.server.process( "SAVE_LONG_TEXT", {
    f01: chunks
} ).done( function( data ) {
    apex.message.showPageSuccess( "Saved " + data.length + " characters." );
} );
```

## `loadScript(options, callback)`

Use `loadScript` when a page must load JavaScript dynamically. Prefer declarative file loading or page-level static files when possible.

Options:

- `path`: script path.
- `requirejs`: whether RequireJS should load the file.
- `global`: global object name introduced by the script.
- `callback`: optional callback. The second function argument is also a callback.

Simple example:

```javascript
apex.server.loadScript( {
    path: "#APP_FILES#chart-helper.js"
}, function() {
    window.chartHelper.render();
} );
```

RequireJS example:

```javascript
apex.server.loadScript( {
    path: "#APP_FILES#my-module.js",
    requirejs: true,
    global: "myModule"
}, function() {
    myModule.init();
} );
```

## `process(name, data, options)`

Use `process` for page or application Ajax Callback processes.

Simple client example:

```javascript
apex.server.process( "GET_CUSTOMER", {
    x01: $v( "P10_CUSTOMER_ID" )
} ).done( function( data ) {
    $s( "P10_CUSTOMER_NAME", data.name );
} ).fail( function( jqXHR, textStatus, errorThrown ) {
    apex.message.alert( "Customer lookup failed: " + errorThrown );
} );
```

Matching PL/SQL Ajax Callback:

```sql
declare
    l_customer_id number := to_number(apex_application.g_x01);
begin
    apex_json.open_object;

    for rec in (
        select customer_name
          from customers
         where customer_id = l_customer_id
    ) loop
        apex_json.write('name', rec.customer_name);
    end loop;

    apex_json.close_object;
end;
```

Complex example with page items, refresh events, loading indicator, and queue:

```javascript
apex.server.process( "SAVE_FILTERS", {
    pageItems: ["P10_STATUS", "P10_OWNER"],
    x01: "manual-save"
}, {
    refreshObject: "#orders_region",
    loadingIndicator: "#orders_region",
    loadingIndicatorPosition: "centered",
    queue: {
        name: "orders-filter-save",
        action: "replace"
    }
} ).done( function() {
    apex.region( "orders_region" ).refresh();
} );
```

## `plugin(ajaxIdentifier, data, options)`

Use `plugin` from plug-in JavaScript to call the plug-in Ajax callback identified by the server-side plug-in Ajax identifier.

Simple example:

```javascript
apex.server.plugin( lAjaxIdentifier, {
    x01: "refresh"
} ).done( function( data ) {
    console.log( data );
} );
```

Region payload example:

```javascript
apex.server.plugin( null, {
    regions: [ {
        id: "EMP_CHART",
        ajaxIdentifier: lAjaxIdentifier,
        mode: "summary"
    } ]
}, {
    refreshObject: "#EMP_CHART",
    loadingIndicator: "#EMP_CHART"
} ).done( function( data ) {
    renderChart( data );
} );
```

## `pluginUrl(ajaxIdentifier, data)`

Use `pluginUrl` to build a GET URL for a plug-in Ajax callback.

```javascript
const url = apex.server.pluginUrl( lAjaxIdentifier, {
    x01: "download",
    pageItems: "#P10_FILE_ID"
} );

window.location.href = url;
```

Use POST-style `plugin` for state-changing work and larger payloads. Use `pluginUrl` for GET-friendly cases such as downloads or links.

## `url(data, page)`

Use `url` to build a GET URL for the current page or a specified page.

Current page example:

```javascript
const url = apex.server.url( {
    p_request: "DOWNLOAD",
    x01: $v( "P10_FILE_ID" )
} );
```

Specific page example:

```javascript
const reportUrl = apex.server.url( {
    p_request: "EXPORT",
    pageItems: "#P20_DEPTNO"
}, "20" );

window.open( reportUrl, "_blank" );
```

## Queue Guidance

Use `wait` when requests must run in order.

```javascript
apex.server.process( "SAVE_STEP", data, {
    queue: { name: "wizard-save", action: "wait" }
} );
```

Use `replace` when newer requests make older ones obsolete.

```javascript
apex.server.process( "SEARCH", { x01: $v( "P1_SEARCH" ) }, {
    queue: { name: "live-search", action: "replace" }
} );
```

Use `lazyWrite` only for non-critical state where only the latest value matters.

```javascript
apex.server.process( "SAVE_SPLITTER_STATE", { x01: splitterPosition }, {
    queue: { name: "splitter-main", action: "lazyWrite" }
} );
```

## Safety And Quality Notes

- Prefer `pageItems` for values that should be set in session state.
- Use `x01` to `x20` for small scalar metadata.
- Use `f01` to `f20` for arrays.
- Do not use GET URLs for destructive actions.
- Always handle `fail` for user-facing interactions.
- Avoid deprecated `async` behavior.
- Include `target` when `pageItems` includes column items.
- Treat client-sent data as untrusted in the PL/SQL Ajax Callback.

