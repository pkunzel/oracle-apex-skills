# APEX_DG_DATA_GEN.ADD_COLUMN Procedure

Source: [Oracle APEX 26.1 API Reference](https://docs.oracle.com/en/database/oracle/apex/26.1/aeapi/APEX_DG_DATA_GEN.ADD_COLUMN-Procedure.html)

Status: generated detailed reference. Review edge cases against the source before production use.

Parent package: [APEX_DG_DATA_GEN](../APEX_DG_DATA_GEN.md)

## Purpose

This procedure adds a column to the blueprint table.

## When To Use

Use this page when code needs the `APEX_DG_DATA_GEN.ADD_COLUMN` procedure. Confirm security, workspace, and session requirements for your calling context.

## Signature

```sql
APEX_DG_DATA_GEN.ADD_COLUMN (
    p_blueprint             IN VARCHAR2,
    p_sequence              IN PLS_INTEGER,
    p_table_name            IN VARCHAR2,
    p_column_name           IN VARCHAR2,
    p_preserve_case         IN VARCHAR2 DEFAULT 'N',
    p_display_name          IN VARCHAR2 DEFAULT NULL,
    p_max_length            IN NUMBER   DEFAULT 4000,
    p_multi_value           IN VARCHAR2 DEFAULT 'N',
    p_mv_format             IN VARCHAR2 DEFAULT 'JSON',
    p_mv_unique             IN VARCHAR2 DEFAULT 'Y',
    p_mv_delimiter          IN VARCHAR2 DEFAULT ':',
    p_mv_min_entries        IN INTEGER  DEFAULT 1,
    p_mv_max_entries        IN INTEGER  DEFAULT 2,
    p_mv_partition_by       IN VARCHAR2 DEFAULT NULL,
    p_lang                  IN VARCHAR2 DEFAULT 'en',
    p_data_source_type      IN VARCHAR2,
    p_data_source           IN VARCHAR2 DEFAULT NULL,
    p_ds_preserve_case      IN VARCHAR2 DEFAULT 'N',
    p_min_numeric_value     IN NUMBER   DEFAULT 1,
    p_max_numeric_value     IN NUMBER   DEFAULT 10,
    p_numeric_precision     IN NUMBER   DEFAULT 0,
    p_min_date_value        IN DATE     DEFAULT NULL,
    p_max_date_value        IN DATE     DEFAULT NULL,
    p_format_mask           IN VARCHAR2 DEFAULT c_json_date_format,
    p_sequence_start_with   IN NUMBER   DEFAULT 1,
    p_sequence_increment    IN NUMBER   DEFAULT 1,
    p_formula               IN VARCHAR2 DEFAULT NULL,
    p_formula_lang          IN VARCHAR2 DEFAULT 'PLSQL',
    p_custom_attributes     IN VARCHAR2 DEFAULT NULL,
    p_percent_blank         IN NUMBER   DEFAULT 0,
    p_column_id             OUT NUMBER )
```

## Parameters

| Parameter | Description |
| --- | --- |
| `p_blueprint` | Identifier for the blueprint. |
| `p_sequence` | 1 for first column, 2 for second, and so on. |
| `p_table_name` | Table name as known to the blueprint. Checks exact case first, then checks upper case. |
| `p_column_name` | Name of the column. |
| `p_preserve_case` | Defaults to N which forces column name to uppercase. If Y , preserves casing of parameter. |
| `p_display_name` | A friendly name for a given table. |
| `p_max_length` | When generating data (such as Latin text) substring to this. |
| `p_multi_value` | Y or N (currently available for BUILTIN table data and INLINE data). BUILTIN table data will be distinct. INLINE data will be distinct if all values appear once ( red,1;blue,1;green,1 ). Otherwise, permits duplicates ( red,3;blue,4;green,8 ). The number indicates the approximated frequency of each value on the generate data. |
| `p_mv_format` | DELIMITED (based upon p_mv_delimiter ) or JSON (such as {"p_column_name" : ["sympton1","sympton2"]} ). |
| `p_mv_unique` | If Y , values do not repeat within the multi-value column. If N , indicates values may repeat. |
| `p_mv_delimiter` | Delimiter for a DELIMITED . |
| `p_mv_min_entries` | Minimum values in a multi value list. |
| `p_mv_max_entries` | Maximum values in a multi value list. |
| `p_mv_partition_by` | This value must match a column in the same built-in data source. For example, if p_data_source is "car.model" , this value may be "make" because "car.make" is valid. |
| `p_lang` | Language code (for example en , de , es ). |
| `p_data_source_type` | BLUEPRINT BUILTIN DATA_SOURCE FORMULA (requires p_data_source to be NULL ) INLINE SEQUENCE |
| `p_data_source` | Can be set to one of the following options: DATA_SOURCE : DATA_SOURCE_NAME.COLUMN_NAME (column name's case follows p_ds_preserve_case and defaults to upper case). BUILTIN : see built-in list, must match a built-in exactly. BLUEPRINT : references table data already generated (table must have lower sequence). For example, Dept.Deptno where add_table with p_table_name = Dept and add_column with Deptno exist. Note: This is case-sensitive. Tables created with p_preserve_case = N are automatically uppercased. May require DEPT.DEPTNO instead of dept.deptno ). INLINE : PART_TIME,3;FULL_TIME,7 Note: Inline format is VALUE,FREQUENCY , separated by a semi-colon. The frequency of the value is an approximation and Oracle best practice is to use the smallest numeric values that provide the desired distribution. SEQUENCE : uses p_sequence_ parameters. FORMULA : p_data_source must be NULL. Uses p_formula as a PL/SQL formula and {column_name} as substitutions from this table. For example, p_formula => {first_name}\|\|'.'\|\|{last_name}\|\|'.insum.ca' |
| `p_ds_preserve_case` | If p_data_source_type in ('DATA_SOURCE'. 'BLUEPRINT') and p_ds_preserve_case = N , then the data source is upper cased to match an upper case table_name.column_name |
| `p_min_numeric_value` | A positive integer number used as the minimum value (inclusive) to be used in BUILTIN data sources that return NUMBER values. |
| `p_max_numeric_value` | A positive integer number used as the maximum value (inclusive) to be used in BUILTIN data sources that return NUMBER values. |
| `p_numeric_precision` | 0 = no decimal values -1 = round to ten positive integer = number of decimal places |
| `p_min_date_value` | A DATE used as the minimum value (inclusive) to be used in BUILTIN data sources that return DATE type values. |
| `p_max_date_value` | A DATE used as the maximum value (inclusive) to be used in BUILTIN data sources that return DATE type values. |
| `p_format_mask` | Format mask when datatype is a date. |
| `p_sequence_start_with` | Only used when p_data_source_type = SEQUENCE . |
| `p_sequence_increment` | Only used when p_data_source_type = SEQUENCE . |
| `p_formula` | Enables referencing columns in this row, PL/SQL expressions that can reference columns defined in this blueprint row. For example: Substitutions are case sensitive and must match {column_name} exactly. If p_preserve_case was set to N , {COLUMN_NAME} must be upper case. Can be used on any DATA_SOURCE_TYPE . Formulas are applied last, after p_percent_blank . If p_percent_blank = 100 but FORMULAR is sysdate , the column value will be sysdate . |
| `p_formula_lang` | Formulas can be used as a combination of PL/SQL functions performed on this or other columns using {column_name} notation. String/Char, Date/Time, Numeric/Math functions are supported. |
| `p_custom_attributes` | For future expansion. |
| `p_percent_blank` | 0 to 100 . This is applied prior to all formulas. If this column is referenced in a formula, the formula contains a blank when appropriate. Note: A formula on this column may cause the column to not be blank. |
| `p_column_id` | ID of the added column ( OUT ). |

## Returns

This is a procedure and does not return a value.

## Important Notes

- Most APEX APIs assume the correct APEX workspace, application, and session context.
- Validate user-controlled values before passing them into administrative, security, SQL, or web-service APIs.
- Use the source link for exact behavior, defaults, and version-specific caveats.

## Simple Example

```sql
declare
    l_column_id number;

begin
    apex_dg_data_gen.add_column(
        p_blueprint           => 'DEMO_ORDER_BP',
        p_sequence            => 1,
        p_table_name          => 'CUSTOMERS',
        p_column_name         => 'CUSTOMER_ID',
        p_display_name        => 'Customer ID',
        p_max_length          => 10,
        p_data_source_type    => 'SEQUENCE',
        p_sequence_start_with => 1000,
        p_sequence_increment  => 1,
        p_column_id           => l_column_id
    );
end;
/
```
