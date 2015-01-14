# Paragraph

Create text paragraphs

## Block usage

``` js
{ block : 'paragraph', content : 'Default paragraph' },
{ block : 'paragraph', mark : 'nb', content : 'Paragraph with NB' }
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
        <td>mark</td>
        <td>
            <code>String</code>
        </td>
        <td>Marker for paragraph. Ex: <strong>NB</strong></td>
    </tr>
</table>

## Modifiers of a block

### _lead

Leader paragraph for articles
