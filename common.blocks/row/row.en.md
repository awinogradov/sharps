# Row

Container for grid columns. It's like <tr> tag ;-)

## Block usage

``` js
{
    block : 'row',
    content : [

    ]
}
```

## Modifiers of a block

### _reverse

Reverse columns ordering.

### _sal, _mal, _lal, _xlal, _xxlal

Align columns to left.

### _sac, _mac, _lac, _xlac, _xxlac

Align columns to center.

### _sar, _mar, _lar, _xlar, _xxlar

Align columns to right.

### _svat, _mvat, _lvat, _xlvat, _xxlvat

Align columns to top.

### _svam, _mvam, _lvam, _xlvam, _xxlvam

Align columns to middle.

### _svab, _mvab, _lvab, _xlvab, _xxlvab

Align columns to bottom.

### _no-flexbox

Will be auto added to `row` block if browser don't support flexboxes and it create
tables fallback.

### _type

***js***

Add JavaScript methods for manipulating with cols.

## Elements of a block

### __col

Column element of row.

## Element usage

``` js
{
    block : 'row',
    content : [
        {
            elem : 'col',
            content : [

            ]
        }
    ]
}
```

## Modifiers of a __col element

### _sw, _mw, _lw, _xlw, _xxlw

Width on small, medium and large devices. Int from 1 to columns count. Zero make this
column invisible on this device width. See and override it in `variables` block.

``` js
{
    block : 'row',
    content : [
        {
            elem : 'col',
            mods : { sw : 2, mw : 4, lw : 12, xl : 12, xxl : 12 },
            content : [

            ]
        },
        {
            elem : 'col',
            mods : { sw : 10, mw : 8, lw : 0, xl : 0 },
            content : [

            ]
        }
    ]
}
```

### _so, _mo, _lo, _xlo, _xxlo

Offset on small, medium and large devices. Int from 1 to columns count.
See and override it in `variables` block.

``` js
{
    block : 'row',
    content : [
        {
            elem : 'col',
            mods : { so : 2, mo : 3, lo : 1, mw : 3 },
            content : [

            ]
        }
    ]
}
```

### _s, _m, _l, _xl, _xxl

Auto width on small, medium and large devices.

``` js
{
    block : 'row',
    content : [
        {
            elem : 'col',
            mods : { s : true },
            content : [

            ]
        }
    ]
}
```

### _sof, _mof, _lof, _xlof, _xxlof

Display column as first.

``` js
{
    block : 'row',
    content : [
        {
            elem : 'col',
            mods : { sof : true },
            content : [

            ]
        }
    ]
}
```

### _sol, _mol, _lol, _xlol, _xxlol

Display column as last.

``` js
{
    block : 'row',
    content : [
        {
            elem : 'col',
            mods : { sol : true },
            content : [

            ]
        }
    ]
}
```
