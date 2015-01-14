# List

Block `list` need for create ordered and unordered lists.

## Block usage

``` js
{
    block : 'list',
    items: [ 'item 1', 'item 2' ]
}
```

## Nested lists

``` js
{
    block : 'list',
    items : [
        'item 1',
        [
            'item 2',
            {
                block : 'list',
                items : [ 'nested item 1', 'nested item 2' ]
            }
        ]
    ]
}
```

## Custom fields of a block

The following custom fields could be specified in BEMJSON declaration of the block:

<table>
    <tr>
        <th>Custom field name</th>
        <th>Type</th>
        <th>Description</th>
    </tr>
    <tr>
        <td>items</td>
        <td>
            <code>Array</code>
        </td>
        <td>Array of list items. Item can be string, object or array.</td>
    </tr>
</table>

## Modifiers of a block

### _type

- ordered list (list_type_ordered)

``` js
{
    block : 'list',
    mods: { type : 'ordered' },
    items: [ 'ordered item 1', 'ordered item 2' ]
}
```
