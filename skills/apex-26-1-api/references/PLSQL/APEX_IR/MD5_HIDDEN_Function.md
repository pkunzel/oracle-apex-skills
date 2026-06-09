# APEX_IR.MD5_HIDDEN Function

Source: [Oracle APEX 26.1 API Reference](https://docs.oracle.com/en/database/oracle/apex/26.1/aeapi/MD5_HIDDEN-Function.html)

Status: generated detailed reference. Review edge cases against the source before production use.

Parent package: [APEX_IR](../APEX_IR.md)

## Purpose

Use this function for lost update detection. Lost update detection ensures data integrity in applications where data can be accessed concurrently.

## When To Use

Use this page when code needs the `APEX_IR.MD5_HIDDEN` function. Confirm security, workspace, and session requirements for your calling context.

## Signature

```sql
APEX_ITEM.MD5_HIDDEN (
    p_idx       IN    NUMBER,
    p_value01   IN    VARCHAR2 DEFAULT NULL,
    p_value02   IN    VARCHAR2 DEFAULT NULL,
    p_value03   IN    VARCHAR2 DEFAULT NULL,
    ...
    p_value50   IN    VARCHAR2 DEFAULT NULL,
    p_col_sep   IN    VARCHAR2 DEFAULT '|',
    p_item_id   IN    VARCHAR2 DEFAULT NULL )
    RETURN VARCHAR2;
```

## Parameters

| Parameter | Description |
| --- | --- |
| `p_idx` | Indicates the form element to be generated. For example, 1 equals F01 and 2 equals F02 . Typically the p_idx parameter is constant for a given column. |
| `p_value01...50` | Fifty available inputs. Parameters not supplied default to NULL. |
| `p_col_sep` | String used to separate p_value inputs. Defaults to the pipe symbol ( \| ). |
| `p_item_id` | ID of the HTML form item. |

## Important Notes

- Most APEX APIs assume the correct APEX workspace, application, and session context.
- Validate user-controlled values before passing them into administrative, security, SQL, or web-service APIs.
- Use the source link for exact behavior, defaults, and version-specific caveats.

## Simple Example

```sql
declare
    l_result VARCHAR2;
begin
    l_result := apex_ir.MD5_HIDDEN(
        p_idx => 1,
        p_value01 => 'EXAMPLE',
        p_value02 => 'EXAMPLE',
        p_value03 => 'EXAMPLE',
        p_value50 => 'EXAMPLE',
        p_col_sep => 'EXAMPLE',
        p_item_id => 'EXAMPLE'
    );
    sys.dbms_output.put_line('Result captured.');
end;
/
```

