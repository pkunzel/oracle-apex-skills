# apex.model

Source: [Oracle APEX 26.1 JavaScript API Reference](https://docs.oracle.com/en/database/oracle/apex/26.1/aexjs/apex.model.html)

Status: curated first-pass reference.

## Purpose

`apex.model` manages client-side data models used by APEX components such as Interactive Grid and custom model-based widgets. It can create local models, inspect models, check for changes/errors, fetch multiple models, and save changed model data.

Most app code interacts with component-specific model APIs rather than creating models directly. Use `apex.model` when coordinating model changes across components or building advanced custom components.

## Common Member Groups

| Need | Members |
| --- | --- |
| Create/access/release | `create`, `get`, `release`, `destroy` |
| Inspect page state | `anyChanges`, `anyErrors`, `list` |
| Save/fetch | `save`, `multipleFetch`, `addChangesToSaveRequest` |
| Cache control | `getMaxCachedModels`, `setMaxCachedModels` |

## Check Unsaved Model Changes

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

## Save Changed Models

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

## Interactive Grid Model Access

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

## Local Model Pattern

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

## Safety Guidance

- Release models you explicitly get or create when done.
- Check `anyErrors` before saving.
- For Interactive Grid, prefer region/view/model APIs instead of direct DOM scraping.
- Do not assume model changes are authorized; server-side DML validation still matters.
- Use component-specific APIs when they better describe the task.

