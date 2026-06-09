# treeNodeAdapter

Source: [Oracle APEX 26.1 JavaScript API Reference](https://docs.oracle.com/en/database/oracle/apex/26.1/aexjs/treeNodeAdapter.html)

Status: curated first-pass reference.

## Purpose

`treeNodeAdapter` is the data adapter interface used by `treeView`. It tells the view how to read nodes, labels, icons, links, child state, expanded state, edit permissions, drag/drop behavior, and lazy-loaded children.

## When To Use

Use it when creating a custom `treeView` or customizing the adapter returned by `treeView.makeDefaultNodeAdapter`. Normal APEX Tree regions often configure this indirectly through region attributes and initialization code.

## API Surface

| Area | Members |
| --- | --- |
| Tree structure | `root`, `child`, `childCount`, `hasChildren`, `fetchChildNodes` |
| Node display | `getLabel`, `getIcon`, `getClasses`, `getAccDescription`, `getLink`, `getLinkTarget`, `renderNodeContent` |
| State | `setViewId`, `getViewId`, `clearViewId`, `setExpanded`, `isExpanded`, `getExpandedNodeIds`, `getExpandedState`, `isHidden`, `isDisabled` |
| Editing | `allowAdd`, `addNode`, `allowRename`, `renameNode`, `allowDelete`, `deleteNode` |
| Drag/drop | `allowDrag`, `dragOperations`, `moveNodes`, `copyNodes` |
| Types | `node`, `defaultNode`, `typeInfo` |

## Default Adapter Example

```javascript
const data = {
    id: "root",
    label: "Root",
    children: [
        { id: "orders", label: "Orders", icon: "fa fa-table" },
        { id: "customers", label: "Customers", icon: "fa fa-users" }
    ]
};

const adapter = apex.widget.treeView.makeDefaultNodeAdapter(
    data,
    null,
    true,
    [ "root" ] );
```

## Lazy Loading Pattern

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

## Permission Pattern

```javascript
adapter.allowDelete = function( node ) {
    return node.type !== "system";
};

adapter.allowRename = function( node ) {
    return !node.isDisabled;
};
```

## Notes

- All node access should go through adapter methods; do not make the view depend on raw node shape unless you own the adapter.
- Lazy child loading uses `childCount`/`hasChildren` returning null and `fetchChildNodes` later calling its callback.
- Adapter callbacks must be called exactly once.
- Escape labels in custom rendering unless the content is trusted.

## Related APIs

- [treeView](treeView.md)
- [htmlBuilder](htmlBuilder.md)
- [apex.server](apex.server.md)
- [apex.widget](apex.widget.md)
