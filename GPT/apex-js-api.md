# Oracle APEX 26.1 JavaScript API Knowledge

This file is a compiled GPT-ready knowledge bundle for the Oracle APEX 26.1 JavaScript API. It contains the local JavaScript namespace, interface, widget, and global API pages from the APEX API reference project, with non-API scaffolding removed.

Assume JavaScript examples run on an Oracle APEX page where the `apex` namespace and APEX jQuery integration are available. Treat browser-side values as untrusted when they reach PL/SQL, prefer documented APEX APIs over direct internal widget state, and verify production edge cases against the linked Oracle APEX 26.1 source pages.

Included coverage:

- JavaScript modules/interfaces/widgets/global groups: 46
- Primary source: https://docs.oracle.com/en/database/oracle/apex/26.1/aexjs/index.html
---

## JavaScript API Reference

| Module | Kind | Source |
| --- | --- | --- |
| apex | namespace | [Oracle](https://docs.oracle.com/en/database/oracle/apex/26.1/aexjs/apex.html) |
| apex.actions | namespace | [Oracle](https://docs.oracle.com/en/database/oracle/apex/26.1/aexjs/apex.actions.html) |
| apex.da | namespace | [Oracle](https://docs.oracle.com/en/database/oracle/apex/26.1/aexjs/apex.da.html) |
| apex.date | namespace | [Oracle](https://docs.oracle.com/en/database/oracle/apex/26.1/aexjs/apex.date.html) |
| apex.debug | namespace | [Oracle](https://docs.oracle.com/en/database/oracle/apex/26.1/aexjs/apex.debug.html) |
| apex.event | namespace | [Oracle](https://docs.oracle.com/en/database/oracle/apex/26.1/aexjs/apex.event.html) |
| apex.item | namespace | [Oracle](https://docs.oracle.com/en/database/oracle/apex/26.1/aexjs/apex.item.html) |
| apex.lang | namespace | [Oracle](https://docs.oracle.com/en/database/oracle/apex/26.1/aexjs/apex.lang.html) |
| apex.locale | namespace | [Oracle](https://docs.oracle.com/en/database/oracle/apex/26.1/aexjs/apex.locale.html) |
| apex.message | namespace | [Oracle](https://docs.oracle.com/en/database/oracle/apex/26.1/aexjs/apex.message.html) |
| apex.model | namespace | [Oracle](https://docs.oracle.com/en/database/oracle/apex/26.1/aexjs/apex.model.html) |
| apex.navigation | namespace | [Oracle](https://docs.oracle.com/en/database/oracle/apex/26.1/aexjs/apex.navigation.html) |
| apex.navigation.dialog | namespace | [Oracle](https://docs.oracle.com/en/database/oracle/apex/26.1/aexjs/apex.navigation.dialog.html) |
| apex.navigation.popup | namespace | [Oracle](https://docs.oracle.com/en/database/oracle/apex/26.1/aexjs/apex.navigation.popup.html) |
| apex.page | namespace | [Oracle](https://docs.oracle.com/en/database/oracle/apex/26.1/aexjs/apex.page.html) |
| apex.pwa | namespace | [Oracle](https://docs.oracle.com/en/database/oracle/apex/26.1/aexjs/apex.pwa.html) |
| apex.region | namespace | [Oracle](https://docs.oracle.com/en/database/oracle/apex/26.1/aexjs/apex.region.html) |
| apex.server | namespace | [Oracle](https://docs.oracle.com/en/database/oracle/apex/26.1/aexjs/apex.server.html) |
| apex.storage | namespace | [Oracle](https://docs.oracle.com/en/database/oracle/apex/26.1/aexjs/apex.storage.html) |
| apex.theme | namespace | [Oracle](https://docs.oracle.com/en/database/oracle/apex/26.1/aexjs/apex.theme.html) |
| apex.util | namespace | [Oracle](https://docs.oracle.com/en/database/oracle/apex/26.1/aexjs/apex.util.html) |
| apex.util.delayLinger | namespace | [Oracle](https://docs.oracle.com/en/database/oracle/apex/26.1/aexjs/apex.util.delayLinger.html) |
| apex.widget | namespace | [Oracle](https://docs.oracle.com/en/database/oracle/apex/26.1/aexjs/apex.widget.html) |
| actions | interface | [Oracle](https://docs.oracle.com/en/database/oracle/apex/26.1/aexjs/actions.html) |
| cardsRegion | interface | [Oracle](https://docs.oracle.com/en/database/oracle/apex/26.1/aexjs/cardsRegion.html) |
| facetsRegion | interface | [Oracle](https://docs.oracle.com/en/database/oracle/apex/26.1/aexjs/facetsRegion.html) |
| htmlBuilder | interface | [Oracle](https://docs.oracle.com/en/database/oracle/apex/26.1/aexjs/htmlBuilder.html) |
| interactiveGridView | interface | [Oracle](https://docs.oracle.com/en/database/oracle/apex/26.1/aexjs/interactiveGridView.html) |
| interactiveReportRegion | interface | [Oracle](https://docs.oracle.com/en/database/oracle/apex/26.1/aexjs/interactiveReportRegion.html) |
| item | interface | [Oracle](https://docs.oracle.com/en/database/oracle/apex/26.1/aexjs/item.html) |
| mapRegion | interface | [Oracle](https://docs.oracle.com/en/database/oracle/apex/26.1/aexjs/mapRegion.html) |
| model | interface | [Oracle](https://docs.oracle.com/en/database/oracle/apex/26.1/aexjs/model.html) |
| numberFieldItem | interface | [Oracle](https://docs.oracle.com/en/database/oracle/apex/26.1/aexjs/numberFieldItem.html) |
| region | interface | [Oracle](https://docs.oracle.com/en/database/oracle/apex/26.1/aexjs/region.html) |
| templateReportRegion | interface | [Oracle](https://docs.oracle.com/en/database/oracle/apex/26.1/aexjs/templateReportRegion.html) |
| treeNodeAdapter | interface | [Oracle](https://docs.oracle.com/en/database/oracle/apex/26.1/aexjs/treeNodeAdapter.html) |
| grid | widget | [Oracle](https://docs.oracle.com/en/database/oracle/apex/26.1/aexjs/grid.html) |
| iconList | widget | [Oracle](https://docs.oracle.com/en/database/oracle/apex/26.1/aexjs/iconList.html) |
| interactiveGrid | widget | [Oracle](https://docs.oracle.com/en/database/oracle/apex/26.1/aexjs/interactiveGrid.html) |
| menu | widget | [Oracle](https://docs.oracle.com/en/database/oracle/apex/26.1/aexjs/menu.html) |
| menuButton | widget | [Oracle](https://docs.oracle.com/en/database/oracle/apex/26.1/aexjs/menuButton.html) |
| recordView | widget | [Oracle](https://docs.oracle.com/en/database/oracle/apex/26.1/aexjs/recordView.html) |
| tableModelView | widget | [Oracle](https://docs.oracle.com/en/database/oracle/apex/26.1/aexjs/tableModelView.html) |
| tableModelViewBase | widget | [Oracle](https://docs.oracle.com/en/database/oracle/apex/26.1/aexjs/tableModelViewBase.html) |
| treeView | widget | [Oracle](https://docs.oracle.com/en/database/oracle/apex/26.1/aexjs/treeView.html) |
| Non-namespace APIs | global | [Oracle](https://docs.oracle.com/en/database/oracle/apex/26.1/aexjs/global.html) |
---

## apex

Source: [Oracle APEX 26.1 JavaScript API Reference](https://docs.oracle.com/en/database/oracle/apex/26.1/aexjs/apex.html)

### Purpose

`apex` is the top-level browser namespace for Oracle APEX. It exposes environment values, page context, common functions, shared item/region interfaces, and APEX-wide events. Most application code calls specialized namespaces such as `apex.item`, `apex.region`, `apex.server`, `apex.message`, `apex.page`, or `apex.navigation`; this page is the overview and root-level API guide.

### When To Use

Use root `apex` when:

- Code needs current environment values such as `APP_ID`, `APP_PAGE_ID`, `APP_SESSION`, or file prefixes.
- Code should use APEX's jQuery instance through `apex.jQuery`.
- A handler listens for APEX-wide events such as `apexafterrefresh`, `apexpagesubmit`, or dialog-close events.
- You need the root aliases `apex.item`, `apex.region`, `apex.submit`, or `apex.confirm`.
- Code needs `apex.gPageContext$` to bind events in the current APEX page context.

Prefer more specific namespaces for real work: `apex.page.submit` over `apex.submit` when writing new docs, `apex.navigation` for navigation, and `apex.server` for Ajax.

### Environment Values

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

### jQuery And Page Context

Use `apex.jQuery` instead of relying on global `$`:

```javascript
const $ = apex.jQuery;

$( ".js-refresh-region", apex.gPageContext$ ).on( "click", function() {
    apex.region( "tasks" ).refresh();
} );
```

### Root Item And Region Access

```javascript
const statusItem = apex.item( "P10_STATUS" );
const tasksRegion = apex.region( "tasks" );

statusItem.setValue( "READY" );
tasksRegion.refresh();
```

Give important regions Static IDs so `apex.region( staticId )` remains stable.

### Common Events

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

### Submit And Confirm Aliases

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

### Notes

- `apex.env` values are convenient, but client-side values are visible to users and must not be treated as secrets.
- Root APEX events are jQuery events; bind to `apex.gPageContext$` unless a specific region/item element is documented.
- `apex.items` and `apex.regions` contain interfaces that have been created on the page.
- Treat all browser-origin values as untrusted when they reach PL/SQL.

### API Surface

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

### env

Signature: `(static) env :object`

#### Purpose

Redirect to page 2 in the current application.

#### Option/Object Properties

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

#### Simple Example

```javascript
apex.env;
```

### gPageContext$

Signature: `(static) gPageContext$ :jQuery`

#### Purpose

This namespace property stores the current page context. The current page context is set to the HTML document (same as apex.jQuery(document)).

#### Simple Example

```javascript
apex.gPageContext$;
```

### items

Signature: `(static) items`

#### Purpose

Use `items` as documented by the `apex` module.

#### Simple Example

```javascript
apex.items();
```

### jQuery

Signature: `(static) jQuery :function`

#### Purpose

This namespace property holds the jQuery function that APEX uses. Ideally there is just one copy of jQuery on a page but it is possible to have multiple copies and even different versions of jQuery on a page. This is sometimes necessary when using third party plugins that only work with an older version of jQuery. Use this property in place of global variables $ or jQuery to ensure you are using the same jQuery library that APEX is using.

#### Simple Example

```javascript
apex.jQuery;
```

### regions

Signature: `(static) regions`

#### Purpose

Use `regions` as documented by the `apex` module.

#### Simple Example

```javascript
apex.regions();
```

### apexafterclosecanceldialog

Signature: `apexafterclosecanceldialog`

#### Purpose

This event is triggered when an APEX modal dialog page is closed or cancelled by either the Dynamic Action Close Dialog action, the Dynamic Action Cancel Dialog action, the Close Dialog process, the Close (X) button of an dialog or by pressing the escape (ESC) key inside a dialog. This is equivalent to the Dialog Closed Dynamic Action event. This event is triggered on the element that opened the dialog.

#### Option/Object Properties

| Name | Type | Description |
| --- | --- | --- |
| `Event` | Event | jQuery event object |
| `data` | object | The event handler receives an object argument with these properties. Properties Name Type Description |
| `dialogPageId` | string | The page number of the dialog page that closed. |
| `closeAction` | string | The action which triggered closing the dialog. Either "close" or "cancel". |
| `*` | string | For each page item listed in the Close Dialog process or dynamic action setting Items to Return there is a property with the same name as the item. The value is the value of the item. |

#### Simple Example

```javascript
apex.apexafterclosecanceldialog();
```

### apexafterclosedialog

Signature: `apexafterclosedialog`

#### Purpose

This event is triggered when an APEX modal dialog page is closed by either the Dynamic Action Close Dialog action or the Close Dialog process. This is equivalent to the Dialog Closed Dynamic Action event. This event is triggered on the element that opened the dialog.

#### Option/Object Properties

| Name | Type | Description |
| --- | --- | --- |
| `Event` | Event | jQuery event object |
| `data` | object | The event handler receives an object argument with these properties. Properties Name Type Description |
| `dialogPageId` | string | The page number of the dialog page that closed. |
| `closeAction` | string | The action which triggered closing the dialog. In this case it is "close". |
| `*` | string | For each page item listed in the Close Dialog process or dynamic action setting Items to Return there is a property with the same name as the item. The value is the value of the item. |

#### Simple Example

```javascript
apex.apexafterclosedialog();
```

### apexafterrefresh

Signature: `apexafterrefresh`

#### Purpose

This event is triggered by a number of page or column items just after they are refreshed with new content or data from the server. It is equivalent to the Dynamic Action event After Refresh. Specifically any item that supports the Cascading LOV Parent Item(s) attribute should trigger this event. This event can also be triggered by the apex.server.plugin and apex.server.process APIs if the refreshObject option is provided. The event is triggered on the item element or the element given by the refreshObject . The event handler receives the data given in refreshObjectData if any.

#### Option/Object Properties

| Name | Type | Description |
| --- | --- | --- |
| `event` | Event |  jQuery event object. |
| `data` | Object |  The refreshObjectData if any. |

#### Simple Example

```javascript
apex.apexafterrefresh();
```

### apexbeforepagesubmit

Signature: `apexbeforepagesubmit`

#### Purpose

This event is triggered when the page is submitted with apex.page.submit or apex.page.confirm . This includes buttons with action Submit Page and Dynamic Action Submit Page action. It is equivalent to the Dynamic Action event Before Page Submit. It is triggered before the page is validated. It is triggered on apex.gPageContext$ , which is the document. This event can be canceled by a Dynamic Action Confirm or Cancel Event action so you cannot rely on the page actually being submitted. If you need code to run just before the page is actually submitted see the apex.event:apexpagesubmit event.

#### Option/Object Properties

| Name | Type | Description |
| --- | --- | --- |
| `event` | Event | jQuery event object. |
| `request` | string | The request string. |

#### Simple Example

```javascript
apex.apexbeforepagesubmit();
```

### apexbeforerefresh

Signature: `apexbeforerefresh`

#### Purpose

This event is triggered by a number of page or column items just before they are refreshed with new content or data from the server. It is equivalent to the Dynamic Action event Before Refresh. Specifically any item that supports the Cascading LOV Parent Item(s) attribute should trigger this event. This event can also be triggered by the apex.server.plugin and apex.server.process APIs if the refreshObject option is provided. The event is triggered on the item element or the element given by the refreshObject . The event handler receives the data given in refreshObjectData if any.

#### Option/Object Properties

| Name | Type | Description |
| --- | --- | --- |
| `event` | Event |  jQuery event object. |
| `data` | Object |  The refreshObjectData if any. |

#### Simple Example

```javascript
apex.apexbeforerefresh();
```

### apexbeginrecordedit

Signature: `apexbeginrecordedit`

#### Purpose

This event is triggered when a model row/record is about to be edited (when a new row/record is selected or enters edit mode).

#### Option/Object Properties

| Name | Type | Description |
| --- | --- | --- |
| `event` | Event | jQuery event object. |
| `data` | object | Additional event data. Properties Name Type Description |
| `model` | model | The model that is being edited. |
| `record` | model.Record | The record that is beginning to be edited. |
| `recordId` | string | The record id that is beginning to be edited. |

#### Simple Example

```javascript
apex.apexbeginrecordedit();
```

### apexcurrentrowchange

Signature: `apexcurrentrowchange`

#### Purpose

This event is triggered when the current item/row/record changes in a region that supports keyboard navigation and focus management. This event happens a few milliseconds after the last focused item/row/record changes.

#### Option/Object Properties

| Name | Type | Description |
| --- | --- | --- |
| `event` | Event | jQuery event object. |
| `data` | object | Additional event data. Properties Name Type Description |
| `currentValue` | Array. | The value for the current item/row/record in the report or null if there is none. The value is typically configured to be the primary key of the record. |

#### Simple Example

```javascript
apex.apexcurrentrowchange();
```

### apexendrecordedit

Signature: `apexendrecordedit`

#### Purpose

This event is triggered when a model row/record is done being edited (when a new row/record is selected or exits edit mode).

#### Option/Object Properties

| Name | Type | Description |
| --- | --- | --- |
| `event` | Event | jQuery event object. |
| `data` | object | Additional event data. Properties Name Type Description |
| `model` | model | The model that is being edited. |
| `record` | model.Record | The record that is done being edited. |
| `recordId` | string | The record id that is done being edited. |

#### Simple Example

```javascript
apex.apexendrecordedit();
```

### apexpagesubmit

Signature: `apexpagesubmit`

#### Purpose

This event is triggered when the page is submitted with apex.page.submit or apex.page.confirm . This includes buttons with action Submit Page and Dynamic Action Submit Page action. It is triggered after the page is validated. It is triggered on apex.gPageContext$ , which is the document. This event is the last chance to set or modify page items before the page is submitted.

#### Option/Object Properties

| Name | Type | Description |
| --- | --- | --- |
| `event` | Event | jQuery event object. |
| `request` | string | The request string. |

#### Simple Example

```javascript
apex.apexpagesubmit();
```

### apexreadyend

Signature: `apexreadyend`

#### Purpose

This event is triggered at the end of all APEX page load functionality. This events differs from the standard page load event in that it will not only wait for the DOM to be ready, but also for any delayLoading components to be ready.

#### Option/Object Properties

| Name | Type | Description |
| --- | --- | --- |
| `event` | Event | jQuery event object. |

#### Simple Example

```javascript
apex.apexreadyend();
```

### apexselectionchange

Signature: `apexselectionchange`

#### Purpose

This event is triggered when the selection changes in a region that supports selection. This event is debounced, which means that it is not triggered until up to a few hundred milliseconds after the last change in selection state. This avoids rapid event triggering while the user moves quickly through the report with the keyboard.

#### Option/Object Properties

| Name | Type | Description |
| --- | --- | --- |
| `event` | Event | jQuery event object. |
| `data` | object | Additional event data. Properties Name Type Description |
| `selectedValues` | Array. | An array of the values for the currently selected items/rows/records in the report. If nothing is selected the array is empty. The values are typically configured to be the primary key of the records. |

#### Simple Example

```javascript
apex.apexselectionchange();
```

### apexwindowresized

Signature: `apexwindowresized`

#### Purpose

This event is triggered on the window a couple hundred milliseconds after the window stops resizing. Listen for this event to adjust or resize page content after the window is done resizing. In some cases this is a better alternative to the window resize event, which is triggered many times as the window is being resized, because it is triggered just once after the window stops resizing.

#### Option/Object Properties

| Name | Type | Description |
| --- | --- | --- |
| `Event` | Event | jQuery event object |

#### Simple Example

```javascript
apex.apexwindowresized();
```

### confirm

Signature: `(static) confirm ()`

#### Purpose

Use `confirm` as documented by the `apex` module.

#### Simple Example

```javascript
apex.confirm();
```

### item

Signature: `(static) item (pItemId) &rarr; { item }`

#### Purpose

Return an item interface that is used to access item related methods and properties.

#### Parameters

| Name | Type | Description |
| --- | --- | --- |
| `pItemId` | Element | string | The item name. This is also the id of the main DOM element associated with the item. For backward compatibility this can also be the main item DOM Element. Passing in an element is deprecated and the id/name should be used instead. |

#### Returns

The item interface for the given item name. If there is no such item on the page the returned item interface node property will be false. Type item Example This function is not used by itself. See the examples for methods of the item interface.

#### Simple Example

```javascript
apex.item(
    "P1_ITEM"
);
```

### region

Signature: `(static) region (pRegionId) &rarr; { region |null}`

#### Purpose

Return a region interface for the given region id. The returned region interface object can then be used to access region related functions and properties.

#### Parameters

| Name | Type | Description |
| --- | --- | --- |
| `pRegionId` | string | Region id or region DOM id. It is a best practice to give a region an HTML DOM id if it is going to be used from JavaScript otherwise an internally generated id is used. The region DOM id is substituted in the region template using the #DOM_ID# string. The region id can be found by viewing the page source in the browser. |

#### Returns

The region interface or null if there is no element with the given pRegionId . Type region | null Example This function is not used by itself. See the examples for methods of the region interface.

#### Simple Example

```javascript
apex.region(
    "P1_ITEM"
);
```

### submit

Signature: `(static) submit ()`

#### Purpose

Use `submit` as documented by the `apex` module.

#### Simple Example

```javascript
apex.submit();
```

### userHasTouched

Signature: `(static) userHasTouched () &rarr; {boolean}`

#### Purpose

Determine if the user is or has been interacting with this web app using touch since the browser session began. Note: it is possible for the user to touch for the first time after this function is called.

#### Returns

true if the user has been using touch to interact with the web app and false otherwise. Type boolean Documentation generated by JSDoc 4.0.5 on Fri Apr 17 2026 17:55:51 GMT+0000 (Coordinated Universal Time) Oracle APEX Release 26.1, JavaScript API Reference Copyright &copy; 2003, 2026, Oracle and/or its affiliates. All rights reserved.

#### Simple Example

```javascript
apex.userHasTouched();
```

### Notes

- Run APEX JavaScript APIs from an APEX page where the `apex` namespace is loaded.
- Treat client-side values as untrusted when they reach PL/SQL.
- Prefer documented APIs over direct DOM or internal widget state when interacting with APEX components.
---

## apex.actions

Source: [Oracle APEX 26.1 JavaScript API Reference](https://docs.oracle.com/en/database/oracle/apex/26.1/aexjs/apex.actions.html)

### Purpose

`apex.actions` is the global action registry and factory for scoped action contexts. Actions connect commands, keyboard shortcuts, menus, buttons, and component-specific behavior. They are especially important for Interactive Grid, custom widgets, menus, and reusable components.

Use actions when the same command should be invoked from multiple UI affordances or keyboard shortcuts.

### Concepts

- The global actions context is `apex.actions`.
- Scoped contexts are created with `apex.actions.createContext(typeName, element)`.
- An action has a `name`, `label`, optional `shortcut`, optional state, and an `action` function.
- UI elements can bind to actions through APEX action markup and component integration.

### API Surface

| Need | Members |
| --- | --- |
| Create/find contexts | `createContext`, `findContext`, `findContextById`, `removeContext` |
| Manage global shortcuts | `shortcutSupport`, `setKeyCaps`, `getKeyCaps` |
| Inspect contexts | `getContextTypes`, `getContextsForType` |
| Context methods | `add`, `remove`, `lookup`, `invoke`, `enable`, `disable`, `hide`, `show`, `update`, `observe` |

### Add A Global Action

```javascript
apex.actions.add( {
    name: "refresh-orders",
    label: "Refresh Orders",
    shortcut: "Alt+R",
    action: function() {
        apex.region( "orders" ).refresh();
    }
} );
```

Invoke it:

```javascript
apex.actions.invoke( "refresh-orders" );
```

Disable or enable it:

```javascript
apex.actions.disable( "refresh-orders" );
apex.actions.enable( "refresh-orders" );
```

### Scoped Action Context

Assuming a custom region root element `#task_board`:

```javascript
const taskActions = apex.actions.createContext(
    "taskBoard",
    document.getElementById( "task_board" )
);

taskActions.add( [ {
    name: "new-task",
    label: "New Task",
    shortcut: "N",
    action: function() {
        apex.navigation.dialog(
            "f?p=&APP_ID.:20:&SESSION.",
            { title: "New Task", modal: true },
            "task-dialog",
            apex.jQuery( "#task_board" )
        );
    }
}, {
    name: "refresh",
    label: "Refresh",
    shortcut: "R",
    action: function() {
        apex.region( "task_board" ).refresh();
    }
} ] );
```

Find the context later:

```javascript
const taskActions = apex.actions.findContext(
    "taskBoard",
    document.getElementById( "task_board" )
);
```

### Update Action State

```javascript
const action = apex.actions.lookup( "refresh-orders" );

if ( action ) {
    action.label = "Refresh Open Orders";
    apex.actions.update( "refresh-orders" );
}
```

### Keyboard Shortcut Control

Disable all shortcuts temporarily:

```javascript
const previous = apex.actions.shortcutSupport();
apex.actions.shortcutSupport( "off" );

// Later:
apex.actions.shortcutSupport( previous );
```

Use shortcuts sparingly and avoid conflicts with browser, operating system, and assistive technology shortcuts.

### Safety Guidance

- Use stable action names such as `refresh-orders`, not display labels.
- Put destructive commands behind confirmation.
- Update action enabled/disabled state when selection or context changes.
- Clean up custom contexts with `removeContext` if the DOM region is removed.
- Prefer scoped contexts for reusable components so shortcuts only apply when focus is inside the component.
---

## apex.da

Source: [Oracle APEX 26.1 JavaScript API Reference](https://docs.oracle.com/en/database/oracle/apex/26.1/aexjs/apex.da.html)

### Purpose

`apex.da` contains helper functions for Dynamic Action plug-in developers. It controls Dynamic Action execution flow when a plug-in action is asynchronous, needs to resume execution, needs to report an Ajax error, or needs to stop the remaining actions deliberately.

Most application developers do not need this namespace for ordinary Dynamic Actions. Use it when writing custom Dynamic Action plug-in JavaScript.

### When To Use

Use `apex.da` when:

- A Dynamic Action plug-in pauses execution while waiting for Ajax.
- A plug-in must resume the Dynamic Action chain after async work completes.
- A plug-in must stop remaining actions without treating the stop as an ordinary JavaScript `false` return.
- A plug-in wants to route Ajax errors through APEX's Dynamic Action error handling.

### Curated Patterns

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

### Safety Guidance

- Use `apex.da` primarily inside Dynamic Action plug-ins, not ordinary page JavaScript.
- Always call `resume` or `handleAjaxErrors` for async plug-in actions that pause Dynamic Action execution.
- Treat all values sent to `apex.server` as untrusted on the PL/SQL side.
- Keep user-facing messages in `apex.message` or `apex.lang`, not raw `alert` calls.

### Generated API Surface

| Member | Parameters | Returns |
| --- | --- | --- |
| `cancel` | None documented | Not documented |
| `handleAjaxErrors` | `pjqXHR`, `pTextStatus`, `pErrorThrown`, `pResumeCallback` | Not documented |
| `resume` | `pCallback`, `pErrorOccurred` | Not documented |

### cancel

Signature: `(static) cancel ()`

#### Purpose

For Dynamic Action plug-in developers, call this function to stop execution of the remaining actions in a dynamic action without indicating there was an error. Returning false from the JavaScript function indicates that there has been an error which stops execution of the remaining actions only if the Stop Execution On Error setting is true. This function is useful to stop execution of remaining actions regardless of the Stop Execution On Error setting and also when the action is asynchronous.

#### Simple Example

```javascript
apex.da.cancel();
```

### handleAjaxErrors

Signature: `(static) handleAjaxErrors (pjqXHR, pTextStatus, pErrorThrown, pResumeCallback)`

#### Purpose

The following example shows a typical use case of handleAjaxErrors.

#### Parameters

| Name | Type | Description |
| --- | --- | --- |
| `pjqXHR` | object | The jqXHR object passed directly from the apex.server error callback. |
| `pTextStatus` | string | The text status of the error, passed directly from the apex.server error callback. |
| `pErrorThrown` | string | Text describing the actual error, passed directly from the apex.server error callback. |
| `pResumeCallback` | function | Reference to callback function available from the this.resumeCallback property, handles resuming execution of the dynamic action. |

#### Simple Example

```javascript
const daContext = this;

apex.server.plugin( daContext.action.ajaxIdentifier, {
    x01: apex.item( "P10_AGENT_ID" ).getValue()
} ).fail( function( jqXHR, textStatus, errorThrown ) {
    apex.da.handleAjaxErrors(
        jqXHR,
        textStatus,
        errorThrown,
        daContext.resumeCallback
    );
} );
```

### resume

Signature: `(static) resume (pCallback, pErrorOccurred)`

#### Purpose

For Dynamic Action plug-in developers that write plug-ins that perform Ajax calls, call this function to resume execution of the actions in a dynamic action. Execution of a dynamic action can be paused, if the action's Wait for Result attribute is checked. Wait for Result is a dynamic action plug-in standard attribute designed for use with Ajax-based dynamic actions. If a plug-in exposes this attribute, it will also need to resume execution by calling this function in the relevant place in the plug-in JavaScript code (otherwise your action will break execution of dynamic actions).

#### Parameters

| Name | Type | Description |
| --- | --- | --- |
| `pCallback` | function | Reference to callback function available from the this.resumeCallback property, handles resuming execution of the dynamic action. |
| `pErrorOccurred` | boolean | Indicate to the framework whether an error has occurred. If an error has occurred and the action's Stop Execution on Error attribute is checked, execution of the dynamic action will be stopped. |

#### Simple Example

```javascript
apex.da.resume(
    this.resumeCallback,
    false
);
```

### Notes

- Run APEX JavaScript APIs from an APEX page where the `apex` namespace is loaded.
- Treat client-side values as untrusted when they reach PL/SQL.
- Prefer documented APIs over direct DOM or internal widget state when interacting with APEX components.
---

## apex.date

Source: [Oracle APEX 26.1 JavaScript API Reference](https://docs.oracle.com/en/database/oracle/apex/26.1/aexjs/apex.date.html)

### Purpose

`apex.date` provides client-side date arithmetic, comparison, parsing, formatting, and relative-date helpers. It is useful for due dates, task/workflow timelines, dashboard badges, and client-side validation before a request reaches PL/SQL.

Use it for browser-side UX. Server-side date validation and storage rules still belong in PL/SQL or SQL.

### When To Use

Use `apex.date` when:

- JavaScript needs to add or subtract days, weeks, months, or years.
- A page needs to compare a due date to today.
- Client code needs to format or parse a date string.
- A dashboard needs relative time such as "3 hours ago".
- A component needs month boundaries, week numbers, or start/end-of-day values.

### Curated Patterns

Add two days to the current date for a default task due date:

```javascript
const due = apex.date.add(
    apex.date.clone( new Date() ),
    2,
    apex.date.UNIT.DAY
);

$s( "P10_DUE_DATE", apex.date.toISOString( due ) );
```

Check whether a task is overdue:

```javascript
const dueDate = apex.date.parse( $v( "P10_DUE_DATE" ), "YYYY-MM-DD" );

if ( apex.date.isBefore( dueDate, new Date(), apex.date.UNIT.DAY ) ) {
    apex.message.showErrors( [ {
        type: "error",
        location: "inline",
        pageItem: "P10_DUE_DATE",
        message: apex.lang.getMessage( "DUE_DATE_IN_PAST" ),
        unsafe: false
    } ] );
}
```

Format a timeline label:

```javascript
const createdOn = apex.date.parse( $v( "P10_CREATED_ON" ), "YYYY-MM-DD\"T\"HH24:MI:SS" );
$( "#createdAgo" ).text( apex.date.since( createdOn, true ) );
```

Use clones when you do not want to mutate the original date object:

```javascript
const start = apex.date.startOfDay( apex.date.clone( new Date() ) );
const end = apex.date.endOfDay( apex.date.clone( new Date() ) );
```

### Safety Guidance

- `add` and `subtract` modify the date object passed in; clone first when preserving the original matters.
- Treat client-side validation as user assistance, not authority.
- Use APEX/server-side validation before saving date values.
- Match date format masks to the actual string format being parsed.
- Pair date display with `apex.locale` when locale-specific formatting is required.

### Generated API Surface

| Member | Parameters | Returns |
| --- | --- | --- |
| `UNIT` | None documented | Not documented |
| `ISOWeek` | `pDate` | The week number Type number Example Returns the ISO-8601 week number. |
| `add` | `pDate`, `pAmount`, `pUnit` | The modified date object Type Date Example Returns the modified date object. |
| `clone` | `pDate` | The cloned date object Type Date Example Returns the clone of a given date object. |
| `dayOfWeek` | `pDate` | The day number Type number Example Returns the day number of given week. |
| `daysInMonth` | `pDate` | The days count Type number Example Returns the day count of given month. |
| `endOfDay` | `pDate` | The end date of a day Type Date Example Returns the end date of a given day. |
| `firstOfMonth` | `pDate` | The first day as date Type Date Example Returns the first day of a given month as date object. |
| `format` | `pDate`, `pFormat`, `pLocale` | The formatted date string Type string Example Returns the formatted date string. |
| `getDayOfYear` | `pDate` | The day number Type number Example Returns the day number of given year. |
| `isAfter` | `pDate1`, `pDate2`, `pUnit` | is the date after Type boolean Example Returns if a date object is before another. |
| `isBefore` | `pDate1`, `pDate2`, `pUnit` | is the date before Type boolean Example Returns if a date object is before another. |
| `isBetween` | `pDate1`, `pDate2`, `pDate3`, `pUnit` | is the date between Type boolean Example Returns if a date object is between 2 another. |
| `isLeapYear` | `pDate` | is a leap year Type boolean Example Returns if it's a leap year for a given date. |
| `isSame` | `pDate1`, `pDate2`, `pUnit` | is the date same Type boolean Example Returns if a date object is the same as another. |
| `isSameOrAfter` | `pDate1`, `pDate2`, `pUnit` | is the date same/after Type boolean Example Returns if a date object is the same or after another. |
| `isSameOrBefore` | `pDate1`, `pDate2`, `pUnit` | is the date same/before Type boolean Example Returns if a date object is the same or before another. |
| `isValid` | `pDate` | is it a valid date Type boolean Example Returns if a date object is valid. |
| `isValidString` | `pDateString` | is it a valid date Type boolean Example Returns if a date string is valid. |
| `lastOfMonth` | `pDate` | The last day as date Type Date Example Returns the last day of a given month as date. |
| `max` | `&hellip;pDates` | The max date object Type Date Example Returns the maximum (most distant future) of the given date. |
| `min` | `&hellip;pDates` | The min date object Type Date Example Returns the minimum (most distant future) of the given date. |
| `monthsBetween` | `pDate1`, `pDate2` | The month count Type number Example Returns the count of months between 2 dates. |
| `parse` | `pDateString`, `pFormat` | The date object Type Date Example Returns the parsed date object. |
| `secondsPastMidnight` | `pDate` | seconds past midnight Type number Example Returns the seconds past midnight. |
| `setDayOfYear` | `pDate`, `pDay` | The date object Type Date Example Returns the date object. |
| `since` | `pDate`, `pShort` | The formatted date string Type string Example Returns the relative date in words. |
| `startOfDay` | `pDate` | The start date of a day Type Date Example Returns the start date of a given day. |
| `subtract` | `pDate`, `pAmount`, `pUnit` | The modified date object Type Date Example Returns the modified date object. |
| `toISOString` | `pDate` | The formatted date string Type string Example Returns date as ISO format string. |
| `weekOfMonth` | `pDate` | The week number Type number Example Returns the week number of given month. Documentation generated by JSDoc 4.0.5 on Fri Apr 17 2026 17:55:51 GMT+0000 (Coordinated Universal Time) Oracle APEX Release 26.1, JavaScript API Reference Copyright &copy; 2003, 2026, Oracle and/or its affiliates. All rights reserved. |

### UNIT

Signature: `(static) UNIT :object`

#### Purpose

Constants for the different date/time units used by apex.date functions.

#### Option/Object Properties

| Name | Type | Description |
| --- | --- | --- |
| `MILLISECOND` | string | Constant to use for milliseconds |
| `SECOND` | string | Constant to use for seconds |
| `MINUTE` | string | Constant to use for minutes |
| `HOUR` | string | Constant to use for hours |
| `DAY` | string | Constant to use for days |
| `WEEK` | string | Constant to use for weeks |
| `MONTH` | string | Constant to use for months |
| `YEAR` | string | Constant to use for years |

#### Simple Example

```javascript
apex.date.UNIT = {
    MILLISECOND: "millisecond",
    SECOND: "second",
    MINUTE: "minute",
    HOUR: "hour",
    DAY: "day",
    WEEK: "week",
    MONTH: "month",
    YEAR: "year"
};

apex.date.add( myDate, 2, apex.date.UNIT.DAY );
apex.date.add( myDate, 1, apex.date.UNIT.YEAR );
apex.date.subtract( myDate, 30, apex.date.UNIT.MINUTE );
apex.date.subtract( myDate, 6, apex.date.UNIT.HOUR );
```

### ISOWeek

Signature: `(static) ISOWeek (pDate opt ) &rarr; {number}`

#### Purpose

Return the ISO-8601 week number of the year of a given date object. If pDate is not provided it uses the current date & time.

#### Parameters

| Name | Type | Description |
| --- | --- | --- |
| `pDate` | Date |  new Date() A date object |

#### Returns

The week number Type number Example Returns the ISO-8601 week number.

#### Simple Example

```javascript
var weekNumber = apex.date.ISOWeek( myDate );
```

### add

Signature: `(static) add (pDate opt , pAmount, pUnit opt ) &rarr; {Date}`

#### Purpose

Add a certain amount of time to an existing date. This function returns the modified date object as well as altering the original object. If the given date object should not be manipulated use apex.date.clone before calling this function. If pDate is not provided it uses the current date & time.

#### Parameters

| Name | Type | Description |
| --- | --- | --- |
| `pDate` | Date |  new Date() A date object |
| `pAmount` | number |   The amount to add |
| `pUnit` | string |  apex.date.UNIT.MILLISECOND The unit to use - apex.date.UNIT constant |

#### Returns

The modified date object Type Date Example Returns the modified date object.

#### Simple Example

```javascript
var myDate = new Date( "2021-06-20" );
myDate = apex.date.add( myDate, 2, apex.date.UNIT.DAY );
// myDate is now "2021-06-21"
```

### clone

Signature: `(static) clone (pDate) &rarr; {Date}`

#### Purpose

Return the cloned instance of a given date object. This is useful when you want to do actions on a date object without altering the original object. If pDate is not provided it uses the current date & time.

#### Parameters

| Name | Type | Description |
| --- | --- | --- |
| `pDate` | Date | A date object |

#### Returns

The cloned date object Type Date Example Returns the clone of a given date object.

#### Simple Example

```javascript
var myDate = new Date();
var clonedDate = apex.date.clone( myDate );
```

### dayOfWeek

Signature: `(static) dayOfWeek (pDate opt ) &rarr; {number}`

#### Purpose

Return the day number of week of a given date object. If pDate is not provided it uses the current date & time.

#### Parameters

| Name | Type | Description |
| --- | --- | --- |
| `pDate` | Date |  new Date() A date object |

#### Returns

The day number Type number Example Returns the day number of given week.

#### Simple Example

```javascript
var weekDay = apex.date.dayOfWeek( myDate );
```

### daysInMonth

Signature: `(static) daysInMonth (pDate opt ) &rarr; {number}`

#### Purpose

Return the day count of a month of a given date object. If pDate is not provided it uses the current date & time.

#### Parameters

| Name | Type | Description |
| --- | --- | --- |
| `pDate` | Date |  new Date() A date object |

#### Returns

The days count Type number Example Returns the day count of given month.

#### Simple Example

```javascript
var dayCount = apex.date.daysInMonth( myDate );
```

### endOfDay

Signature: `(static) endOfDay (pDate opt ) &rarr; {Date}`

#### Purpose

Return the end date of a day of a given date object. If pDate is not provided it uses the current date & time.

#### Parameters

| Name | Type | Description |
| --- | --- | --- |
| `pDate` | Date |  new Date() A date object |

#### Returns

The end date of a day Type Date Example Returns the end date of a given day.

#### Simple Example

```javascript
var dayEndDate = apex.date.endOfDay( myDate );
// output: "2021-JUN-29 23:59:59" (as date object)
```

### firstOfMonth

Signature: `(static) firstOfMonth (pDate opt ) &rarr; {Date}`

#### Purpose

Return a new date object for the first day a month of a given date object. If pDate is not provided it uses the current date & time.

#### Parameters

| Name | Type | Description |
| --- | --- | --- |
| `pDate` | Date |  new Date() A date object |

#### Returns

The first day as date Type Date Example Returns the first day of a given month as date object.

#### Simple Example

```javascript
var firstDayDate = apex.date.firstOfMonth( myDate );
// output: "2021-JUN-01" (as date object)
```

### format

Signature: `(static) format (pDate opt , pFormat opt , pLocale opt ) &rarr; {string}`

#### Purpose

Return the formatted string of a date with a given (Oracle compatible) format mask. If pDate is not provided it uses the current date & time. It uses the default date format mask & locale defined in the application globalization settings.

#### Parameters

| Name | Type | Description |
| --- | --- | --- |
| `pDate` | Date |  new Date() A date object |
| `pFormat` | string |  apex.locale.getDateFormat() The format mask |
| `pLocale` | string |  apex.locale.getLanguage() The locale |

#### Returns

The formatted date string Type string Example Returns the formatted date string.

#### Simple Example

```javascript
var dateString = apex.date.format( myDate, "YYYY-MM-DD HH24:MI" );
// output: "2021-06-29 15:30"

var dateString = apex.date.format( myDate, "Day, DD Month YYYY" );
// output: "Wednesday, 29 June 2021"

var dateString = apex.date.format( myDate, "Day, DD Month YYYY", "de" );
// output: "Mittwoch, 29 Juni 2021"
```

### getDayOfYear

Signature: `(static) getDayOfYear (pDate opt ) &rarr; {number}`

#### Purpose

Return the day number of a year of a given date object. If pDate is not provided it uses the current date & time.

#### Parameters

| Name | Type | Description |
| --- | --- | --- |
| `pDate` | Date |  new Date() A date object |

#### Returns

The day number Type number Example Returns the day number of given year.

#### Simple Example

```javascript
var dayNumber = apex.date.getDayOfYear( myDate );
```

### isAfter

Signature: `(static) isAfter (pDate1, pDate2, pUnit opt ) &rarr; {boolean}`

#### Purpose

Return true if the first date object is after the second date. pUnit controls the precision of the comparison.

#### Parameters

| Name | Type | Description |
| --- | --- | --- |
| `pDate1` | Date |   A date object |
| `pDate2` | Date |   A date object |
| `pUnit` | string |  apex.date.UNIT.MILLISECOND The unit to use - apex.date.UNIT constant |

#### Returns

is the date after Type boolean Example Returns if a date object is before another.

#### Simple Example

```javascript
var isDateAfter = apex.date.isAfter( myDate1, myDate2, apex.date.UNIT.SECOND );
```

### isBefore

Signature: `(static) isBefore (pDate1, pDate2, pUnit opt ) &rarr; {boolean}`

#### Purpose

Return true if the first date object is before the second date. pUnit controls the precision of the comparison.

#### Parameters

| Name | Type | Description |
| --- | --- | --- |
| `pDate1` | Date |   A date object |
| `pDate2` | Date |   A date object |
| `pUnit` | string |  apex.date.UNIT.MILLISECOND The unit to use - apex.date.UNIT constant |

#### Returns

is the date before Type boolean Example Returns if a date object is before another.

#### Simple Example

```javascript
var isDateBefore = apex.date.isBefore( myDate1, myDate2, apex.date.UNIT.SECOND );
```

### isBetween

Signature: `(static) isBetween (pDate1, pDate2, pDate3, pUnit opt ) &rarr; {boolean}`

#### Purpose

Return true if the first date object is between the second date and the third date. pUnit controls the precision of the comparison.

#### Parameters

| Name | Type | Description |
| --- | --- | --- |
| `pDate1` | Date |   A date object |
| `pDate2` | Date |   A date object |
| `pDate3` | Date |   A date object |
| `pUnit` | string |  apex.date.UNIT.MILLISECOND The unit to use - apex.date.UNIT constant |

#### Returns

is the date between Type boolean Example Returns if a date object is between 2 another.

#### Simple Example

```javascript
var isDateBetween = apex.date.isBetween( myDate1, myDate2, myDate3, apex.date.UNIT.SECOND );
```

### isLeapYear

Signature: `(static) isLeapYear (pDate opt ) &rarr; {boolean}`

#### Purpose

Return true if a given date object is within a leap year. If pDate is not provided it uses the current date & time.

#### Parameters

| Name | Type | Description |
| --- | --- | --- |
| `pDate` | Date |  new Date() A date object |

#### Returns

is a leap year Type boolean Example Returns if it's a leap year for a given date.

#### Simple Example

```javascript
var isLeapYear = apex.date.isLeapYear( myDate );
```

### isSame

Signature: `(static) isSame (pDate1, pDate2, pUnit opt ) &rarr; {boolean}`

#### Purpose

Return true if the first date object is the same as the second date. pUnit controls the precision of the comparison.

#### Parameters

| Name | Type | Description |
| --- | --- | --- |
| `pDate1` | Date |   A date object |
| `pDate2` | Date |   A date object |
| `pUnit` | string |  apex.date.UNIT.MILLISECOND The unit to use - apex.date.UNIT constant |

#### Returns

is the date same Type boolean Example Returns if a date object is the same as another.

#### Simple Example

```javascript
var isDateSame = apex.date.isSame( myDate1, myDate2, apex.date.UNIT.SECOND );
```

### isSameOrAfter

Signature: `(static) isSameOrAfter (pDate1, pDate2, pUnit opt ) &rarr; {boolean}`

#### Purpose

Return true if the first date object is the same or after the second date. pUnit controls the precision of the comparison.

#### Parameters

| Name | Type | Description |
| --- | --- | --- |
| `pDate1` | Date |   A date object |
| `pDate2` | Date |   A date object |
| `pUnit` | string |  apex.date.UNIT.MILLISECOND The unit to use - apex.date.UNIT constant |

#### Returns

is the date same/after Type boolean Example Returns if a date object is the same or after another.

#### Simple Example

```javascript
var isDateSameAfter = apex.date.isSameOrAfter( myDate1, myDate2, apex.date.UNIT.SECOND );
```

### isSameOrBefore

Signature: `(static) isSameOrBefore (pDate1, pDate2, pUnit opt ) &rarr; {boolean}`

#### Purpose

Return true if the first date object is the same or before the second date. pUnit controls the precision of the comparison.

#### Parameters

| Name | Type | Description |
| --- | --- | --- |
| `pDate1` | Date |   A date object |
| `pDate2` | Date |   A date object |
| `pUnit` | string |  apex.date.UNIT.MILLISECOND The unit to use - apex.date.UNIT constant |

#### Returns

is the date same/before Type boolean Example Returns if a date object is the same or before another.

#### Simple Example

```javascript
var isDateSameBefore = apex.date.isSameOrBefore( myDate1, myDate2, apex.date.UNIT.SECOND );
```

### isValid

Signature: `(static) isValid (pDate) &rarr; {boolean}`

#### Purpose

Return true if a given object is a valid date object.

#### Parameters

| Name | Type | Description |
| --- | --- | --- |
| `pDate` | Date | A date object |

#### Returns

is it a valid date Type boolean Example Returns if a date object is valid.

#### Simple Example

```javascript
var isDateValid = apex.date.isValid( myDate );
```

### isValidString

Signature: `(static) isValidString (pDateString) &rarr; {boolean}`

#### Purpose

Return true if a given string can parse into a date object. Note: This could be browser specific dependent on the implementation of Date.parse.

#### Parameters

| Name | Type | Description |
| --- | --- | --- |
| `pDateString` | string | A date string |

#### Returns

is it a valid date Type boolean Example Returns if a date string is valid.

#### Simple Example

```javascript
var isDateValid = apex.date.isValidString( "2021-06-29 15:30" );
```

### lastOfMonth

Signature: `(static) lastOfMonth (pDate opt ) &rarr; {Date}`

#### Purpose

Return a new date object for the last day of a month of a given date object. If pDate is not provided it uses the current date & time.

#### Parameters

| Name | Type | Description |
| --- | --- | --- |
| `pDate` | Date |  new Date() A date object |

#### Returns

The last day as date Type Date Example Returns the last day of a given month as date.

#### Simple Example

```javascript
var lastDayDate = apex.date.lastOfMonth( myDate );
// output: "2021-JUN-30" (as date object)
```

### max

Signature: `(static) max (&hellip;pDates opt ) &rarr; {Date}`

#### Purpose

Return the maximum date of given date object arguments. If pDates is not provided it uses the current date & time.

#### Option/Object Properties

| Name | Type | Description |
| --- | --- | --- |
| `pDates` | date |  [new Date()] Multiple date objects as arguments |

#### Returns

The max date object Type Date Example Returns the maximum (most distant future) of the given date.

#### Simple Example

```javascript
var maxDate = apex.date.max( myDate1, myDate2, myDate3 );
```

### min

Signature: `(static) min (&hellip;pDates opt ) &rarr; {Date}`

#### Purpose

Return the minimum date of given date object arguments. If pDates is not provided it uses the current date & time.

#### Option/Object Properties

| Name | Type | Description |
| --- | --- | --- |
| `pDates` | date |  [new Date()] Multiple date objects as arguments |

#### Returns

The min date object Type Date Example Returns the minimum (most distant future) of the given date.

#### Simple Example

```javascript
var minDate = apex.date.min( myDate1, myDate2, myDate3 );
```

### monthsBetween

Signature: `(static) monthsBetween (pDate1, pDate2) &rarr; {number}`

#### Purpose

Return the count of months between 2 date objects.

#### Parameters

| Name | Type | Description |
| --- | --- | --- |
| `pDate1` | Date | A date object |
| `pDate2` | Date | A date object |

#### Returns

The month count Type number Example Returns the count of months between 2 dates.

#### Simple Example

```javascript
var months = apex.date.monthsBetween( myDate1, myDate2 );
```

### parse

Signature: `(static) parse (pDateString, pFormat opt ) &rarr; {Date}`

#### Purpose

Return the parsed date object of a given date string and a (Oracle compatible) format mask. It uses the default date format mask defined in the application globalization settings.

#### Parameters

| Name | Type | Description |
| --- | --- | --- |
| `pDateString` | string |   A formatted date string |
| `pFormat` | string |  apex.locale.getDateFormat() The format mask |

#### Returns

The date object Type Date Example Returns the parsed date object.

#### Simple Example

```javascript
var date = apex.date.parse( "2021-06-29 15:30", "YYYY-MM-DD HH24:MI" );
var date = apex.date.parse( "2021-JUN-29 08:30 am", "YYYY-MON-DD HH12:MI AM" );
```

### secondsPastMidnight

Signature: `(static) secondsPastMidnight (pDate opt ) &rarr; {number}`

#### Purpose

Return the seconds past midnight of day of a given date object.

#### Parameters

| Name | Type | Description |
| --- | --- | --- |
| `pDate` | Date |  new Date() A date object |

#### Returns

seconds past midnight Type number Example Returns the seconds past midnight.

#### Simple Example

```javascript
var seconds = apex.date.secondsPastMidnight( myDate );
```

### setDayOfYear

Signature: `(static) setDayOfYear (pDate opt , pDay) &rarr; {Date}`

#### Purpose

Set the day number of a year of a given date object. If the given date object should not be manipulated use apex.date.clone before calling this function. If pDate is not provided it uses the current date & time.

#### Parameters

| Name | Type | Description |
| --- | --- | --- |
| `pDate` | Date |  new Date() A date object |
| `pDay` | number |   The day number |

#### Returns

The date object Type Date Example Returns the date object.

#### Simple Example

```javascript
var myDate = new Date();
apex.date.setDayOfYear( myDate, 126 );
```

### since

Signature: `(static) since (pDate opt , pShort opt ) &rarr; {string}`

#### Purpose

Return the relative date in words of a given date object This is the client side counterpart of the PL/SQL function APEX_UTIL.GET_SINCE . If pDate is not provided it uses the current date & time.

#### Parameters

| Name | Type | Description |
| --- | --- | --- |
| `pDate` | string |  new Date() A date object |
| `pShort` | boolean |  false Whether to return a short version of relative date |

#### Returns

The formatted date string Type string Example Returns the relative date in words.

#### Simple Example

```javascript
var sinceString = apex.date.since( myDate );
// output: "2 days from now" or "30 minutes ago"

var sinceString = apex.date.since( myDate, true );
// output: "In 1.1y" or "30m"
```

### startOfDay

Signature: `(static) startOfDay (pDate opt ) &rarr; {Date}`

#### Purpose

Return the start date of a day of a given date object. If pDate is not provided it uses the current date & time.

#### Parameters

| Name | Type | Description |
| --- | --- | --- |
| `pDate` | Date |  new Date() A date object |

#### Returns

The start date of a day Type Date Example Returns the start date of a given day.

#### Simple Example

```javascript
var dayStartDate = apex.date.startOfDay( myDate );
// output: "2021-JUN-29 24:00:00" (as date object)
```

### subtract

Signature: `(static) subtract (pDate opt , pAmount, pUnit opt ) &rarr; {Date}`

#### Purpose

Subtract a certain amount of time of an existing date. This function returns the modified date object as well as altering the original object. If the given date object should not be manipulated use apex.date.clone before calling this function. If pDate is not provided it uses the current date & time.

#### Parameters

| Name | Type | Description |
| --- | --- | --- |
| `pDate` | Date |  new Date() A date object |
| `pAmount` | number |   The amount to subtract |
| `pUnit` | string |  apex.date.UNIT.MILLISECOND The unit to use - apex.date.UNIT constant |

#### Returns

The modified date object Type Date Example Returns the modified date object.

#### Simple Example

```javascript
var myDate = new Date( "2021-06-20" )
myDate = apex.date.subtract( myDate, 2, apex.date.UNIT.DAY );
// myDate is now "2021-06-19"
```

### toISOString

Signature: `(static) toISOString (pDate opt ) &rarr; {string}`

#### Purpose

Return the ISO format string (ISO 8601) without timezone information of a given date object. If pDate is not provided it uses the current date & time.

#### Parameters

| Name | Type | Description |
| --- | --- | --- |
| `pDate` | Date |  new Date() A date object |

#### Returns

The formatted date string Type string Example Returns date as ISO format string.

#### Simple Example

```javascript
var isoFormat = apex.date.toISOString( myDate );
// output: "2021-06-15T14:30:00"
```

### weekOfMonth

Signature: `(static) weekOfMonth (pDate opt ) &rarr; {number}`

#### Purpose

Return the week number of a month of a given date object. If pDate is not provided it uses the current date & time.

#### Parameters

| Name | Type | Description |
| --- | --- | --- |
| `pDate` | Date |  new Date() A date object |

#### Returns

The week number Type number Example Returns the week number of given month. Documentation generated by JSDoc 4.0.5 on Fri Apr 17 2026 17:55:51 GMT+0000 (Coordinated Universal Time) Oracle APEX Release 26.1, JavaScript API Reference Copyright &copy; 2003, 2026, Oracle and/or its affiliates. All rights reserved.

#### Simple Example

```javascript
var weekNumber = apex.date.weekOfMonth( myDate );
```

### Notes

- Run APEX JavaScript APIs from an APEX page where the `apex` namespace is loaded.
- Treat client-side values as untrusted when they reach PL/SQL.
- Prefer documented APIs over direct DOM or internal widget state when interacting with APEX components.
---

## apex.debug

Source: [Oracle APEX 26.1 JavaScript API Reference](https://docs.oracle.com/en/database/oracle/apex/26.1/aexjs/apex.debug.html)

### Purpose

`apex.debug` writes browser-side diagnostic messages in a way that follows the APEX debug level. Use it instead of raw `console.log` for application diagnostics that should respect APEX debug settings.

### API Surface

| Need | Members |
| --- | --- |
| Log messages | `error`, `warn`, `info`, `trace`, `log`, `message` |
| Debug level | `getLevel`, `setLevel`, `LOG_LEVEL` |

### Log Levels

`apex.debug.LOG_LEVEL` includes constants such as:

- `OFF`
- `ERROR`
- `WARN`
- `INFO`
- `APP_TRACE`
- `ENGINE_TRACE`

Check current level:

```javascript
const level = apex.debug.getLevel();
apex.debug.info( "Current debug level", level );
```

Temporarily set level:

```javascript
apex.debug.setLevel( apex.debug.LOG_LEVEL.INFO );
```

### Basic Logging

```javascript
apex.debug.info( "Refreshing orders region", {
    status: $v( "P10_STATUS" ),
    owner: $v( "P10_OWNER" )
} );
```

Warnings and errors:

```javascript
apex.debug.warn( "No row selected for action." );
apex.debug.error( "Ajax request failed", textStatus, errorThrown );
```

Trace-level logging:

```javascript
apex.debug.trace( "Grid model changed", change );
```

### Ajax Error Pattern

```javascript
apex.server.process( "SAVE_ORDER", {
    pageItems: "#P10_ORDER_ID,#P10_STATUS"
} ).fail( function( jqXHR, textStatus, errorThrown ) {
    apex.debug.error( "SAVE_ORDER failed", textStatus, errorThrown, jqXHR.responseText );
    apex.message.alert( "The order could not be saved." );
} );
```

### Safety Guidance

- Use `apex.debug` for diagnostics and `apex.message` for user-facing messages.
- Do not log passwords, tokens, authorization headers, or large personal-data payloads.
- Use structured arguments where useful; browser consoles can inspect objects.
- Leave noisy trace logging behind a suitable debug level.
- Remember browser logs are visible to users with developer tools.
---

## apex.event

Source: [Oracle APEX 26.1 JavaScript API Reference](https://docs.oracle.com/en/database/oracle/apex/26.1/aexjs/apex.event.html)

### Purpose

`apex.event` provides APEX event helpers. The primary API is `apex.event.trigger`, which triggers an event on a target and returns whether the event was cancelled.

Use it when custom JavaScript needs to notify Dynamic Actions or other listeners using the APEX/jQuery event model.

### Trigger A Custom Event

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

### Trigger And Check Cancellation

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

### Listener Pattern

```javascript
apex.jQuery( "#orders" ).on( "ordersrefreshed", function( event, data ) {
    apex.debug.info( "Orders refreshed", data );
} );
```

### Component Pattern

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

### Safety Guidance

- Use stable lowercase event names for custom events.
- Document event payload shape for reusable components.
- Do not use events as a security boundary; validate again server-side.
- Prefer Dynamic Actions for declarative behavior and custom events for reusable component integration.
---

## apex.item

Source: [Oracle APEX 26.1 JavaScript API Reference](https://docs.oracle.com/en/database/oracle/apex/26.1/aexjs/apex.item.html)

### Purpose

`apex.item` contains global helpers related to APEX page items. There are two closely related concepts:

- `apex.item( "P1_ITEM" )` returns an item interface for one item.
- `apex.item.create(...)`, `apex.item.addAttachHandler(...)`, and `apex.item.isItem(...)` support item plug-in development and item interface registration.

For normal page code, most developers use `apex.item( itemName )`, `$v`, and `$s`. Use the namespace functions on this page mostly when building plug-in item types or checking whether an item has an explicit APEX item interface.

### Function Summary

| Function | Returns | Use |
| --- | --- | --- |
| `apex.item.addAttachHandler(handler)` | none | Register an item plug-in attach handler that runs when APEX initializes page content. |
| `apex.item.create(itemId, itemImpl)` | object or deferred | Register or customize an item interface for an item plug-in. |
| `apex.item.isItem(itemId)` | boolean | Check whether an element has an explicit APEX item interface. |

### `addAttachHandler(handler)`

Use this only for item plug-ins. The handler receives a jQuery context and should find item plug-in DOM nodes inside that context, then call `apex.item.create` for each item.

Simple example:

```javascript
apex.item.addAttachHandler( function( context$ ) {
    apex.jQuery( ".my-rating-item", context$ ).each( function() {
        apex.item.create( this.id, {
            item_type: "MY_RATING"
        } );
    } );
} );
```

More complete plug-in attach pattern:

```javascript
( function( $, item ) {
    function attachRatings( context$ ) {
        $( ".my-rating-item", context$ ).each( function() {
            const node = this;

            item.create( node.id, {
                item_type: "MY_RATING",
                getValue: function() {
                    return node.dataset.value || "";
                },
                setValue: function( value ) {
                    node.dataset.value = value;
                    $( node ).trigger( "change" );
                },
                isChanged: function() {
                    return node.dataset.value !== node.dataset.originalValue;
                }
            } );
        } );
    }

    item.addAttachHandler( attachRatings );
} )( apex.jQuery, apex.item );
```

### `create(itemId, itemImpl)`

Use this to define the client behavior for an item plug-in. APEX item APIs, Dynamic Actions, validation, focus handling, and page-change detection depend on consistent item behavior.

Common `itemImpl` properties:

- `item_type`: string identifying the item type.
- `getValue`: return the current value.
- `setValue`: set the value.
- `displayValueFor`: map a value to a display value.
- `disable` and `enable`: handle disabled state.
- `isDisabled`: report disabled state.
- `show` and `hide`: show or hide compound item UI.
- `isChanged`: support Warn on Unsaved Changes.
- `getValidity` and `getValidationMessage`: integrate custom validity.
- `setFocusTo`: element or function used for focus.
- `setStyleTo`: element or function used for style updates.
- `loadingIndicator`: place item-level loading indicators.
- `nullValue`: define the null return value for LOV-style items.
- `storageType` and `separator`: describe multi-value serialization.
- `delayLoading`: delay APEX page-load completion until the returned deferred is resolved.

Simple example:

```javascript
apex.item.create( "P10_COLOR", {
    item_type: "COLOR_SWATCH",
    getValue: function() {
        return apex.jQuery( "#P10_COLOR" ).attr( "data-value" ) || "";
    },
    setValue: function( value ) {
        apex.jQuery( "#P10_COLOR" )
            .attr( "data-value", value )
            .css( "background-color", value )
            .trigger( "change" );
    }
} );
```

Function-based implementation example:

```javascript
apex.item.create( "P10_RATING", function( baseItem ) {
    const item$ = apex.jQuery( "#P10_RATING" );

    baseItem.item_type = "STAR_RATING";
    baseItem.getValue = function() {
        return item$.attr( "data-rating" ) || "";
    };
    baseItem.setValue = function( value, displayValue, suppressChangeEvent ) {
        item$.attr( "data-rating", value );
        item$.find( "[data-star]" ).toggleClass( "is-active", function() {
            return Number( this.dataset.star ) <= Number( value );
        } );

        if ( !suppressChangeEvent ) {
            item$.trigger( "change" );
        }
    };
    baseItem.clear = function() {
        baseItem.setValue( "", null, false );
    };
} );
```

Delayed initialization example:

```javascript
const ready = apex.item.create( "P10_TAGS", {
    item_type: "REMOTE_TAGS",
    delayLoading: true,
    getValue: function() {
        return apex.jQuery( "#P10_TAGS" ).val();
    }
} );

apex.server.process( "INIT_TAGS" ).always( function() {
    ready.resolve();
} );
```

Important note: if `delayLoading` is used, always resolve the deferred. Failing to resolve it can block APEX page initialization logic.

### `isItem(itemId)`

Use this to check whether an item has an explicit APEX item interface created for it.

Simple example:

```javascript
if ( apex.item.isItem( "P10_STATUS" ) ) {
    apex.item( "P10_STATUS" ).hide();
}
```

Practical defensive helper:

```javascript
function setItemIfPresent( itemName, value ) {
    if ( apex.item.isItem( itemName ) || document.getElementById( itemName ) ) {
        apex.item( itemName ).setValue( value );
    }
}

setItemIfPresent( "P10_STATUS", "OPEN" );
```

### Normal Page Usage

Most app-level code does not call `apex.item.create`. It uses the item interface returned by `apex.item(...)`:

```javascript
const statusItem = apex.item( "P10_STATUS" );

statusItem.setValue( "APPROVED" );
statusItem.disable();
statusItem.show();
```

For simple values, APEX legacy helpers are still common:

```javascript
const oldValue = $v( "P10_STATUS" );
$s( "P10_STATUS", "CLOSED" );
```

### Safety And Quality Notes

- Use `apex.item.create` for plug-in item types so APEX Dynamic Actions and validation can interact with the item.
- For compound controls, override focus, style, show, hide, enable, and disable behavior.
- Implement `isChanged` if the item stores state outside native form controls.
- Trigger `change` when `setValue` should notify Dynamic Actions, unless the caller suppresses the event.
- Avoid long asynchronous initialization; if `delayLoading` is necessary, resolve the deferred reliably.
- For app-level code, prefer the item interface over direct DOM manipulation when item state matters to APEX.
---

## apex.lang

Source: [Oracle APEX 26.1 JavaScript API Reference](https://docs.oracle.com/en/database/oracle/apex/26.1/aexjs/apex.lang.html)

### Purpose

`apex.lang` manages client-side translatable text messages and message formatting. Use it to read application text messages that are available to JavaScript, load additional messages, and safely substitute values into localized strings.

Most formatting functions escape replacement values by default. The `NoEscape` variants are for carefully controlled contexts only.

### When To Use

Use `apex.lang` when:

- JavaScript needs localized labels, status text, alerts, or success/error messages.
- A plug-in needs component-specific translatable messages.
- Client code needs to load text messages lazily from the server.
- A message should include dynamic values without concatenating strings by hand.

### Curated Patterns

Assuming text message `AI_AGENT_READY` is defined in Shared Components and marked for JavaScript use:

```javascript
apex.message.showPageSuccess(
    apex.lang.getMessage( "AI_AGENT_READY" )
);
```

Assuming `AI_RESPONSE_SAVED` is `Response from %agent% was saved.`:

```javascript
const message = apex.lang.formatMessage( "AI_RESPONSE_SAVED", {
    agent: $v( "P10_AGENT_NAME" )
} );

apex.message.showPageSuccess( message );
```

Load messages lazily for a custom component:

```javascript
apex.lang.loadMessages( [ "AI_AGENT_%" ] ).then( function() {
    apex.message.showPageSuccess(
        apex.lang.formatMessage( "AI_AGENT_LOADED", {
            name: $v( "P10_AGENT_NAME" )
        } )
    );
} );
```

Callback style:

```javascript
apex.lang.loadMessagesIfNeeded( [ "AI_AGENT_ERROR" ], function() {
    apex.message.alert( apex.lang.getMessage( "AI_AGENT_ERROR" ) );
} );
```

Use no-escape functions only when replacement values are already safe or will be escaped by the target component:

```javascript
const html = apex.lang.formatMessageNoEscape(
    "AI_AGENT_HTML_SNIPPET",
    { badge: "<span class=\"u-success-text\">Ready</span>" }
);
```

### Safety Guidance

- Prefer `formatMessage` and `format` because replacement values are escaped.
- Mark APEX text messages as available to JavaScript when they must be loaded on the client.
- Treat missing messages as bugs: `getMessage` returns the key when the key is not found.
- Do not use localized client text as a server-side security decision.
- Avoid `clearMessages` unless a test or specialized component fully owns the message set.

### Generated API Surface

| Member | Parameters | Returns |
| --- | --- | --- |
| `addMessages` | `pMessages` | Not documented |
| `clearMessages` | None documented | Not documented |
| `format` | `pPattern`, `&hellip;pValues` | The formatted message text. Type string Examples This example using positional parameters returns "Total cost: $34.00" assuming the orderTotal variable equals "34.00". This example using named parameters returns "Total cost: $34.00" assuming the orderTotal variable equals "34.00". |
| `formatMessage` | `pKey`, `&hellip;pValues` | The localized and formatted message text. If the key is not found then the key is returned. Type string Examples This example using positional parameters returns "Process 60% complete" when the PROCESS_STATUS message text is "Process %0% complete" and the progress variable value is 60. This example using named parameters returns "Process 60% complete" when the PROCESS_STATUS message text is "Process %processComplete% complete" and the progress variable value is 60. |
| `formatMessageNoEscape` | `pKey`, `&hellip;pValues` | The localized and formatted message text. If the key is not found then the key is returned. Type string Examples This example using positional parameters returns "You entered " when the CONFIRM message text is "You entered %0" and the inputValue variable value is " ". Note this string must be used in a context where HTML escaping is done to avoid XSS vulnerabilities. This example using named parameters returns "You entered " when the CONFIRM message text is "You entered %confirmMsg" and the inputValue variable value is " ". Note this string must be used in a context where HTML escaping is done to avoid XSS vulnerabilities. |
| `formatNoEscape` | `pPattern`, `&hellip;pValues` | The formatted message text. Type string Examples This example using positional parameters returns "You entered " when the inputValue variable value is " ". Note this string must be used in a context where HTML escaping is done to avoid XSS vulnerabilities. This example using named parameters returns "You entered " when the inputValue variable value is " ". Note this string must be used in a context where HTML escaping is done to avoid XSS vulnerabilities. |
| `getMessage` | `pKey` | The localized message text. If the key is not found then the key is returned. Type string Example This example returns "OK" when the localized text for key OK_BTN_LABEL is "OK". |
| `hasMessage` | `pKey` | true if the given message exists and false otherwise. Type boolean Example This example checks for the existence of a message, "EXTRA_MESSAGE", before using it. |
| `loadMessages` | `pMessageKeys` | promise resolved (with no data) when messages are available, rejected (with no data) if the ajax request fails. Type Promise Examples This example loads two additional text messages with names "MY_MESSAGE1" and "MY_MESSAGE2". Once they have been loaded it uses getMessage to get the message text. This example loads all the messages for a component. The component has named all its message keys with a common prefix "MY_COMPONENT_". So the following would load messages such as "MY_COMPONENT_MESSAGE1", "MY_COMPONENT_MESSAGE2" and so on. |
| `loadMessagesIfNeeded` | `pMessageKeys`, `pCallback` | Not documented |

### addMessages

Signature: `(static) addMessages (pMessages)`

#### Purpose

Add messages for use by apex.lang.getMessage and the format functions. Can be called multiple times. Additional messages are merged. It is generally not necessary to call this function, because it is automatically called with all the application text messages that have attribute Used in JavaScript set to on.

#### Parameters

| Name | Type | Description |
| --- | --- | --- |
| `pMessages` | Object | An object whose properties are message keys (names), and the values are localized message text. |

#### Simple Example

```javascript
apex.lang.addMessages( {
    ORDER_SAVED: "Order saved.",
    PROCESS_STATUS: "Process %0% complete"
} );
```

### clearMessages

Signature: `(static) clearMessages ()`

#### Purpose

Remove all messages. This method is rarely needed. Many Oracle APEX components rely on client-side messages, so if you clear the messages you need to add any needed messages again.

#### Simple Example

```javascript
apex.lang.clearMessages();
```

### format

Signature: `(static) format (pPattern, &hellip;pValues) &rarr; {string}`

#### Purpose

Formats a message. Same as apex.lang.formatMessage except the message pattern is given directly. It is already localized or isn't supposed to be. It is not a key. The replacement arguments are HTML escaped.

#### Parameters

| Name | Type | Description |
| --- | --- | --- |
| `pPattern` | string |  The message pattern. |

#### Option/Object Properties

| Name | Type | Description |
| --- | --- | --- |
| `pValues` | * |  If using positional parameters, any number of replacement values, one for each message parameter %0 to %9. If using named parameters, a single object with name value pairs. Non string arguments are converted to strings. |

#### Returns

The formatted message text. Type string Examples This example using positional parameters returns "Total cost: $34.00" assuming the orderTotal variable equals "34.00". This example using named parameters returns "Total cost: $34.00" assuming the orderTotal variable equals "34.00".

#### Simple Example

```javascript
const totalText = apex.lang.format(
    "Total cost: $%0",
    "34.00"
);
```

### formatMessage

Signature: `(static) formatMessage (pKey, &hellip;pValues) &rarr; {string}`

#### Purpose

Format a message. Parameters in the message are replaced with the corresponding function argument. Parameters can be named parameters (for example %process %complete) or positional parameters %0 to %9

#### Parameters

| Name | Type | Description |
| --- | --- | --- |
| `pKey` | string |  The message key. The key is used to lookup the localized message text as if with getMessage. |

#### Option/Object Properties

| Name | Type | Description |
| --- | --- | --- |
| `pValues` | * |  If using positional parameters, any number of replacement values, one for each message parameter %0 to %9. If using named parameters, a single object with name value pairs. Non string arguments are converted to strings. |

#### Returns

The localized and formatted message text. If the key is not found then the key is returned. Type string Examples This example using positional parameters returns "Process 60% complete" when the PROCESS_STATUS message text is "Process %0% complete" and the progress variable value is 60. This example using named parameters returns "Process 60% complete" when the PROCESS_STATUS message text is "Process %processComplete% complete" and the progress variable value is 60.

#### Simple Example

```javascript
apex.lang.addMessages( {
    PROCESS_STATUS: "Process %0% complete"
} );

const statusText = apex.lang.formatMessage(
    "PROCESS_STATUS",
    60
);
```

### formatMessageNoEscape

Signature: `(static) formatMessageNoEscape (pKey, &hellip;pValues) &rarr; {string}`

#### Purpose

Same as apex.lang.formatMessage except the replacement arguments are not HTML escaped. They must be known to be safe or will be used in a context that is safe.

#### Parameters

| Name | Type | Description |
| --- | --- | --- |
| `pKey` | string |  The message key. The key is used to lookup the localized message text as if with getMessage. |

#### Option/Object Properties

| Name | Type | Description |
| --- | --- | --- |
| `pValues` | * |  If using positional parameters, any number of replacement values, one for each message parameter %0 to %9. If using named parameters, a single object with name value pairs. Non string arguments are converted to strings. |

#### Returns

The localized and formatted message text. If the key is not found then the key is returned. Type string Examples This example using positional parameters returns "You entered " when the CONFIRM message text is "You entered %0" and the inputValue variable value is " ". Note this string must be used in a context where HTML escaping is done to avoid XSS vulnerabilities. This example using named parameters returns "You entered " when the CONFIRM message text is "You entered %confirmMsg" and the inputValue variable value is " ". Note this string must be used in a context where HTML escaping is done to avoid XSS vulnerabilities.

#### Simple Example

```javascript
apex.lang.addMessages( {
    STATUS_BADGE: "Status: %0"
} );

const badgeHtml = apex.lang.formatMessageNoEscape(
    "STATUS_BADGE",
    "<span class=\"u-success-text\">Ready</span>"
);
```

### formatNoEscape

Signature: `(static) formatNoEscape (pPattern, &hellip;pValues) &rarr; {string}`

#### Purpose

Same as apex.lang.format , except the replacement arguments are not HTML escaped. They must be known to be safe or are used in a context that is safe.

#### Parameters

| Name | Type | Description |
| --- | --- | --- |
| `pPattern` | string |  The message pattern. |

#### Option/Object Properties

| Name | Type | Description |
| --- | --- | --- |
| `pValues` | * |  if using positional parameters, any number of replacement values, one for each message parameter %0 to %9. If using named parameters, a single object with name value pairs. Non string arguments are converted to strings. |

#### Returns

The formatted message text. Type string Examples This example using positional parameters returns "You entered " when the inputValue variable value is " ". Note this string must be used in a context where HTML escaping is done to avoid XSS vulnerabilities. This example using named parameters returns "You entered " when the inputValue variable value is " ". Note this string must be used in a context where HTML escaping is done to avoid XSS vulnerabilities.

#### Simple Example

```javascript
const badgeHtml = apex.lang.formatNoEscape(
    "Status: %0",
    "<span class=\"u-success-text\">Ready</span>"
);
```

### getMessage

Signature: `(static) getMessage (pKey) &rarr; {string}`

#### Purpose

Return the message associated with the given key. The key is looked up in the messages added with the apex.lang.addMessages , apex.lang.loadMessages , or apex.lang.loadMessagesIfNeeded functions.

#### Parameters

| Name | Type | Description |
| --- | --- | --- |
| `pKey` | string | The message key. |

#### Returns

The localized message text. If the key is not found then the key is returned. Type string Example This example returns "OK" when the localized text for key OK_BTN_LABEL is "OK".

#### Simple Example

```javascript
const okLabel = apex.lang.getMessage( "OK_BTN_LABEL" );
```

### hasMessage

Signature: `(static) hasMessage (pKey) &rarr; {boolean}`

#### Purpose

Return true if pKey exists in the messages added with the apex.lang.addMessages , apex.lang.loadMessages , or apex.lang.loadMessagesIfNeeded functions.

#### Parameters

| Name | Type | Description |
| --- | --- | --- |
| `pKey` | string | The message key. |

#### Returns

true if the given message exists and false otherwise. Type boolean Example This example checks for the existence of a message, "EXTRA_MESSAGE", before using it.

#### Simple Example

```javascript
if ( apex.lang.hasMessage( "EXTRA_MESSAGE" ) ) {
    apex.message.alert( apex.lang.getMessage( "EXTRA_MESSAGE" ) );
}
```

### loadMessages

Signature: `(static) loadMessages (pMessageKeys) &rarr; {Promise}`

#### Purpose

Load additional messages from the server.

#### Parameters

| Name | Type | Description |
| --- | --- | --- |
| `pMessageKeys` | Array. | An array of message keys (names) to load. The message keys can end in "%" to load all the messages with keys that start with the given text. |

#### Returns

promise resolved (with no data) when messages are available, rejected (with no data) if the ajax request fails. Type Promise Examples This example loads two additional text messages with names "MY_MESSAGE1" and "MY_MESSAGE2". Once they have been loaded it uses getMessage to get the message text. This example loads all the messages for a component. The component has named all its message keys with a common prefix "MY_COMPONENT_". So the following would load messages such as "MY_COMPONENT_MESSAGE1", "MY_COMPONENT_MESSAGE2" and so on.

#### Simple Example

```javascript
apex.lang.loadMessages( [ "MY_MESSAGE1", "MY_MESSAGE2" ] )
    .then( function() {
        apex.message.alert( apex.lang.getMessage( "MY_MESSAGE1" ) );
    } );
```

### loadMessagesIfNeeded

Signature: `(static) loadMessagesIfNeeded (pMessageKeys, pCallback)`

#### Purpose

Load additional messages from the server only if they are not already loaded.

#### Parameters

| Name | Type | Description |
| --- | --- | --- |
| `pMessageKeys` | Array. | An array of message keys (names) that are needed by pCallback. These messages will be loaded if needed. |
| `pCallback` |  | A no argument function that is called when all the keys have been loaded. If all the messages have already been loaded then this function is called right away. |

#### Simple Example

```javascript
apex.lang.loadMessagesIfNeeded(
    [ "AI_AGENT_ERROR" ],
    function() {
        apex.message.alert( apex.lang.getMessage( "AI_AGENT_ERROR" ) );
    }
);
```

### Notes

- Run APEX JavaScript APIs from an APEX page where the `apex` namespace is loaded.
- Treat client-side values as untrusted when they reach PL/SQL.
- Prefer documented APIs over direct DOM or internal widget state when interacting with APEX components.
---

## apex.locale

Source: [Oracle APEX 26.1 JavaScript API Reference](https://docs.oracle.com/en/database/oracle/apex/26.1/aexjs/apex.locale.html)

### Purpose

`apex.locale` exposes client-side locale information and number formatting/parsing helpers that match APEX and database-style format expectations. Use it when JavaScript must display, parse, or adapt UI text based on the current APEX locale.

Server-side validation still matters. Client-side parsing is helpful for UX, not a replacement for database validation.

### When To Use

Use `apex.locale` when:

- JavaScript must format a number for the current user's locale.
- A page needs to parse localized numeric input before client-side calculations.
- A component needs the current language, day names, month names, date format, or separators.
- Locale resources must be loaded before formatting or parsing.

### Curated Patterns

Format a number for display:

```javascript
const total = Number( $v( "P10_TOTAL" ) || 0 );

$s( "P10_TOTAL_DISPLAY",
    apex.locale.formatNumber( total, "FML999G999G990D00" )
);
```

Use compact formatting for badges, chart labels, and dashboards:

```javascript
const count = Number( $v( "P10_TOKEN_COUNT" ) || 0 );

$( "#tokenBadge" ).text(
    apex.locale.formatCompactNumber( count, {
        maximumFractionDigits: 1
    } )
);
```

Parse localized input for client-side feedback:

```javascript
const budget = apex.locale.toNumber( $v( "P10_BUDGET" ), "999G999G990D00" );

if ( Number.isNaN( budget ) ) {
    apex.message.showErrors( [ {
        type: "error",
        location: "inline",
        pageItem: "P10_BUDGET",
        message: apex.lang.getMessage( "INVALID_NUMBER" ),
        unsafe: false
    } ] );
} else {
    $s( "P10_BUDGET_NORMALIZED", String( budget ) );
}
```

Wait for locale resources:

```javascript
apex.locale.resourcesLoaded( function() {
    $( "#languageCode" ).text( apex.locale.getLanguage() );
    $( "#dateMask" ).text( apex.locale.getDateFormat() );
} );
```

Read locale metadata:

```javascript
const separators = {
    decimal: apex.locale.getDecimalSeparator(),
    group: apex.locale.getGroupSeparator()
};

const monthNames = apex.locale.getMonthNames();
```

### Safety Guidance

- Use `toNumber` for client-side convenience, then validate and convert again in PL/SQL.
- Expect `toNumber` to return `NaN` for invalid or too-precise values.
- Use `resourcesLoaded` before calling functions that depend on loaded locale data.
- Do not use locale-formatted strings as canonical values for storage or API calls.
- Pair localized text with `apex.lang` and localized numbers with `apex.locale`.

### Generated API Surface

| Member | Parameters | Returns |
| --- | --- | --- |
| `formatCompactNumber` | `pValue`, `pOptions` | The compact formatted number. Type string Examples Format the large number 123456789.12 in a compact format and display it in an alert message. Format the same large number 123456789.12 in a compact format using an option to not include any fraction digits. |
| `formatNumber` | `pValue`, `pFormat`, `pOptions` | The formatted number. Type string Example Format the number 1234.569 with locale specific currency symbol and 2 decimal places. |
| `getAbbrevDayNames` | None documented | Array of abbreviated day names. For example ["Sun","Mon","Tue","Wed",...,"Sat"] Type array |
| `getAbbrevMonthNames` | None documented | Array of abbreviated month names. For example ["Jan","Feb","Mar", ..., "Dec"] Type array |
| `getCurrency` | None documented | Type string |
| `getDLDateFormat` | None documented | DL Date format mask. For example "fmDay, Month fmdd, yyyy" or "fmDay, dd. Month yyyy" Type string |
| `getDSDateFormat` | None documented | DS Date format mask. For example "fmMM/DD/RRRR" or "DD.MM.RRRR" Type string |
| `getDateFormat` | None documented | Date format mask. For example "YYYY/MM/DD" or "DD.MM.YYYY" Type string |
| `getDayNames` | None documented | Array of day names. For example ["Sunday","Monday","Tuesday","Wednesday", ...,"Saturday"] Type array |
| `getDecimalSeparator` | None documented | The decimal separator. For example "." (US) or "," (Germany). Type string |
| `getDualCurrency` | None documented | Type string |
| `getGroupSeparator` | None documented | The group separator. For example "," (US) or "." (Germany). Type string |
| `getISOCurrency` | None documented | Type string |
| `getLanguage` | None documented | current language. For example "en", "de", "en-US", ... Type string |
| `getMonthNames` | None documented | Array of month names. For example ["January","February","March", ...,"December"] Type array |
| `resourcesLoaded` | `pCallback` | A promise object. The promise is resolved when the resources have been loaded. Type Promise Examples Wait until the resources are loaded before formatting a number. This is the same as the previous example except it uses the returned promise. This checks to see if the resources are loaded. |
| `toNumber` | `pValue`, `pFormat` | the converted number or NaN if pValue cannot be converted to a number Type number Examples In a locale that uses comma as the group separator, period as the decimal separator and $ as the locale currency symbol the following all result in the same number 1234.56. In a locale that uses period as the group separator, comma as the decimal separator and € as the locale currency symbol the following all result in the same number 1234.56. Documentation generated by JSDoc 4.0.5 on Fri Apr 17 2026 17:55:51 GMT+0000 (Coordinated Universal Time) Oracle APEX Release 26.1, JavaScript API Reference Copyright &copy; 2003, 2026, Oracle and/or its affiliates. All rights reserved. |

### formatCompactNumber

Signature: `(static) formatCompactNumber (pValue, pOptions opt ) &rarr; {string}`

#### Purpose

Formats the given number in a compact, locale specific way. For example in the US English locale the number 123400 would be formatted as "123.4K" and 1234000 as "1.23M".

#### Parameters

| Name | Type | Description |
| --- | --- | --- |
| `pValue` | number |  The number value to be formatted. |
| `pOptions` | object |  An options object that affect the way the number is formatted. All properties optional. Properties Name Type Description |

#### Option/Object Properties

| Name | Type | Description |
| --- | --- | --- |
| `maximumFractionDigits` | number | The maximum number of digits to display after the decimal point. Default 2. |
| `minimumFractionDigits` | number | The minimum number of digits to display after the decimal point. Default 0. |
| `minimumIntegerDigits` | number | The minimum number of integer digits to display before the decimal point. Default 1. |
| `roundingMode` | string | One of 'DEFAULT', 'HALF_UP', 'HALF_DOWN', 'HALF_EVEN', 'UP', 'DOWN', 'CEILING', 'FLOOR'. The default is "DEFAULT". |
| `separators` | string | The characters to use for the decimal and group separator. The default is to use the appropriate locale specific characters. Properties Name Type Description |
| `decimal` | string | The decimal separator character. |
| `group` | string | The group separator character. |

#### Returns

The compact formatted number. Type string Examples Format the large number 123456789.12 in a compact format and display it in an alert message. Format the same large number 123456789.12 in a compact format using an option to not include any fraction digits.

#### Simple Example

```javascript
apex.locale.formatCompactNumber(
    "Example",
    {}
);
```

### formatNumber

Signature: `(static) formatNumber (pValue, pFormat opt , pOptions opt ) &rarr; {string}`

#### Purpose

Formats a number using a database format model similar to the SQL TO_CHAR( number ) function.

#### Parameters

| Name | Type | Description |
| --- | --- | --- |
| `pValue` | number |  The number to format. |
| `pFormat` | string |  The database format model. The format elements RN, TM, and EEEE are not supported. If the format is not given the number is returned as a string with only the decimal separator replaced with the locale specific decimal separator. |
| `pOptions` | object |  Options to override default locale settings. All properties optional. Properties Name Type Description |

#### Option/Object Properties

| Name | Type | Description |
| --- | --- | --- |
| `NLS_NUMERIC_CHARACTERS` | string | A string where the first letter is the decimal separator and the second letter is the group separator |
| `NLS_CURRENCY` | string | The local currency string. |
| `NLS_DUAL_CURRENCY` | string | The dual currency string. |
| `NLS_ISO_CURRENCY` | string | The ISO currency string. Note: This option differs from the corresponding database parameter. It is the ISO currency string such as "CAD" rather than the territory name such as "CANADA". |

#### Returns

The formatted number. Type string Example Format the number 1234.569 with locale specific currency symbol and 2 decimal places.

#### Simple Example

```javascript
const totalText = apex.locale.formatNumber(
    1234.569,
    "FML999G999G990D00",
    {
        NLS_CURRENCY: "$"
    }
);
```

### getAbbrevDayNames

Signature: `(static) getAbbrevDayNames () &rarr; {array}`

#### Purpose

Use `getAbbrevDayNames` as documented by the `apex.locale` module.

#### Returns

Array of abbreviated day names. For example ["Sun","Mon","Tue","Wed",...,"Sat"] Type array

#### Simple Example

```javascript
apex.locale.getAbbrevDayNames();
```

### getAbbrevMonthNames

Signature: `(static) getAbbrevMonthNames () &rarr; {array}`

#### Purpose

Use `getAbbrevMonthNames` as documented by the `apex.locale` module.

#### Returns

Array of abbreviated month names. For example ["Jan","Feb","Mar", ..., "Dec"] Type array

#### Simple Example

```javascript
apex.locale.getAbbrevMonthNames();
```

### getCurrency

Signature: `(static) getCurrency () &rarr; {string}`

#### Purpose

Use `getCurrency` as documented by the `apex.locale` module.

#### Returns

Type string

#### Simple Example

```javascript
apex.locale.getCurrency();
```

### getDLDateFormat

Signature: `(static) getDLDateFormat () &rarr; {string}`

#### Purpose

Use `getDLDateFormat` as documented by the `apex.locale` module.

#### Returns

DL Date format mask. For example "fmDay, Month fmdd, yyyy" or "fmDay, dd. Month yyyy" Type string

#### Simple Example

```javascript
apex.locale.getDLDateFormat();
```

### getDSDateFormat

Signature: `(static) getDSDateFormat () &rarr; {string}`

#### Purpose

Use `getDSDateFormat` as documented by the `apex.locale` module.

#### Returns

DS Date format mask. For example "fmMM/DD/RRRR" or "DD.MM.RRRR" Type string

#### Simple Example

```javascript
apex.locale.getDSDateFormat();
```

### getDateFormat

Signature: `(static) getDateFormat () &rarr; {string}`

#### Purpose

Use `getDateFormat` as documented by the `apex.locale` module.

#### Returns

Date format mask. For example "YYYY/MM/DD" or "DD.MM.YYYY" Type string

#### Simple Example

```javascript
apex.locale.getDateFormat();
```

### getDayNames

Signature: `(static) getDayNames () &rarr; {array}`

#### Purpose

Use `getDayNames` as documented by the `apex.locale` module.

#### Returns

Array of day names. For example ["Sunday","Monday","Tuesday","Wednesday", ...,"Saturday"] Type array

#### Simple Example

```javascript
apex.locale.getDayNames();
```

### getDecimalSeparator

Signature: `(static) getDecimalSeparator () &rarr; {string}`

#### Purpose

Use `getDecimalSeparator` as documented by the `apex.locale` module.

#### Returns

The decimal separator. For example "." (US) or "," (Germany). Type string

#### Simple Example

```javascript
apex.locale.getDecimalSeparator();
```

### getDualCurrency

Signature: `(static) getDualCurrency () &rarr; {string}`

#### Purpose

Use `getDualCurrency` as documented by the `apex.locale` module.

#### Returns

Type string

#### Simple Example

```javascript
apex.locale.getDualCurrency();
```

### getGroupSeparator

Signature: `(static) getGroupSeparator () &rarr; {string}`

#### Purpose

Use `getGroupSeparator` as documented by the `apex.locale` module.

#### Returns

The group separator. For example "," (US) or "." (Germany). Type string

#### Simple Example

```javascript
apex.locale.getGroupSeparator();
```

### getISOCurrency

Signature: `(static) getISOCurrency () &rarr; {string}`

#### Purpose

Use `getISOCurrency` as documented by the `apex.locale` module.

#### Returns

Type string

#### Simple Example

```javascript
apex.locale.getISOCurrency();
```

### getLanguage

Signature: `(static) getLanguage () &rarr; {string}`

#### Purpose

Use `getLanguage` as documented by the `apex.locale` module.

#### Returns

current language. For example "en", "de", "en-US", ... Type string

#### Simple Example

```javascript
apex.locale.getLanguage();
```

### getMonthNames

Signature: `(static) getMonthNames () &rarr; {array}`

#### Purpose

Use `getMonthNames` as documented by the `apex.locale` module.

#### Returns

Array of month names. For example ["January","February","March", ...,"December"] Type array

#### Simple Example

```javascript
apex.locale.getMonthNames();
```

### resourcesLoaded

Signature: `(static) resourcesLoaded (pCallback opt ) &rarr; {Promise}`

#### Purpose

Used to determine if the resources needed by some of the apex.locale functions have been loaded.

#### Parameters

| Name | Type | Description |
| --- | --- | --- |
| `pCallback` | function |  A Function to call when the resources have been loaded. If the resources are already loaded the function is called right away. |

#### Returns

A promise object. The promise is resolved when the resources have been loaded. Type Promise Examples Wait until the resources are loaded before formatting a number. This is the same as the previous example except it uses the returned promise. This checks to see if the resources are loaded.

#### Simple Example

```javascript
apex.locale.resourcesLoaded(
    function() {}
);
```

### toNumber

Signature: `(static) toNumber (pValue, pFormat opt ) &rarr; {number}`

#### Purpose

Convert the given string value into a number. It does not strictly validate against the given format but will strip potential format characters from the number so it can be converted to a number. The intention is to allow natural human data entry of numbers. The locale decimal and group separators are considered. If the number exceeds the precision of a JavaScript number (IEEE 754) then NaN is returned unless the loss of precision is to the right of the decimal point and any decimal places specified in the format mask.

#### Parameters

| Name | Type | Description |
| --- | --- | --- |
| `pValue` | string |  The potentially formatted or partially formatted number string to convert. |
| `pFormat` | string |  The optional expected format of the value to convert. This is a database format model. The format elements V, RN, TM, and EEEE are not supported and will be ignored. |

#### Returns

the converted number or NaN if pValue cannot be converted to a number Type number Examples In a locale that uses comma as the group separator, period as the decimal separator and $ as the locale currency symbol the following all result in the same number 1234.56. In a locale that uses period as the group separator, comma as the decimal separator and € as the locale currency symbol the following all result in the same number 1234.56. Documentation generated by JSDoc 4.0.5 on Fri Apr 17 2026 17:55:51 GMT+0000 (Coordinated Universal Time) Oracle APEX Release 26.1, JavaScript API Reference Copyright &copy; 2003, 2026, Oracle and/or its affiliates. All rights reserved.

#### Simple Example

```javascript
const amount = apex.locale.toNumber(
    "$1,234.56",
    "FML999G999G990D00"
);
```

### Notes

- Run APEX JavaScript APIs from an APEX page where the `apex` namespace is loaded.
- Treat client-side values as untrusted when they reach PL/SQL.
- Prefer documented APIs over direct DOM or internal widget state when interacting with APEX components.
---

## apex.message

Source: [Oracle APEX 26.1 JavaScript API Reference](https://docs.oracle.com/en/database/oracle/apex/26.1/aexjs/apex.message.html)

### Purpose

`apex.message` shows page-level success messages, page/item errors, alert and confirmation dialogs, and accessible live-region messages. Use it instead of manually injecting notification markup so the app follows the active APEX theme and accessibility conventions.

### When To Use

Use `apex.message` when:

- An Ajax callback succeeds and should show a page success message.
- Client-side validation should show APEX-style item/page errors.
- A custom action needs an alert or confirmation dialog.
- A custom region must make hidden error items visible before focus.
- Screen readers need an announcement that is not otherwise visible.

### API Surface

| Need | Members |
| --- | --- |
| Page success | `showPageSuccess`, `hidePageSuccess`, `setDismissPreferences` |
| Errors | `showErrors`, `clearErrors`, `addVisibilityCheck` |
| Dialogs | `alert`, `confirm` |
| Accessibility | `ariaMessage`, `ariaAlertMessage` |
| Theme integration | `setThemeHooks`, `TYPE` |

### Page Success

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

### Errors

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

### Alert And Confirm

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

### Accessibility Announcements

Use polite announcement for status:

```javascript
apex.message.ariaMessage( "Search results updated." );
```

Use assertive alert for urgent feedback:

```javascript
apex.message.ariaAlertMessage( "Session will expire soon." );
```

### Visibility Checks

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

### Safety Guidance

- Prefer `apex.message` over hand-built notification markup.
- Clear stale errors before showing new client-side validation results.
- Use `unsafe: false` for messages that include user or external data.
- Use `apex.page.submit` for page submit flows and `apex.server.process` for Ajax flows.
- Avoid blocking users with dialogs for routine success messages.
---

## apex.model

Source: [Oracle APEX 26.1 JavaScript API Reference](https://docs.oracle.com/en/database/oracle/apex/26.1/aexjs/apex.model.html)

### Purpose

`apex.model` manages client-side data models used by APEX components such as Interactive Grid and custom model-based widgets. It can create local models, inspect models, check for changes/errors, fetch multiple models, and save changed model data.

Most app code interacts with component-specific model APIs rather than creating models directly. Use `apex.model` when coordinating model changes across components or building advanced custom components.

### Common Member Groups

| Need | Members |
| --- | --- |
| Create/access/release | `create`, `get`, `release`, `destroy` |
| Inspect page state | `anyChanges`, `anyErrors`, `list` |
| Save/fetch | `save`, `multipleFetch`, `addChangesToSaveRequest` |
| Cache control | `getMaxCachedModels`, `setMaxCachedModels` |

### Check Unsaved Model Changes

```javascript
if ( apex.model.anyChanges() ) {
    apex.message.alert( "There are unsaved grid changes." );
}
```

Check model errors:

```javascript
if ( apex.model.anyErrors() ) {
    apex.message.alert( "Fix grid errors before saving." );
}
```

### Save Changed Models

```javascript
const promise = apex.model.save();

if ( promise ) {
    promise.done( function() {
        apex.message.showPageSuccess( "Changes saved." );
    } ).fail( function() {
        apex.message.alert( "Changes could not be saved." );
    } );
} else {
    apex.debug.info( "No model changes to save." );
}
```

### Interactive Grid Model Access

Assuming an Interactive Grid region Static ID `emp_ig`:

```javascript
const ig$ = apex.region( "emp_ig" ).widget();
const view = ig$.interactiveGrid( "getCurrentView" );
const model = view.model;

model.forEach( function( record ) {
    const empno = model.getValue( record, "EMPNO" );
    const ename = model.getValue( record, "ENAME" );
    apex.debug.info( "Employee", empno, ename );
} );
```

### Local Model Pattern

Assuming a custom component needs a small local model:

```javascript
const people = apex.model.create(
    "people",
    {
        shape: "table",
        recordIsArray: false,
        identityField: "id",
        fields: {
            id: {},
            name: {},
            age: {}
        }
    },
    [
        { id: 1, name: "Ada", age: 36 },
        { id: 2, name: "Grace", age: 85 }
    ]
);

// Use model here.

apex.model.release( "people" );
```

Check the generated `model.md` interface page for record-level methods and detailed options.

### Safety Guidance

- Release models you explicitly get or create when done.
- Check `anyErrors` before saving.
- For Interactive Grid, prefer region/view/model APIs instead of direct DOM scraping.
- Do not assume model changes are authorized; server-side DML validation still matters.
- Use component-specific APIs when they better describe the task.
---

## apex.navigation

Source: [Oracle APEX 26.1 JavaScript API Reference](https://docs.oracle.com/en/database/oracle/apex/26.1/aexjs/apex.navigation.html)

### Purpose

`apex.navigation` changes browser location, opens APEX dialogs, opens popup windows, and opens new browser windows. Use it instead of raw `window.location` or `window.open` when the action participates in APEX dialog/navigation behavior.

### API Surface

| Member | Use |
| --- | --- |
| `redirect` | Navigate to another URL. |
| `dialog` | Open an APEX page URL as a modal or non-modal dialog. |
| `popup` | Open a popup window from options. |
| `openInNewWindow` | Open a URL in a new browser window/tab. |

### Redirect

Simple redirect:

```javascript
apex.navigation.redirect( "f?p=&APP_ID.:10:&SESSION." );
```

Ignore unsaved changes warning for a deliberate cancel action:

```javascript
apex.navigation.redirect(
    "f?p=&APP_ID.:1:&SESSION.",
    true
);
```

Prefer server-generated URLs for security-sensitive navigation:

```sql
apex_page.get_url(
    p_page   => 10,
    p_items  => 'P10_ID',
    p_values => :P1_ID )
```

### Dialog

Open a modal dialog from a URL:

```javascript
apex.navigation.dialog(
    "f?p=&APP_ID.:20:&SESSION.::NO::P20_ID:1001",
    {
        title: "Order Details",
        height: "auto",
        width: "720",
        modal: true
    },
    "t-Dialog-page--standard",
    apex.jQuery( "#view_order_btn" )
);
```

Use `apex_page.get_url` on the server to build dialog URLs when possible.

### Popup

Open a named popup:

```javascript
const popupWindow = apex.navigation.popup( {
    url: "f?p=&APP_ID.:30:&SESSION.",
    name: "orderPopup",
    width: 900,
    height: 700,
    scroll: "yes",
    resizeable: "yes"
} );
```

### New Window

```javascript
apex.navigation.openInNewWindow(
    "f?p=&APP_ID.:40:&SESSION.",
    "reportWindow",
    {
        noopener: true
    }
);
```

Use `noopener: true` when the new page does not need access to the opener.

### Safety Guidance

- Prefer APEX-generated URLs over string concatenation.
- Do not put sensitive values directly in URLs.
- Use the `pIgnoreUnsavedChanges` flag only for deliberate navigation away from changes.
- Use dialogs for short focused tasks; navigate pages for full workflows.
- Browser popup blockers can block popup/new-window calls not triggered directly by a user action.
---

## apex.navigation.dialog

Source: [Oracle APEX 26.1 JavaScript API Reference](https://docs.oracle.com/en/database/oracle/apex/26.1/aexjs/apex.navigation.dialog.html)

### Purpose

`apex.navigation.dialog` contains helper functions used from dialog pages and custom dialog integration code. It closes or cancels dialogs and registers close behavior for dialogs opened through `apex.navigation.dialog`.

Use `apex.navigation.dialog` from inside an APEX dialog page when JavaScript must close the dialog and optionally return values to the parent page. Use `apex.navigation.dialog(...)` in the parent page to open a dialog.

### When To Use

Use `apex.navigation.dialog` when:

- A custom button inside a modal dialog should close the dialog.
- A dialog should return item values or a custom object to the parent page.
- A cancel action should close without returning a successful close result.
- Advanced code opens custom dialog UI and needs to register close handling.

Prefer declarative Close Dialog and Cancel Dialog actions when they cover the workflow.

### Close With Returned Values

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

### Close By Returning Item Names

When the dialog items already contain the values to return:

```javascript
apex.navigation.dialog.close( true, [ "P30_ORDER_ID", "P30_STATUS" ] );
```

### Cancel Dialog

```javascript
apex.navigation.dialog.cancel( true );
```

Use cancel for "no change" flows. The parent can listen to `apexafterclosecanceldialog` if it needs to react to both close and cancel.

### Advanced Close Handler

`registerCloseHandler` is for custom dialog implementations. Most application code should not call it directly.

### API Surface

| Member | Parameters | Returns |
| --- | --- | --- |
| `cancel` | `pIsModal` | Not documented |
| `close` | `pIsModal`, `pAction` | Not documented |
| `registerCloseHandler` | `pOptions` | Not documented |

### cancel

Signature: `(static) cancel (pIsModal)`

#### Purpose

Closes the dialog window.

#### Parameters

| Name | Type | Description |
| --- | --- | --- |
| `pIsModal` | boolean | If true, then the dialog is identified as being modal. If false, then the dialog is identified as being non-modal. |

#### Simple Example

```javascript
apex.navigation.dialog.cancel( true );
```

### close

Signature: `(static) close (pIsModal, pAction opt )`

#### Purpose

Executes an action and then closes the dialog window.

#### Parameters

| Name | Type | Description |
| --- | --- | --- |
| `pIsModal` | boolean |  If true, then the dialog is identified as being modal. If false, then the dialog is identified as being non-modal. |
| `pAction` | string | function | Object |  The action can be one of the following: a URL which will trigger a redirect in the parent page a function to redirect to a different dialog page false to cancel the dialog an object of page items and values which will be exposed in the apexafterclosedialog or apexafterclosecanceldialog event an array of page item names, the values will be gathered from the page items to create an object of page item values to be exposed in the apexafterclosedialog or apexafterclosecanceldialog event |

#### Simple Example

```javascript
apex.navigation.dialog.close(
    true,
    {
        P30_ORDER_ID: apex.item( "P30_ORDER_ID" ).getValue(),
        P30_STATUS: apex.item( "P30_STATUS" ).getValue()
    }
);
```

### registerCloseHandler

Signature: `(static) registerCloseHandler (pOptions)`

#### Purpose

Registers the internal "close" event of a dialog. The event will be triggered by fireCloseEvent and depending on the passed in pAction will:

#### Parameters

| Name | Type | Description |
| --- | --- | --- |
| `pOptions` | Object | Has to contain the following attributes: Properties Name Type Attributes Description |

#### Option/Object Properties

| Name | Type | Description |
| --- | --- | --- |
| `handler$` | Object |  jQuery object where the event will be registered for. |
| `dialog` | Element | Object |  DOM Element/jQuery/... object of the current dialog instance which will be passed into the open dialog call if the existing dialog should be re-used. |
| `closeFunction` | function |  Function which is used to close the dialog. |

#### Simple Example

```javascript
apex.navigation.dialog.registerCloseHandler(
    {}
);
```

### Notes

- Run APEX JavaScript APIs from an APEX page where the `apex` namespace is loaded.
- Treat client-side values as untrusted when they reach PL/SQL.
- Prefer documented APIs over direct DOM or internal widget state when interacting with APEX components.
---

## apex.navigation.popup

Source: [Oracle APEX 26.1 JavaScript API Reference](https://docs.oracle.com/en/database/oracle/apex/26.1/aexjs/apex.navigation.popup.html)

### Purpose

`apex.navigation.popup` contains helper behavior for APEX popup windows. Its documented `close` function is called from the popup page to set an item value in the opener page and close the popup.

Use `apex.navigation.popup.close` only from an APEX page that was opened as a popup by another APEX page.

### When To Use

Use `apex.navigation.popup.close` when:

- A legacy popup LOV or custom popup page must return a single value to an item on the parent page.
- A popup selection page should set the opener item and close itself.

Prefer modal dialogs for most modern workflows. Browser popup blockers and window relationships make popup flows more fragile than APEX dialogs.

### Return A Value To The Opener

Assuming the parent page opened a popup to select a customer and wants `P10_CUSTOMER_ID` set:

```javascript
apex.navigation.popup.close(
    "P10_CUSTOMER_ID",
    apex.item( "P30_CUSTOMER_ID" ).getValue()
);
```

If the popup displays both return and display values, set the display value in the parent with a follow-up parent-page refresh or use a modal dialog workflow with returned values instead.

### Notes

- `pItem` is the parent/opener item, not an item in the popup page.
- `pValue` is client-provided. Validate it on the server after submit or Ajax.
- This API closes a popup window. For APEX modal dialogs, use `apex.navigation.dialog.close`.

### API Surface

| Member | Parameters | Returns |
| --- | --- | --- |
| `close` | `pItem`, `pValue` | Not documented |

### close

Signature: `(static) close (pItem, pValue)`

#### Purpose

Sets the value of the item in the parent window (pItem) with (pValue), and then closes the popup window. This function should only be called from an Oracle APEX page that has been opened as a popup window, via a call to apex.navigation.popup , where the call to apex.navigation.popup is originating from another Oracle APEX page.

#### Parameters

| Name | Type | Description |
| --- | --- | --- |
| `pItem` | Element | string | The DOM Element or string id (item name) of the page item to be set with the value of pValue . |
| `pValue` | string | The value to be save to the page item referenced in pItem . |

#### Simple Example

```javascript
apex.navigation.popup.close(
    "P1_ITEM",
    "Example"
);
```

### Notes

- Run APEX JavaScript APIs from an APEX page where the `apex` namespace is loaded.
- Treat client-side values as untrusted when they reach PL/SQL.
- Prefer documented APIs over direct DOM or internal widget state when interacting with APEX components.
---

## apex.page

Source: [Oracle APEX 26.1 JavaScript API Reference](https://docs.oracle.com/en/database/oracle/apex/26.1/aexjs/apex.page.html)

### Purpose

`apex.page` manages page submit, page validation, confirmation submit flows, and Warn on Unsaved Changes behavior. Use it instead of raw form submission so APEX page processing, validation, request values, wait indicators, and change tracking work correctly.

### API Surface

| Need | Members |
| --- | --- |
| Submit page | `submit`, `$s` alias in legacy contexts |
| Confirm and submit | `confirm` |
| Client validation | `validate` |
| Change tracking | `isChanged`, `warnOnUnsavedChanges`, `cancelWarnOnUnsavedChanges` |

### Submit

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

### Confirm

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

### Validate

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

### Warn On Unsaved Changes

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

### Safety Guidance

- Use `apex.page.submit` for full page submit flows.
- Use `apex.server.process` for Ajax calls that should not run page submit processing.
- Use `validate: true` for save/submit operations that rely on browser/APEX client validation.
- Avoid bypassing Warn on Unsaved Changes unless the user intentionally cancels or leaves the workflow.
- Treat item values set in JavaScript as untrusted; validate again server-side.
---

## apex.pwa

Source: [Oracle APEX 26.1 JavaScript API Reference](https://docs.oracle.com/en/database/oracle/apex/26.1/aexjs/apex.pwa.html)

### Purpose

`apex.pwa` contains client-side functions for APEX Progressive Web App features. These APIs only apply when the current APEX application has PWA enabled. They help detect display mode, trigger installation UI, inspect push notification subscriptions, and subscribe or unsubscribe the current user/browser.

Use APEX_PWA for server-side push notification utilities.

### API Surface

| Need | Member |
| --- | --- |
| Display mode | `getDisplayMode` |
| Install eligibility | `isInstallable`, `openInstallDialog` |
| Deprecated install text | `getInstallText` |
| Push status | `hasPushSubscription`, `getPushSubscription` |
| Push subscribe/unsubscribe | `subscribePushNotifications`, `unsubscribePushNotifications` |

### Detect Display Mode

```javascript
const displayMode = apex.pwa.getDisplayMode();

if ( displayMode === "standalone" || displayMode === "fullscreen" ) {
    apex.debug.info( "Running as installed PWA." );
}
```

Possible display modes include `fullscreen`, `standalone`, `minimal-ui`, and `browser`.

### Install Button

APEX automatically invokes install behavior for elements with class `a-pwaInstall` and the built-in action `a-pwa-install`. For a custom button:

```javascript
apex.jQuery( "#install_app" ).on( "click", async function() {
    if ( await apex.pwa.isInstallable() ) {
        apex.pwa.openInstallDialog();
    } else {
        apex.message.alert( "This app is already installed or cannot be installed from this browser." );
    }
} );
```

`openInstallDialog` triggers browser-supported installation when available, or APEX installation instructions when automatic installation is not available.

### Push Subscription Status

```javascript
async function refreshPushButton() {
    const subscribed = await apex.pwa.hasPushSubscription();

    apex.jQuery( "#enable_push" )
        .prop( "disabled", subscribed )
        .text( subscribed ? "Notifications Enabled" : "Enable Notifications" );
}

refreshPushButton();
```

Get the subscription object when you need browser-level details:

```javascript
const subscription = await apex.pwa.getPushSubscription();

if ( subscription ) {
    apex.debug.info( "Push endpoint available." );
}
```

Do not log or expose full subscription objects unnecessarily.

### Subscribe And Unsubscribe

```javascript
apex.jQuery( "#enable_push" ).on( "click", async function() {
    try {
        await apex.pwa.subscribePushNotifications();
        apex.message.showPageSuccess( "Notifications enabled." );
    } catch ( error ) {
        apex.debug.error( "Push subscription failed", error );
        apex.message.alert( "Notifications could not be enabled." );
    }
} );
```

```javascript
apex.jQuery( "#disable_push" ).on( "click", async function() {
    try {
        await apex.pwa.unsubscribePushNotifications();
        apex.message.showPageSuccess( "Notifications disabled." );
    } catch ( error ) {
        apex.debug.error( "Push unsubscribe failed", error );
    }
} );
```

Ask for notification permission only in response to a clear user action.

### Combined Install And Push Flow

```javascript
async function enablePwaExperience() {
    if ( await apex.pwa.isInstallable() ) {
        apex.pwa.openInstallDialog();
    }

    if ( !( await apex.pwa.hasPushSubscription() ) ) {
        await apex.pwa.subscribePushNotifications();
    }
}

apex.jQuery( "#enable_pwa" ).on( "click", function() {
    enablePwaExperience().catch( function( error ) {
        apex.debug.error( "PWA setup failed", error );
        apex.message.alert( "The PWA setup could not be completed." );
    } );
} );
```

### Deprecated Member

`getInstallText()` is marked deprecated in the APEX 26.1 JavaScript API. Prefer `openInstallDialog()` or declarative install actions/classes for user-facing install behavior.

### Safety Notes

- These APIs are useful only when PWA is enabled for the application.
- Browser support and install eligibility vary by platform. Always handle `false` and rejected promises.
- Trigger install and notification permission flows from user actions, not automatic page load code.
- Do not send secrets or sensitive personal data in notification text.
- Avoid logging full push subscription details.
- Pair client subscription code with server-side `APEX_PWA` checks before sending notifications.

### Related APIs

- APEX_PWA for server-side push notification and subscription utilities.
- apex.actions for the built-in `a-pwa-install` action.
- apex.message for install/subscription feedback.
---

## apex.region

Source: [Oracle APEX 26.1 JavaScript API Reference](https://docs.oracle.com/en/database/oracle/apex/26.1/aexjs/apex.region.html)

### Purpose

`apex.region` returns and manages client-side region interfaces. App code most often uses `apex.region( staticId )` to refresh, focus, or call region-specific methods. Plug-in developers use `apex.region.create` and `apex.region.destroy` to register custom region behavior.

### Normal App Usage

Refresh a region with Static ID `orders`:

```javascript
apex.region( "orders" ).refresh();
```

Focus a region:

```javascript
apex.region( "orders" ).focus();
```

Call after Ajax update:

```javascript
apex.server.process( "SAVE_FILTERS", {
    pageItems: "#P10_STATUS,#P10_OWNER"
} ).done( function() {
    apex.region( "orders" ).refresh();
} );
```

### API Surface

| Member | Use |
| --- | --- |
| `create` | Register a custom region interface. Mostly for region plug-ins. |
| `destroy` | Remove custom region behavior. Mostly for plug-ins/dynamic teardown. |
| `findClosest` | Find the nearest registered region containing a DOM target. |
| `isRegion` | Check whether a region interface exists for an ID. |

### `findClosest`

Refresh the region containing a clicked button:

```javascript
apex.jQuery( document ).on( "click", ".js-refresh-containing-region", function() {
    const region = apex.region.findClosest( this );

    if ( region ) {
        region.refresh();
    }
} );
```

### `isRegion`

Defensive region refresh:

```javascript
function refreshIfRegionExists( staticId ) {
    if ( apex.region.isRegion( staticId ) ) {
        apex.region( staticId ).refresh();
    }
}

refreshIfRegionExists( "orders" );
```

### Plug-In Pattern

Assuming a custom region plug-in renders a root element with DOM ID from `p_region.dom_id`:

```javascript
apex.region.create( "my_custom_region", {
    type: "myCustomRegion",
    refresh: function() {
        return apex.server.plugin(
            this.ajaxIdentifier,
            {},
            {
                refreshObject: this.element
            }
        );
    },
    focus: function() {
        this.element.find( "button, input, a" ).first().trigger( "focus" );
    }
} );
```

Destroy plug-in behavior when a dynamic component is removed:

```javascript
apex.region.destroy( "my_custom_region" );
```

### Safety Guidance

- Give important regions a Static ID and use that ID consistently.
- Prefer `apex.region( staticId ).refresh()` over triggering low-level DOM events.
- Use `findClosest` for generic buttons/actions inside reusable region markup.
- Only plug-in code should normally call `create` and `destroy`.
- Region-specific APIs vary by region type; check the interface docs for Interactive Grid, Cards, Facets, and other specialized regions.
---

## apex.server

Source: [Oracle APEX 26.1 JavaScript API Reference](https://docs.oracle.com/en/database/oracle/apex/26.1/aexjs/apex.server.html)

### Purpose

`apex.server` contains the client-side Ajax helpers for communicating from an APEX page to the APEX server. Use it for on-demand processes, plug-in Ajax callbacks, generated GET URLs, request queues, refresh events, and loading scripts.

Most functions return either a string URL, a value, or a promise-like object. The Ajax promise supports `done`, `fail`, `always`, and usually `abort`, but queue behavior can affect abort semantics.

### Function Summary

| Function | Returns | Use |
| --- | --- | --- |
| `apex.server.chunk(text)` | `string` or `Array<string>` | Split long text into chunks no larger than 8000 characters. |
| `apex.server.loadScript(options, callback)` | `*` | Load a JavaScript file using RequireJS or jQuery script loading. |
| `apex.server.plugin(ajaxIdentifier, data, options)` | `Promise` | Call a plug-in Ajax callback. |
| `apex.server.pluginUrl(ajaxIdentifier, data)` | `string` | Build a GET URL for a plug-in Ajax callback. |
| `apex.server.process(name, data, options)` | `Promise` | Call a page-level or application-level Ajax Callback process. |
| `apex.server.url(data, page)` | `string` | Build a GET URL for the current or specified page. |

### Common Ajax Data Shape

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

### `chunk(text)`

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

### `loadScript(options, callback)`

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

### `process(name, data, options)`

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

### `plugin(ajaxIdentifier, data, options)`

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

### `pluginUrl(ajaxIdentifier, data)`

Use `pluginUrl` to build a GET URL for a plug-in Ajax callback.

```javascript
const url = apex.server.pluginUrl( lAjaxIdentifier, {
    x01: "download",
    pageItems: "#P10_FILE_ID"
} );

window.location.href = url;
```

Use POST-style `plugin` for state-changing work and larger payloads. Use `pluginUrl` for GET-friendly cases such as downloads or links.

### `url(data, page)`

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

### Queue Guidance

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

### Safety And Quality Notes

- Prefer `pageItems` for values that should be set in session state.
- Use `x01` to `x20` for small scalar metadata.
- Use `f01` to `f20` for arrays.
- Do not use GET URLs for destructive actions.
- Always handle `fail` for user-facing interactions.
- Avoid deprecated `async` behavior.
- Include `target` when `pageItems` includes column items.
- Treat client-sent data as untrusted in the PL/SQL Ajax Callback.
---

## apex.storage

Source: [Oracle APEX 26.1 JavaScript API Reference](https://docs.oracle.com/en/database/oracle/apex/26.1/aexjs/apex.storage.html)

### Purpose

`apex.storage` wraps browser cookie, localStorage, and sessionStorage behavior with APEX-friendly helpers. The most useful members are scoped local/session storage wrappers that prefix keys by application, page, region, or a custom prefix so components do not collide.

Storage is client-side state. Do not use it for secrets, authorization, trusted preferences, or anything the server must enforce.

### When To Use

Use `apex.storage` when:

- A page needs to remember client-only UI preferences such as panel state, selected tabs, or display density.
- A component should store values without colliding with another application, page, or region.
- A plug-in needs a storage wrapper that still behaves safely when browser storage support is unavailable.
- Code needs to read or set a simple browser cookie.

### Curated Patterns

Assuming page 10 has an AI agent console region with Static ID `agent_console`, remember the user's client-side layout preference:

```javascript
const prefs = apex.storage.getScopedLocalStorage( {
    prefix: "ai-agent",
    useAppId: true,
    usePageId: true,
    regionId: "agent_console"
} );

prefs.setItem( "panel", "trace" );
prefs.setItem( "density", "compact" );
```

Read it during page initialization:

```javascript
const prefs = apex.storage.getScopedLocalStorage( {
    prefix: "ai-agent",
    useAppId: true,
    usePageId: true,
    regionId: "agent_console"
} );

const panel = prefs.getItem( "panel" ) || "chat";
```

Use session storage for state that should disappear when the browser session ends:

```javascript
const draftState = apex.storage.getScopedSessionStorage( {
    prefix: "agent-draft",
    useAppId: true,
    usePageId: true
} );

draftState.setItem( "lastPrompt", $v( "P10_PROMPT" ) );
```

Cookie example:

```javascript
apex.storage.setCookie( "AI_DEMO_LAST_TAB", "settings" );

const lastTab = apex.storage.getCookie( "AI_DEMO_LAST_TAB" );
```

### Safety Guidance

- Never store passwords, API keys, OAuth tokens, private data, or authorization decisions in browser storage.
- Treat stored values as user-controlled when sending them back to PL/SQL.
- Use scoped wrappers instead of raw `localStorage` keys.
- Keep stored values small; large payloads belong on the server.
- Browser storage can be unavailable or cleared by the user, so code must have defaults.

### Generated API Surface

| Member | Parameters | Returns |
| --- | --- | --- |
| `getCookie` | `pName` | The string value of the cookie. Type string Example Returns the value of the cookie TEST |
| `getScopedLocalStorage` | `options` | A localStorage wrapper object. Type localStorage Example Creates a local storage object that scopes all the keys using a prefix "Acme" and the application id. It then sets and gets an item called "setting1" . |
| `getScopedSessionStorage` | `options` | A sessionStorage wrapper object. Type sessionStorage Example Creates a session storage object that scopes all the keys using a prefix "Acme" and the application id. It then sets and gets an item called "setting1" . |
| `hasLocalStorageSupport` | None documented | true if the browser supports the local storage API and false otherwise. Type boolean Example Sets the local storage "setting1" to on if local storage is supported by the browser. |
| `hasSessionStorageSupport` | None documented | true if the browser supports the session storage API and false otherwise. Type boolean Example Sets the session storage "setting1" to on if session storage is supported by the browser. |
| `setCookie` | `pName`, `pValue` | Not documented |
| `storageWrapper` | None documented | Not documented |

### getCookie

Signature: `(static) getCookie (pName) &rarr; {string}`

#### Purpose

Returns the value of the specified cookie.

#### Parameters

| Name | Type | Description |
| --- | --- | --- |
| `pName` | string | The name of the cookie. |

#### Returns

The string value of the cookie. Type string Example Returns the value of the cookie TEST

#### Simple Example

```javascript
apex.storage.getCookie(
    "MY_PROCESS"
);
```

### getScopedLocalStorage

Signature: `(static) getScopedLocalStorage (options) &rarr; {localStorage}`

#### Purpose

Returns a thin wrapper around the localStorage object that scopes all keys to a prefix defined by the options parameter. If localStorage is not supported, the returned object can be used but has no effect, so it is not necessary to test for support using apex.storage.hasLocalStorageSupport before calling this function.

#### Parameters

| Name | Type | Description |
| --- | --- | --- |
| `options` | Object | An object used to define the scope of the local storage. This defines the storage key prefix used by the localStorage wrapper object. Properties Name Type Attributes Description |

#### Option/Object Properties

| Name | Type | Description |
| --- | --- | --- |
| `prefix` | string |  A static prefix string to add to all keys. The default is an empty string. |
| `useAppId` | boolean |  Whether the application id will be included in the key. The default is true. |
| `usePageId` | boolean |  Whether the application page id will be included in the key. The default is false. |
| `regionId` | string |  An additional string to identify a region or other part of a page. The default is an empty string. |

#### Returns

A localStorage wrapper object. Type localStorage Example Creates a local storage object that scopes all the keys using a prefix "Acme" and the application id. It then sets and gets an item called "setting1" .

#### Simple Example

```javascript
apex.storage.getScopedLocalStorage(
    {}
);
```

### getScopedSessionStorage

Signature: `(static) getScopedSessionStorage (options) &rarr; {sessionStorage}`

#### Purpose

Returns a thin wrapper around the sessionStorage object that scopes all keys to a prefix defined by the options parameter. If sessionStorage is not supported, the returned object can be used but has no effect, so it is not necessary to test for support using apex.storage.hasSessionStorageSupport before calling this function.

#### Parameters

| Name | Type | Description |
| --- | --- | --- |
| `options` | Object | An object used to define the scope of the session storage. This defines the storage key prefix used by the sessionStorage wrapper object. Properties Name Type Attributes Description |

#### Option/Object Properties

| Name | Type | Description |
| --- | --- | --- |
| `prefix` | string |  A static prefix string to add to all keys. The default is an empty string. |
| `useAppId` | boolean |  Whether the application id will be included in the key. The default is true. |
| `usePageId` | boolean |  Whether the application page id will be included in the key. The default is false. |
| `regionId` | string |  An additional string to identify a region or other part of a page. The default is an empty string. |

#### Returns

A sessionStorage wrapper object. Type sessionStorage Example Creates a session storage object that scopes all the keys using a prefix "Acme" and the application id. It then sets and gets an item called "setting1" .

#### Simple Example

```javascript
apex.storage.getScopedSessionStorage(
    {}
);
```

### hasLocalStorageSupport

Signature: `(static) hasLocalStorageSupport () &rarr; {boolean}`

#### Purpose

Returns true if the browser supports the local storage API and false otherwise. Most modern browsers support this feature but some allow the user to turn it off.

#### Returns

true if the browser supports the local storage API and false otherwise. Type boolean Example Sets the local storage "setting1" to on if local storage is supported by the browser.

#### Simple Example

```javascript
apex.storage.hasLocalStorageSupport();
```

### hasSessionStorageSupport

Signature: `(static) hasSessionStorageSupport () &rarr; {boolean}`

#### Purpose

Returns true if the browser supports the session storage API and false otherwise. Most modern browsers support this feature but some allow the user to turn it off.

#### Returns

true if the browser supports the session storage API and false otherwise. Type boolean Example Sets the session storage "setting1" to on if session storage is supported by the browser.

#### Simple Example

```javascript
apex.storage.hasSessionStorageSupport();
```

### setCookie

Signature: `(static) setCookie (pName, pValue)`

#### Purpose

Sets a cookie to the specified value.

#### Parameters

| Name | Type | Description |
| --- | --- | --- |
| `pName` | string | The name of the cookie. |
| `pValue` | String | The value to set the cookie to. |

#### Simple Example

```javascript
apex.storage.setCookie(
    "MY_PROCESS",
    "Example"
);
```

### storageWrapper

Signature: `storageWrapper`

#### Purpose

A storage wrapper object. This object has the same properties and functions as the native browser Storage interface.

#### Option/Object Properties

| Name | Type | Description |
| --- | --- | --- |
| `prefix` | string | APEX specific property. The prefix for this scoped storage object. |
| `length` | number | The number of items in the scoped storage object. |
| `key` | function | The key( n ) function returns the nth key in the scoped storage object. |
| `getItem` | function | The getItem( key ) function returns the value for the given key. |
| `setItem` | function | The setItem( key, data ) function sets the value of the given key to data. |
| `removeItem` | function | The removeItem( key ) function removes the given key. |
| `clear` | function | The clear function removes all keys from the scoped storage object. |
| `sync` | function | The APEX specific sync function. Use to ensure the length property is correct if keys may have been added or removed by means external to this object. |

#### Simple Example

```javascript
apex.storage.storageWrapper();
```

### Notes

- Run APEX JavaScript APIs from an APEX page where the `apex` namespace is loaded.
- Treat client-side values as untrusted when they reach PL/SQL.
- Prefer documented APIs over direct DOM or internal widget state when interacting with APEX components.
---

## apex.theme

Source: [Oracle APEX 26.1 JavaScript API Reference](https://docs.oracle.com/en/database/oracle/apex/26.1/aexjs/apex.theme.html)

### Purpose

`apex.theme` provides theme-level helpers for opening/closing supported regions, testing media queries, and showing field help. It is most useful with Universal Theme components such as inline dialogs, inline popups, collapsible regions, and responsive behavior.

Use region-specific APIs when available. Use `apex.theme` when the behavior belongs to the theme implementation.

### When To Use

Use `apex.theme` when:

- JavaScript should open or close an inline dialog, inline popup, or collapsible region.
- Code needs to check a CSS media query in a way consistent with browser `matchMedia`.
- Theme or template code needs to show standard item help.

Avoid using theme helpers as a substitute for business logic. Keep region state and data logic in region APIs or server-side code.

### Open And Close Regions

Assuming an inline dialog region with Static ID `quick_edit_dialog`:

```javascript
apex.theme.openRegion( "quick_edit_dialog" );
```

Close it after a successful Ajax operation:

```javascript
apex.server.process( "SAVE_QUICK_EDIT", {
    pageItems: "#P10_ID,#P10_STATUS"
} ).done( function() {
    apex.theme.closeRegion( "quick_edit_dialog" );
    apex.region( "orders" ).refresh();
} );
```

The region must support theme open/close behavior.

### Responsive Branch

```javascript
if ( apex.theme.mq( "(min-width: 640px)" ) ) {
    apex.region( "orders" ).refresh();
} else {
    apex.navigation.redirect( "f?p=" + apex.env.APP_ID + ":20:" + apex.env.APP_SESSION );
}
```

Use `apexwindowresized` when reacting after resizing settles:

```javascript
apex.jQuery( window ).on( "apexwindowresized", function() {
    apex.debug.info( "Wide viewport: %s", apex.theme.mq( "(min-width: 1024px)" ) );
} );
```

### Field Help

Show help for an item:

```javascript
apex.theme.popupFieldHelp( "P10_STATUS", apex.env.APP_SESSION );
```

For custom help text:

```javascript
apex.theme.popupFieldHelp( {
    title: "Status",
    helpText: "Choose the current workflow state for this order."
} );
```

### Notes

- `openRegion` and `closeRegion` return the jQuery object for the region.
- Not every region type supports theme open/close methods.
- Use `apex.region( staticId ).refresh()` for data refresh; use `apex.theme.openRegion` for theme-controlled visibility.
- Prefer declarative Dynamic Actions for simple open/close flows.

### API Surface

| Member | Parameters | Returns |
| --- | --- | --- |
| `closeRegion` | `pRegion` | The jQuery object of the region. Type jQuery Example The following example closes an inline dialog region with HTML DOM id myDialog . |
| `mq` | `pMediaQuery` | true if the media query matches. Type boolean Example After each time the window is resized check and log a message if the viewport is at least 640 pixels wide. |
| `openRegion` | `pRegion` | The jQuery object of the region. Type jQuery Example The following example opens an inline dialog region with HTML DOM id myDialog . |
| `popupFieldHelp` | `pItemId`, `pSessionId`, `pUrl` | Not documented |

### closeRegion

Signature: `(static) closeRegion (pRegion) &rarr; {jQuery}`

#### Purpose

Close a region that supports being opened such as an inline dialog, inline popup, or collapsible region. For a region to support this function, it must be implemented with a jQuery UI widget that supports either open and close methods or expand and collapse methods.

#### Parameters

| Name | Type | Description |
| --- | --- | --- |
| `pRegion` | string | jQuery | The region to close. Either the region HTML DOM id string or a jQuery object. |

#### Returns

The jQuery object of the region. Type jQuery Example The following example closes an inline dialog region with HTML DOM id myDialog .

#### Simple Example

```javascript
apex.theme.closeRegion( "quick_edit_dialog" );
```

### mq

Signature: `(static) mq (pMediaQuery) &rarr; {boolean}`

#### Purpose

Test a media query. Return true if the document matches the given media query string and false otherwise. This is a wrapper around window.matchMedia .

#### Parameters

| Name | Type | Description |
| --- | --- | --- |
| `pMediaQuery` | string | The media query to test. For example: (min-width: 400px) |

#### Returns

true if the media query matches. Type boolean Example After each time the window is resized check and log a message if the viewport is at least 640 pixels wide.

#### Simple Example

```javascript
if ( apex.theme.mq( "(min-width: 640px)" ) ) {
    apex.region( "orders" ).refresh();
}
```

### openRegion

Signature: `(static) openRegion (pRegion) &rarr; {jQuery}`

#### Purpose

Open a region that supports being opened such as an inline dialog, inline popup, or collapsible region. For a region to support this function, it must be implemented with a jQuery UI widget that supports either open and close methods or expand and collapse methods.

#### Parameters

| Name | Type | Description |
| --- | --- | --- |
| `pRegion` | string | jQuery | The region to open. Either the region HTML DOM id string or a jQuery object. |

#### Returns

The jQuery object of the region. Type jQuery Example The following example opens an inline dialog region with HTML DOM id myDialog .

#### Simple Example

```javascript
apex.theme.openRegion( "quick_edit_dialog" );
```

### popupFieldHelp

Signature: `(static) popupFieldHelp (pItemId, pSessionId opt , pUrl opt )`

#### Purpose

Display a standard item help dialog. This function may be useful for theme developers. Theme requirements for the label Help Template:

#### Parameters

| Name | Type | Description |
| --- | --- | --- |
| `pItemId` | string | Object |  item id to display help for or an object with properties helpText , and title . When an object is given the other parameters are ignored. |
| `pSessionId` | string |  Current session id |
| `pUrl` | string |  Override to specify the URL to use to fetch the help content. It should not include the p_output_format param. This is an advanced parameter that is normally not needed. |

#### Simple Example

```javascript
apex.theme.popupFieldHelp(
    "P1_ITEM",
    "P1_ITEM",
    "Example"
);
```

### Notes

- Run APEX JavaScript APIs from an APEX page where the `apex` namespace is loaded.
- Treat client-side values as untrusted when they reach PL/SQL.
- Prefer documented APIs over direct DOM or internal widget state when interacting with APEX components.
---

## apex.util

Source: [Oracle APEX 26.1 JavaScript API Reference](https://docs.oracle.com/en/database/oracle/apex/26.1/aexjs/apex.util.html)

### Purpose

`apex.util` contains general JavaScript helpers for escaping, templates, arrays, timing, spinners, date parsing, nested object creation, and other client-side utilities. It is a toolbox module used by APEX components and application code.

### Common Member Groups

| Need | Members |
| --- | --- |
| Escape user data | `escapeHTML`, `escapeHTMLAttr`, `escapeCSS`, `stripHTML` |
| Template rendering | `applyTemplate`, `applyNamedTemplate`, `defineTemplates`, template directives |
| Arrays and values | `toArray`, `arrayEqual` |
| Timing | `debounce`, `throttle`, `invokeAfterPaint`, `cancelInvokeAfterPaint` |
| UI feedback | `showSpinner` |
| Date/object helpers | `getDateFromISO8601String`, `getNestedObject`, `getScrollbarSize` |
| Builder helpers | `htmlBuilder` |

### Escaping

Escape untrusted text before appending HTML:

```javascript
const name = $v( "P10_NAME" );

apex.jQuery( "#preview" ).html(
    "Hello " + apex.util.escapeHTML( name )
);
```

Escape attributes:

```javascript
const title = apex.util.escapeHTMLAttr( $v( "P10_TITLE" ) );
apex.jQuery( "#preview" ).attr( "title", title );
```

Escape an item ID or DOM ID for a CSS selector:

```javascript
const itemId = "P10.ITEM";
const item$ = apex.jQuery( "#" + apex.util.escapeCSS( itemId ) );
```

### Arrays

Convert multi-value item content into an array:

```javascript
const selected = apex.util.toArray( $v( "P10_SELECTED_IDS" ), ":" );
```

Compare shallow arrays:

```javascript
if ( apex.util.arrayEqual( selected, previousSelected ) ) {
    apex.debug.info( "Selection unchanged." );
}
```

### Debounce And Throttle

Use debounce for typing/search:

```javascript
const search = apex.util.debounce( function() {
    apex.region( "orders" ).refresh();
}, 300 );

apex.jQuery( "#P10_SEARCH" ).on( "input", search );
```

Use throttle for scroll/resize:

```javascript
const updateLayout = apex.util.throttle( function() {
    apex.region( "dashboard" ).refresh();
}, 1000 );

apex.jQuery( window ).on( "resize", updateLayout );
```

### Spinner

```javascript
const spinner$ = apex.util.showSpinner( "#orders" );

apex.server.process( "REFRESH_DATA" )
    .always( function() {
        spinner$.remove();
    } );
```

Prefer `apex.server.process` `loadingIndicator` options when the spinner is tied to an Ajax call.

### Templates

Simple template:

```javascript
const html = apex.util.applyTemplate(
    "<strong>#NAME!HTML.</strong>",
    {
        placeholders: {
            NAME: $v( "P10_NAME" )
        }
    }
);

apex.jQuery( "#preview" ).html( html );
```

Named template pattern:

```javascript
apex.util.defineTemplates( {
    orderBadge: "<span class='order-badge #STATUS!ATTR.'>#LABEL!HTML.</span>"
} );

const badgeHtml = apex.util.applyNamedTemplate( "orderBadge", {
    placeholders: {
        STATUS: "is-open",
        LABEL: "Open"
    }
} );
```

Check the official member page for the full template directive syntax.

### Nested Object

Create a nested option path safely:

```javascript
const options = {};

apex.util.getNestedObject(
    options,
    "views.grid.features"
).cellRangeActions = false;
```

### Safety Guidance

- Escape untrusted values before placing them in HTML or attributes.
- Use `escapeCSS` for dynamic selectors.
- Use debounce for user typing and throttle for high-frequency events.
- Remove spinners after async work finishes, including failure paths.
- Template placeholders should use the proper escaping filters.
- Do not use client-side escaping as a replacement for server-side validation.
---

## apex.util.delayLinger

Source: [Oracle APEX 26.1 JavaScript API Reference](https://docs.oracle.com/en/database/oracle/apex/26.1/aexjs/apex.util.delayLinger.html)

### Purpose

`apex.util.delayLinger` helps show progress indicators for async work without flicker. It delays showing an indicator for quick operations and keeps it visible briefly once shown, so Ajax spinners feel steadier.

Use this namespace for client-side UI around potentially long-running operations such as workflow actions, background-process status polling, AI calls, report refreshes, and custom plug-in Ajax calls.

### When To Use

Use `apex.util.delayLinger` when:

- A spinner should not flash for very fast Ajax calls.
- Multiple overlapping operations share one progress indicator.
- A custom component needs explicit start/finish control instead of relying on `apex.server` loading indicators.

Every `start` call for a scope must be paired with a `finish` call for the same scope.

### Curated Patterns

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

### Safety Guidance

- Always finish the same scope started, including in error paths.
- Keep scope names stable and unique to each visual indicator.
- Do not use delay/linger timing as a business-state signal; it is only UI polish.
- Prefer `apex.server` loading indicators for simple cases; use this API when you need direct control.

### Generated API Surface

| Member | Parameters | Returns |
| --- | --- | --- |
| `finish` | `pScopeName`, `pAction` | Not documented |
| `start` | `pScopeName`, `pAction` | Not documented |

### finish

Signature: `(static) finish (pScopeName, pAction)`

#### Purpose

Call this function when the potentially long-running async process finishes. For each call to start with a given pScopeName , a corresponding call to finish with the same pScopeName must be made. The pAction is called exactly once if and only if the corresponding start pAction was called. If there are multiple calls to finish the pAction from the last one is called.

#### Parameters

| Name | Type | Description |
| --- | --- | --- |
| `pScopeName` | string | A unique name for each unique progress indicator. |
| `pAction` | function | A no argument function to call to hide and/or remove the progress indicator. This function is only called if the action passed to start was called. |

#### Simple Example

```javascript
apex.util.delayLinger.finish(
    "task-list-refresh",
    function() {
        $( "#taskList .u-Processing" ).remove();
    }
);
```

### start

Signature: `(static) start (pScopeName, pAction)`

#### Purpose

Call this function when a potentially long-running async process starts. For each call to start with a given pScopeName , a corresponding call to finish with the same pScopeName must be made. Calls with different pScopeName arguments will not interfere with each other.

#### Parameters

| Name | Type | Description |
| --- | --- | --- |
| `pScopeName` | string | A unique name for each unique progress indicator. |
| `pAction` | function | A no argument function to call to display the progress indicator. This function may or may not be called depending on how quickly finish is called. |

#### Simple Example

```javascript
apex.util.delayLinger.start(
    "task-list-refresh",
    function() {
        apex.util.showSpinner( $( "#taskList" ) );
    }
);
```

### Notes

- Run APEX JavaScript APIs from an APEX page where the `apex` namespace is loaded.
- Treat client-side values as untrusted when they reach PL/SQL.
- Prefer documented APIs over direct DOM or internal widget state when interacting with APEX components.
---

## apex.widget

Source: [Oracle APEX 26.1 JavaScript API Reference](https://docs.oracle.com/en/database/oracle/apex/26.1/aexjs/apex.widget.html)

### Purpose

`apex.widget` contains lower-level widget helpers. In application code, the most common documented use is `waitPopup`, which shows a blocking visual wait overlay and returns an object that can remove it. `initPageItem` is primarily for item plug-in internals.

Prefer higher-level APIs such as `apex.server.process` loading indicators, `apex.util.delayLinger`, Dynamic Actions, and region refresh options when they fit.

### When To Use

Use `apex.widget.waitPopup` when:

- A long-running client operation needs a simple page-level wait overlay.
- Existing code does not have a region-specific loading indicator.
- The operation is user-triggered and you can reliably remove the popup in success and failure paths.

Avoid leaving wait popups without a `finally`/`always` cleanup path.

### Wait Popup Around Ajax

```javascript
const wait = apex.widget.waitPopup();

apex.server.process( "REBUILD_CACHE", {
    pageItems: "#P10_ID"
} ).done( function() {
    apex.message.showPageSuccess( "Cache rebuilt." );
} ).fail( function( jqXHR, textStatus, errorThrown ) {
    apex.debug.error( "Cache rebuild failed", textStatus, errorThrown );
} ).always( function() {
    wait.remove();
} );
```

### Custom Wait Content

```javascript
const wait = apex.widget.waitPopup(
    '<span class="u-Processing" role="status" aria-live="polite">Working</span>'
);

setTimeout( function() {
    wait.remove();
}, 1000 );
```

Use accessible text or ARIA behavior when supplying custom content.

### Plug-In Note

`initPageItem` is for page item initialization patterns, typically in item plug-ins. Normal app code should use `apex.item( "P1_ITEM" )` and the item interface.

### Notes

- The wait popup prevents mouse interaction but does not fully prevent keyboard interaction.
- Always call the returned object's `remove` function.
- For short async operations, prefer `apex.util.delayLinger` to avoid flicker.
- For region refreshes, prefer region or server-process loading indicator options.

### API Surface

| Member | Parameters | Returns |
| --- | --- | --- |
| `initPageItem` | None documented | Not documented |
| `waitPopup` | `pContent` | Object with a no argument function "remove" that closes the popup. Type Object Example The following example shows a wait spinner and disables clicking on the page while some long-running ajax action takes place and then removes the spinner when it is done. Documentation generated by JSDoc 4.0.5 on Fri Apr 17 2026 17:55:51 GMT+0000 (Coordinated Universal Time) Oracle APEX Release 26.1, JavaScript API Reference Copyright &copy; 2003, 2026, Oracle and/or its affiliates. All rights reserved. |

### initPageItem

Signature: `(static) initPageItem ()`

#### Purpose

Use `initPageItem` as documented by the `apex.widget` module.

#### Simple Example

```javascript
apex.widget.initPageItem();
```

### waitPopup

Signature: `(static) waitPopup (pContent opt ) &rarr; {Object}`

#### Purpose

Shows a wait popup. A wait popup consists of an overlay div that keeps the user from clicking on any part of the page along with a visual "spinner" animation of some kind. It does not keep the user from interacting with the page using the keyboard.

#### Parameters

| Name | Type | Description |
| --- | --- | --- |
| `pContent` | String |  HTML code for a wait indicator. If it is not provided, the default CSS animation wait indicator will be displayed. |

#### Returns

Object with a no argument function "remove" that closes the popup. Type Object Example The following example shows a wait spinner and disables clicking on the page while some long-running ajax action takes place and then removes the spinner when it is done. Documentation generated by JSDoc 4.0.5 on Fri Apr 17 2026 17:55:51 GMT+0000 (Coordinated Universal Time) Oracle APEX Release 26.1, JavaScript API Reference Copyright &copy; 2003, 2026, Oracle and/or its affiliates. All rights reserved.

#### Simple Example

```javascript
const wait = apex.widget.waitPopup();

apex.server.process( "REBUILD_CACHE", {
    pageItems: "#P10_ID"
} ).always( function() {
    wait.remove();
} );
```

### Notes

- Run APEX JavaScript APIs from an APEX page where the `apex` namespace is loaded.
- Treat client-side values as untrusted when they reach PL/SQL.
- Prefer documented APIs over direct DOM or internal widget state when interacting with APEX components.
---

## actions

Source: [Oracle APEX 26.1 JavaScript API Reference](https://docs.oracle.com/en/database/oracle/apex/26.1/aexjs/actions.html)

### Purpose

`actions` is the interface that manages a collection of APEX action objects. The global context is `apex.actions`; component-specific contexts are created with `apex.actions.createContext`. Actions centralize command names, labels, icons, enabled/hidden state, shortcuts, and behavior so buttons, menus, keyboard shortcuts, and component code stay in sync.

Use apex.actions for namespace-level context creation and lookup. This page focuses on methods available on an actions context.

### When To Use

Use actions when the same operation can be invoked from more than one UI place, or when a reusable component needs commands with state.

Good fits:

- Toolbar buttons and menu items that invoke the same command.
- Keyboard shortcuts.
- Toggle commands such as "show closed tasks".
- Radio-choice commands such as "card/list/table view".
- Row-level actions in report-like components.
- Custom region or widget command registries.

### API Surface

| Need | Members |
| --- | --- |
| Add/remove actions | `add`, `addFromMarkup`, `remove`, `clear` |
| Invoke or inspect | `invoke`, `lookup`, `list`, `get`, `set`, `toggle` |
| UI state | `enable`, `disable`, `show`, `hide`, `update`, `updateChoices` |
| Shortcuts | `addShortcut`, `removeShortcut`, `listShortcuts`, `shortcutDisplay`, `ariaKeyshortcut`, `enableShortcuts`, `disableShortcuts` |
| Observers | `observe`, `unobserve` |
| Metadata | `context`, `typeName`, `action`, `shortcutName`, `shortcutListItem` |

### Add A Scoped Action Context

Assuming a custom region root element has DOM ID `task_board`:

```javascript
const taskActions = apex.actions.createContext(
    "taskBoard",
    document.getElementById( "task_board" )
);

taskActions.add( {
    name: "refresh",
    label: "Refresh",
    shortcut: "R",
    action: function() {
        apex.region( "task_board" ).refresh();
    }
} );
```

Bind a button to the scoped action:

```html
<button type="button" class="t-Button" data-action="[task_board]refresh">
    <span class="t-Button-label">Refresh</span>
</button>
```

APEX updates bound button label, icon, title, disabled state, and hidden state when you update the action.

### Invoke, Enable, Disable

```javascript
taskActions.invoke( "refresh" );

taskActions.disable( "refresh" );
taskActions.enable( "refresh" );
```

Use `lookup` when you need to change action metadata:

```javascript
const action = taskActions.lookup( "refresh" );

if ( action ) {
    action.label = "Refresh Tasks";
    action.title = "Refresh the task board";
    taskActions.update( "refresh" );
}
```

Call `update` after mutating action properties directly.

### Toggle Action

```javascript
let showClosed = false;

taskActions.add( {
    name: "show-closed",
    label: "Show Closed",
    shortcut: "Shift+C",

    get: function() {
        return showClosed;
    },

    set: function( value ) {
        showClosed = value;
        apex.region( "task_board" ).refresh();
    }
} );

taskActions.toggle( "show-closed" );
```

Bind a checkbox to the toggle:

```html
<div class="js-actionCheckbox" data-action="[task_board]show-closed">
    <input id="show_closed" type="checkbox">
    <label for="show_closed">Show Closed</label>
</div>
```

### Radio Group Action

```javascript
let currentView = "cards";

taskActions.add( {
    name: "change-view",
    label: "View",
    choices: [
        { label: "Cards", value: "cards" },
        { label: "Table", value: "table" },
        { label: "Timeline", value: "timeline" }
    ],

    get: function() {
        return currentView;
    },

    set: function( value ) {
        currentView = value;
        apex.region( "task_board" ).refresh();
    }
} );

taskActions.set( "change-view", "table" );
```

Call `updateChoices("change-view")` if the choices array changes after the action is added.

### Row-Level Actions

Use `idArg` when one action handles many row instances.

```javascript
taskActions.add( {
    name: "complete-task",
    label: "Complete",
    idArg: "taskId",
    instanceSelector: ".task-row",

    action: function( event, focusElement, args ) {
        apex.server.process( "COMPLETE_TASK", {
            x01: args.taskId
        } ).done( function() {
            apex.region( "task_board" ).refresh();
        } );
    }
} );
```

Markup for each row:

```html
<div class="task-row" data-task-id="101">
    <button type="button" data-action="[task_board]complete-task?taskId=101">
        Complete
    </button>
</div>
```

Update one instance:

```javascript
taskActions.disable( "complete-task", { taskId: "101" } );
```

For instance-specific state, only hidden and disabled state can be updated per instance when `idArg` is defined.

### Shortcuts

```javascript
taskActions.addShortcut( "Alt+R", "refresh" );

taskActions.listShortcuts().forEach( function( shortcut ) {
    apex.debug.info(
        shortcut.shortcutDisplay + " -> " + shortcut.actionName
    );
} );
```

Temporarily disable shortcuts around custom popups or keyboard-heavy interactions:

```javascript
taskActions.disableShortcuts();

// Later:
taskActions.enableShortcuts();
```

Calls can be nested. Balance every disable with an enable.

### Observers

Use observers when custom UI needs to react to action changes that APEX does not update automatically.

```javascript
function syncToolbar( action, operation, args ) {
    apex.debug.info( "Action changed: " + action.name + " " + operation );
}

taskActions.observe( syncToolbar );

// Later:
taskActions.unobserve( syncToolbar );
```

### Cleanup

If a component creates a scoped context and later removes its DOM, remove the context too.

```javascript
apex.actions.removeContext(
    "taskBoard",
    document.getElementById( "task_board" )
);
```

### Safety Notes

- Use stable action names such as `complete-task`, not labels.
- Keep destructive actions behind confirmations.
- Use scoped contexts for reusable components so shortcuts and commands do not collide globally.
- Avoid shortcuts that conflict with the browser, operating system, or assistive technology.
- Call `update` after direct action object changes.
- Remove custom contexts when their DOM is destroyed.
- Treat action arguments from markup as client input; validate again on the server.

### Related APIs

- apex.actions for global context and context factory methods.
- region and apex.region for component-scoped region actions.
- interactiveGrid for built-in grid action contexts.
- menu and menuButton for menu UIs bound to actions.
- apex.server for action-driven Ajax work.
---

## cardsRegion

Source: [Oracle APEX 26.1 JavaScript API Reference](https://docs.oracle.com/en/database/oracle/apex/26.1/aexjs/cardsRegion.html)

### Purpose

`cardsRegion` is the region interface returned by `apex.region(staticId)` for APEX Cards regions. Cards are client-rendered regions backed by the APEX client-side `model` data layer and a `tableModelView` view layer. The interface wraps common paging, refresh, focus, selection, current-card, and model operations.

Use this when client code needs to interact with Cards as data-aware items rather than raw DOM cards.

### API Surface

| Need | Members |
| --- | --- |
| Refresh/focus | `refresh`, `refreshView`, `focus` |
| Paging | `firstPage`, `previousPage`, `nextPage`, `lastPage`, `gotoPage`, `loadMore`, `getPageInfo` |
| Selection | `getSelection`, `setSelection`, `getSelectedRecords`, `setSelectedRecords`, `getSelectedValues`, `setSelectedValues`, `selectAll` |
| Current card | `getCurrentItem`, `setCurrentItem`, `getCurrentItemValue`, `setCurrentItemValue` |
| Data/model | `getModel`, `getRecords` |
| Widget/event access | `widget`, `call`, `on`, `off` |

### Refresh Cards

```javascript
apex.region( "orders_cards" ).refresh().then( function() {
    apex.debug.info( "Cards refreshed." );
} );
```

Use `refreshView` when the data has not changed and only the rendered view needs to update.

```javascript
apex.region( "orders_cards" ).refreshView();
```

### Paging

```javascript
const cards = apex.region( "orders_cards" );

cards.nextPage();
cards.previousPage();
cards.firstPage();
```

Page numbers for `gotoPage` are zero-based:

```javascript
apex.region( "orders_cards" ).gotoPage( 2 );
```

Use `loadMore` only when the Cards region uses a load-more/scroll paging configuration.

### Selection

Assuming the Cards region Static ID is `orders_cards` and selection is enabled:

```javascript
const cards = apex.region( "orders_cards" );
const selectedIds = cards.getSelectedValues() || [];

if ( selectedIds.length === 0 ) {
    apex.message.alert( "Select at least one order." );
}
```

Select cards by record ID:

```javascript
apex.region( "orders_cards" ).setSelectedValues(
    [ "1001", "1002" ],
    true
);
```

For virtual scrolling with persisted selection, prefer `getSelectedRecords` or `getSelectedValues` over `getSelection`, because `getSelection` only returns card elements currently in the DOM.

### Current Card

```javascript
const cards = apex.region( "orders_cards" );
const currentId = cards.getCurrentItemValue();

if ( currentId ) {
    apex.item( "P10_ORDER_ID" ).setValue( currentId );
}
```

Move focus/current item to a known card value:

```javascript
apex.region( "orders_cards" ).setCurrentItemValue( "1001", true );
```

Current-item APIs depend on the Cards region navigation mode supporting focus or selection.

### Work With The Model

```javascript
const cards = apex.region( "orders_cards" );
const model = cards.getModel();
const records = cards.getSelectedRecords() || [];

records.forEach( function( record ) {
    apex.debug.info(
        "Selected order: " + model.getValue( record, "ORDER_ID" )
    );
} );
```

The model returned by `getModel` can change over time. Do not keep it indefinitely; reacquire it when needed.

### Selection Change Handler

```javascript
apex.jQuery( "#orders_cards" ).on( "apexselectionchange", function() {
    const selected = apex.region( "orders_cards" ).getSelectedValues() || [];

    apex.item( "P10_SELECTED_COUNT" ).setValue( String( selected.length ), null, true );
} );
```

### Safety Notes

- Give the Cards region a stable Static ID.
- Selection and current-card methods return `null` or `-1` when the feature is not enabled or the region is not initialized.
- `getSelection` only sees DOM elements currently rendered.
- Treat record IDs sent back to PL/SQL as untrusted; re-authorize on the server.
- Use the Cards interface before reaching into `tableModelView` internals.

### Related APIs

- region and apex.region for generic region APIs.
- apex.model and model for model record access.
- tableModelView for lower-level view behavior.
- facetsRegion for filtering Cards regions.
---

## facetsRegion

Source: [Oracle APEX 26.1 JavaScript API Reference](https://docs.oracle.com/en/database/oracle/apex/26.1/aexjs/facetsRegion.html)

### Purpose

`facetsRegion` is the region interface for Faceted Search and Smart Filters. It manages facet controls, current filters, counts, charts, batch/apply behavior, locking during refresh, and coordination with the filtered report region.

Use this page when code needs to clear filters, apply batched changes, read counts, show/hide facets, or coordinate custom report refresh behavior with a Faceted Search or Smart Filters region.

### API Surface

| Need | Members |
| --- | --- |
| Apply/reset | `apply`, `clear`, `clearFacets`, `reset`, `change` |
| Counts | `fetchCounts`, `getFacetCount`, `getFacetValueCounts`, `getTotalResourceCount` |
| Facet visibility | `hideFacet`, `showFacet` |
| Charts | `addChart`, `removeChart`, `beforeAddChart`, `afterRemoveChart` |
| Refresh/lock | `refresh`, `refreshView`, `lock`, `unlock` |
| Region events | `on`, `off`, `focus` |
| Configuration | `controls`, `batch`, `uiMode`, `searchField`, `currentFacets`, `feedback`, control type definitions |

### Clear Or Reset Filters

Clear current facet values while keeping persistent configuration:

```javascript
apex.region( "order_facets" ).clear();
```

Reset filters and persistent UI settings to their configured defaults:

```javascript
apex.region( "order_facets" ).reset();
```

Use `reset` for a full "Start over" command.

### Batch Apply

When the facets region is configured for batched changes:

```javascript
const facets = apex.region( "order_facets" );

facets.clearFacets();
facets.apply();
```

If the UI uses an external Apply button:

```javascript
apex.jQuery( "#apply_filters" ).on( "click", function() {
    apex.region( "order_facets" ).apply();
} );
```

### Read Counts

```javascript
const facets = apex.region( "order_facets" );
const total = facets.getTotalResourceCount();

apex.item( "P10_RESULT_COUNT" ).setValue( String( total ), null, true );
```

Read per-facet value counts:

```javascript
const counts = apex.region( "order_facets" ).getFacetValueCounts();

if ( counts.STATUS ) {
    apex.debug.info( "Open count: " + counts.STATUS.OPEN );
}
```

Counts depend on region configuration and whether feedback/counts are enabled.

### Show Or Hide Facets

Facet names are the facet item/session-state names.

```javascript
const facets = apex.region( "order_facets" );

facets.hideFacet( "P10_ARCHIVED_YN" );
facets.showFacet( "P10_STATUS" );
```

If the facet has a value, understand the `clearOnHide` setting before hiding it.

### Lock During Custom Work

```javascript
const facets = apex.region( "order_facets" );

facets.lock();

apex.server.process( "REFRESH_EXTERNAL_FILTERS" )
    .always( function() {
        facets.unlock();
    } );
```

Balance every `lock` with an `unlock`.

### Coordinated Report Refresh

Most native Cards, Report, and Map regions are configured declaratively to refresh when the facets change. For custom code, listen for changes and refresh the target region:

```javascript
apex.jQuery( "#order_facets" ).on( "change", function() {
    apex.region( "orders_cards" ).refresh();
} );
```

Prefer declarative region binding when available.

### Safety Notes

- Facet values are user input. Validate and authorize again in server-side processes.
- Avoid doing expensive `fetchCounts` calls on every keystroke unless the UX requires live feedback.
- Use batch/apply mode for expensive filtered reports.
- Be cautious hiding facets with values; hidden filters can confuse users.
- For custom filtered regions, return promises from refresh logic so APEX can lock/unlock the facets region properly.

### Related APIs

- cardsRegion, templateReportRegion, and mapRegion for common filtered target regions.
- apex.region and region for generic refresh behavior.
- apex.server for custom Ajax work.
---

## htmlBuilder

Source: [Oracle APEX 26.1 JavaScript API Reference](https://docs.oracle.com/en/database/oracle/apex/26.1/aexjs/htmlBuilder.html)

### Purpose

`htmlBuilder` is the chainable interface returned by `apex.util.htmlBuilder()`. It helps build well-formed HTML while escaping attribute values and text content. It is safer than string concatenation for small templates and plug-in/component markup.

Use apex.util for the namespace function that creates a builder.

### When To Use

Use `htmlBuilder` when JavaScript needs to produce small HTML fragments with mixed trusted markup and untrusted values.

Good fits:

- Button, badge, list-item, or toolbar fragments.
- Client-side templates inside custom regions or item plug-ins.
- Markup that should avoid inline style attributes for CSP compatibility.

For larger templates, prefer `apex.util.applyTemplate` or server-rendered templates.

### API Surface

| Need | Member |
| --- | --- |
| Add trusted markup | `markup` |
| Add escaped text content | `content` |
| Add escaped attributes | `attr`, `optionalAttr`, `optionalBoolAttr` |
| Add CSP-friendly CSS data attributes | `css` |
| Combine builders | `append` |
| Reset builder | `clear` |
| Output | `toString`, `toJquery` |

### Build Safe Markup

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

### Optional Attributes

```javascript
const out = apex.util.htmlBuilder();

out.markup( "<input type='search'" )
    .attr( "id", "P10_SEARCH" )
    .optionalAttr( "placeholder", $v( "P10_PLACEHOLDER" ) )
    .optionalBoolAttr( "required", $v( "P10_REQUIRED" ) === "Y" )
    .markup( ">" );
```

`optionalAttr` skips empty values. `optionalBoolAttr` adds the attribute only when the value is true.

### Use `css` With `toJquery`

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

### Append Builders

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

### Reuse A Builder

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

### Safety Notes

- `content` escapes text. Use it for labels, values, and user-controlled strings.
- `attr` escapes attribute values. Do not concatenate attribute values manually.
- `markup` does no escaping. Use it only for trusted literal tags and separators.
- Avoid inline `<script>`, `<style>`, inline event handlers, and inline style attributes.
- Use `toJquery` when `css` was used; otherwise `toString` is more efficient.
- For large repeated templates, use `apex.util.applyTemplate` or a declarative APEX template.

### Related APIs

- apex.util for `htmlBuilder`, `applyTemplate`, and escape helpers.
- apex.item and item for item state used in generated markup.
- apex.region and region for custom region rendering and refresh behavior.
- APEX_ESCAPE for server-side escaping.
---

## interactiveGridView

Source: [Oracle APEX 26.1 JavaScript API Reference](https://docs.oracle.com/en/database/oracle/apex/26.1/aexjs/interactiveGridView.html)

### Purpose

`interactiveGridView` is the view interface returned by `interactiveGrid` methods such as `getCurrentView` and `getViews`. It exposes the view model, view DOM, selected records, context-record lookup, and view metadata.

Use this page when code already has an Interactive Grid region and needs to work with a specific rendered view, most often the `grid` view.

### When To Use

Use `interactiveGridView` when:

- Client code needs the current IG model.
- You need selected records from a specific view.
- A click target inside the view must be mapped back to its model record.
- Code needs to work differently for grid, icon, detail, chart, or single-row views.

For region-wide actions such as save, refresh, or toolbar changes, start with `interactiveGrid`.

### Access Pattern

Assuming an Interactive Grid region with Static ID `orders_ig`:

```javascript
const ig$ = apex.region( "orders_ig" ).widget();
const view = ig$.interactiveGrid( "getViews", "grid" );
const model = view.model;
```

Use `getCurrentView` when the code should follow the user's active view:

```javascript
const currentView = apex.region( "orders_ig" )
    .widget()
    .interactiveGrid( "getCurrentView" );
```

### Selected Records In A View

```javascript
const view = apex.region( "orders_ig" )
    .widget()
    .interactiveGrid( "getViews", "grid" );

const records = view.getSelectedRecords();

records.forEach( function( record ) {
    apex.debug.info(
        "Selected order: %s",
        view.model.getValue( record, "ORDER_ID" )
    );
} );
```

Selection must be enabled for the view. Check for an empty array before assuming the user selected rows.

### Context Record From A Click Target

Assuming a custom button with class `js-order-row-action` is rendered inside each grid row:

```javascript
apex.jQuery( "#orders_ig" ).on( "click", ".js-order-row-action", function() {
    const view = apex.region( "orders_ig" )
        .widget()
        .interactiveGrid( "getViews", "grid" );

    const records = view.getContextRecord( this );

    if ( records.length ) {
        apex.item( "P20_ORDER_ID" ).setValue(
            view.model.getValue( records[0], "ORDER_ID" )
        );
    }
} );
```

`getContextRecord` returns an array with at most one record for the supplied context element.

### Related APIs

- `interactiveGrid` to retrieve views and invoke region actions.
- `apex.model` for record value access and model subscriptions.
- `grid` for lower-level grid widget behavior used by IG grid view.

### API Surface

| Member | Parameters | Returns |
| --- | --- | --- |
| `cssClass` | None documented | Not documented |
| `icon` | None documented | Not documented |
| `internalIdentifier` | None documented | Not documented |
| `model` | None documented | Not documented |
| `modelName` | None documented | Not documented |
| `singleRowMode` | None documented | Not documented |
| `singleRowView$` | None documented | Not documented |
| `title` | None documented | Not documented |
| `view$` | None documented | Not documented |
| `getContextRecord` | `pContext` | Array of model records for the given context element. The array contains at most one item. If array is empty if the given context element does not correspond with a record or the view does not support this method. Type Array |
| `getSelectedRecords` | None documented | Array of model records selected. Type Array |
| `setSelectedRecords` | `pRecords`, `pFocus`, `pNoNotify` | Not documented |

### cssClass

Signature: `cssClass :string`

#### Purpose

Use `cssClass` as documented by the `interactiveGridView` module.

#### Simple Example

```javascript
interactiveGridView.cssClass;
```

### icon

Signature: `icon :string`

#### Purpose

Use `icon` as documented by the `interactiveGridView` module.

#### Simple Example

```javascript
interactiveGridView.icon;
```

### internalIdentifier

Signature: `internalIdentifier :string`

#### Purpose

Use `internalIdentifier` as documented by the `interactiveGridView` module.

#### Simple Example

```javascript
interactiveGridView.internalIdentifier;
```

### model

Signature: `model : model`

#### Purpose

The model used by this view.

#### Simple Example

```javascript
interactiveGridView.model;
```

### modelName

Signature: `modelName : model.ModelId`

#### Purpose

The id of the model used by this view.

#### Simple Example

```javascript
interactiveGridView.modelName;
```

### singleRowMode

Signature: `singleRowMode :boolean`

#### Purpose

True if the view is currently showing Single Row View and false otherwise. This only applies if the view supports Single Row View (it is undefined otherwise).

#### Simple Example

```javascript
interactiveGridView.singleRowMode;
```

### singleRowView$

Signature: `singleRowView$ :jQuery`

#### Purpose

The jQuery object for the alternate recordView widget that implements Single Row View. This only applies if the view supports single row view and the feature is configured.

#### Simple Example

```javascript
interactiveGridView.singleRowView$;
```

### title

Signature: `title :string`

#### Purpose

Use `title` as documented by the `interactiveGridView` module.

#### Simple Example

```javascript
interactiveGridView.title;
```

### view$

Signature: `view$ :jQuery`

#### Purpose

The jQuery object for the view.

#### Simple Example

```javascript
interactiveGridView.view$;
```

### getContextRecord

Signature: `getContextRecord (pContext) &rarr; {Array}`

#### Purpose

Use `getContextRecord` as documented by the `interactiveGridView` module.

#### Parameters

| Name | Type | Description |
| --- | --- | --- |
| `pContext` | Element | An element within visual DOM representation of a record. |

#### Returns

Array of model records for the given context element. The array contains at most one item. If array is empty if the given context element does not correspond with a record or the view does not support this method. Type Array

#### Simple Example

```javascript
interactiveGridView.getContextRecord(
    "Example"
);
```

### getSelectedRecords

Signature: `getSelectedRecords () &rarr; {Array}`

#### Purpose

Returns the currently selected model records in the view. If there is no selection or the view does not support selection then an empty array is returned.

#### Returns

Array of model records selected. Type Array

#### Simple Example

```javascript
interactiveGridView.getSelectedRecords();
```

### setSelectedRecords

Signature: `setSelectedRecords (pRecords, pFocus opt , pNoNotify opt )`

#### Purpose

Sets the current selection in the view from the given array of model records. Only applies if the view supports selection.

#### Parameters

| Name | Type | Description |
| --- | --- | --- |
| `pRecords` | Array |  an array of model records or an array of model record ids as returned by model getRecordId. If this is an empty array then the selection is cleared. |
| `pFocus` | boolean |  if true the first cell/field/item of the selection is given focus. |
| `pNoNotify` | boolean |  if true the selection change event will be suppressed |

#### Simple Example

```javascript
const view = apex.region( "orders_ig" )
    .widget()
    .interactiveGrid( "getViews", "grid" );
const model = view.model;
const record = model.getRecord( "1001" );

view.setSelectedRecords( [ record ], true, false );
```

### Notes

- Run APEX JavaScript APIs from an APEX page where the `apex` namespace is loaded.
- Treat client-side values as untrusted when they reach PL/SQL.
- Prefer documented APIs over direct DOM or internal widget state when interacting with APEX components.
---

## interactiveReportRegion

Source: [Oracle APEX 26.1 JavaScript API Reference](https://docs.oracle.com/en/database/oracle/apex/26.1/aexjs/interactiveReportRegion.html)

### Purpose

`interactiveReportRegion` is the client-side region interface returned by `apex.region( staticId )` for Interactive Report regions. It exposes focus, refresh, current row, selected rows, selected row values, and current view name.

Use `APEX_IR` PL/SQL for server-side saved report state. Use this JavaScript interface for browser runtime behavior such as selection, current row handling, and refresh.

### When To Use

Use `interactiveReportRegion` when:

- JavaScript needs selected Interactive Report row values.
- A button should act on the current row.
- A Dynamic Action should refresh the report and optionally preserve pagination.
- Client code needs to know the current report view mode.
- Generic code needs to focus the report after a UI change.

Selection-related methods return `null` when the report does not support selection.

### Access Pattern

Assuming an Interactive Report region with Static ID `orders_ir`:

```javascript
const ir = apex.region( "orders_ir" );

ir.refresh( true );
ir.focus();
```

`refresh( true )` keeps pagination where supported.

### Selected Row Values

Assuming the Interactive Report is configured so row values are represented by the row `data-id` value:

```javascript
const ir = apex.region( "orders_ir" );
const selectedValues = ir.getSelectedValues() || [];

if ( selectedValues.length === 0 ) {
    apex.message.showErrors( [ {
        type: "error",
        location: "page",
        message: "Select at least one order.",
        unsafe: false
    } ] );
} else {
    apex.server.process( "PROCESS_SELECTED_ORDERS", {
        f01: selectedValues
    } ).done( function() {
        ir.refresh( true );
    } );
}
```

For DOM row elements instead of row values, use `getSelection`.

### Current Row

```javascript
const ir = apex.region( "orders_ir" );
const currentOrderId = ir.getCurrentRowValue();

if ( currentOrderId ) {
    apex.item( "P20_ORDER_ID" ).setValue( currentOrderId );
}
```

`getCurrentRowValue` returns the primary-key-like row value or `null` if there is no current row or the report does not support it.

### View Name And Refresh

```javascript
const ir = apex.region( "orders_ir" );

apex.debug.info( "Current IR view: %s", ir.getViewName() );
ir.refresh( true );
```

### Related APIs

- `APEX_IR` for server-side filters, reset, clear, saved reports, and subscriptions.
- `APEX_REGION` for PL/SQL query/export of a report region.
- `apex.region` for generic region refresh/focus/discovery.

### API Surface

| Member | Parameters | Returns |
| --- | --- | --- |
| `element` | None documented | Not documented |
| `type` | None documented | Not documented |
| `focus` | None documented | Not documented |
| `getCurrentRow` | None documented | The current row or null if not supported. Type jQuery Example This example gets the current row in the report. |
| `getCurrentRowValue` | None documented | The current row value or null if not supported. Type string |
| `getSelectedValues` | None documented | Array of selected record values. Returns null if selection is not supported. Type Array. |
| `getSelection` | None documented | The selected row elements as a jQuery collection. Returns null if selection isn't supported. Type jQuery Example This example get the current selection. |
| `getViewName` | None documented | The current view mode. Type string Example The following example gets the current view name. |
| `refresh` | `pKeepPagination` | Not documented |
| `selectAll` | `pFocus`, `nullable`, `pNoNotify` | Not documented |
| `setCurrentRow` | `pRow$`, `pFocus` | Not documented |
| `setCurrentRowValue` | `pRowValue`, `pFocus` | Not documented |
| `setSelectedValues` | `pValues`, `pFocus`, `pNoNotify` | Count of the rows actually selected or -1 if selection is not supported. Type number |
| `setSelection` | `pElements$`, `pFocus`, `pNoNotify` | Not documented |

### element

Signature: `element :jQuery`

#### Purpose

The jQuery object for the region element.

#### Simple Example

```javascript
interactiveReportRegion.element;
```

### type

Signature: `type :string`

#### Purpose

The Interactive Report region type is "InteractiveReport".

#### Simple Example

```javascript
interactiveReportRegion.type;
```

### focus

Signature: `focus ()`

#### Purpose

Set focus to the Interactive Report if possible. If the report supports selection then the last focused (current) row will be focused. Otherwise, the first focusable element within the region, if any, will be focused.

#### Simple Example

```javascript
interactiveReportRegion.focus();
```

### getCurrentRow

Signature: `getCurrentRow () &rarr; {jQuery}`

#### Purpose

Returns the current row as a jQuery object. The current row is the row that has or last had focus.

#### Returns

The current row or null if not supported. Type jQuery Example This example gets the current row in the report.

#### Simple Example

```javascript
const ir = apex.region( "orders_ir" );
const currentRow$ = ir.getCurrentRow();

if ( currentRow$ ) {
    currentRow$.addClass( "is-current-order" );
}
```

### getCurrentRowValue

Signature: `getCurrentRowValue () &rarr; {string}`

#### Purpose

Returns the value of the current row. The current row is the row that has or last had focus. The value of a row is its primary key in the data-id attribute.

#### Returns

The current row value or null if not supported. Type string

#### Simple Example

```javascript
const ir = apex.region( "orders_ir" );
const orderId = ir.getCurrentRowValue();

if ( orderId ) {
    apex.item( "P20_ORDER_ID" ).setValue( orderId );
}
```

### getSelectedValues

Signature: `getSelectedValues () &rarr; (nullable) {Array. }`

#### Purpose

Returns the value for each selected row. The value of a row is its primary key in the data-id attribute

#### Returns

Array of selected record values. Returns null if selection is not supported. Type Array.

#### Simple Example

```javascript
const ir = apex.region( "orders_ir" );
const orderIds = ir.getSelectedValues() || [];

apex.item( "P20_SELECTED_ORDERS" ).setValue( orderIds.join( ":" ) );
```

### getSelection

Signature: `getSelection () &rarr; (nullable) {jQuery}`

#### Purpose

Return the currently selected rows as a jQuery collection.

#### Returns

The selected row elements as a jQuery collection. Returns null if selection isn't supported. Type jQuery Example This example get the current selection.

#### Simple Example

```javascript
const ir = apex.region( "orders_ir" );
const selectedRows$ = ir.getSelection();

if ( selectedRows$ ) {
    selectedRows$.addClass( "is-selected-order" );
}
```

### getViewName

Signature: `getViewName () &rarr; {string}`

#### Purpose

Get the name of the current view. Interactive Report supports multiple views, such as:

#### Returns

The current view mode. Type string Example The following example gets the current view name.

#### Simple Example

```javascript
const ir = apex.region( "orders_ir" );

apex.debug.info( "Current Interactive Report view: %s", ir.getViewName() );
```

### refresh

Signature: `refresh (pKeepPagination opt )`

#### Purpose

Refreshes the report with new data from the server.

#### Parameters

| Name | Type | Description |
| --- | --- | --- |
| `pKeepPagination` | boolean |  Controls the pagination and scroll behavior after refresh. |

#### Simple Example

```javascript
const ir = apex.region( "orders_ir" );

ir.refresh( true );
```

### selectAll

Signature: `selectAll (pFocus opt, nullable , pNoNotify opt )`

#### Purpose

Select all the rows in the report that can be selected. Typically this applies to all currently visible rows. Triggers the apex.event:apexselectionchange event if the selection changes unless pNoNotify is true.

#### Parameters

| Name | Type | Description |
| --- | --- | --- |
| `pFocus` | boolean |  If true the first selected row is given focus. If false the first selected row is made focusable. If null or not given the current item and focus is not changed. |
| `pNoNotify` | boolean |  If true the selection change notification will be suppressed. |

#### Simple Example

```javascript
const ir = apex.region( "orders_ir" );

ir.selectAll(
    true,
    false
);
```

### setCurrentRow

Signature: `setCurrentRow (pRow$, pFocus opt )`

#### Purpose

Sets the last focused row to the given pRow$. If pRow$ is not a row or not in the report container the current row is not changed.

#### Parameters

| Name | Type | Description |
| --- | --- | --- |
| `pRow$` | jQuery |  The row to make current. |
| `pFocus` | boolean |  If true also focus the row. |

#### Simple Example

```javascript
const ir = apex.region( "orders_ir" );
const row$ = ir.element.find( "tr[data-id='1001']" );

ir.setCurrentRow(
    row$,
    true
);
```

### setCurrentRowValue

Signature: `setCurrentRowValue (pRowValue, pFocus opt )`

#### Purpose

Sets the last focused row to the one with the given pRowValue. If no row has the given value the current row is not changed. The row must be rendered in order to be made the current row. The value of a row is its primary key in the data-id attribute.

#### Parameters

| Name | Type | Description |
| --- | --- | --- |
| `pRowValue` | string |  The value of a row. |
| `pFocus` | boolean |  If true also focus the row. |

#### Simple Example

```javascript
const ir = apex.region( "orders_ir" );

ir.setCurrentRowValue(
    "1001",
    true
);
```

### setSelectedValues

Signature: `setSelectedValues (pValues, pFocus opt , pNoNotify opt ) &rarr; {number}`

#### Purpose

Selects the report rows that correspond to the given values. The value of a row is the primary key in the data-id attribute. The row must be rendered in order to be made a selectable row. Triggers the apex.event:apexselectionchange event if the selection changes unless pNoNotify is true.

#### Parameters

| Name | Type | Description |
| --- | --- | --- |
| `pValues` | Array. |  Array of row values to select. |
| `pFocus` | boolean |  If true the first row of the selection is given focus. |
| `pNoNotify` | boolean |  If true the selection change event will be suppressed. |

#### Returns

Count of the rows actually selected or -1 if selection is not supported. Type number

#### Simple Example

```javascript
const ir = apex.region( "orders_ir" );
const selectedCount = ir.setSelectedValues(
    [ "1001", "1002" ],
    true,
    false
);

apex.debug.info( "Selected %s rendered order rows.", selectedCount );
```

### setSelection

Signature: `setSelection (pElements$, pFocus opt , pNoNotify opt )`

#### Purpose

Set the selected rows. Triggers the apex.event:apexselectionchange event if the selection changes unless pNoNotify is true.

#### Parameters

| Name | Type | Description |
| --- | --- | --- |
| `pElements$` | jQuery |  A jQuery object with row elements such as the return value of getSelection. |
| `pFocus` | boolean |  If true the first row element of the selection is given focus. |
| `pNoNotify` | boolean |  If true the selection change event will be suppressed. |

#### Simple Example

```javascript
const ir = apex.region( "orders_ir" );
const rows$ = ir.element.find( "tr[data-id='1001'], tr[data-id='1002']" );

ir.setSelection(
    rows$,
    true,
    false
);
```

### Notes

- Run APEX JavaScript APIs from an APEX page where the `apex` namespace is loaded.
- Treat client-side values as untrusted when they reach PL/SQL.
- Prefer documented APIs over direct DOM or internal widget state when interacting with APEX components.
---

## item

Source: [Oracle APEX 26.1 JavaScript API Reference](https://docs.oracle.com/en/database/oracle/apex/26.1/aexjs/item.html)

### Purpose

`item` is the client-side interface returned by `apex.item("P1_ITEM")`. It gives APEX-aware access to page item and column item values, display values, focus behavior, disabled state, validation state, change tracking, refresh behavior, and delayed initialization.

This page documents the item interface itself. Use apex.item for the namespace functions, especially `apex.item.create` for custom item plug-ins.

### When To Use

Use the item interface when code needs to work with item state in a way that APEX understands.

Common tasks:

- Get or set a page item value.
- Suppress or intentionally fire the item change event.
- Work with multi-value items such as Shuttle or multi-select lists.
- Focus, show, hide, enable, or disable an item.
- Check browser/APEX validity state.
- Implement a custom item plug-in interface with `apex.item.create`.

### API Surface

| Need | Members |
| --- | --- |
| Identity and DOM | `id`, `node`, `element`, `item_type` |
| Values | `value`, `getValue`, `setValue`, `displayValueFor`, `addValue`, `removeValue`, `getSeparator`, `getMultiValueStorage` |
| State | `isChanged`, `isEmpty`, `isDisabled`, `getValidity`, `getValidationMessage`, `isReady`, `whenReady`, `hasDisplayValue` |
| UI behavior | `setFocus`, `setStyle`, `refresh`, `show`, `hide`, `enable`, `disable` |

### Read And Set Values

```javascript
const statusItem = apex.item( "P10_STATUS" );

if ( !statusItem.isDisabled() ) {
    const currentStatus = statusItem.getValue();

    if ( currentStatus === "NEW" ) {
        statusItem.setValue( "IN_PROGRESS" );
    }
}
```

The `value` property is shorthand for `getValue` and `setValue`:

```javascript
apex.item( "P10_STATUS" ).value = "APPROVED";
const status = apex.item( "P10_STATUS" ).value;
```

Use the methods when you need the optional `displayValue` or `suppressChangeEvent` arguments.

### Suppress Change Events

Use the third `setValue` argument when a programmatic update should not fire Dynamic Actions bound to change.

```javascript
apex.item( "P10_STATUS" ).setValue( "DRAFT", null, true );
```

For values that should trigger Dynamic Actions, omit the third argument or pass `false`.

### Multi-Value Items

`getValue` can return either a string or an array depending on item type and configuration.

```javascript
const tagsItem = apex.item( "P10_TAGS" );
const tags = tagsItem.getValue();

const selectedTags = Array.isArray( tags )
    ? tags
    : apex.util.toArray( tags, tagsItem.getSeparator() || ":" );
```

Use `addValue` and `removeValue` only for item types that support those methods.

```javascript
const reviewers = apex.item( "P10_REVIEWERS" );

if ( reviewers.addValue ) {
    reviewers.addValue( "JSMITH", "John Smith" );
}
```

### Display Values

Use `displayValueFor` when an item has separate return and display values, such as select lists or Popup LOVs.

```javascript
const label = apex.item( "P10_OWNER" ).displayValueFor( "JSMITH" );

apex.jQuery( "#owner_label" ).text( label );
```

For multi-value items, pass an array if the item supports multiple values.

### Validation State

```javascript
const item = apex.item( "P10_EMAIL" );
const validity = item.getValidity();

if ( !validity.valid ) {
    apex.message.showErrors( [ {
        type: "error",
        location: "inline",
        pageItem: "P10_EMAIL",
        message: item.getValidationMessage( "Email" ),
        unsafe: false
    } ] );
}
```

The returned object follows the HTML5 `ValidityState` pattern where possible. A custom plug-in item should at least provide a `valid` property when it implements custom validation.

### Delayed Items

Some items initialize asynchronously. Check readiness near page load, or use `whenReady` if the item provides it.

```javascript
const chartItem = apex.item( "P10_COMPLEX_ITEM" );

if ( chartItem.whenReady ) {
    chartItem.whenReady().then( function() {
        chartItem.setValue( "READY" );
    } );
} else if ( chartItem.isReady() ) {
    chartItem.setValue( "READY" );
}
```

Dynamic Actions that run on page load wait for item loading, so this is mostly useful for custom initialization code.

### Custom Item Plug-In Interface

Assuming a plug-in render callback outputs a root element with ID `P10_RATING` and clickable elements with `data-rating` attributes:

```javascript
apex.item.create( "P10_RATING", function( baseItem ) {
    const item$ = apex.jQuery( "#P10_RATING" );

    baseItem.item_type = "RATING";

    baseItem.getValue = function() {
        return item$.attr( "data-value" ) || "";
    };

    baseItem.setValue = function( value, displayValue, suppressChangeEvent ) {
        item$.attr( "data-value", value || "" );

        item$.find( "[data-rating]" ).toggleClass( "is-active", function() {
            return Number( apex.jQuery( this ).attr( "data-rating" ) ) <= Number( value || 0 );
        } );

        if ( !suppressChangeEvent ) {
            item$.trigger( "change" );
        }
    };

    baseItem.isEmpty = function() {
        return baseItem.getValue() === "";
    };

    baseItem.setFocus = function() {
        item$.find( "[data-rating]" ).first().trigger( "focus" );
    };

    baseItem.disable = function() {
        item$.attr( "aria-disabled", "true" ).addClass( "is-disabled" );
    };

    baseItem.enable = function() {
        item$.removeAttr( "aria-disabled" ).removeClass( "is-disabled" );
    };
} );
```

Plug-ins that wrap non-native controls should implement enough of the item interface for Dynamic Actions, validation, focus handling, and change tracking to work predictably.

### Safety Notes

- Use `setValue` rather than direct DOM changes when APEX state, Dynamic Actions, or validations must notice the change.
- Treat client values as untrusted on the server.
- Suppress change events only when the update is internal and should not trigger business logic.
- Check for method existence before using optional item-type methods such as `addValue`, `removeValue`, or `whenReady`.
- For custom plug-ins, trigger `change` when a user action changes the value.
- Do not use deprecated `show(true)` or `hide(true)` table-row behavior for modern grid-layout pages.

### Related APIs

- apex.item for namespace functions and `apex.item.create`.
- APEX_PLUGIN for server-side item plug-in callback types.
- APEX_PLUGIN_UTIL for server-side item rendering helpers.
- apex.message for validation and message display.
- apex.server for saving item values through Ajax.
---

## mapRegion

Source: [Oracle APEX 26.1 JavaScript API Reference](https://docs.oracle.com/en/database/oracle/apex/26.1/aexjs/mapRegion.html)

### Purpose

`mapRegion` is the client-side interface returned by `apex.region(staticId)` for APEX Map regions. It controls map position, zoom, pitch/bearing, layers, features, popups/tooltips, circle drawing, refresh, and access to the underlying MapLibre map object.

Use it when code needs to move the map, read the visible map extent, show/hide layers, update feature data, or react to map events.

### API Surface

| Need | Members |
| --- | --- |
| Position/status | `getMapStatus`, `getMapCenterAndZoomLevel`, `getMapBboxAndZoomLevel`, `getMapPitchAndBearing`, `setCenter`, `setZoomLevel`, `reset` |
| Layers | `getLayers`, `getLayerIdByName`, `showLayer`, `hideLayer`, `moveLayer` |
| Features | `getFeature`, `addFeature`, `updateFeature`, `removeFeature` |
| Popups/tooltips | `displayPopup`, `closeInfoWindow`, `closeAllInfoWindows`, `closeTooltip` |
| Drawing/status | `getCircle`, `clearCircle`, `getMapObject` |
| Refresh/events | `refresh`, `focus`, `on`, `off` |

### Move And Zoom

```javascript
const map = apex.region( "stores_map" );

map.setCenter( [ -122.4194, 37.7749 ] );
map.setZoomLevel( 12 );
```

Coordinates are longitude, latitude.

Read current status:

```javascript
const status = apex.region( "stores_map" ).getMapStatus();

apex.debug.info(
    "Zoom " + status.zoom + " bbox " + JSON.stringify( status.bbox )
);
```

### Show Or Hide Layers

```javascript
const map = apex.region( "stores_map" );

map.hideLayer( "Closed Stores" );
map.showLayer( "Open Stores" );
```

You can use a layer name or ID. To find IDs:

```javascript
const layerId = apex.region( "stores_map" ).getLayerIdByName( "Open Stores" );
```

### Feature Lookup And Popup

Assuming layer ID `1` contains store features and feature ID `STORE_100` exists:

```javascript
const map = apex.region( "stores_map" );
const feature = map.getFeature( 1, "STORE_100" );

if ( feature ) {
    map.displayPopup(
        "infoWindow",
        1,
        "STORE_100",
        true
    );
}
```

Close popups:

```javascript
apex.region( "stores_map" ).closeAllInfoWindows( 1 );
```

### Add Or Update GeoJSON Feature

```javascript
const map = apex.region( "stores_map" );
const layerId = map.getLayerIdByName( "Incidents" );

map.addFeature( layerId, {
    type: "Feature",
    id: "INC_1001",
    geometry: {
        type: "Point",
        coordinates: [ -122.4194, 37.7749 ]
    },
    properties: {
        title: "Incident 1001",
        severity: "High"
    }
} );
```

Use `updateFeature` with the same feature ID to change an existing feature, and `removeFeature` to remove it.

### Circle Tool

If the region has the circle tool enabled:

```javascript
const circle = apex.region( "stores_map" ).getCircle();

if ( circle ) {
    apex.item( "P10_CIRCLE_GEOJSON" ).setValue(
        JSON.stringify( circle )
    );
}
```

Clear it:

```javascript
apex.region( "stores_map" ).clearCircle();
```

### MapLibre Access

Use documented `mapRegion` methods first. Drop down to MapLibre only when APEX does not expose the needed behavior:

```javascript
const mapObject = apex.region( "stores_map" ).getMapObject();

if ( mapObject ) {
    mapObject.once( "idle", function() {
        apex.debug.info( "Map is idle." );
    } );
}
```

### Safety Notes

- Map region APIs may return empty objects or `null` before initialization.
- Treat coordinates and GeoJSON from users as untrusted; validate server-side before saving.
- Do not expose API keys or private tile URLs in client code unless they are intended for browser use.
- Prefer APEX layer methods over direct MapLibre mutations so APEX state stays consistent.
- Refresh map layers after changing session-state items listed in `itemsToSubmit`.

### Related APIs

- region and apex.region for generic region behavior.
- facetsRegion for filtering map data.
- apex.server for saving map status, circle geometry, or feature edits.
---

## model

Source: [Oracle APEX 26.1 JavaScript API Reference](https://docs.oracle.com/en/database/oracle/apex/26.1/aexjs/model.html)

### Purpose

`model` is the interface for an APEX client-side data model instance. It stores records for Interactive Grid, Cards, template reports, table-model views, trees, and other data-driven components. It supports fetching, paging, editing, change tracking, validation metadata, saving, selection state, and tree traversal.

### When To Use

Use it when code already has a model instance from an APEX region/view and needs record values, changed rows, selected records, or controlled edits.

Use apex.model to create/get/release model instances. Use this page for instance methods after you have the model.

### API Surface

| Area | Common members |
| --- | --- |
| Fetch/save | `fetch`, `fetchAll`, `fetchRecords`, `fetchChildNodes`, `save`, `addChangesToSaveRequest` |
| Iterate/read | `forEach`, `forEachInPage`, `recordAt`, `getRecord`, `getRecordId`, `getValue`, `getRecordValue`, `getFieldKey`, `getFieldMetadata` |
| Edit/change | `setValue`, `setRecordValue`, `insertNewRecord`, `copyRecords`, `moveRecords`, `deleteRecords`, `revertRecords`, `clearChanges`, `isChanged`, `getChanges`, `hasErrors`, `getErrors` |
| Permissions | `allowAdd`, `allowEdit`, `allowDelete`, `allowDrag`, `check` |
| Selection | `getSelectedRecords`, `getSelectedCount`, `setSelectionState`, `clearSelection`, `getSelectionState` |
| Metadata/state | `getRecordMetadata`, `metadataChanged`, `setValidity`, `setDisabledState`, `setHiddenState`, `updateVisibility` |
| Tree models | `root`, `parent`, `child`, `childCount`, `hasChildren`, `walkTree` |
| Observation | `subscribe`, `unSubscribe` |
| Transform | `transform` |

### Get Values From Selected IG Records

Assuming Interactive Grid Static ID `emp_ig`:

```javascript
const ig$ = apex.region( "emp_ig" ).widget();
const grid = ig$.interactiveGrid( "getViews", "grid" );
const model = grid.model;

grid.getSelectedRecords().forEach( function( record ) {
    apex.debug.info( {
        empno: model.getValue( record, "EMPNO" ),
        ename: model.getValue( record, "ENAME" )
    } );
} );
```

### Set A Value Safely

```javascript
const record = grid.getSelectedRecords()[0];

if ( record && model.allowEdit( record ) ) {
    const result = model.setValue( record, "STATUS", "APPROVED" );

    if ( result === "DUP" ) {
        apex.message.alert( "Duplicate identity value." );
    }
}
```

### Save Changes Example

For Interactive Grid, prefer the built-in save action:

```javascript
if ( model.isChanged() ) {
    ig$.interactiveGrid( "getActions" ).invoke( "save" );
}
```

For custom model-backed widgets:

```javascript
const promise = model.save();

if ( promise ) {
    promise.done( function() {
        apex.message.showPageSuccess( "Saved." );
    } ).fail( function( error ) {
        apex.debug.error( error );
    } );
}
```

### Subscribe Example

```javascript
const viewId = model.subscribe( {
    viewId: "orders-summary",
    onChange: function( changeType, change ) {
        if ( changeType === "set" || changeType === "delete" ) {
            apex.region( "orders_summary" ).refresh();
        }
    }
} );

// Later:
model.unSubscribe( viewId );
```

### Notes

- Model records can be arrays or objects depending on model shape; use `getValue`/`setValue` rather than assuming shape.
- `setValue` returns status codes such as `"SET"`, `"DUP"`, `"NC"`, or `null`.
- Client-side edits are not trusted until server validation/save succeeds.
- Avoid long-lived model references across region refreshes unless using `apex.model.get`/`release` correctly.

### Related APIs

- apex.model
- interactiveGrid
- interactiveGridView
- tableModelView
- treeView
---

## numberFieldItem

Source: [Oracle APEX 26.1 JavaScript API Reference](https://docs.oracle.com/en/database/oracle/apex/26.1/aexjs/numberFieldItem.html)

### Purpose

`numberFieldItem` is the item interface specialization for APEX Number Field items. It behaves like the standard item interface and adds `getNativeValue`, which returns the item value as a JavaScript number.

### When To Use

Use it via `apex.item( "Pxx_NUMBER_ITEM" )` when client-side code needs numeric math, HTML5 validity checks, display value behavior, or normal item methods.

### API Surface

| Area | Members |
| --- | --- |
| Standard item identity | `id`, `node`, `element`, `item_type`, `value` |
| Value | `getValue`, `setValue`, `displayValueFor`, `hasDisplayValue`, `isEmpty`, `isChanged` |
| Number-specific | `getNativeValue` |
| Validation | `getValidity`, `getValidationMessage` |
| UI | `show`, `hide`, `enable`, `disable`, `isDisabled`, `setFocus`, `setStyle` |

### Numeric Calculation Example

Assuming page items `P10_SUBTOTAL`, `P10_TAX`, and `P10_TOTAL` are Number Field items:

```javascript
const subtotal = apex.item( "P10_SUBTOTAL" ).getNativeValue();
const tax = apex.item( "P10_TAX" ).getNativeValue();

if ( Number.isFinite( subtotal ) && Number.isFinite( tax ) ) {
    apex.item( "P10_TOTAL" ).setValue( String( subtotal + tax ) );
}
```

### Validation Example

```javascript
const item = apex.item( "P10_DISCOUNT" );
const validity = item.getValidity();

if ( !validity.valid ) {
    apex.message.alert( item.getValidationMessage( "Discount" ) );
    item.setFocus();
}
```

### Change Handling Example

```javascript
apex.jQuery( "#P10_QUANTITY,#P10_UNIT_PRICE" ).on( "change", function() {
    const qty = apex.item( "P10_QUANTITY" ).getNativeValue();
    const price = apex.item( "P10_UNIT_PRICE" ).getNativeValue();

    if ( Number.isFinite( qty ) && Number.isFinite( price ) ) {
        apex.item( "P10_LINE_TOTAL" ).setValue( String( qty * price ) );
    }
} );
```

### Notes

- `getValue()` returns a string; use `getNativeValue()` for JavaScript number math.
- `getNativeValue()` returns `NaN` when the item value is not a valid number.
- Server-side validation is still required; client validation is for usability.
- Use `setValue( value, null, true )` when suppressing the change event is intentional.

### Related APIs

- item
- apex.item
- apex.locale
---

## region

Source: [Oracle APEX 26.1 JavaScript API Reference](https://docs.oracle.com/en/database/oracle/apex/26.1/aexjs/region.html)

### Purpose

`region` is the client-side interface returned by `apex.region("static_id")`. It gives APEX-aware access to region refresh, focus, DOM element, parent/detail relationships, faceted-search integration, region widgets, and custom region plug-in behavior.

This page documents the region interface itself. Use apex.region for namespace functions such as `apex.region.create`, `destroy`, `findClosest`, and `isRegion`.

### When To Use

Use the region interface when code needs to refresh or interact with a region by Static ID, especially from buttons, Dynamic Actions, Ajax callbacks, and custom region plug-ins.

Common tasks:

- Refresh a report, chart, Cards, Interactive Report, or custom region.
- Keep an Interactive Report on the current page while refreshing.
- Focus a region after an action.
- Access a widget-backed region such as Interactive Grid.
- Register custom region behavior from a plug-in.
- Connect a custom region to Faceted Search or Smart Filters.

### API Surface

| Need | Members |
| --- | --- |
| DOM and identity | `element`, `type`, `widgetName` |
| Region relationships | `parentRegionId`, `filterRegionId` |
| Refresh/focus | `refresh`, `focus`, `alternateLoadingIndicator` |
| Widget-backed regions | `widget`, `call`, `on`, `off` |

### Refresh Region

```javascript
const orders = apex.region( "orders" );

orders.refresh().then( function() {
    apex.debug.info( "Orders refreshed." );
} );
```

For Interactive Report, pass `true` when you want to keep current pagination/scroll behavior where supported:

```javascript
apex.region( "orders_ir" ).refresh( true );
```

Not all regions return meaningful data from the refresh promise. Use it as a completion signal.

### Refresh After Ajax

```javascript
apex.server.process( "SAVE_ORDER", {
    x01: $v( "P10_ORDER_ID" ),
    pageItems: "#P10_STATUS,#P10_OWNER"
} ).done( function() {
    apex.region( "orders" ).refresh();
} ).fail( function( jqXHR, textStatus, errorThrown ) {
    apex.debug.error( textStatus, errorThrown );
} );
```

Use `pageItems` when the Ajax process needs current page item session state.

### Widget-Backed Region

Some regions expose a jQuery UI style widget. Interactive Grid is a common example.

```javascript
const ig = apex.region( "emp" );
const selectedRecords = ig.call( "getSelectedRecords" );

if ( selectedRecords.length === 0 ) {
    apex.message.alert( "Select at least one row." );
}
```

`call` is a shorthand for invoking widget methods. If you need direct widget access:

```javascript
const widget$ = apex.region( "emp" ).widget();

if ( widget$ ) {
    widget$.interactiveGrid( "getActions" ).invoke( "selection-add-row" );
}
```

Check the region-specific interface page before using widget methods.

### Custom Region Plug-In Interface

Assuming a region plug-in render callback outputs `<div id="task_board">...</div>` and passes an Ajax identifier into JavaScript:

```javascript
apex.region.create( "task_board", {
    type: "taskBoard",
    ajaxIdentifier: "PLUGIN_AJAX_IDENTIFIER",

    refresh: function() {
        const region = this;

        return apex.server.plugin(
            region.ajaxIdentifier,
            {},
            {
                refreshObject: region.element
            }
        ).done( function( data ) {
            region.element.find( ".task-board-body" ).html( data.html );
        } );
    },

    focus: function() {
        this.element.find( ".task-board-search" ).trigger( "focus" );
    }
} );
```

After registration, app code can use the same API as native regions:

```javascript
apex.region( "task_board" ).refresh();
apex.region( "task_board" ).focus();
```

### Faceted Search Or Smart Filters

For a custom region that should refresh with a Faceted Search or Smart Filters region, provide the filter region DOM ID.

```javascript
apex.region.create( "task_cards", {
    type: "taskCards",
    filterRegionId: "task_facets",

    refresh: function() {
        return apex.server.plugin(
            this.ajaxIdentifier,
            {},
            { refreshObject: this.element }
        );
    }
} );
```

When a refresh callback returns a promise, APEX can coordinate locking/unlocking with the filter region.

### Loading Indicator Placement

Use `alternateLoadingIndicator` in advanced custom regions where the default item or region spinner would be placed poorly, such as editable grids or virtualized layouts.

```javascript
apex.region.create( "task_board", {
    type: "taskBoard",

    alternateLoadingIndicator: function( element, loadingIndicator$ ) {
        return this.element.find( ".task-board-toolbar" ).append( loadingIndicator$ );
    }
} );
```

Return the loading indicator jQuery object you inserted, or `null` if the region has no better location.

### Safety Notes

- Give regions a stable Static ID and use that ID with `apex.region`.
- Prefer `region.refresh()` over triggering low-level DOM refresh events.
- Check whether a region is widget-backed before using `widget` or `call`.
- Keep custom `refresh` methods promise-aware so APEX can coordinate loading states.
- Clean up custom regions with `apex.region.destroy` if the DOM is removed dynamically.
- Do not update a region with unescaped HTML from untrusted sources.

### Related APIs

- apex.region for namespace functions.
- APEX_PLUGIN for server-side region plug-in callback types.
- APEX_PLUGIN_UTIL for region plug-in helpers.
- apex.server for Ajax refresh callbacks.
- interactiveGrid, interactiveReportRegion, cardsRegion, and facetsRegion for specialized region APIs.
---

## templateReportRegion

Source: [Oracle APEX 26.1 JavaScript API Reference](https://docs.oracle.com/en/database/oracle/apex/26.1/aexjs/templateReportRegion.html)

### Purpose

`templateReportRegion` is the client-side interface returned by `apex.region(staticId)` for Template Component report regions. It supports refresh, focus, paging, current row, and row selection APIs.

Use it when code needs to work with selected rows or current rows in a Template Component report without depending on raw DOM traversal.

### API Surface

| Need | Members |
| --- | --- |
| Refresh/focus | `refresh`, `focus` |
| Paging | `firstPage`, `previousPage`, `nextPage`, `lastPage` |
| Selection | `getSelection`, `setSelection`, `getSelectedValues`, `setSelectedValues`, `selectAll` |
| Current row | `getCurrentRow`, `setCurrentRow`, `getCurrentRowValue`, `setCurrentRowValue` |
| Region identity | `element`, `type`, `filterRegionId` |

### Refresh

```javascript
apex.region( "task_report" ).refresh().then( function() {
    apex.debug.info( "Template report refreshed." );
} );
```

### Selection

Assuming selection is enabled and the template uses `#APEX$ROW_IDENTIFICATION#` so rows have stable `data-id` values:

```javascript
const report = apex.region( "task_report" );
const selectedIds = report.getSelectedValues() || [];

if ( selectedIds.length ) {
    apex.item( "P10_SELECTED_TASKS" ).setValue(
        selectedIds.join( ":" )
    );
}
```

Select rows by value:

```javascript
apex.region( "task_report" ).setSelectedValues(
    [ "TASK-1001", "TASK-1002" ],
    true
);
```

`setSelectedValues` returns the count of rows actually selected, or `-1` if the region is not initialized or selection is not supported.

### Current Row

```javascript
const report = apex.region( "task_report" );
const currentTaskId = report.getCurrentRowValue();

if ( currentTaskId ) {
    apex.item( "P10_TASK_ID" ).setValue( currentTaskId );
}
```

Move focus to a known row:

```javascript
apex.region( "task_report" ).setCurrentRowValue(
    "TASK-1001",
    true
);
```

The row must be rendered to become current.

### Paging

```javascript
const report = apex.region( "task_report" );

report.firstPage();
report.nextPage();
report.previousPage();
```

Paging calls return `true` for success and `false` if a page is currently being rendered.

### Selection Change Handler

```javascript
apex.jQuery( "#task_report" ).on( "apexselectionchange", function() {
    const selected = apex.region( "task_report" ).getSelectedValues() || [];

    apex.jQuery( "#bulk_actions" ).toggle( selected.length > 0 );
} );
```

### Safety Notes

- Give the Template Component report a stable Static ID.
- Include `#APEX$ROW_IDENTIFICATION#` in the template when row selection/current-row APIs need stable row values.
- Selection APIs return `null` or `-1` when selection is not enabled or the report is not initialized.
- Treat selected row values sent to PL/SQL as untrusted; re-authorize the rows server-side.
- Use the region API before writing DOM selectors tied to template internals.

### Related APIs

- cardsRegion for Cards regions with similar selection/paging behavior.
- facetsRegion for filtering Template Component reports.
- region and apex.region for generic refresh/focus behavior.
---

## treeNodeAdapter

Source: [Oracle APEX 26.1 JavaScript API Reference](https://docs.oracle.com/en/database/oracle/apex/26.1/aexjs/treeNodeAdapter.html)

### Purpose

`treeNodeAdapter` is the data adapter interface used by `treeView`. It tells the view how to read nodes, labels, icons, links, child state, expanded state, edit permissions, drag/drop behavior, and lazy-loaded children.

### When To Use

Use it when creating a custom `treeView` or customizing the adapter returned by `treeView.makeDefaultNodeAdapter`. Normal APEX Tree regions often configure this indirectly through region attributes and initialization code.

### API Surface

| Area | Members |
| --- | --- |
| Tree structure | `root`, `child`, `childCount`, `hasChildren`, `fetchChildNodes` |
| Node display | `getLabel`, `getIcon`, `getClasses`, `getAccDescription`, `getLink`, `getLinkTarget`, `renderNodeContent` |
| State | `setViewId`, `getViewId`, `clearViewId`, `setExpanded`, `isExpanded`, `getExpandedNodeIds`, `getExpandedState`, `isHidden`, `isDisabled` |
| Editing | `allowAdd`, `addNode`, `allowRename`, `renameNode`, `allowDelete`, `deleteNode` |
| Drag/drop | `allowDrag`, `dragOperations`, `moveNodes`, `copyNodes` |
| Types | `node`, `defaultNode`, `typeInfo` |

### Default Adapter Example

```javascript
const data = {
    id: "root",
    label: "Root",
    children: [
        { id: "orders", label: "Orders", icon: "fa fa-table" },
        { id: "customers", label: "Customers", icon: "fa fa-users" }
    ]
};

const adapter = apex.widget.treeView.makeDefaultNodeAdapter( data, null, true, [ "root" ] );
```

### Lazy Loading Pattern

```javascript
const adapter = apex.widget.treeView.makeDefaultNodeAdapter( data, null, true );

adapter.fetchChildNodes = function( node, callback ) {
    apex.server.process( "GET_TREE_CHILDREN", {
        x01: node.id
    } ).done( function( children ) {
        node.children = children;
        callback( children.length );
    } ).fail( function() {
        callback( false );
    } );
};
```

### Permission Pattern

```javascript
adapter.allowDelete = function( node ) {
    return node.type !== "system";
};

adapter.allowRename = function( node ) {
    return !node.isDisabled;
};
```

### Notes

- All node access should go through adapter methods; do not make the view depend on raw node shape unless you own the adapter.
- Lazy child loading uses `childCount`/`hasChildren` returning null and `fetchChildNodes` later calling its callback.
- Adapter callbacks must be called exactly once.
- Escape labels in custom rendering unless the content is trusted.

### Related APIs

- treeView
- htmlBuilder
- apex.server
- apex.widget
---

## grid

Source: [Oracle APEX 26.1 JavaScript API Reference](https://docs.oracle.com/en/database/oracle/apex/26.1/aexjs/grid.html)

### Purpose

`grid` is the low-level APEX widget used for editable and selectable grid views, most notably Interactive Grid grid views. It handles columns, cells, paging, selection, editing, clipboard support, and model integration.

### When To Use

Use it when custom code already has the grid view widget instance and needs cell/row selection, edit-mode, paging, column visibility/width, or active-record behavior.

Prefer interactiveGrid and interactiveGridView for normal Interactive Grid code. Use `grid` directly only when the higher-level APIs do not expose the behavior.

### API Surface

| Area | Common members |
| --- | --- |
| Model and active record | `getModel`, `getActiveRecord`, `getActiveRecordId`, `setActiveRecordValue`, `finishEditing` |
| Selection | `getSelection`, `setSelection`, `getSelectedRecords`, `setSelectedRecords`, `getSelectedRanges`, `setSelectedRanges`, `selectAll` |
| Cells and columns | `getCurrentCell`, `setCurrentCell`, `getColumnForCell`, `getColumns`, `hideColumn`, `showColumn`, `freezeColumn`, `unfreezeColumn`, `setColumnWidth`, `moveColumn`, `refreshColumns` |
| Paging | `firstPage`, `previousPage`, `nextPage`, `lastPage`, `gotoPage`, `loadMore`, `getPageInfo` |
| Editing | `setEditMode`, `inEditMode`, `copyDownSelection`, `fillSelection`, `lockActive`, `unlockActive` |
| Lifecycle | `refresh`, `resize`, `fetchAllData`, `focus` |
| Events | `selectionchange`, `currentcellchange`, `pagechange`, `sortchange`, `modechange`, `columnresize`, `columnreorder` |

### Getting A Grid View

Assuming an Interactive Grid region Static ID `orders_ig`:

```javascript
const ig$ = apex.region( "orders_ig" ).widget();
const gridView = ig$.interactiveGrid( "getViews", "grid" );
const grid$ = gridView.view$;
```

### Selected Rows Example

```javascript
const model = grid$.grid( "getModel" );
const records = grid$.grid( "getSelectedRecords" );

records.forEach( function( record ) {
    apex.debug.info( "Order", model.getValue( record, "ORDER_ID" ) );
} );
```

### Edit And Save Example

Prefer the built-in Interactive Grid save action, but finish editing first if your code has just changed a cell:

```javascript
grid$.grid( "finishEditing" ).then( function() {
    ig$.interactiveGrid( "getActions" ).invoke( "save" );
} );
```

### Column Example

```javascript
grid$.grid( "hideColumn", "INTERNAL_NOTE" );
grid$.grid( "setColumnWidth", "CUSTOMER_NAME", 220 );
grid$.grid( "refreshColumns" );
```

### Notes

- Methods are called on the widget jQuery object: `grid$.grid( "methodName", args... )`.
- The grid model can change after refresh; avoid storing long-lived model references unless you manage release semantics through `apex.model`.
- For row selection, use records and model values rather than scraping DOM text.
- For editable Interactive Grids, prefer the region actions (`save`, `selection-add-row`, and friends) when available.

### Related APIs

- interactiveGrid
- interactiveGridView
- model
- apex.model
---

## iconList

Source: [Oracle APEX 26.1 JavaScript API Reference](https://docs.oracle.com/en/database/oracle/apex/26.1/aexjs/iconList.html)

### Purpose

`iconList` is an APEX widget for keyboard-accessible icon/list selection and navigation. It is used by other APEX components and can also support custom selectable icon lists.

### When To Use

Use it when implementing custom client-side list selection with icon/list markup. Prefer built-in APEX components where possible; they already handle accessibility, selection state, and server integration.

### API Surface

| Area | Members |
| --- | --- |
| Setup options | `multiple`, `navigation`, `itemSelector`, `addItemSelector`, `label`, `tabbableContent`, `noNavKeyContent`, `contextMenu`, `contextMenuAction` |
| Selection | `getSelection`, `getSelectionValues`, `setSelection` |
| Layout | `getRows`, `getColumns`, `resize`, `refresh` |
| Focus | `focus` |
| Events | `activate`, `selectionchange` |

### Initialization Example

Assuming `#status_picker` contains child elements with class `.status-card` and `data-value`:

```javascript
apex.jQuery( "#status_picker" ).iconList( {
    itemSelector: ".status-card",
    multiple: false,
    label: true,
    activate: function( event, data ) {
        apex.item( "P10_STATUS" ).setValue( data.values[0] || "" );
    }
} );
```

### Selection Example

```javascript
const list$ = apex.jQuery( "#status_picker" );
const values = list$.iconList( "getSelectionValues" );

apex.item( "P10_SELECTED_STATUS" ).setValue( values.join( ":" ) );
```

### Programmatic Selection Example

```javascript
const list$ = apex.jQuery( "#status_picker" );
const item$ = list$.find( ".status-card[data-value='CLOSED']" );

list$.iconList( "setSelection", item$, true );
```

### Notes

- If `navigation` is true, the widget behaves as navigation rather than selection.
- `label` controls type-to-select behavior; keep labels visible or discoverable for keyboard users.
- Call `resize` after container size changes and `refresh` after changing the list content.
- Selection values come from `data-value` attributes.

### Related APIs

- tableModelView when icon lists are backed by an APEX model.
- menu for context menus.
- apex.item for syncing selected values with page items.
---

## interactiveGrid

Source: [Oracle APEX 26.1 JavaScript API Reference](https://docs.oracle.com/en/database/oracle/apex/26.1/aexjs/interactiveGrid.html)

### Purpose

`interactiveGrid` is the client-side widget API behind an Interactive Grid region. Use it through `apex.region( staticId ).widget().interactiveGrid( ... )` to access IG actions, selected records, views, toolbar metadata, refresh/resize behavior, and edit-mode behavior.

Use `APEX_IG` PL/SQL for server-side saved report management. Use this JavaScript API for browser runtime behavior.

### When To Use

Use `interactiveGrid` when:

- A button or Dynamic Action needs to save, refresh, or open an IG action.
- Client code needs selected model records.
- You need the current view or a named view such as `grid`.
- Toolbar buttons or actions need customization.
- Code needs to coordinate master-detail grids on the client.

Avoid manipulating IG DOM rows directly when a widget method or model API exists.

### Access Pattern

Assuming an Interactive Grid region with Static ID `orders_ig`:

```javascript
const ig$ = apex.region( "orders_ig" ).widget();

ig$.interactiveGrid( "getActions" ).invoke( "save" );
```

Open the built-in download dialog:

```javascript
apex.region( "orders_ig" )
    .widget()
    .interactiveGrid( "getActions" )
    .invoke( "show-download-dialog" );
```

### Selected Records

Assuming the grid query includes columns `ORDER_ID` and `STATUS`:

```javascript
const ig$ = apex.region( "orders_ig" ).widget();
const records = ig$.interactiveGrid( "getSelectedRecords" ) || [];
const view = ig$.interactiveGrid( "getCurrentView" );
const model = view.model;

records.forEach( function( record ) {
    apex.debug.info(
        "Selected order %s with status %s",
        model.getValue( record, "ORDER_ID" ),
        model.getValue( record, "STATUS" )
    );
} );
```

`getSelectedRecords` can return `null` if the current view does not support selection.

### Edit Mode And Refresh

```javascript
const actions = apex.region( "orders_ig" )
    .widget()
    .interactiveGrid( "getActions" );

actions.set( "edit", true );
apex.region( "orders_ig" ).refresh();
```

Use built-in actions where possible. They preserve IG state and accessibility behavior better than direct DOM operations.

### Related APIs

- `interactiveGridView` for the view object returned by `getCurrentView` or `getViews`.
- `apex.model` for record values and model operations.
- `APEX_IG` for server-side saved report state.
- `APEX_REGION` for PL/SQL query/export of region data.

### API Surface

| Member | Parameters | Returns |
| --- | --- | --- |
| `defaultDetailViewOptions` | None documented | Not documented |
| `defaultGridViewOptions` | None documented | Not documented |
| `defaultIconViewOptions` | None documented | Not documented |
| `defaultModelOptions` | None documented | Not documented |
| `defaultSingleRowOptions` | None documented | Not documented |
| `editable` | None documented | Not documented |
| `features` | None documented | Not documented |
| `initActions` | None documented | Not documented |
| `initialSelection` | None documented | Not documented |
| `reportSettingsArea` | None documented | Not documented |
| `saveLoadingIndicator` | None documented | Not documented |
| `saveLoadingIndicatorPosition` | None documented | Not documented |
| `text` | None documented | Not documented |
| `toolbar` | None documented | Not documented |
| `toolbarData` | None documented | Not documented |
| `trackParentSelection` | None documented | Not documented |
| `modechange` | None documented | Not documented |
| `reportchange` | None documented | Not documented |
| `reportsettingschange` | None documented | Not documented |
| `save` | None documented | Not documented |
| `selectionchange` | None documented | Not documented |
| `viewchange` | None documented | Not documented |
| `viewmodelcreate` | None documented | Not documented |
| `focus` | None documented | Not documented |
| `getActions` | None documented | the actions context Type apex.actions Example |
| `getCurrentView` | None documented | View interface. Type interactiveGridView |
| `getCurrentViewId` | None documented | view id. Type string |
| `getSelectedRecords` | None documented | array of records from the model corresponding to the selected rows/records Returns empty array if there is no selection. Returns null if the current view doesn't support selection. Type Array |
| `getToolbar` | None documented | jQuery object of the interactive grid toolbar or null if there is no toolbar Type jQuery |
| `getViews` | `pViewId` | View interface. Type interactiveGridView |
| `gotoCell` | `pModelInstanceId`, `pRecordId`, `pColumn` | Not documented |
| `refresh` | None documented | Not documented |
| `resize` | None documented | Not documented |
| `setMasterRecord` | `pMasterModel`, `pMasterRecord` | Not documented |
| `setSelectedRecords` | `pRecords`, `pFocus`, `pNoNotify` | Not documented |
| `copyDefaultToolbar` | None documented | Returns an array containing a copy of the default Interactive Grid toolbar metadata. Type interactiveGrid.toolbarData Examples The following example shows how to make the download dialog more easily accessible, by adding a button to the toolbar to open it. This example is similar to the previous one except that the Download menu item is removed from the Actions menu and inserted as a toolbar button after the Actions menu button. Type Definitions |
| `toolbarData` | None documented | Not documented |

### defaultDetailViewOptions

Signature: `defaultDetailViewOptions :Object`

#### Purpose

This option allows passing options to the underlying tableModelView widget for detail view. See tableModelView for the options it supports. Interactive Grid may override some of these settings. Some settings may interfere with the proper functioning of Interactive Grid.

#### Simple Example

```javascript
interactiveGrid.defaultDetailViewOptions;
```

### defaultGridViewOptions

Signature: `defaultGridViewOptions :Object`

#### Purpose

This option allows passing options to the underlying grid widget for grid view. See grid for the options it supports. Interactive Grid may override some of these settings. Some settings may interfere with the proper functioning of Interactive Grid.

#### Simple Example

```javascript
interactiveGrid.defaultGridViewOptions;
```

### defaultIconViewOptions

Signature: `defaultIconViewOptions :Object`

#### Purpose

This option allows passing options to the underlying tableModelView widget for icon view. See tableModelView for the options it supports. Interactive Grid may override some of these settings. Some settings may interfere with the proper functioning of Interactive Grid.

#### Simple Example

```javascript
interactiveGrid.defaultIconViewOptions;
```

### defaultModelOptions

Signature: `defaultModelOptions :Object`

#### Purpose

This option allows passing options not explicitly set by Interactive Grid to the underlying view models. See apex.model.create for the supported model options. Some settings may interfere with the proper functioning of Interactive Grid.

#### Simple Example

```javascript
interactiveGrid.defaultModelOptions;
```

### defaultSingleRowOptions

Signature: `defaultSingleRowOptions :Object`

#### Purpose

This option allows passing options to the underlying recordView widget for the single row view of grid view. See recordView for the options it supports. Interactive Grid may override some of these settings. Some settings may interfere with the proper functioning of Interactive Grid.

#### Simple Example

```javascript
interactiveGrid.defaultSingleRowOptions;
```

### editable

Signature: `editable :boolean`

#### Purpose

Initialize the interactiveGrid with the editable option specified in the Interactive Grid region JavaScript Initialization Code attribute.

#### Simple Example

```javascript
interactiveGrid.editable;
```

### features

Signature: `features :Object`

#### Purpose

Controls which general features of the Interactive Grid are enabled.

#### Option/Object Properties

| Name | Type | Description |
| --- | --- | --- |
| `filter` | boolean | Controls if filtering is available for the Interactive Grid |
| `flashback` | boolean | Controls if flashback is available for the Interactive Grid |

#### Simple Example

```javascript
interactiveGrid.features;
```

### initActions

Signature: `initActions :function`

#### Purpose

Allows you to add or modify actions . function( actions ) Function has one argument 'actions', which is the Interactive Grid's action's interface object. Note: Within the function, the actions.context property can be used to access the main interactiveGrid widget element (the context for the actions).

#### Simple Example

```javascript
interactiveGrid.initActions;
```

### initialSelection

Signature: `initialSelection :boolean`

#### Purpose

Controls if the Interactive Grid has an initial selection.

#### Simple Example

```javascript
interactiveGrid.initialSelection;
```

### reportSettingsArea

Signature: `reportSettingsArea :boolean`

#### Purpose

Controls if the report settings area displays for the Interactive Grid. The report settings area shows information such as filters, control breaks and highlights applied to the current report. Pass false to hide the report settings area, however you should not rely on this being set to true to display report settings, it just needs to evaluate to truthy.

#### Simple Example

```javascript
interactiveGrid.reportSettingsArea;
```

### saveLoadingIndicator

Signature: `saveLoadingIndicator :string|jQuery|Element|function`

#### Purpose

A loading indicator suitable for the apex.server.plugin loadingIndicator option to be used during the save action.

#### Simple Example

```javascript
interactiveGrid.saveLoadingIndicator;
```

### saveLoadingIndicatorPosition

Signature: `saveLoadingIndicatorPosition :string`

#### Purpose

A loading indicator position suitable for the apex.server.plugin loadingIndicatorPosition option to be used during the save action.

#### Simple Example

```javascript
interactiveGrid.saveLoadingIndicatorPosition;
```

### text

Signature: `text :object`

#### Purpose

Defines various text messages. Most messages come from declarative attributes. If there is no value given for a declarative attribute the default may come from an APEX runtime message.

#### Option/Object Properties

| Name | Type | Description |
| --- | --- | --- |
| `addRowButton` | string | The label for the toolbar add row button. The default comes from text message APEX.IG.ADD_ROW. |
| `noDataFound` | string | The message to display when there are no results. The default comes from text message APEX.IG.NO_DATA_FOUND. |
| `noParentSelected` | string | The message to display when the parent region, in a master-detail configuration, does not have exactly one row selected. The default comes from text message APEX.IG.SELECT_1_ROW_IN_MASTER. |
| `help` | string | The first help text to display as part of help dialog. There is no default. |

#### Simple Example

```javascript
interactiveGrid.text;
```

### toolbar

Signature: `toolbar :Object`

#### Purpose

Controls which functionality of the default Interactive Grid toolbar is displayed. If false or null, there will be no toolbar.

#### Option/Object Properties

| Name | Type | Description |
| --- | --- | --- |
| `actionMenu` | boolean | Hide or show the actions menu. |
| `columnSelection` | boolean | Hide or show the column selection menu, to allow column-specific searches. Note: Ignored if toolbar.searchField is false . |
| `editing` | boolean | Hide or show the edit button. Note: This does not prevent the Interactive Grid from being edited, merely hides the button from the toolbar. If you wish to control whether the Interactive Grid can be edited at all, please see the interactiveGrid#editable option. |
| `reset` | boolean | Hide or show the reset button. |
| `save` | boolean | Hide or show the save button. |
| `savedReports` | boolean | Hide or show the select list showing any saved reports. |
| `searchField` | boolean | Hide or show the search controls (affects the column selection menu, search input field and go button). |

#### Simple Example

```javascript
interactiveGrid.toolbar;
```

### toolbarData

Signature: `toolbarData :Array`

#### Purpose

Contains the metadata for the toolbar displayed at the top of the Interactive Grid. If no value is provided, the toolbar defaults to the standard toolbar required in APEX.

#### Simple Example

```javascript
interactiveGrid.toolbarData;
```

### trackParentSelection

Signature: `trackParentSelection :boolean`

#### Purpose

Determines if a detail Interactive Grid will change the detail instance automatically when the selection in the master region changes. When true, the default, this detail Interactive Grid creates a selection change event handler for the master region and updates the data shown in this region to correspond to the selected row of the master region. Set to false to manually control the detail instance shown in this region using the interactiveGrid#setMasterRecord method.

#### Simple Example

```javascript
interactiveGrid.trackParentSelection;
```

### modechange

Signature: `modechange`

#### Purpose

Use `modechange` as documented by the `interactiveGrid` module.

#### Option/Object Properties

| Name | Type | Description |
| --- | --- | --- |
| `event` | event | jQuery event object. |
| `data` | Object | Additional data for the event. Properties Name Type Description |
| `editMode` | boolean | The new edit mode. |

#### Simple Example

```javascript
interactiveGrid.modechange();
```

### reportchange

Signature: `reportchange`

#### Purpose

Use `reportchange` as documented by the `interactiveGrid` module.

#### Option/Object Properties

| Name | Type | Description |
| --- | --- | --- |
| `event` | event | jQuery event object. |

#### Simple Example

```javascript
interactiveGrid.reportchange();
```

### reportsettingschange

Signature: `reportsettingschange`

#### Purpose

Use `reportsettingschange` as documented by the `interactiveGrid` module.

#### Option/Object Properties

| Name | Type | Description |
| --- | --- | --- |
| `event` | event | jQuery event object. |

#### Simple Example

```javascript
interactiveGrid.reportsettingschange();
```

### save

Signature: `save`

#### Purpose

Use `save` as documented by the `interactiveGrid` module.

#### Option/Object Properties

| Name | Type | Description |
| --- | --- | --- |
| `event` | event | jQuery event object. |
| `data` | Object | Additional data for the event. Properties Name Type Description |
| `status` | String | If the save was successful then the status property equals "success". |

#### Simple Example

```javascript
interactiveGrid.save();
```

### selectionchange

Signature: `selectionchange`

#### Purpose

Triggered when the selection state changes and will work for all views that support selection (grid, icon, etc.).

#### Option/Object Properties

| Name | Type | Description |
| --- | --- | --- |
| `event` | event | jQuery event object. |
| `data` | Object | Additional data for the event. Properties Name Type Description |
| `selectedRecords` | Array | An array containing the underlying data model records corresponding to the current selection in the current view. See interactiveGrid#getSelectedRecords for further information on how to deal with these records. |
| `model` | Object | The underlying data model for the current view. See apex.model for further information. |

#### Simple Example

```javascript
interactiveGrid.selectionchange();
```

### viewchange

Signature: `viewchange`

#### Purpose

Triggered when the view changes.

#### Option/Object Properties

| Name | Type | Description |
| --- | --- | --- |
| `event` | event | jQuery event object. |
| `data` | Object | Additional data for the event. Properties Name Type Description |
| `view` | String | Identifier for the current view. |
| `created` | boolean | If true this indicates the view has just been created (or viewed for the first time). |

#### Simple Example

```javascript
interactiveGrid.viewchange();
```

### viewmodelcreate

Signature: `viewmodelcreate`

#### Purpose

Use `viewmodelcreate` as documented by the `interactiveGrid` module.

#### Option/Object Properties

| Name | Type | Description |
| --- | --- | --- |
| `event` | event | jQuery event object. |
| `data` | Object | Additional data for the event. Properties Name Type Description |
| `viewId` | Object | The id of the view for which the model is created. |
| `model` | Object | The underlying data model for the current view. See apex.model for further information. |

#### Simple Example

```javascript
interactiveGrid.viewmodelcreate();
```

### focus

Signature: `focus ()`

#### Purpose

Use `focus` as documented by the `interactiveGrid` module.

#### Simple Example

```javascript
interactiveGrid.focus();
```

### getActions

Signature: `getActions () &rarr; { apex.actions }`

#### Purpose

Use `getActions` as documented by the `interactiveGrid` module.

#### Returns

the actions context Type apex.actions Example

#### Simple Example

```javascript
interactiveGrid.getActions();
```

### getCurrentView

Signature: `getCurrentView () &rarr; { interactiveGridView }`

#### Purpose

Use `getCurrentView` as documented by the `interactiveGrid` module.

#### Returns

View interface. Type interactiveGridView

#### Simple Example

```javascript
interactiveGrid.getCurrentView();
```

### getCurrentViewId

Signature: `getCurrentViewId () &rarr; {string}`

#### Purpose

Use `getCurrentViewId` as documented by the `interactiveGrid` module.

#### Returns

view id. Type string

#### Simple Example

```javascript
interactiveGrid.getCurrentViewId();
```

### getSelectedRecords

Signature: `getSelectedRecords () &rarr; {Array}`

#### Purpose

apex.region( region HTML DOM id ).widget().interactiveGrid("getCurrentView").model

#### Returns

array of records from the model corresponding to the selected rows/records Returns empty array if there is no selection. Returns null if the current view doesn't support selection. Type Array

#### Simple Example

```javascript
interactiveGrid.getSelectedRecords();
```

### getToolbar

Signature: `getToolbar () &rarr; {jQuery}`

#### Purpose

Use `getToolbar` as documented by the `interactiveGrid` module.

#### Returns

jQuery object of the interactive grid toolbar or null if there is no toolbar Type jQuery

#### Simple Example

```javascript
interactiveGrid.getToolbar();
```

### getViews

Signature: `getViews (pViewId opt ) &rarr; { interactiveGridView }`

#### Purpose

Use `getViews` as documented by the `interactiveGrid` module.

#### Parameters

| Name | Type | Description |
| --- | --- | --- |
| `pViewId` | string |  Id of the view to get. For example "grid" or "chart". |

#### Returns

View interface. Type interactiveGridView

#### Simple Example

```javascript
interactiveGrid.getViews(
    "P1_ITEM"
);
```

### gotoCell

Signature: `gotoCell (pModelInstanceId opt , pRecordId, pColumn opt )`

#### Purpose

Use `gotoCell` as documented by the `interactiveGrid` module.

#### Parameters

| Name | Type | Description |
| --- | --- | --- |
| `pModelInstanceId` | String |  model instance id. only needed if using multiple models such as in master detail and the model has not already been set correctly by the master. |
| `pRecordId` | String |  the record id of the row to go to. |
| `pColumn` | String |  column in the record row to go to. |

#### Simple Example

```javascript
const ig$ = apex.region( "orders_ig" ).widget();
const view = ig$.interactiveGrid( "getViews", "grid" );
const model = view.model;
const record = model.getRecord( "1001" );
const recordId = model.getRecordId( record );

ig$.interactiveGrid( "gotoCell", null, recordId, "STATUS" );
```

### refresh

Signature: `refresh ()`

#### Purpose

Use `refresh` as documented by the `interactiveGrid` module.

#### Simple Example

```javascript
interactiveGrid.refresh();
```

### resize

Signature: `resize ()`

#### Purpose

Use `resize` as documented by the `interactiveGrid` module.

#### Simple Example

```javascript
interactiveGrid.resize();
```

### setMasterRecord

Signature: `setMasterRecord (pMasterModel, pMasterRecord)`

#### Purpose

Set the instance of this Interactive Grid to correspond to the specified master record. Normally this is done automatically when the master region selection changes. However, it can also be done manually when the interactiveGrid#trackParentSelection option is false.

#### Parameters

| Name | Type | Description |
| --- | --- | --- |
| `pMasterModel` | model | The model of the master region. |
| `pMasterRecord` | model.Record | The record of the master region that determines which records this detail region will show. |

#### Simple Example

```javascript
interactiveGrid.setMasterRecord(
    {},
    {}
);
```

### setSelectedRecords

Signature: `setSelectedRecords (pRecords, pFocus opt , pNoNotify opt )`

#### Purpose

Use `setSelectedRecords` as documented by the `interactiveGrid` module.

#### Parameters

| Name | Type | Description |
| --- | --- | --- |
| `pRecords` | Array |  an array of model records or an array of model record ids as returned by model getRecordId. If this is an empty array then the selection is cleared. |
| `pFocus` | boolean |  if true the first cell of the selection is given focus |
| `pNoNotify` | boolean |  if true the selection change event will be suppressed |

#### Simple Example

```javascript
const ig$ = apex.region( "orders_ig" ).widget();
const view = ig$.interactiveGrid( "getViews", "grid" );
const record = view.model.getRecord( "1001" );

ig$.interactiveGrid( "setSelectedRecords", [ record ], true, false );
```

### copyDefaultToolbar

Signature: `(static) copyDefaultToolbar () &rarr; { interactiveGrid.toolbarData }`

#### Purpose

Returns a copy of the default Interactive Grid toolbar data structure. This is a copy of the array that will be used as the data option when the Interactive Grid's toolbar is created. This is typically used from the Advanced JavaScript code function to customize the return value of this function and then assign to the interactiveGrid#toolbarData config property.

#### Returns

Returns an array containing a copy of the default Interactive Grid toolbar metadata. Type interactiveGrid.toolbarData Examples The following example shows how to make the download dialog more easily accessible, by adding a button to the toolbar to open it. This example is similar to the previous one except that the Download menu item is removed from the Actions menu and inserted as a toolbar button after the Actions menu button. Type Definitions

#### Simple Example

```javascript
interactiveGrid.copyDefaultToolbar();
```

### toolbarData

Signature: `toolbarData`

#### Purpose

Toolbar widget metadata returned by interactiveGrid.copyDefaultToolbar .

#### Option/Object Properties

| Name | Type | Description |
| --- | --- | --- |
| `search` |  | All search controls (column search menu, search field and go button) |
| `reports` |  | Saved report select list |
| `views` |  | View selection pill buttons |
| `actions1` |  | Actions menu button |
| `actions2` |  | Edit and Save buttons |
| `actions3` |  | Add Row button |
| `actions4` |  | Reset report button |

#### Simple Example

```javascript
interactiveGrid.toolbarData();
```

### Notes

- Run APEX JavaScript APIs from an APEX page where the `apex` namespace is loaded.
- Treat client-side values as untrusted when they reach PL/SQL.
- Prefer documented APIs over direct DOM or internal widget state when interacting with APEX components.
---

## menu

Source: [Oracle APEX 26.1 JavaScript API Reference](https://docs.oracle.com/en/database/oracle/apex/26.1/aexjs/menu.html)

### Purpose

`menu` is the APEX widget for popup menus, context menus, menubars, submenus, toggles, radio groups, and action-integrated menu items.

### When To Use

Use it when a custom component needs an APEX-styled menu. Prefer apex.actions for command definitions, then bind those actions into menus by name.

### API Surface

| Area | Members |
| --- | --- |
| Setup options | `items`, `menubar`, `actionsContext`, `asyncFetchMenu`, `customContent`, `useLinks`, `popupMenuLabelId`, `iconType`, `tabBehavior` |
| Open/close | `open`, `toggle`, `beforeOpen`, `afterClose` |
| Lookup/state | `find`, `setCurrentMenuItem`, `refresh`, `resize` |
| Item shape | `menu.Item` with `type`, `id`, `label`, `href`, `action`, `disabled`, `hide`, `menu`, `get`, `set`, `accelerator` |
| Async loading | `asyncFetch` callback pattern |

### Popup Menu Example

```javascript
apex.jQuery( "#order_menu" ).menu( {
    items: [
        {
            type: "action",
            id: "view-order",
            label: "View",
            action: function() {
                apex.navigation.redirect( "f?p=&APP_ID.:20:&SESSION.::NO::P20_ORDER_ID:" + $v( "P10_ORDER_ID" ) );
            }
        },
        {
            type: "separator"
        },
        {
            type: "action",
            id: "refresh-orders",
            label: "Refresh",
            action: function() {
                apex.region( "orders" ).refresh();
            }
        }
    ]
} );
```

### Context Menu Example

```javascript
const menu$ = apex.jQuery( "#order_menu" ).menu( "instance" );

apex.jQuery( "#orders" ).on( "contextmenu", ".order-row", function( event ) {
    event.preventDefault();
    apex.item( "P10_ORDER_ID" ).setValue( this.dataset.orderId, null, true );
    menu$.toggle( event.pageX, event.pageY );
} );
```

### Action Context Example

```javascript
const actions = apex.actions.createContext( "orders-context", apex.jQuery( "#orders" )[0] );

actions.add( {
    name: "orders-refresh",
    label: "Refresh",
    action: function() {
        apex.region( "orders" ).refresh();
    }
} );

apex.jQuery( "#orders_actions_menu" ).menu( {
    actionsContext: actions,
    items: [
        { type: "action", action: "orders-refresh" }
    ]
} );
```

### Notes

- Use `popupMenuLabelId` for accessible popup menu labeling.
- `action` can be a function or an `apex.actions` action name.
- Use `beforeOpen` to enable/disable or hide items based on current selection.
- If menu items are fetched from the server, call the async callback exactly once.

### Related APIs

- menuButton
- apex.actions
- actions
- apex.navigation
---

## menuButton

Source: [Oracle APEX 26.1 JavaScript API Reference](https://docs.oracle.com/en/database/oracle/apex/26.1/aexjs/menuButton.html)

### Purpose

`menuButton` is the APEX widget that turns a button into a launcher for an APEX `menu`. It handles the button/menu relationship, keyboard behavior, ARIA state, and open/close behavior.

### When To Use

Use it for custom buttons that should open a `menu` widget. Prefer built-in APEX button/menu templates or toolbar APIs when working inside standard APEX components.

### API Surface

The generator did not detect method sections for this page, but the documented widget is used as a jQuery UI style APEX widget:

```javascript
apex.jQuery( "#button_id" ).menuButton( options );
```

The options connect the button to a menu, usually by menu element ID or menu options.

### Simple Example

Assuming button `#orders_actions_btn` and menu container `#orders_actions_menu`:

```javascript
apex.jQuery( "#orders_actions_menu" ).menu( {
    items: [
        {
            type: "action",
            label: "Refresh",
            action: function() {
                apex.region( "orders" ).refresh();
            }
        }
    ]
} );

apex.jQuery( "#orders_actions_btn" ).menuButton( {
    menu: "#orders_actions_menu"
} );
```

### Action-Backed Example

```javascript
apex.actions.add( {
    name: "download-orders",
    label: "Download",
    action: function() {
        apex.submit( "DOWNLOAD_ORDERS" );
    }
} );

apex.jQuery( "#orders_actions_menu" ).menu( {
    items: [
        { type: "action", action: "download-orders" }
    ]
} );

apex.jQuery( "#orders_actions_btn" ).menuButton( {
    menu: "#orders_actions_menu"
} );
```

### Notes

- Keep the menu element in the page markup or create it before initializing the button.
- Let `menuButton` open the menu instead of manually binding click handlers when possible.
- Use apex.actions for commands that also need keyboard shortcuts or toolbar integration.

### Related APIs

- menu
- apex.actions
- apex.widget
---

## recordView

Source: [Oracle APEX 26.1 JavaScript API Reference](https://docs.oracle.com/en/database/oracle/apex/26.1/aexjs/recordView.html)

### Purpose

`recordView` displays or edits one record from an APEX client-side `model`. It is a lower-level form-style view widget with fields, field groups, edit mode, toolbar/actions, and active-record synchronization.

### When To Use

Use it when building custom model-backed record forms. For normal APEX page forms, use declarative page items and processes. For Interactive Grid detail views, prefer the higher-level Interactive Grid APIs unless direct `recordView` access is required.

### API Surface

| Area | Members |
| --- | --- |
| Model/record | `modelName`, `getModel`, `getRecord`, `getActiveRecord`, `getActiveRecordId`, `recordOffset` |
| Fields | `fields`, `fieldGroups`, `getFields`, `fieldElement`, `gotoField`, `refreshFields` |
| Edit mode | `editable`, `alwaysEdit`, `setEditMode`, `inEditMode`, `finishEditing`, `setActiveRecordValue` |
| Actions/toolbar | `actionsContext`, `getActions`, `toolbar`, `getToolbar` |
| Lifecycle | `refresh`, `resize`, `focus`, `lockActive`, `unlockActive` |
| Events | `recordchange`, `modechange` |

### Inspect Current Record

```javascript
const rv$ = apex.jQuery( "#order_record" );
const model = rv$.recordView( "getModel" );
const record = rv$.recordView( "getRecord" );

if ( record ) {
    apex.debug.info( "Order", model.getValue( record, "ORDER_ID" ) );
}
```

### Focus A Field With An Error

```javascript
const recordId = rv$.recordView( "getActiveRecordId" );

if ( recordId ) {
    rv$.recordView( "gotoField", recordId, "CUSTOMER_NAME" );
}
```

### Finish Editing Before Save

```javascript
rv$.recordView( "finishEditing" ).then( function() {
    const model = rv$.recordView( "getModel" );
    const promise = model.save();

    if ( promise ) {
        promise.done( function() {
            apex.message.showPageSuccess( "Saved." );
        } );
    }
} );
```

### Notes

- `fields` define how model fields appear; `elementId` binds editable fields to APEX item elements.
- `getModel()` can return a new model after refresh; avoid stale long-lived references.
- `finishEditing()` synchronizes the active editor back into the model.
- Use `lockActive`/`unlockActive` around async work that must not lose the active row.

### Related APIs

- model
- apex.model
- tableModelView
- interactiveGridView
---

## tableModelView

Source: [Oracle APEX 26.1 JavaScript API Reference](https://docs.oracle.com/en/database/oracle/apex/26.1/aexjs/tableModelView.html)

### Purpose

`tableModelView` renders an APEX client-side `model` as repeated table/list/icon items. It builds on `tableModelViewBase` and adds templates, item selection/current item handling, optional `iconList` integration, and record/value lookup methods.

### When To Use

Use it for custom model-backed report/list widgets. For declarative APEX Cards, Template Component reports, Interactive Reports, and Interactive Grids, use the region-specific interface first.

### API Surface

| Area | Members |
| --- | --- |
| Templates | `beforeTemplate`, `recordTemplate`, `afterTemplate`, `headerTemplate`, `aggregateTemplate`, `controlBreakTemplate`, `applyTemplateOptions` |
| Model | `modelName`, `getModel`, `getRecords`, `getActiveRecord`, `getActiveRecordId` |
| Selection/current item | `getSelection`, `setSelection`, `getSelectedRecords`, `setSelectedRecords`, `getSelectedValues`, `setSelectedValues`, `getCurrentItem`, `setCurrentItem`, `getCurrentItemValue`, `setCurrentItemValue`, `selectAll` |
| Paging/lifecycle | `firstPage`, `previousPage`, `nextPage`, `lastPage`, `gotoPage`, `loadMore`, `refresh`, `resize`, `getPageInfo`, `fetchAllData` |
| Icon list | `useIconList`, `iconListOptions`, `getIconList` |
| Editing | `editable`, `finishEditing`, `setActiveRecordValue`, `lockActive`, `unlockActive` |
| Events | `selectionchange`, `currentitemchange`, `pagechange` |

### Selection Example

Assuming a custom view widget is initialized on `#orders_view`:

```javascript
const view$ = apex.jQuery( "#orders_view" );
const model = view$.tableModelView( "getModel" );
const records = view$.tableModelView( "getSelectedRecords" ) || [];

records.forEach( function( record ) {
    apex.debug.info( model.getValue( record, "ORDER_ID" ) );
} );
```

### Select By Model Identity

```javascript
view$.tableModelView( "setSelectedValues", [ "1001", "1002" ], true );
```

### Paging Example

```javascript
const pageInfo = view$.tableModelView( "getPageInfo" );

if ( pageInfo && pageInfo.currentPage < pageInfo.totalPages - 1 ) {
    view$.tableModelView( "nextPage" );
}
```

### Notes

- Selected values are model record identities, usually matching `model.getRecordId(record)`.
- Use `refresh()` when the model or templates change; use `resize()` when the container size changes.
- If `useIconList` is true, `getIconList()` returns the nested `iconList` widget instance.
- Template values must be escaped unless they are trusted and deliberately rendered as markup.

### Related APIs

- tableModelViewBase
- model
- iconList
- cardsRegion
- templateReportRegion
---

## tableModelViewBase

Source: [Oracle APEX 26.1 JavaScript API Reference](https://docs.oracle.com/en/database/oracle/apex/26.1/aexjs/tableModelViewBase.html)

### Purpose

`tableModelViewBase` is the shared base interface for APEX model-backed table/list views. It provides common paging, selection persistence, editing synchronization, status/footer behavior, and model access.

### When To Use

Use it to understand methods shared by `grid`, `tableModelView`, Cards/Template Report style views, and other model-backed views. In app code, call methods on the concrete widget or region interface.

### API Surface

| Area | Members |
| --- | --- |
| Model | `modelName`, `getModel`, `getActiveRecord`, `getActiveRecordId`, `setActiveRecordValue` |
| Paging | `pagination`, `getPageInfo`, `firstPage`, `previousPage`, `nextPage`, `lastPage`, `gotoPage`, `loadMore`, `fetchAllData` |
| Editing | `editable`, `autoAddRecord`, `finishEditing`, `hideDeletedRows`, `lockActive`, `unlockActive` |
| Display | `footer`, `hideEmptyFooter`, `stickyFooter`, `stickyTop`, `showNullAs`, `noDataMessage`, `noDataIcon`, `highlights` |
| Selection behavior | `persistSelection`, `loadIncompleteSelection`, `selectionStatusMessageKey` |
| Progress/status | `progressOptions`, `updateStatus` |
| Types | `pageInfo` |

### Page Info Example

```javascript
const view$ = apex.jQuery( "#orders_view" );
const info = view$.tableModelView( "getPageInfo" );

if ( info ) {
    apex.debug.info( "Rows", info.firstOffset, info.lastOffset, info.total );
}
```

### Fetch All Data Example

Use this only when the data set is reasonably small:

```javascript
view$.tableModelView( "fetchAllData", true );
```

### Finish Editing Example

```javascript
view$.tableModelView( "finishEditing" ).then( function() {
    const model = view$.tableModelView( "getModel" );

    if ( model.isChanged() ) {
        model.save();
    }
} );
```

### Notes

- `gotoPage` uses zero-based page numbers.
- `getPageInfo()` returns null when there is no data.
- `fetchAllData()` can be expensive and should not be used casually on large reports.
- If scroll pagination removes DOM records, use persistent selection when selection must survive virtual paging.

### Related APIs

- tableModelView
- grid
- model
- cardsRegion
- templateReportRegion
---

## treeView

Source: [Oracle APEX 26.1 JavaScript API Reference](https://docs.oracle.com/en/database/oracle/apex/26.1/aexjs/treeView.html)

### Purpose

`treeView` is the APEX widget for hierarchical navigation and editable/selectable trees. It uses a `treeNodeAdapter` for data access and supports selection, expansion state, links, context menus, drag/drop, rename/add/delete, and keyboard behavior.

### When To Use

Use it for custom tree widgets or advanced APEX Tree region initialization. Prefer the declarative APEX Tree region when it can satisfy the requirement.

### API Surface

| Area | Members |
| --- | --- |
| Initialization | `$(".selector").treeView(options)`, `makeDefaultNodeAdapter`, `getNodeAdapter` |
| Expansion | `expand`, `collapse`, `expandAll`, `collapseAll`, `getExpandedNodeIds`, `getExpandedState` |
| Selection | `getSelection`, `setSelection`, `getSelectedNodes`, `setSelectedNodes`, `getNodes`, `getTreeNode` |
| Find/update | `find`, `refresh`, `update`, `focus` |
| Editing | `addNode`, `addNodeInPlace`, `renameNodeInPlace`, `deleteNodes`, `deleteTreeNodes` |
| Drag/drop | `moveNodes`, `copyNodes`, `dragAndDrop`, `beforeStop`, drag option members |
| Events | `activate`, `selectionChange`, `expansionStateChange`, `beginEdit`, `endEdit`, drag events |
| Options | `multiple`, `navigation`, `useLinks`, `showRoot`, `expandRoot`, `autoCollapse`, `contextMenu`, `actionsContext` |

### Simple Tree Example

```javascript
const data = {
    id: "root",
    label: "Application",
    children: [
        { id: "home", label: "Home", link: "f?p=&APP_ID.:1:&SESSION." },
        { id: "orders", label: "Orders", link: "f?p=&APP_ID.:10:&SESSION." }
    ]
};

apex.jQuery( "#app_tree" ).treeView( {
    getNodeAdapter: apex.widget.treeView.makeDefaultNodeAdapter( data, null, true ),
    showRoot: false,
    useLinks: true,
    navigation: true
} );
```

### Selection Example

```javascript
const tree$ = apex.jQuery( "#app_tree" );
const nodes = tree$.treeView( "getSelectedNodes" );

if ( nodes.length ) {
    apex.item( "P10_SELECTED_NODE" ).setValue( nodes[0].id );
}
```

### Save/Restore Expansion Example

```javascript
apex.jQuery( "#app_tree" ).on( "treeviewexpansionstatechange", function() {
    const expanded = apex.jQuery( this ).treeView( "getExpandedNodeIds" );
    apex.item( "P10_EXPANDED_NODES" ).setValue( expanded.join( ":" ), null, true );
} );
```

Use the saved values when creating the adapter:

```javascript
const expanded = ( $v( "P10_EXPANDED_NODES" ) || "" ).split( ":" ).filter( Boolean );
const adapter = apex.widget.treeView.makeDefaultNodeAdapter( data, null, true, expanded );
```

### Find Example

```javascript
const matches$ = apex.jQuery( "#app_tree" ).treeView( "find", {
    depth: -1,
    findAll: true,
    match: function( node ) {
        return /order/i.test( node.label );
    }
} );

matches$.addClass( "findMatch" );
```

### Notes

- `setSelection` expects tree node DOM elements; `setSelectedNodes` expects adapter model nodes.
- `refresh` is for changed children/subtrees; `update` is for changed node display like label/icon/classes.
- Drag/drop and editing require adapter permission methods to allow the operations.
- For APEX Tree region code, confirm the generated region markup/static IDs before calling the widget directly.

### Related APIs

- treeNodeAdapter
- menu
- apex.actions
- apex.widget
---

## Non-namespace APIs

Source: [Oracle APEX 26.1 JavaScript API Reference](https://docs.oracle.com/en/database/oracle/apex/26.1/aexjs/global.html)

### Purpose

Non-namespace APIs are legacy global helpers such as `$v`, `$s`, `$x`, `$nvl`, `$f_*`, `$dom_*`, and `html_*`. They remain documented for compatibility and appear in older APEX code.

### When To Use

Use them mainly when maintaining legacy code or reading older examples. For new code, prefer namespaced APIs such as apex.item, apex.jQuery, apex.util, apex.server, and apex.message.

### API Surface

| Area | Legacy globals |
| --- | --- |
| Item values | `$v`, `$v2`, `$s`, `$v_Array`, `$v_Upper`, `$x_Value` |
| DOM lookup/show/hide | `$x`, `$x_Show`, `$x_Hide`, `$x_Toggle`, `$x_ByClass`, `$x_Class`, `$x_FormItems`, `$x_Remove` |
| Form helpers | `$f_ReturnChecked`, `$f_CheckAll`, `$f_SelectValue`, `$f_SelectedOptions`, `$f_ValuesToArray`, `$f_get_emptys` |
| DOM creation | `$dom_AddInput`, `$dom_AddTag`, `$dom_MakeParent`, `$tr_AddTD`, `$tr_AddTH` |
| Utility | `$nvl`, `$u_Carray`, `$u_Narray`, `html_RemoveAllChildren`, `html_SetSelectValue` |

### Legacy Read/Write Example

```javascript
const oldValue = $v( "P10_STATUS" );
$s( "P10_STATUS", "APPROVED" );
```

Modern equivalent:

```javascript
const oldValue = apex.item( "P10_STATUS" ).getValue();
apex.item( "P10_STATUS" ).setValue( "APPROVED" );
```

### Legacy Show/Hide Example

```javascript
$x_Hide( "P10_INTERNAL_NOTE" );
$x_Show( "P10_PUBLIC_NOTE" );
```

Modern equivalent:

```javascript
apex.item( "P10_INTERNAL_NOTE" ).hide();
apex.item( "P10_PUBLIC_NOTE" ).show();
```

### Checkbox Array Example

```javascript
const checked = $f_ReturnChecked( "f01" );

if ( checked.length > 0 ) {
    apex.debug.info( checked );
}
```

### Notes

- These helpers operate on DOM IDs/elements and can bypass item plug-in behavior.
- `$s` and `apex.item(...).setValue` do not update session state until submit/Ajax save.
- Prefer namespaced APIs for clearer intent, plug-in compatibility, and future maintenance.
- When modernizing, replace `$v`/`$s` first because they are the most common.

### Related APIs

- apex.item
- item
- apex.util
- apex.server
---

## Common Client/Server Recipes

### Mixed Client/Server Recipes

#### Ajax Process Returning JSON

- JavaScript: apex.server
- PL/SQL: APEX_JSON

```javascript
apex.server.process( "GET_STATUS", {
    x01: $v( "P10_ID" )
} ).done( function( data ) {
    apex.message.showPageSuccess( data.message );
} );
```

```sql
begin
    apex_json.open_object;
    apex_json.write('message', 'Ready');
    apex_json.close_object;
end;
/
```

#### Upload/Review/Commit Workflow

- APEX_COLLECTION for staging rows.
- APEX_DATA_PARSER for uploaded CSV/XLSX/JSON/XML parsing.
- APEX_DATA_LOADING when a declarative Data Loading definition should own the import.
- APEX_JSON for Ajax status.
- apex.region to refresh review regions.

Assuming a parsed upload process inserts rows into a collection:

```sql
begin
    apex_collection.create_or_truncate_collection('UPLOAD_REVIEW');
    apex_collection.add_member(
        p_collection_name => 'UPLOAD_REVIEW',
        p_c001            => 'SKU-100',
        p_n001            => 10);
end;
/
```

#### Region Export Workflow

- APEX_REGION when exporting a declarative report region.
- APEX_DATA_EXPORT when exporting a custom `APEX_EXEC` query context.
- interactiveGrid or interactiveReportRegion when a client button controls the current region.

Assuming page 10 has a report region with Static ID `orders_report`:

```sql
declare
    l_region_id number;
    l_export    apex_data_export.t_export;
begin
    l_region_id := apex_region.get_id(
        p_page_id       => 10,
        p_dom_static_id => 'orders_report');

    l_export := apex_region.export_data(
        p_format    => apex_data_export.c_format_xlsx,
        p_page_id   => 10,
        p_region_id => l_region_id,
        p_file_name => 'orders');

    apex_data_export.download(l_export);
end;
/
```

#### Safe Server-Rendered Markup

- APEX_ESCAPE for context-specific escaping.
- APEX_JAVASCRIPT for script files and safe JavaScript config snippets.
- APEX_CSS for component CSS.
- APEX_PLUGIN and APEX_PLUGIN_UTIL when the markup is emitted from a plug-in callback.
- htmlBuilder for small escaped client-side fragments.

Assuming a component renders a region with Static ID `tasks`:

```sql
begin
    apex_css.add_file(
        p_name      => 'tasks',
        p_directory => '#APP_FILES#css/');

    apex_javascript.add_onload_code(
        p_code => 'apex.region("tasks").refresh();',
        p_key  => 'refresh-tasks');

    htp.p('<span title="' ||
          apex_escape.html_attribute(:P10_STATUS) ||
          '">' ||
          apex_escape.html(:P10_LABEL) ||
          '</span>');
end;
/
```

#### Custom Plug-In Component

- APEX_PLUGIN for callback types, result records, and Ajax identifiers.
- APEX_PLUGIN_UTIL for readonly item output, LOV JSON, debug helpers, and REST source plug-in helpers.
- APEX_JAVASCRIPT and APEX_CSS to register plug-in assets.
- apex.item plus item for custom item plug-ins.
- apex.region plus region for custom region plug-ins.
- actions for scoped component commands.

Assuming an item plug-in render callback outputs a custom control:

```sql
sys.htp.p(
    '<input id="' || apex_escape.html_attribute(p_item.name) || '"' ||
    ' name="' || apex_escape.html_attribute(apex_plugin.get_input_name_for_item(false)) || '"' ||
    ' value="' || apex_escape.html_attribute(p_param.value) || '">');
```

Register client behavior so APEX can interact with the custom item:

```javascript
apex.item.create( "P10_RATING", function( baseItem ) {
    const item$ = apex.jQuery( "#P10_RATING" );

    baseItem.getValue = function() {
        return item$.attr( "data-value" ) || "";
    };

    baseItem.setValue = function( value, displayValue, suppressChangeEvent ) {
        item$.attr( "data-value", value || "" );

        if ( !suppressChangeEvent ) {
            item$.trigger( "change" );
        }
    };
} );
```

#### External REST Integration

- APEX_WEB_SERVICE for direct HTTP calls.
- APEX_JSON or `sys.json_object_t` for JSON parsing.
- APEX_EXEC when the REST source is modeled declaratively.

#### Search And Filtered Region UI

- APEX_SEARCH for server-side Search Configuration queries.
- facetsRegion for Faceted Search and Smart Filters.
- cardsRegion, templateReportRegion, or mapRegion for client-side region refresh, paging, selection, and map state.

Assuming an Ajax Callback process receives search text in `apex_application.g_x01`:

```sql
begin
    apex_json.open_array;

    for r in (
        select title, link
          from table(
                   apex_search.search(
                       p_search_static_id => 'ORDERS_SEARCH',
                       p_search_expression => apex_application.g_x01))
         where rownum <= 10
    )
    loop
        apex_json.open_object;
        apex_json.write('title', r.title);
        apex_json.write('link', r.link);
        apex_json.close_object;
    end loop;

    apex_json.close_array;
end;
/
```

Refresh a related Cards region when facets change:

```javascript
apex.jQuery( "#order_facets" ).on( "change", function() {
    apex.region( "orders_cards" ).refresh();
} );
```

#### Markdown And Generated Content

- APEX_MARKDOWN for rendering Markdown returned by users, services, or AI.
- APEX_ESCAPE when outputting values in HTML, attributes, JavaScript, JSON, CSV, LDAP, or regex contexts.
- APEX_AI when the Markdown comes from an APEX AI service or AI Agent response.

```sql
begin
    htp.p(
        apex_markdown.to_html(
            p_markdown            => :P10_AI_RESPONSE_MD,
            p_embedded_html_mode  => apex_markdown.c_embedded_html_escape));
end;
/
```

#### Document, Barcode, And Download Output

- APEX_PRINT for printable documents based on report layouts or uploaded templates.
- APEX_BARCODE for QR codes and barcode payloads.
- APEX_HTTP for emitting BLOB/CLOB file responses.

Assuming a page process should download a QR PNG:

```sql
declare
    l_blob blob;
begin
    l_blob := apex_barcode.get_qrcode_png(
        p_value => apex_page.get_url(p_page => 10),
        p_scale => 6);

    apex_http.download(
        p_blob         => l_blob,
        p_filename     => 'page-link.png',
        p_content_type => 'image/png');

    apex_application.stop_apex_engine;
end;
/
```

#### Export/Import Deployment

- APEX_EXPORT to export SQL, APEXlang, embedded code, or split files.
- APEX_APPLICATION_INSTALL to import with workspace, schema, ID, offset, build status, and remote server remaps.
- APEX_APPLICATION_ADMIN for post-install application status and build status changes.

Assuming app `100` should be cloned into workspace `EXAMPLE_WS`:

```sql
declare
    l_source apex_t_export_files;
begin
    l_source := apex_export.get_application(
        p_application_id          => 100,
        p_type                    => apex_export.c_type_sql,
        p_split                   => false,
        p_with_supporting_objects => 'Y');

    apex_application_install.clear_all;
    apex_application_install.set_workspace('EXAMPLE_WS');
    apex_application_install.set_schema('EXAMPLE_APP');
    apex_application_install.generate_application_id;
    apex_application_install.generate_offset;
    apex_application_install.set_build_status('RUN_ONLY');
    apex_application_install.install(l_source);
end;
/
```

#### PWA Push Notification Flow

- apex.pwa for install and push subscription UI.
- APEX_PWA for server-side subscription checks and notifications.
- APEX_PAGE for target URLs.

Client-side subscription:

```javascript
if ( !( await apex.pwa.hasPushSubscription() ) ) {
    await apex.pwa.subscribePushNotifications();
}
```

Server-side notification:

```sql
begin
    if apex_pwa.has_push_subscription(
        p_application_id => :APP_ID,
        p_user_name      => :APP_USER)
    then
        apex_pwa.send_push_notification(
            p_user_name  => :APP_USER,
            p_title      => 'Export ready',
            p_body       => 'Your requested export is available.',
            p_target_url => apex_page.get_url(p_page => 20));
    end if;
end;
/
```
