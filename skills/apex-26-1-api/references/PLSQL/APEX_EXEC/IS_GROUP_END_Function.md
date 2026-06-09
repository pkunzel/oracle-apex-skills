# APEX_EXEC.IS_GROUP_END Function

Source: [Oracle APEX 26.1 API Reference](https://docs.oracle.com/en/database/oracle/apex/26.1/aeapi/APEX_EXEC.IS_GROUP_END-Function.html)

Status: generated detailed reference. Review edge cases against the source before production use.

Parent package: [APEX_EXEC](../APEX_EXEC.md)

## Purpose

Returns whether an end of group was found. Group columns must not be NULL.

## When To Use

Use this page when code needs the `APEX_EXEC.IS_GROUP_END` function. Confirm security, workspace, and session requirements for your calling context.

## Signature

```sql
APEX_EXEC.IS_GROUP_END (
    p_context   IN t_context )
    RETURN BOOLEAN;
```

## Parameters

| Parameter | Description |
| --- | --- |
| `p_context` | Context object obtained with one of the `OPEN_` functions. |

## Returns

TRUE , if successful; FALSE if no group change was found.

## Important Notes

- Most APEX APIs assume the correct APEX workspace, application, and session context.
- Validate user-controlled values before passing them into administrative, security, SQL, or web-service APIs.
- Use the source link for exact behavior, defaults, and version-specific caveats.

## Simple Example

```sql
declare
    l_result BOOLEAN;
begin
    l_result := apex_exec.IS_GROUP_END(
        p_context => to_clob('Example text')
    );
    sys.dbms_output.put_line('Result captured.');
end;
/
```

