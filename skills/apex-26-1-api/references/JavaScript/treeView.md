# treeView

Source: [Oracle APEX 26.1 JavaScript API Reference](https://docs.oracle.com/en/database/oracle/apex/26.1/aexjs/treeView.html)

Status: curated first-pass reference.

## Purpose

`treeView` is the APEX widget for hierarchical navigation and editable/selectable trees. It uses a `treeNodeAdapter` for data access and supports selection, expansion state, links, context menus, drag/drop, rename/add/delete, and keyboard behavior.

## When To Use

Use it for custom tree widgets or advanced APEX Tree region initialization. Prefer the declarative APEX Tree region when it can satisfy the requirement.

## API Surface

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

## Simple Tree Example

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

## Selection Example

```javascript
const tree$ = apex.jQuery( "#app_tree" );
const nodes = tree$.treeView( "getSelectedNodes" );

if ( nodes.length ) {
    apex.item( "P10_SELECTED_NODE" ).setValue( nodes[0].id );
}
```

## Save/Restore Expansion Example

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

## Find Example

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

## Notes

- `setSelection` expects tree node DOM elements; `setSelectedNodes` expects adapter model nodes.
- `refresh` is for changed children/subtrees; `update` is for changed node display like label/icon/classes.
- Drag/drop and editing require adapter permission methods to allow the operations.
- For APEX Tree region code, confirm the generated region markup/static IDs before calling the widget directly.

## Related APIs

- [treeNodeAdapter](treeNodeAdapter.md)
- [menu](menu.md)
- [apex.actions](apex.actions.md)
- [apex.widget](apex.widget.md)
