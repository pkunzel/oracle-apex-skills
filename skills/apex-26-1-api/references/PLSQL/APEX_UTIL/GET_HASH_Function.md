# APEX_UTIL.GET_HASH Function

Source: [Oracle APEX 26.1 API Reference](https://docs.oracle.com/en/database/oracle/apex/26.1/aeapi/GET_HASH-Function.html)

Status: generated detailed reference. Review edge cases against the source before production use.

Parent package: [APEX_UTIL](../APEX_UTIL.md)

## Purpose

This function computes a hash value for all given values, using the APEX instance's default hash algorithm. Use this function to generate hashes with a short lifetime, for instance, to implement lost update detection for data records. If full control on the used hash algorithm is needed, use the STANDARD_HASH SQL function or the functionality within DBMS_CRYPTO package.

## When To Use

Use this page when code needs the `APEX_UTIL.GET_HASH` function. Confirm security, workspace, and session requirements for your calling context.

## Signature

```sql
APEX_UTIL.GET_HASH (
    p_values IN apex_t_varchar2,
    p_salted IN BOOLEAN DEFAULT TRUE )
    RETURN VARCHAR2;
```

## Parameters

| Parameter | Description |
| --- | --- |
| `p_values` | The input values. |
| `p_salted` | If TRUE (default), salt hash with internal session information. |

## Important Notes

- Most APEX APIs assume the correct APEX workspace, application, and session context.
- Validate user-controlled values before passing them into administrative, security, SQL, or web-service APIs.
- Use the source link for exact behavior, defaults, and version-specific caveats.

## Simple Example

```sql
declare
    l_result VARCHAR2;
begin
    l_result := apex_util.GET_HASH(
        p_values => 'EXAMPLE',
        p_salted => true
    );
    sys.dbms_output.put_line('Result captured.');
end;
/
```

## More Complex Example

```sql
declare
    l_result VARCHAR2;
begin
    -- Assuming this runs outside a normal APEX page request.
    apex_session.create_session(
        p_app_id   => 100,
        p_page_id  => 1,
        p_username => 'USER');

    l_result := apex_util.GET_HASH(
            p_values => 'EXAMPLE',
            p_salted => true
        );

    apex_session.delete_session;
exception
    when others then
        apex_session.delete_session;
        raise;
end;
/
```

