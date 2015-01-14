# Figure

The `figure` block specifies self-contained content, like illustrations, diagrams, photos, code listings, etc.
For more info read [W3C specs](http://www.w3schools.com/tags/tag_figure.asp).

## Block usage

``` js
{
    block : 'figure',
    content : []
},
{
    block : 'figure',
    caption : 'Description',
    content : []
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
        <td>caption</td>
        <td>
            <code>String</code>
        </td>
        <td>Caption for figure as <figcaption> tag.</td>
    </tr>
</table>
