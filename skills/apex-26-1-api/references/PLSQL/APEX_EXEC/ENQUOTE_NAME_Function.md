# APEX_EXEC.ENQUOTE_NAME Function

Source: [Oracle APEX 26.1 API Reference](https://docs.oracle.com/en/database/oracle/apex/26.1/aeapi/APEX_EXEC.ENQUOTE_NAME-Function.html)

Status: generated detailed reference. Review edge cases against the source before production use.

Parent package: [APEX_EXEC](../APEX_EXEC.md)

## Purpose

This function enquotes a database object name and (if applicable) escape contained quotes. This function works for all database types supported by Oracle APEX over REST-enabled SQL.

## When To Use

Use this page when code needs the `APEX_EXEC.ENQUOTE_NAME` function. Confirm security, workspace, and session requirements for your calling context.

## Signature

```sql
APEX_EXEC.ENQUOTE_NAME (
    p_str               IN VARCHAR2,
    p_for_database      IN t_database_type DEFAULT NULL )
RETURN VARCHAR2;
```

## Parameters

| Parameter | Description |
| --- | --- |
| `p_str` | Object name to enquote. |
| `p_for_database` | Target database to enquote for. If omitted, the function enquotes for the target database of the currently executed region. |

## Returns

This function returns the enquoted object name.

## Important Notes

- Most APEX APIs assume the correct APEX workspace, application, and session context.
- Validate user-controlled values before passing them into administrative, security, SQL, or web-service APIs.
- Use the source link for exact behavior, defaults, and version-specific caveats.

## Simple Example

```sql
declare
    l_result VARCHAR2;
begin
    l_result := apex_exec.ENQUOTE_NAME(
        p_str => 'EXAMPLE',
        p_for_database => null
    );
    sys.dbms_output.put_line('Result captured.');
end;
/
```

