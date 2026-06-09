# apex.storage

Source: [Oracle APEX 26.1 JavaScript API Reference](https://docs.oracle.com/en/database/oracle/apex/26.1/aexjs/apex.storage.html)

Status: curated first-pass reference.

## Purpose

`apex.storage` wraps browser cookie, localStorage, and sessionStorage behavior with APEX-friendly helpers. The most useful members are scoped local/session storage wrappers that prefix keys by application, page, region, or a custom prefix so components do not collide.

Storage is client-side state. Do not use it for secrets, authorization, trusted preferences, or anything the server must enforce.

## When To Use

Use `apex.storage` when:

- A page needs to remember client-only UI preferences such as panel state, selected tabs, or display density.
- A component should store values without colliding with another application, page, or region.
- A plug-in needs a storage wrapper that still behaves safely when browser storage support is unavailable.
- Code needs to read or set a simple browser cookie.

## Curated Patterns

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

## Safety Guidance

- Never store passwords, API keys, OAuth tokens, private data, or authorization decisions in browser storage.
- Treat stored values as user-controlled when sending them back to PL/SQL.
- Use scoped wrappers instead of raw `localStorage` keys.
- Keep stored values small; large payloads belong on the server.
- Browser storage can be unavailable or cleared by the user, so code must have defaults.

## Generated API Surface

| Member | Parameters | Returns |
| --- | --- | --- |
| `getCookie` | `pName` | The string value of the cookie. Type string Example Returns the value of the cookie TEST |
| `getScopedLocalStorage` | `options` | A localStorage wrapper object. Type localStorage Example Creates a local storage object that scopes all the keys using a prefix "Acme" and the application id. It then sets and gets an item called "setting1" . |
| `getScopedSessionStorage` | `options` | A sessionStorage wrapper object. Type sessionStorage Example Creates a session storage object that scopes all the keys using a prefix "Acme" and the application id. It then sets and gets an item called "setting1" . |
| `hasLocalStorageSupport` | None documented | true if the browser supports the local storage API and false otherwise. Type boolean Example Sets the local storage "setting1" to on if local storage is supported by the browser. |
| `hasSessionStorageSupport` | None documented | true if the browser supports the session storage API and false otherwise. Type boolean Example Sets the session storage "setting1" to on if session storage is supported by the browser. |
| `setCookie` | `pName`, `pValue` | Not documented |
| `storageWrapper` | None documented | Not documented |

## getCookie

Signature: `(static) getCookie (pName) &rarr; {string}`

### Purpose

Returns the value of the specified cookie.

### Parameters

| Name | Type | Description |
| --- | --- | --- |
| `pName` | string | The name of the cookie. |

### Returns

The string value of the cookie. Type string Example Returns the value of the cookie TEST

### Simple Example

```javascript
apex.storage.getCookie(
    "MY_PROCESS"
);
```

### More Complex Example

```javascript
// Assuming this code runs on an Oracle APEX page where apex.storage is loaded.
const result = apex.storage.getCookie(
    "MY_PROCESS"
);
if ( result && typeof result.done === "function" ) {
    result.done( function( data ) {
        console.log( data );
    } ).fail( function( jqXHR, textStatus, errorThrown ) {
        apex.debug.error( textStatus, errorThrown );
    } );
}
```

## getScopedLocalStorage

Signature: `(static) getScopedLocalStorage (options) &rarr; {localStorage}`

### Purpose

Returns a thin wrapper around the localStorage object that scopes all keys to a prefix defined by the options parameter. If localStorage is not supported, the returned object can be used but has no effect, so it is not necessary to test for support using apex.storage.hasLocalStorageSupport before calling this function.

### Parameters

| Name | Type | Description |
| --- | --- | --- |
| `options` | Object | An object used to define the scope of the local storage. This defines the storage key prefix used by the localStorage wrapper object. Properties Name Type Attributes Description |

### Option/Object Properties

| Name | Type | Description |
| --- | --- | --- |
| `prefix` | string |  A static prefix string to add to all keys. The default is an empty string. |
| `useAppId` | boolean |  Whether the application id will be included in the key. The default is true. |
| `usePageId` | boolean |  Whether the application page id will be included in the key. The default is false. |
| `regionId` | string |  An additional string to identify a region or other part of a page. The default is an empty string. |

### Returns

A localStorage wrapper object. Type localStorage Example Creates a local storage object that scopes all the keys using a prefix "Acme" and the application id. It then sets and gets an item called "setting1" .

### Simple Example

```javascript
apex.storage.getScopedLocalStorage(
    {}
);
```

### More Complex Example

```javascript
// Assuming this code runs on an Oracle APEX page where apex.storage is loaded.
const result = apex.storage.getScopedLocalStorage(
    {}
);
if ( result && typeof result.done === "function" ) {
    result.done( function( data ) {
        console.log( data );
    } ).fail( function( jqXHR, textStatus, errorThrown ) {
        apex.debug.error( textStatus, errorThrown );
    } );
}
```

## getScopedSessionStorage

Signature: `(static) getScopedSessionStorage (options) &rarr; {sessionStorage}`

### Purpose

Returns a thin wrapper around the sessionStorage object that scopes all keys to a prefix defined by the options parameter. If sessionStorage is not supported, the returned object can be used but has no effect, so it is not necessary to test for support using apex.storage.hasSessionStorageSupport before calling this function.

### Parameters

| Name | Type | Description |
| --- | --- | --- |
| `options` | Object | An object used to define the scope of the session storage. This defines the storage key prefix used by the sessionStorage wrapper object. Properties Name Type Attributes Description |

### Option/Object Properties

| Name | Type | Description |
| --- | --- | --- |
| `prefix` | string |  A static prefix string to add to all keys. The default is an empty string. |
| `useAppId` | boolean |  Whether the application id will be included in the key. The default is true. |
| `usePageId` | boolean |  Whether the application page id will be included in the key. The default is false. |
| `regionId` | string |  An additional string to identify a region or other part of a page. The default is an empty string. |

### Returns

A sessionStorage wrapper object. Type sessionStorage Example Creates a session storage object that scopes all the keys using a prefix "Acme" and the application id. It then sets and gets an item called "setting1" .

### Simple Example

```javascript
apex.storage.getScopedSessionStorage(
    {}
);
```

### More Complex Example

```javascript
// Assuming this code runs on an Oracle APEX page where apex.storage is loaded.
const result = apex.storage.getScopedSessionStorage(
    {}
);
if ( result && typeof result.done === "function" ) {
    result.done( function( data ) {
        console.log( data );
    } ).fail( function( jqXHR, textStatus, errorThrown ) {
        apex.debug.error( textStatus, errorThrown );
    } );
}
```

## hasLocalStorageSupport

Signature: `(static) hasLocalStorageSupport () &rarr; {boolean}`

### Purpose

Returns true if the browser supports the local storage API and false otherwise. Most modern browsers support this feature but some allow the user to turn it off.

### Returns

true if the browser supports the local storage API and false otherwise. Type boolean Example Sets the local storage "setting1" to on if local storage is supported by the browser.

### Simple Example

```javascript
apex.storage.hasLocalStorageSupport();
```

### More Complex Example

```javascript
// Assuming this code runs on an Oracle APEX page where apex.storage is loaded.
const result = apex.storage.hasLocalStorageSupport();
if ( result && typeof result.done === "function" ) {
    result.done( function( data ) {
        console.log( data );
    } ).fail( function( jqXHR, textStatus, errorThrown ) {
        apex.debug.error( textStatus, errorThrown );
    } );
}
```

## hasSessionStorageSupport

Signature: `(static) hasSessionStorageSupport () &rarr; {boolean}`

### Purpose

Returns true if the browser supports the session storage API and false otherwise. Most modern browsers support this feature but some allow the user to turn it off.

### Returns

true if the browser supports the session storage API and false otherwise. Type boolean Example Sets the session storage "setting1" to on if session storage is supported by the browser.

### Simple Example

```javascript
apex.storage.hasSessionStorageSupport();
```

### More Complex Example

```javascript
// Assuming this code runs on an Oracle APEX page where apex.storage is loaded.
const result = apex.storage.hasSessionStorageSupport();
if ( result && typeof result.done === "function" ) {
    result.done( function( data ) {
        console.log( data );
    } ).fail( function( jqXHR, textStatus, errorThrown ) {
        apex.debug.error( textStatus, errorThrown );
    } );
}
```

## setCookie

Signature: `(static) setCookie (pName, pValue)`

### Purpose

Sets a cookie to the specified value.

### Parameters

| Name | Type | Description |
| --- | --- | --- |
| `pName` | string | The name of the cookie. |
| `pValue` | String | The value to set the cookie to. |

### Simple Example

```javascript
apex.storage.setCookie(
    "MY_PROCESS",
    "Example"
);
```

### More Complex Example

```javascript
// Assuming this code runs on an Oracle APEX page where apex.storage is loaded.
const result = apex.storage.setCookie(
    "MY_PROCESS",
    "Example"
);
if ( result && typeof result.done === "function" ) {
    result.done( function( data ) {
        console.log( data );
    } ).fail( function( jqXHR, textStatus, errorThrown ) {
        apex.debug.error( textStatus, errorThrown );
    } );
}
```

## storageWrapper

Signature: `storageWrapper`

### Purpose

A storage wrapper object. This object has the same properties and functions as the native browser Storage interface.

### Option/Object Properties

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

### Simple Example

```javascript
apex.storage.storageWrapper();
```

### More Complex Example

```javascript
// Assuming this code runs on an Oracle APEX page where apex.storage is loaded.
const result = apex.storage.storageWrapper();
if ( result && typeof result.done === "function" ) {
    result.done( function( data ) {
        console.log( data );
    } ).fail( function( jqXHR, textStatus, errorThrown ) {
        apex.debug.error( textStatus, errorThrown );
    } );
}
```

## Notes

- Run APEX JavaScript APIs from an APEX page where the `apex` namespace is loaded.
- Treat client-side values as untrusted when they reach PL/SQL.
- Prefer documented APIs over direct DOM or internal widget state when interacting with APEX components.
