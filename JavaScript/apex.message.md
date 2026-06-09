# apex.message

Source: [Oracle APEX 26.1 JavaScript API Reference](https://docs.oracle.com/en/database/oracle/apex/26.1/aexjs/apex.message.html)

Status: curated first-pass reference.

## Purpose

`apex.message` shows page-level success messages, page/item errors, alert and confirmation dialogs, and accessible live-region messages. Use it instead of manually injecting notification markup so the app follows the active APEX theme and accessibility conventions.

## When To Use

Use `apex.message` when:

- An Ajax callback succeeds and should show a page success message.
- Client-side validation should show APEX-style item/page errors.
- A custom action needs an alert or confirmation dialog.
- A custom region must make hidden error items visible before focus.
- Screen readers need an announcement that is not otherwise visible.

## API Surface

| Need | Members |
| --- | --- |
| Page success | `showPageSuccess`, `hidePageSuccess`, `setDismissPreferences` |
| Errors | `showErrors`, `clearErrors`, `addVisibilityCheck` |
| Dialogs | `alert`, `confirm` |
| Accessibility | `ariaMessage`, `ariaAlertMessage` |
| Theme integration | `setThemeHooks`, `TYPE` |

## Page Success

```javascript
apex.message.showPageSuccess( "Order saved." );
```

Hide success:

```javascript
apex.message.hidePageSuccess();
```

Ajax pattern:

```javascript
apex.server.process( "SAVE_ORDER", {
    pageItems: "#P10_ORDER_ID,#P10_STATUS"
} ).done( function() {
    apex.message.clearErrors();
    apex.message.showPageSuccess( "Order saved." );
} ).fail( function() {
    apex.message.showErrors( [ {
        type: "error",
        location: "page",
        message: "The order could not be saved.",
        unsafe: false
    } ] );
} );
```

## Errors

Show a page error:

```javascript
apex.message.showErrors( [ {
    type: "error",
    location: "page",
    message: "Please correct the highlighted fields.",
    unsafe: false
} ] );
```

Show an item error:

```javascript
apex.message.showErrors( [ {
    type: "error",
    location: [ "inline", "page" ],
    pageItem: "P10_EMAIL",
    message: "Enter a valid email address.",
    unsafe: false
} ] );
```

Clear previous client-side errors:

```javascript
apex.message.clearErrors();
```

Use `unsafe: false` unless the message is trusted and intentionally contains HTML.

## Alert And Confirm

Alert:

```javascript
apex.message.alert( "The file is ready." );
```

Styled alert with callback:

```javascript
apex.message.alert(
    "The import completed with warnings.",
    function() {
        apex.region( "import_log" ).refresh();
    },
    {
        title: "Import",
        style: "warning"
    }
);
```

Confirm:

```javascript
apex.message.confirm(
    "Delete this row?",
    function( okPressed ) {
        if ( okPressed ) {
            apex.page.submit( {
                request: "DELETE",
                showWait: true
            } );
        }
    },
    {
        title: "Confirm Delete",
        style: "danger"
    }
);
```

## Accessibility Announcements

Use polite announcement for status:

```javascript
apex.message.ariaMessage( "Search results updated." );
```

Use assertive alert for urgent feedback:

```javascript
apex.message.ariaAlertMessage( "Session will expire soon." );
```

## Visibility Checks

Custom region types can register a function that reveals hidden containers before APEX focuses an error item.

```javascript
apex.message.addVisibilityCheck( function( id ) {
    const item$ = apex.jQuery( "#" + apex.util.escapeCSS( id ) );
    const tab$ = item$.closest( ".my-tabs-panel" );

    if ( tab$.length && tab$.is( ":hidden" ) ) {
        showTabPanel( tab$.attr( "id" ) );
    }
} );
```

## Safety Guidance

- Prefer `apex.message` over hand-built notification markup.
- Clear stale errors before showing new client-side validation results.
- Use `unsafe: false` for messages that include user or external data.
- Use `apex.page.submit` for page submit flows and `apex.server.process` for Ajax flows.
- Avoid blocking users with dialogs for routine success messages.

