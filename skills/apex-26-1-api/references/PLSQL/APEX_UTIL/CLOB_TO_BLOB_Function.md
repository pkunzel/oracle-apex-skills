# APEX_UTIL.CLOB_TO_BLOB Function

Source: [Oracle APEX 26.1 API Reference](https://docs.oracle.com/en/database/oracle/apex/26.1/aeapi/CLOB_TO_BLOB-Function.html)

Status: generated detailed reference. Review edge cases against the source before production use.

Parent package: [APEX_UTIL](../APEX_UTIL.md)

## Purpose

This function converts a CLOB to a temporary BLOB.

## When To Use

Use this page when code needs the `APEX_UTIL.CLOB_TO_BLOB` function. Confirm security, workspace, and session requirements for your calling context.

## Signature

```sql
APEX_UTIL.CLOB_TO_BLOB (
    p_clob              IN CLOB,
    p_charset           IN VARCHAR2 DEFAULT NULL,
    p_include_bom       IN VARCHAR2 DEFAULT 'N',
    --
    p_in_memory         IN VARCHAR2 DEFAULT 'Y',
    p_free_immediately  IN VARCHAR2 DEFAULT 'Y' )
RETURN BLOB;
```

## Parameters

| Parameter | Description |
| --- | --- |
| `p_clob` | CLOB to convert to a BLOB. |
| `p_charset` | Character set to convert the BLOB to. If omitted, no character set conversion happens. |
| `p_include_bom` | Prepend the generated BLOB with a BOM. |
| `p_in_memory` | If Y is specified, create the temporary LOB in memory. |
| `p_free_immediately` | If Y is specified, clean up the temporary LOB after the top-level call. |

## Returns

Temporary BLOB containing the CLOB contents.

## Important Notes

- Most APEX APIs assume the correct APEX workspace, application, and session context.
- Validate user-controlled values before passing them into administrative, security, SQL, or web-service APIs.
- Use the source link for exact behavior, defaults, and version-specific caveats.

## Simple Example

Convert generated text to a UTF-8 BLOB before storing or sending it.

```sql
declare
    l_payload clob := json_object(
        'orderId' value :P10_ORDER_ID,
        'status'  value :P10_STATUS
        returning clob);
    l_blob blob;
begin
    l_blob := apex_util.clob_to_blob(
        p_clob        => l_payload,
        p_charset     => 'AL32UTF8',
        p_include_bom => 'N');

    insert into outbound_messages(message_type, payload_blob)
    values ('ORDER_STATUS', l_blob);
end;
/
```

