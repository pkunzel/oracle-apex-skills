# APEX_COLLECTION.COLLECTION_HAS_CHANGED Function

Source: [Oracle APEX 26.1 API Reference](https://docs.oracle.com/en/database/oracle/apex/26.1/aeapi/COLLECTION_HAS_CHANGED-Function.html)

Status: generated detailed reference. Review edge cases against the source before production use.

Parent package: [APEX_COLLECTION](../APEX_COLLECTION.md)

## Purpose

Determines if a collection has changed since it was created or since the collection changed flag was reset.

## When To Use

Use this page when code needs the `APEX_COLLECTION.COLLECTION_HAS_CHANGED` function. Confirm security, workspace, and session requirements for your calling context.

## Signature

```sql
APEX_COLLECTION.COLLECTION_HAS_CHANGED (
    p_collection_name   IN VARCHAR2 )
RETURN BOOLEAN;
```

## Parameters

| Parameter | Description |
| --- | --- |
| `p_collection_name` | The name of the collection. An error is returned if this collection does not exist with the specified name of the current user and in the same session. |

## Important Notes

- Most APEX APIs assume the correct APEX workspace, application, and session context.
- Validate user-controlled values before passing them into administrative, security, SQL, or web-service APIs.
- Use the source link for exact behavior, defaults, and version-specific caveats.

## Simple Example

```sql
begin
    if apex_collection.collection_has_changed('ORDER_LINES') then
        apex_debug.info('Order lines changed.');
    end if;
end;
/
```

