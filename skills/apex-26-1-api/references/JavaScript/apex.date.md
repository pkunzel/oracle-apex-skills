# apex.date

Source: [Oracle APEX 26.1 JavaScript API Reference](https://docs.oracle.com/en/database/oracle/apex/26.1/aexjs/apex.date.html)

Status: curated first-pass reference.

## Purpose

`apex.date` provides client-side date arithmetic, comparison, parsing, formatting, and relative-date helpers. It is useful for due dates, task/workflow timelines, dashboard badges, and client-side validation before a request reaches PL/SQL.

Use it for browser-side UX. Server-side date validation and storage rules still belong in PL/SQL or SQL.

## When To Use

Use `apex.date` when:

- JavaScript needs to add or subtract days, weeks, months, or years.
- A page needs to compare a due date to today.
- Client code needs to format or parse a date string.
- A dashboard needs relative time such as "3 hours ago".
- A component needs month boundaries, week numbers, or start/end-of-day values.

## Curated Patterns

Add two days to the current date for a default task due date:

```javascript
const due = apex.date.add(
    apex.date.clone( new Date() ),
    2,
    apex.date.UNIT.DAY
);

$s( "P10_DUE_DATE", apex.date.toISOString( due ) );
```

Check whether a task is overdue:

```javascript
const dueDate = apex.date.parse( $v( "P10_DUE_DATE" ), "YYYY-MM-DD" );

if ( apex.date.isBefore( dueDate, new Date(), apex.date.UNIT.DAY ) ) {
    apex.message.showErrors( [ {
        type: "error",
        location: "inline",
        pageItem: "P10_DUE_DATE",
        message: apex.lang.getMessage( "DUE_DATE_IN_PAST" ),
        unsafe: false
    } ] );
}
```

Format a timeline label:

```javascript
const createdOn = apex.date.parse( $v( "P10_CREATED_ON" ), "YYYY-MM-DD\"T\"HH24:MI:SS" );
$( "#createdAgo" ).text( apex.date.since( createdOn, true ) );
```

Use clones when you do not want to mutate the original date object:

```javascript
const start = apex.date.startOfDay( apex.date.clone( new Date() ) );
const end = apex.date.endOfDay( apex.date.clone( new Date() ) );
```

## Safety Guidance

- `add` and `subtract` modify the date object passed in; clone first when preserving the original matters.
- Treat client-side validation as user assistance, not authority.
- Use APEX/server-side validation before saving date values.
- Match date format masks to the actual string format being parsed.
- Pair date display with `apex.locale` when locale-specific formatting is required.

## Generated API Surface

| Member | Parameters | Returns |
| --- | --- | --- |
| `UNIT` | None documented | Not documented |
| `ISOWeek` | `pDate` | The week number Type number Example Returns the ISO-8601 week number. |
| `add` | `pDate`, `pAmount`, `pUnit` | The modified date object Type Date Example Returns the modified date object. |
| `clone` | `pDate` | The cloned date object Type Date Example Returns the clone of a given date object. |
| `dayOfWeek` | `pDate` | The day number Type number Example Returns the day number of given week. |
| `daysInMonth` | `pDate` | The days count Type number Example Returns the day count of given month. |
| `endOfDay` | `pDate` | The end date of a day Type Date Example Returns the end date of a given day. |
| `firstOfMonth` | `pDate` | The first day as date Type Date Example Returns the first day of a given month as date object. |
| `format` | `pDate`, `pFormat`, `pLocale` | The formatted date string Type string Example Returns the formatted date string. |
| `getDayOfYear` | `pDate` | The day number Type number Example Returns the day number of given year. |
| `isAfter` | `pDate1`, `pDate2`, `pUnit` | is the date after Type boolean Example Returns if a date object is before another. |
| `isBefore` | `pDate1`, `pDate2`, `pUnit` | is the date before Type boolean Example Returns if a date object is before another. |
| `isBetween` | `pDate1`, `pDate2`, `pDate3`, `pUnit` | is the date between Type boolean Example Returns if a date object is between 2 another. |
| `isLeapYear` | `pDate` | is a leap year Type boolean Example Returns if it's a leap year for a given date. |
| `isSame` | `pDate1`, `pDate2`, `pUnit` | is the date same Type boolean Example Returns if a date object is the same as another. |
| `isSameOrAfter` | `pDate1`, `pDate2`, `pUnit` | is the date same/after Type boolean Example Returns if a date object is the same or after another. |
| `isSameOrBefore` | `pDate1`, `pDate2`, `pUnit` | is the date same/before Type boolean Example Returns if a date object is the same or before another. |
| `isValid` | `pDate` | is it a valid date Type boolean Example Returns if a date object is valid. |
| `isValidString` | `pDateString` | is it a valid date Type boolean Example Returns if a date string is valid. |
| `lastOfMonth` | `pDate` | The last day as date Type Date Example Returns the last day of a given month as date. |
| `max` | `&hellip;pDates` | The max date object Type Date Example Returns the maximum (most distant future) of the given date. |
| `min` | `&hellip;pDates` | The min date object Type Date Example Returns the minimum (most distant future) of the given date. |
| `monthsBetween` | `pDate1`, `pDate2` | The month count Type number Example Returns the count of months between 2 dates. |
| `parse` | `pDateString`, `pFormat` | The date object Type Date Example Returns the parsed date object. |
| `secondsPastMidnight` | `pDate` | seconds past midnight Type number Example Returns the seconds past midnight. |
| `setDayOfYear` | `pDate`, `pDay` | The date object Type Date Example Returns the date object. |
| `since` | `pDate`, `pShort` | The formatted date string Type string Example Returns the relative date in words. |
| `startOfDay` | `pDate` | The start date of a day Type Date Example Returns the start date of a given day. |
| `subtract` | `pDate`, `pAmount`, `pUnit` | The modified date object Type Date Example Returns the modified date object. |
| `toISOString` | `pDate` | The formatted date string Type string Example Returns date as ISO format string. |
| `weekOfMonth` | `pDate` | The week number Type number Example Returns the week number of given month. Documentation generated by JSDoc 4.0.5 on Fri Apr 17 2026 17:55:51 GMT+0000 (Coordinated Universal Time) Oracle APEX Release 26.1, JavaScript API Reference Copyright &copy; 2003, 2026, Oracle and/or its affiliates. All rights reserved. |

## UNIT

Signature: `(static) UNIT :object`

### Purpose

Constants for the different date/time units used by apex.date functions.

### Option/Object Properties

| Name | Type | Description |
| --- | --- | --- |
| `MILLISECOND` | string | Constant to use for milliseconds |
| `SECOND` | string | Constant to use for seconds |
| `MINUTE` | string | Constant to use for minutes |
| `HOUR` | string | Constant to use for hours |
| `DAY` | string | Constant to use for days |
| `WEEK` | string | Constant to use for weeks |
| `MONTH` | string | Constant to use for months |
| `YEAR` | string | Constant to use for years |

### Simple Example

```javascript
apex.date.UNIT = {
    MILLISECOND: "millisecond",
    SECOND: "second",
    MINUTE: "minute",
    HOUR: "hour",
    DAY: "day",
    WEEK: "week",
    MONTH: "month",
    YEAR: "year"
};

apex.date.add( myDate, 2, apex.date.UNIT.DAY );
apex.date.add( myDate, 1, apex.date.UNIT.YEAR );
apex.date.subtract( myDate, 30, apex.date.UNIT.MINUTE );
apex.date.subtract( myDate, 6, apex.date.UNIT.HOUR );
```

## ISOWeek

Signature: `(static) ISOWeek (pDate opt ) &rarr; {number}`

### Purpose

Return the ISO-8601 week number of the year of a given date object. If pDate is not provided it uses the current date & time.

### Parameters

| Name | Type | Description |
| --- | --- | --- |
| `pDate` | Date |  new Date() A date object |

### Returns

The week number Type number Example Returns the ISO-8601 week number.

### Simple Example

```javascript
var weekNumber = apex.date.ISOWeek( myDate );
```

## add

Signature: `(static) add (pDate opt , pAmount, pUnit opt ) &rarr; {Date}`

### Purpose

Add a certain amount of time to an existing date. This function returns the modified date object as well as altering the original object. If the given date object should not be manipulated use apex.date.clone before calling this function. If pDate is not provided it uses the current date & time.

### Parameters

| Name | Type | Description |
| --- | --- | --- |
| `pDate` | Date |  new Date() A date object |
| `pAmount` | number |   The amount to add |
| `pUnit` | string |  apex.date.UNIT.MILLISECOND The unit to use - apex.date.UNIT constant |

### Returns

The modified date object Type Date Example Returns the modified date object.

### Simple Example

```javascript
var myDate = new Date( "2021-06-20" );
myDate = apex.date.add( myDate, 2, apex.date.UNIT.DAY );
// myDate is now "2021-06-21"
```

## clone

Signature: `(static) clone (pDate) &rarr; {Date}`

### Purpose

Return the cloned instance of a given date object. This is useful when you want to do actions on a date object without altering the original object. If pDate is not provided it uses the current date & time.

### Parameters

| Name | Type | Description |
| --- | --- | --- |
| `pDate` | Date | A date object |

### Returns

The cloned date object Type Date Example Returns the clone of a given date object.

### Simple Example

```javascript
var myDate = new Date();
var clonedDate = apex.date.clone( myDate );
```

## dayOfWeek

Signature: `(static) dayOfWeek (pDate opt ) &rarr; {number}`

### Purpose

Return the day number of week of a given date object. If pDate is not provided it uses the current date & time.

### Parameters

| Name | Type | Description |
| --- | --- | --- |
| `pDate` | Date |  new Date() A date object |

### Returns

The day number Type number Example Returns the day number of given week.

### Simple Example

```javascript
var weekDay = apex.date.dayOfWeek( myDate );
```

## daysInMonth

Signature: `(static) daysInMonth (pDate opt ) &rarr; {number}`

### Purpose

Return the day count of a month of a given date object. If pDate is not provided it uses the current date & time.

### Parameters

| Name | Type | Description |
| --- | --- | --- |
| `pDate` | Date |  new Date() A date object |

### Returns

The days count Type number Example Returns the day count of given month.

### Simple Example

```javascript
var dayCount = apex.date.daysInMonth( myDate );
```

## endOfDay

Signature: `(static) endOfDay (pDate opt ) &rarr; {Date}`

### Purpose

Return the end date of a day of a given date object. If pDate is not provided it uses the current date & time.

### Parameters

| Name | Type | Description |
| --- | --- | --- |
| `pDate` | Date |  new Date() A date object |

### Returns

The end date of a day Type Date Example Returns the end date of a given day.

### Simple Example

```javascript
var dayEndDate = apex.date.endOfDay( myDate );
// output: "2021-JUN-29 23:59:59" (as date object)
```

## firstOfMonth

Signature: `(static) firstOfMonth (pDate opt ) &rarr; {Date}`

### Purpose

Return a new date object for the first day a month of a given date object. If pDate is not provided it uses the current date & time.

### Parameters

| Name | Type | Description |
| --- | --- | --- |
| `pDate` | Date |  new Date() A date object |

### Returns

The first day as date Type Date Example Returns the first day of a given month as date object.

### Simple Example

```javascript
var firstDayDate = apex.date.firstOfMonth( myDate );
// output: "2021-JUN-01" (as date object)
```

## format

Signature: `(static) format (pDate opt , pFormat opt , pLocale opt ) &rarr; {string}`

### Purpose

Return the formatted string of a date with a given (Oracle compatible) format mask. If pDate is not provided it uses the current date & time. It uses the default date format mask & locale defined in the application globalization settings.

### Parameters

| Name | Type | Description |
| --- | --- | --- |
| `pDate` | Date |  new Date() A date object |
| `pFormat` | string |  apex.locale.getDateFormat() The format mask |
| `pLocale` | string |  apex.locale.getLanguage() The locale |

### Returns

The formatted date string Type string Example Returns the formatted date string.

### Simple Example

```javascript
var dateString = apex.date.format( myDate, "YYYY-MM-DD HH24:MI" );
// output: "2021-06-29 15:30"

var dateString = apex.date.format( myDate, "Day, DD Month YYYY" );
// output: "Wednesday, 29 June 2021"

var dateString = apex.date.format( myDate, "Day, DD Month YYYY", "de" );
// output: "Mittwoch, 29 Juni 2021"
```

## getDayOfYear

Signature: `(static) getDayOfYear (pDate opt ) &rarr; {number}`

### Purpose

Return the day number of a year of a given date object. If pDate is not provided it uses the current date & time.

### Parameters

| Name | Type | Description |
| --- | --- | --- |
| `pDate` | Date |  new Date() A date object |

### Returns

The day number Type number Example Returns the day number of given year.

### Simple Example

```javascript
var dayNumber = apex.date.getDayOfYear( myDate );
```

## isAfter

Signature: `(static) isAfter (pDate1, pDate2, pUnit opt ) &rarr; {boolean}`

### Purpose

Return true if the first date object is after the second date. pUnit controls the precision of the comparison.

### Parameters

| Name | Type | Description |
| --- | --- | --- |
| `pDate1` | Date |   A date object |
| `pDate2` | Date |   A date object |
| `pUnit` | string |  apex.date.UNIT.MILLISECOND The unit to use - apex.date.UNIT constant |

### Returns

is the date after Type boolean Example Returns if a date object is before another.

### Simple Example

```javascript
var isDateAfter = apex.date.isAfter( myDate1, myDate2, apex.date.UNIT.SECOND );
```

## isBefore

Signature: `(static) isBefore (pDate1, pDate2, pUnit opt ) &rarr; {boolean}`

### Purpose

Return true if the first date object is before the second date. pUnit controls the precision of the comparison.

### Parameters

| Name | Type | Description |
| --- | --- | --- |
| `pDate1` | Date |   A date object |
| `pDate2` | Date |   A date object |
| `pUnit` | string |  apex.date.UNIT.MILLISECOND The unit to use - apex.date.UNIT constant |

### Returns

is the date before Type boolean Example Returns if a date object is before another.

### Simple Example

```javascript
var isDateBefore = apex.date.isBefore( myDate1, myDate2, apex.date.UNIT.SECOND );
```

## isBetween

Signature: `(static) isBetween (pDate1, pDate2, pDate3, pUnit opt ) &rarr; {boolean}`

### Purpose

Return true if the first date object is between the second date and the third date. pUnit controls the precision of the comparison.

### Parameters

| Name | Type | Description |
| --- | --- | --- |
| `pDate1` | Date |   A date object |
| `pDate2` | Date |   A date object |
| `pDate3` | Date |   A date object |
| `pUnit` | string |  apex.date.UNIT.MILLISECOND The unit to use - apex.date.UNIT constant |

### Returns

is the date between Type boolean Example Returns if a date object is between 2 another.

### Simple Example

```javascript
var isDateBetween = apex.date.isBetween( myDate1, myDate2, myDate3, apex.date.UNIT.SECOND );
```

## isLeapYear

Signature: `(static) isLeapYear (pDate opt ) &rarr; {boolean}`

### Purpose

Return true if a given date object is within a leap year. If pDate is not provided it uses the current date & time.

### Parameters

| Name | Type | Description |
| --- | --- | --- |
| `pDate` | Date |  new Date() A date object |

### Returns

is a leap year Type boolean Example Returns if it's a leap year for a given date.

### Simple Example

```javascript
var isLeapYear = apex.date.isLeapYear( myDate );
```

## isSame

Signature: `(static) isSame (pDate1, pDate2, pUnit opt ) &rarr; {boolean}`

### Purpose

Return true if the first date object is the same as the second date. pUnit controls the precision of the comparison.

### Parameters

| Name | Type | Description |
| --- | --- | --- |
| `pDate1` | Date |   A date object |
| `pDate2` | Date |   A date object |
| `pUnit` | string |  apex.date.UNIT.MILLISECOND The unit to use - apex.date.UNIT constant |

### Returns

is the date same Type boolean Example Returns if a date object is the same as another.

### Simple Example

```javascript
var isDateSame = apex.date.isSame( myDate1, myDate2, apex.date.UNIT.SECOND );
```

## isSameOrAfter

Signature: `(static) isSameOrAfter (pDate1, pDate2, pUnit opt ) &rarr; {boolean}`

### Purpose

Return true if the first date object is the same or after the second date. pUnit controls the precision of the comparison.

### Parameters

| Name | Type | Description |
| --- | --- | --- |
| `pDate1` | Date |   A date object |
| `pDate2` | Date |   A date object |
| `pUnit` | string |  apex.date.UNIT.MILLISECOND The unit to use - apex.date.UNIT constant |

### Returns

is the date same/after Type boolean Example Returns if a date object is the same or after another.

### Simple Example

```javascript
var isDateSameAfter = apex.date.isSameOrAfter( myDate1, myDate2, apex.date.UNIT.SECOND );
```

## isSameOrBefore

Signature: `(static) isSameOrBefore (pDate1, pDate2, pUnit opt ) &rarr; {boolean}`

### Purpose

Return true if the first date object is the same or before the second date. pUnit controls the precision of the comparison.

### Parameters

| Name | Type | Description |
| --- | --- | --- |
| `pDate1` | Date |   A date object |
| `pDate2` | Date |   A date object |
| `pUnit` | string |  apex.date.UNIT.MILLISECOND The unit to use - apex.date.UNIT constant |

### Returns

is the date same/before Type boolean Example Returns if a date object is the same or before another.

### Simple Example

```javascript
var isDateSameBefore = apex.date.isSameOrBefore( myDate1, myDate2, apex.date.UNIT.SECOND );
```

## isValid

Signature: `(static) isValid (pDate) &rarr; {boolean}`

### Purpose

Return true if a given object is a valid date object.

### Parameters

| Name | Type | Description |
| --- | --- | --- |
| `pDate` | Date | A date object |

### Returns

is it a valid date Type boolean Example Returns if a date object is valid.

### Simple Example

```javascript
var isDateValid = apex.date.isValid( myDate );
```

## isValidString

Signature: `(static) isValidString (pDateString) &rarr; {boolean}`

### Purpose

Return true if a given string can parse into a date object. Note: This could be browser specific dependent on the implementation of Date.parse.

### Parameters

| Name | Type | Description |
| --- | --- | --- |
| `pDateString` | string | A date string |

### Returns

is it a valid date Type boolean Example Returns if a date string is valid.

### Simple Example

```javascript
var isDateValid = apex.date.isValidString( "2021-06-29 15:30" );
```

## lastOfMonth

Signature: `(static) lastOfMonth (pDate opt ) &rarr; {Date}`

### Purpose

Return a new date object for the last day of a month of a given date object. If pDate is not provided it uses the current date & time.

### Parameters

| Name | Type | Description |
| --- | --- | --- |
| `pDate` | Date |  new Date() A date object |

### Returns

The last day as date Type Date Example Returns the last day of a given month as date.

### Simple Example

```javascript
var lastDayDate = apex.date.lastOfMonth( myDate );
// output: "2021-JUN-30" (as date object)
```

## max

Signature: `(static) max (&hellip;pDates opt ) &rarr; {Date}`

### Purpose

Return the maximum date of given date object arguments. If pDates is not provided it uses the current date & time.

### Option/Object Properties

| Name | Type | Description |
| --- | --- | --- |
| `pDates` | date |  [new Date()] Multiple date objects as arguments |

### Returns

The max date object Type Date Example Returns the maximum (most distant future) of the given date.

### Simple Example

```javascript
var maxDate = apex.date.max( myDate1, myDate2, myDate3 );
```

## min

Signature: `(static) min (&hellip;pDates opt ) &rarr; {Date}`

### Purpose

Return the minimum date of given date object arguments. If pDates is not provided it uses the current date & time.

### Option/Object Properties

| Name | Type | Description |
| --- | --- | --- |
| `pDates` | date |  [new Date()] Multiple date objects as arguments |

### Returns

The min date object Type Date Example Returns the minimum (most distant future) of the given date.

### Simple Example

```javascript
var minDate = apex.date.min( myDate1, myDate2, myDate3 );
```

## monthsBetween

Signature: `(static) monthsBetween (pDate1, pDate2) &rarr; {number}`

### Purpose

Return the count of months between 2 date objects.

### Parameters

| Name | Type | Description |
| --- | --- | --- |
| `pDate1` | Date | A date object |
| `pDate2` | Date | A date object |

### Returns

The month count Type number Example Returns the count of months between 2 dates.

### Simple Example

```javascript
var months = apex.date.monthsBetween( myDate1, myDate2 );
```

## parse

Signature: `(static) parse (pDateString, pFormat opt ) &rarr; {Date}`

### Purpose

Return the parsed date object of a given date string and a (Oracle compatible) format mask. It uses the default date format mask defined in the application globalization settings.

### Parameters

| Name | Type | Description |
| --- | --- | --- |
| `pDateString` | string |   A formatted date string |
| `pFormat` | string |  apex.locale.getDateFormat() The format mask |

### Returns

The date object Type Date Example Returns the parsed date object.

### Simple Example

```javascript
var date = apex.date.parse( "2021-06-29 15:30", "YYYY-MM-DD HH24:MI" );
var date = apex.date.parse( "2021-JUN-29 08:30 am", "YYYY-MON-DD HH12:MI AM" );
```

## secondsPastMidnight

Signature: `(static) secondsPastMidnight (pDate opt ) &rarr; {number}`

### Purpose

Return the seconds past midnight of day of a given date object.

### Parameters

| Name | Type | Description |
| --- | --- | --- |
| `pDate` | Date |  new Date() A date object |

### Returns

seconds past midnight Type number Example Returns the seconds past midnight.

### Simple Example

```javascript
var seconds = apex.date.secondsPastMidnight( myDate );
```

## setDayOfYear

Signature: `(static) setDayOfYear (pDate opt , pDay) &rarr; {Date}`

### Purpose

Set the day number of a year of a given date object. If the given date object should not be manipulated use apex.date.clone before calling this function. If pDate is not provided it uses the current date & time.

### Parameters

| Name | Type | Description |
| --- | --- | --- |
| `pDate` | Date |  new Date() A date object |
| `pDay` | number |   The day number |

### Returns

The date object Type Date Example Returns the date object.

### Simple Example

```javascript
var myDate = new Date();
apex.date.setDayOfYear( myDate, 126 );
```

## since

Signature: `(static) since (pDate opt , pShort opt ) &rarr; {string}`

### Purpose

Return the relative date in words of a given date object This is the client side counterpart of the PL/SQL function APEX_UTIL.GET_SINCE . If pDate is not provided it uses the current date & time.

### Parameters

| Name | Type | Description |
| --- | --- | --- |
| `pDate` | string |  new Date() A date object |
| `pShort` | boolean |  false Whether to return a short version of relative date |

### Returns

The formatted date string Type string Example Returns the relative date in words.

### Simple Example

```javascript
var sinceString = apex.date.since( myDate );
// output: "2 days from now" or "30 minutes ago"

var sinceString = apex.date.since( myDate, true );
// output: "In 1.1y" or "30m"
```

## startOfDay

Signature: `(static) startOfDay (pDate opt ) &rarr; {Date}`

### Purpose

Return the start date of a day of a given date object. If pDate is not provided it uses the current date & time.

### Parameters

| Name | Type | Description |
| --- | --- | --- |
| `pDate` | Date |  new Date() A date object |

### Returns

The start date of a day Type Date Example Returns the start date of a given day.

### Simple Example

```javascript
var dayStartDate = apex.date.startOfDay( myDate );
// output: "2021-JUN-29 24:00:00" (as date object)
```

## subtract

Signature: `(static) subtract (pDate opt , pAmount, pUnit opt ) &rarr; {Date}`

### Purpose

Subtract a certain amount of time of an existing date. This function returns the modified date object as well as altering the original object. If the given date object should not be manipulated use apex.date.clone before calling this function. If pDate is not provided it uses the current date & time.

### Parameters

| Name | Type | Description |
| --- | --- | --- |
| `pDate` | Date |  new Date() A date object |
| `pAmount` | number |   The amount to subtract |
| `pUnit` | string |  apex.date.UNIT.MILLISECOND The unit to use - apex.date.UNIT constant |

### Returns

The modified date object Type Date Example Returns the modified date object.

### Simple Example

```javascript
var myDate = new Date( "2021-06-20" )
myDate = apex.date.subtract( myDate, 2, apex.date.UNIT.DAY );
// myDate is now "2021-06-19"
```

## toISOString

Signature: `(static) toISOString (pDate opt ) &rarr; {string}`

### Purpose

Return the ISO format string (ISO 8601) without timezone information of a given date object. If pDate is not provided it uses the current date & time.

### Parameters

| Name | Type | Description |
| --- | --- | --- |
| `pDate` | Date |  new Date() A date object |

### Returns

The formatted date string Type string Example Returns date as ISO format string.

### Simple Example

```javascript
var isoFormat = apex.date.toISOString( myDate );
// output: "2021-06-15T14:30:00"
```

## weekOfMonth

Signature: `(static) weekOfMonth (pDate opt ) &rarr; {number}`

### Purpose

Return the week number of a month of a given date object. If pDate is not provided it uses the current date & time.

### Parameters

| Name | Type | Description |
| --- | --- | --- |
| `pDate` | Date |  new Date() A date object |

### Returns

The week number Type number Example Returns the week number of given month. Documentation generated by JSDoc 4.0.5 on Fri Apr 17 2026 17:55:51 GMT+0000 (Coordinated Universal Time) Oracle APEX Release 26.1, JavaScript API Reference Copyright &copy; 2003, 2026, Oracle and/or its affiliates. All rights reserved.

### Simple Example

```javascript
var weekNumber = apex.date.weekOfMonth( myDate );
```

## Notes

- Run APEX JavaScript APIs from an APEX page where the `apex` namespace is loaded.
- Treat client-side values as untrusted when they reach PL/SQL.
- Prefer documented APIs over direct DOM or internal widget state when interacting with APEX components.
