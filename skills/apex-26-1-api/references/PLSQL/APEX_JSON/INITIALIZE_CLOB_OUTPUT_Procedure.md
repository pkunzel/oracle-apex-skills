# APEX_JSON.INITIALIZE_CLOB_OUTPUT Procedure

Source: [Oracle APEX 26.1 API Reference](https://docs.oracle.com/en/database/oracle/apex/26.1/aeapi/INITIALIZE_CLOB_OUTPUT-Procedure.html)

Status: generated detailed reference. Review edge cases against the source before production use.

Parent package: [APEX_JSON](../APEX_JSON.md)

## Purpose

This procedure initializes the output interface to write to a temporary CLOB. The default is to write to SYS.HTP . If using CLOB output, call FREE_OUTPUT() at the end to free the CLOB .

## When To Use

Use this page when code needs the `APEX_JSON.INITIALIZE_CLOB_OUTPUT` procedure. Confirm security, workspace, and session requirements for your calling context.

## Signature

```sql
APEX_JSON.INITIALIZE_CLOB_OUTPUT (
    p_dur         IN PLS_INTEGER DEFAULT sys.dbms_lob.call,
    p_cache       IN BOOLEAN     DEFAULT TRUE,
    p_indent      IN PLS_INTEGER DEFAULT NULL,
    p_preserve    IN BOOLEAN     DEFAULT FALSE )
```

## Parameters

| Parameter | Description |
| --- | --- |
| `p_dur` | Duration of the temporary CLOB . this can be DBMS_LOB.SESSION or DBMS_LOB.CALL (the default). |
| `p_cache` | Specifies if the lob should be read into buffer cache or not. |
| `p_indent` | Indent level. Defaults to 2 if debug is turned on, 0 otherwise. |
| `p_preserve` | Whether to preserve the currently active output object. After calling FREE_OUTPUT , subsequent write calls will be executed on the preserved output. Defaults to FALSE . If HTP output has already been initialized and a CLOB needs to be created, use p_preserve => true . After FREE_OUTPUT , subsequent output will be directed to the original HTP output again. If p_preserve is true , you must call FREE_OUTPUT after JSON processing. |

## Returns

This is a procedure and does not return a value.

## Important Notes

- Most APEX APIs assume the correct APEX workspace, application, and session context.
- Validate user-controlled values before passing them into administrative, security, SQL, or web-service APIs.
- Use the source link for exact behavior, defaults, and version-specific caveats.

## Simple Example

```sql
begin
    apex_json.INITIALIZE_CLOB_OUTPUT(
        p_dur => 1,
        p_cache => true,
        p_indent => 1,
        p_preserve => true
    );
end;
/
```

## More Complex Example

```sql
begin
    -- Assuming this runs inside an APEX page process with the right workspace/app context.
    apex_json.INITIALIZE_CLOB_OUTPUT(
            p_dur => 1,
            p_cache => true,
            p_indent => 1,
            p_preserve => true
        );
end;
/
```

