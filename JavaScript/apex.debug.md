# apex.debug

Source: [Oracle APEX 26.1 JavaScript API Reference](https://docs.oracle.com/en/database/oracle/apex/26.1/aexjs/apex.debug.html)

Status: curated first-pass reference.

## Purpose

`apex.debug` writes browser-side diagnostic messages in a way that follows the APEX debug level. Use it instead of raw `console.log` for application diagnostics that should respect APEX debug settings.

## API Surface

| Need | Members |
| --- | --- |
| Log messages | `error`, `warn`, `info`, `trace`, `log`, `message` |
| Debug level | `getLevel`, `setLevel`, `LOG_LEVEL` |

## Log Levels

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

## Basic Logging

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

## Ajax Error Pattern

```javascript
apex.server.process( "SAVE_ORDER", {
    pageItems: "#P10_ORDER_ID,#P10_STATUS"
} ).fail( function( jqXHR, textStatus, errorThrown ) {
    apex.debug.error( "SAVE_ORDER failed", textStatus, errorThrown, jqXHR.responseText );
    apex.message.alert( "The order could not be saved." );
} );
```

## Safety Guidance

- Use `apex.debug` for diagnostics and `apex.message` for user-facing messages.
- Do not log passwords, tokens, authorization headers, or large personal-data payloads.
- Use structured arguments where useful; browser consoles can inspect objects.
- Leave noisy trace logging behind a suitable debug level.
- Remember browser logs are visible to users with developer tools.

