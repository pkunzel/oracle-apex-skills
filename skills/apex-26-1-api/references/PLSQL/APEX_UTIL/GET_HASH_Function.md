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

Hash multiple values as a tamper check for server-side comparisons.

```sql
declare
    l_hash varchar2(4000);
begin
    l_hash := apex_util.get_hash(
        p_values => apex_t_varchar2(:APP_USER, :P10_ORDER_ID, :P10_STATUS),
        p_salted => true);

    apex_util.set_session_state('P10_STATUS_HASH', l_hash);
end;
/
```

