# apex.page

Source: [Oracle APEX 26.1 JavaScript API Reference](https://docs.oracle.com/en/database/oracle/apex/26.1/aexjs/apex.page.html)

Status: curated first-pass reference.

## Purpose

`apex.page` manages page submit, page validation, confirmation submit flows, and Warn on Unsaved Changes behavior. Use it instead of raw form submission so APEX page processing, validation, request values, wait indicators, and change tracking work correctly.

## API Surface

| Need | Members |
| --- | --- |
| Submit page | `submit`, `$s` alias in legacy contexts |
| Confirm and submit | `confirm` |
| Client validation | `validate` |
| Change tracking | `isChanged`, `warnOnUnsavedChanges`, `cancelWarnOnUnsavedChanges` |

## Submit

Simple submit with request:

```javascript
apex.page.submit( {
    request: "SAVE"
} );
```

Set item values and show a wait indicator:

```javascript
apex.page.submit( {
    request: "APPROVE",
    set: {
        P10_STATUS: "APPROVED",
        P10_APPROVED_BY: $v( "APP_USER" )
    },
    showWait: true
} );
```

Validate before submit:

```javascript
apex.page.submit( {
    request: "SAVE",
    validate: true,
    showWait: true
} );
```

## Confirm

Use `confirm` when the user should explicitly approve a page submit action.

```javascript
apex.page.confirm(
    "Delete this order?",
    {
        request: "DELETE",
        set: {
            P10_CONFIRM_DELETE: "Y"
        },
        showWait: true,
        validate: false
    }
);
```

For custom callback behavior instead of page submit, use `apex.message.confirm`.

## Validate

Run client-side validation without submitting:

```javascript
if ( apex.page.validate() ) {
    apex.message.showPageSuccess( "The page is valid." );
}
```

Validate a location if the API call requires it:

```javascript
const valid = apex.page.validate( "INLINE" );
```

## Warn On Unsaved Changes

Check whether APEX believes the page has unsaved changes:

```javascript
if ( apex.page.isChanged() ) {
    apex.message.alert( "You have unsaved changes." );
}
```

Register an additional custom check:

```javascript
let chartChanged = false;

apex.page.warnOnUnsavedChanges(
    "You have unsaved changes.",
    function() {
        return chartChanged;
    }
);
```

Cancel warning before intentional navigation away:

```javascript
apex.page.cancelWarnOnUnsavedChanges();
apex.navigation.redirect( "f?p=&APP_ID.:1:&SESSION." );
```

## Safety Guidance

- Use `apex.page.submit` for full page submit flows.
- Use `apex.server.process` for Ajax calls that should not run page submit processing.
- Use `validate: true` for save/submit operations that rely on browser/APEX client validation.
- Avoid bypassing Warn on Unsaved Changes unless the user intentionally cancels or leaves the workflow.
- Treat item values set in JavaScript as untrusted; validate again server-side.

