# APEX_DATA_EXPORT.ADD_COLUMN_GROUP Procedure

Source: [Oracle APEX 26.1 API Reference](https://docs.oracle.com/en/database/oracle/apex/26.1/aeapi/APEX_DATA_EXPORT-ADD_COLUMN_GROUP-Procedure.html)

Status: generated detailed reference. Review edge cases against the source before production use.

Parent package: [APEX_DATA_EXPORT](../APEX_DATA_EXPORT.md)

## Purpose

This procedure adds a column group to the column group collection. Column group collections can be passed to the EXPORT calls in order to group columns using an extra header row. If an empty column group collection (or no column group collection) passes, no column groups are added to the export. You can create multiple column group levels.

## When To Use

Use this page when code needs the `APEX_DATA_EXPORT.ADD_COLUMN_GROUP` procedure. Confirm security, workspace, and session requirements for your calling context.

## Signature

```sql
APEX_DATA_EXPORT.ADD_COLUMN_GROUP (
    p_column_groups     IN OUT NOCOPY   t_column_groups,
    p_idx               OUT             PLS_INTEGER,
    p_name              IN              VARCHAR2,
    p_alignment         IN              t_alignment         DEFAULT c_align_center,
    p_parent_group_idx  IN              PLS_INTEGER         DEFAULT NULL )
```

## Parameters

| Parameter | Description |
| --- | --- |
| `p_column_groups` | Column group collection. |
| `p_idx` | The generated index in the columns collection. |
| `p_name` | Column group name. |
| `p_alignment` | Column group alignment. Valid values are: LEFT , CENTER (default), RIGHT . |
| `p_parent_group_idx` | The index of a parent column group. |

## Returns

This is a procedure and does not return a value.

## Important Notes

- Most APEX APIs assume the correct APEX workspace, application, and session context.
- Validate user-controlled values before passing them into administrative, security, SQL, or web-service APIs.
- Use the source link for exact behavior, defaults, and version-specific caveats.

## Simple Example

```sql
begin
    apex_data_export.ADD_COLUMN_GROUP(
        p_column_groups => null,
        p_idx => 1,
        p_name => 'EXAMPLE',
        p_alignment => null,
        p_parent_group_idx => 1
    );
end;
/
```

