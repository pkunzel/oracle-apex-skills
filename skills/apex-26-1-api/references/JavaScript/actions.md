# actions

Source: [Oracle APEX 26.1 JavaScript API Reference](https://docs.oracle.com/en/database/oracle/apex/26.1/aexjs/actions.html)

Status: curated first-pass reference.

## Purpose

`actions` is the interface that manages a collection of APEX action objects. The global context is `apex.actions`; component-specific contexts are created with `apex.actions.createContext`. Actions centralize command names, labels, icons, enabled/hidden state, shortcuts, and behavior so buttons, menus, keyboard shortcuts, and component code stay in sync.

Use [apex.actions](apex.actions.md) for namespace-level context creation and lookup. This page focuses on methods available on an actions context.

## When To Use

Use actions when the same operation can be invoked from more than one UI place, or when a reusable component needs commands with state.

Good fits:

- Toolbar buttons and menu items that invoke the same command.
- Keyboard shortcuts.
- Toggle commands such as "show closed tasks".
- Radio-choice commands such as "card/list/table view".
- Row-level actions in report-like components.
- Custom region or widget command registries.

## API Surface

| Need | Members |
| --- | --- |
| Add/remove actions | `add`, `addFromMarkup`, `remove`, `clear` |
| Invoke or inspect | `invoke`, `lookup`, `list`, `get`, `set`, `toggle` |
| UI state | `enable`, `disable`, `show`, `hide`, `update`, `updateChoices` |
| Shortcuts | `addShortcut`, `removeShortcut`, `listShortcuts`, `shortcutDisplay`, `ariaKeyshortcut`, `enableShortcuts`, `disableShortcuts` |
| Observers | `observe`, `unobserve` |
| Metadata | `context`, `typeName`, `action`, `shortcutName`, `shortcutListItem` |

## Add A Scoped Action Context

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

## Invoke, Enable, Disable

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

## Toggle Action

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

## Radio Group Action

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

## Row-Level Actions

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

## Shortcuts

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

## Observers

Use observers when custom UI needs to react to action changes that APEX does not update automatically.

```javascript
function syncToolbar( action, operation, args ) {
    apex.debug.info( "Action changed: " + action.name + " " + operation );
}

taskActions.observe( syncToolbar );

// Later:
taskActions.unobserve( syncToolbar );
```

## Cleanup

If a component creates a scoped context and later removes its DOM, remove the context too.

```javascript
apex.actions.removeContext(
    "taskBoard",
    document.getElementById( "task_board" )
);
```

## Safety Notes

- Use stable action names such as `complete-task`, not labels.
- Keep destructive actions behind confirmations.
- Use scoped contexts for reusable components so shortcuts and commands do not collide globally.
- Avoid shortcuts that conflict with the browser, operating system, or assistive technology.
- Call `update` after direct action object changes.
- Remove custom contexts when their DOM is destroyed.
- Treat action arguments from markup as client input; validate again on the server.

## Related APIs

- [apex.actions](apex.actions.md) for global context and context factory methods.
- [region](region.md) and [apex.region](apex.region.md) for component-scoped region actions.
- [interactiveGrid](interactiveGrid.md) for built-in grid action contexts.
- [menu](menu.md) and [menuButton](menuButton.md) for menu UIs bound to actions.
- [apex.server](apex.server.md) for action-driven Ajax work.
