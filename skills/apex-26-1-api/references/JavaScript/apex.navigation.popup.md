# apex.navigation.popup

Source: [Oracle APEX 26.1 JavaScript API Reference](https://docs.oracle.com/en/database/oracle/apex/26.1/aexjs/apex.navigation.popup.html)

Status: curated first-pass reference.

## Purpose

`apex.navigation.popup` contains helper behavior for APEX popup windows. Its documented `close` function is called from the popup page to set an item value in the opener page and close the popup.

Use `apex.navigation.popup.close` only from an APEX page that was opened as a popup by another APEX page.

## When To Use

Use `apex.navigation.popup.close` when:

- A legacy popup LOV or custom popup page must return a single value to an item on the parent page.
- A popup selection page should set the opener item and close itself.

Prefer modal dialogs for most modern workflows. Browser popup blockers and window relationships make popup flows more fragile than APEX dialogs.

## Return A Value To The Opener

Assuming the parent page opened a popup to select a customer and wants `P10_CUSTOMER_ID` set:

```javascript
apex.navigation.popup.close(
    "P10_CUSTOMER_ID",
    apex.item( "P30_CUSTOMER_ID" ).getValue()
);
```

If the popup displays both return and display values, set the display value in the parent with a follow-up parent-page refresh or use a modal dialog workflow with returned values instead.

## Notes

- `pItem` is the parent/opener item, not an item in the popup page.
- `pValue` is client-provided. Validate it on the server after submit or Ajax.
- This API closes a popup window. For APEX modal dialogs, use `apex.navigation.dialog.close`.

## API Surface

| Member | Parameters | Returns |
| --- | --- | --- |
| `close` | `pItem`, `pValue` | Not documented |

## close

Signature: `(static) close (pItem, pValue)`

### Purpose

Sets the value of the item in the parent window (pItem) with (pValue), and then closes the popup window. This function should only be called from an Oracle APEX page that has been opened as a popup window, via a call to apex.navigation.popup , where the call to apex.navigation.popup is originating from another Oracle APEX page.

### Parameters

| Name | Type | Description |
| --- | --- | --- |
| `pItem` | Element | string | The DOM Element or string id (item name) of the page item to be set with the value of pValue . |
| `pValue` | string | The value to be save to the page item referenced in pItem . |

### Simple Example

```javascript
apex.navigation.popup.close(
    "P1_ITEM",
    "Example"
);
```

## Notes

- Run APEX JavaScript APIs from an APEX page where the `apex` namespace is loaded.
- Treat client-side values as untrusted when they reach PL/SQL.
- Prefer documented APIs over direct DOM or internal widget state when interacting with APEX components.
