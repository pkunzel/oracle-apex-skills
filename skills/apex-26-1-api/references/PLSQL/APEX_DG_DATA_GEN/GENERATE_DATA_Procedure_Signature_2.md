# APEX_DG_DATA_GEN.GENERATE_DATA Procedure Signature 2

Source: [Oracle APEX 26.1 API Reference](https://docs.oracle.com/en/database/oracle/apex/26.1/aeapi/GENERATE_DATA-Procedure-Signature-2.html)

Status: generated detailed reference. Review edge cases against the source before production use.

Parent package: [APEX_DG_DATA_GEN](../APEX_DG_DATA_GEN.md)

## Purpose

This procedure creates rows of data based on the blueprint tables and their columns customizations.

## When To Use

Use this page when code needs the `APEX_DG_DATA_GEN.GENERATE_DATA` procedure. Confirm security, workspace, and session requirements for your calling context.

## Signature

```sql
APEX_DG_DATA_GEN.GENERATE_DATA (
    p_blueprint             IN         VARCHAR2,
    p_format                IN         VARCHAR2,
    p_blueprint_table       IN         VARCHAR2 DEFAULT NULL,
    p_row_scaling           IN         NUMBER DEFAULT 100,
    p_stop_after_errors     IN         NUMBER DEFAULT c_max_error_count,
    p_output                OUT NOCOPY CLOB,
    p_file_ext              OUT NOCOPY VARCHAR2,
    p_mime_type             OUT NOCOPY VARCHAR2,
    p_errors                OUT NOCOPY CLOB )
```

## Parameters

| Parameter | Description |
| --- | --- |
| `p_blueprint` | Name of the blueprint. |
| `p_format` | Can be set to one of the following options: SQL INSERT outputs a SQL script. CSV outputs a single CSV for one table or a ZIP of CSVs for multiple tables. JSON outputs JSON file. INSERT INTO generates the SQL INSERT script and runs the insert statements in the current schema. FAST INSERT INTO generates the data and does a single INSERT ... into [table] SELECT ... from [temporary table] . |
| `p_blueprint_table` | Null for all tables. If not null, will generate data only for designated table. If not null, must be table name of a table within the blueprint. Note: this value is case sensitive. |
| `p_row_scaling` | Will scale the number of rows defined into the blueprint by this percentage value. |
| `p_stop_after_errors` | How many errors can happen before the process is stopped. This is only applicable for INSERT INTO |
| `p_output` | The clob to hold the output. Null for INSERT INTO and FAST INSERT INTO. |
| `p_file_ext` | The file extension of the output. Null for INSERT INTO and FAST INSERT INTO. |
| `p_mime_type` | The MIME type of the output. Null for INSERT INTO and FAST INSERT INTO. |
| `p_errors` | JSON output of any errors. NULL upon success. |

## Returns

This is a procedure and does not return a value.

## Important Notes

- Most APEX APIs assume the correct APEX workspace, application, and session context.
- Validate user-controlled values before passing them into administrative, security, SQL, or web-service APIs.
- Use the source link for exact behavior, defaults, and version-specific caveats.

## Simple Example

```sql
declare
    l_output    clob;
    l_file_ext  varchar2(255);
    l_mime_type varchar2(255);
    l_errors    clob;
begin
    apex_dg_data_gen.generate_data(
        p_blueprint       => 'DEMO_ORDER_BP',
        p_format          => 'SQL INSERT',
        p_blueprint_table => 'CUSTOMERS',
        p_row_scaling     => 50,
        p_output          => l_output,
        p_file_ext        => l_file_ext,
        p_mime_type       => l_mime_type,
        p_errors          => l_errors
    );

    sys.dbms_output.put_line(dbms_lob.substr(l_output, 4000, 1));
end;
/
```
