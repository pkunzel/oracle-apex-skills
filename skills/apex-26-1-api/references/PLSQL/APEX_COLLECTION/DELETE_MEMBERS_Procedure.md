# APEX_COLLECTION.DELETE_MEMBERS Procedure

Source: [Oracle APEX 26.1 API Reference](https://docs.oracle.com/en/database/oracle/apex/26.1/aeapi/DELETE_MEMBERS-Procedure.html)

Status: generated detailed reference. Review edge cases against the source before production use.

Parent package: [APEX_COLLECTION](../APEX_COLLECTION.md)

## Purpose

Deletes all members from a given named collection where the attribute specified by the attribute number equals the supplied value.

## When To Use

Use this page when code needs the `APEX_COLLECTION.DELETE_MEMBERS` procedure. Confirm security, workspace, and session requirements for your calling context.

## Signature

```sql
APEX_COLLECTION.DELETE_MEMBERS (
    p_collection_name   IN VARCHAR2,
    p_attr_number       IN NUMBER,
    p_attr_value        IN VARCHAR2 )
```

## Parameters

| Parameter | Description |
| --- | --- |
| `p_collection_name` | The name of the collection to delete the specified members from. The maximum length is 255 characters. Collection names are not case-sensitive and are converted to upper case. An error is returned if this collection does not exist for the current user in the same session. |
| `p_attr_number` | Attribute number of the member attribute used to match for the specified attribute value for deletion. Valid values are 1 through 50 and NULL. |
| `p_attr_value` | Attribute value of the member attribute used to match for deletion. Maximum length can be 4,000 bytes. The attribute value is truncated to 4,000 bytes if greater than this amount. |

## Returns

This is a procedure and does not return a value.

## Important Notes

- Most APEX APIs assume the correct APEX workspace, application, and session context.
- Validate user-controlled values before passing them into administrative, security, SQL, or web-service APIs.
- Use the source link for exact behavior, defaults, and version-specific caveats.

## Simple Example

```sql
begin
    apex_collection.DELETE_MEMBERS(
        p_collection_name => 'EXAMPLE',
        p_attr_number => 1,
        p_attr_value => 'EXAMPLE'
    );
end;
/
```

## More Complex Example

```sql
begin
    -- Assuming this runs inside an APEX page process with the right workspace/app context.
    apex_collection.DELETE_MEMBERS(
            p_collection_name => 'EXAMPLE',
            p_attr_number => 1,
            p_attr_value => 'EXAMPLE'
        );
end;
/
```

