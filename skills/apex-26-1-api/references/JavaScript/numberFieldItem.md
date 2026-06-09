# numberFieldItem

Source: [Oracle APEX 26.1 JavaScript API Reference](https://docs.oracle.com/en/database/oracle/apex/26.1/aexjs/numberFieldItem.html)

Status: curated first-pass reference.

## Purpose

`numberFieldItem` is the item interface specialization for APEX Number Field items. It behaves like the standard [item](item.md) interface and adds `getNativeValue`, which returns the item value as a JavaScript number.

## When To Use

Use it via `apex.item( "Pxx_NUMBER_ITEM" )` when client-side code needs numeric math, HTML5 validity checks, display value behavior, or normal item methods.

## API Surface

| Area | Members |
| --- | --- |
| Standard item identity | `id`, `node`, `element`, `item_type`, `value` |
| Value | `getValue`, `setValue`, `displayValueFor`, `hasDisplayValue`, `isEmpty`, `isChanged` |
| Number-specific | `getNativeValue` |
| Validation | `getValidity`, `getValidationMessage` |
| UI | `show`, `hide`, `enable`, `disable`, `isDisabled`, `setFocus`, `setStyle` |

## Numeric Calculation Example

Assuming page items `P10_SUBTOTAL`, `P10_TAX`, and `P10_TOTAL` are Number Field items:

```javascript
const subtotal = apex.item( "P10_SUBTOTAL" ).getNativeValue();
const tax = apex.item( "P10_TAX" ).getNativeValue();

if ( Number.isFinite( subtotal ) && Number.isFinite( tax ) ) {
    apex.item( "P10_TOTAL" ).setValue( String( subtotal + tax ) );
}
```

## Validation Example

```javascript
const item = apex.item( "P10_DISCOUNT" );
const validity = item.getValidity();

if ( !validity.valid ) {
    apex.message.alert( item.getValidationMessage( "Discount" ) );
    item.setFocus();
}
```

## Change Handling Example

```javascript
apex.jQuery( "#P10_QUANTITY,#P10_UNIT_PRICE" ).on( "change", function() {
    const qty = apex.item( "P10_QUANTITY" ).getNativeValue();
    const price = apex.item( "P10_UNIT_PRICE" ).getNativeValue();

    if ( Number.isFinite( qty ) && Number.isFinite( price ) ) {
        apex.item( "P10_LINE_TOTAL" ).setValue( String( qty * price ) );
    }
} );
```

## Notes

- `getValue()` returns a string; use `getNativeValue()` for JavaScript number math.
- `getNativeValue()` returns `NaN` when the item value is not a valid number.
- Server-side validation is still required; client validation is for usability.
- Use `setValue( value, null, true )` when suppressing the change event is intentional.

## Related APIs

- [item](item.md)
- [apex.item](apex.item.md)
- [apex.locale](apex.locale.md)
