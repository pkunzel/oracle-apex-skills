# APEX_AUTOMATION.GET_LAST_RUN Function

Source: [Oracle APEX 26.1 API Reference](https://docs.oracle.com/en/database/oracle/apex/26.1/aeapi/APEX_AUTOMATION_GET_LAST_RETURN-Function.html)

Status: generated detailed reference. Review edge cases against the source before production use.

Parent package: [APEX_AUTOMATION](../APEX_AUTOMATION.md)

## Purpose

This function returns the last run of the automation as a TIMESTAMP WITH TIME ZONE type. Use this function within automation action code or the automation query.

## When To Use

Use this page when code needs the `APEX_AUTOMATION.GET_LAST_RUN` function. Confirm security, workspace, and session requirements for your calling context.

## Signature

```sql
APEX_AUTOMATION.GET_LAST_RUN
    RETURN timestamp with time zone;
```

## Returns

Return Description * Timestamp of the previous automation run.

## Important Notes

- Most APEX APIs assume the correct APEX workspace, application, and session context.
- Validate user-controlled values before passing them into administrative, security, SQL, or web-service APIs.
- Use the source link for exact behavior, defaults, and version-specific caveats.

## Simple Example

```sql
declare
    l_result TIMESTAMP;
begin
    l_result := apex_automation.GET_LAST_RUN;
    sys.dbms_output.put_line('Result captured.');
end;
/
```

