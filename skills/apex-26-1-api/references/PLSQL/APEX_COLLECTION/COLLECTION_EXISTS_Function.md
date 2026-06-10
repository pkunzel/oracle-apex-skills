# APEX_COLLECTION.COLLECTION_EXISTS Function

Source: [Oracle APEX 26.1 API Reference](https://docs.oracle.com/en/database/oracle/apex/26.1/aeapi/COLLECTION_EXISTS-Function.html)

Status: generated detailed reference. Review edge cases against the source before production use.

Parent package: [APEX_COLLECTION](../APEX_COLLECTION.md)

## Purpose

Determines if a collection exists. Returns TRUE if the specified collection exists for the current user in the current session for the current application ID, otherwise FALSE .

## When To Use

Use this page when code needs the `APEX_COLLECTION.COLLECTION_EXISTS` function. Confirm security, workspace, and session requirements for your calling context.

## Signature

```sql
APEX_COLLECTION.COLLECTION_EXISTS (
    p_collection_name   IN VARCHAR2 )
RETURN BOOLEAN;
```

## Parameters

| Parameter | Description |
| --- | --- |
| `p_collection_name` | The name of the collection. Maximum length is 255 bytes. The collection name is not case-sensitive and is converted to upper case. |

## Important Notes

- Most APEX APIs assume the correct APEX workspace, application, and session context.
- Validate user-controlled values before passing them into administrative, security, SQL, or web-service APIs.
- Use the source link for exact behavior, defaults, and version-specific caveats.

## Simple Example

```sql
begin
    if apex_collection.collection_exists('ORDER_LINES') then
        apex_debug.info('ORDER_LINES exists in this session.');
    end if;
end;
/
```

