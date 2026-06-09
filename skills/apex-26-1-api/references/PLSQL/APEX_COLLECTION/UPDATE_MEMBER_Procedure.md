# APEX_COLLECTION.UPDATE_MEMBER Procedure

Source: [Oracle APEX 26.1 API Reference](https://docs.oracle.com/en/database/oracle/apex/26.1/aeapi/UPDATE_MEMBER-Procedure.html)

Status: generated detailed reference. Review edge cases against the source before production use.

Parent package: [APEX_COLLECTION](../APEX_COLLECTION.md)

## Purpose

Updates the specified member in the given named collection.

## When To Use

Use this page when code needs the `APEX_COLLECTION.UPDATE_MEMBER` procedure. Confirm security, workspace, and session requirements for your calling context.

## Signature

```sql
APEX_COLLECTION.UPDATE_MEMBER (
    p_collection_name   IN VARCHAR2,
    p_seq               IN VARCHAR2 DEFAULT NULL,
    p_c001              IN VARCHAR2 DEFAULT NULL,
    p_c002              IN VARCHAR2 DEFAULT NULL,
    p_c003              IN VARCHAR2 DEFAULT NULL,
    …
    p_c050              IN VARCHAR  DEFAULT NULL,
    p_n001              IN NUMBER   DEFAULT NULL,
    p_n002              IN NUMBER   DEFAULT NULL,
    p_n003              IN NUMBER   DEFAULT NULL,
    p_n004              IN NUMBER   DEFAULT NULL,
    p_n005              IN NUMBER   DEFAULT NULL,
    p_d001              IN DATE     DEFAULT NULL,
    p_d002              IN DATE     DEFAULT NULL,
    p_d003              IN DATE     DEFAULT NULL,
    p_d004              IN DATE     DEFAULT NULL,
    p_d005              IN DATE     DEFAULT NULL,   
    p_clob001           IN CLOB     DEFAULT empty_clob(),
    p_blob001           IN BLOB     DEFAULT empty-blob(),
    p_xmltype001        IN XMLTYPE  DEFAULT NULL )
```

## Parameters

| Parameter | Description |
| --- | --- |
| `p_collection_name` | The name of the collection to update. Maximum length is 255 bytes. Collection names are not case-sensitive and are converted to upper case. |
| `p_seq` | Identifies the sequence number of the collection member to be updated. |
| `p_c001 through p_c050` | Attribute value of the member to be added. Maximum length is 4,000 bytes. Any character attribute exceeding 4,000 characters is truncated to 4,000 characters. |
| `p_n001 through p_n005` | Attribute value of the numeric attributes to be added or updated. |
| `p_d001 through p_d005` | Attribute value of the date attributes to be added or updated. |
| `p_clob001` | Use p_clob001 for collection member attributes that exceed 4,000 characters. |
| `p_blob001` | Use p_blob001 for binary collection member attributes. |
| `p_xmltype001` | Use p_xmltype001 to store well-formed XML. |

## Returns

This is a procedure and does not return a value.

## Important Notes

- Most APEX APIs assume the correct APEX workspace, application, and session context.
- Validate user-controlled values before passing them into administrative, security, SQL, or web-service APIs.
- Use the source link for exact behavior, defaults, and version-specific caveats.

## Simple Example

```sql
begin
    apex_collection.UPDATE_MEMBER(
        p_collection_name => 'EXAMPLE',
        p_seq => 'EXAMPLE',
        p_c001 => 'EXAMPLE',
        p_c002 => 'EXAMPLE',
        p_c003 => 'EXAMPLE',
        p_c050 => 'EXAMPLE',
        p_n001 => 1,
        p_n002 => 1,
        p_n003 => 1,
        p_n004 => 1,
        p_n005 => 1,
        p_d001 => sysdate,
        p_d002 => sysdate,
        p_d003 => sysdate,
        p_d004 => sysdate,
        p_d005 => sysdate,
        p_clob001 => to_clob('Example text'),
        p_blob001 => null,
        p_xmltype001 => 'EXAMPLE'
    );
end;
/
```

