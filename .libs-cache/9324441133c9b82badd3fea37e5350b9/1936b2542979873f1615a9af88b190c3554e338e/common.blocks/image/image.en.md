# Image

This block extend `image` block from [bem-components](http://bem.info/libs/bem-components/v2).

## Block usage

``` js
{
    block : 'image',
    url : 'https://raw.githubusercontent.com/bem/bem-identity/master/sign/sign.png'
},
{
    block : 'image',
    url : 'https://raw.githubusercontent.com/bem/bem-identity/master/sign/sign.png',
    mods : { wrap : true },
    caption : 'BEM logo from GitHub'
},
{
    block : 'image',
    url : 'https://raw.githubusercontent.com/bem/bem-identity/master/sign/sign.png',
    mods : { wrap : true },
    caption : 'BEM logo from GitHub',
    width : '60px',
    height : '50px',
    alt : 'BEM'
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
        <td>Caption for image. Will be translated to <code>figure</code> caption and image title .</td>
    </tr>
    <tr>
        <td>url</td>
        <td>
            <code>String</code>
        </td>
        <td>Image source url.</td>
    </tr>
</table>

## Modifiers of a block

### _wrap

Block with magic will be wrapped to block `figure` for pretty HTML5 semantic.
Read [original docs](http://bem.info/libs/bem-components/v2/desktop/image) for `image` block.
