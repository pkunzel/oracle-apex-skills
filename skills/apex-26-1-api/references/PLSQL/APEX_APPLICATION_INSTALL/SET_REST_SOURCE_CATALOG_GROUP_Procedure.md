# APEX_APPLICATION_INSTALL.SET_REST_SOURCE_CATALOG_GROUP Procedure

Source: [Oracle APEX 26.1 API Reference](https://docs.oracle.com/en/database/oracle/apex/26.1/aeapi/SET_REST_SOURCE_CATALOG_GROUP-Procedure.html)

Status: generated detailed reference. Review edge cases against the source before production use.

Parent package: [APEX_APPLICATION_INSTALL](../APEX_APPLICATION_INSTALL.md)

## Purpose

This procedure sets the REST Source Catalog group to import a new REST Source Catalog.

## When To Use

Use this page when code needs the `APEX_APPLICATION_INSTALL.SET_REST_SOURCE_CATALOG_GROUP` procedure. Confirm security, workspace, and session requirements for your calling context.

## Signature

```sql
APEX_APPLICATION_INSTALL.SET_REST_SOURCE_CATALOG_GROUP (
    p_name  IN VARCHAR2 )
```

## Parameters

| Parameter | Description |
| --- | --- |
| `p_name` | The name of the REST Source Catalog Group. That Group must exist in the workspace. |

## Returns

This is a procedure and does not return a value.

## Important Notes

- Most APEX APIs assume the correct APEX workspace, application, and session context.
- Validate user-controlled values before passing them into administrative, security, SQL, or web-service APIs.
- Use the source link for exact behavior, defaults, and version-specific caveats.

## Simple Example

```sql
begin
    apex_application_install.SET_REST_SOURCE_CATALOG_GROUP(
        p_name => 'EXAMPLE'
    );
end;
/
```

## More Complex Example

```sql
begin
    -- Assuming this runs inside an APEX page process with the right workspace/app context.
    apex_application_install.SET_REST_SOURCE_CATALOG_GROUP(
            p_name => 'EXAMPLE'
        );
end;
/
```

