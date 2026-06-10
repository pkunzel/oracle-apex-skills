# APEX_COLLECTION.UPDATE_MEMBERS Procedure

Source: [Oracle APEX 26.1 API Reference](https://docs.oracle.com/en/database/oracle/apex/26.1/aeapi/UPDATE_MEMBERS-Procedure.html)

Status: generated detailed reference. Review edge cases against the source before production use.

Parent package: [APEX_COLLECTION](../APEX_COLLECTION.md)

## Purpose

Updates the array of members for the given named collection.

## When To Use

Use this page when code needs the `APEX_COLLECTION.UPDATE_MEMBERS` procedure. Confirm security, workspace, and session requirements for your calling context.

## Signature

```sql
APEX_COLLECTION.UPDATE_MEMBERS (
    p_collection_name IN VARCHAR2,
    p_seq             IN apex_application_global.vc_arr2 DEFAULT empty_vc_arr,
    p_c001            IN apex_application_global.vc_arr2 DEFAULT empty_vc_arr,
    p_c002            IN apex_application_global.vc_arr2 DEFAULT empty_vc_arr,
    p_c003            IN apex_application_global.vc_arr2 DEFAULT empty_vc_arr,
    ...
    p_c050            IN apex_application_global.vc_arr2 DEFAULT empty_vc_arr,
    p_n001            IN apex_application_global.n_arr   DEFAULT empty_n_arr,
    p_n002            IN apex_application_global.n_arr   DEFAULT empty_n_arr,
    p_n003            IN apex_application_global.n_arr   DEFAULT empty_n_arr,
    p_n004            IN apex_application_global.n_arr   DEFAULT empty_n_arr,
    p_n005            IN apex_application_global.n_arr   DEFAULT empty_n_arr,
    p_d001            IN apex_application_global.d_arr   DEFAULT empty_d_arr,
    p_d002            IN apex_application_global.d_arr   DEFAULT empty_d_arr,
    p_d003            IN apex_application_global.d_arr   DEFAULT empty_d_arr,
    p_d004            IN apex_application_global.d_arr   DEFAULT empty_d_arr,
    p_d005            IN apex_application_global.d_arr   DEFAULT empty_d_arr )
```

## Parameters

| Parameter | Description |
| --- | --- |
| `p_collection_name` | The name of the collection to update. Maximum length is 255 bytes. Collection names are not case-sensitive and are converted to upper case. |
| `p_seq` | Array of member sequence IDs to be updated. The count of the p_seq array is used across all arrays. |
| `p_c001 through p_c050` | Array of attribute values to be updated. |
| `p_n001 through p_n005` | Array of numeric attribute values to be updated. |
| `p_d001 through p_d005` | Array of date attribute values to be updated. |

## Returns

This is a procedure and does not return a value.

## Important Notes

- Most APEX APIs assume the correct APEX workspace, application, and session context.
- Validate user-controlled values before passing them into administrative, security, SQL, or web-service APIs.
- Use the source link for exact behavior, defaults, and version-specific caveats.

## Simple Example

```sql
declare
    l_seq      apex_application_global.vc_arr2;
    l_product  apex_application_global.vc_arr2;
begin
    l_seq(1)     := :P20_SEQ_ID;
    l_product(1) := :P20_PRODUCT_ID;

    apex_collection.update_members(
        p_collection_name => 'ORDER_LINES',
        p_seq             => l_seq,
        p_c001            => l_product
    );
end;
/
```

