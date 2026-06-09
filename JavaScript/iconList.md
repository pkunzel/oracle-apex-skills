# iconList

Source: [Oracle APEX 26.1 JavaScript API Reference](https://docs.oracle.com/en/database/oracle/apex/26.1/aexjs/iconList.html)

Status: curated first-pass reference.

## Purpose

`iconList` is an APEX widget for keyboard-accessible icon/list selection and navigation. It is used by other APEX components and can also support custom selectable icon lists.

## When To Use

Use it when implementing custom client-side list selection with icon/list markup. Prefer built-in APEX components where possible; they already handle accessibility, selection state, and server integration.

## API Surface

| Area | Members |
| --- | --- |
| Setup options | `multiple`, `navigation`, `itemSelector`, `addItemSelector`, `label`, `tabbableContent`, `noNavKeyContent`, `contextMenu`, `contextMenuAction` |
| Selection | `getSelection`, `getSelectionValues`, `setSelection` |
| Layout | `getRows`, `getColumns`, `resize`, `refresh` |
| Focus | `focus` |
| Events | `activate`, `selectionchange` |

## Initialization Example

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

## Selection Example

```javascript
const list$ = apex.jQuery( "#status_picker" );
const values = list$.iconList( "getSelectionValues" );

apex.item( "P10_SELECTED_STATUS" ).setValue( values.join( ":" ) );
```

## Programmatic Selection Example

```javascript
const list$ = apex.jQuery( "#status_picker" );
const item$ = list$.find( ".status-card[data-value='CLOSED']" );

list$.iconList( "setSelection", item$, true );
```

## Notes

- If `navigation` is true, the widget behaves as navigation rather than selection.
- `label` controls type-to-select behavior; keep labels visible or discoverable for keyboard users.
- Call `resize` after container size changes and `refresh` after changing the list content.
- Selection values come from `data-value` attributes.

## Related APIs

- [tableModelView](tableModelView.md) when icon lists are backed by an APEX model.
- [menu](menu.md) for context menus.
- [apex.item](apex.item.md) for syncing selected values with page items.
