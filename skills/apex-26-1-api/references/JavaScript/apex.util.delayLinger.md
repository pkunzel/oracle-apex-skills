# apex.util.delayLinger

Source: [Oracle APEX 26.1 JavaScript API Reference](https://docs.oracle.com/en/database/oracle/apex/26.1/aexjs/apex.util.delayLinger.html)

Status: curated first-pass reference.

## Purpose

`apex.util.delayLinger` helps show progress indicators for async work without flicker. It delays showing an indicator for quick operations and keeps it visible briefly once shown, so Ajax spinners feel steadier.

Use this namespace for client-side UI around potentially long-running operations such as workflow actions, background-process status polling, AI calls, report refreshes, and custom plug-in Ajax calls.

## When To Use

Use `apex.util.delayLinger` when:

- A spinner should not flash for very fast Ajax calls.
- Multiple overlapping operations share one progress indicator.
- A custom component needs explicit start/finish control instead of relying on `apex.server` loading indicators.

Every `start` call for a scope must be paired with a `finish` call for the same scope.

## Curated Patterns

Assuming a button starts an Ajax callback named `START_WORKFLOW`:

```javascript
const scope = "start-workflow";

apex.util.delayLinger.start( scope, function() {
    apex.util.showSpinner( $( "#workflowStatus" ) );
} );

apex.server.process( "START_WORKFLOW", {
    x01: $v( "P10_REQUEST_ID" )
} ).done( function( data ) {
    apex.message.showPageSuccess( data.message );
    apex.region( "workflow_status" ).refresh();
} ).fail( function( jqXHR, textStatus, errorThrown ) {
    apex.message.alert( "Workflow start failed: " + errorThrown );
} ).always( function() {
    apex.util.delayLinger.finish( scope, function() {
        $( "#workflowStatus .u-Processing" ).remove();
    } );
} );
```

Use a unique scope name per indicator when a page has multiple async areas:

```javascript
apex.util.delayLinger.start( "task-list-refresh", function() {
    apex.util.showSpinner( $( "#taskList" ) );
} );

apex.util.delayLinger.finish( "task-list-refresh", function() {
    $( "#taskList .u-Processing" ).remove();
} );
```

## Safety Guidance

- Always finish the same scope started, including in error paths.
- Keep scope names stable and unique to each visual indicator.
- Do not use delay/linger timing as a business-state signal; it is only UI polish.
- Prefer `apex.server` loading indicators for simple cases; use this API when you need direct control.

## Generated API Surface

| Member | Parameters | Returns |
| --- | --- | --- |
| `finish` | `pScopeName`, `pAction` | Not documented |
| `start` | `pScopeName`, `pAction` | Not documented |

## finish

Signature: `(static) finish (pScopeName, pAction)`

### Purpose

Call this function when the potentially long-running async process finishes. For each call to start with a given pScopeName , a corresponding call to finish with the same pScopeName must be made. The pAction is called exactly once if and only if the corresponding start pAction was called. If there are multiple calls to finish the pAction from the last one is called.

### Parameters

| Name | Type | Description |
| --- | --- | --- |
| `pScopeName` | string | A unique name for each unique progress indicator. |
| `pAction` | function | A no argument function to call to hide and/or remove the progress indicator. This function is only called if the action passed to start was called. |

### Simple Example

```javascript
apex.util.delayLinger.finish(
    "MY_PROCESS",
    null
);
```

## start

Signature: `(static) start (pScopeName, pAction)`

### Purpose

Call this function when a potentially long-running async process starts. For each call to start with a given pScopeName , a corresponding call to finish with the same pScopeName must be made. Calls with different pScopeName arguments will not interfere with each other.

### Parameters

| Name | Type | Description |
| --- | --- | --- |
| `pScopeName` | string | A unique name for each unique progress indicator. |
| `pAction` | function | A no argument function to call to display the progress indicator. This function may or may not be called depending on how quickly finish is called. |

### Simple Example

```javascript
apex.util.delayLinger.start(
    "MY_PROCESS",
    null
);
```

## Notes

- Run APEX JavaScript APIs from an APEX page where the `apex` namespace is loaded.
- Treat client-side values as untrusted when they reach PL/SQL.
- Prefer documented APIs over direct DOM or internal widget state when interacting with APEX components.
