# Non-namespace APIs

Source: [Oracle APEX 26.1 JavaScript API Reference](https://docs.oracle.com/en/database/oracle/apex/26.1/aexjs/global.html)

Status: curated first-pass reference.

## Purpose

Non-namespace APIs are legacy global helpers such as `$v`, `$s`, `$x`, `$nvl`, `$f_*`, `$dom_*`, and `html_*`. They remain documented for compatibility and appear in older APEX code.

## When To Use

Use them mainly when maintaining legacy code or reading older examples. For new code, prefer namespaced APIs such as [apex.item](apex.item.md), [apex.jQuery](apex.md), [apex.util](apex.util.md), [apex.server](apex.server.md), and [apex.message](apex.message.md).

## API Surface

| Area | Legacy globals |
| --- | --- |
| Item values | `$v`, `$v2`, `$s`, `$v_Array`, `$v_Upper`, `$x_Value` |
| DOM lookup/show/hide | `$x`, `$x_Show`, `$x_Hide`, `$x_Toggle`, `$x_ByClass`, `$x_Class`, `$x_FormItems`, `$x_Remove` |
| Form helpers | `$f_ReturnChecked`, `$f_CheckAll`, `$f_SelectValue`, `$f_SelectedOptions`, `$f_ValuesToArray`, `$f_get_emptys` |
| DOM creation | `$dom_AddInput`, `$dom_AddTag`, `$dom_MakeParent`, `$tr_AddTD`, `$tr_AddTH` |
| Utility | `$nvl`, `$u_Carray`, `$u_Narray`, `html_RemoveAllChildren`, `html_SetSelectValue` |

## Legacy Read/Write Example

```javascript
const oldValue = $v( "P10_STATUS" );
$s( "P10_STATUS", "APPROVED" );
```

Modern equivalent:

```javascript
const oldValue = apex.item( "P10_STATUS" ).getValue();
apex.item( "P10_STATUS" ).setValue( "APPROVED" );
```

## Legacy Show/Hide Example

```javascript
$x_Hide( "P10_INTERNAL_NOTE" );
$x_Show( "P10_PUBLIC_NOTE" );
```

Modern equivalent:

```javascript
apex.item( "P10_INTERNAL_NOTE" ).hide();
apex.item( "P10_PUBLIC_NOTE" ).show();
```

## Checkbox Array Example

```javascript
const checked = $f_ReturnChecked( "f01" );

if ( checked.length > 0 ) {
    apex.debug.info( checked );
}
```

## Notes

- These helpers operate on DOM IDs/elements and can bypass item plug-in behavior.
- `$s` and `apex.item(...).setValue` do not update session state until submit/Ajax save.
- Prefer namespaced APIs for clearer intent, plug-in compatibility, and future maintenance.
- When modernizing, replace `$v`/`$s` first because they are the most common.

## Related APIs

- [apex.item](apex.item.md)
- [item](item.md)
- [apex.util](apex.util.md)
- [apex.server](apex.server.md)
