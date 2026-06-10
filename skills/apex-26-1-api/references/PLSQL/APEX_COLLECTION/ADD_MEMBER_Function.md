# APEX_COLLECTION.ADD_MEMBER Function

Source: [Oracle APEX 26.1 API Reference](https://docs.oracle.com/en/database/oracle/apex/26.1/aeapi/ADD_MEMBER-Function.html)

Status: generated detailed reference. Review edge cases against the source before production use.

Parent package: [APEX_COLLECTION](../APEX_COLLECTION.md)

## Purpose

Adds a new member to an existing collection. Calling this function returns the sequence ID of the newly added member. An error occurs if the specified collection does not exist for the current user in the same session for the current application ID.

## When To Use

Use this page when code needs the `APEX_COLLECTION.ADD_MEMBER` function. Confirm security, workspace, and session requirements for your calling context.

## Signature

```sql
APEX_COLLECTION.ADD_MEMBER (
    p_collection_name   IN VARCHAR2,
    p_c001              IN VARCHAR2 DEFAULT NULL,
    ...
    p_c050              IN VARCHAR2 DEFAULT NULL,
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
    p_blob001           IN BLOB     DEFAULT empty_blob(),
    p_xmltype001        IN XMLTYPE  DEFAULT NULL,
    p_generate_md5      IN VARCHAR2 DEFAULT 'NO' )
RETURN NUMBER;
```

## Parameters

| Parameter | Description |
| --- | --- |
| `p_collection_name` | The name of an existing collection. Maximum length is 255 bytes. Collection names are not case sensitive and are converted to upper case. |
| `p_c001 through p_c050` | Attribute value of the member to be added. Maximum length is 4,000 bytes. Any character attribute exceeding 4,000 characters is truncated to 4,000 characters. |
| `p_n001 through p_n005` | Attribute value of the numeric attributes to be added. |
| `p_d001 through p_d005` | Attribute value of the date attribute to be added. |
| `p_clob001` | Use for collection member attributes that exceed 4,000 characters. |
| `p_blob001` | Use for binary collection member attributes. |
| `p_xmltype001` | Use to store well-formed XML. |
| `p_generate_md5` | Valid values include YES and NO . YES to specify if the message digest of the data of the collection member should be computed. Use this parameter to compare the MD5 of the collection member with another member or to see if that member has changed. |

## Important Notes

- Most APEX APIs assume the correct APEX workspace, application, and session context.
- Validate user-controlled values before passing them into administrative, security, SQL, or web-service APIs.
- Use the source link for exact behavior, defaults, and version-specific caveats.

## Simple Example

```sql
declare
    l_seq_id number;
begin
    l_seq_id := apex_collection.add_member(
        p_collection_name => 'ORDER_LINES',
        p_c001            => :P20_PRODUCT_ID,
        p_c002            => :P20_PRODUCT_NAME,
        p_n001            => :P20_QUANTITY,
        p_n002            => :P20_UNIT_PRICE,
        p_generate_md5    => 'YES'
    );
end;
/
```

