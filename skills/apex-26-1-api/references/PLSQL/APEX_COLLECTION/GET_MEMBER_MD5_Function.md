# APEX_COLLECTION.GET_MEMBER_MD5 Function

Source: [Oracle APEX 26.1 API Reference](https://docs.oracle.com/en/database/oracle/apex/26.1/aeapi/GET_MEMBER_MD5-Function.html)

Status: generated detailed reference. Review edge cases against the source before production use.

Parent package: [APEX_COLLECTION](../APEX_COLLECTION.md)

## Purpose

Computes and returns the message digest of the attributes for the member specified by the sequence ID. This computation of message digest is equal to the computation performed natively by collections. The result of this function can be compared to the MD5_ORIGINAL column of the view APEX_COLLECTIONS .

## When To Use

Use this page when code needs the `APEX_COLLECTION.GET_MEMBER_MD5` function. Confirm security, workspace, and session requirements for your calling context.

## Signature

```sql
APEX_COLLECTION.GET_MEMBER_MD5 (
    p_collection_name   IN VARCHAR2,
    p_seq               IN NUMBER )
RETURN VARCHAR2;
```

## Parameters

| Parameter | Description |
| --- | --- |
| `p_collection_name` | The name of the collection to add this array of members to. An error is returned if this collection does not exist with the specified name of the current user and in the same session. |
| `p_seq` | Sequence ID of the collection member. |

## Important Notes

- Most APEX APIs assume the correct APEX workspace, application, and session context.
- Validate user-controlled values before passing them into administrative, security, SQL, or web-service APIs.
- Use the source link for exact behavior, defaults, and version-specific caveats.

## Simple Example

```sql
declare
    l_result VARCHAR2;
begin
    l_result := apex_collection.GET_MEMBER_MD5(
        p_collection_name => 'EXAMPLE',
        p_seq => 1
    );
    sys.dbms_output.put_line('Result captured.');
end;
/
```

