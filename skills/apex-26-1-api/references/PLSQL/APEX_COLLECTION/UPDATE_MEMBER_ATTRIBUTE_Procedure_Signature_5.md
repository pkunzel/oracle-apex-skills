# APEX_COLLECTION.UPDATE_MEMBER_ATTRIBUTE Procedure Signature 5

Source: [Oracle APEX 26.1 API Reference](https://docs.oracle.com/en/database/oracle/apex/26.1/aeapi/UPDATE_MEMBER_ATTRIBUTE-Procedure-Signature-5.html)

Status: generated detailed reference. Review edge cases against the source before production use.

Parent package: [APEX_COLLECTION](../APEX_COLLECTION.md)

## Purpose

Updates the specified NUMBER member attribute in the given named collection.

## When To Use

Use this page when code needs the `APEX_COLLECTION.UPDATE_MEMBER_ATTRIBUTE` procedure. Confirm security, workspace, and session requirements for your calling context.

## Signature

```sql
APEX_COLLECTION.UPDATE_MEMBER_ATTRIBUTE (
    p_collection_name IN VARCHAR2,
    p_seq             IN NUMBER,
    p_attr_number     IN NUMBER,
    p_number_value    IN NUMBER )
```

## Parameters

| Parameter | Description |
| --- | --- |
| `p_collection_name` | The name of the collection. Maximum length can be 255 bytes. Collection names are case-insensitive and are converted to upper case. An error is returned if this collection does not exist with the specified name of the current user and in the same session. |
| `p_seq` | Sequence ID of the collection member to be updated. |
| `p_attr_number` | Attribute number of the NUMBER member attribute to be updated. Valid value is 1 through 5. Any number outside of this range is ignored. |
| `p_number_value` | Attribute value of the NUMBER member attribute to be updated. |

## Returns

This is a procedure and does not return a value.

## Important Notes

- Most APEX APIs assume the correct APEX workspace, application, and session context.
- Validate user-controlled values before passing them into administrative, security, SQL, or web-service APIs.
- Use the source link for exact behavior, defaults, and version-specific caveats.

## Simple Example

```sql
begin
    apex_collection.UPDATE_MEMBER_ATTRIBUTE(
        p_collection_name => 'EXAMPLE',
        p_seq => 1,
        p_attr_number => 1,
        p_number_value => 1
    );
end;
/
```

## More Complex Example

```sql
begin
    -- Assuming this runs inside an APEX page process with the right workspace/app context.
    apex_collection.UPDATE_MEMBER_ATTRIBUTE(
            p_collection_name => 'EXAMPLE',
            p_seq => 1,
            p_attr_number => 1,
            p_number_value => 1
        );
end;
/
```

