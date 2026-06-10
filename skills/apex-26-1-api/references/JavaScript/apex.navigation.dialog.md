# apex.navigation.dialog

Source: [Oracle APEX 26.1 JavaScript API Reference](https://docs.oracle.com/en/database/oracle/apex/26.1/aexjs/apex.navigation.dialog.html)

Status: curated first-pass reference.

## Purpose

`apex.navigation.dialog` contains helper functions used from dialog pages and custom dialog integration code. It closes or cancels dialogs and registers close behavior for dialogs opened through `apex.navigation.dialog`.

Use `apex.navigation.dialog` from inside an APEX dialog page when JavaScript must close the dialog and optionally return values to the parent page. Use `apex.navigation.dialog(...)` in the parent page to open a dialog.

## When To Use

Use `apex.navigation.dialog` when:

- A custom button inside a modal dialog should close the dialog.
- A dialog should return item values or a custom object to the parent page.
- A cancel action should close without returning a successful close result.
- Advanced code opens custom dialog UI and needs to register close handling.

Prefer declarative Close Dialog and Cancel Dialog actions when they cover the workflow.

## Close With Returned Values

Assuming a modal dialog page has items `P30_ORDER_ID` and `P30_STATUS`:

```javascript
apex.navigation.dialog.close( true, {
    P30_ORDER_ID: apex.item( "P30_ORDER_ID" ).getValue(),
    P30_STATUS: apex.item( "P30_STATUS" ).getValue()
} );
```

The parent page can listen for the dialog close event:

```javascript
apex.gPageContext$.on( "apexafterclosedialog", function( event, data ) {
    if ( data.P30_ORDER_ID ) {
        apex.region( "orders" ).refresh();
    }
} );
```

## Close By Returning Item Names

When the dialog items already contain the values to return:

```javascript
apex.navigation.dialog.close( true, [ "P30_ORDER_ID", "P30_STATUS" ] );
```

## Cancel Dialog

```javascript
apex.navigation.dialog.cancel( true );
```

Use cancel for "no change" flows. The parent can listen to `apexafterclosecanceldialog` if it needs to react to both close and cancel.

## Advanced Close Handler

`registerCloseHandler` is for custom dialog implementations. Most application code should not call it directly.

## API Surface

| Member | Parameters | Returns |
| --- | --- | --- |
| `cancel` | `pIsModal` | Not documented |
| `close` | `pIsModal`, `pAction` | Not documented |
| `registerCloseHandler` | `pOptions` | Not documented |

## cancel

Signature: `(static) cancel (pIsModal)`

### Purpose

Closes the dialog window.

### Parameters

| Name | Type | Description |
| --- | --- | --- |
| `pIsModal` | boolean | If true, then the dialog is identified as being modal. If false, then the dialog is identified as being non-modal. |

### Simple Example

```javascript
apex.navigation.dialog.cancel( true );
```

## close

Signature: `(static) close (pIsModal, pAction opt )`

### Purpose

Executes an action and then closes the dialog window.

### Parameters

| Name | Type | Description |
| --- | --- | --- |
| `pIsModal` | boolean |  If true, then the dialog is identified as being modal. If false, then the dialog is identified as being non-modal. |
| `pAction` | string | function | Object |  The action can be one of the following: a URL which will trigger a redirect in the parent page a function to redirect to a different dialog page false to cancel the dialog an object of page items and values which will be exposed in the apexafterclosedialog or apexafterclosecanceldialog event an array of page item names, the values will be gathered from the page items to create an object of page item values to be exposed in the apexafterclosedialog or apexafterclosecanceldialog event |

### Simple Example

```javascript
apex.navigation.dialog.close(
    true,
    {
        P30_ORDER_ID: apex.item( "P30_ORDER_ID" ).getValue(),
        P30_STATUS: apex.item( "P30_STATUS" ).getValue()
    }
);
```

## registerCloseHandler

Signature: `(static) registerCloseHandler (pOptions)`

### Purpose

Registers the internal "close" event of a dialog. The event will be triggered by fireCloseEvent and depending on the passed in pAction will:

### Parameters

| Name | Type | Description |
| --- | --- | --- |
| `pOptions` | Object | Has to contain the following attributes: Properties Name Type Attributes Description |

### Option/Object Properties

| Name | Type | Description |
| --- | --- | --- |
| `handler$` | Object |  jQuery object where the event will be registered for. |
| `dialog` | Element | Object |  DOM Element/jQuery/... object of the current dialog instance which will be passed into the open dialog call if the existing dialog should be re-used. |
| `closeFunction` | function |  Function which is used to close the dialog. |

### Simple Example

```javascript
apex.navigation.dialog.registerCloseHandler(
    {}
);
```

## Notes

- Run APEX JavaScript APIs from an APEX page where the `apex` namespace is loaded.
- Treat client-side values as untrusted when they reach PL/SQL.
- Prefer documented APIs over direct DOM or internal widget state when interacting with APEX components.
