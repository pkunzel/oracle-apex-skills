# apex.locale

Source: [Oracle APEX 26.1 JavaScript API Reference](https://docs.oracle.com/en/database/oracle/apex/26.1/aexjs/apex.locale.html)

Status: curated first-pass reference.

## Purpose

`apex.locale` exposes client-side locale information and number formatting/parsing helpers that match APEX and database-style format expectations. Use it when JavaScript must display, parse, or adapt UI text based on the current APEX locale.

Server-side validation still matters. Client-side parsing is helpful for UX, not a replacement for database validation.

## When To Use

Use `apex.locale` when:

- JavaScript must format a number for the current user's locale.
- A page needs to parse localized numeric input before client-side calculations.
- A component needs the current language, day names, month names, date format, or separators.
- Locale resources must be loaded before formatting or parsing.

## Curated Patterns

Format a number for display:

```javascript
const total = Number( $v( "P10_TOTAL" ) || 0 );

$s( "P10_TOTAL_DISPLAY",
    apex.locale.formatNumber( total, "FML999G999G990D00" )
);
```

Use compact formatting for badges, chart labels, and dashboards:

```javascript
const count = Number( $v( "P10_TOKEN_COUNT" ) || 0 );

$( "#tokenBadge" ).text(
    apex.locale.formatCompactNumber( count, {
        maximumFractionDigits: 1
    } )
);
```

Parse localized input for client-side feedback:

```javascript
const budget = apex.locale.toNumber( $v( "P10_BUDGET" ), "999G999G990D00" );

if ( Number.isNaN( budget ) ) {
    apex.message.showErrors( [ {
        type: "error",
        location: "inline",
        pageItem: "P10_BUDGET",
        message: apex.lang.getMessage( "INVALID_NUMBER" ),
        unsafe: false
    } ] );
} else {
    $s( "P10_BUDGET_NORMALIZED", String( budget ) );
}
```

Wait for locale resources:

```javascript
apex.locale.resourcesLoaded( function() {
    $( "#languageCode" ).text( apex.locale.getLanguage() );
    $( "#dateMask" ).text( apex.locale.getDateFormat() );
} );
```

Read locale metadata:

```javascript
const separators = {
    decimal: apex.locale.getDecimalSeparator(),
    group: apex.locale.getGroupSeparator()
};

const monthNames = apex.locale.getMonthNames();
```

## Safety Guidance

- Use `toNumber` for client-side convenience, then validate and convert again in PL/SQL.
- Expect `toNumber` to return `NaN` for invalid or too-precise values.
- Use `resourcesLoaded` before calling functions that depend on loaded locale data.
- Do not use locale-formatted strings as canonical values for storage or API calls.
- Pair localized text with `apex.lang` and localized numbers with `apex.locale`.

## Generated API Surface

| Member | Parameters | Returns |
| --- | --- | --- |
| `formatCompactNumber` | `pValue`, `pOptions` | The compact formatted number. Type string Examples Format the large number 123456789.12 in a compact format and display it in an alert message. Format the same large number 123456789.12 in a compact format using an option to not include any fraction digits. |
| `formatNumber` | `pValue`, `pFormat`, `pOptions` | The formatted number. Type string Example Format the number 1234.569 with locale specific currency symbol and 2 decimal places. |
| `getAbbrevDayNames` | None documented | Array of abbreviated day names. For example ["Sun","Mon","Tue","Wed",...,"Sat"] Type array |
| `getAbbrevMonthNames` | None documented | Array of abbreviated month names. For example ["Jan","Feb","Mar", ..., "Dec"] Type array |
| `getCurrency` | None documented | Type string |
| `getDLDateFormat` | None documented | DL Date format mask. For example "fmDay, Month fmdd, yyyy" or "fmDay, dd. Month yyyy" Type string |
| `getDSDateFormat` | None documented | DS Date format mask. For example "fmMM/DD/RRRR" or "DD.MM.RRRR" Type string |
| `getDateFormat` | None documented | Date format mask. For example "YYYY/MM/DD" or "DD.MM.YYYY" Type string |
| `getDayNames` | None documented | Array of day names. For example ["Sunday","Monday","Tuesday","Wednesday", ...,"Saturday"] Type array |
| `getDecimalSeparator` | None documented | The decimal separator. For example "." (US) or "," (Germany). Type string |
| `getDualCurrency` | None documented | Type string |
| `getGroupSeparator` | None documented | The group separator. For example "," (US) or "." (Germany). Type string |
| `getISOCurrency` | None documented | Type string |
| `getLanguage` | None documented | current language. For example "en", "de", "en-US", ... Type string |
| `getMonthNames` | None documented | Array of month names. For example ["January","February","March", ...,"December"] Type array |
| `resourcesLoaded` | `pCallback` | A promise object. The promise is resolved when the resources have been loaded. Type Promise Examples Wait until the resources are loaded before formatting a number. This is the same as the previous example except it uses the returned promise. This checks to see if the resources are loaded. |
| `toNumber` | `pValue`, `pFormat` | the converted number or NaN if pValue cannot be converted to a number Type number Examples In a locale that uses comma as the group separator, period as the decimal separator and $ as the locale currency symbol the following all result in the same number 1234.56. In a locale that uses period as the group separator, comma as the decimal separator and € as the locale currency symbol the following all result in the same number 1234.56. Documentation generated by JSDoc 4.0.5 on Fri Apr 17 2026 17:55:51 GMT+0000 (Coordinated Universal Time) Oracle APEX Release 26.1, JavaScript API Reference Copyright &copy; 2003, 2026, Oracle and/or its affiliates. All rights reserved. |

## formatCompactNumber

Signature: `(static) formatCompactNumber (pValue, pOptions opt ) &rarr; {string}`

### Purpose

Formats the given number in a compact, locale specific way. For example in the US English locale the number 123400 would be formatted as "123.4K" and 1234000 as "1.23M".

### Parameters

| Name | Type | Description |
| --- | --- | --- |
| `pValue` | number |  The number value to be formatted. |
| `pOptions` | object |  An options object that affect the way the number is formatted. All properties optional. Properties Name Type Description |

### Option/Object Properties

| Name | Type | Description |
| --- | --- | --- |
| `maximumFractionDigits` | number | The maximum number of digits to display after the decimal point. Default 2. |
| `minimumFractionDigits` | number | The minimum number of digits to display after the decimal point. Default 0. |
| `minimumIntegerDigits` | number | The minimum number of integer digits to display before the decimal point. Default 1. |
| `roundingMode` | string | One of 'DEFAULT', 'HALF_UP', 'HALF_DOWN', 'HALF_EVEN', 'UP', 'DOWN', 'CEILING', 'FLOOR'. The default is "DEFAULT". |
| `separators` | string | The characters to use for the decimal and group separator. The default is to use the appropriate locale specific characters. Properties Name Type Description |
| `decimal` | string | The decimal separator character. |
| `group` | string | The group separator character. |

### Returns

The compact formatted number. Type string Examples Format the large number 123456789.12 in a compact format and display it in an alert message. Format the same large number 123456789.12 in a compact format using an option to not include any fraction digits.

### Simple Example

```javascript
apex.locale.formatCompactNumber(
    "Example",
    {}
);
```

## formatNumber

Signature: `(static) formatNumber (pValue, pFormat opt , pOptions opt ) &rarr; {string}`

### Purpose

Formats a number using a database format model similar to the SQL TO_CHAR( number ) function.

### Parameters

| Name | Type | Description |
| --- | --- | --- |
| `pValue` | number |  The number to format. |
| `pFormat` | string |  The database format model. The format elements RN, TM, and EEEE are not supported. If the format is not given the number is returned as a string with only the decimal separator replaced with the locale specific decimal separator. |
| `pOptions` | object |  Options to override default locale settings. All properties optional. Properties Name Type Description |

### Option/Object Properties

| Name | Type | Description |
| --- | --- | --- |
| `NLS_NUMERIC_CHARACTERS` | string | A string where the first letter is the decimal separator and the second letter is the group separator |
| `NLS_CURRENCY` | string | The local currency string. |
| `NLS_DUAL_CURRENCY` | string | The dual currency string. |
| `NLS_ISO_CURRENCY` | string | The ISO currency string. Note: This option differs from the corresponding database parameter. It is the ISO currency string such as "CAD" rather than the territory name such as "CANADA". |

### Returns

The formatted number. Type string Example Format the number 1234.569 with locale specific currency symbol and 2 decimal places.

### Simple Example

```javascript
apex.locale.formatNumber(
    "Example",
    null,
    {}
);
```

## getAbbrevDayNames

Signature: `(static) getAbbrevDayNames () &rarr; {array}`

### Purpose

Use `getAbbrevDayNames` as documented by the `apex.locale` module.

### Returns

Array of abbreviated day names. For example ["Sun","Mon","Tue","Wed",...,"Sat"] Type array

### Simple Example

```javascript
apex.locale.getAbbrevDayNames();
```

## getAbbrevMonthNames

Signature: `(static) getAbbrevMonthNames () &rarr; {array}`

### Purpose

Use `getAbbrevMonthNames` as documented by the `apex.locale` module.

### Returns

Array of abbreviated month names. For example ["Jan","Feb","Mar", ..., "Dec"] Type array

### Simple Example

```javascript
apex.locale.getAbbrevMonthNames();
```

## getCurrency

Signature: `(static) getCurrency () &rarr; {string}`

### Purpose

Use `getCurrency` as documented by the `apex.locale` module.

### Returns

Type string

### Simple Example

```javascript
apex.locale.getCurrency();
```

## getDLDateFormat

Signature: `(static) getDLDateFormat () &rarr; {string}`

### Purpose

Use `getDLDateFormat` as documented by the `apex.locale` module.

### Returns

DL Date format mask. For example "fmDay, Month fmdd, yyyy" or "fmDay, dd. Month yyyy" Type string

### Simple Example

```javascript
apex.locale.getDLDateFormat();
```

## getDSDateFormat

Signature: `(static) getDSDateFormat () &rarr; {string}`

### Purpose

Use `getDSDateFormat` as documented by the `apex.locale` module.

### Returns

DS Date format mask. For example "fmMM/DD/RRRR" or "DD.MM.RRRR" Type string

### Simple Example

```javascript
apex.locale.getDSDateFormat();
```

## getDateFormat

Signature: `(static) getDateFormat () &rarr; {string}`

### Purpose

Use `getDateFormat` as documented by the `apex.locale` module.

### Returns

Date format mask. For example "YYYY/MM/DD" or "DD.MM.YYYY" Type string

### Simple Example

```javascript
apex.locale.getDateFormat();
```

## getDayNames

Signature: `(static) getDayNames () &rarr; {array}`

### Purpose

Use `getDayNames` as documented by the `apex.locale` module.

### Returns

Array of day names. For example ["Sunday","Monday","Tuesday","Wednesday", ...,"Saturday"] Type array

### Simple Example

```javascript
apex.locale.getDayNames();
```

## getDecimalSeparator

Signature: `(static) getDecimalSeparator () &rarr; {string}`

### Purpose

Use `getDecimalSeparator` as documented by the `apex.locale` module.

### Returns

The decimal separator. For example "." (US) or "," (Germany). Type string

### Simple Example

```javascript
apex.locale.getDecimalSeparator();
```

## getDualCurrency

Signature: `(static) getDualCurrency () &rarr; {string}`

### Purpose

Use `getDualCurrency` as documented by the `apex.locale` module.

### Returns

Type string

### Simple Example

```javascript
apex.locale.getDualCurrency();
```

## getGroupSeparator

Signature: `(static) getGroupSeparator () &rarr; {string}`

### Purpose

Use `getGroupSeparator` as documented by the `apex.locale` module.

### Returns

The group separator. For example "," (US) or "." (Germany). Type string

### Simple Example

```javascript
apex.locale.getGroupSeparator();
```

## getISOCurrency

Signature: `(static) getISOCurrency () &rarr; {string}`

### Purpose

Use `getISOCurrency` as documented by the `apex.locale` module.

### Returns

Type string

### Simple Example

```javascript
apex.locale.getISOCurrency();
```

## getLanguage

Signature: `(static) getLanguage () &rarr; {string}`

### Purpose

Use `getLanguage` as documented by the `apex.locale` module.

### Returns

current language. For example "en", "de", "en-US", ... Type string

### Simple Example

```javascript
apex.locale.getLanguage();
```

## getMonthNames

Signature: `(static) getMonthNames () &rarr; {array}`

### Purpose

Use `getMonthNames` as documented by the `apex.locale` module.

### Returns

Array of month names. For example ["January","February","March", ...,"December"] Type array

### Simple Example

```javascript
apex.locale.getMonthNames();
```

## resourcesLoaded

Signature: `(static) resourcesLoaded (pCallback opt ) &rarr; {Promise}`

### Purpose

Used to determine if the resources needed by some of the apex.locale functions have been loaded.

### Parameters

| Name | Type | Description |
| --- | --- | --- |
| `pCallback` | function |  A Function to call when the resources have been loaded. If the resources are already loaded the function is called right away. |

### Returns

A promise object. The promise is resolved when the resources have been loaded. Type Promise Examples Wait until the resources are loaded before formatting a number. This is the same as the previous example except it uses the returned promise. This checks to see if the resources are loaded.

### Simple Example

```javascript
apex.locale.resourcesLoaded(
    function() {}
);
```

## toNumber

Signature: `(static) toNumber (pValue, pFormat opt ) &rarr; {number}`

### Purpose

Convert the given string value into a number. It does not strictly validate against the given format but will strip potential format characters from the number so it can be converted to a number. The intention is to allow natural human data entry of numbers. The locale decimal and group separators are considered. If the number exceeds the precision of a JavaScript number (IEEE 754) then NaN is returned unless the loss of precision is to the right of the decimal point and any decimal places specified in the format mask.

### Parameters

| Name | Type | Description |
| --- | --- | --- |
| `pValue` | string |  The potentially formatted or partially formatted number string to convert. |
| `pFormat` | string |  The optional expected format of the value to convert. This is a database format model. The format elements V, RN, TM, and EEEE are not supported and will be ignored. |

### Returns

the converted number or NaN if pValue cannot be converted to a number Type number Examples In a locale that uses comma as the group separator, period as the decimal separator and $ as the locale currency symbol the following all result in the same number 1234.56. In a locale that uses period as the group separator, comma as the decimal separator and € as the locale currency symbol the following all result in the same number 1234.56. Documentation generated by JSDoc 4.0.5 on Fri Apr 17 2026 17:55:51 GMT+0000 (Coordinated Universal Time) Oracle APEX Release 26.1, JavaScript API Reference Copyright &copy; 2003, 2026, Oracle and/or its affiliates. All rights reserved.

### Simple Example

```javascript
apex.locale.toNumber(
    "Example",
    null
);
```

## Notes

- Run APEX JavaScript APIs from an APEX page where the `apex` namespace is loaded.
- Treat client-side values as untrusted when they reach PL/SQL.
- Prefer documented APIs over direct DOM or internal widget state when interacting with APEX components.
