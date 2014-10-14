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

### _sal

Align columns to left.

### _sac

Align columns to center.

### _sar

Align columns to right.

### _svat

Align columns to top.

### _svam

Align columns to middle.

### _svab

Align columns to bottom.

### _no-flexbox

Will be auto added to `row` block if browser don't support flexboxes and it create
tables fallback.

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

### _sw, _mw, _lw

Width on small, medium and large devices. Int from 1 to columns count. Zero make this
column invisible on this device width. See and override it in `variables` block.

``` js
{
    block : 'row',
    content : [
        {
            elem : 'col',
            mods : { sw : 2, mw : 4, lw : 12 },
            content : [

            ]
        },
        {
            elem : 'col',
            mods : { sw : 10, mw : 8, lw : 0 },
            content : [

            ]
        }
    ]
}
```

### _so, _mo, _lo

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

### _s, _m, _l

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

### _sof

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

### _sol

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
