# apex.da

Source: [Oracle APEX 26.1 JavaScript API Reference](https://docs.oracle.com/en/database/oracle/apex/26.1/aexjs/apex.da.html)

Status: curated first-pass reference.

## Purpose

`apex.da` contains helper functions for Dynamic Action plug-in developers. It controls Dynamic Action execution flow when a plug-in action is asynchronous, needs to resume execution, needs to report an Ajax error, or needs to stop the remaining actions deliberately.

Most application developers do not need this namespace for ordinary Dynamic Actions. Use it when writing custom Dynamic Action plug-in JavaScript.

## When To Use

Use `apex.da` when:

- A Dynamic Action plug-in pauses execution while waiting for Ajax.
- A plug-in must resume the Dynamic Action chain after async work completes.
- A plug-in must stop remaining actions without treating the stop as an ordinary JavaScript `false` return.
- A plug-in wants to route Ajax errors through APEX's Dynamic Action error handling.

## Curated Patterns

Assuming this code runs inside a Dynamic Action plug-in JavaScript function where `this.resumeCallback` is available and the plug-in has Wait for Result enabled:

```javascript
const daContext = this;

apex.server.plugin( daContext.action.ajaxIdentifier, {
    x01: $v( "P10_AGENT_ID" )
} ).done( function( data ) {
    apex.message.showPageSuccess( data.message );
    apex.da.resume( daContext.resumeCallback, false );
} ).fail( function( jqXHR, textStatus, errorThrown ) {
    apex.da.handleAjaxErrors(
        jqXHR,
        textStatus,
        errorThrown,
        daContext.resumeCallback
    );
} );
```

Cancel remaining actions when the plug-in decides there is nothing else to do:

```javascript
if ( $v( "P10_MODE" ) === "READ_ONLY" ) {
    apex.da.cancel();
    return;
}
```

## Safety Guidance

- Use `apex.da` primarily inside Dynamic Action plug-ins, not ordinary page JavaScript.
- Always call `resume` or `handleAjaxErrors` for async plug-in actions that pause Dynamic Action execution.
- Treat all values sent to `apex.server` as untrusted on the PL/SQL side.
- Keep user-facing messages in `apex.message` or `apex.lang`, not raw `alert` calls.

## Generated API Surface

| Member | Parameters | Returns |
| --- | --- | --- |
| `cancel` | None documented | Not documented |
| `handleAjaxErrors` | `pjqXHR`, `pTextStatus`, `pErrorThrown`, `pResumeCallback` | Not documented |
| `resume` | `pCallback`, `pErrorOccurred` | Not documented |

## cancel

Signature: `(static) cancel ()`

### Purpose

For Dynamic Action plug-in developers, call this function to stop execution of the remaining actions in a dynamic action without indicating there was an error. Returning false from the JavaScript function indicates that there has been an error which stops execution of the remaining actions only if the Stop Execution On Error setting is true. This function is useful to stop execution of remaining actions regardless of the Stop Execution On Error setting and also when the action is asynchronous.

### Simple Example

```javascript
apex.da.cancel();
```

## handleAjaxErrors

Signature: `(static) handleAjaxErrors (pjqXHR, pTextStatus, pErrorThrown, pResumeCallback)`

### Purpose

The following example shows a typical use case of handleAjaxErrors.

### Parameters

| Name | Type | Description |
| --- | --- | --- |
| `pjqXHR` | object | The jqXHR object passed directly from the apex.server error callback. |
| `pTextStatus` | string | The text status of the error, passed directly from the apex.server error callback. |
| `pErrorThrown` | string | Text describing the actual error, passed directly from the apex.server error callback. |
| `pResumeCallback` | function | Reference to callback function available from the this.resumeCallback property, handles resuming execution of the dynamic action. |

### Simple Example

```javascript
apex.da.handleAjaxErrors(
    null,
    "Example",
    null,
    function() {}
);
```

## resume

Signature: `(static) resume (pCallback, pErrorOccurred)`

### Purpose

For Dynamic Action plug-in developers that write plug-ins that perform Ajax calls, call this function to resume execution of the actions in a dynamic action. Execution of a dynamic action can be paused, if the action's Wait for Result attribute is checked. Wait for Result is a dynamic action plug-in standard attribute designed for use with Ajax-based dynamic actions. If a plug-in exposes this attribute, it will also need to resume execution by calling this function in the relevant place in the plug-in JavaScript code (otherwise your action will break execution of dynamic actions).

### Parameters

| Name | Type | Description |
| --- | --- | --- |
| `pCallback` | function | Reference to callback function available from the this.resumeCallback property, handles resuming execution of the dynamic action. |
| `pErrorOccurred` | boolean | Indicate to the framework whether an error has occurred. If an error has occurred and the action's Stop Execution on Error attribute is checked, execution of the dynamic action will be stopped. |

### Simple Example

```javascript
apex.da.resume(
    function() {},
    null
);
```

## Notes

- Run APEX JavaScript APIs from an APEX page where the `apex` namespace is loaded.
- Treat client-side values as untrusted when they reach PL/SQL.
- Prefer documented APIs over direct DOM or internal widget state when interacting with APEX components.
