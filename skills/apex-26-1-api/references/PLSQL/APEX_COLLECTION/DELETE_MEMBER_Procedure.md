# APEX_COLLECTION.DELETE_MEMBER Procedure

Source: [Oracle APEX 26.1 API Reference](https://docs.oracle.com/en/database/oracle/apex/26.1/aeapi/DELETE_MEMBER-Procedure.html)

Status: generated detailed reference. Review edge cases against the source before production use.

Parent package: [APEX_COLLECTION](../APEX_COLLECTION.md)

## Purpose

Deletes a specified member from a given named collection.

## When To Use

Use this page when code needs the `APEX_COLLECTION.DELETE_MEMBER` procedure. Confirm security, workspace, and session requirements for your calling context.

## Signature

```sql
APEX_COLLECTION.DELETE_MEMBER (
    p_collection_name   IN VARCHAR2,
    p_seq               IN VARCHAR2 )
```

## Parameters

| Parameter | Description |
| --- | --- |
| `p_collection_name` | The name of the collection to delete the specified member from. The maximum length is 255 characters. Collection names are not case-sensitive and are converted to upper case. An error is returned if this collection does not exist for the current user in the same session. |
| `p_seq` | This is the sequence ID of the collection member to be deleted. |

## Returns

This is a procedure and does not return a value.

## Important Notes

- Most APEX APIs assume the correct APEX workspace, application, and session context.
- Validate user-controlled values before passing them into administrative, security, SQL, or web-service APIs.
- Use the source link for exact behavior, defaults, and version-specific caveats.

## Simple Example

```sql
begin
    apex_collection.DELETE_MEMBER(
        p_collection_name => 'EXAMPLE',
        p_seq => 'EXAMPLE'
    );
end;
/
```

## More Complex Example

```sql
begin
    -- Assuming this runs inside an APEX page process with the right workspace/app context.
    apex_collection.DELETE_MEMBER(
            p_collection_name => 'EXAMPLE',
            p_seq => 'EXAMPLE'
        );
end;
/
```

