# mapRegion

Source: [Oracle APEX 26.1 JavaScript API Reference](https://docs.oracle.com/en/database/oracle/apex/26.1/aexjs/mapRegion.html)

Status: curated first-pass reference.

## Purpose

`mapRegion` is the client-side interface returned by `apex.region(staticId)` for APEX Map regions. It controls map position, zoom, pitch/bearing, layers, features, popups/tooltips, circle drawing, refresh, and access to the underlying MapLibre map object.

Use it when code needs to move the map, read the visible map extent, show/hide layers, update feature data, or react to map events.

## API Surface

| Need | Members |
| --- | --- |
| Position/status | `getMapStatus`, `getMapCenterAndZoomLevel`, `getMapBboxAndZoomLevel`, `getMapPitchAndBearing`, `setCenter`, `setZoomLevel`, `reset` |
| Layers | `getLayers`, `getLayerIdByName`, `showLayer`, `hideLayer`, `moveLayer` |
| Features | `getFeature`, `addFeature`, `updateFeature`, `removeFeature` |
| Popups/tooltips | `displayPopup`, `closeInfoWindow`, `closeAllInfoWindows`, `closeTooltip` |
| Drawing/status | `getCircle`, `clearCircle`, `getMapObject` |
| Refresh/events | `refresh`, `focus`, `on`, `off` |

## Move And Zoom

```javascript
const map = apex.region( "stores_map" );

map.setCenter( [ -122.4194, 37.7749 ] );
map.setZoomLevel( 12 );
```

Coordinates are longitude, latitude.

Read current status:

```javascript
const status = apex.region( "stores_map" ).getMapStatus();

apex.debug.info(
    "Zoom " + status.zoom + " bbox " + JSON.stringify( status.bbox )
);
```

## Show Or Hide Layers

```javascript
const map = apex.region( "stores_map" );

map.hideLayer( "Closed Stores" );
map.showLayer( "Open Stores" );
```

You can use a layer name or ID. To find IDs:

```javascript
const layerId = apex.region( "stores_map" ).getLayerIdByName( "Open Stores" );
```

## Feature Lookup And Popup

Assuming layer ID `1` contains store features and feature ID `STORE_100` exists:

```javascript
const map = apex.region( "stores_map" );
const feature = map.getFeature( 1, "STORE_100" );

if ( feature ) {
    map.displayPopup(
        "infoWindow",
        1,
        "STORE_100",
        true
    );
}
```

Close popups:

```javascript
apex.region( "stores_map" ).closeAllInfoWindows( 1 );
```

## Add Or Update GeoJSON Feature

```javascript
const map = apex.region( "stores_map" );
const layerId = map.getLayerIdByName( "Incidents" );

map.addFeature( layerId, {
    type: "Feature",
    id: "INC_1001",
    geometry: {
        type: "Point",
        coordinates: [ -122.4194, 37.7749 ]
    },
    properties: {
        title: "Incident 1001",
        severity: "High"
    }
} );
```

Use `updateFeature` with the same feature ID to change an existing feature, and `removeFeature` to remove it.

## Circle Tool

If the region has the circle tool enabled:

```javascript
const circle = apex.region( "stores_map" ).getCircle();

if ( circle ) {
    apex.item( "P10_CIRCLE_GEOJSON" ).setValue(
        JSON.stringify( circle )
    );
}
```

Clear it:

```javascript
apex.region( "stores_map" ).clearCircle();
```

## MapLibre Access

Use documented `mapRegion` methods first. Drop down to MapLibre only when APEX does not expose the needed behavior:

```javascript
const mapObject = apex.region( "stores_map" ).getMapObject();

if ( mapObject ) {
    mapObject.once( "idle", function() {
        apex.debug.info( "Map is idle." );
    } );
}
```

## Safety Notes

- Map region APIs may return empty objects or `null` before initialization.
- Treat coordinates and GeoJSON from users as untrusted; validate server-side before saving.
- Do not expose API keys or private tile URLs in client code unless they are intended for browser use.
- Prefer APEX layer methods over direct MapLibre mutations so APEX state stays consistent.
- Refresh map layers after changing session-state items listed in `itemsToSubmit`.

## Related APIs

- [region](region.md) and [apex.region](apex.region.md) for generic region behavior.
- [facetsRegion](facetsRegion.md) for filtering map data.
- [apex.server](apex.server.md) for saving map status, circle geometry, or feature edits.
