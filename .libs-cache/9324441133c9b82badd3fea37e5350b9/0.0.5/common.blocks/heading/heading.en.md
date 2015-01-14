# Heading

Block `heading` need for create h1, h2, h3, h4 tags.

## Block usage

``` js
{ block : 'heading', lvl : 1, content : 'Level 1' },
{ block : 'heading', lvl : 2, content : 'Level 2' },
{ block : 'heading', lvl : 3, content : 'Level 3' },
{ block : 'heading', lvl : 4, content : 'Level 4' }
```

You can find all settings for styling in 'variables' block.

## Custom fields of a block

The following custom fields could be specified in BEMJSON declaration of the block:

<table>
    <tr>
        <th>Custom field name</th>
        <th>Type</th>
        <th>Description</th>
    </tr>
    <tr>
        <td>lvl</td>
        <td>
            <code>Integer</code>
        </td>
        <td>Heading level. Use on of 1, 2, 3 or 4.</td>
    </tr>
</table>
