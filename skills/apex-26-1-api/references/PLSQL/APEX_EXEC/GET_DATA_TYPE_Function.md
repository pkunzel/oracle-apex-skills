# APEX_EXEC.GET_DATA_TYPE Function

Source: [Oracle APEX 26.1 API Reference](https://docs.oracle.com/en/database/oracle/apex/26.1/aeapi/APEX_EXEC.GET_DATA_TYPE-Function.html)

Status: generated detailed reference. Review edge cases against the source before production use.

Parent package: [APEX_EXEC](../APEX_EXEC.md)

## Purpose

This function converts the t_data_type constant into the VARCHAR2 representation, or the data type VARCHAR2 representation to the t_data_type constant.

## When To Use

Use this page when code needs the `APEX_EXEC.GET_DATA_TYPE` function. Confirm security, workspace, and session requirements for your calling context.

## Signature

```sql
APEX_EXEC.GET_DATA_TYPE ( 
    p_datatype_num      IN apex_exec.t_data_type )
RETURN VARCHAR2;
```

## Parameters

| Parameter | Description |
| --- | --- |
| `p_datatype_num` | Data type constant of apex_exec.t_data_type . |
| `p_datatype` | VARCHAR2 representation of the data type, as used by SQL. |

## Returns

Signature 1 VARCHAR2 representation of the data type, as used by SQL Signature 2 Data type constant of apex_exec.t_data_type . Parent topic: APEX_EXEC

## Important Notes

- Most APEX APIs assume the correct APEX workspace, application, and session context.
- Validate user-controlled values before passing them into administrative, security, SQL, or web-service APIs.
- Use the source link for exact behavior, defaults, and version-specific caveats.

## Simple Example

```sql
begin
    sys.dbms_output.put_line(
        apex_exec.get_data_type(p_datatype_num => apex_exec.c_data_type_timestamp_tz)
    );
end;
/
```
