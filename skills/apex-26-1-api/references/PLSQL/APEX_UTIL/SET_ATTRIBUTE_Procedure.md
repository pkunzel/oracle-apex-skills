# APEX_UTIL.SET_ATTRIBUTE Procedure

Source: [Oracle APEX 26.1 API Reference](https://docs.oracle.com/en/database/oracle/apex/26.1/aeapi/SET_ATTRIBUTE-Procedure.html)

Status: generated detailed reference. Review edge cases against the source before production use.

Parent package: [APEX_UTIL](../APEX_UTIL.md)

## Purpose

This procedure sets the value of one of the attribute values (1 through 10) of a user in the Oracle APEX accounts table.

## When To Use

Use this page when code needs the `APEX_UTIL.SET_ATTRIBUTE` procedure. Confirm security, workspace, and session requirements for your calling context.

## Signature

```sql
APEX_UTIL.SET_ATTRIBUTE (
    p_userid           IN NUMBER,
    p_attribute_number IN NUMBER,
    p_attribute_value  IN VARCHAR2 );
```

## Parameters

| Parameter | Description |
| --- | --- |
| `p_userid` | The numeric ID of the user account. |
| `p_attribute_number` | Attribute number in the user record (1 through 10). |
| `p_attribute_value` | Value of the attribute located by p_attribute_number to be set in the user record. |

## Returns

This is a procedure and does not return a value.

## Important Notes

- Most APEX APIs assume the correct APEX workspace, application, and session context.
- Validate user-controlled values before passing them into administrative, security, SQL, or web-service APIs.
- Use the source link for exact behavior, defaults, and version-specific caveats.

## Simple Example

```sql
begin
    apex_util.SET_ATTRIBUTE(
        p_userid => 1,
        p_attribute_number => 1,
        p_attribute_value => 'EXAMPLE'
    );
end;
/
```

## More Complex Example

```sql
begin
    -- Assuming this runs inside an APEX page process with the right workspace/app context.
    apex_util.SET_ATTRIBUTE(
            p_userid => 1,
            p_attribute_number => 1,
            p_attribute_value => 'EXAMPLE'
        );
end;
/
```

