# apex.lang

Source: [Oracle APEX 26.1 JavaScript API Reference](https://docs.oracle.com/en/database/oracle/apex/26.1/aexjs/apex.lang.html)

Status: curated first-pass reference.

## Purpose

`apex.lang` manages client-side translatable text messages and message formatting. Use it to read application text messages that are available to JavaScript, load additional messages, and safely substitute values into localized strings.

Most formatting functions escape replacement values by default. The `NoEscape` variants are for carefully controlled contexts only.

## When To Use

Use `apex.lang` when:

- JavaScript needs localized labels, status text, alerts, or success/error messages.
- A plug-in needs component-specific translatable messages.
- Client code needs to load text messages lazily from the server.
- A message should include dynamic values without concatenating strings by hand.

## Curated Patterns

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

## Safety Guidance

- Prefer `formatMessage` and `format` because replacement values are escaped.
- Mark APEX text messages as available to JavaScript when they must be loaded on the client.
- Treat missing messages as bugs: `getMessage` returns the key when the key is not found.
- Do not use localized client text as a server-side security decision.
- Avoid `clearMessages` unless a test or specialized component fully owns the message set.

## Generated API Surface

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

## addMessages

Signature: `(static) addMessages (pMessages)`

### Purpose

Add messages for use by apex.lang.getMessage and the format functions. Can be called multiple times. Additional messages are merged. It is generally not necessary to call this function, because it is automatically called with all the application text messages that have attribute Used in JavaScript set to on.

### Parameters

| Name | Type | Description |
| --- | --- | --- |
| `pMessages` | Object | An object whose properties are message keys (names), and the values are localized message text. |

### Simple Example

```javascript
apex.lang.addMessages(
    null
);
```

### More Complex Example

```javascript
// Assuming this code runs on an Oracle APEX page where apex.lang is loaded.
const result = apex.lang.addMessages(
    null
);
if ( result && typeof result.done === "function" ) {
    result.done( function( data ) {
        console.log( data );
    } ).fail( function( jqXHR, textStatus, errorThrown ) {
        apex.debug.error( textStatus, errorThrown );
    } );
}
```

## clearMessages

Signature: `(static) clearMessages ()`

### Purpose

Remove all messages. This method is rarely needed. Many Oracle APEX components rely on client-side messages, so if you clear the messages you need to add any needed messages again.

### Simple Example

```javascript
apex.lang.clearMessages();
```

### More Complex Example

```javascript
// Assuming this code runs on an Oracle APEX page where apex.lang is loaded.
const result = apex.lang.clearMessages();
if ( result && typeof result.done === "function" ) {
    result.done( function( data ) {
        console.log( data );
    } ).fail( function( jqXHR, textStatus, errorThrown ) {
        apex.debug.error( textStatus, errorThrown );
    } );
}
```

## format

Signature: `(static) format (pPattern, &hellip;pValues) &rarr; {string}`

### Purpose

Formats a message. Same as apex.lang.formatMessage except the message pattern is given directly. It is already localized or isn't supposed to be. It is not a key. The replacement arguments are HTML escaped.

### Parameters

| Name | Type | Description |
| --- | --- | --- |
| `pPattern` | string |  The message pattern. |

### Option/Object Properties

| Name | Type | Description |
| --- | --- | --- |
| `pValues` | * |  If using positional parameters, any number of replacement values, one for each message parameter %0 to %9. If using named parameters, a single object with name value pairs. Non string arguments are converted to strings. |

### Returns

The formatted message text. Type string Examples This example using positional parameters returns "Total cost: $34.00" assuming the orderTotal variable equals "34.00". This example using named parameters returns "Total cost: $34.00" assuming the orderTotal variable equals "34.00".

### Simple Example

```javascript
apex.lang.format(
    null,
    "Example"
);
```

### More Complex Example

```javascript
// Assuming this code runs on an Oracle APEX page where apex.lang is loaded.
const result = apex.lang.format(
    null,
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

## formatMessage

Signature: `(static) formatMessage (pKey, &hellip;pValues) &rarr; {string}`

### Purpose

Format a message. Parameters in the message are replaced with the corresponding function argument. Parameters can be named parameters (for example %process %complete) or positional parameters %0 to %9

### Parameters

| Name | Type | Description |
| --- | --- | --- |
| `pKey` | string |  The message key. The key is used to lookup the localized message text as if with getMessage. |

### Option/Object Properties

| Name | Type | Description |
| --- | --- | --- |
| `pValues` | * |  If using positional parameters, any number of replacement values, one for each message parameter %0 to %9. If using named parameters, a single object with name value pairs. Non string arguments are converted to strings. |

### Returns

The localized and formatted message text. If the key is not found then the key is returned. Type string Examples This example using positional parameters returns "Process 60% complete" when the PROCESS_STATUS message text is "Process %0% complete" and the progress variable value is 60. This example using named parameters returns "Process 60% complete" when the PROCESS_STATUS message text is "Process %processComplete% complete" and the progress variable value is 60.

### Simple Example

```javascript
apex.lang.formatMessage(
    null,
    "Example"
);
```

### More Complex Example

```javascript
// Assuming this code runs on an Oracle APEX page where apex.lang is loaded.
const result = apex.lang.formatMessage(
    null,
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

## formatMessageNoEscape

Signature: `(static) formatMessageNoEscape (pKey, &hellip;pValues) &rarr; {string}`

### Purpose

Same as apex.lang.formatMessage except the replacement arguments are not HTML escaped. They must be known to be safe or will be used in a context that is safe.

### Parameters

| Name | Type | Description |
| --- | --- | --- |
| `pKey` | string |  The message key. The key is used to lookup the localized message text as if with getMessage. |

### Option/Object Properties

| Name | Type | Description |
| --- | --- | --- |
| `pValues` | * |  If using positional parameters, any number of replacement values, one for each message parameter %0 to %9. If using named parameters, a single object with name value pairs. Non string arguments are converted to strings. |

### Returns

The localized and formatted message text. If the key is not found then the key is returned. Type string Examples This example using positional parameters returns "You entered " when the CONFIRM message text is "You entered %0" and the inputValue variable value is " ". Note this string must be used in a context where HTML escaping is done to avoid XSS vulnerabilities. This example using named parameters returns "You entered " when the CONFIRM message text is "You entered %confirmMsg" and the inputValue variable value is " ". Note this string must be used in a context where HTML escaping is done to avoid XSS vulnerabilities.

### Simple Example

```javascript
apex.lang.formatMessageNoEscape(
    null,
    "Example"
);
```

### More Complex Example

```javascript
// Assuming this code runs on an Oracle APEX page where apex.lang is loaded.
const result = apex.lang.formatMessageNoEscape(
    null,
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

## formatNoEscape

Signature: `(static) formatNoEscape (pPattern, &hellip;pValues) &rarr; {string}`

### Purpose

Same as apex.lang.format , except the replacement arguments are not HTML escaped. They must be known to be safe or are used in a context that is safe.

### Parameters

| Name | Type | Description |
| --- | --- | --- |
| `pPattern` | string |  The message pattern. |

### Option/Object Properties

| Name | Type | Description |
| --- | --- | --- |
| `pValues` | * |  if using positional parameters, any number of replacement values, one for each message parameter %0 to %9. If using named parameters, a single object with name value pairs. Non string arguments are converted to strings. |

### Returns

The formatted message text. Type string Examples This example using positional parameters returns "You entered " when the inputValue variable value is " ". Note this string must be used in a context where HTML escaping is done to avoid XSS vulnerabilities. This example using named parameters returns "You entered " when the inputValue variable value is " ". Note this string must be used in a context where HTML escaping is done to avoid XSS vulnerabilities.

### Simple Example

```javascript
apex.lang.formatNoEscape(
    null,
    "Example"
);
```

### More Complex Example

```javascript
// Assuming this code runs on an Oracle APEX page where apex.lang is loaded.
const result = apex.lang.formatNoEscape(
    null,
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

## getMessage

Signature: `(static) getMessage (pKey) &rarr; {string}`

### Purpose

Return the message associated with the given key. The key is looked up in the messages added with the apex.lang.addMessages , apex.lang.loadMessages , or apex.lang.loadMessagesIfNeeded functions.

### Parameters

| Name | Type | Description |
| --- | --- | --- |
| `pKey` | string | The message key. |

### Returns

The localized message text. If the key is not found then the key is returned. Type string Example This example returns "OK" when the localized text for key OK_BTN_LABEL is "OK".

### Simple Example

```javascript
apex.lang.getMessage(
    null
);
```

### More Complex Example

```javascript
// Assuming this code runs on an Oracle APEX page where apex.lang is loaded.
const result = apex.lang.getMessage(
    null
);
if ( result && typeof result.done === "function" ) {
    result.done( function( data ) {
        console.log( data );
    } ).fail( function( jqXHR, textStatus, errorThrown ) {
        apex.debug.error( textStatus, errorThrown );
    } );
}
```

## hasMessage

Signature: `(static) hasMessage (pKey) &rarr; {boolean}`

### Purpose

Return true if pKey exists in the messages added with the apex.lang.addMessages , apex.lang.loadMessages , or apex.lang.loadMessagesIfNeeded functions.

### Parameters

| Name | Type | Description |
| --- | --- | --- |
| `pKey` | string | The message key. |

### Returns

true if the given message exists and false otherwise. Type boolean Example This example checks for the existence of a message, "EXTRA_MESSAGE", before using it.

### Simple Example

```javascript
apex.lang.hasMessage(
    null
);
```

### More Complex Example

```javascript
// Assuming this code runs on an Oracle APEX page where apex.lang is loaded.
const result = apex.lang.hasMessage(
    null
);
if ( result && typeof result.done === "function" ) {
    result.done( function( data ) {
        console.log( data );
    } ).fail( function( jqXHR, textStatus, errorThrown ) {
        apex.debug.error( textStatus, errorThrown );
    } );
}
```

## loadMessages

Signature: `(static) loadMessages (pMessageKeys) &rarr; {Promise}`

### Purpose

Load additional messages from the server.

### Parameters

| Name | Type | Description |
| --- | --- | --- |
| `pMessageKeys` | Array. | An array of message keys (names) to load. The message keys can end in "%" to load all the messages with keys that start with the given text. |

### Returns

promise resolved (with no data) when messages are available, rejected (with no data) if the ajax request fails. Type Promise Examples This example loads two additional text messages with names "MY_MESSAGE1" and "MY_MESSAGE2". Once they have been loaded it uses getMessage to get the message text. This example loads all the messages for a component. The component has named all its message keys with a common prefix "MY_COMPONENT_". So the following would load messages such as "MY_COMPONENT_MESSAGE1", "MY_COMPONENT_MESSAGE2" and so on.

### Simple Example

```javascript
apex.lang.loadMessages(
    null
);
```

### More Complex Example

```javascript
// Assuming this code runs on an Oracle APEX page where apex.lang is loaded.
const result = apex.lang.loadMessages(
    null
);
if ( result && typeof result.done === "function" ) {
    result.done( function( data ) {
        console.log( data );
    } ).fail( function( jqXHR, textStatus, errorThrown ) {
        apex.debug.error( textStatus, errorThrown );
    } );
}
```

## loadMessagesIfNeeded

Signature: `(static) loadMessagesIfNeeded (pMessageKeys, pCallback)`

### Purpose

Load additional messages from the server only if they are not already loaded.

### Parameters

| Name | Type | Description |
| --- | --- | --- |
| `pMessageKeys` | Array. | An array of message keys (names) that are needed by pCallback. These messages will be loaded if needed. |
| `pCallback` |  | A no argument function that is called when all the keys have been loaded. If all the messages have already been loaded then this function is called right away. |

### Simple Example

```javascript
apex.lang.loadMessagesIfNeeded(
    null,
    function() {}
);
```

### More Complex Example

```javascript
// Assuming this code runs on an Oracle APEX page where apex.lang is loaded.
const result = apex.lang.loadMessagesIfNeeded(
    null,
    function() {}
);
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
