# APEX_SPATIAL

Source: [Oracle APEX 26.1 API Reference](https://docs.oracle.com/en/database/oracle/apex/26.1/aeapi/APEX_SPATIAL.html)

Status: curated first-pass reference.

## Purpose

`APEX_SPATIAL` is a convenience wrapper for common `MDSYS.SDO_GEOMETRY` operations used by APEX map/report features. It creates points, rectangles, circle polygons, and geometry metadata suitable for longitude/latitude data.

## When To Use

Use it when an APEX app needs simple spatial geometries or metadata without writing raw SDO structures. For complex spatial analysis, use Oracle Spatial SQL directly.

## API Surface

| Area | Members |
| --- | --- |
| Geometry creation | `POINT`, `RECTANGLE`, `CIRCLE_POLYGON` |
| Metadata | `INSERT_GEOM_METADATA`, `INSERT_GEOM_METADATA_LONLAT`, `CHANGE_GEOM_METADATA`, `DELETE_GEOM_METADATA` |
| Availability | `SPATIAL_IS_AVAILABLE` |
| Types/constants | `t_srid`, `c_wgs_84`, and related documented types. |

## Point Example

```sql
insert into customer_locations (customer_id, geom)
values (
    :P10_CUSTOMER_ID,
    apex_spatial.point(
        p_lon => :P10_LONGITUDE,
        p_lat => :P10_LATITUDE));
```

## Radius Search Example

Assuming `customer_locations.geom` stores WGS 84 points and you need customers within 5 km:

```sql
select customer_id
  from customer_locations
 where sdo_anyinteract(
           geom,
           apex_spatial.circle_polygon(
               p_lon    => :P10_LONGITUDE,
               p_lat    => :P10_LATITUDE,
               p_radius => 5000)) = 'TRUE';
```

## Metadata Example

Assuming table `CUSTOMER_LOCATIONS(GEOM MDSYS.SDO_GEOMETRY)`:

```sql
begin
    if apex_spatial.spatial_is_available then
        apex_spatial.insert_geom_metadata_lonlat(
            p_table_name        => 'CUSTOMER_LOCATIONS',
            p_column_name       => 'GEOM',
            p_tolerance         => 1,
            p_create_index_name => 'CUSTOMER_LOCATIONS_SX');
    end if;
end;
/
```

## Notes

- `POINT` expects longitude first, latitude second.
- Default SRID is WGS 84 via `c_wgs_84`.
- `CIRCLE_POLYGON` radius is in meters.
- `INSERT_GEOM_METADATA_LONLAT` can create a simple spatial index; leave `p_create_index_name` null for more complex index requirements.

## Related APIs

- [mapRegion](../JavaScript/mapRegion.md) for client-side APEX Map region control.
- [APEX_EXEC](APEX_EXEC.md) for spatial query contexts.
- [APEX_REGION](APEX_REGION.md) for exporting/reporting region data.

<!-- BEGIN GENERATED MEMBER LINKS -->

## Local Member Detail Pages

Generated navigation for LLM retrieval. Use the local detail page first, then follow the Oracle source link when exact wording or edge-case behavior must be verified.

| Member | Kind | Local detail | Source |
| --- | --- | --- | --- |
| Data Types | data types | [local](APEX_SPATIAL/Data_Types.md) | [Oracle](https://docs.oracle.com/en/database/oracle/apex/26.1/aeapi/APEX_SPATIAL-Data-Types.html) |
| CHANGE_GEOM_METADATA Procedure | procedure | [local](APEX_SPATIAL/CHANGE_GEOM_METADATA_Procedure.md) | [Oracle](https://docs.oracle.com/en/database/oracle/apex/26.1/aeapi/CHANGE_GEOM_METADATA-Procedure.html) |
| CIRCLE_POLYGON Function | function | [local](APEX_SPATIAL/CIRCLE_POLYGON_Function.md) | [Oracle](https://docs.oracle.com/en/database/oracle/apex/26.1/aeapi/CIRCLE_POLYGON-Function.html) |
| DELETE_GEOM_METADATA Procedure | procedure | [local](APEX_SPATIAL/DELETE_GEOM_METADATA_Procedure.md) | [Oracle](https://docs.oracle.com/en/database/oracle/apex/26.1/aeapi/DELETE_GEOM_METADATA-Procedure.html) |
| INSERT_GEOM_METADATA Procedure | procedure | [local](APEX_SPATIAL/INSERT_GEOM_METADATA_Procedure.md) | [Oracle](https://docs.oracle.com/en/database/oracle/apex/26.1/aeapi/INSERT_GEOM_METADATA-Procedure.html) |
| INSERT_GEOM_METADATA_LONLAT Procedure | procedure | [local](APEX_SPATIAL/INSERT_GEOM_METADATA_LONLAT_Procedure.md) | [Oracle](https://docs.oracle.com/en/database/oracle/apex/26.1/aeapi/INSERT_GEOM_METADATA_LONLAT-Procedure.html) |
| POINT Function | function | [local](APEX_SPATIAL/POINT_Function.md) | [Oracle](https://docs.oracle.com/en/database/oracle/apex/26.1/aeapi/POINT-Function.html) |
| RECTANGLE Function | function | [local](APEX_SPATIAL/RECTANGLE_Function.md) | [Oracle](https://docs.oracle.com/en/database/oracle/apex/26.1/aeapi/RECTANGLE-Function.html) |
| SPATIAL_IS_AVAILABLE Function | function | [local](APEX_SPATIAL/SPATIAL_IS_AVAILABLE_Function.md) | [Oracle](https://docs.oracle.com/en/database/oracle/apex/26.1/aeapi/SPATIAL_IS_AVAILABLE-Function.html) |

<!-- END GENERATED MEMBER LINKS -->
