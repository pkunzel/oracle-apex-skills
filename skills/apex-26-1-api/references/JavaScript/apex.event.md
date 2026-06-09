# apex.event

Source: [Oracle APEX 26.1 JavaScript API Reference](https://docs.oracle.com/en/database/oracle/apex/26.1/aexjs/apex.event.html)

Status: curated first-pass reference.

## Purpose

`apex.event` provides APEX event helpers. The primary API is `apex.event.trigger`, which triggers an event on a target and returns whether the event was cancelled.

Use it when custom JavaScript needs to notify Dynamic Actions or other listeners using the APEX/jQuery event model.

## Trigger A Custom Event

```javascript
apex.event.trigger(
    "#orders",
    "ordersrefreshed",
    {
        status: $v( "P10_STATUS" )
    }
);
```

Dynamic Actions can listen for the custom event `ordersrefreshed` on the region or element.

## Trigger And Check Cancellation

```javascript
const cancelled = apex.event.trigger(
    "#P10_STATUS",
    "beforestatuschange",
    {
        oldValue: "OPEN",
        newValue: "CLOSED"
    }
);

if ( cancelled ) {
    apex.debug.info( "Status change cancelled by an event handler." );
}
```

## Listener Pattern

```javascript
apex.jQuery( "#orders" ).on( "ordersrefreshed", function( event, data ) {
    apex.debug.info( "Orders refreshed", data );
} );
```

## Component Pattern

Assuming a custom component has a root element with Static ID `task_board`:

```javascript
function notifyTaskMoved( taskId, status ) {
    apex.event.trigger(
        "#task_board",
        "taskmoved",
        {
            taskId: taskId,
            status: status
        }
    );
}
```

## Safety Guidance

- Use stable lowercase event names for custom events.
- Document event payload shape for reusable components.
- Do not use events as a security boundary; validate again server-side.
- Prefer Dynamic Actions for declarative behavior and custom events for reusable component integration.

