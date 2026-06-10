# apex.theme

Source: [Oracle APEX 26.1 JavaScript API Reference](https://docs.oracle.com/en/database/oracle/apex/26.1/aexjs/apex.theme.html)

Status: curated first-pass reference.

## Purpose

`apex.theme` provides theme-level helpers for opening/closing supported regions, testing media queries, and showing field help. It is most useful with Universal Theme components such as inline dialogs, inline popups, collapsible regions, and responsive behavior.

Use region-specific APIs when available. Use `apex.theme` when the behavior belongs to the theme implementation.

## When To Use

Use `apex.theme` when:

- JavaScript should open or close an inline dialog, inline popup, or collapsible region.
- Code needs to check a CSS media query in a way consistent with browser `matchMedia`.
- Theme or template code needs to show standard item help.

Avoid using theme helpers as a substitute for business logic. Keep region state and data logic in region APIs or server-side code.

## Open And Close Regions

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

## Responsive Branch

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

## Field Help

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

## Notes

- `openRegion` and `closeRegion` return the jQuery object for the region.
- Not every region type supports theme open/close methods.
- Use `apex.region( staticId ).refresh()` for data refresh; use `apex.theme.openRegion` for theme-controlled visibility.
- Prefer declarative Dynamic Actions for simple open/close flows.

## API Surface

| Member | Parameters | Returns |
| --- | --- | --- |
| `closeRegion` | `pRegion` | The jQuery object of the region. Type jQuery Example The following example closes an inline dialog region with HTML DOM id myDialog . |
| `mq` | `pMediaQuery` | true if the media query matches. Type boolean Example After each time the window is resized check and log a message if the viewport is at least 640 pixels wide. |
| `openRegion` | `pRegion` | The jQuery object of the region. Type jQuery Example The following example opens an inline dialog region with HTML DOM id myDialog . |
| `popupFieldHelp` | `pItemId`, `pSessionId`, `pUrl` | Not documented |

## closeRegion

Signature: `(static) closeRegion (pRegion) &rarr; {jQuery}`

### Purpose

Close a region that supports being opened such as an inline dialog, inline popup, or collapsible region. For a region to support this function, it must be implemented with a jQuery UI widget that supports either open and close methods or expand and collapse methods.

### Parameters

| Name | Type | Description |
| --- | --- | --- |
| `pRegion` | string | jQuery | The region to close. Either the region HTML DOM id string or a jQuery object. |

### Returns

The jQuery object of the region. Type jQuery Example The following example closes an inline dialog region with HTML DOM id myDialog .

### Simple Example

```javascript
apex.theme.closeRegion( "quick_edit_dialog" );
```

## mq

Signature: `(static) mq (pMediaQuery) &rarr; {boolean}`

### Purpose

Test a media query. Return true if the document matches the given media query string and false otherwise. This is a wrapper around window.matchMedia .

### Parameters

| Name | Type | Description |
| --- | --- | --- |
| `pMediaQuery` | string | The media query to test. For example: (min-width: 400px) |

### Returns

true if the media query matches. Type boolean Example After each time the window is resized check and log a message if the viewport is at least 640 pixels wide.

### Simple Example

```javascript
if ( apex.theme.mq( "(min-width: 640px)" ) ) {
    apex.region( "orders" ).refresh();
}
```

## openRegion

Signature: `(static) openRegion (pRegion) &rarr; {jQuery}`

### Purpose

Open a region that supports being opened such as an inline dialog, inline popup, or collapsible region. For a region to support this function, it must be implemented with a jQuery UI widget that supports either open and close methods or expand and collapse methods.

### Parameters

| Name | Type | Description |
| --- | --- | --- |
| `pRegion` | string | jQuery | The region to open. Either the region HTML DOM id string or a jQuery object. |

### Returns

The jQuery object of the region. Type jQuery Example The following example opens an inline dialog region with HTML DOM id myDialog .

### Simple Example

```javascript
apex.theme.openRegion( "quick_edit_dialog" );
```

## popupFieldHelp

Signature: `(static) popupFieldHelp (pItemId, pSessionId opt , pUrl opt )`

### Purpose

Display a standard item help dialog. This function may be useful for theme developers. Theme requirements for the label Help Template:

### Parameters

| Name | Type | Description |
| --- | --- | --- |
| `pItemId` | string | Object |  item id to display help for or an object with properties helpText , and title . When an object is given the other parameters are ignored. |
| `pSessionId` | string |  Current session id |
| `pUrl` | string |  Override to specify the URL to use to fetch the help content. It should not include the p_output_format param. This is an advanced parameter that is normally not needed. |

### Simple Example

```javascript
apex.theme.popupFieldHelp(
    "P1_ITEM",
    "P1_ITEM",
    "Example"
);
```

## Notes

- Run APEX JavaScript APIs from an APEX page where the `apex` namespace is loaded.
- Treat client-side values as untrusted when they reach PL/SQL.
- Prefer documented APIs over direct DOM or internal widget state when interacting with APEX components.
