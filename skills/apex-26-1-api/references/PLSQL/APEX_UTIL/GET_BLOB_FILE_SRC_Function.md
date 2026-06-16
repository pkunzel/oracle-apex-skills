# APEX_UTIL.GET_BLOB_FILE_SRC Function

Source: [Oracle APEX 26.1 API Reference](https://docs.oracle.com/en/database/oracle/apex/26.1/aeapi/GET_BLOB_FILE_SRC-Function.html)

Status: generated detailed reference. Review edge cases against the source before production use.

Parent package: [APEX_UTIL](../APEX_UTIL.md)

## Purpose

As an alternative to using the built-in methods of providing a download link, you can use the APEX_UTIL.GET_BLOB_FILE_SRC function. One advantage of this approach is more specific formatting of the display of the image (with height and width tags). This function must be called from a valid Oracle APEX session and also requires that the parameters that describe the BLOB are listed as the format of a valid item within the application. That item is then referenced by the function.

## When To Use

Use this page when code needs the `APEX_UTIL.GET_BLOB_FILE_SRC` function. Confirm security, workspace, and session requirements for your calling context.

## Signature

```sql
APEX_UTIL.GET_BLOB_FILE_SRC (
    p_item_name           IN VARCHAR2 DEFAULT NULL,
    p_v1                  IN VARCHAR2 DEFAULT NULL,
    p_v2                  IN VARCHAR2 DEFAULT NULL,
    p_content_disposition IN VARCHAR2 DEFAULT NULL )
RETURN VARCHAR2;
```

## Parameters

| Parameter | Description |
| --- | --- |
| `p_item_name` | Name of valid application page item with type FILE that contains the source type of DB column. |
| `p_v1` | Value of primary key column 1. |
| `p_v2` | Value of primary key column 2. |
| `p_content_disposition` | Specify INLINE or ATTACHMENT , all other values ignored. |

## Important Notes

- Most APEX APIs assume the correct APEX workspace, application, and session context.
- Validate user-controlled values before passing them into administrative, security, SQL, or web-service APIs.
- Use the source link for exact behavior, defaults, and version-specific caveats.

## Simple Example

Generate a BLOB download URL for a page item backed by BLOB source columns.

```sql
declare
    l_src varchar2(4000);
begin
    l_src := apex_util.get_blob_file_src(
        p_item_name           => 'P20_PHOTO',
        p_v1                  => :P20_EMPLOYEE_ID,
        p_content_disposition => 'inline');

    htp.p('<img alt="Employee photo" src="' ||
          apex_escape.html_attribute(l_src) || '">');
end;
/
```

