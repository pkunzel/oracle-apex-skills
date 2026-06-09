# APEX_COLLECTION.COLLECTION_MEMBER_COUNT Function

Source: [Oracle APEX 26.1 API Reference](https://docs.oracle.com/en/database/oracle/apex/26.1/aeapi/COLLECTION_MEMBER_COUNT-Function.html)

Status: generated detailed reference. Review edge cases against the source before production use.

Parent package: [APEX_COLLECTION](../APEX_COLLECTION.md)

## Purpose

Retrieves the total number of members for the named collection. If gaps exist, the total member count returned is not equal to the highest sequence ID in the collection.

## When To Use

Use this page when code needs the `APEX_COLLECTION.COLLECTION_MEMBER_COUNT` function. Confirm security, workspace, and session requirements for your calling context.

## Signature

```sql
APEX_COLLECTION.COLLECTION_MEMBER_COUNT (
    p_collection_name   IN VARCHAR2 )
RETURN NUMBER;
```

## Parameters

| Parameter | Description |
| --- | --- |
| `p_collection_name` | The name of the collection. |

## Important Notes

- Most APEX APIs assume the correct APEX workspace, application, and session context.
- Validate user-controlled values before passing them into administrative, security, SQL, or web-service APIs.
- Use the source link for exact behavior, defaults, and version-specific caveats.

## Simple Example

```sql
declare
    l_result NUMBER;
begin
    l_result := apex_collection.COLLECTION_MEMBER_COUNT(
        p_collection_name => 'EXAMPLE'
    );
    sys.dbms_output.put_line('Result captured.');
end;
/
```

