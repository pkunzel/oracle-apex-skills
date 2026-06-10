# APEX_COLLECTION.SORT_MEMBERS Procedure

Source: [Oracle APEX 26.1 API Reference](https://docs.oracle.com/en/database/oracle/apex/26.1/aeapi/SORT_MEMBERS-Procedure.html)

Status: generated detailed reference. Review edge cases against the source before production use.

Parent package: [APEX_COLLECTION](../APEX_COLLECTION.md)

## Purpose

Reorders the members of a given collection by the column number specified by p_sort_on_column_number . This sorts the collection by a particular column or attribute in the collection and reassigns the sequence IDs of each number such that no gaps exist.

## When To Use

Use this page when code needs the `APEX_COLLECTION.SORT_MEMBERS` procedure. Confirm security, workspace, and session requirements for your calling context.

## Signature

```sql
APEX_COLLECTION.SORT_MEMBERS (
    p_collection_name       IN VARCHAR2,
    p_sort_on_column_number IN NUMBER )
```

## Parameters

| Parameter | Description |
| --- | --- |
| `p_collection_name` | The name of the collection to sort. An error is returned if this collection does not exist with the specified name of the current user and in the same session. |
| `p_sort_on_column_number` | The column number used to sort the collection. The domain of possible values is 1 to 50. |

## Returns

This is a procedure and does not return a value.

## Important Notes

- Most APEX APIs assume the correct APEX workspace, application, and session context.
- Validate user-controlled values before passing them into administrative, security, SQL, or web-service APIs.
- Use the source link for exact behavior, defaults, and version-specific caveats.

## Simple Example

```sql
begin
    apex_collection.sort_members(
        p_collection_name => 'ORDER_LINES',
        p_sort_on_column_number => 2
    );
end;
/
```

