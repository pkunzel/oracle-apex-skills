# APEX_COLLECTION.ADD_MEMBERS Procedure

Source: [Oracle APEX 26.1 API Reference](https://docs.oracle.com/en/database/oracle/apex/26.1/aeapi/ADD_MEMBERS-Procedure.html)

Status: generated detailed reference. Review edge cases against the source before production use.

Parent package: [APEX_COLLECTION](../APEX_COLLECTION.md)

## Purpose

Adds an array of members to a collection. An error occurs if the specified collection does not exist for the current user in the same session for the current application ID.

## When To Use

Use this page when code needs the `APEX_COLLECTION.ADD_MEMBERS` procedure. Confirm security, workspace, and session requirements for your calling context.

## Signature

```sql
APEX_COLLECTION.ADD_MEMBERS (
  p_collection_name IN VARCHAR2,
  p_c001            IN apex_application_global.vc_arr2,
  p_c002            IN apex_application_global.vc_arr2  DEFAULT empty_vc_arr,
  p_c003            IN apex_application_global.vc_arr2  DEFAULT empty_vc_arr,
  ...
  p_c050            IN apex_application_global.vc_arr2  DEFAULT empty_vc_arr,
  p_n001            IN apex_application_global.n_arr    DEFAULT empty_n_arr,
  p_n002            IN apex_application_global.n_arr    DEFAULT empty_n_arr,
  p_n003            IN apex_application_global.n_arr    DEFAULT empty_n_arr,
  p_n004            IN apex_application_global.n_arr    DEFAULT empty_n_arr,
  p_n005            IN apex_application_global.n_arr    DEFAULT empty_n_arr,
  p_d001            IN apex_application_global.d_arr    DEFAULT empty_d_arr,
  p_d002            IN apex_application_global.d_arr    DEFAULT empty_d_arr,
  p_d003            IN apex_application_global.d_arr    DEFAULT empty_d_arr,
  p_d004            IN apex_application_global.d_arr    DEFAULT empty_d_arr,
  p_d005            IN apex_application_global.d_arr    DEFAULT empty_d_arr,
  p_generate_md5    IN VARCHAR2                         DEFAULT 'NO' )
```

## Parameters

| Parameter | Description |
| --- | --- |
| `p_collection_name` | The name of an existing collection. Maximum length is 255 bytes. Collection names are not case sensitive and are converted to upper case. |
| `p_c001 through p_c050` | Array of character attribute values to be added. |
| `p_n001 through p_n005` | Array of numeric attribute values to be added. |
| `p_d001 through p_d005` | Array of date attribute values to be added. |
| `p_generate_md5` | Valid values include YES and NO . YES to specify if the message digest of the data of the collection member should be computed. Use this parameter to compare the MD5 of the collection member with another member or to see if that member has changed. |

## Returns

This is a procedure and does not return a value.

## Important Notes

- Most APEX APIs assume the correct APEX workspace, application, and session context.
- Validate user-controlled values before passing them into administrative, security, SQL, or web-service APIs.
- Use the source link for exact behavior, defaults, and version-specific caveats.

## Simple Example

```sql
begin
    apex_collection.ADD_MEMBERS(
        p_collection_name => 'EXAMPLE',
        p_c001 => null,
        p_c002 => null,
        p_c003 => null,
        p_c050 => null,
        p_n001 => null,
        p_n002 => null,
        p_n003 => null,
        p_n004 => null,
        p_n005 => null,
        p_d001 => null,
        p_d002 => null,
        p_d003 => null,
        p_d004 => null,
        p_d005 => null,
        p_generate_md5 => 'EXAMPLE'
    );
end;
/
```

## More Complex Example

```sql
begin
    -- Assuming this runs inside an APEX page process with the right workspace/app context.
    apex_collection.ADD_MEMBERS(
            p_collection_name => 'EXAMPLE',
            p_c001 => null,
            p_c002 => null,
            p_c003 => null,
            p_c050 => null,
            p_n001 => null,
            p_n002 => null,
            p_n003 => null,
            p_n004 => null,
            p_n005 => null,
            p_d001 => null,
            p_d002 => null,
            p_d003 => null,
            p_d004 => null,
            p_d005 => null,
            p_generate_md5 => 'EXAMPLE'
        );
end;
/
```

