# APEX_COLLECTION.MOVE_MEMBER_UP Procedure

Source: [Oracle APEX 26.1 API Reference](https://docs.oracle.com/en/database/oracle/apex/26.1/aeapi/MOVE_MEMBER_UP-Procedure.html)

Status: generated detailed reference. Review edge cases against the source before production use.

Parent package: [APEX_COLLECTION](../APEX_COLLECTION.md)

## Purpose

Adjusts the sequence ID of specified member in the given named collection up by one (add one), swapping sequence ID with the one it is replacing. For example, 2 becomes 3 and 3 becomes 2.

## When To Use

Use this page when code needs the `APEX_COLLECTION.MOVE_MEMBER_UP` procedure. Confirm security, workspace, and session requirements for your calling context.

## Signature

```sql
APEX_COLLECTION.MOVE_MEMBER_UP (
    p_collection_name   IN VARCHAR2,
    p_seq               IN NUMBER )
```

## Parameters

| Parameter | Description |
| --- | --- |
| `p_collection_name` | The name of the collection. Maximum length is 255 bytes. Collection names are not case sensitive and are converted to upper case. An error is returned if this collection does not exist with the specified name of the current user in the same session. |
| `p_seq` | Identifies the sequence number of the collection member to be moved up by one. |

## Returns

This is a procedure and does not return a value.

## Important Notes

- Most APEX APIs assume the correct APEX workspace, application, and session context.
- Validate user-controlled values before passing them into administrative, security, SQL, or web-service APIs.
- Use the source link for exact behavior, defaults, and version-specific caveats.

## Simple Example

```sql
begin
    apex_collection.move_member_up(
        p_collection_name => 'ORDER_LINES',
        p_seq             => :P20_SEQ_ID
    );
end;
/
```

