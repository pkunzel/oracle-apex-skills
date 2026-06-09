# apex

Source: [Oracle APEX 26.1 JavaScript API Reference](https://docs.oracle.com/en/database/oracle/apex/26.1/aexjs/apex.html)

Status: curated first-pass reference.

## Purpose

`apex` is the top-level browser namespace for Oracle APEX. It exposes environment values, page context, common functions, shared item/region interfaces, and APEX-wide events. Most application code calls specialized namespaces such as `apex.item`, `apex.region`, `apex.server`, `apex.message`, `apex.page`, or `apex.navigation`; this page is the overview and root-level API guide.

## When To Use

Use root `apex` when:

- Code needs current environment values such as `APP_ID`, `APP_PAGE_ID`, `APP_SESSION`, or file prefixes.
- Code should use APEX's jQuery instance through `apex.jQuery`.
- A handler listens for APEX-wide events such as `apexafterrefresh`, `apexpagesubmit`, or dialog-close events.
- You need the root aliases `apex.item`, `apex.region`, `apex.submit`, or `apex.confirm`.
- Code needs `apex.gPageContext$` to bind events in the current APEX page context.

Prefer more specific namespaces for real work: `apex.page.submit` over `apex.submit` when writing new docs, `apex.navigation` for navigation, and `apex.server` for Ajax.

## Environment Values

Redirect to page 10 in the same application and session:

```javascript
apex.navigation.redirect(
    "f?p=" + apex.env.APP_ID + ":10:" + apex.env.APP_SESSION
);
```

Use `apex.env.APP_FILES`, `WORKSPACE_FILES`, or `APEX_FILES` when building client-side URLs to static files:

```javascript
const iconUrl = apex.env.APP_FILES + "icons/task.svg";
```

## jQuery And Page Context

Use `apex.jQuery` instead of relying on global `$`:

```javascript
const $ = apex.jQuery;

$( ".js-refresh-region", apex.gPageContext$ ).on( "click", function() {
    apex.region( "tasks" ).refresh();
} );
```

## Root Item And Region Access

```javascript
const statusItem = apex.item( "P10_STATUS" );
const tasksRegion = apex.region( "tasks" );

statusItem.setValue( "READY" );
tasksRegion.refresh();
```

Give important regions Static IDs so `apex.region( staticId )` remains stable.

## Common Events

Refresh a parent region after any modal dialog closes:

```javascript
apex.gPageContext$.on( "apexafterclosecanceldialog", function( event, data ) {
    apex.debug.info( "Dialog page closed: %s", data.dialogPageId );
    apex.region( "tasks" ).refresh();
} );
```

Normalize an item just before submit:

```javascript
apex.gPageContext$.on( "apexpagesubmit", function() {
    const item = apex.item( "P10_CODE" );
    item.setValue( item.getValue().trim().toUpperCase() );
} );
```

## Submit And Confirm Aliases

`apex.submit` and `apex.confirm` are root aliases for page submit/confirm behavior:

```javascript
apex.submit( { request: "SAVE" } );
```

```javascript
apex.confirm( "Delete this task?", {
    request: "DELETE",
    set: {
        "P10_TASK_ID": apex.item( "P10_TASK_ID" ).getValue()
    }
} );
```

Prefer the more explicit `apex.page.submit` and `apex.page.confirm` in new code examples when the surrounding context is about page submission.

## Notes

- `apex.env` values are convenient, but client-side values are visible to users and must not be treated as secrets.
- Root APEX events are jQuery events; bind to `apex.gPageContext$` unless a specific region/item element is documented.
- `apex.items` and `apex.regions` contain interfaces that have been created on the page.
- Treat all browser-origin values as untrusted when they reach PL/SQL.

## API Surface

| Member | Parameters | Returns |
| --- | --- | --- |
| `env` | None documented | Not documented |
| `gPageContext$` | None documented | Not documented |
| `items` | None documented | Not documented |
| `jQuery` | None documented | Not documented |
| `regions` | None documented | Not documented |
| `apexafterclosecanceldialog` | None documented | Not documented |
| `apexafterclosedialog` | None documented | Not documented |
| `apexafterrefresh` | None documented | Not documented |
| `apexbeforepagesubmit` | None documented | Not documented |
| `apexbeforerefresh` | None documented | Not documented |
| `apexbeginrecordedit` | None documented | Not documented |
| `apexcurrentrowchange` | None documented | Not documented |
| `apexendrecordedit` | None documented | Not documented |
| `apexpagesubmit` | None documented | Not documented |
| `apexreadyend` | None documented | Not documented |
| `apexselectionchange` | None documented | Not documented |
| `apexwindowresized` | None documented | Not documented |
| `confirm` | None documented | Not documented |
| `item` | `pItemId` | The item interface for the given item name. If there is no such item on the page the returned item interface node property will be false. Type item Example This function is not used by itself. See the examples for methods of the item interface. |
| `region` | `pRegionId` | The region interface or null if there is no element with the given pRegionId . Type region | null Example This function is not used by itself. See the examples for methods of the region interface. |
| `submit` | None documented | Not documented |
| `userHasTouched` | None documented | true if the user has been using touch to interact with the web app and false otherwise. Type boolean Documentation generated by JSDoc 4.0.5 on Fri Apr 17 2026 17:55:51 GMT+0000 (Coordinated Universal Time) Oracle APEX Release 26.1, JavaScript API Reference Copyright &copy; 2003, 2026, Oracle and/or its affiliates. All rights reserved. |

## env

Signature: `(static) env :object`

### Purpose

Redirect to page 2 in the current application.

### Option/Object Properties

| Name | Type | Description |
| --- | --- | --- |
| `APP_USER` | string | The current username |
| `APP_ID` | string | The application ID |
| `APP_PAGE_ID` | string | The page ID |
| `APP_SESSION` | string | The session ID |
| `APP_FILES` | string | The relative path of the application static files |
| `WORKSPACE_FILES` | string | The relative path of the workspace static files |
| `APEX_FILES` | string | The relative path of the files distributed with Oracle APEX |
| `APEX_VERSION` | string | The full version of the Oracle APEX instance |
| `APEX_BASE_VERSION` | string | The base version of the Oracle APEX instance |

### Simple Example

```javascript
apex.env;
```

## gPageContext$

Signature: `(static) gPageContext$ :jQuery`

### Purpose

This namespace property stores the current page context. The current page context is set to the HTML document (same as apex.jQuery(document)).

### Simple Example

```javascript
apex.gPageContext$;
```

## items

Signature: `(static) items`

### Purpose

Use `items` as documented by the `apex` module.

### Simple Example

```javascript
apex.items();
```

## jQuery

Signature: `(static) jQuery :function`

### Purpose

This namespace property holds the jQuery function that APEX uses. Ideally there is just one copy of jQuery on a page but it is possible to have multiple copies and even different versions of jQuery on a page. This is sometimes necessary when using third party plugins that only work with an older version of jQuery. Use this property in place of global variables $ or jQuery to ensure you are using the same jQuery library that APEX is using.

### Simple Example

```javascript
apex.jQuery;
```

## regions

Signature: `(static) regions`

### Purpose

Use `regions` as documented by the `apex` module.

### Simple Example

```javascript
apex.regions();
```

## apexafterclosecanceldialog

Signature: `apexafterclosecanceldialog`

### Purpose

This event is triggered when an APEX modal dialog page is closed or cancelled by either the Dynamic Action Close Dialog action, the Dynamic Action Cancel Dialog action, the Close Dialog process, the Close (X) button of an dialog or by pressing the escape (ESC) key inside a dialog. This is equivalent to the Dialog Closed Dynamic Action event. This event is triggered on the element that opened the dialog.

### Option/Object Properties

| Name | Type | Description |
| --- | --- | --- |
| `Event` | Event | jQuery event object |
| `data` | object | The event handler receives an object argument with these properties. Properties Name Type Description |
| `dialogPageId` | string | The page number of the dialog page that closed. |
| `closeAction` | string | The action which triggered closing the dialog. Either "close" or "cancel". |
| `*` | string | For each page item listed in the Close Dialog process or dynamic action setting Items to Return there is a property with the same name as the item. The value is the value of the item. |

### Simple Example

```javascript
apex.apexafterclosecanceldialog();
```

## apexafterclosedialog

Signature: `apexafterclosedialog`

### Purpose

This event is triggered when an APEX modal dialog page is closed by either the Dynamic Action Close Dialog action or the Close Dialog process. This is equivalent to the Dialog Closed Dynamic Action event. This event is triggered on the element that opened the dialog.

### Option/Object Properties

| Name | Type | Description |
| --- | --- | --- |
| `Event` | Event | jQuery event object |
| `data` | object | The event handler receives an object argument with these properties. Properties Name Type Description |
| `dialogPageId` | string | The page number of the dialog page that closed. |
| `closeAction` | string | The action which triggered closing the dialog. In this case it is "close". |
| `*` | string | For each page item listed in the Close Dialog process or dynamic action setting Items to Return there is a property with the same name as the item. The value is the value of the item. |

### Simple Example

```javascript
apex.apexafterclosedialog();
```

## apexafterrefresh

Signature: `apexafterrefresh`

### Purpose

This event is triggered by a number of page or column items just after they are refreshed with new content or data from the server. It is equivalent to the Dynamic Action event After Refresh. Specifically any item that supports the Cascading LOV Parent Item(s) attribute should trigger this event. This event can also be triggered by the apex.server.plugin and apex.server.process APIs if the refreshObject option is provided. The event is triggered on the item element or the element given by the refreshObject . The event handler receives the data given in refreshObjectData if any.

### Option/Object Properties

| Name | Type | Description |
| --- | --- | --- |
| `event` | Event |  jQuery event object. |
| `data` | Object |  The refreshObjectData if any. |

### Simple Example

```javascript
apex.apexafterrefresh();
```

## apexbeforepagesubmit

Signature: `apexbeforepagesubmit`

### Purpose

This event is triggered when the page is submitted with apex.page.submit or apex.page.confirm . This includes buttons with action Submit Page and Dynamic Action Submit Page action. It is equivalent to the Dynamic Action event Before Page Submit. It is triggered before the page is validated. It is triggered on apex.gPageContext$ , which is the document. This event can be canceled by a Dynamic Action Confirm or Cancel Event action so you cannot rely on the page actually being submitted. If you need code to run just before the page is actually submitted see the apex.event:apexpagesubmit event.

### Option/Object Properties

| Name | Type | Description |
| --- | --- | --- |
| `event` | Event | jQuery event object. |
| `request` | string | The request string. |

### Simple Example

```javascript
apex.apexbeforepagesubmit();
```

## apexbeforerefresh

Signature: `apexbeforerefresh`

### Purpose

This event is triggered by a number of page or column items just before they are refreshed with new content or data from the server. It is equivalent to the Dynamic Action event Before Refresh. Specifically any item that supports the Cascading LOV Parent Item(s) attribute should trigger this event. This event can also be triggered by the apex.server.plugin and apex.server.process APIs if the refreshObject option is provided. The event is triggered on the item element or the element given by the refreshObject . The event handler receives the data given in refreshObjectData if any.

### Option/Object Properties

| Name | Type | Description |
| --- | --- | --- |
| `event` | Event |  jQuery event object. |
| `data` | Object |  The refreshObjectData if any. |

### Simple Example

```javascript
apex.apexbeforerefresh();
```

## apexbeginrecordedit

Signature: `apexbeginrecordedit`

### Purpose

This event is triggered when a model row/record is about to be edited (when a new row/record is selected or enters edit mode).

### Option/Object Properties

| Name | Type | Description |
| --- | --- | --- |
| `event` | Event | jQuery event object. |
| `data` | object | Additional event data. Properties Name Type Description |
| `model` | model | The model that is being edited. |
| `record` | model.Record | The record that is beginning to be edited. |
| `recordId` | string | The record id that is beginning to be edited. |

### Simple Example

```javascript
apex.apexbeginrecordedit();
```

## apexcurrentrowchange

Signature: `apexcurrentrowchange`

### Purpose

This event is triggered when the current item/row/record changes in a region that supports keyboard navigation and focus management. This event happens a few milliseconds after the last focused item/row/record changes.

### Option/Object Properties

| Name | Type | Description |
| --- | --- | --- |
| `event` | Event | jQuery event object. |
| `data` | object | Additional event data. Properties Name Type Description |
| `currentValue` | Array. | The value for the current item/row/record in the report or null if there is none. The value is typically configured to be the primary key of the record. |

### Simple Example

```javascript
apex.apexcurrentrowchange();
```

## apexendrecordedit

Signature: `apexendrecordedit`

### Purpose

This event is triggered when a model row/record is done being edited (when a new row/record is selected or exits edit mode).

### Option/Object Properties

| Name | Type | Description |
| --- | --- | --- |
| `event` | Event | jQuery event object. |
| `data` | object | Additional event data. Properties Name Type Description |
| `model` | model | The model that is being edited. |
| `record` | model.Record | The record that is done being edited. |
| `recordId` | string | The record id that is done being edited. |

### Simple Example

```javascript
apex.apexendrecordedit();
```

## apexpagesubmit

Signature: `apexpagesubmit`

### Purpose

This event is triggered when the page is submitted with apex.page.submit or apex.page.confirm . This includes buttons with action Submit Page and Dynamic Action Submit Page action. It is triggered after the page is validated. It is triggered on apex.gPageContext$ , which is the document. This event is the last chance to set or modify page items before the page is submitted.

### Option/Object Properties

| Name | Type | Description |
| --- | --- | --- |
| `event` | Event | jQuery event object. |
| `request` | string | The request string. |

### Simple Example

```javascript
apex.apexpagesubmit();
```

## apexreadyend

Signature: `apexreadyend`

### Purpose

This event is triggered at the end of all APEX page load functionality. This events differs from the standard page load event in that it will not only wait for the DOM to be ready, but also for any delayLoading components to be ready.

### Option/Object Properties

| Name | Type | Description |
| --- | --- | --- |
| `event` | Event | jQuery event object. |

### Simple Example

```javascript
apex.apexreadyend();
```

## apexselectionchange

Signature: `apexselectionchange`

### Purpose

This event is triggered when the selection changes in a region that supports selection. This event is debounced, which means that it is not triggered until up to a few hundred milliseconds after the last change in selection state. This avoids rapid event triggering while the user moves quickly through the report with the keyboard.

### Option/Object Properties

| Name | Type | Description |
| --- | --- | --- |
| `event` | Event | jQuery event object. |
| `data` | object | Additional event data. Properties Name Type Description |
| `selectedValues` | Array. | An array of the values for the currently selected items/rows/records in the report. If nothing is selected the array is empty. The values are typically configured to be the primary key of the records. |

### Simple Example

```javascript
apex.apexselectionchange();
```

## apexwindowresized

Signature: `apexwindowresized`

### Purpose

This event is triggered on the window a couple hundred milliseconds after the window stops resizing. Listen for this event to adjust or resize page content after the window is done resizing. In some cases this is a better alternative to the window resize event, which is triggered many times as the window is being resized, because it is triggered just once after the window stops resizing.

### Option/Object Properties

| Name | Type | Description |
| --- | --- | --- |
| `Event` | Event | jQuery event object |

### Simple Example

```javascript
apex.apexwindowresized();
```

## confirm

Signature: `(static) confirm ()`

### Purpose

Use `confirm` as documented by the `apex` module.

### Simple Example

```javascript
apex.confirm();
```

## item

Signature: `(static) item (pItemId) &rarr; { item }`

### Purpose

Return an item interface that is used to access item related methods and properties.

### Parameters

| Name | Type | Description |
| --- | --- | --- |
| `pItemId` | Element | string | The item name. This is also the id of the main DOM element associated with the item. For backward compatibility this can also be the main item DOM Element. Passing in an element is deprecated and the id/name should be used instead. |

### Returns

The item interface for the given item name. If there is no such item on the page the returned item interface node property will be false. Type item Example This function is not used by itself. See the examples for methods of the item interface.

### Simple Example

```javascript
apex.item(
    "P1_ITEM"
);
```

## region

Signature: `(static) region (pRegionId) &rarr; { region |null}`

### Purpose

Return a region interface for the given region id. The returned region interface object can then be used to access region related functions and properties.

### Parameters

| Name | Type | Description |
| --- | --- | --- |
| `pRegionId` | string | Region id or region DOM id. It is a best practice to give a region an HTML DOM id if it is going to be used from JavaScript otherwise an internally generated id is used. The region DOM id is substituted in the region template using the #DOM_ID# string. The region id can be found by viewing the page source in the browser. |

### Returns

The region interface or null if there is no element with the given pRegionId . Type region | null Example This function is not used by itself. See the examples for methods of the region interface.

### Simple Example

```javascript
apex.region(
    "P1_ITEM"
);
```

## submit

Signature: `(static) submit ()`

### Purpose

Use `submit` as documented by the `apex` module.

### Simple Example

```javascript
apex.submit();
```

## userHasTouched

Signature: `(static) userHasTouched () &rarr; {boolean}`

### Purpose

Determine if the user is or has been interacting with this web app using touch since the browser session began. Note: it is possible for the user to touch for the first time after this function is called.

### Returns

true if the user has been using touch to interact with the web app and false otherwise. Type boolean Documentation generated by JSDoc 4.0.5 on Fri Apr 17 2026 17:55:51 GMT+0000 (Coordinated Universal Time) Oracle APEX Release 26.1, JavaScript API Reference Copyright &copy; 2003, 2026, Oracle and/or its affiliates. All rights reserved.

### Simple Example

```javascript
apex.userHasTouched();
```

## Notes

- Run APEX JavaScript APIs from an APEX page where the `apex` namespace is loaded.
- Treat client-side values as untrusted when they reach PL/SQL.
- Prefer documented APIs over direct DOM or internal widget state when interacting with APEX components.
