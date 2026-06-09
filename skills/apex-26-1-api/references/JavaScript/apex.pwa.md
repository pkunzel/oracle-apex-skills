# apex.pwa

Source: [Oracle APEX 26.1 JavaScript API Reference](https://docs.oracle.com/en/database/oracle/apex/26.1/aexjs/apex.pwa.html)

Status: curated first-pass reference.

## Purpose

`apex.pwa` contains client-side functions for APEX Progressive Web App features. These APIs only apply when the current APEX application has PWA enabled. They help detect display mode, trigger installation UI, inspect push notification subscriptions, and subscribe or unsubscribe the current user/browser.

Use [APEX_PWA](../PLSQL/APEX_PWA.md) for server-side push notification utilities.

## API Surface

| Need | Member |
| --- | --- |
| Display mode | `getDisplayMode` |
| Install eligibility | `isInstallable`, `openInstallDialog` |
| Deprecated install text | `getInstallText` |
| Push status | `hasPushSubscription`, `getPushSubscription` |
| Push subscribe/unsubscribe | `subscribePushNotifications`, `unsubscribePushNotifications` |

## Detect Display Mode

```javascript
const displayMode = apex.pwa.getDisplayMode();

if ( displayMode === "standalone" || displayMode === "fullscreen" ) {
    apex.debug.info( "Running as installed PWA." );
}
```

Possible display modes include `fullscreen`, `standalone`, `minimal-ui`, and `browser`.

## Install Button

APEX automatically invokes install behavior for elements with class `a-pwaInstall` and the built-in action `a-pwa-install`. For a custom button:

```javascript
apex.jQuery( "#install_app" ).on( "click", async function() {
    if ( await apex.pwa.isInstallable() ) {
        apex.pwa.openInstallDialog();
    } else {
        apex.message.alert( "This app is already installed or cannot be installed from this browser." );
    }
} );
```

`openInstallDialog` triggers browser-supported installation when available, or APEX installation instructions when automatic installation is not available.

## Push Subscription Status

```javascript
async function refreshPushButton() {
    const subscribed = await apex.pwa.hasPushSubscription();

    apex.jQuery( "#enable_push" )
        .prop( "disabled", subscribed )
        .text( subscribed ? "Notifications Enabled" : "Enable Notifications" );
}

refreshPushButton();
```

Get the subscription object when you need browser-level details:

```javascript
const subscription = await apex.pwa.getPushSubscription();

if ( subscription ) {
    apex.debug.info( "Push endpoint available." );
}
```

Do not log or expose full subscription objects unnecessarily.

## Subscribe And Unsubscribe

```javascript
apex.jQuery( "#enable_push" ).on( "click", async function() {
    try {
        await apex.pwa.subscribePushNotifications();
        apex.message.showPageSuccess( "Notifications enabled." );
    } catch ( error ) {
        apex.debug.error( "Push subscription failed", error );
        apex.message.alert( "Notifications could not be enabled." );
    }
} );
```

```javascript
apex.jQuery( "#disable_push" ).on( "click", async function() {
    try {
        await apex.pwa.unsubscribePushNotifications();
        apex.message.showPageSuccess( "Notifications disabled." );
    } catch ( error ) {
        apex.debug.error( "Push unsubscribe failed", error );
    }
} );
```

Ask for notification permission only in response to a clear user action.

## Combined Install And Push Flow

```javascript
async function enablePwaExperience() {
    if ( await apex.pwa.isInstallable() ) {
        apex.pwa.openInstallDialog();
    }

    if ( !( await apex.pwa.hasPushSubscription() ) ) {
        await apex.pwa.subscribePushNotifications();
    }
}

apex.jQuery( "#enable_pwa" ).on( "click", function() {
    enablePwaExperience().catch( function( error ) {
        apex.debug.error( "PWA setup failed", error );
        apex.message.alert( "The PWA setup could not be completed." );
    } );
} );
```

## Deprecated Member

`getInstallText()` is marked deprecated in the APEX 26.1 JavaScript API. Prefer `openInstallDialog()` or declarative install actions/classes for user-facing install behavior.

## Safety Notes

- These APIs are useful only when PWA is enabled for the application.
- Browser support and install eligibility vary by platform. Always handle `false` and rejected promises.
- Trigger install and notification permission flows from user actions, not automatic page load code.
- Do not send secrets or sensitive personal data in notification text.
- Avoid logging full push subscription details.
- Pair client subscription code with server-side `APEX_PWA` checks before sending notifications.

## Related APIs

- [APEX_PWA](../PLSQL/APEX_PWA.md) for server-side push notification and subscription utilities.
- [apex.actions](apex.actions.md) for the built-in `a-pwa-install` action.
- [apex.message](apex.message.md) for install/subscription feedback.
