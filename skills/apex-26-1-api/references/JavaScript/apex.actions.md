# apex.actions

Source: [Oracle APEX 26.1 JavaScript API Reference](https://docs.oracle.com/en/database/oracle/apex/26.1/aexjs/apex.actions.html)

Status: curated first-pass reference.

## Purpose

`apex.actions` is the global action registry and factory for scoped action contexts. Actions connect commands, keyboard shortcuts, menus, buttons, and component-specific behavior. They are especially important for Interactive Grid, custom widgets, menus, and reusable components.

Use actions when the same command should be invoked from multiple UI affordances or keyboard shortcuts.

## Concepts

- The global actions context is `apex.actions`.
- Scoped contexts are created with `apex.actions.createContext(typeName, element)`.
- An action has a `name`, `label`, optional `shortcut`, optional state, and an `action` function.
- UI elements can bind to actions through APEX action markup and component integration.

## API Surface

| Need | Members |
| --- | --- |
| Create/find contexts | `createContext`, `findContext`, `findContextById`, `removeContext` |
| Manage global shortcuts | `shortcutSupport`, `setKeyCaps`, `getKeyCaps` |
| Inspect contexts | `getContextTypes`, `getContextsForType` |
| Context methods | `add`, `remove`, `lookup`, `invoke`, `enable`, `disable`, `hide`, `show`, `update`, `observe` |

## Add A Global Action

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

## Scoped Action Context

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

## Update Action State

```javascript
const action = apex.actions.lookup( "refresh-orders" );

if ( action ) {
    action.label = "Refresh Open Orders";
    apex.actions.update( "refresh-orders" );
}
```

## Keyboard Shortcut Control

Disable all shortcuts temporarily:

```javascript
const previous = apex.actions.shortcutSupport();
apex.actions.shortcutSupport( "off" );

// Later:
apex.actions.shortcutSupport( previous );
```

Use shortcuts sparingly and avoid conflicts with browser, operating system, and assistive technology shortcuts.

## Safety Guidance

- Use stable action names such as `refresh-orders`, not display labels.
- Put destructive commands behind confirmation.
- Update action enabled/disabled state when selection or context changes.
- Clean up custom contexts with `removeContext` if the DOM region is removed.
- Prefer scoped contexts for reusable components so shortcuts only apply when focus is inside the component.
