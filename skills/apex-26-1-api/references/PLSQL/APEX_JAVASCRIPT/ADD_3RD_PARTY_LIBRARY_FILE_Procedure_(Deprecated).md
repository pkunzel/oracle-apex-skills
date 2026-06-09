# APEX_JAVASCRIPT.ADD_3RD_PARTY_LIBRARY_FILE Procedure (Deprecated)

Source: [Oracle APEX 26.1 API Reference](https://docs.oracle.com/en/database/oracle/apex/26.1/aeapi/ADD_3RD_PARTY_LIBRARY_FILE-Procedure-2.html)

Status: generated detailed reference. Review edge cases against the source before production use.

Parent package: [APEX_JAVASCRIPT](../APEX_JAVASCRIPT.md)

## Purpose

Caution:

## When To Use

Use this page when code needs the `APEX_JAVASCRIPT.ADD_3RD_PARTY_LIBRARY_FILE` procedure. Confirm security, workspace, and session requirements for your calling context.

## Deprecation

This member is marked deprecated in the APEX 26.1 documentation. Prefer the documented replacement when available.

## Signature

```sql
APEX_JAVASCRIPT.ADD_3RD_PARTY_LIBRARY_FILE ( 
    p_library    IN VARCHAR2, 
    p_file_name  IN VARCHAR2 DEFAULT NULL, 
    p_directory  IN VARCHAR2 DEFAULT NULL, 
    p_version    IN VARCHAR2 DEFAULT NULL,
    p_attributes IN VARCHAR2 DEFAULT NULL );
```

## Parameters

| Parameter | Description |
| --- | --- |
| `p_library` | Use one of the c_library_* constants. |
| `p_file_name` | Specifies the file name excluding version, .min , and .js . |
| `p_directory` | (Optional) Directory where the file p_file_name is located. |
| `p_version` | (Optional) If no value is provided, then uses the same version shipped with APEX . |
| `p_attributes` | Extra attributes to add to the script tag. Note: Callers are responsible for escaping this parameter. |

## Returns

This is a procedure and does not return a value.

## Important Notes

- Most APEX APIs assume the correct APEX workspace, application, and session context.
- Validate user-controlled values before passing them into administrative, security, SQL, or web-service APIs.
- Use the source link for exact behavior, defaults, and version-specific caveats.

## Simple Example

```sql
begin
    apex_javascript.ADD_3RD_PARTY_LIBRARY_FILE(
        p_library => 'EXAMPLE',
        p_file_name => 'EXAMPLE',
        p_directory => 'EXAMPLE',
        p_version => 'EXAMPLE',
        p_attributes => 'EXAMPLE'
    );
end;
/
```

## More Complex Example

```sql
begin
    -- Assuming this runs inside an APEX page process with the right workspace/app context.
    apex_javascript.ADD_3RD_PARTY_LIBRARY_FILE(
            p_library => 'EXAMPLE',
            p_file_name => 'EXAMPLE',
            p_directory => 'EXAMPLE',
            p_version => 'EXAMPLE',
            p_attributes => 'EXAMPLE'
        );
end;
/
```

